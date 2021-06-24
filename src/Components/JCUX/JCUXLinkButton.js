import styled from "styled-components";
import { Link } from "react-router-dom";

export const JCUXLinkButton = styled(Link)`
  background: ${({ theme, inverted }) => {
    if (inverted) {
      return theme.colors.secondary;
    }
    return theme.colors.primary;
  }} !important;
  color: ${({ theme, inverted }) => {
    if (!inverted) {
      return theme.colors.secondary;
    }
    return theme.colors.primary;
  }} !important;
  box-shadow: 0px 2px 5px 1px ${({ theme }) => theme.colors.dropShadow} !important;
  border: 2px solid
    ${({ theme, inverted }) => {
      if (!inverted) {
        return theme.colors.secondary;
      }
      return theme.colors.primary;
    }} !important;
  &:hover,
  &:focus {
    background: ${({ theme, inverted }) => {
      if (inverted) {
        return theme.colors.secondaryHover;
      }
      return theme.colors.primaryHover;
    }} !important;
  }
  border-radius: 0px !important;
  transition: 300ms !important;
  margin-right: 0px !important;
  white-space: nowrap;
  text-align: center;
  padding: 5px;
`;
