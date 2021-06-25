import styled from "styled-components";
import { Select as SemanticSelect } from "semantic-ui-react";
import { JCUXButton } from "../../Components/JCUX/JCUXButton";

export const Select = styled(SemanticSelect)`
  background: ${({ theme }) => theme.colors.primary} !important;
  color: ${({ theme }) => theme.colors.secondary} !important;
  transition: 300ms !important;
  border-radius: 0px !important;
  border: 2px solid ${({ theme }) => theme.colors.secondary} !important;
  box-shadow: 0px 2px 10px 1px ${({ theme }) => theme.colors.dropShadow} !important;
  @media (max-width: 385px) {
    width: 100%;
  }
`;

export const AddToCart = styled(JCUXButton)`
  margin-left: 20px !important;
  @media (max-width: 385px) {
    margin-left: 0px !important;
    margin-top: 10px !important;
    width: 100%;
  }
`;
