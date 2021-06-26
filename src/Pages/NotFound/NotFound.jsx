import React from "react";
import styled from "styled-components";
import { JCUXContainer } from "../../Components/JCUX/JCUXContainer";
import { JCUXLinkButton } from "../../Components/JCUX/JCUXLinkButton";

export const NotFoundOuterBox = styled("div")`
  height: 90vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledContainer = styled(JCUXContainer)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ButtonContainer = styled("div")`
  ${JCUXLinkButton}:first-of-type {
    border-right: 0px !important;
  }
  ${JCUXLinkButton} {
    box-shadow: none !important;
  }
  box-shadow: 0px 2px 10px 1px ${({ theme }) => theme.colors.dropShadow};
  height: 31px;
  display: flex;
  align-items: center;
`;
const NotFound = () => {
  return (
    <NotFoundOuterBox>
      <StyledContainer>
        <h1>PAGE NOT FOUND</h1>
        <p>We apologize for any inconvenience.</p>
        <ButtonContainer>
          <JCUXLinkButton to="/shop">Browse our shop</JCUXLinkButton>
          <JCUXLinkButton to="/">Return to home</JCUXLinkButton>
        </ButtonContainer>
      </StyledContainer>
    </NotFoundOuterBox>
  );
};

export default NotFound;
