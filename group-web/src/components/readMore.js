import React, { useState } from "react";
import { Button } from "semantic-ui-react";
import "./EmployeeCard.css"
  
export const ReadMore = ({ children }) => {
  const text = children;
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
  return (
    <p className="text">
      {isReadMore ? text.slice(0, 250) : text}
      <span onClick={toggleReadMore} className="read-or-hide">
        {isReadMore ? 
        <Button>...Read More</Button> : 
        <Button>Show Less</Button>}
      </span>
    </p>
  );
};