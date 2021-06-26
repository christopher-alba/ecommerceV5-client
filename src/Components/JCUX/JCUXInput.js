import styled from "styled-components";
import React from "react";

const CharCount = styled("p")`
  font-size: 0.7rem;
  text-align: right;
`;

export const JCUXInput = ({ onChange, text, charCount }) => {
  return (
    <>
      <input placeholder="Username" onChange={onChange} maxLength={charCount} />
      {text && text.length > 0 && (
        <CharCount>Characters left | {charCount - text.length}</CharCount>
      )}
    </>
  );
};
