import React from 'react';
import { useState, useEffect } from 'react';
import { Container } from 'semantic-ui-react';
import '../../App.css';
import Footer from '../footer';
import Cards from '../PublicationCards';
import { PublicationList } from './PublicationList';

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
        <Container style={{ marginLeft: 40 }}>
            <PublicationList children={Publication}/>
        </Container>  
        <Footer />
        </>           
      );
    }
  
export default Publications;