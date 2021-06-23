import { Link } from "react-router-dom";
import styled from "styled-components";
import { Radio, Icon } from "semantic-ui-react";
import { JCUXButton as Button } from "../JCUX/JCUXButton";

export const NavbarBoxOuter = styled("div")`
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.secondary};
  padding-top: 20px;
  padding-bottom: 20px;
  position: sticky;
  top: 0px;
  z-index: 1;
`;

export const NavbarLinks = styled(Link)`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.secondary};
  font-weight: bolder;
  &:hover,
  &:focus {
    color: ${({ theme }) => theme.colors.secondaryHover};
  }
  @media (max-width: 1200px) {
    font-size: 1.25rem;
    margin-top: 10px;
  }
`;

export const NavbarBrand = styled("h1")`
  margin-bottom: 0px;
  margin-right: 50px;
  @media (max-width: 1200px) {
    font-size: 1.5rem;
    margin-right: auto;
  }
`;

export const NavbarLinksBox = styled("div")`
  margin-right: auto;
  * {
    margin-right: 20px;
  }
  @media (max-width: 1200px) {
    margin-right: 0px;
    * {
      margin-right: 0px;
    }
    display: flex;
    flex-direction: column;
  }
`;
export const JCUXButton = styled(Button)`
  box-shadow: none !important;
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
export const NavbarIcon = styled(Icon)`
  font-size: 2rem !important;
  display: flex !important;
  align-items: center;
  @media (max-width: 1200px) {
    margin: 10px !important;
  }
`;

export const BarsIcon = styled("i")`
  font-size: 1.5rem;
`;

export const NavbarThemeBox = styled("div")`
  display: flex;
  align-items: center;
  margin-right: 50px !important;
  @media (max-width: 1200px) {
    width: 100%;
    margin-right: 0px !important;
    position: relative;
    left: -10px;
  }
`;

export const MenuBox1 = styled("div")`
  display: flex;
`;
export const MenuBox2 = styled("div")`
  margin-top: 20px;
  * {
    margin-right: 20px !important;
    &:last-child {
      margin-right: 0px !important;
    }
  }
`;
