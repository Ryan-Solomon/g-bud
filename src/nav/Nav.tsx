import React from 'react';
import './Nav.styles.scss';

const Nav = () => {
  return (
    <nav className='nav'>
      <ul className='link-container'>
        <li>Home</li>
        <li>Grocery List</li>
        <li>Grocery Products</li>
        <li>Grocery Cart</li>
      </ul>
    </nav>
  );
};

export default Nav;
