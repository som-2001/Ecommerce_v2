import { Box, Button, CardMedia, Grid, Typography } from "@mui/material";
import "../../App.css";
import { useNavigate } from "react-router-dom";
import styles from '../../styles/HomeAbout.module.css'

export const About = () => {
  const navigate = useNavigate();
  return (
    <Box
      className={styles.container}
      sx={{
        p: { xs: 3, md: 10 }
      }}
    >
      <Typography
        variant="h6"
        className="HomeAboutSection"
        color="#C6E4FF"
        sx={{ mb: 4 }}
      >
        ABOUT US
      </Typography>

      <Typography
        variant="h3"
        color="whitesmoke"
        sx={{ fontSize: { xs: "1.2rem", md: "3.5rem" } }}
      >
        <span sx={{ color: "#C6E4FF !important" }} className="HomeAboutSection">
          Million
        </span>{" "}
        Ideas for Your Single
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
        color="white"
        sx={{
          width: { xs: "100%", md: "50%" },
          mt: 5,
          fontSize: { xs: "0.9rem", md: "0.9rem" },
          textAlign: "center",
        }}
      >
        Welcome to our store, we are a community for riders, adventurers, and
        enthusiasts who seek the best bikes and gear for their journey.
      </Typography>

      <Button
        variant="contained"
        className={styles.HomeAboutbutton}
        
        onClick={(e) => navigate("/about")}
      >
        READ MORE
      </Button>

      <Grid
        container
        spacing={2}
        className={styles.Box}
      >
        <Grid
          item
          xs={12}
          sm={6}
          md={4}
          className={styles.Grid}
        >
          <CardMedia
            component="img"
            image="../images/4.jpg"
            alt="Home Image 1"
            className={styles.img}
          />
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          md={4}
          className={styles.Grid}
        >
          <CardMedia
            component="img"
            image="../images/1.png"
            alt="Home Image 2"
            className={styles.img}
          />
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          md={4}
          className={styles.Grid}
        >
          <CardMedia
            component="img"
            image="../images/3.jpg"
            alt="Home Image 3"
            className={styles.img}
          />
        </Grid>
      </Grid>
    </Box>
  );
};
