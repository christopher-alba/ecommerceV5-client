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
  ::-webkit-scrollbar {
    display: none;
  }
  ${ProductBoxOuter} {
    margin-right: 20px;
  }
  &:last-child {
    margin-right: 0px !important;
  }
`;
