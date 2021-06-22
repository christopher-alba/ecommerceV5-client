import React from "react";
import {
  NavbarBoxOuter,
  NavbarLinks,
  NavbarBrand,
  NavbarLinksBox,
  NavbarBoxInner,
  NavbarRightBox,
} from "./styledLarge";
import { JCUXButton } from "../JCUX/JCUXButton";
import { JCUXContainer } from "../JCUX/JCUXContainer";
const Navbar = () => {
  return (
    <NavbarBoxOuter>
      <JCUXContainer>
        <NavbarBoxInner>
          <NavbarBrand>E-commerce V5</NavbarBrand>
          <NavbarLinksBox>
            <NavbarLinks to="/">Home</NavbarLinks>
            <NavbarLinks to="/shop">Shop</NavbarLinks>
            <NavbarLinks to="/about">About</NavbarLinks>
          </NavbarLinksBox>
          <NavbarRightBox>
            <JCUXButton>Sign In</JCUXButton>
            <JCUXButton>Sign Up</JCUXButton>
          </NavbarRightBox>
        </NavbarBoxInner>
      </JCUXContainer>
    </NavbarBoxOuter>
  );
};

export default Navbar;
