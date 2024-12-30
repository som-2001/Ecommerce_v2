import React from "react";
import { AppBar, Box, Toolbar, IconButton, Typography, Container, Button } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Link } from "react-router-dom"; // Import Link for routing

const pages = [
  { label: "All Products", path: "/explore-products", icon: <HomeIcon /> },
  { label: "Wishlist", path: "/Wishlist", icon: <FavoriteBorderIcon /> },
  { label: "Cart", path: "/cart", icon: <ShoppingCartIcon /> },
  { label: "Profile", path: "/profile", icon: <AccountCircleIcon /> },
];

export const AuthNavbar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
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
            <img src="../images/logo.png" alt="Logo" style={{ height: "70px", marginRight: "8px",objectFit:"cover" }} />
           
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
              display: { xs: "none", md: "flex" },
              justifyContent: "flex-end",
              alignItems: "center",
            }}
          >
            {pages.map((page) => (
              <Button
                key={page.label}
                component={Link}
                to={page.path}
                startIcon={page.icon}
                sx={{
                  color: "white",
                  fontSize: "1rem",
                  textTransform: "capitalize",
                  "&:hover": { backgroundColor: "rgba(255, 255, 255, 0.1)" },
                  marginX: 1,
                }}
              >
                {page.label}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
