import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  product: [],
  wishList: [], // Add wishlist array here for storing product ids
  cart: [], // Add cart array here for storing product ids
  amount: 0,
  search: [],
  address:'',
  shippingDate:''
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      console.log(action.payload);
      state.product = { ...state.product, ...action.payload };
    },
    EditProduct: (state, action) => {
      console.log(action.payload);
      state.product = { ...state.product, ...action.payload };
    },
    //WishList reducers
    initializewishList: (state, action) => {
      action.payload.forEach((payload) => {
        if (!state.wishList.includes(payload?.product?._id)) {
          state.wishList.push(payload?.product?._id);
        }
      });
    },
    addwishList: (state, action) => {
      if (!state.wishList.includes(action?.payload)) {
        state.wishList.push(action?.payload);
      }
    },
    removeWishListProduct: (state, action) => {
      state.wishList = state.wishList.filter((id) => id !== action?.payload);
    },
    //Cart reducers
    initializeCart: (state, action) => {
      action.payload.forEach((payload) => {
        if (!state.cart.includes(payload?.product?._id)) {
          state.cart.push(payload?.product?._id);
          state.amount = state.amount + payload?.product?.offerPrice;
        }
      });
    },
    addCart: (state, action) => {
      if (!state.cart.includes(action?.payload)) {
        state.cart.push(action?.payload);
      }
    },
    addAmount: (state, action) => {
      state.amount = state.amount + action.payload;
    },
    removeAmount: (state, action) => {
      state.amount = state.amount - action.payload;
    },
    removeCartProduct: (state, action) => {
      state.cart = state.cart.filter((id) => id !== action?.payload);
    },
    setSearch: (state, action) => {
      state.search = action.payload;
    },
    resetProduct: () => initialState, // Reset state to initial values
    setAddressDetails:(state,action)=>{
      state.address=action.payload
    },
    setShippingDate:(state,action)=>{
      state.shippingDate=action.payload
    }
  },
});

export const {
  EditProduct,
  addProduct,
  resetProduct,
  initializewishList,
  addwishList,
  removeWishListProduct,
  initializeCart,
  addCart,
  removeCartProduct,
  addAmount,
  removeAmount,
  setSearch,
  setAddressDetails,
  setShippingDate
} = productSlice.actions;

export default productSlice.reducer;
