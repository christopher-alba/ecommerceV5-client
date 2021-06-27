import { useMutation, useQuery } from "@apollo/client";
import React from "react";
import { GET_CART, GET_PRODUCT, GET_PROFILE } from "../../ApolloClient/queries";
import ProductBody from "./ProductBody";
import { UPDATE_CART, UPDATE_PROFILE } from "../../ApolloClient/mutations";
import { Loader } from "semantic-ui-react";
const ProductAuthed = ({ authData }) => {
  const { data, loading, error } = useQuery(GET_CART, {
    variables: {
      userId: authData.me._id,
    },
  });
  const { data: profileData, loading: profileLoading } = useQuery(GET_PROFILE, {
    variables: {
      userId: authData.me._id,
    },
  });
  const favouritesIds =
    profileData &&
    profileData.profile.favouriteProducts.map((object) => object.productId);

  const [updateCart] = useMutation(UPDATE_CART);
  const [updateProfile] = useMutation(UPDATE_PROFILE);

  if (loading || profileLoading) {
    return (
      <div style={{ position: "relative" }}>
        <Loader active={loading}>
          Fetching Shopping Cart and Profile Data
        </Loader>
      </div>
    );
  }
  if (error) {
    return <div>{error.message}</div>;
  }
  const handleToggleFavourites = (productId) => {
    if (favouritesIds.includes(productId)) {
      updateProfile({
        variables: {
          profile: {
            userId: authData.me._id,
            favouriteProducts: favouritesIds
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
    } else {
      favouritesIds.push(productId);
      updateProfile({
        variables: {
          profile: {
            userId: authData.me._id,
            favouriteProducts: favouritesIds.map((id) => {
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
  };
  const handleAddToCart = (product, size) => {
    let finalProductsArray = [];

    data.cart.products.forEach((product) => {
      finalProductsArray.push({
        productId: product.productId,
        images: product.images.map((image) => {
          return { url: image.url };
        }),
        name: product.name,
        size: product.size,
        orientation: product.orientation,
        clothingType: product.clothingType,
        price: product.price,
        description: product.description,
      });
    });

    finalProductsArray.push({
      productId: product.id,
      images: product.images.map((image) => {
        return { url: image.url };
      }),
      name: product.name,
      size: size,
      orientation: product.orientation,
      clothingType: product.clothingType,
      price: product.price,
      description: product.description,
    });

    updateCart({
      refetchQueries: [
        {
          query: GET_CART,
          variables: {
            userId: authData.me._id,
          },
        },
      ],
      variables: {
        userId: authData.me._id,
        products: finalProductsArray,
      },
    });
  };
  return (
    <ProductBody
      handleAddToCart={handleAddToCart}
      type="personal"
      favouritesIds={favouritesIds}
      handleToggleFavourites={handleToggleFavourites}
    />
  );
};

export default ProductAuthed;
