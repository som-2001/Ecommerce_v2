import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  product: [],
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      console.log(action.payload);
      state.product = { ...state.product, ...action.payload };
    },
    resetProduct: () => initialState, // Reset state to initial values
  },
});

export const { addProduct, resetProduct } = productSlice.actions;

export default productSlice.reducer;
