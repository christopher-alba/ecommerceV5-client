import React from "react";
import {
  CategoryImage,
  CategoryOuterBox,
  CategoryInnerBox,
  CategoryInnerBoxLeft,
  CategoryTitle,
  ImageWrapper,
  CategoryDescription,
  ShopLink,
} from "./styled";
import useWindowWidth from "../../../../Hooks/useWindowWidth";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { updateFilters } from "../../../../Redux/actions/shop";

const CategoryBox = ({
  url,
  category,
  description,
  imageFirst,
  value,
  updateFilters,
}) => {
  const windowWidth = useWindowWidth();
  const handleCategoryClick = () => {
    updateFilters({
      categoryFilter: "none",
      typeFilter: value,
      orientationFilter: "none",
    });
  };
  if (imageFirst) {
    return (
      <CategoryOuterBox>
        <ImageWrapper>
          <CategoryImage src={url} />
        </ImageWrapper>
        <CategoryInnerBox>
          <CategoryTitle>{category}</CategoryTitle>
          <CategoryDescription>{description}</CategoryDescription>
          <Link
            to={`/shop?category=${category.toLowerCase()}`}
            onClick={handleCategoryClick}
          >
            <ShopLink>SHOP FOR {category}</ShopLink>
          </Link>
        </CategoryInnerBox>
      </CategoryOuterBox>
    );
  } else {
    if (windowWidth > 1000) {
      return (
        <CategoryOuterBox>
          <CategoryInnerBoxLeft>
            <CategoryTitle>{category}</CategoryTitle>
            <CategoryDescription>{description}</CategoryDescription>
            <Link
              to={`/shop?category=${category.toLowerCase()}`}
              onClick={handleCategoryClick}
            >
              <ShopLink>SHOP FOR {category}</ShopLink>
            </Link>
          </CategoryInnerBoxLeft>
          <ImageWrapper>
            <CategoryImage src={url} />
          </ImageWrapper>
        </CategoryOuterBox>
      );
    } else {
      return (
        <CategoryOuterBox>
          <ImageWrapper>
            <CategoryImage src={url} />
          </ImageWrapper>
          <CategoryInnerBox>
            <CategoryTitle>{category}</CategoryTitle>
            <CategoryDescription>{description}</CategoryDescription>
            <Link
              to={`/shop?category=${category.toLowerCase()}`}
              onClick={handleCategoryClick}
            >
              <ShopLink>SHOP FOR {category}</ShopLink>
            </Link>
          </CategoryInnerBox>
        </CategoryOuterBox>
      );
    }
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateFilters: (filters) => {
      dispatch(updateFilters(filters));
    },
  };
};

export default connect(undefined, mapDispatchToProps)(CategoryBox);
