import { useQuery } from "@apollo/client";
import React from "react";
import { AUTHENTICATE } from "../../ApolloClient/queries";

const Cart = () => {
  const { data, loading, error } = useQuery(AUTHENTICATE);
  if (loading) {
    return <div>loading...</div>;
  }
  if (error) {
    if (error.message !== "Please Login Again!") {
      return <div>ERROR: {error.message}</div>;
    }
  }

  return <p>{JSON.stringify(data)}</p>;
};

export default Cart;
