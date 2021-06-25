import React from "react";
import ProductBody from "./ProductBody";

const ProductAuthed = () => {
  const handleAddToCart = () => {
    console.log("ADDING TO PERSONAL CART");
  };

  return <ProductBody handleAddToCart={handleAddToCart} type="personal" />;
};

export default ProductAuthed;
