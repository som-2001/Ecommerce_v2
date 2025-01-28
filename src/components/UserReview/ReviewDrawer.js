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
import styles from "../../styles/userReview.module.css";

export const ReviewDrawer = ({ product, drawerOpen, setDrawerOpen }) => {
  const [review, setReview] = useState("");
  const [rating, setRating] = useState("");

  const handleCloseDrawer = () => {
    setDrawerOpen(false);
  };

  const createReview = () => {
    if (rating === "") {
      return enqueueSnackbar("You have to give a valid rating", {
        variant: "warning",
      });
    }
    if (review.length < 5) {
      return enqueueSnackbar("Review is too short.", { variant: "warning" });
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
      <Box className={styles.parent}>
        <Typography variant="h6" sx={{ mb: 2, fontWeight: "bold" }}>
          Product Summary
        </Typography>
        <Divider sx={{ mb: 2 }} />

        {product && (
          <>
            <Typography variant="body1" sx={{ mb: 1, fontWeight: "bold" }}>
              Product Details
            </Typography>
            <Box className={styles.imgBox}>
              <img
                src={product?.image?.[0]}
                alt="Product"
                className={styles.img}
              />
            </Box>
            <Grid container spacing={1}>
              <Grid item xs={6}>
                <Typography
                  variant="body1"
                  color="text.primary"
                  sx={{ fontWeight: "bold", mb: 0.5 }}
                >
                  {product?.productName} ({product?.brand})
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ mb: 0.5 }}
                >
                  Model: {product?.modelNumber}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ mb: 0.5 }}
                >
                  Color: {product?.selectedColor}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ mb: 0.5 }}
                >
                  Engine Capacity: {product?.engineCapacity}cc
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ mb: 0.5 }}
                >
                  Max Power: {product?.maxPower} HP
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ mb: 0.5 }}
                >
                  Mileage: {product?.mileage} km/l
                </Typography>
                <Typography variant="body2" className={styles.offerPrice}>
                  ${product?.offerPrice}
                  <span className={styles.span}>${product?.originalPrice}</span>
                </Typography>
              </Grid>
              <Grid item xs={6} sx={{ mt: 4 }}>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ mb: 0.5 }}
                >
                  Kerb Weight: {product?.kerbWeight}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ mb: 0.5 }}
                >
                  Top Speed: {product?.topSpeed}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ mb: 0.5 }}
                >
                  Gear: {product?.gearbox}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ mb: 0.5 }}
                >
                  Cooling System: {product?.coolingSystem} HP
                </Typography>
              </Grid>
            </Grid>

            <Typography variant="body2" color="text.secondary" sx={{ mb: 0.5 }}>
              description: {product?.description}
            </Typography>
          </>
        )}

        <Box className={styles.LeaveReview}>
          <Typography
            variant="h6"
            sx={{ fontWeight: "bold", mb: 2, justifyContent: "flex-start" }}
          >
            Leave a Review
          </Typography>

          <Box>
            <Typography variant="body1" sx={{ justifyContent: "flex-start" }}>
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
            className={styles.customButton}
            onClick={createReview}
          >
            Submit Review
          </Button>
        </Box>
      </Box>
    </Drawer>
  );
};
