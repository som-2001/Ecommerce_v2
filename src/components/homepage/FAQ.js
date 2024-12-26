import React from "react";
import { Grid, Typography, Accordion, AccordionSummary, AccordionDetails, Box, CardMedia } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export const FAQ = () => {
  return (
    <Box sx={{ padding: 5, backgroundColor: "black", color: "white" }}>
      <Grid container spacing={4} justifyContent="center" alignItems="center">
        {/* FAQ Section */}
        <Grid item xs={12} md={6} >
          <Typography variant="h4" gutterBottom sx={{ fontWeight: "bold", textAlign: "center", marginBottom: 4 }}>
            Frequently Asked Questions
          </Typography>

          {/* Accordion for FAQ Items */}
          <Accordion sx={{ backgroundColor: "transparent", borderRadius: "8px", marginBottom: 2,color:"white" }}>
            <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />} aria-controls="panel1a-content" id="panel1a-header">
              <Typography variant="h6">How do I rent a bike?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="body1">
                Simply choose your desired bike, select the rental period, and complete the booking on our website. After that, we'll prepare your bike for pickup.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion sx={{ backgroundColor: "transparent", borderRadius: "8px", marginBottom: 2,color:"white" }}>
            <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />} aria-controls="panel2a-content" id="panel2a-header">
              <Typography variant="h6">Do you offer delivery for bikes?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="body1">
                Yes! We offer delivery services to select locations. You can select the delivery option during the checkout process.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion sx={{ backgroundColor: "transparent", borderRadius: "8px", marginBottom: 2,color:"white" }}>
            <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />} aria-controls="panel3a-content" id="panel3a-header">
              <Typography variant="h6">What happens if the bike is damaged?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="body1">
                If the bike is damaged during your rental period, you may be charged for repairs. Please handle the bike with care.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion sx={{ backgroundColor: "transparent", borderRadius: "8px", marginBottom: 2,color:"white" }}>
            <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />} aria-controls="panel4a-content" id="panel4a-header">
              <Typography variant="h6">What payment methods do you accept?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="body1">
                We accept credit cards, debit cards, and various online payment options. All payments are secured through our payment gateway.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Grid>

        {/* Image Section - Bike with Removed Background */}
        <Grid item xs={12} md={6} sx={{ display: "flex", justifyContent: "center",alignItems:"center" }}>
          <CardMedia
            component="img"
            image="../images/faq.jpg" // Replace with your image URL
            alt="Bike"
            sx={{
              maxWidth: {xs:"90%",sm:"70%",md:"70%",lg:"60%"},
              height: "auto",
              borderRadius: "8px",
            }}
          />
        </Grid>
      </Grid>
    </Box>
  );
};
