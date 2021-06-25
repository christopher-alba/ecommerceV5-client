import { useQuery, useMutation } from "@apollo/client";
import React from "react";
import { CLEAR_CART } from "../../ApolloClient/mutations";
import { GET_CART } from "../../ApolloClient/queries";
import CartBody from "./CartBody";
const CartAuthed = ({ authData }) => {
  const { data, loading, error } = useQuery(GET_CART, {
    variables: {
      userId: authData && authData.me._id,
    },
  });
  const [clearCartMutation] = useMutation(CLEAR_CART);
  if (loading) {
    return <div>loading...</div>;
  }
  if (error) {
    if (error.message !== "Please Login Again!") {
      return <div>CART ERROR: {error.message}</div>;
    }
  }

  const clearCart = () => {
    clearCartMutation({
      variables: {
        products: [],
        userId: authData.me._id,
      },
    });
  };

  const { products } = data.cart;
  return <CartBody products={products} clearCart={clearCart} />;
};

export default CartAuthed;
