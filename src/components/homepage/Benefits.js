import React from "react";
import { Box, Typography, Grid, Paper } from "@mui/material";
import PaymentIcon from "@mui/icons-material/Payment";
import ReplayIcon from "@mui/icons-material/Replay";
import HeadsetMicIcon from "@mui/icons-material/HeadsetMic";

const benefits = [
  {
    icon: <PaymentIcon fontSize="large" />,
    title: "Payment Method",
    description: "We offer flexible payment options, to make easier.",
    bgcolor:"#e3c87d"
  },
  {
    icon: <ReplayIcon fontSize="large" />,
    title: "Return Policy",
    description: "You can return a product within 30 days.",
    bgcolor:"#7da2e3"
  },
  {
    icon: <HeadsetMicIcon fontSize="large" />,
    title: "Customer Support",
    description: "Our customer support is 24/7.",
    bgcolor:"#ca93e6"
  },
];

const Benefits = () => {
  return (
    <Box sx={{ backgroundColor: "#a4c3d3", p:{xs:3,sm:"82px 160px"},height:{xs:"fit-content",md:"350px" }}}>
      <Typography
        variant="h4"
        sx={{ textAlign: "center", marginBottom: "20px", fontWeight: "600" }}
      >
        Benefits for your expediency
      </Typography>
      <Grid container spacing={3} justifyContent="center" sx={{mt:5}}>
        {benefits.map((benefit, index) => (
          <Grid item xs={12} sm={6} md={4} key={index} sx={{display:"flex",justifyContent:"center"}}>
            <Paper
              elevation={0}
              sx={{
                backgroundColor: "transparent",
                textAlign: "center",
                padding: "20px",
                borderRadius: "12px",
              }}
            >
              <Box
                sx={{
                  width: "60px",
                  height: "60px",
                  margin: "0 auto",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: benefit.bgcolor,
                  borderRadius: "20%",
                  marginBottom: "10px",
                }}
              >
                {benefit.icon}
              </Box>
              <Typography variant="h6" sx={{ fontWeight: "600", marginBottom: "8px" }}>
                {benefit.title}
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{width:"250px"}}>
                {benefit.description}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Benefits;
