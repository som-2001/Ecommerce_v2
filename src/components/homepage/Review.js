import React from "react";
import { Box, CardMedia, Grid, Typography } from "@mui/material";
import Slider from "react-slick";

export const Review = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Box sx={{ backgroundColor: "black", color: "white", py: 4,overflowX:"hidden",}}>
     
      <Typography variant="h3" align="center" >
        Testimonials
      </Typography>
      <Typography variant="body1" gutterBottom align="center" sx={{ mb: 3 }}>
        over 15000 happy customers
      </Typography>
      <Slider {...settings}>
        {/* Review 1 */}
        <Box>
          <Grid
            container
            spacing={2}
            alignItems="center"
            justifyContent="center"
          >
            {/* Image */}
            <Grid item xs={12} md={3}>
              <CardMedia
                component="img"
                image={"../../images/review1.png"}
                alt="Product Review"
                sx={{
                  width: "200px",
                  height: "auto",
                  margin: "0 auto",
                  borderRadius: "8px",
                }}
              />
            </Grid>
            {/* Review Text */}
            <Grid item xs={12} md={5}>
              <Typography variant="body1" sx={{ textAlign: "justify", px: 2 }}>
                I was a bit nervous to be buying a secondhand phone from Amazon,
                but I couldn’t be happier with my purchase!! I have a pre-paid
                data plan so I was worried that this phone wouldn’t connect with
                my data plan, since the new phones don’t have the physical SIM
                tray anymore, but couldn’t have been easier! I bought an
                Unlocked black iPhone 14 Pro Max in excellent condition, and
                everything is PERFECT. It was super easy to set up and the phone
                works and looks great. It truly was in excellent condition.
                Highly recommend!!! 🖤
              </Typography>
            </Grid>
          </Grid>
        </Box>

        {/* Additional Reviews (Optional) */}
        <Box>
          <Grid
            container
            spacing={2}
            alignItems="center"
            justifyContent="center"
          >
            <Grid item xs={12} md={4}>
            <CardMedia
                component="img"
                image={"../../images/review1.png"}
                alt="Product Review"
                sx={{
                  width: "200px",
                  height: "auto",
                  margin: "0 auto",
                  borderRadius: "8px",
                }}
              />
            </Grid>
            <Grid item xs={12} md={3}>
              <Typography variant="body1" sx={{ textAlign: "justify", px: 2 }}>
                Another amazing product! Setup was seamless, and the device
                works flawlessly. It's in pristine condition, just like new.
                Definitely worth the purchase.
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Slider>
    </Box>
  );
};
