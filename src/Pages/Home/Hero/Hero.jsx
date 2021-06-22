import React from "react";
import {
  HeroOuterBox,
  HeroSearchBox,
  SearchBoxTitle,
  SearchBoxInput,
  SearchBoxSubmit,
  SearchBox,
  CategoriesButton,
} from "./styled";

const Hero = () => {
  const handleEnterPress = (evt) => {
    if (evt.charCode === 13) {
      let button = document.getElementsByClassName("hero-search-submit")[0];
      button.click();
    }
  };
  return (
    <HeroOuterBox>
      <HeroSearchBox>
        <SearchBoxTitle>FIND YOUR FASHION</SearchBoxTitle>
        <SearchBox>
          <SearchBoxInput
            type="text"
            placeholder="search here"
            onKeyPress={handleEnterPress}
          />
          <SearchBoxSubmit to="/shop" className="hero-search-submit">
            <i className="fas fa-search"></i>
          </SearchBoxSubmit>
        </SearchBox>
      </HeroSearchBox>
      <CategoriesButton>CATEGORIES</CategoriesButton>
    </HeroOuterBox>
  );
};

export default Hero;
