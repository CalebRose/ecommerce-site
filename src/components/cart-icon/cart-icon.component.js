import React from "react";
import { connect } from "react-redux";
import { ToggleCart } from "../../redux/cart/cart.actions";
import { ReactComponent as ShoppingIcon } from "../../assets/cart.svg";

import "./cart-icon.styles.scss";

const CartIcon = ({ ToggleCart }) => (
  <div className="cart-icon" onClick={ToggleCart}>
    <ShoppingIcon className="shopping-icon" />
    <span className="item-count">0</span>
  </div>
);

const mapDispatchToProps = dispatch => ({
  ToggleCart: () => dispatch(ToggleCart())
});

export default connect(null, mapDispatchToProps)(CartIcon);
