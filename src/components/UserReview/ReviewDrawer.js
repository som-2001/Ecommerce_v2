import {
  Box,
  Button,
  Divider,
  Drawer,
  Grid,
  Rating,
  TextField,
  Typography,
} from "@mui/material";
import axios from "axios";
import { enqueueSnackbar } from "notistack";
import { useState } from "react";

export const ReviewDrawer = ({ product, drawerOpen, setDrawerOpen }) => {
  const [review, setReview] = useState("");
  const [rating, setRating] = useState("");

  const handleCloseDrawer = () => {
    setDrawerOpen(false);
  };

  const createReview = () => {

    if(rating===""){
        return enqueueSnackbar("You have to give a valid rating",{variant:"warning"});
    }
    if(review.length<5)
    {
        return enqueueSnackbar("Review is too short.",{variant:"warning"});
    }
    axios
      .post(
        `${process.env.REACT_APP_BASEURL}/review/create`,
        {
          rating: rating,
          reviewText: review,
          product: product?._id,
        },
        {
          withCredentials: true,
        }
      )
      .then((res) => {
        enqueueSnackbar(res?.data?.message, { variant: "success" });
        setDrawerOpen(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Drawer anchor="right" open={drawerOpen} onClose={handleCloseDrawer}>
      <Box sx={{ width: "fit-content", p: 2.5 }}>
        <Typography variant="h6" sx={{ mb: 2, fontWeight: "bold" }}>
          Product Summary
        </Typography>
        <Divider sx={{ mb: 2 }} />
        {product && (
          <>
            <Typography variant="body1" sx={{ mb: 1 }}>
              <strong>Product Information:</strong>
            </Typography>
            <Grid container>
              <Grid item xs={3.6}>
                <img
                  src={product?.image?.[0]}
                  alt=""
                  style={{ width: "120px", borderRadius: "10px" }}
                />
              </Grid>
              <Grid
                item
                xs={8.4}
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  gap: "12px",
                  alignItems: "center",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <Typography variant="body2">Bike Name</Typography>
                  <Typography variant="body2" sx={{ fontSize: "12px" }}>
                    {product.productName}
                  </Typography>
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <Typography variant="body2">Bike Model</Typography>
                  <Typography variant="body2" sx={{ fontSize: "12px" }}>
                    {product.model}
                  </Typography>
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <Typography variant="body2">Price</Typography>
                  <Typography variant="body2" sx={{ fontSize: "12px" }}>
                    <span>{product?.offerPrice}</span>
                  </Typography>
                </Box>
              </Grid>
            </Grid>

            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "white",
                padding: 3,
                borderRadius: "16px",
                boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.1)",
                mt: 5,
              }}
            >
              <Typography
                variant="h6"
                sx={{ fontWeight: "bold", mb: 2, justifyContent: "flex-start" }}
              >
                Leave a Review
              </Typography>

              <Box>
                <Typography
                  variant="body1"
                  sx={{ justifyContent: "flex-start" }}
                >
                  Rate This Product
                </Typography>
                <Rating
                  size="large"
                  onChange={(e) => setRating(e.target.value)}
                  sx={{ mb: 3 }}
                />

                <TextField
                  placeholder="Write your comment here..."
                  fullWidth
                  multiline
                  rows={4}
                  sx={{ mb: 2 }}
                  onChange={(e) => setReview(e.target.value)}
                />
              </Box>
              <Button
                variant="contained"
                color="primary"
                sx={{
                  padding: "1rem",
                  backgroundColor: "black",
                  color: "white",
                  borderRadius: 3,
                  "&:hover": {
                    backgroundColor: "#0d47a1",
                  },
                }}
                onClick={createReview}
              >
                Submit Review
              </Button>
            </Box>
          </>
        )}
      </Box>
    </Drawer>
  );
};
