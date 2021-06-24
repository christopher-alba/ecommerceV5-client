import { useQuery } from "@apollo/client";
import React from "react";
import { GET_PRODUCT } from "../../ApolloClient/queries";
import { Loader } from "semantic-ui-react";
import { JCUXContainer } from "../../Components/JCUX/JCUXContainer";
import Carousel from "../../Components/Carousel";
const Product = () => {
  const id = window.location.pathname.split("/")[2];
  console.log(id);
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
  return (
    <div>
      <JCUXContainer>
        <Carousel>
          {product.images.map((image) => {
            return (
              <div>
                <img src={image.url} alt="" />
              </div>
            );
          })}
        </Carousel>
      </JCUXContainer>
    </div>
  );
};

export default Product;
