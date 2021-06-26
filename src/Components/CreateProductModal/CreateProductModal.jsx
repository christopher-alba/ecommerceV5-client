import React, { useState } from "react";
import { Modal, Form, Image } from "semantic-ui-react";
import { JCUXButton } from "../JCUX/JCUXButton";
import { JCUXTextArea } from "../JCUX/JCUXTextArea";
import { JCUXInput } from "../JCUX/JCUXInput";
import styled from "styled-components";
import { Dropdown } from "semantic-ui-react";

const TriggerButton = styled(JCUXButton)`
  margin-right: 20px !important;
  @media (max-width: 1220px) {
    margin-right: 0px !important;
    margin-top: 10px !important;
  }
`;

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

const clothingTypes = [
  {
    key: "TSHIRTS",
    text: "T-shirt",
    value: "TSHIRTS",
  },
  {
    key: "SHORTS",
    text: "Shorts",
    value: "SHORTS",
  },
  {
    key: "PANTS",
    text: "Pants",
    value: "PANTS",
  },
  {
    key: "JACKETS",
    text: "Jacket",
    value: "JACKETS",
  },
];

const orientations = [
  {
    key: "MASCULINE",
    text: "Masculine",
    value: "MASCULINE",
  },
  {
    key: "FEMININE",
    text: "Feminine",
    value: "FEMININE",
  },
  {
    key: "UNISEX",
    text: "Unisex",
    value: "UNISEX",
  },
];

const sizesArray = [
  {
    key: "XS",
    text: "XS",
    value: "XS",
  },
  {
    key: "S",
    text: "S",
    value: "S",
  },
  {
    key: "M",
    text: "M",
    value: "M",
  },
  {
    key: "L",
    text: "L",
    value: "L",
  },
  {
    key: "XL",
    text: "XL",
    value: "XL",
  },
  {
    key: "XXL",
    text: "XXL",
    value: "XXL",
  },
  {
    key: "XL3",
    text: "XL3",
    value: "XL3",
  },
  {
    key: "XL4",
    text: "XL4",
    value: "XL4",
  },
  {
    key: "XL5",
    text: "XL5",
    value: "XL5",
  },
  {
    key: "XL6",
    text: "XL6",
    value: "XL6",
  },
];
const CreateProductModal = () => {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState(undefined);
  const [price, setPrice] = useState(undefined);
  const [description, setDescription] = useState(undefined);
  const [type, setType] = useState(undefined);
  const [orientation, setOrientation] = useState(undefined);
  const [sizes, setSizes] = useState(undefined);
  const [image1, setImage1] = useState(undefined);

  const handleSubmit = () => {
    console.log("submitting form");
  };
  const handleNameChange = (evt) => {
    setName(evt.target.value);
  };
  const handlePriceChange = (evt) => {
    setPrice(evt.target.value);
  };
  const handleDescriptionChange = (evt) => {
    setDescription(evt.target.value);
  };
  const handleTypeChange = (evt, dropdown) => {
    setType(dropdown.value);
  };
  const handleOrientationChange = (evt, dropdown) => {
    setOrientation(dropdown.value);
  };
  const handleSizesChange = (evt, dropdown) => {
    setSizes(
      dropdown.value.map((size, index) => {
        return {
          size: size,
          stock: 0,
        };
      })
    );
  };
  const handleStockChange = (index, evt) => {
    setSizes(
      sizes.map((sizeObj, sizeIndex) => {
        if (sizeIndex !== index) {
          return sizeObj;
        } else {
          return {
            size: sizeObj.size,
            stock: Number(evt.target.value),
          };
        }
      })
    );
    console.log(sizes);
  };
  return (
    <Modal
      open={open}
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      trigger={
        <TriggerButton fluid nowrap>
          Create product
        </TriggerButton>
      }
    >
      <Modal.Header>Create Product</Modal.Header>
      <Modal.Content image>
        <Modal.Description style={{ width: "100%" }}>
          <Form onSubmit={handleSubmit} id="createProductForm">
            <Form.Input style={{ display: "flex", flexDirection: "column" }}>
              <label>Name</label>
              <JCUXInput
                placeholder="Name"
                onChange={handleNameChange}
                charCount={50}
                text={name}
              />
            </Form.Input>
            <Form.Input style={{ display: "flex", flexDirection: "column" }}>
              <label>Price</label>
              <input
                type="number"
                placeholder="Price"
                onChange={handlePriceChange}
                onKeyPress={(evt) => {
                  if (evt.key === "-" || evt.key === "e") {
                    evt.preventDefault();
                  }
                }}
              />
            </Form.Input>
            <Form.Input style={{ display: "flex", flexDirection: "column" }}>
              <label>Description</label>
              <JCUXTextArea
                placeholder="Description"
                onChange={handleDescriptionChange}
                charCount={1000}
                text={description}
                rows={4}
              />
            </Form.Input>
            <Form.Input style={{ display: "flex", flexDirection: "column" }}>
              <label>Clothing Type</label>
              <Dropdown
                selection
                placeholder="Clothing Type"
                options={clothingTypes}
                onChange={handleTypeChange}
              />
            </Form.Input>
            <Form.Input style={{ display: "flex", flexDirection: "column" }}>
              <label>Orientation</label>
              <Dropdown
                selection
                placeholder="Orientation"
                options={orientations}
                onChange={handleOrientationChange}
              />
            </Form.Input>
            <Form.Input style={{ display: "flex", flexDirection: "column" }}>
              <label>Sizes</label>
              <Dropdown
                placeholder="Sizes"
                fluid
                multiple
                selection
                options={sizesArray}
                onChange={handleSizesChange}
              />
              {sizes &&
                sizes.map((sizeObj, index) => {
                  return (
                    <div>
                      <h5>{sizeObj.size}</h5>
                      <label>Stock</label>
                      <input
                        type="number"
                        value={sizeObj.stock}
                        onChange={(evt) => {
                          handleStockChange(index, evt);
                        }}
                        min={0}
                        onKeyPress={(evt) => {
                          if (evt.key === "-" || evt.key === "e") {
                            evt.preventDefault();
                          }
                        }}
                      />
                    </div>
                  );
                })}
            </Form.Input>
            <Form.Input>
              <div>
                <input
                  type="file"
                  variant="outlined"
                  style={{ width: "100%" }}
                  onChange={(evt) => {
                    const file = evt.target.files[0];

                    var imageType = /image.*/;

                    if (file && file.type.match(imageType)) {
                      var reader = new FileReader();
                      reader.onload = function (e) {
                        setImage1({ url: reader.result });
                      };

                      reader.readAsDataURL(file);
                    } else {
                      setImage1(undefined);
                    }
                  }}
                />
                {image1 && (
                  <FileDisplayArea>
                    <StyledImage
                      src={image1 && image1.url}
                      className="image1"
                    />
                  </FileDisplayArea>
                )}
              </div>
            </Form.Input>
          </Form>
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <JCUXButton onClick={() => setOpen(false)}>Cancel</JCUXButton>
        <JCUXButton type="submit" form="createProductForm">
          Submit
        </JCUXButton>
      </Modal.Actions>
    </Modal>
  );
};

export default CreateProductModal;
