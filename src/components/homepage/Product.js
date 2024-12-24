import React from "react";
import { Grid, Typography, Divider } from "@mui/material";

export const Product = () => {
  return (
    <Grid 
      container 
      spacing={4} 
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: {xs:2,sm:10},
        backgroundColor: "black",
        color: "white",
     
      }}
    >
      {/* Image Section */}
      <Grid item xs={12} md={6} sx={{ display: "flex", justifyContent: "center" }}>
        <img
          src="../images/home_img_4.jpg" // Replace with your image URL
          alt="Product"
          style={{ width: "100%", borderRadius: "8px", maxWidth: "500px" }}
        />
      </Grid>

      {/* Product Details Section */}
      <Grid item xs={12} md={6}>
        <Typography variant="h3" gutterBottom sx={{ fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" } }}>
          Kert Domane R (Speed Type)
        </Typography>
        <Typography variant="body1" gutterBottom sx={{ fontSize: { xs: "1rem", sm: "1.2rem", md: "1.2rem" } }}>
          This is a detailed description of the product. Highlight the key features, benefits, or specifications of the product to attract potential buyers.
        </Typography>
        <Divider sx={{ backgroundColor: "whitesmoke", my: 2, width: "90%" }} />

        <Grid container spacing={2}>
          {/* Row for labels */}
          <Grid container item xs={12} spacing={2}>
            <Grid item xs={4} sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
              <Typography variant="subtitle1">Weight</Typography>
            </Grid>
            <Grid item xs={4} sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
              <Typography variant="subtitle1">Wheel</Typography>
            </Grid>
            <Grid item xs={4} sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
              <Typography variant="subtitle1">Size</Typography>
            </Grid>
          </Grid>

          {/* Row for values */}
          <Grid container item xs={12} spacing={2}>
            <Grid item xs={4} sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
              <Typography variant="body1">9.5 kg</Typography>
            </Grid>
            <Grid item xs={4} sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
              <Typography variant="body1">700 C</Typography>
            </Grid>
            <Grid item xs={4} sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
              <Typography variant="body1">48 – 52</Typography>
            </Grid>
          </Grid>
        </Grid>

        <Divider sx={{ backgroundColor: "whitesmoke", my: 2, width: "90%" }} />

        <Typography align="center" color="white" gutterBottom sx={{ fontSize: { xs: "1.5rem", sm: "2rem", md: "2.2rem" } }}>
          $199.99
        </Typography>
      </Grid>
    </Grid>
  );
};
