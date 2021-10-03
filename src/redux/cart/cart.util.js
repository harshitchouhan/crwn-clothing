export const addItemToCart = (cartItems, cartItemToAdd) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToAdd.id
  );

  if (existingCartItem) {
    return cartItems.map((cartItem) => {
      return cartItem.id === cartItemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem;
    });
  }

  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};

export const removeItemFromCart = (cartItems, id) => {
  const existingCartItems = cartItems.find((cartItem) => cartItem.id === id);

  if (existingCartItems.quantity === 1) {
    return clearItemFromCart(cartItems, id);
  }

  return cartItems.map((cartItem) => {
    return cartItem.id === id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem;
  });
};

export const clearItemFromCart = (cartItems, id) => {
  return cartItems.filter((cartItem) => cartItem.id !== id);
};
