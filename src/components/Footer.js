import React from "react";
import { Grid, Typography, Link, Box, Divider } from "@mui/material";
import { Facebook, Instagram, Twitter, LinkedIn } from "@mui/icons-material";

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#1f1f1f",
        color: "white",
        padding: "40px 20px",
        marginTop: "auto",
      }}
    >
      <Grid container spacing={4} justifyContent="center">
        {/* Footer Left Section */}
        <Grid item xs={12} sm={6} md={3}>
          <Typography
            variant="h5"
            gutterBottom
            sx={{
              fontWeight: "bold",
              color: "#f9a826",
              marginBottom: "16px",
            }}
          >
            Venturo Bike Rentals
          </Typography>
          <Typography variant="body2" gutterBottom>
            Rent high-quality bikes for your adventures and have the best
            experience exploring new places with comfort and style.
          </Typography>
          <Box sx={{ display: "flex", gap: 2, marginTop: "16px" }}>
            <Link
              href="#"
              sx={{ color: "#4267B2", "&:hover": { opacity: 0.8 } }}
            >
              <Facebook fontSize="large" />
            </Link>
            <Link
              href="#"
              sx={{ color: "#E1306C", "&:hover": { opacity: 0.8 } }}
            >
              <Instagram fontSize="large" />
            </Link>
            <Link
              href="#"
              sx={{ color: "#1DA1F2", "&:hover": { opacity: 0.8 } }}
            >
              <Twitter fontSize="large" />
            </Link>
            <Link
              href="#"
              sx={{ color: "#0077B5", "&:hover": { opacity: 0.8 } }}
            >
              <LinkedIn fontSize="large" />
            </Link>
          </Box>
        </Grid>

        {/* Footer Middle Section */}
        <Grid item xs={12} sm={6} md={3}>
          <Typography
            variant="h6"
            gutterBottom
            sx={{ fontWeight: "bold", marginBottom: "16px" }}
          >
            Quick Links
          </Typography>
          <Box>
            {["About Us", "Our Services", "Pricing", "Contact"].map((link) => (
              <Link
                href="#"
                color="inherit"
                variant="body2"
                display="block"
                gutterBottom
                key={link}
                sx={{
                  textDecoration: "none",
                  "&:hover": { color: "#f9a826" },
                }}
              >
                {link}
              </Link>
            ))}
          </Box>
        </Grid>

        {/* Footer Right Section */}
        <Grid item xs={12} sm={6} md={3}>
          <Typography
            variant="h6"
            gutterBottom
            sx={{ fontWeight: "bold", marginBottom: "16px" }}
          >
            Contact Us
          </Typography>
          <Typography variant="body2" gutterBottom>
            1234 Bike Lane, City, Country
          </Typography>
          <Typography variant="body2" gutterBottom>
            Email:{" "}
            <Link
              href="mailto:info@venturo.com"
              sx={{ color: "#f9a826", textDecoration: "none" }}
            >
              info@venturo.com
            </Link>
          </Typography>
          <Typography variant="body2" gutterBottom>
            Phone: +1 234 567 890
          </Typography>
        </Grid>

        {/* Footer Bottom Section */}
        <Grid item xs={12}>
          <Divider sx={{ backgroundColor: "#444", my: 2 }} />
          <Typography
            variant="body2"
            align="center"
            sx={{
              color: "#888",
              fontWeight: "light",
            }}
          >
            &copy; {new Date().getFullYear()} Ecommerce. All Rights Reserved.
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
