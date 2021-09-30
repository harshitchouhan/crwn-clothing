import { CartActions } from './cart.types';

export const toggleCartHidden = () => ({
  type: CartActions.TOGGLE_CART_HIDDEN,
});

export const addToCart = (item) => ({
  type: CartActions.ADD_ITEM,
  payload: item,
});
