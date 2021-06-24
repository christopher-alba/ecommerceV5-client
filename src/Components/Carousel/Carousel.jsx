import React, { useState } from "react";
import {
  PreviousButton,
  NextButton,
  CarouselOuterBox,
  CarouselIndicator,
  CarouselIndicatorsWrapper,
} from "./styled";

const Carousel = ({ children }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const arrayOfSlides = [];

  children.forEach((child) => {
    arrayOfSlides.push(child);
  });
  const handlePrevClick = () => {
    if (currentIndex === 0) {
      setCurrentIndex(children.length - 1);
    } else {
      setCurrentIndex(currentIndex - 1);
    }
  };
  const handleNextClick = () => {
    if (currentIndex === children.length - 1) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(currentIndex + 1);
    }
  };
  return (
    <CarouselOuterBox>
      <PreviousButton onClick={handlePrevClick}>
        <i className="fas fa-chevron-left"></i>
      </PreviousButton>
      {arrayOfSlides[currentIndex]}
      <NextButton onClick={handleNextClick}>
        <i className="fas fa-chevron-right"></i>
      </NextButton>
      <CarouselIndicatorsWrapper>
        {children.map((child, index) => {
          return (
            <CarouselIndicator
              style={{ background: currentIndex === index ? "lightblue" : "white" }}
              onClick={() => {
                setCurrentIndex(index);
              }}
            ></CarouselIndicator>
          );
        })}
      </CarouselIndicatorsWrapper>
    </CarouselOuterBox>
  );
};

export default Carousel;
