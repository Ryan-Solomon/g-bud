import React from 'react';
import { Redirect } from 'react-router-dom';
import { useFetchProducts } from './../custom-hooks/hooks';
import Product from './Product';

const GroceryProducts = () => {
  const { products, status } = useFetchProducts();

  if (status === 'error') {
    <Redirect to='/error' />;
  }

  if (status === 'loading') return <h1>Loading...</h1>;

  return (
    <main className='products'>
      <header>
        <h1>Available Products</h1>
      </header>
      <section className='products-container'>
        {products?.map((product) => {
          return <Product key={product.id} product={product} />;
        })}
      </section>
    </main>
  );
};

export default GroceryProducts;
