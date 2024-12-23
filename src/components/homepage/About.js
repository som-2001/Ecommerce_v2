import { Box, Button, CardMedia, Grid, Typography } from "@mui/material";

export const About = () => {

    return(
  <Box
    sx={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
      backgroundColor: "black",
      p: { xs: 3, md: 10 },
      height: "90vh",
    }}
  >
    <Typography variant="h6" color="#C6E4FF" sx={{ mb: 4 }}>
      ABOUT US
    </Typography>
    <Typography
      variant="h3"
      color="whitesmoke"
      sx={{ fontSize: { xs: "1.2rem", md: "3.5rem" } }}
    >
      <span sx={{ color: "#C6E4FF" }}>Million</span> Ideas for Your Single
    </Typography>
    <Typography
      variant="h3"
      color="#C6E4FF"
      sx={{ fontSize: { xs: "1.2rem", md: "3.5rem" } }}
    >
      Journey
    </Typography>
    <Typography
      variant="body2"
      color="whitesmoke"
      sx={{ width: { xs: "100%", md: "30%" }, mt: 5, fontSize: "1.0rem" }}
    >
      Welcome to our store, we are a community for riders, adventurers, and
      enthusiasts who seek the best bikes and gear for their journey.{" "}
    </Typography>

    <Button
      variant="contained"
      sx={{
        borderRadius: 6,
        padding: "19px",
        mb: 5,
        backgroundColor: "#C6E4FF",
        color: "black",
        mt: 3,
      }}
    >
      READ MORE
    </Button>

    <Grid
      container
      spacing={2}
      sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
    >
      <Grid
        item
        xs={12}
        sm={12}
        md={4}
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <CardMedia
          component="img"
          image="../images/home_img_1.jpg"
          alt="Home Image 1"
          sx={{
            width: { xs: "300px", sm: "560px" },
            maxHeight: "400px",
            objectFit: "contain",
          }}
        />
      </Grid>
      <Grid
        item
        xs={12}
        sm={12}
        md={4}
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <CardMedia
          component="img"
          image="../images/home_img_2.jpg"
          alt="Home Image 2"
          sx={{
            width: { xs: "300px", sm: "560px" },
            maxHeight: "400px",
            objectFit: "contain",
          }}
        />
      </Grid>
      <Grid
        item
        xs={12}
        sm={12}
        md={4}
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <CardMedia
          component="img"
          image="../images/home_img_3.jpg"
          alt="Home Image 3"
          sx={{
            width: { xs: "300px", sm: "560px" },
            maxHeight: "400px",
            objectFit: "contain",
          }}
        />
      </Grid>
    </Grid>
  </Box>
    )
};
