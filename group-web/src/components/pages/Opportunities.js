import React, { useEffect, useState } from "react";
import "../../App.css";
import Footer from "../footer";
import { Positions } from "./Positions";
import { PositionForm } from "./PositionForm";
import { Container } from "semantic-ui-react"

function Opportunities() {
  const [positions, setPositions] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/opportunities").then(response =>
      response.json().then(data => {
        setPositions(data.Opportunity);
      })
    );
  }, []);

  return (
    <>
      <div className="opportunities">
        <h2>Opportunities</h2>
        
      <PositionForm
        onNewPosition={position =>
          setPositions(currentPositions => [position, ...currentPositions])
        }
      />
      <div>
        <Positions positions={positions} />
      </div>
      
    </div>
    <Footer />
    </>
    
  );
}

export default Opportunities;