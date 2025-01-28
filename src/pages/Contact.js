import React from "react";
import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import Footer from "../components/Footer";
import Cookies from "js-cookie";
import { HomeNavbar } from "../components/HomeNavbar";
import { AuthNavbar } from "../components/AuthNavbar";
import styles from "../styles/Contact.module.css";

function Contact() {
  const token = Cookies.get("accessToken");
  return (
    <Box sx={{ backgroundColor: "black", color: "whitesmoke" }}>
      {/* Banner Section */}
      {token ? <AuthNavbar /> : <HomeNavbar />}
      <Box className={styles.parent}>
        <Box className={styles.child}>
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
          <Button variant="contained" className={styles.heading}>
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
          className={styles.h4}
          sx={{
            fontSize: { xs: "1.8rem", md: "3rem" },
          }}
        >
          Contact Us
        </Typography>
        <Typography
          variant="body1"
          className={styles.body1}
          sx={{ fontSize: { xs: "0.9rem", md: "1.2rem" } }}
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
              className={styles.textField}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <TextField
              label="Your Email"
              variant="outlined"
              fullWidth
              className={styles.textField}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <TextField
              label="Subject"
              variant="outlined"
              fullWidth
              className={styles.textField}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Message"
              variant="outlined"
              multiline
              rows={4}
              fullWidth
              className={styles.textField}
            />
          </Grid>
        </Grid>
        <Button variant="contained" className={styles.btn}>
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
          className={styles.h4}
          sx={{
            fontSize: { xs: "1.8rem", md: "3rem" },
          }}
        >
          Visit Us
        </Typography>
        <Typography
          variant="body1"
          className={styles.body1}
          sx={{
            fontSize: { xs: "0.9rem", md: "1.2rem" },
          }}
        >
          Come visit our office, and we’ll be happy to meet you in person! Here
          is our location.
        </Typography>
      </Box>
      <Footer />
    </Box>
  );
}

export default Contact;
