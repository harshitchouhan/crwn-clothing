import React from 'react';
import { connect } from 'react-redux';
import { toggleCartHidden } from '../../redux/cart/cart.actions';

import { ReactComponent as ShoppingIcon } from './../../assets/shopping-bag.svg';

import './cart-icon.styles.scss';

const CartIcon = ({ dispatchToggleCartHidden }) => {
  return (
    <div className='cart-icon' onClick={dispatchToggleCartHidden}>
      <ShoppingIcon className='shopping-icon'></ShoppingIcon>
      <span className='item-count'>0</span>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  dispatchToggleCartHidden: () => dispatch(toggleCartHidden()),
});

export default connect(null, mapDispatchToProps)(CartIcon);
