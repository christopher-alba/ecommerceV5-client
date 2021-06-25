import { combineReducers } from "redux";
import { cartReducer } from "./cart";
import { shopReducer } from "./shop";

const rootReducer = combineReducers({
  shop: shopReducer,
  cart: cartReducer,
});

export default rootReducer;
