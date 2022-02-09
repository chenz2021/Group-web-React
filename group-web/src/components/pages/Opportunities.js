import React, { useEffect, useState } from "react";
import "../../App.css";
import Footer from "../footer";
import SimpleAccordion from "./Accordion";

function Opportunities() {
  

  return (
    <>
      <div className="cards">
        
        <h1>Opportunities</h1>
        
        <div className='cards__container'>
          <div className='cards__wrapper'>
            <div>
              <SimpleAccordion/>
            </div>
          </div>
        </div>
      </div>
    <Footer />
    </>  
  );
}

export default Opportunities;