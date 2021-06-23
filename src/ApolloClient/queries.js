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
    }
  }
`;
