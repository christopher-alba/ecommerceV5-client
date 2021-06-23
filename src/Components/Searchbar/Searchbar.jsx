import React from "react";
import { connect } from "react-redux";
import { SearchBoxInput, SearchBoxSubmit, SearchBox } from "./styled";

const Searchbar = ({
  setSearchString,
  searchToRedux,
  setUpperCount,
  setLowerCount,
  searchString,
}) => {
  const handleEnterPress = (evt) => {
    if (evt.charCode === 13) {
      let button = document.getElementsByClassName("hero-search-submit")[0];
      if (searchToRedux) {
        searchToRedux();
        if (setUpperCount && setLowerCount) {
          setUpperCount(8);
          setLowerCount(0);
        }
      }
      button.click();
    }
  };
  const handleInputChange = (evt) => {
    setSearchString(evt.target.value);
  };
  const handleSubmitClick = () => {
    searchToRedux();
    if (setUpperCount && setLowerCount) {
      setUpperCount(8);
      setLowerCount(0);
    }
  };
  return (
    <SearchBox>
      <SearchBoxInput
        type="text"
        placeholder="search here"
        onKeyPress={handleEnterPress}
        onChange={handleInputChange}
        defaultValue={searchString}
      />
      <SearchBoxSubmit
        to="/shop"
        className="hero-search-submit"
        onClick={handleSubmitClick}
      >
        <i className="fas fa-search"></i>
      </SearchBoxSubmit>
    </SearchBox>
  );
};

const mapStateToProps = (state) => {
  return {
    searchString: state.shop.searchString,
  };
};

export default connect(mapStateToProps)(Searchbar);
