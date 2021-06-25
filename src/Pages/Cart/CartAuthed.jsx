import { useQuery } from "@apollo/client";
import React from "react";
import { GET_CART } from "../../ApolloClient/queries";
import CartBody from "./CartBody";
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
  const { products } = data.cart;
  return <CartBody products={products}/>;
};

export default CartAuthed;
