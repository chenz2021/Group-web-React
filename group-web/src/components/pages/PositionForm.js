import React, { useState } from "react";
import { Form, Input, Button } from "semantic-ui-react";
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faCheckSquare } from "@fortawesome/free-solid-svg-icons";
import { useAuth0 } from '@auth0/auth0-react';

library.add(faCheckSquare);

export const PositionForm = ({ onNewPosition }) => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const { getAccessTokenSilently } = useAuth0();

    function handleSubmit() {
      confirmAlert({
        title: 'Submit your post',
        message: 'Are you sure?',
        buttons: [
          {
            label: 'Yes, submit',
            onClick: async () => {
                const token = await getAccessTokenSilently();
                const position = { title, description };
                console.log(token)
                const response = await fetch("http://localhost:5000/opportunities", {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                  },
                  body: JSON.stringify(position)
                });
    
                if (response.ok) {
                  console.log("response worked!");
                  onNewPosition(position);
                  setTitle("");
                  setDescription("");
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
        <Form >
          <Form.Field>
          <textarea 
          rows={6}
          placeholder="Job Description"
              value={description}
              onChange={e => setDescription(e.target.value)}></textarea>
          </Form.Field>
          <Form.Field>
            <Input
              placeholder="Title"
              value={title}
              onChange={e => setTitle(e.target.value)}
            />
          </Form.Field>
          <Form.Field>
            
            <Button
              onClick={handleSubmit}
            >
              submit
            </Button>
          </Form.Field>
        </Form>
      );
    }
