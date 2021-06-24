import React, { useState } from "react";

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
    <div>
      <div onClick={handlePrevClick}>Prev</div>
      {arrayOfSlides[currentIndex]}
      <div onClick={handleNextClick}>Next</div>
    </div>
  );
};

export default Carousel;
