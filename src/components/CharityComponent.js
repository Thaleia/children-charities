import React from 'react';
import { charities } from '../data/charities.js';

const CharityComponent = () => {
  return (
    <div className='charity-container'>
      <h1>Disabled Children Charities</h1>
      <ul className='charity-list'>
        {charities.map(charity => (
          <li className='charity' key={charity.id}>
            <img src={charity.image} alt={charity.name}/>
            <h2>{charity.name}</h2>
            <p>{charity.action}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CharityComponent;
