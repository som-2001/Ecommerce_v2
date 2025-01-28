import React from "react";
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Container,
  Badge,
  CardMedia,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import styles from "../styles/AuthNavbar.module.css";
import { SearchApiCall } from "./SearchApiCall";

export const AuthNavbar = () => {
  const navigate = useNavigate();
  const { wishList, cart } = useSelector((state) => state.product);



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
            sx={{
              display: { xs: "none", md: "inherit" },
              marginLeft: "5px",
              cursor: "pointer",
            }}
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
            <SearchApiCall/>

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
