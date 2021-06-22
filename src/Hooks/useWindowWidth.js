import { useState, useEffect } from "react";

const useWindowWidth = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return function cleanUp() {
      window.removeEventListener("resize", handleResize);
    };
  });
  return windowWidth;
};

export default useWindowWidth;
