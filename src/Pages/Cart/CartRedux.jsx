import React from "react";
import { connect } from "react-redux";
import { clearCart, removeFromCart } from "../../Redux/actions/cart";

const CartRedux = ({ products, clearCart, removeFromCart }) => {
  return <h1>{JSON.stringify(products)}</h1>;
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
