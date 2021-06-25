import React from "react";
import { connect } from "react-redux";
import { addToCart } from "../../Redux/actions/cart";
import { v4 as uuidv4 } from "uuid";

import ProductBody from "./ProductBody";
const Product = ({ addToCart }) => {
  const handleAddToCart = (product, size) => {
    addToCart({
      id: uuidv4(),
      images: product.images,
      name: product.name,
      size: size,
      orientation: product.orientation,
      clothingType: product.clothingType,
      price: product.price,
      description: product.description,
    });
  };
  return <ProductBody handleAddToCart={handleAddToCart} type="temporary" />;
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (product) => {
      dispatch(addToCart(product));
    },
  };
};

export default connect(undefined, mapDispatchToProps)(Product);
