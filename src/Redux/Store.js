import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./ProductAdminSlice/ProductSlice.js";

export const Store = configureStore({
  reducer: {
    product: productReducer,
  },
  middleware:(getDefaultMiddleware)=>{
    return getDefaultMiddleware({
      serializableCheck: false,
    });
  }
});
