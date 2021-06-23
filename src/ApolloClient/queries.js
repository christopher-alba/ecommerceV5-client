import { gql } from "@apollo/client";

export const GET_TOP_PICKS = gql`
  query GetTopPicks {
    topPicks(maxCount: 10) {
      name
      price
      views
      images {
        url
      }
    }
  }
`;
