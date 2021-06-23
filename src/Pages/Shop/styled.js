import styled from "styled-components";
import { ProductBoxOuter } from "../../Components/ProductBox/styled";

export const ProductsWrapper = styled("div")`
  display: flex;
  flex-wrap: wrap;
  ${ProductBoxOuter} {
    margin: 20px;
  }
  max-width:80vw;
  justify-content: center;
`;
