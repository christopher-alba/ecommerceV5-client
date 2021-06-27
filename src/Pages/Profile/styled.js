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
  object-fit: cover;
  box-shadow: 0px 2px 10px 1px ${({ theme }) => theme.colors.dropShadow};
`;
