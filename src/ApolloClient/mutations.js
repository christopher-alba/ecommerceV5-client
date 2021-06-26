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

export const CLEAR_CART = gql`
  mutation ClearCart($products: [updateCartInput]!, $userId: ID!) {
    updateCart(products: $products, userId: $userId) {
      userId
      products {
        name
      }
    }
  }
`;

export const UPDATE_CART = gql`
  mutation UpdateCart($products: [updateCartInput]!, $userId: ID!) {
    updateCart(products: $products, userId: $userId) {
      userId
      products {
        name
      }
    }
  }
`;

export const CREATE_PRODUCT = gql`
  mutation CreateProduct($product: createProductInput!) {
    createProduct(product: $product) {
      id
      name
    }
  }
`;

export const UPDATE_PRODUCT = gql`
  mutation UpdateProduct($product: updateProductInput!) {
    updateProduct(product: $product) {
      id
      name
    }
  }
`;

export const DELETE_PRODUCT = gql`
  mutation DELETE_PRODUCT($id: ID!) {
    deleteProduct(id: $id)
  }
`;
