import { gql } from "@apollo/client";

export const LOGIN = gql`
  mutation Login($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      token
    }
  }
`;

export const REGISTER = gql`
  mutation Register(
    $username: String!
    $password: String!
    $permission: PermissionType!
  ) {
    register(
      username: $username
      password: $password
      permission: $permission
    ) {
      token
    }
  }
`;
