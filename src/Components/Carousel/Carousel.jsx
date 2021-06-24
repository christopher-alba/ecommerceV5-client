import React, { useState } from "react";
import { connect } from "react-redux";
import { updateCurrentIndex } from "../../Redux/actions/carousel";
import {
  PreviousButton,
  NextButton,
  CarouselOuterBox,
  CarouselIndicator,
  CarouselIndicatorsWrapper,
} from "./styled";

const Carousel = ({ children, updateCurrentIndex }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const arrayOfSlides = [];

  children.forEach((child) => {
    arrayOfSlides.push(child);
  });
  const handlePrevClick = () => {
    if (currentIndex === 0) {
      setCurrentIndex(children.length - 1);
      updateCurrentIndex(children.length - 1);
    } else {
      setCurrentIndex(currentIndex - 1);
      updateCurrentIndex(currentIndex - 1);
    }
  };
  const handleNextClick = () => {
    if (currentIndex === children.length - 1) {
      setCurrentIndex(0);
      updateCurrentIndex(0);
    } else {
      setCurrentIndex(currentIndex + 1);
      updateCurrentIndex(currentIndex + 1);
    }
  };

  return (
    <CarouselOuterBox>
      <PreviousButton onClick={handlePrevClick}>
        <i className="fas fa-chevron-left"></i>
      </PreviousButton>
      {children}
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
                updateCurrentIndex(index);
              }}
            ></CarouselIndicator>
          );
        })}
      </CarouselIndicatorsWrapper>
    </CarouselOuterBox>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateCurrentIndex: (currentIndex) => {
      dispatch(updateCurrentIndex(currentIndex));
    },
  };
};

export default connect(undefined, mapDispatchToProps)(Carousel);
