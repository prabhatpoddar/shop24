import { ERROR, LOADING, SUCCESS } from "./actionTypes";

const initialState = {
  isLoading: false,
  isError: false,
  wishlist: [],
};

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOADING:
      return { ...state, isLoading: true, isError: false };
    case SUCCESS:
      return { ...state, isLoading: false, isError: false, wishlist: payload };
    case ERROR:
      return { ...state, isLoading: false, isError: true };
    default:
      return state;
  }
};
