import { createSlice } from "@reduxjs/toolkit";

const bagSlice = createSlice({
  name: "bag",
  initialState: {
    products: [],
    quantity: 0,
    total: 0,
  },
  reducers: {
    addProductBag: (state, action) => {
      state.quantity += 1;
      state.products.push(action.payload);
      state.total += action.payload.price*action.payload.quantity;
    },
  },
});

export const { addProductBag } = bagSlice.actions;
export default bagSlice.reducer;
