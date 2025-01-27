import React, { useRef } from "react";
import { Box, CardMedia, Grid, Typography } from "@mui/material";
import Slider from "react-slick";
import styles from "../../styles/HomeReview.module.css";

export const Review = () => {
  // Create a reference for the Slider
  const sliderRef = useRef(null);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
 
  const handleReviewClick = (direction) => {
    if (sliderRef.current) {
      if (direction === "next") {
        sliderRef.current.slickNext();
      } else if (direction === "prev") {
        sliderRef.current.slickPrev();
      }
    }
  };
  return (
    <Box className={styles.ReviewBox}>
      <Typography variant="h3" align="center" sx={{ mb: 2 }}>
        Our Testimonials
      </Typography>
      <Typography variant="body1" gutterBottom align="center" sx={{ mb: 3 }}>
        Join over 4,567 satisfied bikers who love their bikes!
      </Typography>
      {/* Initialize Slider and attach ref */}
      <Slider ref={sliderRef} {...settings}>
        {/* Review 1 */}
        <Box onClick={() => handleReviewClick("next")}>
          <Grid container spacing={2} alignItems="center" justifyContent="center">
            {/* Image */}
            <Grid item xs={12} md={3}>
              <CardMedia
                component="img"
                image={"../../images/review01.jpg"}
                alt="Mountain Bike Review"
                className={styles.img}
              />
            </Grid>
            {/* Review Text */}
            <Grid item xs={12} md={5}>
              <Typography variant="body1" sx={{ textAlign: "justify", px: 2 }}>
                "The TrailMaster Mountain Bike has been a game changer for my outdoor adventures!
                Whether I’m tackling rough trails or riding through the forest, the bike handles
                beautifully. The shock absorption is amazing, and the ride is super smooth. I feel
                like I can go anywhere with this bike. If you're an adventure enthusiast, this is
                the bike for you!"
                <br /> - Emily R.
              </Typography>
            </Grid>
          </Grid>
        </Box>
        {/* Review 2 */}
        <Box onClick={() => handleReviewClick("next")}>
          <Grid container spacing={2} alignItems="center" justifyContent="center">
            {/* Image */}
            <Grid item xs={12} md={3}>
              <CardMedia
                component="img"
                image={"../../images/review1.png"}
                alt="Road Bike Review"
                className={styles.img}
              />
            </Grid>
            {/* Review Text */}
            <Grid item xs={12} md={5}>
              <Typography variant="body1" sx={{ textAlign: "justify", px: 2 }}>
                "I recently purchased the CycloMax Pro Road Bike and I couldn’t be more pleased!
                It’s sleek, lightweight, and incredibly fast on smooth roads. The gears shift perfectly,
                and I’ve knocked off minutes from my average commute time. It’s the perfect bike for
                any city rider. Highly recommend it!"
                <br /> - David M.
              </Typography>
            </Grid>
          </Grid>
        </Box>
        {/* Review 3 */}
        <Box onClick={() => handleReviewClick("next")}>
          <Grid container spacing={2} alignItems="center" justifyContent="center">
            {/* Image */}
            <Grid item xs={12} md={3}>
              <CardMedia
                component="img"
                image={"../../images/review02.jpg"}
                alt="Cruiser Bike Review"
                className={styles.img}
              />
            </Grid>
            {/* Review Text */}
            <Grid item xs={12} md={5}>
              <Typography variant="body1" sx={{ textAlign: "justify", px: 2 }}>
                "The Coastal Cruiser is the perfect bike for leisurely weekend rides around the
                beach! The design is sleek, and the ride is super comfortable. Whether I’m enjoying
                a Sunday morning bike ride or just cruising around, this bike is ideal. A great choice
                for anyone who wants style and comfort in one!"
                <br /> - Laura H.
              </Typography>
            </Grid>
          </Grid>
        </Box>
        {/* Review 4 */}
        <Box onClick={() => handleReviewClick("next")}>
          <Grid container spacing={2} alignItems="center" justifyContent="center">
            {/* Image */}
            <Grid item xs={12} md={3}>
              <CardMedia
                component="img"
                image={"../../images/review03.avif"}
                alt="Electric Bike Review"
                className={styles.img}
              />
            </Grid>
            {/* Review Text */}
            <Grid item xs={12} md={5}>
              <Typography variant="body1" sx={{ textAlign: "justify", px: 2 }}>
                "I’ve been using the VoltX Electric Bike for my daily commute, and it’s been an absolute
                game changer. The electric motor makes it effortless to get up hills and go long distances
                without breaking a sweat. I also love the eco-friendly aspect of it! Perfect for anyone
                looking for a more efficient way to get around."
                <br /> - Jason K.
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Slider>
    </Box>
  );
};