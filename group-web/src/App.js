
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import React from 'react';
import Home from './components/pages/Home';
import People from './components/pages/People';
import Publications from './components/pages/Publications';
import Opportunities from './components/pages/Opportunities';


function App() {
  return (
    <>
      <Router>
        <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/people' element={<People />} />
            <Route path='/publications' element={<Publications />} />
            <Route path='/opportunities' element={<Opportunities />} />
          </Routes>      
      </Router>
    </>
  );
}


export default App;
