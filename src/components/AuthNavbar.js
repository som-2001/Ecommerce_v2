import React from "react";
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Container,
  Badge,
  InputAdornment,
  TextField,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Link, useNavigate } from "react-router-dom"; // Import Link for routing
import SearchIcon from "@mui/icons-material/Search";
import { useSelector } from "react-redux";

export const AuthNavbar = () => {
 
  const navigate=useNavigate();
  const {wishList,cart}=useSelector(state=>state.product);

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
        backgroundColor:"black",
        boxShadow: "none",
        paddingY: 1,
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
         
          <Typography variant="h6" sx={{display:{xs:"none",sm:"inherit"}}} onClick={(e)=>navigate("/")}>BikeMart</Typography>

        
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
              sx={{
                background: "#e1eef5",
                borderRadius: 7,
                "& .MuiOutlinedInput-notchedOutline": {
                  border: "none",
                },
                height: "55px",
                marginRight: 1,
              }}
              slotProps={{
                input: {
                  endAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon />
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
