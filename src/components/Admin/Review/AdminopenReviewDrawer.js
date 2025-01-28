import { DeleteRounded } from "@mui/icons-material";
import {
  Box,
  Divider,
  Drawer,
  Typography,
  Grid,
  Rating,
  Avatar,
} from "@mui/material";
import { useState } from "react";
import { ReviewDeleteDrawer } from "./ReviewDeleteDrawer";
import styles from '../../../styles/Admin/AdminopenReviewDrawer.module.css'

export const AdminopenReviewDrawer = ({
  review,
  setReviews,
  drawerOpen,
  setDrawerOpen,
}) => {
  const [openReviewDelete, setOpenReviewDelete] = useState(false);
  const [Reviewid, setReviewId] = useState(0);

  const handleCloseDrawer = () => {
    setDrawerOpen(false);
  };

  return (
    <>
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={handleCloseDrawer}
        PaperProps={{
          sx: {
            width: { xs: "80vw", sm: "450px" },
            p: 3,
            borderRadius: "8px 0 0 8px",
          },
        }}
      >
        <Box>
          {/* Header */}
          <Typography
            variant="h6"
            className={styles.h6}
          >
            Review Summary
          </Typography>
          <Divider sx={{ mb: 3 }} />

          {/* Product Details */}
          {review && (
            <>
              <Typography variant="body1" sx={{ mb: 1, fontWeight: "bold" }}>
                Product Details
              </Typography>
              <Box
               className={styles.flex}
              >
                <img
                  src={review?.product?.image?.[0]}
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
                    {review?.product?.productName} ({review?.product?.brand})
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ mb: 0.5 }}
                  >
                    Model: {review?.product?.modelNumber}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ mb: 0.5 }}
                  >
                    Color: {review?.product?.selectedColor}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ mb: 0.5 }}
                  >
                    Engine Capacity: {review?.product?.engineCapacity}cc
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ mb: 0.5 }}
                  >
                    Max Power: {review?.product?.maxPower} HP
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ mb: 0.5 }}
                  >
                    Mileage: {review?.product?.mileage} km/l
                  </Typography>
                  <Typography
                    variant="body2"
                    className={styles.offerPrice}
                  >
                    ${review?.product?.offerPrice}
                    <span
                      style={{
                        textDecoration: "line-through",
                        fontWeight: "normal",
                        color: "#9e9e9e",
                      }}
                    >
                      ${review?.product?.originalPrice}
                    </span>
                  </Typography>
                </Grid>
                <Grid item xs={6} sx={{ mt: 4 }}>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ mb: 0.5 }}
                  >
                    Kerb Weight: {review?.product?.kerbWeight}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ mb: 0.5 }}
                  >
                    Top Speed: {review?.product?.topSpeed}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ mb: 0.5 }}
                  >
                    Gear: {review?.product?.gearbox}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ mb: 0.5 }}
                  >
                    Cooling System: {review?.product?.coolingSystem} HP
                  </Typography>
                </Grid>
              </Grid>

              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ mb: 0.5 }}
              >
                description: {review?.product?.description}
              </Typography>
            </>
          )}

          <Divider sx={{ my: 3 }} />

          {/* Reviews Section */}
          <Typography
            variant="h6"
            className={styles.customerDetailed}
          >
            Customer Detailed Review
          </Typography>

          <Box
            key={review._id}
            className={styles.reviewBox}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                mb: 1,
              }}
            >
              <Avatar
                src={review.user?.profilePicture}
                alt={review.user?.fullName || "User"}
                sx={{ width: 40, height: 40, mr: 2 }}
              />
              <Typography variant="body1" fontWeight="bold">
                {review.user?.fullName || "Anonymous"}
              </Typography>
            </Box>
            <Rating value={review.rating} readOnly sx={{ mb: 1 }} />
            <Typography variant="body2" color="text.secondary">
              {review.reviewText}
            </Typography>
            <Typography
              variant="caption"
              color="text.secondary"
              sx={{ display: "block", mt: 1 }}
            >
              {new Date(review.createdAt).toLocaleDateString()}
            </Typography>
            {/* <DeleteRounded
              sx={{
                position: "absolute",
                top: "12px",
                right: "10px",
                cursor: "pointer",
              }}
              onClick={(e) => {
                setOpenReviewDelete(true);
                setReviewId(review?._id);
              }}
            /> */}
          </Box>
        </Box>
      </Drawer>
      {openReviewDelete && (
        <ReviewDeleteDrawer
          openReviewDelete={openReviewDelete}
          setOpenReviewDelete={setOpenReviewDelete}
          reviewId={Reviewid}
          setReviews={setReviews}
        />
      )}
    </>
  );
};
