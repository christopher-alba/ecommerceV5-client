import React from "react";
import { JCUXTitle } from "../../../Components/JCUX/JCUXTitle";
import { JCUXContainer } from "../../../Components/JCUX/JCUXContainer";
import { CategoriesOuterBox } from "./styled";
import CategoryBox from "./CategoryBox";
import styled from "styled-components";

const StyledJCUXTitle = styled(JCUXTitle)`
  margin: 200px;
`;

const Categories = () => {
  return (
    <CategoriesOuterBox>
      <JCUXContainer>
        <StyledJCUXTitle>CATEGORIES</StyledJCUXTitle>
        <CategoryBox
          url="./t-shirts.jpg"
          category="T-SHIRTS"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          imageFirst={true}
        />
        <CategoryBox
          url="./shorts.jpg"
          category="SHORTS"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          imageFirst={false}
        />
        <CategoryBox
          url="./pants.jpg"
          category="PANTS"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          imageFirst={true}
        />
        <CategoryBox
          url="./jackets.jpg"
          category="JACKETS"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          imageFirst={false}
        />
      </JCUXContainer>
    </CategoriesOuterBox>
  );
};

export default Categories;
