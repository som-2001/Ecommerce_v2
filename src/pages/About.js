import React from "react";
import { Box, Button, Grid, Typography, CardMedia } from "@mui/material";
import Footer from "../components/Footer";
function About() {
  return (
    <Box sx={{ backgroundColor: "black", color: "whitesmoke" }}>
      <Box
        sx={{
          position: "relative",
          height: "70vh",
          backgroundImage: `url("../images/about_banner.jpg")`,
          backgroundSize: "cover",
          backgroundPosition: "center 40%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          color: "white",
        }}
      >
        <Box
          sx={{
            backgroundColor: "rgba(0, 0, 0, 0.6)",
            padding: "20px 40px",
            borderRadius: "8px",
          }}
        >
          <Typography
            variant="h3"
            sx={{
              fontWeight: "bold",
              mb: 2,
              fontSize: { xs: "1.8rem", md: "3rem" },
            }}
          >
            Discover the Joy of Biking
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontSize: { xs: "0.9rem", md: "1.2rem" },
              mb: 3,
            }}
          >
            Your ultimate destination for premium bikes, accessories, and
            unforgettable adventures.
          </Typography>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#F9A826",
              color: "black",
              padding: "10px 20px",
              borderRadius: "6px",
            }}
          >
            Explore Now
          </Button>
        </Box>
      </Box>
      {/* About Section */}
      <Box
        sx={{
          px: { xs: 3, sm: 5 },
          py: { xs: 5, md: 10 },
          textAlign: "center",
        }}
      >
        <Typography
          variant="h4"
          sx={{
            color: "#C6E4FF",
            fontWeight: "bold",
            mb: 2,
            fontSize: { xs: "1.8rem", md: "3rem" },
          }}
        >
          About Us
        </Typography>
        <Typography
          variant="body1"
          sx={{
            fontSize: { xs: "0.9rem", md: "1.2rem" },
            lineHeight: 1.6,
            maxWidth: "700px",
            mx: "auto",
            color: "#C6E4FF",
            mb: 5,
          }}
        >
          We are passionate about providing the best biking experience. Whether
          you are a professional rider or a casual enthusiast, our mission is
          to offer the finest bikes, gear, and accessories to make your
          adventures unforgettable.
        </Typography>
      </Box>
      {/* Features Section */}
      <Grid container spacing={3} sx={{ px: { xs: 3, sm: 5 }, pb: 10 }}>
        <Grid
          item
          xs={12}
          sm={6}
          md={4}
          sx={{
            textAlign: "center",
          }}
        >
          <CardMedia
            component="img"
            image="../images/about_bike.jpg"
            alt="High-Performance Bikes"
            sx={{
              borderRadius: 2,
              width: "100%",
              height: "250px",
              objectFit: "cover",
            }}
          />
          <Typography
            variant="h6"
            sx={{
              mt: 2,
              fontWeight: "bold",
              color: "#F9A826",
            }}
          >
            High-Performance Bikes
          </Typography>
          <Typography
            variant="body2"
            sx={{ mt: 1, color: "whitesmoke", fontSize: "0.9rem" }}
          >
            Experience the thrill with our range of high-performance bikes
            designed for speed and agility.
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          md={4}
          sx={{
            textAlign: "center",
          }}
        >
          <CardMedia
            component="img"
            image="../images/about_gear.jpg"
            alt="Adventure Gear"
            sx={{
              borderRadius: 2,
              width: "100%",
              height: "250px",
              objectFit: "cover",
            }}
          />
          <Typography
            variant="h6"
            sx={{
              mt: 2,
              fontWeight: "bold",
              color: "#F9A826",
            }}
          >
            Adventure Gear
          </Typography>
          <Typography
            variant="body2"
            sx={{ mt: 1, color: "whitesmoke", fontSize: "0.9rem" }}
          >
            Gear up with our premium collection of adventure accessories for
            your ultimate biking experience.
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          md={4}
          sx={{
            textAlign: "center",
          }}
        >
          <CardMedia
            component="img"
            image="../images/about_community.jpg"
            alt="Community Support"
            sx={{
              borderRadius: 2,
              width: "100%",
              height: "250px",
              objectFit: "cover",
            }}
          />
          <Typography
            variant="h6"
            sx={{
              mt: 2,
              fontWeight: "bold",
              color: "#F9A826",
            }}
          >
            Community Support
          </Typography>
          <Typography
            variant="body2"
            sx={{ mt: 1, color: "whitesmoke", fontSize: "0.9rem" }}
          >
            Join our community of biking enthusiasts and share your journey with
            fellow riders.
          </Typography>
        </Grid>
      </Grid>
      {/* Our Team Section */}
      <Box
        sx={{
          px: { xs: 3, sm: 5 },
          py: { xs: 5, md: 10 },
          textAlign: "center",
        }}
      >
        <Typography
          variant="h4"
          sx={{
            color: "#C6E4FF",
            fontWeight: "bold",
            mb: 5,
            fontSize: { xs: "1.8rem", md: "3rem" },
          }}
        >
          MEET OUR TEAM
        </Typography>
        <Grid container spacing={3}>
          {/* Team Member 1 */}
          <Grid item xs={12} sm={6} md={4}>
            <CardMedia
              component="img"
              image="../images/team_member1.jpg"
              alt="Team Member 1"
              sx={{
                borderRadius: "50%",
                width: "200px",
                height: "200px",
                objectFit: "cover",
                mx: "auto",
              }}
            />
            <Typography
              variant="h6"
              sx={{
                mt: 2,
                fontWeight: "bold",
                color: "#F9A826",
              }}
            >
             Someswar Gorai
            </Typography>
            <Typography
              variant="body2"
              sx={{
                color: "whitesmoke",
                fontSize: "1rem",
                fontStyle: "italic",
              }}
            >
              Frontend Developer
            </Typography>
          </Grid>
          {/* Team Member 2 */}
          <Grid item xs={12} sm={6} md={4}>
            <CardMedia
              component="img"
              image="../images/team_member2.jpg"
              alt="Team Member 2"
              sx={{
                borderRadius: "50%",
                width: "200px",
                height: "200px",
                objectFit: "cover",
                mx: "auto",
              }}
            />
            <Typography
              variant="h6"
              sx={{
                mt: 2,
                fontWeight: "bold",
                color: "#F9A826",
              }}
            >
              Amardeep Dubey
            </Typography>
            <Typography
              variant="body2"
              sx={{
                color: "whitesmoke",
                fontSize: "1rem",
                fontStyle: "italic",
              }}
            >
              Manager, Senior Developer & Lead
            </Typography>
          </Grid>
          {/* Team Member 3 */}
          <Grid item xs={12} sm={6} md={4}>
            <CardMedia
              component="img"
              image="../images/team_member3.jpg"
              alt="Team Member 3"
              sx={{
                borderRadius: "50%",
                width: "200px",
                height: "200px",
                objectFit: "cover",
                mx: "auto",
              }}
            />
            <Typography
              variant="h6"
              sx={{
                mt: 2,
                fontWeight: "bold",
                color: "#F9A826",
              }}
            >
             Md Danish
            </Typography>
            <Typography
              variant="body2"
              sx={{
                color: "whitesmoke",
                fontSize: "1rem",
                fontStyle: "italic",
              }}
            >
              Backend Developer
            </Typography>
          </Grid>
        </Grid>
      </Box>
      <Footer />
    </Box>
  );
}
export default About;