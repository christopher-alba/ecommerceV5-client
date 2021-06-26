import React from "react";
import styled from "styled-components";

const CharCount = styled("p")`
  font-size: 0.7rem;
  text-align: right;
`;
const TextArea = styled("textarea")`
  resize: none !important;
`;
export const JCUXTextArea = ({
  onChange,
  charCount,
  text,
  placeholder,
  rows,
}) => {
  return (
    <>
      <TextArea
        placeholder={placeholder}
        onChange={onChange}
        maxLength={charCount}
        rows={rows}
      />
      {text && (
        <CharCount>Characters Left | {charCount - text.length}</CharCount>
      )}
    </>
  );
};
