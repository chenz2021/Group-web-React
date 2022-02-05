import React, { useState } from "react";
import { Form, Input, Button, TextArea } from "semantic-ui-react";

export const PositionForm = ({ onNewPosition }) => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
  
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
              onClick={async () => {
                const position = { title, description };
                const response = await fetch("http://localhost:5000/opportunities", {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json"
                  },
                  body: JSON.stringify(position)
                });
    
                if (response.ok) {
                  console.log("response worked!");
                  onNewPosition(position);
                  setTitle("");
                  setDescription("");
                }
              }}
            >
              submit
            </Button>
          </Form.Field>
        </Form>
      );
    };