import React, { useEffect } from "react";
import {
  TopPicksOuterBox,
  TopPicksProductsBox,
  TopPicksBox,
  ArrowBox,
} from "./styled";
import { JCUXContainer } from "../../../Components/JCUX/JCUXContainer";
import { JCUXTitle } from "../../../Components/JCUX/JCUXTitle";
import ProductBox from "../../../Components/ProductBox";
import { topPicks } from "../../../data";
const TopPicks = () => {
  useEffect(() => {
    // makes top picks drag to scroll
    const slider = document.querySelector(".top-picks-main-wrapper");
    let mouseDown = false;
    let startX, scrollLeft;

    let startDragging = function (e) {
      if (!mouseDown) {
        slider.style.cursor = "grabbing";
      }
      mouseDown = true;
      startX = e.pageX - slider.offsetLeft;
      scrollLeft = slider.scrollLeft;
    };
    let stopDragging = function (event) {
      mouseDown = false;
      slider.style.cursor = "grab";
    };

    slider.addEventListener("mousemove", (e) => {
      e.preventDefault();
      if (!mouseDown) {
        return;
      }
      const x = e.pageX - slider.offsetLeft;
      const scroll = x - startX;
      slider.scrollLeft = scrollLeft - scroll;
    });

    // Add the event listeners
    slider.addEventListener("mousedown", startDragging, false);
    slider.addEventListener("mouseup", stopDragging, false);
    slider.addEventListener("mouseleave", stopDragging, false);
  });
  const onLeftArrowClick = () => {
    const topPicks = document.getElementsByClassName(
      "top-picks-main-wrapper"
    )[0];
    topPicks.style.scrollBehaviour = "smooth important!";
    topPicks.scrollLeft = topPicks.scrollLeft - 500;
    topPicks.style.scrollBehaviour = "auto important!";
  };
  const onRightArrowClick = () => {
    const topPicks = document.getElementsByClassName(
      "top-picks-main-wrapper"
    )[0];
    topPicks.style.scrollBehaviour = "smooth";
    topPicks.scrollLeft = topPicks.scrollLeft + 500;
    topPicks.style.scrollBehaviour = "auto";
  };
  return (
    <TopPicksOuterBox>
      <JCUXContainer>
        <JCUXTitle>MOST VIEWED PRODUCTS</JCUXTitle>
        <TopPicksBox>
          <ArrowBox onClick={onLeftArrowClick}>
            <i className="fas fa-chevron-left"></i>
          </ArrowBox>
          <TopPicksProductsBox className="top-picks-main-wrapper">
            {topPicks.map((product) => (
              <ProductBox product={product} />
            ))}
          </TopPicksProductsBox>
          <ArrowBox onClick={onRightArrowClick}>
            <i className="fas fa-chevron-right"></i>
          </ArrowBox>
        </TopPicksBox>
      </JCUXContainer>
    </TopPicksOuterBox>
  );
};

export default TopPicks;
