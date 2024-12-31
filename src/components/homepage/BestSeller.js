import React from "react";
import {
  Box,
  Grid,
  Typography,
  Card,
  CardMedia,
  CardContent,
  Button,
  Divider,
} from "@mui/material";
import CallMadeIcon from "@mui/icons-material/CallMade";
import { RenderCard } from "../productCard/RenderCard";
import { bikes } from "../../pages/Dashboard";


const BestSeller = () => {
  return (
  
    <Box
      sx={{
        backgroundColor: "black",
        color: "white",
        padding: "2rem",
       
      }}
    >
      <Typography variant="body2" color="#999999" gutterBottom align="center">
        Your Best Ride Starts here
      </Typography>
      <Typography variant="h3" gutterBottom align="center">
        Best Sellers
      </Typography>
      <Grid container spacing={3}>

        {bikes.slice(0,3).map((product) => (
          <Grid item xs={12} sm={6} md={4} key={product.id} sx={{display:"flex",justifyContent:"center"}}>

          <RenderCard bike={product}/>  
            
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default BestSeller;
