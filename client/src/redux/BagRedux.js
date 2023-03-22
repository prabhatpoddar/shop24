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
      const { _id, price, quantity } = action.payload;
      const existingItem = state.products.find((item) => item._id === _id);
      if (existingItem) {
        existingItem.quantity += quantity;
      } else {
        state.products.push(action.payload);
      }
      state.quantity += quantity;
      state.total += price * quantity;
    },
    removeProductBag: (state, action) => {
      const id = action.payload;
      const index = state.products.findIndex((item) => item._id === id);
      if (index !== -1) {
        const itemToRemove = state.products[index];
        state.products.splice(index, 1);
        state.quantity -= itemToRemove.quantity;
        state.total -= itemToRemove.price * itemToRemove.quantity;
      }
    },
    clearBag: (state) => {
      state.products = [];
      state.quantity = 0;
      state.total = 0;
    },
  },
});

export const { addProductBag, removeProductBag, clearBag } = bagSlice.actions;
export default bagSlice.reducer;
