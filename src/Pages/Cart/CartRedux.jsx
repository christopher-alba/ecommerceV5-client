import React, { useState } from "react";
import { connect } from "react-redux";
import { clearCart, removeFromCart } from "../../Redux/actions/cart";
import { JCUXButton } from "../../Components/JCUX/JCUXButton";

const CartRedux = ({ products, clearCart, removeFromCart }) => {
  const [selectedProduct, setSelectedProduct] = useState(undefined);

  return (
    <>
      <JCUXButton
        onClick={() => {
          removeFromCart(selectedProduct);
        }}
      >
        Delete Product
      </JCUXButton>
      <JCUXButton onClick={() => setSelectedProduct(undefined)}>
        Deselect Product
      </JCUXButton>
      <JCUXButton onClick={() => clearCart()}>Clear Shopping Cart</JCUXButton>
      {products.map((product) => {
        return (
          <h1 onClick={() => setSelectedProduct(product.id)}>{product.name}</h1>
        );
      })}
    </>
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
