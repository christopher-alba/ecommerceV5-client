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
  query GetCart($username: String!) {
    cart(username: $username) {
      products {
        id
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
      username
      password
      token
      permission
    }
  }
`;
