import { useMutation, useQuery } from "@apollo/client";
import React from "react";
import { GET_CART } from "../../ApolloClient/queries";
import ProductBody from "./ProductBody";
import { UPDATE_CART } from "../../ApolloClient/mutations";
import { Loader } from "semantic-ui-react";
const ProductAuthed = ({ authData }) => {
  const { data, loading, error } = useQuery(GET_CART, {
    variables: {
      userId: authData.me._id,
    },
  });
  const [updateCart] = useMutation(UPDATE_CART);
  if (loading) {
    return (
      <div style={{ position: "relative" }}>
        <Loader active={loading}>Fetching Shopping Cart</Loader>
      </div>
    );
  }
  if (error) {
    return <div>{error.message}</div>;
  }

  const handleAddToCart = (product, size) => {
    let finalProductsArray = [];

    data.cart.products.forEach((product) => {
      finalProductsArray.push({
        productId: product.productId,
        images: product.images.map((image) => {
          return { url: image.url };
        }),
        name: product.name,
        size: product.size,
        orientation: product.orientation,
        clothingType: product.clothingType,
        price: product.price,
        description: product.description,
      });
    });

    finalProductsArray.push({
      productId: product.id,
      images: product.images.map((image) => {
        return { url: image.url };
      }),
      name: product.name,
      size: size,
      orientation: product.orientation,
      clothingType: product.clothingType,
      price: product.price,
      description: product.description,
    });

    updateCart({
      refetchQueries: [
        {
          query: GET_CART,
          variables: {
            userId: authData.me._id,
          },
        },
      ],
      variables: {
        userId: authData.me._id,
        products: finalProductsArray,
      },
    });
  };
  console.log(data);
  return <ProductBody handleAddToCart={handleAddToCart} type="personal" />;
};

export default ProductAuthed;
