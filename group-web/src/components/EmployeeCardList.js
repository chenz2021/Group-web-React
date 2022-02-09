import React from "react";
import EmployeeCard from "./EmployeeCard";
import './EmployeeCard.css';
import { ReadMore } from "./readMore";

function EmployeeCardList () {
  const biograph = "My research activities focus on the synthesis and study of thin or two-dimensional (2D) porous materials to use them as simplified systems (model systems) for bulk structures such as heterogeneous catalysts, membranes, adsorbents, etc. For these studies, we use conditions ranging from ultra-high vacuum to industrially relevant pressures, taking advantage of surface science techniques that can operate at this pressure range. Catalysts of particular interest are microporous materials such as zeolites. Although most heterogeneous catalysts used in the industry fall in this category, they are particularly challenging to study with surface science techniques. The problem resides in the fact that the catalytically active surface is enclosed within the pores, and thus out of the reach of surface science tools, which require an “exposed” surface. A useful approach to overcome this difficulty is to create 2D analog materials that have the same active sites as the three-dimensional porous ones. In this way, the active site can be probed with typical surface science tools. Resulting from initial studies on these 2D-silicates materials, it was evident that confinement effects play an essential role in chemical reactions and physical trapping of species. We are now exploring these materials for trapping and separating noble gases, in addition to studying catalytic reactions."

    return (
    <div className='People'>
      <h1>People</h1>
      <div className='People__container'>
        <div className='People__wrapper'>
          <ul className='People__items'>  
            <EmployeeCard
              src='images/Anibal.jpg'
              text='J. Anibal Boscoboinik' 
              label='Group Leader'
              path='/'
              onClick={event =>  window.location.href='https://www.bnl.gov/staff/jboscoboinik'}              
            />
            <div className="bio">
              <ReadMore children={biograph}/>
                <p></p>
                <p>Contact: jboscoboinik@bnl.gov</p>
            </div>          
          </ul>
          
          <ul className='People__items'>
            <EmployeeCard
              src='images/Chen Zhou.png'
              text='Chen Zhou'
              label='Graduate Student'  
            />
            <div className="bio">
            Chen Zhou received his bachelor’s degree in Materials Science at Nanjing University, China. He is now a Ph. D. student in the group of J. Anibal Boscoboinik at Brookhaven National Laboratory. 
            His research focuses on the investigation of 2D-zeolite model using Scanning Probe Microscopy, Ambient Pressure X-Ray Photoelectron Spectroscopy and Infrared Reflection Absorption Spectroscopy.
            <p></p>
            <p>Contact: chen.zhou@stonybrook.edu</p> 
              </div>       
          </ul>
          <ul className='People__items'>
            <EmployeeCard
              src='images/Image from iOS (1).jpg'
              text='After a couple of beers'
              label='Life'
              path='/services'
            />
            <EmployeeCard
              src='images/Small.jpg'
              text = 'Xe trapping in silicate nanocages'
              label='Research'
              path='/'
              onClick={event =>  window.location.href='https://onlinelibrary.wiley.com/doi/10.1002/smll.202103661'} 
            />
            <EmployeeCard
              src='images/img-8.jpg'
              text='Ride through the Sahara Desert on a guided camel tour'
              label='Adrenaline'
              path='/sign-up'  
            />
            
            
          </ul>
        </div>
      </div>
    </div>
    )
}

export default EmployeeCardList;