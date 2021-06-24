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
  ProfileHeader,
  ProfileIcon,
  ProfileDropdownMenu,
} from "./styled";
import { JCUXButton as Button } from "../JCUX/JCUXButton";
import { JCUXLinkButton } from "../JCUX/JCUXLinkButton";
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
        username={authData && authData.me.username}
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
        username={authData && authData.me.username}
      />
    );
  }
};

const NavbarDesktop = ({
  handleRadioChange,
  selectedTheme,
  isLoggedIn,
  handleSignOut,
  username,
}) => {
  const [userDropdown, setUserDropdown] = useState(false);
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
              <div
                style={{
                  marginRight: "5px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <NavbarRadio
                  checked={selectedTheme.name === "dark"}
                  toggle
                  onChange={handleRadioChange}
                />
              </div>
              <NavbarIcon name="moon" />
            </NavbarThemeBox>
            {isLoggedIn() ? (
              <>
                <div style={{ marginRight: "20px" }}>
                  <ProfileIconAndMenu
                    userDropdown={userDropdown}
                    setUserDropdown={setUserDropdown}
                    username={username}
                  />
                </div>
                <div style={{ marginRight: "20px" }}>
                  <JCUXButton onClick={handleSignOut}>Sign Out</JCUXButton>
                </div>
              </>
            ) : (
              <div style={{ marginRight: "20px" }}>
                <LoginModal />
              </div>
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
  username,
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
            username={username}
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
  username,
}) => {
  const [userDropdown, setUserDropdown] = useState(false);
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
        <div
          style={{
            marginRight: "5px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <NavbarRadio
            checked={selectedTheme.name === "dark"}
            toggle
            onChange={handleRadioChange}
          />
        </div>
        <NavbarIcon name="moon" />
      </NavbarThemeBox>
      <MenuBox2>
        {isLoggedIn() ? (
          <div style={{ display: "flex" }}>
            <div style={{ marginRight: "20px" }}>
              <JCUXButton onClick={handleSignOut}>Sign Out</JCUXButton>
            </div>
            <div style={{ marginRight: "20px" }}>
              <ProfileIconAndMenu
                username={username}
                userDropdown={userDropdown}
                setUserDropdown={setUserDropdown}
              />
            </div>
          </div>
        ) : (
          <div style={{ marginRight: "20px" }}>
            <LoginModal />
          </div>
        )}
        <RegisterModal />
      </MenuBox2>
    </>
  );
};

const ProfileIconAndMenu = ({ setUserDropdown, userDropdown, username }) => {
  return (
    <div style={{ position: "relative" }}>
      <ProfileIcon onClick={() => setUserDropdown(!userDropdown)}>
        <ProfileHeader>
          {username[0].toUpperCase()} <i className="fas fa-bars"></i>
        </ProfileHeader>
      </ProfileIcon>
      {userDropdown && (
        <ProfileDropdownMenu>
          <div style={{ display: "flex" }}>
            Logged in as:
            <strong style={{ marginLeft: "1rem" }}>{username}</strong>
          </div>
          <JCUXLinkButton inverted to="/profile">
            Visit Profile
          </JCUXLinkButton>
        </ProfileDropdownMenu>
      )}
    </div>
  );
};

export default Navbar;
