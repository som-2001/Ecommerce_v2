import React from "react";
import { Box, Grid, Typography, CardMedia } from "@mui/material";
import styles from "../../styles/Gallary.module.css";

const Gallary = () => {
  return (
    <Box
      className={styles.hero}
      sx={{
        padding: { xs: "1rem", sm: "5rem" },
      }}
    >
      <Typography
        className={styles.heading}
        sx={{
          fontSize: { xs: "30px", md: "150px" },
          lineHeight: { xs: "88px", md: "220px" },
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
        <Grid item xs={12} sm={6} md={6}>
          <CardMedia
            component="img"
            image="../images/gallary_1.jpg"
            sx={{
              objectFit: "contain",
              height: { xs: 200, md: 500 },
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          <CardMedia
            component="img"
            image="../images/gallary_2.jpg"
            sx={{
              objectFit: "contain",
              height: { xs: 200, md: 500 },
            }}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Gallary;
