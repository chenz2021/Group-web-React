import React from "react";
import { Container, List, Header } from "semantic-ui-react";
import '../../App.css';

export const Positions = ({ positions }) => {
  return (
    <List className="listView">
      {positions.map(position => {
        return (
          <List.Item key={position.id}>
            <Header> { position.title}, { position.description }, { position.posted_at.slice(7,17) } </Header>
          </List.Item>
        );
      })}
    
    </List>
    
  );
};