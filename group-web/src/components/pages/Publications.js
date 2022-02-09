import React from 'react';
import { useState, useEffect } from 'react';
import { Container } from '@mui/material';
import '../../App.css';
import Footer from '../footer';
import Cards from '../PublicationCards';
import ChildAccordionPublication from './ChildAccordionPublication';


function Publications() {
  const [Publication, setPublication] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/publications").then(response =>
      response.json().then(data => {
        setPublication(data.publications);
      })
    );
  }, []);
    return (
        <>
        <Cards />
        <Container>
        {Publication.map(publication =>{
            return (<>
              <ChildAccordionPublication child={publication}/>
            </>)
          })}
        </Container>
           
          
        <Footer />
        </>           
      );
    }
  
export default Publications;