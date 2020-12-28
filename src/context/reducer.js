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
  SET_ORIENTATION_TYPE,
  RESET_ORIENTATION_TYPE,
} from "./Types";

export const initialState = {
  images: [],
  searchedImages: [],
  imagesByOrientation: [],
  imagesByCategory: [],
  imagesByColor: [],
  imagesByType: [],
  orientation_type: "all",
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

    case SET_ORIENTATION_TYPE:
      return {
        ...state,
        orientation_type: action.payload,
      };
    case RESET_ORIENTATION_TYPE:
      return {
        ...state,
        orientation_type: "all",
      };
    default:
      return state;
  }
};

export default reducer;
