import React, { FC } from 'react';
import { TProduct } from '../custom-hooks/hooks';
import './Product.styles.scss';

type Props = {
  product: TProduct;
};

const Product: FC<Props> = ({ product }) => {
  return (
    <div className='container'>
      <div className='card'>
        <img src={product.image} alt='Person' className='card__image' />
        <p className='card__name'>{product.title}</p>
        <div className='grid-container'>
          <div className='grid-child-posts'>${product.price}</div>

          <div className='grid-child-followers'>{product.category}</div>
        </div>

        <div className='buttons'>
          <button className='btn draw-border'>Add To Cart</button>
          <button className='btn draw-border'>View Details</button>
        </div>
      </div>
    </div>
  );
};

export default Product;
