import { gql } from "@apollo/client";

export const GET_TOP_PICKS = gql`
  query GetTopPicks {
    topPicks(maxCount: 10) {
      name
      id
      price
      views
      images {
        url
      }
    }
  }
`;

export const GET_PRODUCTS = gql`
  query GetProducts {
    products {
      name
      id
      price
      views
      images {
        url
      }
      orientation
      clothingType
    }
  }
`;

export const GET_PRODUCT = gql`
  query GetProduct($id: ID!) {
    product(id: $id) {
      id
      name
      price
      description
      views
      images {
        url
      }
      orientation
      clothingType
      sizes {
        stock
        size
      }
    }
  }
`;

export const GET_CART = gql`
  query GetCart($userId: ID!) {
    cart(userId: $userId) {
      products {
        id
        productId
        name
        price
        description
        images {
          url
        }
        orientation
        clothingType
        size
      }
    }
  }
`;

export const AUTHENTICATE = gql`
  query Authenticate {
    me {
      _id
      username
      password
      token
      permission
    }
  }
`;

export const GET_PROFILE = gql`
  query GetProfile($userId: ID!) {
    profile(userId: $userId) {
      userId
      firstName
      lastName
      favouriteProducts {
        productId
      }
      profilePicture {
        url
      }
    }
  }
`;

export const GET_SPECIFIC_PRODUCTS = gql`
  query GetSpecificProducts($ids: [ID!]!) {
    specificProducts(ids: $ids) {
      id
      name
      price
      description
      views
      images {
        url
      }
      orientation
      clothingType
      sizes {
        stock
        size
      }
    }
  }
`;
