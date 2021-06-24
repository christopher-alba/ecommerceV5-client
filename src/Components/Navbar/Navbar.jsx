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
import LoginModal from "../LoginModal";
import RegisterModal from "../RegisterModal";
import styled from "styled-components";
import { AUTHENTICATE } from "../../ApolloClient/queries";
import { useQuery } from "@apollo/client";
import { JCUXButton } from "./styled";

const JCUXMenuButton = styled(Button)`
  box-shadow: none !important;
  width: 60px;
  display: flex !important;
  justify-content: center;
`;

const Navbar = ({ setSelectedTheme, themes, selectedTheme }) => {
  const { loading, error, data: authData } = useQuery(AUTHENTICATE);

  const handleRadioChange = (evt, target) => {
    if (target.checked) {
      setSelectedTheme(themes.data.dark);
    } else {
      setSelectedTheme(themes.data.light);
    }
  };
  const handleSignOut = () => {
    localStorage.removeItem("authorization");
    window.location.reload();
  };
  const windowWidth = useWindowWidth();
  const isLoggedIn = () => {
    if (
      authData &&
      authData.me.token === localStorage.getItem("authorization")
    ) {
      return true;
    }
    return false;
  };
  if (windowWidth > 1200) {
    return (
      <NavbarDesktop
        handleRadioChange={handleRadioChange}
        selectedTheme={selectedTheme}
        isLoggedIn={isLoggedIn}
        handleSignOut={handleSignOut}
        loading={loading}
        error={error}
      />
    );
  } else {
    return (
      <NavbarMobile
        handleRadioChange={handleRadioChange}
        selectedTheme={selectedTheme}
        isLoggedIn={isLoggedIn}
        handleSignOut={handleSignOut}
        loading={loading}
        error={error}
      />
    );
  }
};

const NavbarDesktop = ({
  handleRadioChange,
  selectedTheme,
  isLoggedIn,
  handleSignOut,
}) => {
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
            {isLoggedIn() ? (
              <JCUXButton onClick={handleSignOut}>Sign Out</JCUXButton>
            ) : (
              <LoginModal />
            )}
            <RegisterModal />
          </NavbarRightBox>
        </NavbarBoxInner>
      </JCUXContainer>
    </NavbarBoxOuter>
  );
};

const NavbarMobile = ({
  handleRadioChange,
  selectedTheme,
  isLoggedIn,
  handleSignOut,
}) => {
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
            isLoggedIn={isLoggedIn}
            handleSignOut={handleSignOut}
          />
        )}
      </JCUXContainer>
    </NavbarBoxOuter>
  );
};

const NavbarMobileMenu = ({
  handleRadioChange,
  selectedTheme,
  isLoggedIn,
  handleSignOut,
}) => {
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
        {isLoggedIn() ? (
          <JCUXButton onClick={handleSignOut}>Sign Out</JCUXButton>
        ) : (
          <LoginModal />
        )}
        <RegisterModal />
      </MenuBox2>
    </>
  );
};

export default Navbar;
