import { useQuery } from "@apollo/client";
import React from "react";
import { AUTHENTICATE } from "../../ApolloClient/queries";
import ProductNoAuth from "./ProductNoAuth";
import ProductAuthed from "./ProductAuthed";

const AuthWrapper = () => {
  const { data, loading, error } = useQuery(AUTHENTICATE);
  if (loading) {
    return <div>loading...</div>;
  }
  if (error) {
    if (error.message !== "Please Login Again!") {
      return <div>AUTH WRAPPER ERROR: {error.message}</div>;
    }
    return <ProductNoAuth />;
  }
  return <ProductAuthed authData={data} />;
};

export default AuthWrapper;
