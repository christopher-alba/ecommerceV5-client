import { Link } from "react-router-dom";
import styled from "styled-components";
import { Radio, Icon } from "semantic-ui-react";

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
  display: flex;
  align-items: center;
  * {
    margin-right: 20px !important;
    &:last-child {
      margin-right: 0px !important;
    }
  }
`;

export const NavbarRadio = styled(Radio)`
  color: ${({ theme }) => theme.colors.secondary} !important;
`;
export const NavbarThemeIcon = styled(Icon)`
  font-size: 2rem !important;
  display:flex !important;
  align-items: center;
`;

export const NavbarThemeBox = styled("div")`
  display: flex;
  align-items: center;
  margin-right: 50px !important;
`;
