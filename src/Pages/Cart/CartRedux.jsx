import React, { useState } from "react";
import { connect } from "react-redux";
import { clearCart, removeFromCart } from "../../Redux/actions/cart";
import { JCUXButton } from "../../Components/JCUX/JCUXButton";
import { JCUXContainer } from "../../Components/JCUX/JCUXContainer";
import { Carousel, CarouselImage } from "../../Components/Carousel";
import {
  ProductBoxOuter,
  ImageWrapper,
  ProductImage,
  ProductTextWrapper,
  ProductText,
  ProductsWrapper,
  VisitButton,
} from "./styled";
import { Link } from "react-router-dom";

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

      <ProductsWrapper>
        {products.map((product) => {
          const {
            name,
            price,
            images,
            id,
            productId,
            size,
            clothingType,
            orientation,
          } = product;
          return (
            <ProductBoxOuter
              onClick={() => setSelectedProduct(id)}
              style={{
                borderColor: selectedProduct === id ? `#3477eb` : "",
              }}
            >
              <Carousel height="350px">
                {images.map((image, index) => {
                  console.log(image);
                  return <CarouselImage key={index} url={image.url} alt="" />;
                })}
              </Carousel>
              <ProductTextWrapper>
                <ProductText>{name}</ProductText>
                <ProductText>{clothingType}</ProductText>
                <ProductText>{orientation}</ProductText>
                <ProductText>Size: {size}</ProductText>
                <ProductText>NZ${price}</ProductText>
                <Link to={`/product/${productId}`}>
                  <VisitButton>Visit</VisitButton>
                </Link>
                <JCUXButton onClick={() => removeFromCart(id)}>
                  Delete
                </JCUXButton>
              </ProductTextWrapper>
            </ProductBoxOuter>
          );
        })}
      </ProductsWrapper>
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
