import { UPDATE_FILTERS, UPDATE_SEARCH_STRING } from "../types/shop";

export const updateFilters = (filters) => {
  return {
    type: UPDATE_FILTERS,
    payload: filters,
  };
};

export const updateSearchString = (searchString) => {
  return {
    type: UPDATE_SEARCH_STRING,
    payload: searchString,
  };
};
