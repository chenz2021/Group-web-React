import axios from 'axios';
import {format} from 'date-fns';
import React, {useEffect, useState} from 'react';
import '../../App.css';
import Footer from '../footer';
import { Button_c } from '../Button';

const baseUrl = 'http://127.0.0.1:5000'

export default function Opportunities() {
  const [description, setDescription] = useState('')
  const [positionsList, setPositionsList] = useState([]);

  const fetchPosition = async () => {
    const data = await axios.get(`${baseUrl}/opportunity`)
    const [positions] = data.data
    setPositionsList(positions)
  }

  const handleChange = e => {
    setDescription(e.target.value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await axios.post(`{baseUrl}/opportunity`, {description})
      setPositionsList([...positionsList, data.data]);
      setDescription('');
    } catch (error) {
      
    }
  }

  useEffect(() => {
    fetchPosition();
  }, [])

  return (
    <>
      <div className='opportunities'>
        <div>
          <header>Opportunities</header>
        </div>
        
        <div className='form'>
          <form onSubmit={handleSubmit}>
            <label htmlFor='description'>Add New Position</label>
            <input
              onChange={handleChange}
              type='text'
              name='description'
              id='description'
              value={description}
            />
            <button type='submit'>Submit</button>
          </form>
        </div>
        <section>
          <ul>
            {positionsList.map(position => {
              return (<li key={position.id}>
                {position.description}</li>)

            })}
          </ul>
        </section>
          
        
      </div>
      
      <Footer />;
    </> 
  ) 
}
