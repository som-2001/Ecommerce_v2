import React from "react";
import { Grid, Typography, Divider, Box, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export const Product = ({product}) => {
  const navigate = useNavigate();

  return (
    <Box  sx={{
      backgroundColor: "black",
      color: "white",
      padding: {xs:"5px",sm:"2rem"},
     
    }}>
       <Typography variant="body2" color="#999999" gutterBottom align="center">
              Your Best Ride Starts here
            </Typography>
            <Typography variant="h3" gutterBottom align="center" sx={{mb:3}}>
             New Arrival
            </Typography>

      <Grid
        container
        spacing={4}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: { xs: 2, sm: 10 },
          backgroundColor: "black",
          color: "white",
        }}
      >
        {/* Image Section */}
        <Grid
          item
          xs={12}
          md={6}
          sx={{ display: "flex", justifyContent: "center" }}
        >
          <img
            src={product?.[0]?.image?.[0]} // Replace with your image URL
            alt="Product"
            style={{ width: "100%", borderRadius: "8px", maxWidth: "500px" }}
          />
        </Grid>

        {/* Product Details Section */}
        <Grid item xs={12} md={6}>
          <Typography
            variant="h3"
            gutterBottom
            sx={{ fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" },
          color: '#73b2eb'
          }}
          >
           {product?.[0]?.productName}
          </Typography>
          <Typography
            variant="body2"
            gutterBottom
            sx={{ fontSize: { xs: "1rem", sm: "1.0rem", md: "0.9rem" } }}
          >
            {product?.[0]?.description}
          </Typography>
          <Divider sx={{ backgroundColor: "whitesmoke", my: 2, width: "90%" }} />

          <Grid container spacing={2}>
            {/* Row for labels */}
            <Grid container item xs={12} spacing={2}>
              <Grid
                item
                xs={4}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Typography variant="subtitle1">Kerb Weight</Typography>
              </Grid>
              <Grid
                item
                xs={4}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Typography variant="subtitle1">maxPower</Typography>
              </Grid>
              <Grid
                item
                xs={4}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Typography variant="subtitle1">Fuel Tank Capacity</Typography>
              </Grid>
            </Grid>

            {/* Row for values */}
            <Grid container item xs={12} spacing={2}>
              <Grid
                item
                xs={4}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Typography variant="body1">{product?.[0]?.kerbWeight} kg</Typography>
              </Grid>
              <Grid
                item
                xs={4}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Typography variant="body1">{product?.[0]?.maxPower} C</Typography>
              </Grid>
              <Grid
                item
                xs={4}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Typography variant="body1">{product?.[0]?.fuelTankCapacity}</Typography>
              </Grid>
            </Grid>
          </Grid>

          <Divider sx={{ backgroundColor: "whitesmoke", my: 2, width: "90%" }} />

          <Box sx={{ display: "flex", justifyContent: "space-between",width:"90%" }}>
            <Typography
              align="center"
              color="#8ef5a8"
              gutterBottom
              sx={{ fontSize: { xs: "1.5rem", sm: "2rem", md: "2.2rem" } }}
            >
              ${product?.[0]?.offerPrice}
            </Typography>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "white",
                color:"black",
                borderRadius: 4,
                width: "130px",
                height:"60px"
              }}
              onClick={(e) => navigate(`/view-product/${product?.[0]?._id}/${product?.[0]?.modelNumber}`)}
            >
              Shop now
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};
