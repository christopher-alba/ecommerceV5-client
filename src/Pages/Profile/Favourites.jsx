import { useMutation, useQuery } from "@apollo/client";
import React, { useContext } from "react";
import { UPDATE_PROFILE } from "../../ApolloClient/mutations";
import {
  GET_PRODUCT,
  GET_PROFILE,
  GET_SPECIFIC_PRODUCTS,
} from "../../ApolloClient/queries";
import { JCUXButton } from "../../Components/JCUX/JCUXButton";
import { JCUXTitle } from "../../Components/JCUX/JCUXTitle";
import { JCUXLinkButton } from "../../Components/JCUX/JCUXLinkButton";
import {
  ProductDivOuter,
  ProductCarouselContainer,
  ProductInfoContainer,
  ProductInfoBox1,
  ProductInfoBox2,
  ButtonContainer,
  ProductStocksBox,
} from "./styled";
import { Carousel, CarouselImage } from "../../Components/Carousel";
import { Table } from "semantic-ui-react";
import { ThemeContext } from "styled-components";

const Favourites = ({ productIds, authData }) => {
  const { data, loading, error } = useQuery(GET_SPECIFIC_PRODUCTS, {
    variables: {
      ids: productIds.map((idObj) => idObj.productId),
    },
  });
  const [updateProfile] = useMutation(UPDATE_PROFILE);
  const themeContext = useContext(ThemeContext);
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
            .map((idObj) => {
              return idObj.productId;
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
  };

  return (
    <div>
      <JCUXTitle>Favourite Products</JCUXTitle>
      {specificProducts.length > 0 ? (
        specificProducts.map((product) => {
          return (
            <ProductDivOuter>
              <ProductCarouselContainer>
                <Carousel height="100%">
                  {product.images.map((image, index) => {
                    return <CarouselImage key={index} url={image.url} alt="" />;
                  })}
                </Carousel>
              </ProductCarouselContainer>
              <ProductInfoContainer>
                <ProductInfoBox1>
                  <h1 style={{ marginBottom: "0px" }}>{product.name}</h1>
                  <h4 style={{ marginTop: "0px", marginBottom: "0px" }}>
                    {product.orientation} | {product.clothingType}
                  </h4>
                  <h4 style={{ marginTop: "0px" }}>NZ${product.price}</h4>
                  <ProductInfoBox2>
                    <p>{product.description}</p>
                    <ButtonContainer>
                      <JCUXButton
                        onClick={() => {
                          handleUnfavourite(product.id);
                        }}
                      >
                        Unfavourite
                      </JCUXButton>
                      <JCUXLinkButton to={`product/${product.id}`}>
                        Visit
                      </JCUXLinkButton>
                    </ButtonContainer>
                  </ProductInfoBox2>
                </ProductInfoBox1>
                <ProductStocksBox>
                  <Table
                    basic="very"
                    celled
                    collapsing
                    style={{ width: "100%" }}
                    inverted={themeContext.name === "light" ? false : true}
                  >
                    <Table.Header>
                      <Table.Row>
                        <Table.HeaderCell>Size</Table.HeaderCell>
                        <Table.HeaderCell>Stock</Table.HeaderCell>
                      </Table.Row>
                    </Table.Header>
                    <Table.Body>
                      {product.sizes.map((sizeObj, index) => {
                        return (
                          <Table.Row key={index}>
                            <Table.Cell>{sizeObj.size}</Table.Cell>
                            <Table.Cell>{sizeObj.stock}</Table.Cell>
                          </Table.Row>
                        );
                      })}
                    </Table.Body>
                  </Table>
                </ProductStocksBox>
              </ProductInfoContainer>
            </ProductDivOuter>
          );
        })
      ) : (
        <h1 style={{ textAlign: "center", fontWeight: 200 }}>
          You have no favourite products right now. Visit a product's page to
          add it to your favourites!
        </h1>
      )}
    </div>
  );
};

export default Favourites;
