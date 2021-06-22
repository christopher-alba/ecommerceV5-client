import styled from "styled-components";

const TitleWrapperOuter = styled("div")`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const TitleWrapperInner = styled("div")`
  width: 50%;
  border-bottom: 2px solid ${({ theme }) => theme.colors.secondary};
  text-align: center;
`;
const TitleHeader = styled("h1")`
  font-weight: 200;
`;
export const JCUXTitle = ({ children }) => {
  return (
    <TitleWrapperOuter>
      <TitleWrapperInner>
        <TitleHeader>{children}</TitleHeader>
      </TitleWrapperInner>
    </TitleWrapperOuter>
  );
};
