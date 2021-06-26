import React from "react";
import styled from "styled-components";

const CharCount = styled("p")`
  font-size: 0.7rem;
  text-align: right;
`;

export const JCUXTextArea = ({ onChange, charCount, text, placeholder }) => {
  return (
    <>
      <textarea
        placeholder={placeholder}
        onChange={onChange}
        maxLength={charCount}
      />
      {text && (
        <CharCount>Characters Left | {charCount - text.length}</CharCount>
      )}
    </>
  );
};
