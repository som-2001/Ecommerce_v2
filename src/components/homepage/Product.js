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
          src="../images/home_img_4.png" // Replace with your image URL
          alt="Product"
          style={{ width: "100%", borderRadius: "8px" }}
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
        <Divider sx={{backgroundColor:"whitesmoke",my:2,width:"90%"}}/>
        
        <Grid container spacing={2}>
      {/* Row for labels */}
      <Grid container item xs={12} spacing={2} >
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

    <Divider sx={{backgroundColor:"whitesmoke",my:2,width:"90%"}}/>

        <Typography align="center" variant="h5" color="primary" gutterBottom>
          $199.99
        </Typography>
        
      </Grid>
    </Grid>
  );
}


