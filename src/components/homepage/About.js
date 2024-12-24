import { Box, Button, CardMedia, Grid, Typography } from "@mui/material";
import "../../App.css"
export const About = () => {
  return (
    <Box
   
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        backgroundColor: "black",
        p: { xs: 3, md: 10 },
        minHeight: "90vh",
        borderBottom:"10px solid #323232"
      }}
    >
      <Typography variant="h6" className="HomeAboutSection" color="#C6E4FF" sx={{ mb: 4 }}>
        ABOUT US
      </Typography>
      <Typography
        variant="h3"
        color="whitesmoke"
        sx={{ fontSize: { xs: "1.2rem", md: "3.5rem" } }}
      
      >
        <span sx={{ color: "#C6E4FF" }} className="HomeAboutSection">Million</span> Ideas for Your Single
      </Typography>
      <Typography
        variant="h3"
        color="#C6E4FF"
        sx={{ fontSize: { xs: "1.2rem", md: "3.5rem" } }}
         className="HomeAboutSection"
      >
        Journey
      </Typography>
      <Typography
        variant="body2"
        color="whitesmoke"
        sx={{
          width: { xs: "100%", md: "50%" },
          mt: 5,
          fontSize: { xs: "0.9rem", md: "1rem" },
          textAlign: "center",
        }}
        
      >
        Welcome to our store, we are a community for riders, adventurers, and
        enthusiasts who seek the best bikes and gear for their journey.
      </Typography>

      <Button
        variant="contained"
        sx={{
          borderRadius: 6,
          padding: "12px 24px",
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
        sx={{
          mt: 3,
          justifyContent: "center",
          alignItems: "center",
        
        }}
      >
        <Grid
          item
          xs={12}
          sm={6}
          md={4}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <CardMedia
            component="img"
            image="../images/home_img_1.png"
            alt="Home Image 1"
            sx={{
              width: "100%",
              maxWidth: "580px",
              height: "auto",
              objectFit: "cover",
            }}
          />
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          md={4}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <CardMedia
            component="img"
            image="../images/home_img_2.png"
            alt="Home Image 2"
            sx={{
              width: "100%",
              maxWidth: "580px",
              height: "auto",
              objectFit: "cover",
            }}
          />
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          md={4}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <CardMedia
            component="img"
            image="../images/home_img_3.png"
            alt="Home Image 3"
            sx={{
              width: "100%",
              maxWidth: "580px",
              height: "auto",
              objectFit: "cover",
            }}
          />
        </Grid>
      </Grid>
    </Box>
  );
};
