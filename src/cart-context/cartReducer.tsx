import { TAction } from './cartActions';
import { TCartState } from './cartContext';

export const cartReducer = (state: TCartState, action: TAction) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return {
        ...state,
      };
    case 'REMOVE_FROM_CART':
      return {
        ...state,
      };
    case 'CLEAR_CART':
      return {
        ...state,
      };
    default:
      throw new Error('Action not supported');
  }
};
