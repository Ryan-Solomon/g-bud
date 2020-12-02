import { TProduct } from '../custom-hooks/hooks';

export type TAction =
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

export const addToCartAction = (product: TProduct): TAction => {
  return {
    type: 'ADD_TO_CART',
    payload: product,
  };
};
export const removeFromCartAction = (product: TProduct): TAction => {
  return {
    type: 'REMOVE_FROM_CART',
    payload: product,
  };
};
export const clearCartAction = (): TAction => {
  return {
    type: 'CLEAR_CART',
  };
};
