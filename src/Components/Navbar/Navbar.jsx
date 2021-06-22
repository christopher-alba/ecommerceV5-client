import React from "react";
import {
  NavbarBoxOuter,
  NavbarLinks,
  NavbarBrand,
  NavbarLinksBox,
  NavbarBoxInner,
  NavbarRightBox,
  NavbarRadio,
  NavbarThemeIcon,
  NavbarThemeBox,
} from "./styled";
import { JCUXButton } from "../JCUX/JCUXButton";
import { JCUXContainer } from "../JCUX/JCUXContainer";

const Navbar = ({ setSelectedTheme, themes }) => {
  const handleRadioChange = (evt, target) => {
    if (target.checked) {
      setSelectedTheme(themes.data.dark);
    } else {
      setSelectedTheme(themes.data.light);
    }
  };
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
            <NavbarThemeBox>
              <NavbarThemeIcon name="sun" />
              <NavbarRadio toggle onChange={handleRadioChange} />
              <NavbarThemeIcon name="moon" />
            </NavbarThemeBox>
            <JCUXButton>Sign In</JCUXButton>
            <JCUXButton>Sign Up</JCUXButton>
          </NavbarRightBox>
        </NavbarBoxInner>
      </JCUXContainer>
    </NavbarBoxOuter>
  );
};

export default Navbar;
