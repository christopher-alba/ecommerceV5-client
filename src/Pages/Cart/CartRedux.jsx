import React from "react";
import { connect } from "react-redux";
import { clearCart, removeFromCart } from "../../Redux/actions/cart";
import CartBody from "./CartBody";

const CartRedux = ({ products, clearCart, removeFromCart }) => {
  return (
    <CartBody
      products={products}
      clearCart={clearCart}
      removeFromCart={removeFromCart}
    />
  );
};

const mapStateToProps = (state) => {
  return {
    products: state.cart.products,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    clearCart: () => {
      dispatch(clearCart());
    },
    removeFromCart: (productId) => {
      dispatch(removeFromCart(productId));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CartRedux);
