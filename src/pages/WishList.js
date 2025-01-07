import React, { useEffect } from "react";
import { Grid, Typography, Box } from "@mui/material";
import Footer from "../components/Footer";
import axios from "axios";
import { WishListCard } from "../components/Wishlist/WishListCard";

// Sample data (replace this with your actual Bike data)

function WishList() {
  const [Bike, setBike] = React.useState([]);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BASEURL}/wishlist/wishlist`, {
        withCredentials: true,
      })
      .then((res) => {
        setBike(res.data.wishlist);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <Box
        sx={{
          backgroundColor: "#f9f9f9",
          minHeight: "100vh",
          p: { xs: 1, sm: 4, md: 6 },
        }}
      >
        <Typography
          variant="h4"
          sx={{
            fontWeight: "bold",
            mb: 4,
            textAlign: "center",
          }}
          color="text.secondary"
        >
          My Wishlist ({Bike.length} Items)
        </Typography>
        <Grid container spacing={1}>
          {Bike.length > 0 ? (
            Bike.map((bike) => (
              <Grid
                item
                xs={6}
                sm={6}
                md={4}
                lg={3}
                key={bike.id}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <WishListCard bike={bike} setBike={setBike}/>
              </Grid>
            ))
          ) : (
            <Typography
              variant="h6"
              sx={{
                textAlign: "center",
                width: "100%",
                mt: 4,
                color: "#555",
              }}
            >
              No items in your wishlist!
            </Typography>
          )}
        </Grid>
      </Box>
      <Footer />
    </>
  );
}

export default WishList;
