import React, { useEffect, useState } from "react";
import { Container } from "semantic-ui-react";
import "../../App.css";
import Footer from "../footer";
import { Positions } from "./Positions";
import { PositionForm } from "./PositionForm";
import { PublicationForm } from "./PublicationForm";
import { PublicationList } from "./PublicationList";
import { withAuthenticationRequired, useAuth0 } from '@auth0/auth0-react';
import Loading from '../Loading';
import Scroll from '../Scroll';
    
const Admin = () => {
    const [positions, setPositions] = useState([]);
    const [Publication, setPublication] = useState([]);
    const { getAccessTokenSilently } = useAuth0();
    const [error, setError] = useState(true)
    
      useEffect (() => {
        const fetchData = async () => { 
          const token = await getAccessTokenSilently();
              try {
                  fetch(`http://localhost:5000/admin/publications`, {
                    headers: {
                      Authorization : `Bearer ${token}`
                    }
                  }).then(response =>
                    response.json().then(data => {
                      setPublication(data.publications);
                      setError(false);
                    })
                  );
                  fetch(`http://localhost:5000/admin/opportunities`, {
                    headers: {
                      Authorization : `Bearer ${token}`
                    }
                  }).then(response =>
                    response.json().then(data => {
                      setPositions(data.Opportunity);
                      setError(false);
                    })
                  );
                  
              } catch {
                setError(true)
              }
              }
              fetchData();      
          }, [Publication, positions]);
  
    if (error === true) {
      return <div style={{ alignItems:'center', marginLeft: 100, marginTop: 500 }}> <h1>Error Occured: Not Authorized!</h1></div>
    } else {
      return (
        <>
        <Scroll showBelow={250}  />
          <div className="cards">
            <div className='cards__container'>
              <div className='cards__wrapper'>
              
              <h1>Add new publications below!</h1>
              <Container style={{ marginLeft: 90 }}>
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
              <Container style={{ marginLeft: 90 }}>
              <PositionForm
                  onNewPosition={position =>
                    setPositions(currentPositions => [...currentPositions, position])
                  }
                  />
              </Container>
                
                   <Container style={{ marginLeft: 40 }}>
                    <Positions positions={positions}/>
                    </Container>
                  
              </div>
            </div>
          </div>
        <Footer />
        </>  
      );
    }
    
}
    
   
export default withAuthenticationRequired(Admin, {
      onRedirecting: () => <Loading />,
    });
