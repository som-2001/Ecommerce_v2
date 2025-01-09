import React from "react";
import {
  Box,
  Grid,
  Typography,
} from "@mui/material";
import { RenderCard } from "../productCard/RenderCard";
import { bikes } from "../../pages/Dashboard";


const BestSeller = ({product}) => {
  return (
  
    <Box
      sx={{
        backgroundColor: "black",
        color: "white",
        padding: {xs:"5px",sm:"2rem"},
       
      }}
    >
      <Typography variant="body2" color="#999999" gutterBottom align="center">
        Your Best Ride Starts here
      </Typography>
      <Typography variant="h3" gutterBottom align="center" sx={{mb:3}}>
        Best Sellers
      </Typography>
      <Grid container spacing={1}>

        {product?.slice(0,4).map((product) => (
          <Grid item xs={6} sm={6} md={3} key={product.id} sx={{display:"flex",justifyContent:"center"}}>

          <RenderCard bike={product}/>  
            
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default BestSeller;
