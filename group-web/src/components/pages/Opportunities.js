import React, { useEffect, useState } from "react";
import "../../App.css";
import Footer from "../footer";
import ChildAccordion from "./ChildAccordion";
import BackToTop from '../BackToTop';

export default function Opportunities() {
  const [positions, setPositions] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/opportunities").then(response =>
      response.json().then(data => {  
        setPositions(data.Opportunity);
      })
        );
    },[]);

  // const showPosition = () => {
  //     console.log(positions)
  //     if (!positions) {
  //     return  (
  //       <h3>No new positions, come back later</h3> 
  //       )               
  //     } else {
  //         positions.map(
  //           position => {
  //             return (
  //               <>
  //                 <ChildAccordion child={position}/>
  //               </>
  //             )     
  //           }
  //         )        
  //   }  
  //   }
  
  return (
    <>
    <BackToTop/>
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
