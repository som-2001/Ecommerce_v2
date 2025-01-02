import React from "react";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Container,
  Badge,

} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Link } from "react-router-dom"; // Import Link for routing

// Example numbers for badge count (you can fetch this data dynamically)
const wishlistCount = 5; // Number of items in the wishlist
const cartCount = 3; // Number of items in the cart

const pages = [
  {
    label: "All Products",
    path: "/explore-products",
    icon: <HomeIcon />,
  },
  {
    label: "Wishlist",
    path: "/wishlist",
    icon: (
      <Badge badgeContent={wishlistCount} color="error">
        <FavoriteBorderIcon />
      </Badge>
    ),
  },
  {
    label: "Cart",
    path: "/cart",
    icon: (
      <Badge badgeContent={cartCount} color="error">
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

export const AuthNavbar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

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
          {/* Logo */}
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "white",
              textDecoration: "none",
            }}
          >
            <img
              src="../images/logo.png"
              alt="Logo"
              style={{ height: "70px", marginRight: "8px", objectFit: "cover" }}
            />
          </Typography>

          {/* Mobile View */}
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="open menu"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
          </Box>

          {/* Desktop View */}
          <Box
            sx={{
              flexGrow: 1,
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
              gap: { xs: 2, md: 4 },
            }}
          >
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
                <span >{page.icon}</span>
                <Typography variant="body2" sx={{ mt: 0.5,fontSize:"11px" }}>
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
