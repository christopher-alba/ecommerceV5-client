import React, { useState } from "react";
import {
  HeroOuterBox,
  HeroSearchBox,
  SearchBoxTitle,
  CategoriesButton,
} from "./styled";
import Searchbar from "../../../Components/Searchbar";
import { connect } from "react-redux";
import { updateSearchString } from "../../../Redux/actions/shop";
const Hero = ({ updateSearchString }) => {
  const [searchString, setSearchString] = useState("");
  const searchToRedux = () => {
    updateSearchString(searchString);
  };
  return (
    <HeroOuterBox>
      <HeroSearchBox>
        <SearchBoxTitle>FIND YOUR FASHION</SearchBoxTitle>
        <Searchbar
          setSearchString={setSearchString}
          searchToRedux={searchToRedux}
        />
      </HeroSearchBox>
      <CategoriesButton>CATEGORIES</CategoriesButton>
    </HeroOuterBox>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateSearchString: (searchString) => {
      dispatch(updateSearchString(searchString));
    },
  };
};

export default connect(undefined, mapDispatchToProps)(Hero);
