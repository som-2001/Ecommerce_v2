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
import { Link, useNavigate } from "react-router-dom"; // Import Link for routing
import SearchIcon from "@mui/icons-material/Search";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { setSearch } from "../Redux/ProductAdminSlice/ProductSlice";

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
    <AppBar
      position="static"
      sx={{
        opacity: 0.95,
        backgroundColor: "black",
        boxShadow: "none",
        paddingY: 1,
      
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <CardMedia
          component="img"
          image="https://files.oaiusercontent.com/file-FJK3hH92ZeU2mV4FCoPxCE?se=2025-01-15T14%3A03%3A22Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D299%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3Dimage.png&sig=3tSnEjkknlDBZnn3W6JocDQYprWlQMMWTQD6VI9bjHw%3D"
          alt=""
          sx={{ width: "50px", borderRadius: "50px",display: { xs: "none", md: "block" },cursor:"pointer" }}
          />
          <Typography
            variant="h6"
            sx={{ display: { xs: "none", md: "inherit" }, marginLeft: "5px",cursor:"pointer" }}
            onClick={(e) => navigate("/")}
          >
            BikeMart
          </Typography>

          <Box
            sx={{
              flexGrow: 1,
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
              gap: { xs: 2, md: 4 },
            }}
          >
            <TextField
              placeholder="Search…"
              autoComplete="off"
              onChange={(e) => setInput(e.target.value)}
              sx={{
                background: "#e1eef5",
                borderRadius: 7,
                "& .MuiOutlinedInput-notchedOutline": {
                  border: "none",
                },
                width:{xs:"150px",sm:"450px"},
                height: "55px",
                marginRight: 1,
              }}
              slotProps={{
                input: {
                  endAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon onClick={handleSearch} />
                    </InputAdornment>
                  ),
                },
              }}
            />

            {pages.map((page) => (
              <Box
                key={page.label}
                component={Link}
                to={page.path}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  color: "white",
                  textDecoration: "none",
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
