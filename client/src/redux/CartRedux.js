import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
  },
  reducers: {
    addProductCart: (state, action) => {
      state.products.push(action.payload);
    },
  },
});

export const { addProductCart } = cartSlice.actions;
export default cartSlice.reducer;
