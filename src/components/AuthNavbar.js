import React, { useEffect, useState } from "react";
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Container,
  Badge,
  InputAdornment,
  TextField,
  CardMedia,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Link, useNavigate } from "react-router-dom"; 
import SearchIcon from "@mui/icons-material/Search";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { setSearch } from "../Redux/ProductAdminSlice/ProductSlice";
import styles from "../styles/AuthNavbar.module.css";

export const AuthNavbar = () => {
  const navigate = useNavigate();
  const { wishList, cart } = useSelector((state) => state.product);
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    if (input.length === 0) {
      dispatch(setSearch([]));
    }
  }, [input, dispatch]);

  const handleSearch = () => {
    if (input?.length !== 0) {
      const urlParams = new URLSearchParams();
      urlParams.append("searchQuery", input);

      axios
        .get(
          `${
            process.env.REACT_APP_BASEURL
          }/products/filter?${urlParams.toString()}`,
          {
            withCredentials: true,
          }
        )
        .then((res) => {
          console.log(res?.data);
          dispatch(setSearch(res?.data?.products));
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  const pages = [
    {
      label: "Products",
      path: "/explore-products",
      icon: <HomeIcon />,
    },
    {
      label: "Wishlist",
      path: "/wishlist",
      icon: (
        <Badge badgeContent={wishList.length} color="error">
          <FavoriteBorderIcon />
        </Badge>
      ),
    },
    {
      label: "Cart",
      path: "/cart",
      icon: (
        <Badge badgeContent={cart.length} color="error">
          <ShoppingCartIcon />
        </Badge>
      ),
    },
    {
      label: "Profile",
      path: "/profile",
      icon: <AccountCircleIcon />,
    },
  ];

  return (
    <AppBar position="static" className={styles.Appbar}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <CardMedia
            component="img"
            image="https://res.cloudinary.com/dzc968nfw/image/upload/v1736507604/e-commerce/profiles/xfy4mgspxbtqoxiyycpu.webp"
            alt=""
            className={styles.cardMedia}
            sx={{
              display: { xs: "none", md: "block" },
            }}
            onClick={(e) => navigate("/")}
          />
          <Typography
            variant="h6"
            sx={{display: { xs: "none", md: "inherit" },marginLeft: "5px",cursor: "pointer",}}
            onClick={(e) => navigate("/")}
          >
            BikeMart
          </Typography>

          <Box
          className={styles.searchParent}
            sx={{
              gap: { xs: 2, md: 4 },
            }}
          >
            <TextField
              placeholder="Search…"
              autoComplete="off"
              onChange={(e) => setInput(e.target.value)}
              sx={{
                display: { xs: "none", sm: "block" },
                background: "#e1eef5",
                borderRadius: 7,
                "& .MuiOutlinedInput-notchedOutline": {
                  border: "none",
                },
                width: { xs: "150px", sm: "350px" },
                height: "55px",
                marginRight: 1,
              }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon
                      onClick={handleSearch}
                      sx={{
                        cursor: "pointer",
                        color: "#4a90e2",
                      }}
                    />
                  </InputAdornment>
                ),
              }}
            />

            {pages.map((page) => (
              <Box
                key={page.label}
                component={Link}
                to={page.path}
                className={styles.icons}
                sx={{
                  "&:hover": {
                    color: "rgba(255, 255, 255, 0.8)",
                  },
                }}
              >
                <span>{page.icon}</span>
                <Typography variant="body2" sx={{ mt: 0.5, fontSize: "11px" }}>
                  {page.label}
                </Typography>
              </Box>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
