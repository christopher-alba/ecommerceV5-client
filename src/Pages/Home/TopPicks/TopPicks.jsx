import React from "react";
import { TopPicksOuterBox, TopPicksProductsBox } from "./styled";
import { JCUXContainer } from "../../../Components/JCUX/JCUXContainer";
import { JCUXTitle } from "../../../Components/JCUX/JCUXTitle";
import { topPicks } from "../../../data";
const TopPicks = () => {
  return (
    <TopPicksOuterBox>
      <JCUXContainer>
        <JCUXTitle>MOST VIEWED PRODUCTS</JCUXTitle>
        <TopPicksProductsBox>
          {topPicks.map((product) => (
            <div>{product.name}</div>
          ))}
        </TopPicksProductsBox>
      </JCUXContainer>
    </TopPicksOuterBox>
  );
};

export default TopPicks;
