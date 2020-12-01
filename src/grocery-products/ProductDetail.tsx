import React from 'react';
import { useRouteMatch } from 'react-router-dom';
import { useFetchProduct } from './../custom-hooks/hooks';

const ProductDetail = () => {
  const params = useRouteMatch();
  console.log(params);

  // const { } = useFetchProduct();

  return <div>hey</div>;
};

export default ProductDetail;
