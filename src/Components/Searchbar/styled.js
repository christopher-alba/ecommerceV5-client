import styled from "styled-components";
import { Link } from "react-router-dom";

export const SearchBoxInput = styled("input")`
  &::placeholder {
    text-align: center;
    transition: 500ms;
    color: ${({ theme }) => theme.colors.secondary};
  }
  padding: 10px;
  text-align: center;
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.secondary};
  border: 2px solid ${({ theme }) => theme.colors.secondary};

  &:focus {
    outline: none;
  }
  transition: 300ms;
  width: 80%;
`;

export const SearchBox = styled("div")`
  width: 100%;
  white-space: nowrap;
  display: flex;
`;

export const SearchBoxSubmit = styled(Link)`
  box-shadow: none !important;
  border: 2px solid ${({ theme }) => theme.colors.secondary};
  background: ${({ theme }) => theme.colors.secondary} !important;
  color: ${({ theme }) => theme.colors.primary} !important;
  width: 20%;
  &:hover,
  &:focus {
    border: 2px solid ${({ theme }) => theme.colors.secondaryHover} !important;
    background: ${({ theme }) => theme.colors.secondaryHover} !important;
    outline: none;
  }
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 300ms;
`;
