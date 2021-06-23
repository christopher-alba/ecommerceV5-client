import styled from "styled-components";
import { JCUXButton } from "../../../Components/JCUX/JCUXButton";

export const HeroOuterBox = styled("div")`
  height: 70vh;
  background: ${({ theme }) => {
    if (theme.name === "light") {
      return "url(hero.jpg)";
    } else {
      return "url(hero-dark.jpg)";
    }
  }};
  background-size: cover;
  background-position-y: 20%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  transition: 300ms;
`;

export const HeroSearchBox = styled("div")`
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.colors.primary};
  transition: 300ms;
  padding: 20px;
  width: 500px;
  box-shadow: 0px 2px 10px 2px ${({ theme }) => theme.colors.dropShadow};
  @media (max-width: 600px) {
    max-width: 90%;
  }
`;

export const SearchBoxTitle = styled("h1")`
  color: ${({ theme }) => theme.colors.secondary};
  transition: 300ms;
  text-align: center;
`;

export const CategoriesButton = styled(JCUXButton)`
  width: 500px !important;
  margin-top: 20px !important;
  margin-right: 0px !important;
  border: none !important;
  font-size: 1.5rem !important;
  @media (max-width: 600px) {
    max-width: 90%;
  }
`;
