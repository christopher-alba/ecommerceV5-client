import { UPDATE_CURRENT_INDEX } from "../types/carousel";

export const updateCurrentIndex = (currentIndex) => {
  return {
    type: UPDATE_CURRENT_INDEX,
    payload: currentIndex,
  };
};
