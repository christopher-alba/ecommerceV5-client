import React, { useState } from "react";
import { Modal, Form } from "semantic-ui-react";
import { JCUXButton } from "../JCUX/JCUXButton";
import { JCUXTextArea } from "../JCUX/JCUXTextArea";
import { JCUXInput } from "../JCUX/JCUXInput";
import styled from "styled-components";

const TriggerButton = styled(JCUXButton)`
  margin-right: 20px !important;
  @media (max-width: 1220px) {
    margin-right: 0px !important;
    margin-top: 10px !important;
  }
`;

const CreateProductModal = () => {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState(undefined);
  const [price, setPrice] = useState(undefined);
  const [description, setDescription] = useState(undefined);

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
      <Modal.Content>
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
