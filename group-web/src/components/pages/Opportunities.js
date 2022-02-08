import React, { useEffect, useState } from "react";
import "../../App.css";
import Footer from "../footer";
import { Positions } from "./Positions";
import { PositionForm } from "./PositionForm";

function Opportunities() {
  const [positions, setPositions] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/opportunities").then(response =>
      response.json().then(data => {
        setPositions(data.Opportunity);
      })
    );
  });

  return (
    <>
      <div className="cards">
        <h1>Opportunities</h1>
      
        <div className='cards__container'>
          <div className='cards__wrapper'>
          <PositionForm
            onNewPosition={position =>
              setPositions(currentPositions => [...currentPositions, position])
            }
            />
            <div>
              <Positions positions={positions}/>
            </div>
          </div>
        </div>
      </div>
    <Footer />
    </>  
  );
}

export default Opportunities;