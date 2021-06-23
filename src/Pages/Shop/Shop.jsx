import { useQuery } from "@apollo/client";
import React, { useEffect, useState } from "react";
import { GET_PRODUCTS } from "../../ApolloClient/queries";
import ProductBox from "../../Components/ProductBox";
import { Loader } from "semantic-ui-react";
import { JCUXContainer } from "../../Components/JCUX/JCUXContainer";
import { JCUXTitle } from "../../Components/JCUX/JCUXTitle";
import {
  ProductsWrapper,
  FiltersWrapper,
  FiltersHeading,
  FiltersWrapperOuter,
  PageControlsOuter,
  PageNumber,
} from "./styled";
import { Select } from "./styled";
import { JCUXButton } from "../../Components/JCUX/JCUXButton";
import Searchbar from "../../Components/Searchbar";

const basicOptions = [
  { key: "none", value: "none", text: "none" },
  { key: "feminine", value: "a-z", text: "a-z" },
  { key: "z-a", value: "z-a", text: "z-a" },
  { key: "highest-price", value: "highest-price", text: "highest price" },
  { key: "lowest-price", value: "lowest-price", text: "lowest price" },
];
const categoryOptions = [
  { key: "none", value: "none", text: "none" },
  { key: "t-shirts", value: "tshirts", text: "t-shirts" },
  { key: "shorts", value: "shorts", text: "shorts" },
  { key: "pants", value: "pants", text: "pants" },
  { key: "jackets", value: "jackets", text: "jackets" },
];
const orientationOptions = [
  { key: "none", value: "none", text: "none" },
  { key: "masculine", value: "masculine", text: "masculine" },
  { key: "feminine", value: "feminine", text: "feminine" },
  { key: "unisex", value: "unisex", text: "unisex" },
];

const Shop = () => {
  const { loading, error, data } = useQuery(GET_PRODUCTS);

  const [basicFilter, setBasicFilter] = useState("none");
  const [typeFilter, setTypeFilter] = useState("none");
  const [orientationFilter, setOrientationFilter] = useState("none");
  const [basicFilterFinal, setBasicFilterFinal] = useState("none");
  const [typeFilterFinal, setTypeFilterFinal] = useState("none");
  const [orientationFilterFinal, setOrientationFilterFinal] = useState("none");
  const [searchString, setSearchString] = useState("");
  const [upperCount, setUpperCount] = useState(8);
  const [lowerCount, setLowerCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    window.scrollTo(0, 0);
  });

  if (loading) {
    return (
      <div style={{ position: "relative", height: "400px" }}>
        <Loader active={loading}>Fetching Products</Loader>
      </div>
    );
  }

  if (error) {
    return <div>{error.message}</div>;
  }
  let filteredProducts = [];
  if (data.products) {
    filteredProducts = [...data.products];
  }

  if (basicFilterFinal !== "none") {
    switch (basicFilterFinal) {
      case "a-z":
        filteredProducts = filteredProducts.sort((a, b) => {
          var textA = a.name.toUpperCase();
          var textB = b.name.toUpperCase();
          return textA < textB ? -1 : textA > textB ? 1 : 0;
        });
        break;
      case "z-a":
        filteredProducts = filteredProducts.sort((a, b) => {
          var textA = a.name.toUpperCase();
          var textB = b.name.toUpperCase();
          return textA > textB ? -1 : textA < textB ? 1 : 0;
        });
        break;
      case "highest-price":
        filteredProducts = filteredProducts.sort((a, b) => {
          return b.price - a.price;
        });
        break;
      case "lowest-price":
        filteredProducts = filteredProducts.sort((a, b) => {
          return a.price - b.price;
        });
        break;
      default:
        break;
    }
  }
  if (typeFilterFinal !== "none") {
    filteredProducts = filteredProducts.filter((product) => {
      return (
        product.clothingType.toLowerCase() === typeFilterFinal.toLowerCase()
      );
    });
  }
  if (orientationFilterFinal !== "none") {
    filteredProducts = filteredProducts.filter((product) => {
      return (
        product.orientation.toLowerCase() ===
        orientationFilterFinal.toLowerCase()
      );
    });
  }

  filteredProducts = filteredProducts.filter((product) => {
    return product.name.toLowerCase().includes(searchString.toLowerCase());
  });
  const maxPageCount = Math.ceil(filteredProducts.length / 8);

  filteredProducts = filteredProducts.slice(lowerCount, upperCount);

  const handlePrevClick = () => {
    if (lowerCount >= 8) {
      setLowerCount(lowerCount - 8);
      setUpperCount(upperCount - 8);
      setCurrentPage(currentPage - 1);
    }
  };
  const handleNextClick = () => {
    if (upperCount < data.products.length) {
      setLowerCount(lowerCount + 8);
      setUpperCount(upperCount + 8);
      setCurrentPage(currentPage + 1);
    }
  };
  const handleBasicChange = (evt, select) => {
    setBasicFilter(select.value);
  };
  const handleCategoryChange = (evt, select) => {
    setTypeFilter(select.value);
  };
  const handleOrientationChange = (evt, select) => {
    setOrientationFilter(select.value);
  };
  const handleSetFilters = () => {
    setBasicFilterFinal(basicFilter);
    setTypeFilterFinal(typeFilter);
    setOrientationFilterFinal(orientationFilter);
    setLowerCount(0);
    setUpperCount(8);
    setCurrentPage(1);
  };
  return (
    <JCUXContainer>
      <JCUXTitle>WELCOME TO THE SHOP</JCUXTitle>
      <FiltersWrapperOuter>
        <FiltersWrapper>
          <FiltersHeading>Filters</FiltersHeading>
          <Select
            placeholder="Basic"
            options={basicOptions}
            onChange={handleBasicChange}
          />
          <Select
            placeholder="Category"
            options={categoryOptions}
            onChange={handleCategoryChange}
          />
          <Select
            placeholder="Orientation"
            options={orientationOptions}
            onChange={handleOrientationChange}
          />
        </FiltersWrapper>
        <JCUXButton onClick={handleSetFilters}>Apply Filters</JCUXButton>
      </FiltersWrapperOuter>
      <Searchbar setSearchString={setSearchString} hasSearch />
      <PageControlsOuter>
        <JCUXButton disabled={lowerCount < 8} onClick={handlePrevClick}>
          Previous Page
        </JCUXButton>
        <PageNumber>
          {maxPageCount > 0
            ? `${currentPage}/${maxPageCount}`
            : "No products were found."}
        </PageNumber>
        <JCUXButton
          disabled={upperCount > data.products.length}
          onClick={handleNextClick}
        >
          Next Page
        </JCUXButton>
      </PageControlsOuter>
      <ProductsWrapper>
        {filteredProducts.map((product) => {
          return <ProductBox product={product} />;
        })}
      </ProductsWrapper>
      <PageControlsOuter>
        <JCUXButton disabled={lowerCount < 8} onClick={handlePrevClick}>
          Previous Page
        </JCUXButton>
        <PageNumber>
          {maxPageCount > 0
            ? `${currentPage}/${maxPageCount}`
            : "No products were found."}
        </PageNumber>
        <JCUXButton
          disabled={upperCount > data.products.length}
          onClick={handleNextClick}
        >
          Next Page
        </JCUXButton>
      </PageControlsOuter>
    </JCUXContainer>
  );
};

export default Shop;
