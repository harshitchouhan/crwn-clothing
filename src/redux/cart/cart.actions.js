import { CartActions } from './cart.types';

export const toggleCartHidden = () => ({
  type: CartActions.TOGGLE_CART_HIDDEN,
});

export const addToCart = (item) => ({
  type: CartActions.ADD_ITEM,
  payload: item,
});

export const removeItemFromCart = (id) => ({
  type: CartActions.REMOVE_ITEM,
  payload: id,
});

export const clearItemFromCart = (id) => ({
  type: CartActions.CLEAR_ITEM_FROM_CART,
  payload: id,
});
