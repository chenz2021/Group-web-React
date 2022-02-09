import React, { useState } from "react";
import { Form, Input, Button } from "semantic-ui-react";
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faCheckSquare } from "@fortawesome/free-solid-svg-icons";
import { useAuth0 } from '@auth0/auth0-react';

library.add(faCheckSquare);

export const PublicationForm = ({ onNewPublication }) => {
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [year, setYear] = useState("");
    const [publisher, setPublisher] = useState("");
    const [link, setLink] = useState("");
    const [cover, setCover] = useState("");
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
                const publication = { title, author, year, publisher, link, cover };
                const response = await fetch("http://localhost:5000/publications", {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                  },
                  body: JSON.stringify(publication)
                });
    
                if (response.ok) {
                  console.log("response worked!");
                  onNewPublication(publication);
                  setTitle("");
                  setAuthor("");
                  setYear("");
                  setPublisher("");
                  setLink("");
                  setCover("")
                }
            }
          },
          {
            label: 'Cancel',
          }
        ]
      });
    }

    return (
        <Form >
            <Form.Field>
            <Input
              placeholder="Title"
              value={title}
              onChange={e => setTitle(e.target.value)}
            />
          </Form.Field>
          <Form.Field>
            <Input
              placeholder="author"
              value={author}
              onChange={e => setAuthor(e.target.value)}
            />
          </Form.Field>
          <Form.Field>
            <Input
              placeholder="Year"
              value={year}
              onChange={e => setYear(e.target.value)}
            />
          </Form.Field>
          <Form.Field>
            <Input
              placeholder="Journal"
              value={publisher}
              onChange={e => setPublisher(e.target.value)}
            />
          </Form.Field>
          <Form.Field>
            <Input
              placeholder="Link"
              value={link}
              onChange={e => setLink(e.target.value)}
            />
          </Form.Field>
          <Form.Field>
            <Input
              placeholder="Cover article?"
              value={cover}
              onChange={e => setCover(e.target.value)}
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
