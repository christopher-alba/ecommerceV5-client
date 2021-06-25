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
import { AUTHENTICATE, GET_CART } from "../../ApolloClient/queries";
import { useQuery } from "@apollo/client";
import { JCUXButton } from "./styled";
import { Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
const JCUXMenuButton = styled(Button)`
  box-shadow: none !important;
  width: 60px;
  display: flex !important;
  justify-content: center;
`;

const Navbar = ({ setSelectedTheme, themes, selectedTheme, totalCost }) => {
  const { loading, error, data: authData } = useQuery(AUTHENTICATE);
  const { data: cartData } = useQuery(GET_CART, {
    variables: {
      userId: authData && authData.me._id,
    },
  });
  const windowWidth = useWindowWidth();
  console.log(cartData);
  let totalCostFinal = 0;

  if (cartData && authData) {
    totalCostFinal =
      cartData &&
      cartData.cart.products.reduce((accumulator, currentItem) => {
        return accumulator + currentItem.price;
      }, 0);
  } else {
    totalCostFinal = totalCost;
  }

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
        totalCost={totalCostFinal}
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
        totalCost={totalCostFinal}
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
  totalCost,
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
            <Link to="/cart" style={{ marginRight: "20px" }}>
              <JCUXButton icon labelPosition="right">
                NZ${totalCost.toFixed(2)} <Icon name="cart" />
              </JCUXButton>
            </Link>

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
  totalCost,
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
            totalCost={totalCost}
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
  totalCost,
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
      <div style={{ marginTop: "20px" }}>
        <Link to="/cart">
          <JCUXButton icon labelPosition="right">
            NZ${totalCost.toFixed(2)} <Icon name="cart" />
          </JCUXButton>
        </Link>
      </div>
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

const mapStateToProps = (state) => {
  return {
    totalCost: state.cart.products.reduce((accumulator, currentIndex) => {
      return accumulator + currentIndex.price;
    }, 0),
  };
};

export default connect(mapStateToProps)(Navbar);
