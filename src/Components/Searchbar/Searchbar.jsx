import React from "react";
import { SearchBoxInput, SearchBoxSubmit, SearchBox } from "./styled";

const Searchbar = () => {
  const handleEnterPress = (evt) => {
    if (evt.charCode === 13) {
      let button = document.getElementsByClassName("hero-search-submit")[0];
      button.click();
    }
  };
  return (
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
  );
};

export default Searchbar;
