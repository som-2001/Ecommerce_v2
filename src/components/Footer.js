import React from "react";
import { Grid, Typography, Link, Box, Divider } from "@mui/material";
import { Facebook, Instagram, Twitter, LinkedIn } from "@mui/icons-material";
const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#1F1F1F",
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
              color: "#F9A826",
              marginBottom: "16px",
            }}
          >
            BikeMart
          </Typography>
          <Typography variant="body2" gutterBottom>
            High-quality bikes for your adventures and have the best
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
            Contact Us
          </Typography>
          <Typography variant="body2" gutterBottom>
            ASO 616, Astra Towers, Action Area IIC, Newtown, New Town, West Bengal 700161
          </Typography>
          <Typography variant="body2" gutterBottom>
            Email:{" "}
            <Link
              href="mailto:bikemart@klizo.com"
              sx={{ color: "#F9A826", textDecoration: "none" }}
            >
              bikemart@klizo.com
            </Link>
          </Typography>
          <Typography variant="body2" gutterBottom>
            Phone: +91 7002272289
          </Typography>
        </Grid>
        {/* Footer Right Section */}
        <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" sx={{fontWeight: "bold", marginBottom: "16px" }}>Our Location</Typography>
          {/* Embedding Google Map */}
          <Box
            sx={{
              
              height: "250px",
              marginTop: "16px",
              borderRadius: "8px",
              overflow: "hidden",
            }}
          >
            <iframe
              width="100%"
              height="100%"
              src="https://maps.google.com/maps?width=300&amp;height=400&amp;hl=en&amp;q=Klizo&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              title="map"
            ></iframe>
          </Box>
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
            &copy; {new Date().getFullYear()} BikeMart. All Rights Reserved.
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};
export default Footer;