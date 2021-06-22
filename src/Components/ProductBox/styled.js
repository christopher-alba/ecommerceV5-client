import styled from "styled-components";

export const ProductBoxOuter = styled("div")`
  width: 300px;
  @media (max-width: 350px) {
    width: 100%;
  }
  height: 450px;
`;

export const ProductImage = styled("img")`
  height: 300px;
  width: auto;
`;

export const ImageWrapper = styled("div")`
  overflow: auto;
`;
