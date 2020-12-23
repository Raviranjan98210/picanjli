import {
  SET_IMAGES,
  SET_SEARCHED_IMAGES,
  RESET_SEARCHED_IMAGES,
} from "./Types";

export const initialState = {
  images: [],
  searchedImages: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case SET_IMAGES:
      return {
        ...state,
        images: [...state.images, ...action.payload],
      };

    case SET_SEARCHED_IMAGES:
      return {
        ...state,
        searchedImages: [...state.searchedImages, ...action.payload],
      };

    case RESET_SEARCHED_IMAGES:
      return {
        ...state,
        searchedImages: [],
      };

    default:
      return state;
  }
};

export default reducer;
