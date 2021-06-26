import React, { useEffect, useState } from "react";
import { Modal, Form } from "semantic-ui-react";
import { JCUXButton } from "../JCUX/JCUXButton";
import { JCUXTextArea } from "../JCUX/JCUXTextArea";
import { JCUXInput } from "../JCUX/JCUXInput";
import { JCUXUploadImage } from "../JCUX/JCUXUploadImage";
import styled from "styled-components";
import { Dropdown } from "semantic-ui-react";
import { useMutation, useQuery } from "@apollo/client";
import { UPDATE_PRODUCT } from "../../ApolloClient/mutations";
import { GET_PRODUCT, GET_PRODUCTS } from "../../ApolloClient/queries";

const TriggerButton = styled(JCUXButton)`
  margin-right: 20px !important;
  @media (max-width: 1220px) {
    margin-right: 0px !important;
    margin-top: 10px !important;
  }
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
const UpdateProductModal = ({ productId }) => {
  const { data, loading, error } = useQuery(GET_PRODUCT, {
    variables: {
      id: productId,
    },
  });
  const product = data && data.product;
  const productImages =
    data &&
    data.product.images.map((imageObj) => {
      return {
        url: imageObj.url,
      };
    });
  const [updateProduct] = useMutation(UPDATE_PRODUCT);

  useEffect(() => {}, [productId]);
  const [open, setOpen] = useState(false);

  const [name, setName] = useState(product && product.name);
  const [nameError, setNameError] = useState(false);

  const [price, setPrice] = useState(product && product.price);
  const [priceError, setPriceError] = useState(false);

  const [description, setDescription] = useState(
    product && product.description
  );
  const [descriptionError, setDescriptionError] = useState(false);

  const [type, setType] = useState(product && product.clothingType);
  const [typeError, setTypeError] = useState(false);

  const [orientation, setOrientation] = useState(
    product && product.orientation
  );
  const [orientationError, setOrientationError] = useState(false);

  const [sizes, setSizes] = useState(product && product.sizes);
  const [sizesError, setSizesError] = useState(false);

  const [image1, setImage1] = useState(
    product && productImages && productImages[0]
  );
  const [image1Error, setImage1Error] = useState(false);

  const [image2, setImage2] = useState(
    product && productImages && productImages[1]
  );

  const [image3, setImage3] = useState(
    product && productImages && productImages[2]
  );

  const getImageArray = (img1, img2, img3) => {
    let imagesArray = [];
    if (img1) {
      imagesArray.push(img1);
    }
    if (img2) {
      imagesArray.push(img2);
    }
    if (img3) {
      imagesArray.push(img3);
    }
    return imagesArray;
  };

  const handleSubmit = () => {
    console.log("submitting form");
    if (
      name &&
      price &&
      description &&
      type &&
      orientation &&
      sizes &&
      sizes.length > 0 &&
      image1
    ) {
      updateProduct({
        variables: {
          product: {
            id: productId,
            name,
            price: Number(price),
            description,
            clothingType: type,
            orientation,
            images: getImageArray(image1, image2, image3),
            sizes,
          },
        },
        refetchQueries: [
          {
            query: GET_PRODUCTS,
          },
        ],
      });
      setOpen(false);
      window.location.reload();
    } else {
      if (!name) {
        setNameError(true);
      }
      if (!price) {
        setPriceError(true);
      }
      if (!description) {
        setDescriptionError(true);
      }
      if (!type) {
        setTypeError(true);
      }
      if (!orientation) {
        setOrientationError(true);
      }
      if (!sizes || sizes.length === 0) {
        setSizesError(true);
      }
      if (!image1) {
        setImage1Error(true);
      }
    }
  };
  const handleNameChange = (evt) => {
    setName(evt.target.value);
    setNameError(false);
  };
  const handlePriceChange = (evt) => {
    setPrice(evt.target.value);
    setPriceError(false);
  };
  const handleDescriptionChange = (evt) => {
    setDescription(evt.target.value);
    setDescriptionError(false);
  };
  const handleTypeChange = (evt, dropdown) => {
    setType(dropdown.value);
    setTypeError(false);
  };
  const handleOrientationChange = (evt, dropdown) => {
    setOrientation(dropdown.value);
    setOrientationError(false);
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
    setSizesError(false);
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
  };

  if (loading) {
    return <div>loading...</div>;
  }
  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <Modal
      open={open}
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      trigger={
        <TriggerButton fluid nowrap>
          Update product
        </TriggerButton>
      }
    >
      <Modal.Header>Update Product</Modal.Header>
      <Modal.Content image>
        <Modal.Description style={{ width: "100%" }}>
          <Form onSubmit={handleSubmit} id="createProductForm">
            <Form.Input
              style={{ display: "flex", flexDirection: "column" }}
              error={
                nameError
                  ? {
                      content: "You must enter a product's name",
                    }
                  : false
              }
            >
              <label>Name</label>
              <JCUXInput
                placeholder="Name"
                onChange={handleNameChange}
                charCount={50}
                text={name}
                defaultValue={product.name}
              />
            </Form.Input>
            <Form.Input
              style={{ display: "flex", flexDirection: "column" }}
              error={
                priceError
                  ? {
                      content: "You must enter a product's price",
                    }
                  : false
              }
            >
              <label>Price</label>
              <input
                type="number"
                placeholder="Price"
                step=".01"
                onChange={handlePriceChange}
                onKeyPress={(evt) => {
                  if (evt.key === "-" || evt.key === "e") {
                    evt.preventDefault();
                  }
                }}
                defaultValue={product.price}
              />
            </Form.Input>
            <Form.Input
              style={{ display: "flex", flexDirection: "column" }}
              error={
                descriptionError
                  ? {
                      content: "You must enter a product's description",
                    }
                  : false
              }
            >
              <label>Description</label>
              <JCUXTextArea
                placeholder="Description"
                onChange={handleDescriptionChange}
                charCount={1000}
                text={description}
                rows={4}
                defaultValue={product.description}
              />
            </Form.Input>
            <Form.Input
              style={{ display: "flex", flexDirection: "column" }}
              error={
                typeError
                  ? {
                      content: "You must choose a product's clothing type",
                    }
                  : false
              }
            >
              <label>Clothing Type</label>
              <Dropdown
                selection
                placeholder="Clothing Type"
                options={clothingTypes}
                onChange={handleTypeChange}
                defaultValue={product.clothingType}
              />
            </Form.Input>
            <Form.Input
              style={{ display: "flex", flexDirection: "column" }}
              error={
                orientationError
                  ? {
                      content: "You must choose a product's orientation",
                    }
                  : false
              }
            >
              <label>Orientation</label>
              <Dropdown
                selection
                placeholder="Orientation"
                options={orientations}
                onChange={handleOrientationChange}
                defaultValue={product.orientation}
              />
            </Form.Input>
            <Form.Input
              style={{ display: "flex", flexDirection: "column" }}
              error={
                sizesError
                  ? {
                      content: "You must choose a product's sizes and stock",
                    }
                  : false
              }
            >
              <label>Sizes</label>
              <Dropdown
                placeholder="Sizes"
                fluid
                multiple
                selection
                options={sizesArray}
                onChange={handleSizesChange}
                defaultValue={product.sizes.map((sizeObj) => {
                  return sizeObj.size;
                })}
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

            <div>
              <Form.Input
                style={{ display: "flex", flexDirection: "column" }}
                error={
                  image1Error
                    ? {
                        content: "You must choose a product's first image.",
                      }
                    : false
                }
              >
                <label style={{ marginBottom: "5px", marginTop: "10px" }}>
                  Image 1 (compulsary upload)
                </label>
                <JCUXUploadImage
                  setImage={setImage1}
                  image={image1}
                  setImageError={setImage1Error}
                />
              </Form.Input>
              <Form.Input style={{ display: "flex", flexDirection: "column" }}>
                <label style={{ marginBottom: "5px", marginTop: "10px" }}>
                  Image 2
                </label>
                <JCUXUploadImage setImage={setImage2} image={image2} />
              </Form.Input>
              <Form.Input style={{ display: "flex", flexDirection: "column" }}>
                <label style={{ marginBottom: "5px", marginTop: "10px" }}>
                  Image 3
                </label>
                <JCUXUploadImage setImage={setImage3} image={image3} />
              </Form.Input>
            </div>
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

export default UpdateProductModal;
