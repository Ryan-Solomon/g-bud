import { TProduct } from '../custom-hooks/hooks';

type TAction =
  | {
      type: 'ADD_TO_CART';
      payload: TProduct;
    }
  | {
      type: 'REMOVE_FROM_CART';
      payload: TProduct;
    }
  | {
      type: 'CLEAR_CART';
    };

export const addToCart = (product: TProduct): TAction => {
  return {
    type: 'ADD_TO_CART',
    payload: product,
  };
};
export const removeFromCart = (product: TProduct): TAction => {
  return {
    type: 'REMOVE_FROM_CART',
    payload: product,
  };
};
export const clearCart = (product: TProduct): TAction => {
  return {
    type: 'CLEAR_CART',
  };
};
