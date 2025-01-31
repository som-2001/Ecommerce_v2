import { Box } from "@mui/material";
import axios from "axios";
import { SnackbarProvider } from "notistack";
import { useEffect } from "react";
import { useLocation, Outlet } from "react-router-dom";
import {
  cartProducts,
  initializeCart,
  initializewishList,
} from "../Redux/ProductAdminSlice/ProductSlice";
import { useDispatch } from "react-redux";

export const ScrollReset = () => {
  const location = useLocation(); // Get the current location
  const dispatch = useDispatch();

  useEffect(() => {
    if (location.pathname === "/explore-products" || location.pathname.startsWith("/success") ||
    location.pathname.startsWith("/cancel")) {
      axios
        .get(`${process.env.REACT_APP_BASEURL}/wishlist/wishlist`, {
          withCredentials: true,
        })
        .then((res) => {
          // setBike(res.data.wishlist);
          console.log(res.data.wishlist);
          dispatch(initializewishList(res.data.wishlist));
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [location.pathname, dispatch]);

  useEffect(() => {
    if (
      location.pathname === "/explore-products" ||
      location.pathname==="/cart" ||
      location.pathname.includes("bike-order-cart") ||
      location.pathname.startsWith("/success") ||
      location.pathname.startsWith("/cancel")
    ) {
      axios
        .get(`${process.env.REACT_APP_BASEURL}/cart/product/cart/view`, {
          withCredentials: true,
        })
        .then((res) => {
          dispatch(initializeCart(res.data.products));
          dispatch(cartProducts(res?.data?.products));
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [location.pathname, dispatch]);

  useEffect(() => {
    window.scrollTo(0, 0);
    console.log("Scrolled to top for:", location.pathname);
  }, [location.pathname]); 

  return (
    <Box>
      <SnackbarProvider />
      <Outlet />
    </Box>
  );
};
