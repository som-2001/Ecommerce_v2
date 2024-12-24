import React from "react";
import { Box, Button, Grid, TextField, Typography, CardMedia } from "@mui/material";
import { HomeNavbar } from "../components/HomeNavbar";
import Footer from "../components/Footer";

function Contact(){
  return (
    <Box sx={{ backgroundColor: "black", color: "whitesmoke" }}>
      {/* Banner Section */}
      <HomeNavbar/>
      <Box
        sx={{
          position: "relative",
          height: "60vh",
          backgroundImage: `url("../images/contact.jpg")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
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
            Get in Touch with Us
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontSize: { xs: "0.9rem", md: "1.2rem" },
              mb: 3,
            }}
          >
            We're here to help with any questions or feedback you may have.
          </Typography>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#f9a826",
              color: "black",
              padding: "10px 20px",
              borderRadius: "6px",
            }}
          >
            Contact Us
          </Button>
        </Box>
      </Box>

      {/* Contact Information Section */}
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
          Contact Us
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
          We value your inquiries and feedback! Whether you have a question, 
          need assistance, or just want to say hello, we're always happy to hear 
          from you.
        </Typography>
      </Box>

      {/* Contact Form Section */}
      <Box
        sx={{
          px: { xs: 3, sm: 5 },
          py: 5,
          backgroundColor: "#323232",
          textAlign: "center",
        }}
      >
        <Typography
          variant="h5"
          sx={{
            color: "#f9a826",
            fontWeight: "bold",
            mb: 3,
          }}
        >
          Send Us a Message
        </Typography>
        <Grid container spacing={3} sx={{ justifyContent: "center" }}>
          <Grid item xs={12} sm={6} md={4}>
            <TextField
              label="Your Name"
              variant="outlined"
              fullWidth
              sx={{ backgroundColor: "white", borderRadius: "6px" }}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <TextField
              label="Your Email"
              variant="outlined"
              fullWidth
              sx={{ backgroundColor: "white", borderRadius: "6px" }}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <TextField
              label="Subject"
              variant="outlined"
              fullWidth
              sx={{ backgroundColor: "white", borderRadius: "6px" }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Message"
              variant="outlined"
              multiline
              rows={4}
              fullWidth
              sx={{ backgroundColor: "white", borderRadius: "6px" }}
            />
          </Grid>
        </Grid>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#f9a826",
            color: "black",
            padding: "10px 20px",
            mt: 3,
            borderRadius: "6px",
          }}
        >
          Submit
        </Button>
      </Box>

      {/* Location Section */}
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
          Visit Us
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
          Come visit our office, and we’ll be happy to meet you in person! Here
          is our location.
        </Typography>
      </Box>
      <Footer/>
    </Box>
  );
};

export default Contact;