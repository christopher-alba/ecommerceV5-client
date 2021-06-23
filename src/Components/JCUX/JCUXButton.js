import { Button } from "semantic-ui-react";
import styled from "styled-components";

export const JCUXButton = styled(Button)`
  background: ${({ theme }) => theme.colors.primary} !important;
  color: ${({ theme }) => theme.colors.secondary} !important;
  box-shadow: 0px 2px 5px 1px ${({ theme }) => theme.colors.dropShadow} !important;
  border: 2px solid ${({ theme }) => theme.colors.secondary} !important;
  &:hover,
  &:focus {
    background: ${({ theme }) => theme.colors.primaryHover} !important;
  }
  border-radius: 0px !important;
  transition: 300ms !important;
  margin-right: 0px !important;
`;
