import React from "react";
import {
  ProductBoxOuter,
  ProductImage,
  ImageWrapper,
  ProductText,
  ProductTextWrapper,
  ProductBoxInner,
} from "./styled";

const ProductBox = ({ product }) => {
  const { name, price, images, id } = product;
  return (
    <ProductBoxOuter to={`/products/${id}`}>
      <ProductBoxInner>
        <ImageWrapper>
          <ProductImage src={images[0].url} alt="" />
        </ImageWrapper>
        <ProductTextWrapper>
          <ProductText>{name}</ProductText>
          <ProductText>NZ${price}</ProductText>
        </ProductTextWrapper>
      </ProductBoxInner>
    </ProductBoxOuter>
  );
};

export default ProductBox;
