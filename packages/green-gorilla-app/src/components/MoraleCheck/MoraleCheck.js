import React from 'react';
import data from './data';
import './MoraleCheck.css';

const MoraleCheck = ({ onClick }) => {
  const items = data.map(({ id, description, emoji }) => (
    <li key={id} className={id} onClick={() => { onClick(id) }}>
      <span className="emoji">{emoji}</span>
      <span className="description">{description}</span>
    </li>)
  );

  return (
    <ul className="morale-check">
      {items}
    </ul>
  );
};

export default MoraleCheck;
