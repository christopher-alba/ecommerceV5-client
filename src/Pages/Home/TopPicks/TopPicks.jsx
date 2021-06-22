import React from "react";
import { TopPicksOuterBox } from "./styled";
import { JCUXContainer } from "../../../Components/JCUX/JCUXContainer";
import { JCUXTitle } from "../../../Components/JCUX/JCUXTitle";
const TopPicks = () => {
  return (
    <TopPicksOuterBox>
      <JCUXContainer>
        <JCUXTitle>MOST VIEWED PRODUCTS</JCUXTitle>
      </JCUXContainer>
    </TopPicksOuterBox>
  );
};

export default TopPicks;
