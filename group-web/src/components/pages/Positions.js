import React from "react";
import { List, Container } from "semantic-ui-react";
import '../../App.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faDeleteLeft } from "@fortawesome/free-solid-svg-icons";
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
import { useAuth0 } from '@auth0/auth0-react';

library.add(faDeleteLeft);


export const Positions = ({ positions }) => {
  const { getAccessTokenSilently } = useAuth0();
  function handleDelete(id) {
    confirmAlert({
      title: 'Delete your post',
      message: 'Are you sure?',
      buttons: [
        {
          label: 'Yes, delete',
          onClick: async () => {
            const token = await getAccessTokenSilently();
            const response = await fetch("http://localhost:5000/opportunities/" + id, {
              method: "DELETE",
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
              },
              
            });

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
      {positions.map(position => {
        return (
          <List.Item key={position.id}>
            { position.title }, { position.description }, { Date(position.posted_at).toString().slice(3,15) }              
               <FontAwesomeIcon icon="fa-solid fa-delete-left" onClick={()=>handleDelete(position.id)}/>            
          </List.Item>      
        );   
      })}
    
    </List>
    </Container>
    
  );
};