import React from 'react';
import { charities } from '../data/charities';

export default function ButtonWebsite() {
  return (
    <div>
        <a href={charities.website}>
            <button onClick={charities.website}>Website</button>
        </a>
    </div>
  )
}
