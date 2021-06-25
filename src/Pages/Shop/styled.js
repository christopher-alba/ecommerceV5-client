import styled from "styled-components";
import { ProductBoxOuter } from "../../Components/ProductBox/styled";
import { Select as SemanticSelect } from "semantic-ui-react";
import { JCUXButton } from "../../Components/JCUX/JCUXButton";

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
  white-space: nowrap;
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

export const AdminControlsWrapper = styled("div")`
  display: flex;
  align-items: center;
  @media (max-width: 1220px) {
    flex-wrap: wrap;
  }
`;

export const AdminControlButton = styled(JCUXButton)`
  margin-right: 20px !important;
  @media (max-width: 1220px) {
    margin-top: 10px !important;
    margin-right: 0px !important;
  }
`;
