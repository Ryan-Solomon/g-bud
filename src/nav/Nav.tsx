import React from 'react';
import './Nav.styles.scss';
import { Link } from 'react-router-dom';
import { useAppContext } from './../cart-context/cartContext';

const Nav = () => {
  const { cartItems } = useAppContext();

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
          <li>Grocery Cart ({cartItems.length}) </li>
        </Link>
      </ul>
    </nav>
  );
};

export default Nav;
