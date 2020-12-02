import React, { FC } from 'react';
import { useHistory } from 'react-router-dom';
import { TProduct } from '../custom-hooks/hooks';
import './Product.styles.scss';
import { useAppContext } from './../cart-context/cartContext';

type Props = {
  product: TProduct;
};

const Product: FC<Props> = ({ product }) => {
  const { addToCart } = useAppContext();
  const history = useHistory();
  const showDetailsPage = () => {
    history.push(`/product/${product.id}`);
  };

  const handleAddToCart = () => {
    addToCart(product);
  };

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
          <button onClick={handleAddToCart} className='btn draw-border'>
            Add To Cart
          </button>
          <button onClick={showDetailsPage} className='btn draw-border'>
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
