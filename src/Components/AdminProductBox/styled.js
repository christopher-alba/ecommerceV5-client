import styled from "styled-components";

export const ProductBoxOuter = styled("div")`
  width: 300px;
  @media (max-width: 350px) {
    width: 100%;
  }
  height: fit-content;
  box-shadow: 0px 2px 10px 1px ${({ theme }) => theme.colors.dropShadow};
  border: ${({ theme }) => {
    if (theme.name === "dark") {
      return `2px solid ${theme.colors.secondary}`;
    } else {
      return `2px solid ${theme.colors.primary}`;
    }
  }};
  transition: 300ms;
  margin: 20px;
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
