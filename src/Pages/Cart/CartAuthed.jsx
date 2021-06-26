import { useQuery, useMutation } from "@apollo/client";
import React from "react";
import { CLEAR_CART, UPDATE_CART } from "../../ApolloClient/mutations";
import { GET_CART } from "../../ApolloClient/queries";
import CartBody from "./CartBody";
import { Loader } from "semantic-ui-react";

const CartAuthed = ({ authData }) => {
  const { data, loading, error } = useQuery(GET_CART, {
    variables: {
      userId: authData && authData.me._id,
    },
  });
  const [clearCartMutation] = useMutation(CLEAR_CART);
  const [updateCartMutation] = useMutation(UPDATE_CART);
  if (loading) {
    return (
      <div style={{ position: "relative", height: "400px" }}>
        <Loader active={loading}>Fetching Top Picks</Loader>
      </div>
    );
  }
  if (error) {
    if (error.message !== "Please Login Again!") {
      return <div>CART ERROR: {error.message}</div>;
    }
  }

  const clearCart = () => {
    clearCartMutation({
      variables: {
        products: [],
        userId: authData.me._id,
      },
      refetchQueries: [
        {
          query: GET_CART,
          variables: {
            userId: authData.me._id,
          },
        },
      ],
    });
  };
  const removeFromCart = (id) => {
    updateCartMutation({
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
        products: data.cart.products
          .filter((product) => {
            return product.id !== id;
          })
          .map((product) => {
            return {
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
            };
          }),
      },
    });
  };
  const { products } = data.cart;
  return (
    <CartBody
      products={products}
      clearCart={clearCart}
      removeFromCart={removeFromCart}
      type="Personal"
    />
  );
};

export default CartAuthed;
