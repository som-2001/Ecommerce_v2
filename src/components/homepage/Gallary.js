import React from "react";
import { Box, Grid, Typography, CardMedia } from "@mui/material";

const Gallary = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#222222",
        color: "white",
        padding: "5rem",
        textAlign: "center",
      }}
    >
      <Typography
        sx={{
          fontWeight: 600,
          fontSize: {xs:"30px",md:"150px"},
          lineHeight: "220px",
          color: "#fff",
          opacity: 0.1,
          textTransform: "uppercase",
          textAlign: "center",
        }}
      >
        SDANSTORE
      </Typography>

      <Typography variant="body2" color="#999999" gutterBottom>
        Your Best Ride Starts here
      </Typography>
      <Typography variant="h3" sx={{ fontWeight: 800 }} gutterBottom>
        Our Gallery
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <CardMedia
            component="img"
            image="../images/gallary_1.jpg"
           
            sx={{
              objectFit:"contain",
              height:{xs:200,md:500}
            }}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <CardMedia
            component="img"
            image="../images/gallary_2.jpg"
           
            sx={{
              objectFit:"contain",
              height:{xs:200,md:500}
            }}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Gallary;
