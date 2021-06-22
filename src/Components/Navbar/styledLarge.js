import { Link } from "react-router-dom";
import styled from "styled-components";

export const NavbarBoxOuter = styled("div")`
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.secondary};
  padding-top: 20px;
  padding-bottom: 20px;
`;

export const NavbarLinks = styled(Link)`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.secondary};
  font-weight: bolder;
  &:hover,
  &:focus {
    color: ${({ theme }) => theme.colors.secondaryHover};
  }
`;

export const NavbarBrand = styled("h1")`
  margin-bottom: 0px;
  margin-right: 50px;
`;

export const NavbarLinksBox = styled("div")`
  margin-right: auto;
  * {
    margin-right: 20px;
  }
`;

export const NavbarBoxInner = styled("div")`
  display: flex;
  align-items: center;
`;

export const NavbarRightBox = styled("div")`
  * {
    margin-right: 20px !important;
    &:last-child {
      margin-right: 0px !important;
    }
  }
`;
