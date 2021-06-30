import styled from "styled-components";

export const StyledBoxOuter = styled("div")`
  height: 90vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ProfilePicture = styled("img")`
  height: 200px;
  width: 200px;
  margin-top: 50px;
  object-fit: cover;
  box-shadow: 0px 2px 10px 1px ${({ theme }) => theme.colors.dropShadow};
`;

export const FlexCentered = styled("div")`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const NameHeader = styled("h1")`
  margin-top: 0px !important;
  text-align: center;
  font-weight: 200;
`;

export const ProductDivOuter = styled("div")`
  display: flex;
  width: 100%;
  height: 325px;
  margin-top: 50px;
  margin-bottom: 50px;
  border: 2px solid ${({ theme }) => theme.colors.secondary};
  box-shadow: 0px 2px 10px 1px ${({ theme }) => theme.colors.dropShadow};
  @media (max-width: 1700px) {
    height: fit-content;
  }
  @media (max-width: 1000px) {
    flex-wrap: wrap;
  }
`;

export const ProductCarouselContainer = styled("div")`
  display: flex;
  justify-content: center;
  width: 500px;
  @media (max-width:1000px){
    height:300px;
    width: 100%;
  }
`;

export const ProductInfoContainer = styled("div")`
  padding: 20px;
  display: flex;
  @media (max-width: 1700px) {
    flex-wrap: wrap;
  }
`;

export const ProductInfoBox1 = styled("div")`
  width: 50%;
  @media (max-width: 1700px) {
    width: 100%;
  }
`;

export const ButtonContainer = styled("div")`
  display: flex;
  * {
    margin-right: 10px !important;
  }
`;

export const ProductInfoBox2 = styled("div")`
  display: flex;
  height: 200px;
  flex-direction: column;
  justify-content: space-between;
  @media (max-width: 1700px) {
    height: fit-content;
  }
`;

export const ProductStocksBox = styled("div")`
  width: 50%;
  padding: 20px;
  margin-left: 20px;
  border: 1px solid ${({ theme }) => theme.colors.secondary};
  overflow-y: auto;
  @media (max-width: 1700px) {
    width: 100%;
    margin-left: 0px;
    margin-top: 20px;
  }
`;
