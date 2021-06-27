import { useQuery } from "@apollo/client";
import React from "react";
import { GET_PROFILE } from "../../ApolloClient/queries";
import { StyledBoxOuter, ProfilePicture } from "./styled";
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
      <JCUXTitle>YOUR PROFILE</JCUXTitle>

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
      <h1>
        Name:{" "}
        {firstName && lastName
          ? `${firstName} ${lastName}`
          : "You dont have a name registered in our database."}
      </h1>
      <Favourites productIds={favouriteProducts} />
    </JCUXContainer>
  );
};

export default Profile;
