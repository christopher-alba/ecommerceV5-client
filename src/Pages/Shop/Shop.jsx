import { useMutation, useQuery } from "@apollo/client";
import React, { useEffect, useState } from "react";
import { AUTHENTICATE, GET_PRODUCTS } from "../../ApolloClient/queries";
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
  AdminControlsWrapper,
  AdminControlButton,
} from "./styled";
import { Select } from "./styled";
import { JCUXButton } from "../../Components/JCUX/JCUXButton";
import Searchbar from "../../Components/Searchbar";
import { updateFilters, updateSearchString } from "../../Redux/actions/shop";
import AdminProductBox from "../../Components/AdminProductBox/AdminProductBox";
import { connect } from "react-redux";
import { DELETE_PRODUCT } from "../../ApolloClient/mutations";
import CreateProductModal from "../../Components/CreateProductModal";

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

const Shop = ({
  searchString,
  updateSearchString,
  typeFilter: typeFilterFinal,
  basicFilter: basicFilterFinal,
  orientationFilter: orientationFilterFinal,
  updateFilters,
}) => {
  const { loading, error, data } = useQuery(GET_PRODUCTS);
  const { data: authData, loading: authLoading } = useQuery(AUTHENTICATE);
  const [deleteProduct] = useMutation(DELETE_PRODUCT);
  const [basicFilter, setBasicFilter] = useState(basicFilterFinal);
  const [typeFilter, setTypeFilter] = useState(typeFilterFinal);
  const [orientationFilter, setOrientationFilter] = useState(
    orientationFilterFinal
  );
  const [selectedProduct, setSelectedProduct] = useState(undefined);
  const [searchStringLocal, setSearchString] = useState("");
  const [upperCount, setUpperCount] = useState(8);
  const [lowerCount, setLowerCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (loading || authLoading) {
    return (
      <div style={{ position: "relative", height: "400px" }}>
        <Loader active={loading}>Fetching Products and Authenticating</Loader>
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

  const slicedProducts = filteredProducts.slice(lowerCount, upperCount);
  const isAdmin = authData && authData.me.permission === "ADMIN";
  const handlePrevClick = () => {
    if (lowerCount >= 8) {
      window.scrollTo(0, 0);
      setLowerCount(lowerCount - 8);
      setUpperCount(upperCount - 8);
      setCurrentPage(currentPage - 1);
    }
  };
  const handleNextClick = () => {
    if (upperCount < filteredProducts.length) {
      window.scrollTo(0, 0);
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
    console.log({
      basicFilter,
      typeFilter,
      orientationFilter,
    });
    updateFilters({
      basicFilter,
      typeFilter,
      orientationFilter,
    });
    setLowerCount(0);
    setUpperCount(8);
    setCurrentPage(1);
  };
  const searchToRedux = () => {
    updateSearchString(searchStringLocal);
  };
  const handleDeselect = () => {
    setSelectedProduct(undefined);
  };
  const handleDeleteProduct = () => {
    deleteProduct({
      variables: {
        id: selectedProduct,
      },
      refetchQueries: [
        {
          query: GET_PRODUCTS,
        },
      ],
    });
  };
  return (
    <JCUXContainer>
      <JCUXTitle>WELCOME TO THE SHOP {isAdmin && "(ADMIN)"}</JCUXTitle>
      <FiltersWrapperOuter>
        <FiltersWrapper>
          <FiltersHeading>Filters</FiltersHeading>
          <Select
            placeholder="Basic"
            options={basicOptions}
            onChange={handleBasicChange}
            defaultValue={basicFilterFinal}
          />
          <Select
            placeholder="Category"
            options={categoryOptions}
            onChange={handleCategoryChange}
            defaultValue={typeFilterFinal}
          />
          <Select
            placeholder="Orientation"
            options={orientationOptions}
            onChange={handleOrientationChange}
            defaultValue={orientationFilterFinal}
          />
        </FiltersWrapper>
        <JCUXButton onClick={handleSetFilters}>Apply Filters</JCUXButton>
      </FiltersWrapperOuter>
      {isAdmin && (
        <FiltersWrapperOuter>
          <AdminControlsWrapper>
            <FiltersHeading>Admin Controls</FiltersHeading>
            <CreateProductModal />
            {selectedProduct && (
              <>
                <AdminControlButton fluid nowrap onClick={handleDeselect}>
                  Deselect Product
                </AdminControlButton>
                <AdminControlButton fluid nowrap>
                  Update Product
                </AdminControlButton>
                <AdminControlButton fluid nowrap onClick={handleDeleteProduct}>
                  Delete Product
                </AdminControlButton>
              </>
            )}
          </AdminControlsWrapper>
        </FiltersWrapperOuter>
      )}
      <Searchbar
        setSearchString={setSearchString}
        searchToRedux={searchToRedux}
        setLowerCount={setLowerCount}
        setUpperCount={setUpperCount}
      />
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
          disabled={upperCount > filteredProducts.length}
          onClick={handleNextClick}
        >
          Next Page
        </JCUXButton>
      </PageControlsOuter>
      <ProductsWrapper>
        {slicedProducts.map((product) => {
          return isAdmin ? (
            <AdminProductBox
              product={product}
              setSelectedProduct={setSelectedProduct}
              selectedProduct={selectedProduct}
            />
          ) : (
            <ProductBox product={product} />
          );
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
          disabled={upperCount > filteredProducts.length}
          onClick={handleNextClick}
        >
          Next Page
        </JCUXButton>
      </PageControlsOuter>
    </JCUXContainer>
  );
};

const mapStateToProps = (state) => {
  return {
    searchString: state.shop.searchString,
    typeFilter: state.shop.typeFilter,
    basicFilter: state.shop.basicFilter,
    orientationFilter: state.shop.orientationFilter,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    updateSearchString: (searchString) => {
      dispatch(updateSearchString(searchString));
    },
    updateFilters: (filters) => {
      dispatch(updateFilters(filters));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Shop);
