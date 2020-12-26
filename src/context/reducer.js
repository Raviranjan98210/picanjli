import {
  SET_IMAGES,
  SET_SEARCHED_IMAGES,
  RESET_SEARCHED_IMAGES,
  SET_IMAGES_BY_ORIENTATION,
  RESET_IMAGES_BY_ORIENTATION,
  SET_IMAGES_BY_CATEGORY,
  RESET_IMAGES_BY_CATEGORY,
} from "./Types";

export const initialState = {
  images: [],
  searchedImages: [],
  imagesByOrientation: [],
  imagesByCategory: [],
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
    case SET_IMAGES_BY_CATEGORY:
      return {
        ...state,
        imagesByCategory: [...state.imagesByCategory, ...action.payload],
      };
    case RESET_IMAGES_BY_CATEGORY:
      return {
        ...state,
        imagesByCategory: [],
      };
    default:
      return state;
  }
};

export default reducer;
