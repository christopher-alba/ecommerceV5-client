import { useQuery } from "@apollo/client";
import React from "react";
import { GET_PRODUCTS } from "../../ApolloClient/queries";
import ProductBox from "../../Components/ProductBox";
import { Loader } from "semantic-ui-react";
import { JCUXContainer } from "../../Components/JCUX/JCUXContainer";
import { ProductsWrapper } from "./styled";

const Shop = () => {
  const { loading, error, data } = useQuery(GET_PRODUCTS);

  if (loading) {
    return (
      <div style={{ position: "relative", height: "400px" }}>
        <Loader active={loading}>Fetching Top Picks</Loader>
      </div>
    );
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <JCUXContainer style={{ display: "flex", justifyContent: "center" }}>
      <ProductsWrapper>
        {data.products.map((product) => {
          return <ProductBox product={product} />;
        })}
      </ProductsWrapper>
    </JCUXContainer>
  );
};

export default Shop;
