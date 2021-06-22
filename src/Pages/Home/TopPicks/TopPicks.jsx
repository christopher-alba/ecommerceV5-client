import React, { useEffect } from "react";
import { TopPicksOuterBox, TopPicksProductsBox } from "./styled";
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
      mouseDown = true;
      slider.style.cursor = "grabbing";
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
  return (
    <TopPicksOuterBox>
      <JCUXContainer>
        <JCUXTitle>MOST VIEWED PRODUCTS</JCUXTitle>
        <TopPicksProductsBox className="top-picks-main-wrapper">
          {topPicks.map((product) => (
            <ProductBox product={product} />
          ))}
        </TopPicksProductsBox>
      </JCUXContainer>
    </TopPicksOuterBox>
  );
};

export default TopPicks;
