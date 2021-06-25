import React, { useState } from "react";
import { JCUXButton } from "../../Components/JCUX/JCUXButton";
import { JCUXContainer } from "../../Components/JCUX/JCUXContainer";
import { JCUXTitle } from "../../Components/JCUX/JCUXTitle";
import { Carousel, CarouselImage } from "../../Components/Carousel";
import {
  ProductBoxOuter,
  ProductTextWrapper,
  ProductText,
  ProductsWrapper,
  VisitButton,
  ButtonsWrapper,
} from "./styled";
import { Link } from "react-router-dom";

const CartBody = ({ products, clearCart, removeFromCart }) => {
  const [selectedProduct, setSelectedProduct] = useState(undefined);
  const totalCost = products.reduce((accumulator, currentItem) => {
    return accumulator + currentItem.price;
  }, 0);
  return (
    <JCUXContainer>
      <JCUXTitle>Shopping Cart</JCUXTitle>
      <ButtonsWrapper>
        <JCUXButton fluid>
          Go to Checkout | Total Cost: NZ${totalCost.toFixed(2)}
        </JCUXButton>
        <JCUXButton
          onClick={() => {
            removeFromCart(selectedProduct);
          }}
          fluid
        >
          Delete Selected Product
        </JCUXButton>
        <JCUXButton fluid onClick={() => setSelectedProduct(undefined)}>
          Deselect Product
        </JCUXButton>
        <JCUXButton fluid onClick={() => clearCart()}>
          Clear Shopping Cart
        </JCUXButton>
      </ButtonsWrapper>

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

export default CartBody;
