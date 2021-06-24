import { UPDATE_CURRENT_INDEX } from "../types/carousel";

const defaultState = {
  currentIndex: 0,
};

export const carouselReducer = (state = defaultState, action) => {
  switch (action.type) {
    case UPDATE_CURRENT_INDEX:
      return {
        ...state,
        currentIndex: action.payload,
      };
    default:
      return state;
  }
};
