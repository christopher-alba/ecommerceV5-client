import { useMutation, useQuery } from "@apollo/client";
import React from "react";
import { UPDATE_PROFILE } from "../../ApolloClient/mutations";
import { GET_PRODUCT, GET_PROFILE, GET_SPECIFIC_PRODUCTS } from "../../ApolloClient/queries";
import { JCUXButton } from "../../Components/JCUX/JCUXButton";

const Favourites = ({ productIds, authData }) => {
  const { data, loading, error } = useQuery(GET_SPECIFIC_PRODUCTS, {
    variables: {
      ids: productIds.map((idObj) => idObj.productId),
    },
  });
  const [updateProfile] = useMutation(UPDATE_PROFILE);
  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>{error.message}</div>;
  }

  const specificProducts = data.specificProducts;

  const handleUnfavourite = (productId) => {
    updateProfile({
      variables: {
        profile: {
          userId: authData.me._id,
          favouriteProducts: productIds
            .map(idObj => {
              return idObj.productId
            })
            .filter((id) => {
              return id !== productId;
            })
            .map((id) => {
              return {
                productId: id,
              };
            }),
        },
      },
      refetchQueries: [
        {
          query: GET_PROFILE,
          variables: {
            userId: authData.me._id,
          },
        },
        {
          query: GET_PRODUCT,
          variables: {
            id: productId,
          },
        },
      ],
    });
  }

  return (
    <div>
      {specificProducts.map((product) => {
        return <><JCUXButton onClick={() => { handleUnfavourite(product.id) }}>Unfavourite</JCUXButton><h1>{product.name}</h1></>;
      })}
    </div>
  );
};

export default Favourites;
