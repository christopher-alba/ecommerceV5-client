import { useQuery } from "@apollo/client";
import React from "react";
import { AUTHENTICATE } from "../../ApolloClient/queries";
import CartAuthed from "./CartAuthed";
import CartRedux from "./CartRedux";
import { Loader } from "semantic-ui-react";
const AuthWrapper = () => {
  const { data, loading, error } = useQuery(AUTHENTICATE);
  if (loading) {
    return (
      <div style={{ position: "relative", height: "400px" }}>
        <Loader active={loading}>Fetching Top Picks</Loader>
      </div>
    );
  }
  if (error) {
    if (error.message !== "Please Login Again!") {
      return <div>AUTH WRAPPER ERROR: {error.message}</div>;
    }
    return <CartRedux />;
  }
  return <CartAuthed authData={data} />;
};

export default AuthWrapper;
