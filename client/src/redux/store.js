import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./CartRedux";
export default configureStore({
    reducer:{
        cart:cartReducer
    }
})