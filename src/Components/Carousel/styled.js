import styled from "styled-components";

export const PreviousButton = styled("div")`
  position: absolute;
  left: 0px;
  top: 0px;
  height: 100%;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 3rem;
  color: white;
  z-index: 1;
  text-shadow: 0px 0px 10px ${({ theme }) => theme.colors.dropShadow};
  &:hover {
    background: ${({ theme }) => theme.colors.dropShadow};
  }
  transition: 300ms;
  cursor: pointer;
  @media (max-width: 500px) {
    font-size: 1.5rem;
  }
`;

export const NextButton = styled("div")`
  position: absolute;
  top: 0px;
  right: 0px;
  height: 100%;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 3rem;
  color: white;
  text-shadow: 0px 0px 10px ${({ theme }) => theme.colors.dropShadow};
  &:hover {
    background: ${({ theme }) => theme.colors.dropShadow};
  }
  transition: 300ms;
  @media (max-width: 500px) {
    font-size: 1.5rem;
  }
  cursor: pointer;
`;

export const CarouselOuterBox = styled("div")`
  position: relative;
  user-select: none;
  overflow: hidden;
  height: ${({ height }) => {
    if (height) {
      return height;
    } else {
      return "700px";
    }
  }};
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 2px 10px 1px ${({ theme }) => theme.colors.dropShadow};
  @media (max-width: 500px) {
    height: ${({ height }) => {
      if (height) {
        return height;
      } else {
        return "350px";
      }
    }};
  }
`;

export const CarouselIndicator = styled("div")`
  width: 15px;
  height: 15px;
  background: red;
  border-radius: 50%;
  margin-right: 20px;
  &:last-of-type {
    margin-right: 0px;
  }
  box-shadow: 0px 2px 10px 1px ${({ theme }) => theme.colors.dropShadow};
  cursor: pointer;
`;

export const CarouselIndicatorsWrapper = styled("div")`
  position: absolute;
  bottom: 10px;
  display: flex;
  justify-content: center;
`;
