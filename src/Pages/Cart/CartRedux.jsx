import React, { useState } from "react";
import { connect } from "react-redux";
import { clearCart, removeFromCart } from "../../Redux/actions/cart";
import { JCUXButton } from "../../Components/JCUX/JCUXButton";
import { JCUXContainer } from "../../Components/JCUX/JCUXContainer";
import { JCUXLinkButton } from "../../Components/JCUX/JCUXLinkButton";
import {
  ProductBoxOuter,
  ImageWrapper,
  ProductImage,
  ProductTextWrapper,
  ProductText,
} from "../../Components/ProductBox/styled";
const CartRedux = ({ products, clearCart, removeFromCart }) => {
  const [selectedProduct, setSelectedProduct] = useState(undefined);

  return (
    <JCUXContainer>
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
        const { name, price, images, id, productId } = product;
        return (
          <ProductBoxOuter onClick={() => setSelectedProduct(id)}>
            <ImageWrapper>
              <ProductImage src={images[0].url} alt="" />
            </ImageWrapper>
            <ProductTextWrapper>
              <ProductText>{name}</ProductText>
              <ProductText>NZ${price}</ProductText>
              <JCUXLinkButton to={`/product/${productId}`}>
                Visit
              </JCUXLinkButton>
            </ProductTextWrapper>
          </ProductBoxOuter>
        );
      })}
    </JCUXContainer>
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
