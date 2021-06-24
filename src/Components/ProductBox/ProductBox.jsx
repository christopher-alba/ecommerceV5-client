import React from "react";
import {
  ProductBoxOuter,
  ProductImage,
  ImageWrapper,
  ProductText,
  ProductTextWrapper,
} from "./styled";

const ProductBox = ({ product }) => {
  const { name, price, images, id } = product;
  return (
    <ProductBoxOuter to={`/product/${id}`}>
      <ImageWrapper>
        <ProductImage src={images[0].url} alt="" />
      </ImageWrapper>
      <ProductTextWrapper>
        <ProductText>{name}</ProductText>
        <ProductText>NZ${price}</ProductText>
      </ProductTextWrapper>
    </ProductBoxOuter>
  );
};

export default ProductBox;
