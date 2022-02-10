import React, { useEffect, useState } from "react";
import "../../App.css";
import Footer from "../footer";
import ChildAccordion from "./ChildAccordion";
import Scroll from "../Scroll";

export default function Opportunities() {
  const [positions, setPositions] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/opportunities").then(response =>
      response.json().then(data => {  
        setPositions(data.Opportunity);
      })
        );
    },[]);
  
  return (
    <>
      <Scroll showBelow={250}/>
      <div className="cards">  
        <h1>Opportunities</h1>
        <div className='cards__container'>
          <div className='cards__wrapper'>  
          {positions.map(position =>{
            return (<>
              <ChildAccordion child={position}/>
            </>)
          })} 
          </div>
        </div>
      </div>
    <Footer />
    </>  
  );
}
