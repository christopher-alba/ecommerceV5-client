import { Link } from "react-router-dom";
import styled from "styled-components";

export const ProductBoxOuter = styled(Link)`
  width: 300px;
  @media (max-width: 350px) {
    width: 100%;
  }
  height: 400px;
  box-shadow: 0px 2px 10px 1px ${({ theme }) => theme.colors.dropShadow};
  border: ${({ theme }) => {
    if (theme.name === "dark") {
      return `2px solid ${theme.colors.secondary}`;
    }
  }};
  transition: 300ms;
`;

export const ProductBoxInner = styled("div")`
  width: 300px;
  @media (max-width: 350px) {
    width: 100%;
  }
  height: 400px;
`;

export const ProductImage = styled("img")`
  height: 300px;
  width: 300px;
  object-fit: cover;
`;

export const ImageWrapper = styled("div")`
  overflow: hidden;
  display: flex;
  justify-content: center;
`;

export const ProductText = styled("h4")`
  color: ${({ theme }) => theme.colors.secondary};
  margin-top: 10px;
`;

export const ProductTextWrapper = styled("div")`
  padding: 20px;
`;
