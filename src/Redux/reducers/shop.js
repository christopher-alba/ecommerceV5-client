import { UPDATE_FILTERS, UPDATE_SEARCH_STRING } from "../types/shop";

const initialState = {
  searchString: "",
  basicFilter: "none",
  orientationFilter: "none",
  typeFilter: "none",
};

export const shopReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_FILTERS:
      const { basicFilter, typeFilter, orientationFilter } = action.payload;
      console.log("TESTINGA");
      console.log({ basicFilter, typeFilter, orientationFilter });
      return {
        ...state,
        basicFilter,
        typeFilter,
        orientationFilter,
      };
    case UPDATE_SEARCH_STRING:
      return {
        ...state,
        searchString: action.payload,
      };
    default:
      return state;
  }
};
