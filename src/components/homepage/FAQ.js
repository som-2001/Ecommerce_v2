import React from "react";
import { Grid, Typography, Accordion, AccordionSummary, AccordionDetails, Box, CardMedia } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
export const FAQ = () => {
  return (
    <Box sx={{ padding: 5, backgroundColor: "black", color: "white" }}>
      <Grid container spacing={4} justifyContent="center" alignItems="center">
        {/* FAQ Section */}
        <Grid item xs={12} md={6}>
          <Typography variant="h4" gutterBottom sx={{ fontWeight: "bold", textAlign: "center", marginBottom: 4 }}>
            Frequently Asked Questions
          </Typography>
          {/* Accordion for FAQ Items */}
          <Accordion sx={{ backgroundColor: "transparent", borderRadius: "8px", marginBottom: 2, color: "white" }}>
            <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />} aria-controls="panel1a-content" id="panel1a-header">
              <Typography variant="h6">How do I buy a bike from your store?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="body1">
                Simply browse through our collection of bikes, select the one you like, choose your preferred size and color, then proceed to checkout.
                You can pay using credit or debit cards, and we will ship your bike directly to your doorstep.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion sx={{ backgroundColor: "transparent", borderRadius: "8px", marginBottom: 2, color: "white" }}>
            <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />} aria-controls="panel2a-content" id="panel2a-header">
              <Typography variant="h6">Do you offer bike delivery?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="body1">
                Yes, we offer free delivery for bikes within select regions. You can select the delivery option during checkout. For international orders,
                we also provide affordable shipping rates.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion sx={{ backgroundColor: "transparent", borderRadius: "8px", marginBottom: 2, color: "white" }}>
            <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />} aria-controls="panel3a-content" id="panel3a-header">
              <Typography variant="h6">Can I test ride the bike before purchasing?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="body1">
                Yes, we offer test rides at select locations. You can book a test ride via our website or visit our store. Our team will assist you in finding the right bike for you.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion sx={{ backgroundColor: "transparent", borderRadius: "8px", marginBottom: 2, color: "white" }}>
            <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />} aria-controls="panel4a-content" id="panel4a-header">
              <Typography variant="h6">What if my bike gets damaged during delivery?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="body1">
                We take great care in packaging your bike to ensure it arrives in perfect condition. If your bike is damaged during delivery, please contact us immediately, and we will resolve the issue with a replacement or repair.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion sx={{ backgroundColor: "transparent", borderRadius: "8px", marginBottom: 2, color: "white" }}>
            <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />} aria-controls="panel5a-content" id="panel5a-header">
              <Typography variant="h6">Do you offer bike accessories?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="body1">
                Yes, we offer a wide range of bike accessories such as helmets, locks, water bottles, and repair kits. You can find these items in our Accessories section on the website.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion sx={{ backgroundColor: "transparent", borderRadius: "8px", marginBottom: 2, color: "white" }}>
            <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />} aria-controls="panel6a-content" id="panel6a-header">
              <Typography variant="h6">What if I need a bike repair or service?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="body1">
                We offer bike repair and maintenance services at our store. You can schedule an appointment via our website, and our expert mechanics will ensure your bike stays in top condition.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Grid>
        {/* Image Section - Bike with Removed Background */}
        <Grid item xs={12} md={6} sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
          <CardMedia
            component="img"
            image="../images/faq.jpg"
            alt="Bike"
            sx={{
              maxWidth: { xs: "90%", sm: "70%", md: "70%", lg: "60%" },
              height: "auto",
              borderRadius: "8px",
            }}
          />
        </Grid>
      </Grid>
    </Box>
  );
};