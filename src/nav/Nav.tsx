import React from 'react';
import './Nav.styles.scss';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <nav className='nav'>
      <ul className='link-container'>
        <Link to='/'>
          <li>Home</li>
        </Link>
        <Link to='/grocery-list'>
          <li>Grocery List</li>
        </Link>
        <Link to='/grocery-products'>
          <li>Grocery Products</li>
        </Link>
        <Link to='/cart'>
          <li>Grocery Cart</li>
        </Link>
      </ul>
    </nav>
  );
};

export default Nav;
