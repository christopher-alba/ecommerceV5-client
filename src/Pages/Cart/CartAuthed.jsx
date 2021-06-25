import { useQuery } from "@apollo/client";
import React from "react";
import { GET_CART } from "../../ApolloClient/queries";

const CartAuthed = ({ authData }) => {
  const { data, loading, error } = useQuery(GET_CART, {
    variables: {
      userId: authData && authData.me._id,
    },
  });
  if (loading) {
    return <div>loading...</div>;
  }
  if (error) {
    if (error.message !== "Please Login Again!") {
      return <div>CART ERROR: {error.message}</div>;
    }
  }
  return <p>{JSON.stringify(data)}</p>;
};

export default CartAuthed;
