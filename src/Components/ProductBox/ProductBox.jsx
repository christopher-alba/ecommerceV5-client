import React from "react";
import { ProductBoxOuter, ProductImage, ImageWrapper } from "./styled";

const ProductBox = ({ product }) => {
  const { name, price, images } = product;
  return (
    <ProductBoxOuter>
      <ImageWrapper>
        <ProductImage src={images[0].url} alt="" />
      </ImageWrapper>
      <h4>{name}</h4>
      <h4>NZ${price}</h4>
    </ProductBoxOuter>
  );
};

export default ProductBox;
