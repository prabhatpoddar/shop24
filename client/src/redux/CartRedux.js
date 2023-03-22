import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
  },

  reducers: {
    addProductCart: (state, action) => {
      const { data } = action.payload;
      const existingItem = state.products.find((item) => item.data.direction === data.direction);
      if (existingItem !== undefined) {

        console.warn("You cannot add a duplicate item to your wishlist.");
      } else {
        state.products.push(action.payload);
      }
    },
    removeProductCart: (state, action) => {
      const id = action.payload
      const index = state.products.findIndex((item) => item.direction === id);
      if (index !== -1) {
        state.products.splice(index, 1);
      }
      
    },
  },
});

export const { addProductCart,removeProductCart } = cartSlice.actions;
export default cartSlice.reducer;
