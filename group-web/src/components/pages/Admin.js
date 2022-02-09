import React, { useEffect, useState } from "react";
import { Container } from "semantic-ui-react";
import "../../App.css";
import Footer from "../footer";
import { Positions } from "./Positions";
import { PositionForm } from "./PositionForm";
import { PublicationForm } from "./PublicationForm";
import { PublicationList } from "./PublicationList";
import { useAuth0, withAuthenticationRequired } from '@auth0/auth0-react';
import Loading from '../Loading';

    
const Admin = () => {
    const [positions, setPositions] = useState([]);
    const [Publication, setPublication] = useState([]);
    
    useEffect(() => {
        fetch("http://localhost:5000/publications").then(response =>
          response.json().then(data => {
            setPublication(data.publications);
          })
        );
      },[]);
        
    useEffect(() => {
        fetch("http://localhost:5000/opportunities").then(response =>
        response.json().then(data => {
            setPositions(data.Opportunity);
        })
        );
    },[]);

    return (
    <>
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
