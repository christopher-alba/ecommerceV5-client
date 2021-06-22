import styled from "styled-components";
import { ProductBoxOuter } from "../../../Components/ProductBox/styled";

export const TopPicksOuterBox = styled("div")`
  margin-top: 5%;
  margin-bottom: 5%;
`;

export const TopPicksProductsBox = styled("div")`
  display: flex;
  flex-wrap: nowrap;
  overflow-x: scroll;
  padding: 10px;
  ::-webkit-scrollbar {
    display: none;
  }
  ${ProductBoxOuter} {
    margin-right: 20px;
  }
  ${ProductBoxOuter}:last-of-type {
    margin-right: 0px !important;
  }
  user-select: none;
  scroll-behavior: smooth;
  margin-bottom: 50px;
`;

export const TopPicksBox = styled("div")`
  display: flex;
  flex-direction: row;
  height: 100%;
`;

export const ArrowBox = styled("div")`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px;
  color: ${({ theme }) => theme.colors.secondary};
  margin-left: 20px;
  margin-right: 20px;
  cursor: pointer;
  font-size: 2rem;
  @media (max-width: 1000px) {
    display: none;
  }
`;
