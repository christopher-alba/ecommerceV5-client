import React, { useState } from "react";
import {
  PreviousButton,
  NextButton,
  CarouselOuterBox,
  CarouselIndicator,
  CarouselIndicatorsWrapper,
} from "./styled";
import { Fade } from "../JCUX/JCUXFade";

export const Carousel = ({ children, height }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

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
    <CarouselOuterBox height={height}>
      <PreviousButton onClick={handlePrevClick}>
        <i className="fas fa-chevron-left"></i>
      </PreviousButton>
      {children.map((child, index) => {
        return <Fade in={currentIndex === index}>{child}</Fade>;
      })}
      <NextButton onClick={handleNextClick}>
        <i className="fas fa-chevron-right"></i>
      </NextButton>
      <CarouselIndicatorsWrapper>
        {children.map((child, index) => {
          return (
            <CarouselIndicator
              style={{
                background: currentIndex === index ? "#3477eb" : "white",
              }}
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

export const CarouselImage = ({ url }) => {
  return (
    <img
      style={{
        height: "100%",
        width: "100%",
        objectFit: "cover",
        position: "absolute",
        top: "0px",
        left: "0px",
      }}
      src={url}
      alt=""
    />
  );
};
