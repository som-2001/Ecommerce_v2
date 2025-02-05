import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  product: [],
  wishList: [], 
  cart: [],
  amount: 0,
  search: [],
  address:'',
  shippingDate:'',
  cartProducts:[]
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
      console.log("segse");
      action.payload.forEach((payload) => {
        if (!state.wishList.includes(payload?.product?._id)) {
          state.wishList.push(payload?.product?._id);
          
        }
      });

      localStorage.setItem("wishlist",JSON.stringify(state.wishList))
    },
    addwishList: (state, action) => {
      if (!state.wishList.includes(action?.payload)) {
        state.wishList.push(action?.payload);
        localStorage.setItem("wishlist",JSON.stringify(state.wishList))
      }
    },
    removeWishListProduct: (state, action) => {
      state.wishList = state.wishList.filter((id) => id !== action?.payload);
      localStorage.setItem("wishlist",JSON.stringify(state.wishList))
    },
    //Cart reducers
    initializeCart: (state, action) => {
      action.payload.forEach((payload) => {
        if (!state.cart.includes(payload?.product?._id)) {
          state.cart.push(payload?.product?._id);
          state.amount = state.amount + payload?.product?.offerPrice;
         
        }
      });
      localStorage.setItem("cart",JSON.stringify(state.cart))
    },
    addCart: (state, action) => {
      if (!state.cart.includes(action?.payload)) {
        state.cart.push(action?.payload);
        localStorage.setItem("cart",JSON.stringify(state.cart))
      }
    },
    cartProducts:(state,action)=>{
      state.cartProducts=action?.payload;
    },
    addAmount: (state, action) => {
      state.amount = state.amount + action.payload;
    },
    removeAmount: (state, action) => {
      state.amount = state.amount - action.payload;
    },
    removeCartProduct: (state, action) => {
      state.cart = state.cart.filter((id) => id !== action?.payload);
      localStorage.setItem("cart",JSON.stringify(state.cart))
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
  setShippingDate,
  cartProducts
} = productSlice.actions;

export default productSlice.reducer;
