import { useQuery } from "@apollo/client";
import React from "react";
import { GET_PRODUCT } from "../../ApolloClient/queries";
import { Loader } from "semantic-ui-react";
import { JCUXContainer } from "../../Components/JCUX/JCUXContainer";
import { JCUXTitle } from "../../Components/JCUX/JCUXTitle";
import { Carousel, CarouselImage } from "../../Components/Carousel";
import { Select, AddToCart } from "./styled";
import { useState } from "react";
import { Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";

const ProductBody = ({ handleAddToCart, type }) => {
  const [size, setSize] = useState(undefined);
  const id = window.location.pathname.split("/")[2];
  const { loading, error, data } = useQuery(GET_PRODUCT, {
    variables: {
      id,
    },
  });
  if (loading) {
    return (
      <div style={{ position: "relative", height: "400px" }}>
        <Loader active={loading}>Fetching Products</Loader>
      </div>
    );
  }

  if (error) {
    return <div>{error.message}</div>;
  }
  const product = data.product;
  const sizesOptions = [];
  let outOfStock = false;
  product.sizes.forEach((sizeObject) => {
    if (sizeObject.stock > 0) {
      sizesOptions.push({
        key: sizeObject.size,
        value: sizeObject.size,
        text: sizeObject.size + " , available: " + sizeObject.stock,
      });
    }
  });
  if (sizesOptions.length === 0) {
    outOfStock = true;
  }
  const handleSizeChange = (evt, select) => {
    setSize(select.value);
  };
  return (
    <div style={{ paddingBottom: "5%" }}>
      <Carousel>
        {product.images.map((image, index) => {
          return <CarouselImage key={index} url={image.url} />;
        })}
      </Carousel>
      <JCUXContainer style={{ textAlign: "center" }}>
        <JCUXTitle>{product.name}</JCUXTitle>
        <h2>{product.views} Views</h2>
        <p>{product.description}</p>
        <h2 style={{ fontWeight: "200" }}>
          {product.orientation} | {product.clothingType}
        </h2>
        <h2>NZ${product.price}</h2>
        {outOfStock ? (
          <h4>Out of stock, we apologize for any inconvenience.</h4>
        ) : (
          <>
            <Select
              placeholder="Sizes"
              options={sizesOptions}
              onChange={handleSizeChange}
            />
            <Link to="/cart">
              <AddToCart
                disabled={!size}
                icon
                labelPosition="right"
                onClick={() => handleAddToCart(product, size)}
              >
                Add to {type} cart
                <Icon name="cart" />
              </AddToCart>
            </Link>

            {!size && (
              <h4>You must pick a size before adding product to cart.</h4>
            )}
          </>
        )}
      </JCUXContainer>
    </div>
  );
};

export default ProductBody;
