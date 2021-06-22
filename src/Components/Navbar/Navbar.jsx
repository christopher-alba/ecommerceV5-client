import React, { useState } from "react";
import {
  NavbarBoxOuter,
  NavbarLinks,
  NavbarBrand,
  NavbarLinksBox,
  NavbarBoxInner,
  NavbarRightBox,
  NavbarRadio,
  NavbarIcon,
  NavbarThemeBox,
  MenuBox1,
  MenuBox2,
  BarsIcon,
} from "./styled";
import { JCUXButton as Button } from "../JCUX/JCUXButton";
import { JCUXContainer } from "../JCUX/JCUXContainer";
import useWindowWidth from "../../Hooks/useWindowWidth";
import styled from "styled-components";

const JCUXButton = styled(Button)`
  box-shadow: none !important;
`;

const JCUXMenuButton = styled(Button)`
  box-shadow: none !important;
  width: 60px;
  display: flex !important;
  justify-content: center;
`;

const Navbar = ({ setSelectedTheme, themes, selectedTheme }) => {
  const handleRadioChange = (evt, target) => {
    if (target.checked) {
      setSelectedTheme(themes.data.dark);
    } else {
      setSelectedTheme(themes.data.light);
    }
  };
  const windowWidth = useWindowWidth();
  if (windowWidth >= 1200) {
    return (
      <NavbarDesktop
        handleRadioChange={handleRadioChange}
        selectedTheme={selectedTheme}
      />
    );
  } else {
    return (
      <NavbarMobile
        handleRadioChange={handleRadioChange}
        selectedTheme={selectedTheme}
      />
    );
  }
};

const NavbarDesktop = ({ handleRadioChange, selectedTheme }) => {
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
              <NavbarIcon name="sun" />
              <NavbarRadio
                checked={selectedTheme.name === "dark"}
                toggle
                onChange={handleRadioChange}
              />
              <NavbarIcon name="moon" />
            </NavbarThemeBox>
            <JCUXButton>Sign In</JCUXButton>
            <JCUXButton>Sign Up</JCUXButton>
          </NavbarRightBox>
        </NavbarBoxInner>
      </JCUXContainer>
    </NavbarBoxOuter>
  );
};

const NavbarMobile = ({ handleRadioChange, selectedTheme }) => {
  const [menuOn, setMenuOn] = useState(false);
  const toggleMenu = () => {
    let menu = document.getElementsByClassName("navbar-menu-icon")[0];
    if (!menuOn) {
      menu.classList.remove("fa-bars");
      menu.classList.add("fa-times");
    } else {
      menu.classList.add("fa-bars");
      menu.classList.remove("fa-times");
    }
    setMenuOn(!menuOn);
  };
  return (
    <NavbarBoxOuter>
      <JCUXContainer>
        <NavbarBoxInner>
          <NavbarBrand>E-commerce V5</NavbarBrand>
          <JCUXMenuButton onClick={toggleMenu}>
            <BarsIcon className="fas fa-bars navbar-menu-icon"></BarsIcon>
          </JCUXMenuButton>
        </NavbarBoxInner>
        {menuOn && (
          <NavbarMobileMenu
            handleRadioChange={handleRadioChange}
            selectedTheme={selectedTheme}
          />
        )}
      </JCUXContainer>
    </NavbarBoxOuter>
  );
};

const NavbarMobileMenu = ({ handleRadioChange, selectedTheme }) => {
  return (
    <>
      <MenuBox1>
        <NavbarLinksBox>
          <NavbarLinks to="/">Home</NavbarLinks>
          <NavbarLinks to="/shop">Shop</NavbarLinks>
          <NavbarLinks to="/about">About</NavbarLinks>
        </NavbarLinksBox>
      </MenuBox1>
      <NavbarThemeBox>
        <NavbarIcon name="sun" />
        <NavbarRadio
          toggle
          onChange={handleRadioChange}
          checked={selectedTheme.name === "dark"}
        />
        <NavbarIcon name="moon" />
      </NavbarThemeBox>
      <MenuBox2>
        <JCUXButton>Sign In</JCUXButton>
        <JCUXButton>Sign Up</JCUXButton>
      </MenuBox2>
    </>
  );
};

export default Navbar;
