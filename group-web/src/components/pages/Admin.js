import React, { useEffect, useState } from "react";
import { Container } from "semantic-ui-react";
import "../../App.css";
import Footer from "../footer";
import { Positions } from "./Positions";
import { PositionForm } from "./PositionForm";
import { PublicationForm } from "./PublicationForm";
import { PublicationList } from "./PublicationList";
import { withAuthenticationRequired } from '@auth0/auth0-react';
import Loading from '../Loading';
import Scroll from '../Scroll';

    
const Admin = () => {
    const [positions, setPositions] = useState([]);
    const [Publication, setPublication] = useState([]);
    
    useEffect(() => {
        fetch("http://localhost:5000/publications").then(response =>
          response.json().then(data => {
            setPublication(data.publications);
          })
        );
      },[Publication]);
        
    useEffect(() => {
        fetch("http://localhost:5000/opportunities").then(response =>
        response.json().then(data => {
            setPositions(data.Opportunity);
        })
        );
    },[positions]);

    return (
    <>
    <Scroll showBelow={250}  />
      <div className="cards">
        <div className='cards__container'>
          <div className='cards__wrapper'>
          <h1>Add new publications below!</h1>
          <Container style={{ marginLeft: 80 }}>
              <PublicationForm
                  onNewPublication={publication =>
                    setPublication(currentPublication => [...currentPublication, publication])
                  }
                  />
              <Container style={{ marginLeft: 40 }}>
                <PublicationList children={Publication}/>
              </Container>
          </Container>
          
          <h1>Add new openings below!</h1>
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
    
   
export default withAuthenticationRequired(Admin, {
      onRedirecting: () => <Loading />,
    });
