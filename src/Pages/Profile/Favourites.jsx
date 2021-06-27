import { useQuery } from "@apollo/client";
import React from "react";
import { GET_SPECIFIC_PRODUCTS } from "../../ApolloClient/queries";

const Favourites = ({ productIds }) => {
  const { data, loading, error } = useQuery(GET_SPECIFIC_PRODUCTS, {
    variables: {
      ids: productIds.map((idObj) => idObj.productId),
    },
  });

  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>{error.message}</div>;
  }

  const specificProducts = data.specificProducts;

  return (
    <div>
      {specificProducts.map((product) => {
        return <h1>{product.name}</h1>;
      })}
    </div>
  );
};

export default Favourites;
