import React from "react";
import { List, Container } from "semantic-ui-react";
import '../../App.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faDeleteLeft } from "@fortawesome/free-solid-svg-icons";
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
import { useAuth0 } from '@auth0/auth0-react';
import { useState } from "react";


library.add(faDeleteLeft);


export const PublicationList = ({ children }) => {
  const { getAccessTokenSilently } = useAuth0();
  const [errorMessage, setErrorMessage] = useState(false)

  function handleDelete(id) {
    confirmAlert({
      title: 'Delete your post',
      message: 'Are you sure?',
      buttons: [
        {
          label: 'Yes, delete',
          onClick: async () => {
              const token = await getAccessTokenSilently();        
              const response = await fetch("http://localhost:5000/publications/" + id, {
                method: "DELETE",
                headers: {
                  "Content-Type": "application/json",
                  Authorization: `Bearer ${token}`
                },
                
              }).catch(() => {
                setErrorMessage(true)
              });;
  
              if (response.ok) {
                console.log("response worked!");
                return response.message
              }
          }
        },
        {
          label: 'Cancel',
          // onClick: () => alert('cancelled')
        }
      ]
    });
  }


  return (
    <Container style={{ marginTop: 40 }}>
    <List className="listView">
      {children.map(publication => {
        return (
          <List.Item key={publication.id}>
            { publication.title }, { publication.author }, { publication.year },
            { publication.publisher }, {publication.link}, {publication.cover}             
               <FontAwesomeIcon icon="fa-solid fa-delete-left" onClick={()=>handleDelete(publication.id)}/>            
          </List.Item>      
        );   
      })}
    
            {errorMessage && (
               confirmAlert({
                title: 'Not Authorized',
                message: 'Please log in',})
              
            )}
          
    </List>
    </Container>
    
  );
};