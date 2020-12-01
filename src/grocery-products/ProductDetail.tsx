import React from 'react';
import { useRouteMatch } from 'react-router-dom';
import { useFetchProduct } from './../custom-hooks/hooks';

type TParams = {
  params: { id: string };
};

const ProductDetail = () => {
  const {
    params: { id },
  } = useRouteMatch() as TParams;

  const { product, status } = useFetchProduct(id);

  if (status === 'error') return <h1>Son of a bitch</h1>;

  if (status === 'loading' || !product) {
    return <div>loadin'</div>;
  }
  return (
    <>
      <img src={product?.image} alt={product?.title} />
      <h1>Loading mf'er...</h1>
      <p>{product?.description}</p>
    </>
  );
};

export default ProductDetail;
