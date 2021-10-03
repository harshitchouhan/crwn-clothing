import { CartActions } from './cart.types';
import {
  addItemToCart,
  clearItemFromCart,
  removeItemFromCart,
} from './cart.util';

const INITIAL_STATE = {
  hidden: true,
  cartItems: [],
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CartActions.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden,
      };

    case CartActions.ADD_ITEM:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload),
      };

    case CartActions.REMOVE_ITEM:
      return {
        ...state,
        cartItems: removeItemFromCart(state.cartItems, action.payload),
      };

    case CartActions.CLEAR_ITEM_FROM_CART:
      return {
        ...state,
        cartItems: clearItemFromCart(state.cartItems, action.payload),
      };

    default:
      return state;
  }
};

export default cartReducer;
