import React from "react";
import { List, Container } from "semantic-ui-react";
import '../../App.css';
import axios from 'axios';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faDeleteLeft } from "@fortawesome/free-solid-svg-icons";
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css

library.add(faDeleteLeft);

export const Positions = ({ positions }) => {

  function handleDelete(id) {
    confirmAlert({
      title: 'Delete your post',
      message: 'Are you sure?',
      buttons: [
        {
          label: 'Yes, delete',
          onClick: () => {
            axios.delete(`http://localhost:5000/opportunities/${id}`)
            .then(res => {
              console.log(res.data)
            }).catch(err => {
              console.warn(err.warn)
            });
          }
        },
        {
          label: 'Cancel',
          // onClick: () => alert('cancelled')
        }
      ]
    });

    
  };

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