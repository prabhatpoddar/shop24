import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./CartRedux";
import productReducer from "./productRedux";
export default configureStore({
  reducer: {
    cart: cartReducer,
    product: productReducer,
  },
});
