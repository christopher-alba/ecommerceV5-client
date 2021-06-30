import styled from "styled-components";

const TitleWrapperOuter = styled("div")`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 100px;
  margin-top: 100px;
`;
const TitleWrapperInner = styled("div")`
  width: 50%;
  border-bottom: 2px solid ${({ theme }) => theme.colors.secondary};
  text-align: center;
  transition: 300ms;
`;
const TitleHeader = styled("h1")`
  font-weight: 200;
`;
export const JCUXTitle = ({ children, marginTop, marginBottom }) => {
  return (
    <TitleWrapperOuter style={{ marginTop, marginBottom }}>
      <TitleWrapperInner>
        <TitleHeader>{children}</TitleHeader>
      </TitleWrapperInner>
    </TitleWrapperOuter>
  );
};
