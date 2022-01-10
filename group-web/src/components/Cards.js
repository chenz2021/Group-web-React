import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out the life and research in CFN!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/Image from iOS.jpg'
              text='Home barbecue at Anibals '
              label='Life'
              path='/'
              
            />
            <CardItem
              src='images/cs9b05289_0008.jpg.gif'
              text='Water formation reaction under confinement' 
              label='Research'
              path='/'
              onClick={event =>  window.location.href='https://pubs.acs.org/doi/10.1021/acscatal.9b05289'}              
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/Image from iOS (1).jpg'
              text='After a couple of beers'
              label='Life'
              path='/'
            />
            <CardItem
              src='images/Small.jpg'
              text = 'Xe trapping in silicate nanocages'
              label='Research'
              path='/'
              onClick={event =>  window.location.href='https://onlinelibrary.wiley.com/doi/10.1002/smll.202103661'} 
            />
            <CardItem
              src='images/bowling.jpg'
              text='Bowling night'
              label='Life'
              path='/'  
            />
            
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/Nature Comm.jpg'
              text='Immobilization of single argon atoms in nanocages of 2D zeolite'
              label='Research'
              path='/'
              onClick={event =>  window.location.href='https://onlinelibrary.wiley.com/doi/10.1002/smll.202103661'} 
            />
            <CardItem
              src='images/People.jpg'
              text = 'Nanoscience discoveries with big commercial potential'
              label='News'
              path='/'
              onClick={event =>  window.location.href='https://www.bnl.gov/newsroom/news.php?a=119266'} 
            />
            <CardItem
              src='images/Anibal bews.jpg'
              text='Boscoboinik unlocks structural secrets from the ‘boiling stone’'
              label='News'
              path='/' 
              onClick={event =>  window.location.href='https://tbrnewsmedia.com/bnls-boscoboinik-unlocks-structural-secrets-boiling-stone/'} 
            />
            
            
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;

