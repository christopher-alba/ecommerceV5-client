import { useQuery } from "@apollo/client";
import React from "react";
import { AUTHENTICATE } from "../../ApolloClient/queries";

const Cart = () => {
  const { data, loading, error } = useQuery(AUTHENTICATE);
  if (loading) {
    return <div>loading...</div>;
  }
  if (error) {
    return <div>{error.message}</div>;
  }

  return <h1>{JSON.stringify(data)}</h1>;
};

export default Cart;
