import styled from "styled-components";
import { JCUXButton } from "../../Components/JCUX/JCUXButton";

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
  cursor: pointer;
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

export const ProductsWrapper = styled("div")`
  display: flex;
  flex-wrap: wrap;
  ${ProductBoxOuter} {
    margin: 20px;
  }
  justify-content: center;
`;

export const VisitButton = styled(JCUXButton)`
  border-right: none !important;
  position: relative;
  z-index: 1 !important;
`;
