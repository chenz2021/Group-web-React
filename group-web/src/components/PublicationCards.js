import React from 'react';
import './PublicationCards.css';
import CardItem from './PublicationItems';

function Cards() {
  return (
    <div className='cards'>
      <h1>Publications</h1>
      <h2>Research Highlights</h2>
      <div className='cards__container'>
        <div className='cards__wrapper'>
            <h2>Confined Chemistry</h2>
          <ul className='cards__items'>
              
          <CardItem
              src='images/cs9b05289_0008.jpg.gif'
              text='Water formation reaction under confinement' 
              label='ACS Catalysis'
              path='/publications'
              onClick={event =>  window.location.href='https://pubs.acs.org/doi/10.1021/acscatal.9b05289'}              
            />
            <CardItem
              src='images/Small.jpg'
              text = 'Xe trapping in silicate nanocages'
              label='Small'
              path='/publications'
              onClick={event =>  window.location.href='https://onlinelibrary.wiley.com/doi/10.1002/smll.202103661'} 
            />
          </ul>
          
          <ul className='cards__items'>
            <CardItem
              src='images/Nature Comm.jpg'
              text='Immobilization of single argon atoms in nanocages of 2D zeolite'
              label='Nature Communication'
              path='/publications'
              onClick={event =>  window.location.href='https://onlinelibrary.wiley.com/doi/10.1002/smll.202103661'} 
            />
            
            <CardItem
              src='images/review.jpg'
              text='Topical review: Chemistry in confined space'
              label='Journal of Physics: Condensed Matter'
              path='/publications' 
              onClick={event =>  window.location.href='https://tbrnewsmedia.com/bnls-boscoboinik-unlocks-structural-secrets-boiling-stone/'} 
            />
            
            
          </ul>
        </div>
        <div className='cards__wrapper'>
            <h2>Confined Chemistry</h2>
          <ul className='cards__items'>
              
          <CardItem
              src='images/cs9b05289_0008.jpg.gif'
              text='Water formation reaction under confinement' 
              label='ACS Catalysis'
              path='/publications'
              onClick={event =>  window.location.href='https://pubs.acs.org/doi/10.1021/acscatal.9b05289'}              
            />
            <CardItem
              src='images/Small.jpg'
              text = 'Xe trapping in silicate nanocages'
              label='Small'
              path='/publications'
              onClick={event =>  window.location.href='https://onlinelibrary.wiley.com/doi/10.1002/smll.202103661'} 
            />
          </ul>
          
          <ul className='cards__items'>
            <CardItem
              src='images/Nature Comm.jpg'
              text='Immobilization of single argon atoms in nanocages of 2D zeolite'
              label='Nature Communication'
              path='/publications'
              onClick={event =>  window.location.href='https://onlinelibrary.wiley.com/doi/10.1002/smll.202103661'} 
            />
            
            <CardItem
              src='images/review.jpg'
              text='Topical review: Chemistry in confined space'
              label='Journal of Physics: Condensed Matter'
              path='/publications' 
              onClick={event =>  window.location.href='https://tbrnewsmedia.com/bnls-boscoboinik-unlocks-structural-secrets-boiling-stone/'} 
            />
            
            
          </ul>
         

        </div>
      </div>
      <h2>Selected Publications</h2>
    </div>
  );
}

export default Cards;

