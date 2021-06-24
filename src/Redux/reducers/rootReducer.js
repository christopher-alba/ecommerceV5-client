import { combineReducers } from "redux";
import { carouselReducer } from "./carousel";
import { shopReducer } from "./shop";

const rootReducer = combineReducers({
  shop: shopReducer,
  carousel: carouselReducer,
});

export default rootReducer;
