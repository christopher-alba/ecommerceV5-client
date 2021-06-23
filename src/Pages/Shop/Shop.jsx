import { useQuery } from "@apollo/client";
import React, { useEffect } from "react";
import { GET_PRODUCTS } from "../../ApolloClient/queries";
import ProductBox from "../../Components/ProductBox";
import { Loader } from "semantic-ui-react";
import { JCUXContainer } from "../../Components/JCUX/JCUXContainer";
import { JCUXTitle } from "../../Components/JCUX/JCUXTitle";
import { ProductsWrapper, FiltersWrapper, FiltersHeading } from "./styled";
import { Select } from "./styled";
import { JCUXButton } from "../../Components/JCUX/JCUXButton";

const basicOptions = [
  { key: "feminine", value: "a-z", text: "a-z" },
  { key: "z-a", value: "z-a", text: "z-a" },
  { key: "highest-price", value: "highest-price", text: "highest price" },
  { key: "lowest-price", value: "lowest-price", text: "lowest price" },
];
const categoryOptions = [
  { key: "t-shirts", value: "t-shirts", text: "t-shirts" },
  { key: "shorts", value: "shorts", text: "shorts" },
  { key: "pants", value: "pants", text: "pants" },
  { key: "jackets", value: "jackets", text: "jackets" },
];
const orientationOptions = [
  { key: "masculine", value: "masculine", text: "masculine" },
  { key: "feminine", value: "feminine", text: "feminine" },
  { key: "unisex", value: "unisex", text: "unisex" },
];

const Shop = () => {
  const { loading, error, data } = useQuery(GET_PRODUCTS);
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  if (loading) {
    return (
      <div style={{ position: "relative", height: "400px" }}>
        <Loader active={loading}>Fetching Top Picks</Loader>
      </div>
    );
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <JCUXContainer>
      <JCUXTitle>WELCOME TO THE SHOP</JCUXTitle>
      <FiltersWrapper>
        <FiltersHeading>Filters</FiltersHeading>
        <Select placeholder="Basic" options={basicOptions} />
        <Select placeholder="Category" options={categoryOptions} />
        <Select placeholder="Orientation" options={orientationOptions} />
        <JCUXButton>Apply Filters</JCUXButton>
      </FiltersWrapper>
      <ProductsWrapper>
        {data.products.map((product) => {
          return <ProductBox product={product} />;
        })}
      </ProductsWrapper>
    </JCUXContainer>
  );
};

export default Shop;
