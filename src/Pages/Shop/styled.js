import styled from "styled-components";
import { ProductBoxOuter } from "../../Components/ProductBox/styled";
import { Select as SemanticSelect } from "semantic-ui-react";

export const ProductsWrapper = styled("div")`
  display: flex;
  flex-wrap: wrap;
  ${ProductBoxOuter} {
    margin: 20px;
  }
  justify-content: center;
`;
export const Select = styled(SemanticSelect)`
  background: ${({ theme }) => theme.colors.primary} !important;
  color: ${({ theme }) => theme.colors.secondary} !important;
  transition: 300ms !important;
  border: 2px solid ${({ theme }) => theme.colors.secondary} !important;
`;

export const FiltersWrapper = styled("div")`
  display: flex;
  flex-wrap: wrap;
  ${Select} {
    margin-right: 20px;
  }
  @media (max-width: 1220px) {
    flex-direction: column;
    ${Select} {
      margin-right: 0px;
      margin-bottom: 10px;
    }
  }
`;

export const FiltersHeading = styled("h1")`
  margin-bottom: 0px;
  margin-right: 50px;
  font-weight: 200;
`;

export const FiltersWrapperOuter = styled("div")`
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
  @media (max-width: 1220px) {
    flex-direction: column;
  }
`;

export const PageControlsOuter = styled("div")`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 30px;
  margin-bottom: 30px;
`;

export const PageNumber = styled("h4")`
  margin-top: 0px;
  margin-bottom: 0px;
`;
