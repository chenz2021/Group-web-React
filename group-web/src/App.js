
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import React from 'react';
import Loading from './components/Loading';
import Home from './components/pages/Home';
import People from './components/pages/People';
import Publications from './components/pages/Publications';
import Opportunities from './components/pages/Opportunities';
import { useAuth0 } from '@auth0/auth0-react';
import Admin from './components/pages/Admin';
import Navbar from './components/Navbar'

function App() {
  const { isLoading } = useAuth0();

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
    <Navbar/>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/people' element={<People />} />
            <Route path='/publications' element={<Publications />} />
            <Route path='/opportunities' element={<Opportunities />} />  
            <Route path='/admin' element={<Admin/>}/>
            
          </Routes>      
      
    </>
  );
}


export default App;
