import React from "react";
import {
  Box,
  CircularProgress,
  Grid,
  Typography,
} from "@mui/material";
import { RenderCard } from "../productCard/RenderCard";
import styles from '../../styles/HomeAbout.module.css'


const BestSeller = ({product,load}) => {
  return (
  
    <Box
    className={styles.color}
      sx={{
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

        {load?<Box sx={{width:"100vw",mt:5}} className={styles.Grid}><CircularProgress size={30} /></Box>:product?.slice(0,4).map((product) => (
          <Grid item xs={6} sm={6} md={3} key={product.id} className={styles.Grid}>

          <RenderCard bike={product}/>  
            
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default BestSeller;
