import { SET_IMAGES } from "./Types";

export const initialState = {
  images: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case SET_IMAGES:
      return {
        ...state,
        images: [...state.images, ...action.payload],
      };

    default:
      return state;
  }
};

export default reducer;
