import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { publicRequest } from "../requestMethod";
export const fetchData = createAsyncThunk("fetchData", async (url) => {
  const res = await publicRequest(`/${url}`);
  return res.data;
});

const productSlice = createSlice({
  name: "product",
  initialState: {
    isLoading: false,
    data: [],
    isError: false,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchData.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchData.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchData.rejected, (state, action) => {
      state.isError = true;
      console.log("error", action.payload);
    });
  },
});

export default productSlice.reducer;
