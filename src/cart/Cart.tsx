import React from 'react';
import './Cart.styles.scss';
import { useAppContext } from './../cart-context/cartContext';
import CartItem from './CartItem';

const Cart = () => {
  const { cartItems, totalPrice } = useAppContext();
  console.log(cartItems);

  if (cartItems.length < 1)
    return (
      <h1>Add some items to your cart! Or don't, whatever you're feeling</h1>
    );

  return (
    <main className='cart-container'>
      <header>
        <h1>Your Cart</h1>
        <h3>Amount: {totalPrice.toFixed(2)} </h3>
      </header>
      <section className='items-container'>
        {cartItems.map((item) => {
          return <CartItem key={item.id} item={item} />;
        })}
      </section>
    </main>
  );
};

export default Cart;
