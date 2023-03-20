import { useToast } from "@chakra-ui/react";
import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
  },

  reducers: {
    addProductCart: (state, action) => {
      const { id } = action.payload;
      const existingItem = state.products.find((item) => item.id === id);
      if (existingItem) {
        alert("You cannot add a duplicate item to your wishlist.");
      } else {
        state.products.push(action.payload);
      }
    },
    removeProductCart: (state, action) => {
      const id = action.payload.id.data._id;
      const index = state.products.findIndex((item) => item._id === id);
      if (index !== -1) {
        state.products.splice(index, 1);
      }
      
    },
  },
});

export const { addProductCart,removeProductCart } = cartSlice.actions;
export default cartSlice.reducer;
