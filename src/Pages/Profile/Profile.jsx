import { useQuery } from "@apollo/client";
import React from "react";
import { GET_PROFILE } from "../../ApolloClient/queries";
import {
  StyledBoxOuter,
  ProfilePicture,
  FlexCentered,
  NameHeader,
} from "./styled";
import { Loader } from "semantic-ui-react";
import { JCUXContainer } from "../../Components/JCUX/JCUXContainer";
import { JCUXTitle } from "../../Components/JCUX/JCUXTitle";
import Favourites from "./Favourites";
const Profile = ({ authData }) => {
  const { data, loading, error } = useQuery(GET_PROFILE, {
    variables: {
      userId: authData.me._id,
    },
  });

  if (loading) {
    return (
      <StyledBoxOuter>
        <Loader active={loading}>Loading Profile</Loader>
      </StyledBoxOuter>
    );
  }
  if (error) {
    return <StyledBoxOuter>{error.message}</StyledBoxOuter>;
  }
  const { firstName, lastName, favouriteProducts, profilePicture } =
    data.profile;
  console.log(favouriteProducts);
  return (
    <JCUXContainer>
      <FlexCentered>
        <ProfilePicture
          className="profilePicture"
          src={profilePicture || "doesnotexist.jpg"}
          alt="Profile"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src =
              "https://moonvillageassociation.org/wp-content/uploads/2018/06/default-profile-picture1.jpg";
          }}
        />
        <JCUXTitle marginTop="20px" marginBottom="20px">
          YOUR PROFILE
        </JCUXTitle>
        <NameHeader>
          Name:{" "}
          {firstName && lastName
            ? `${firstName} ${lastName}`
            : "You dont have a name registered in our database."}
        </NameHeader>
      </FlexCentered>

      <Favourites productIds={favouriteProducts} authData={authData} />
    </JCUXContainer>
  );
};

export default Profile;
