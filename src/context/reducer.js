import {
  SET_IMAGES,
  SET_SEARCHED_IMAGES,
  RESET_SEARCHED_IMAGES,
  SET_IMAGES_BY_ORIENTATION,
  RESET_IMAGES_BY_ORIENTATION,
} from "./Types";

export const initialState = {
  images: [],
  searchedImages: [],
  imagesByOrientation: [],
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
    case SET_IMAGES_BY_ORIENTATION:
      return {
        ...state,
        imagesByOrientation: [...state.imagesByOrientation, ...action.payload],
      };
    case RESET_IMAGES_BY_ORIENTATION:
      return {
        ...state,
        imagesByOrientation: [],
      };
    default:
      return state;
  }
};

export default reducer;
