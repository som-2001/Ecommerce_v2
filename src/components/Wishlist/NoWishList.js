import React from "react";
import { Box, Button, Typography } from "@mui/material";

export const NoWishList = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        width:"100vw",
        height: "50vh",
        backgroundColor: "#f9f9f9",
        padding: "16px",
      }}
    >
      {/* Illustration */}
      <Box
        component="img"
        src="../../images/no_wishList.png" // Replace with the illustration's actual path
        alt="Empty Wishlist Illustration"
        sx={{ width: "200px", marginBottom: "24px" }}
      />

      {/* Main Heading */}
      <Typography
        variant="h4"
        sx={{
          fontWeight: "bold",
          color: "#ff4d4d",
          marginBottom: "8px",
        }}
      >
        Your Wishlist is empty!
      </Typography>

      {/* Subheading */}
      <Typography
        variant="body1"
        sx={{
          color: "#757575",
          marginBottom: "24px",
        }}
      >
        Seems like you don’t have wishes here.
        <br />
        Make a wish!
      </Typography>

      {/* Button */}
      <Button
        variant="contained"
        sx={{
          backgroundColor: "black",
          color: "#fff",
          borderRadius: 2,
          padding: 2.2,
          width:"fit-content"
        }}
      >
        Start Shopping
      </Button>
    </Box>
  );
};

