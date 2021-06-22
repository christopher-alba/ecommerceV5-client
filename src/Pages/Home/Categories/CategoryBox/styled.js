import styled from "styled-components";
import { JCUXButton } from "../../../../Components/JCUX/JCUXButton";

export const CategoryImage = styled("img")`
  height: 500px;
  width: 100%;
  object-fit: cover;
`;

export const ImageWrapper = styled("div")`
  width: 60%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 2px 10px 1px ${({ theme }) => theme.colors.dropShadow};
  @media (max-width: 1000px) {
    width: 100%;
    height: 300px;
  }
`;

export const CategoryOuterBox = styled("div")`
  display: flex;
  flex-wrap: nowrap;
  @media (max-width: 1000px) {
    flex-wrap: wrap;
  }
  margin-bottom: 100px;
`;

export const CategoryInnerBox = styled("div")`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 50px;
  width: 40%;
  @media (max-width: 1000px) {
    width: 100%;
    margin-left: 0px;
  }
`;
export const CategoryInnerBoxLeft = styled("div")`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-right: 50px;
  width: 40%;
  @media (max-width: 1000px) {
    width: 100%;
    margin-right: 0px;
  }
`;
export const CategoryTitle = styled("h1")`
  background: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.primary};
  text-align: center;
  padding: 100px;
  box-shadow: 0px 2px 10px 1px ${({ theme }) => theme.colors.dropShadow};
  transition: 300ms;
  white-space: nowrap;
  @media (max-width: 1000px) {
    padding: 50px;
    margin-top: 14px !important;
  }
`;

export const CategoryDescription = styled("p")`
  @media (max-width: 1000px) {
    display: none;
  }
`;

export const ShopLink = styled(JCUXButton)`
  width: 100%;
`;
