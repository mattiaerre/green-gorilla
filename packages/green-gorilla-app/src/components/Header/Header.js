import React from 'react';
import './Header.css';

const Header = ({ name, version }) => {
  return (
    <div className="Header">
      <h1>{name}</h1>
      <h2>{version}</h2>
    </div>
  );
};

export default Header;
