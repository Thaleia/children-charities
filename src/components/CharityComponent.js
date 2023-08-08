import React from 'react';
import { charities } from '../data/charities.js';
import Charity from './Charity.js';
import './charities.css';

const fetchCharityData = () => {
  return charities;
}
const CharityComponent = () => {
  const charityData = fetchCharityData();
  return (
    <div className='charity-container'>
      <h1>Charities for Disabled Children</h1>
      <ul className='charity-list'>
        {charities.map(charity => (
          <Charity key={charity.id} charity={charity} />
        ))}
      </ul>
    </div>
  );
}

export default CharityComponent;
