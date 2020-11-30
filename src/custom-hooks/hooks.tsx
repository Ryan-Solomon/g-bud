import React, { useEffect, useState } from 'react';

export type TProduct = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
};

const initialState: TProduct[] = [];

export const useFetchProducts = () => {
  const [products, setProducts] = useState<TProduct[]>();
  const [status, setStatus] = useState<'idle' | 'loading' | 'error'>('idle');

  useEffect(() => {
    const getData = async () => {
      setStatus('loading');
      try {
        const res = await fetch('https://fakestoreapi.com/products');
        const data: TProduct[] = await res.json();
        setStatus('idle');
        setProducts(data);
      } catch (e) {
        console.error(e);
        setStatus('error');
      }
    };
    getData();
  }, []);
  return { products, status };
};

export const useFetchProduct = (id: string) => {
  const [product, setProduct] = useState<TProduct>();
  const [status, setStatus] = useState<'idle' | 'loading' | 'error'>('idle');

  useEffect(() => {
    const getData = async () => {
      setStatus('loading');
      try {
        const res = await fetch(`https://fakestoreapi.com/products/${id}`);
        const data: TProduct = await res.json();
        setStatus('idle');
        setProduct(data);
      } catch (e) {
        console.error(e);
        setStatus('error');
      }
    };
    getData();
  }, [id]);
  return { product, status };
};
