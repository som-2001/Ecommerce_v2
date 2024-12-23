import React from "react";
import { Grid, Typography, Button, Divider } from "@mui/material";

export const Product=()=>{
  return (
    <Grid 
      container 
      spacing={4} 
      sx={{ display: "flex", alignItems: "center", justifyContent: "center", padding: 2,backgroundColor:"black",color:"white" }}
    >
      {/* Image Section */}
      <Grid item xs={12} md={6} sx={{ display: "flex", justifyContent: "center" }}>
        <img
          src="../images/home_img_1.jpg" // Replace with your image URL
          alt="Product"
          style={{ maxWidth: "100%", borderRadius: "8px" }}
        />
      </Grid>

      {/* Product Details Section */}
      <Grid item xs={12} md={6}>
        <Typography variant="h3" gutterBottom>
        Kert Domane R (Speed Type)
        </Typography>
        <Typography variant="body1" gutterBottom>
          This is a detailed description of the product. Highlight the key features, benefits, or specifications of the product to attract potential buyers.
        </Typography>
        <Divider/>
        
        <Typography variant="h5" color="primary" gutterBottom>
          $199.99
        </Typography>
        <Button variant="contained" color="primary" size="large">
          Add to Cart
        </Button>
      </Grid>
    </Grid>
  );
}


