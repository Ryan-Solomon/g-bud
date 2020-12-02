import React, { FC, ReactNode } from 'react';
import { TProduct } from '../custom-hooks/hooks';

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

const AppContext = React.createContext(initialContext);

export const AppProvider: FC<ReactNode> = ({ children }) => {
  return <AppContext.Provider value={}></AppContext.Provider>;
};
