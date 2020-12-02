import React, { FC, ReactNode } from 'react';
import { TProduct } from '../custom-hooks/hooks';
import {
  addToCartAction,
  clearCartAction,
  removeFromCartAction,
} from './cartActions';
import { cartReducer } from './cartReducer';

type TInitialContext = {
  cartItems: TProduct[];
  addToCart: (product: TProduct) => void;
  removeFromCart: (product: TProduct) => void;
  clearCart: () => void;
};

const initialContext: TInitialContext = {
  cartItems: [],
  addToCart: (p: TProduct) => null,
  removeFromCart: (p: TProduct) => null,
  clearCart: () => null,
};

export type TCartState = TProduct[];
const initialState: TCartState = [];

const AppContext = React.createContext(initialContext);

export const AppProvider: FC<ReactNode> = ({ children }) => {
  const [cartItems, dispatch] = React.useReducer(cartReducer, initialState);

  const addToCart = (product: TProduct) => {
    dispatch(addToCartAction(product));
  };
  const removeFromCart = (product: TProduct) => {
    dispatch(removeFromCartAction(product));
  };
  const clearCart = () => {
    dispatch(clearCartAction());
  };

  return (
    <AppContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        clearCart,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
