import {
  ADD_TO_CART,
  CLEAR_CART,
  REMOVE_FROM_CART,
  SET_CART,
} from "../types/cart";

const defaultState = {
  products: [],
};

export const cartReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        products: [...state.products, action.payload],
      };
    case REMOVE_FROM_CART:
      return {
        products: state.products.filter((product) => {
          return product.id !== action.payload;
        }),
      };
    case CLEAR_CART:
      return {
        products: [],
      };
    case SET_CART:
      return {
        products: [...action.payload],
      };
    default:
      return state;
  }
};
