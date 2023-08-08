import React from 'react';
import { charities } from './data/charities';


const CharityComponent = ()  => {

  return (
    <div className='charity-container'>
      <h1>Charities for Disabled Children </h1>
      <ul className='charity-list'>
        {
            charities.map( charity => 
                <li className='charity' key={charity.key}>
                    <img src={charity.image} alt={charity.name}/>
                    <h2>{charity.name}</h2>
                    <p>{charity.action}</p>
                </li>
                )
        }
      </ul>
    </div>
  )
}

export default CharityComponent;