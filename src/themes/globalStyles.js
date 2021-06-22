import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.colors.primary} !important;
    color: ${({ theme }) => theme.colors.secondary} !important;
    transition: all 0.50s linear;
  }
  ::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.colors.secondary} !important;
    border-radius:50px !important;
  }
`;
