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
const CategoryBox = ({ url, category, description, imageFirst }) => {
  const windowWidth = useWindowWidth();
  if (imageFirst) {
    return (
      <CategoryOuterBox>
        <ImageWrapper>
          <CategoryImage src={url} />
        </ImageWrapper>
        <CategoryInnerBox>
          <CategoryTitle>{category}</CategoryTitle>
          <CategoryDescription>{description}</CategoryDescription>
          <Link to={`/shop?category=${category.toLowerCase()}`}>
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
            <Link to={`/shop?category=${category.toLowerCase()}`}>
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
            <Link to={`/shop?category=${category.toLowerCase()}`}>
              <ShopLink>SHOP FOR {category}</ShopLink>
            </Link>
          </CategoryInnerBox>
        </CategoryOuterBox>
      );
    }
  }
};

export default CategoryBox;
