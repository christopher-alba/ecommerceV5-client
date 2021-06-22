import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.colors.primary} !important;
    color: ${({ theme }) => theme.colors.secondary} !important;
    transition: all 0.50s linear;
  }
`;