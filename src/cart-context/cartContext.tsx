import React, { FC, ReactNode, useContext } from 'react';
import { TProduct } from '../custom-hooks/hooks';
import {
  addToCartAction,
  clearCartAction,
  removeFromCartAction,
} from './cartActions';
import { cartReducer } from './cartReducer';

type TInitialContext = {
  cartItems: TProduct[];
  totalPrice: number;
  addToCart: (product: TProduct) => void;
  removeFromCart: (product: TProduct) => void;
  clearCart: () => void;
};

const initialContext: TInitialContext = {
  cartItems: [],
  totalPrice: 0,
  addToCart: (p: TProduct) => null,
  removeFromCart: (p: TProduct) => null,
  clearCart: () => null,
};

export type TCartState = TProduct[];
const initialState: TCartState = [];

const AppContext = React.createContext(initialContext);

// Add a function to get from local storage || just go with initialState

export const AppProvider: FC<ReactNode> = ({ children }) => {
  const [cartItems, dispatch] = React.useReducer(cartReducer, initialState);
  const [totalPrice, setTotalPrice] = React.useState(0);

  React.useEffect(() => {
    const tp = cartItems.reduce((acc, curr) => {
      return acc + curr.price;
    }, 0);
    setTotalPrice(tp);
  }, [cartItems]);

  React.useEffect(() => {
    localStorage.removeItem('cart-items');
    localStorage.setItem('cart-items', JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (product: TProduct) => {
    dispatch(addToCartAction(product));
  };
  const removeFromCart = (product: TProduct) => {
    dispatch(removeFromCartAction(product));
  };
  const clearCart = () => {
    dispatch(clearCartAction());
  };

  console.log(cartItems);

  return (
    <AppContext.Provider
      value={{
        cartItems,
        totalPrice,
        addToCart,
        removeFromCart,
        clearCart,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};
