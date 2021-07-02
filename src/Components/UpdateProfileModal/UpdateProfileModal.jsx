import React, { useState } from "react";
import { useEffect } from "react";
import { Button, Header, Image, Modal, Form } from "semantic-ui-react";
import { JCUXInput } from "../JCUX/JCUXInput";
import { JCUXUploadImage } from "../JCUX/JCUXUploadImage";
import { JCUXButton } from "../JCUX/JCUXButton";
import { useMutation } from "@apollo/client";
import { UPDATE_PROFILE } from "../../ApolloClient/mutations";
import { GET_PROFILE } from "../../ApolloClient/queries";

const UpdateProfileModal = ({ profile }) => {
  const [open, setOpen] = useState(false);

  const [firstName, setFirstName] = useState(profile.firstName);
  const [firstNameError, setFirstNameError] = useState(false);

  const [lastName, setLastName] = useState(profile.lastName);
  const [lastNameError, setLastNameError] = useState(false);

  const [profilePicture, setProfilePicture] = useState(profile.profilePicture);
  const [profilePictureError, setProfilePictureError] = useState(false);

  const [updateProfile] = useMutation(UPDATE_PROFILE);

  useEffect(() => {
    setFirstName(profile.firstName);
    setLastName(profile.lastName);
    setProfilePicture(profile.profilePicture);
  }, [profile.firstName, profile.lastName, profile.profilePicture, open]);

  const handleFirstNameChange = (evt) => {
    setFirstName(evt.target.value);
    setFirstNameError(false);
  };
  const handleLastNameChange = (evt) => {
    setLastName(evt.target.value);
    setLastNameError(false);
  };
  const handleCancel = () => {
    setOpen(false);
  };
  const handleSubmit = () => {
    if (firstName && lastName && profilePicture && profilePicture.url) {
      updateProfile({
        variables: {
          profile: {
            userId: profile.userId,
            firstName: firstName,
            lastName: lastName,
            profilePicture: profilePicture,
          },
        },
        refetchQueries: [
          {
            query: GET_PROFILE,
            variables: {
              userId: profile.userId,
            },
          },
        ],
      });
      setOpen(false);
    } else {
      if (!firstName) {
        setFirstNameError(true);
      }
      if (!lastName) {
        setLastNameError(true);
      }
      if (!profilePicture) {
        setProfilePictureError(true);
      }
    }
  };
  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={<JCUXButton>Update Profile</JCUXButton>}
    >
      <Modal.Header>Update Profile</Modal.Header>
      <Modal.Content image>
        <Image
          size="medium"
          className="profilePicture"
          src={(profilePicture && profilePicture.url) || "doesnotexist.jpg"}
          alt="Profile"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src =
              "https://moonvillageassociation.org/wp-content/uploads/2018/06/default-profile-picture1.jpg";
          }}
          wrapped
        />
        <Modal.Description>
          <Header>Change Your Details Here</Header>
          <Form id="updateProfileForm" onSubmit={handleSubmit}>
            <Form.Input
              style={{ display: "flex", flexDirection: "column" }}
              error={
                firstNameError
                  ? {
                      content: "You must enter your first name",
                    }
                  : false
              }
            >
              <label>First Name</label>
              <JCUXInput
                placeholder="First Name"
                onChange={handleFirstNameChange}
                charCount={50}
                text={firstName}
                defaultValue={firstName}
              />
            </Form.Input>
            <Form.Input
              style={{ display: "flex", flexDirection: "column" }}
              error={
                lastNameError
                  ? {
                      content: "You must enter your last name",
                    }
                  : false
              }
            >
              <label>Last Name</label>
              <JCUXInput
                placeholder="Last Name"
                onChange={handleLastNameChange}
                charCount={50}
                text={lastName}
                defaultValue={lastName}
              />
            </Form.Input>
            <Form.Input
              style={{ display: "flex", flexDirection: "column" }}
              error={
                profilePictureError
                  ? {
                      content: "You must upload a profile picture",
                    }
                  : false
              }
            >
              <label>Profile Picture</label>
              <JCUXUploadImage
                setImage={setProfilePicture}
                image={profilePicture}
                noPreview={true}
                setImageError={setProfilePictureError}
              />
            </Form.Input>
          </Form>
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <JCUXButton onClick={handleCancel}>Cancel</JCUXButton>
        <JCUXButton type="submit" form="updateProfileForm">
          Update
        </JCUXButton>
      </Modal.Actions>
    </Modal>
  );
};

export default UpdateProfileModal;
