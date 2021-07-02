import React from "react";
import styled from "styled-components";
import { Image } from "semantic-ui-react";
const StyledImage = styled(Image)`
  height: 100%;
  width: auto;
  object-fit: cover;
`;

const FileDisplayArea = styled("div")`
  height: 100px;
  width: 100px;
  margin-top: 15px;
`;
export const JCUXUploadImage = ({
  setImage,
  image,
  setImageError,
  noPreview,
}) => {
  return (
    <>
      <input
        type="file"
        style={{ width: "100%" }}
        onChange={(evt) => {
          const file = evt.target.files[0];

          var imageType = /image.*/;

          if (file && file.type.match(imageType)) {
            var reader = new FileReader();
            reader.onload = function (e) {
              setImage({ url: reader.result });
              if (setImageError) {
                setImageError(false);
              }
            };

            reader.readAsDataURL(file);
          } else {
            setImage(undefined);
          }
        }}
      />
      {image && !noPreview && (
        <FileDisplayArea>
          <StyledImage src={image && image.url} />
        </FileDisplayArea>
      )}
    </>
  );
};
