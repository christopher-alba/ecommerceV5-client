import { useMutation } from "@apollo/client";
import React, { useState, useContext } from "react";
import { Image, Modal, Form } from "semantic-ui-react";
import { REGISTER } from "../../ApolloClient/mutations";
import { JCUXButton } from "../JCUX/JCUXButton";
import { ThemeContext } from "styled-components";

const RegisterModal = () => {
  const [register] = useMutation(REGISTER);
  const themeContext = useContext(ThemeContext);
  const [open, setOpen] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [usernameError, setUsernameError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [registerError, setRegisterError] = useState("");
  const handleSubmit = () => {
    if (username === "") {
      setUsernameError(true);
    }
    if (password === "") {
      setPasswordError(true);
    }
    register({
      variables: {
        username: username,
        password: password,
        permission: "BASIC",
      },
    })
      .then((res) => {
        localStorage.setItem("authorization", res.data.register.token);
        window.location.reload();
        setOpen(false);
      })
      .catch((res) => {
        setRegisterError(res.message);
      });
  };
  const handleNameChange = (evt) => {
    setUsernameError(false);
    setUsername(evt.target.value);
    setRegisterError("");
  };
  const handlePasswordChange = (evt) => {
    setPasswordError(false);
    setPassword(evt.target.value);
    setRegisterError("");
  };
  return (
    <Modal
      open={open}
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      trigger={<JCUXButton>Sign Up</JCUXButton>}
    >
      <Modal.Header>Sign Up</Modal.Header>
      <Modal.Content image>
        <Image
          size="large"
          src={themeContext.name === "light" ? "/hero.jpg" : "/hero-dark.jpg"}
          wrapped
          style={{ width: "100%" }}
        />
        <Modal.Description style={{ width: "100%" }}>
          <Form onSubmit={handleSubmit}>
            <Form.Input
              error={
                usernameError
                  ? {
                      content: "Please enter your username",
                      pointing: "below",
                    }
                  : false
              }
              style={{ display: "flex", flexDirection: "column" }}
            >
              <label>Username</label>
              <input
                placeholder="Username"
                onChange={handleNameChange}
                maxLength={20}
              />
              <h4>Characters left: {20 - username.length}</h4>
            </Form.Input>
            <Form.Input
              error={
                passwordError
                  ? {
                      content: "Please enter your password",
                      pointing: "below",
                    }
                  : false
              }
              style={{ display: "flex", flexDirection: "column" }}
            >
              <label>Password</label>
              <input
                type="password"
                placeholder="Password"
                onChange={handlePasswordChange}
              />
            </Form.Input>
            <h4 style={{ color: "black" }}>{registerError}</h4>
            <JCUXButton type="submit">Submit</JCUXButton>
          </Form>
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <JCUXButton onClick={() => setOpen(false)}>Cancel</JCUXButton>
      </Modal.Actions>
    </Modal>
  );
};

export default RegisterModal;
