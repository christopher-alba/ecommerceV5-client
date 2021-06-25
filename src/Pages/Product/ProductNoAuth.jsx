import React from "react";

import ProductBody from "./ProductBody";
const Product = () => {
  const handleAddToCart = () => {
    console.log("Adding to temporary cart");
  };
  return <ProductBody handleAddToCart={handleAddToCart} type="temporary" />;
};

export default Product;
