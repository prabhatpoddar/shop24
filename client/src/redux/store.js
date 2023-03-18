import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./CartRedux";
import bagReducer from "./BagRedux";
import productReducer from "./productRedux";
export default configureStore({
  reducer: {
    cart: cartReducer,
    product: productReducer,
    bag: bagReducer,
  },
});
