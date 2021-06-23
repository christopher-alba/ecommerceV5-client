import React from "react";
import {
  HeroOuterBox,
  HeroSearchBox,
  SearchBoxTitle,
  CategoriesButton,
} from "./styled";
import Searchbar from "../../../Components/Searchbar";
const Hero = () => {
  return (
    <HeroOuterBox>
      <HeroSearchBox>
        <SearchBoxTitle>FIND YOUR FASHION</SearchBoxTitle>
        <Searchbar />
      </HeroSearchBox>
      <CategoriesButton>CATEGORIES</CategoriesButton>
    </HeroOuterBox>
  );
};

export default Hero;
