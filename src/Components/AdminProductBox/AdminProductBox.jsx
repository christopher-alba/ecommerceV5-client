import React from "react";
import {
  ProductBoxOuter,
  ProductImage,
  ImageWrapper,
  ProductText,
  ProductTextWrapper,
} from "./styled";
import { Link } from "react-router-dom";
import { JCUXButton } from "../JCUX/JCUXButton";

const AdminProductBox = ({ product, setSelectedProduct, selectedProduct }) => {
  const { name, price, images, id } = product;
  return (
    <ProductBoxOuter
      onClick={async () => {
        await setSelectedProduct(undefined);
        await setTimeout(() => {
          setSelectedProduct(id);
        }, 300);
      }}
      style={{ borderColor: selectedProduct === id ? `#3477eb` : "" }}
    >
      <ImageWrapper>
        <ProductImage src={images[0].url} alt="" />
      </ImageWrapper>
      <ProductTextWrapper>
        <ProductText>{name}</ProductText>
        <ProductText>NZ${price}</ProductText>
        <Link to={`/product/${id}`}>
          <JCUXButton>Visit</JCUXButton>
        </Link>
      </ProductTextWrapper>
    </ProductBoxOuter>
  );
};

export default AdminProductBox;
