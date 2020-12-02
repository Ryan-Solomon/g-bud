import React, { FC } from 'react';
import { TProduct } from '../custom-hooks/hooks';
import './CartItem.styles.scss';

type Props = {
  item: TProduct;
};

const CartItem: FC<Props> = ({ item }) => {
  return (
    <div className='cart-item'>
      <h1>{item.title}</h1>
      <img src={item.image} alt={item.title} />
    </div>
  );
};

export default CartItem;
