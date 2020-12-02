import React, { FC } from 'react';
import { TProduct } from '../custom-hooks/hooks';
import './CartItem.styles.scss';
import { useAppContext } from './../cart-context/cartContext';

type Props = {
  item: TProduct;
};

const CartItem: FC<Props> = ({ item }) => {
  const { removeFromCart } = useAppContext();
  return (
    <div className='cart-item'>
      <h1>{item.title}</h1>
      <div className='img' style={{ backgroundImage: `url(${item.image})` }}>
        <div className='item-details'>
          <h3>Price ${item.price}</h3>
          <h3>{item.category}</h3>
        </div>
      </div>
      <div className='remove-item'>
        <button onClick={() => removeFromCart(item)}>Remove Item</button>
      </div>
    </div>
  );
};

export default CartItem;
