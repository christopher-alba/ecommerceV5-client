import { useQuery } from "@apollo/client";
import React from "react";
import { AUTHENTICATE } from "../../ApolloClient/queries";
import Profile from "./Profile";
import { StyledBoxOuter } from "./styled";
import { Loader } from "semantic-ui-react";

const ProfileAuthWrapper = () => {
  const { data, loading, error } = useQuery(AUTHENTICATE);
  if (loading) {
    return (
      <StyledBoxOuter>
        <Loader active={loading}>Authenticating</Loader>
      </StyledBoxOuter>
    );
  }
  if (error) {
    if (error.message !== "Please Login Again!") {
      return (
        <StyledBoxOuter>AUTH WRAPPER ERROR: {error.message}</StyledBoxOuter>
      );
    }
    return (
      <StyledBoxOuter>
        <h1>
          You have encountered a protected route. You must be logged in to see
          this page.
        </h1>
      </StyledBoxOuter>
    );
  }

  return <Profile authData={data} />;
};

export default ProfileAuthWrapper;
