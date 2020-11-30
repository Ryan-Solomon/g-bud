import React, { FC } from 'react';
import { TProduct } from '../custom-hooks/hooks';

type Props = {
  product: TProduct;
};

const Product: FC<Props> = ({ product }) => {
  return (
    <div className='single-product'>
      <h2>{product.title}</h2>
      <div className='image'>
        <img src={product.image} alt={product.title} />
      </div>
      <div className='product-details'>
        <p>{product.description}</p>
        <h4>{product.price}</h4>
        <h4>{product.category}</h4>
      </div>
    </div>
  );
};

export default Product;
