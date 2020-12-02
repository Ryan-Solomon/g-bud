import { TAction } from './cartActions';
import { TCartState } from './cartContext';

export const cartReducer = (state: TCartState, action: TAction) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return [...state, action.payload];
    case 'REMOVE_FROM_CART':
      return [...state.filter((item) => item.id !== action.payload.id)];
    case 'CLEAR_CART':
      return [];
    default:
      throw new Error('Action not supported');
  }
};
