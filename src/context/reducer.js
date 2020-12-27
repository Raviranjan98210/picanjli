import {
  SET_IMAGES,
  SET_SEARCHED_IMAGES,
  RESET_SEARCHED_IMAGES,
  SET_IMAGES_BY_ORIENTATION,
  RESET_IMAGES_BY_ORIENTATION,
  SET_IMAGES_BY_CATEGORY,
  RESET_IMAGES_BY_CATEGORY,
  SET_IMAGES_BY_COLORS,
  RESET_IMAGES_BY_COLORS,
  SET_IMAGES_BY_TYPE,
  RESET_IMAGES_BY_TYPE,
} from "./Types";

export const initialState = {
  images: [],
  searchedImages: [],
  imagesByOrientation: [],
  imagesByCategory: [],
  imagesByColor: [],
  imagesByType: [],
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
    case SET_IMAGES_BY_COLORS:
      return {
        ...state,
        imagesByColor: [...state.imagesByColor, ...action.payload],
      };
    case RESET_IMAGES_BY_COLORS:
      return {
        ...state,
        imagesByColor: [],
      };
    case SET_IMAGES_BY_TYPE:
      return {
        ...state,
        imagesByType: [...state.imagesByType, ...action.payload],
      };
    case RESET_IMAGES_BY_TYPE:
      return {
        ...state,
        imagesBytType: [],
      };
    default:
      return state;
  }
};

export default reducer;
