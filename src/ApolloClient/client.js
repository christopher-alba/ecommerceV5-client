import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  cache: new InMemoryCache({
    addTypename: false,
  }),
  uri:
    process.env.NODE_ENV === "development"
      ? "http://localhost:5000/graphql"
      : "https://ecommercev5-server.herokuapp.com/graphql",
  headers: {
    authorization: localStorage.getItem("authorization"),
  },
});
