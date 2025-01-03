import React, { useState } from "react";
import { Card, CardContent, Typography, Grid, Box, Button, Collapse, Divider } from "@mui/material";

const BikeDetailsCard = () => {
  const [expanded, setExpanded] = useState(false);

  const generalInfo = [
    { label: "Model", value: "Yamaha R15" },
    { label: "Engine Capacity", value: "155 cc" },
    { label: "Max Power", value: "18.4 PS @ 10,000 rpm" },
    { label: "Fuel Type", value: "Petrol" },
    { label: "Top Speed", value: "136 km/h" },
    { label: "Acceleration (0-60 kmph)", value: "3.2 seconds" },
  ];

  const performanceInfo = [
    { label: "Top Speed", value: "136 km/h" },
    { label: "Acceleration (0-60 kmph)", value: "3.2 seconds" },
  ];

  const dimensions = [
    { label: "Length", value: "1990 mm" },
    { label: "Width", value: "725 mm" },
    { label: "Height", value: "1135 mm" },
    { label: "Ground Clearance", value: "170 mm" },
  ];

  const brakesAndSuspension = [
    { label: "Front Brake", value: "Disc 282 mm" },
    { label: "Rear Brake", value: "Disc 220 mm" },
    { label: "Front Suspension", value: "Telescopic Fork" },
    { label: "Rear Suspension", value: "Monoshock" },
  ];

  const additionalDetails = [
    { label: "Transmission", value: "6-Speed Manual" },
    { label: "Mileage", value: "45 kmpl" },
    { label: "Weight", value: "142 kg" },
    { label: "Price", value: "₹1.8 Lakh (ex-showroom)" },
  ];

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const renderSpecifications = (data) =>
    data.map((item, index) => (
      <React.Fragment key={index}>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Typography variant="body2" color="text.secondary">
              {item.label}
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="body2">{item.value}</Typography>
          </Grid>
        </Grid>
        {index < data.length - 1 && <Divider sx={{ my: 1 }} />}
      </React.Fragment>
    ));

  return (
    <Card sx={{ width: {xs:"80vw",sm:"60vw"}, margin: "auto", padding: 2, borderRadius: 2 }}>
      <CardContent>
        <Typography variant="h5" gutterBottom sx={{ textAlign: "center", fontWeight: "bold" }}>
          Yamaha R15 - Specifications
        </Typography>
        <Box sx={{ marginTop: 3 }}>
          <Typography variant="h6" sx={{ my: 2 }} gutterBottom>
            General Information
          </Typography>
          {renderSpecifications(generalInfo)}
        </Box>

        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <Box sx={{ marginTop: 3 }}>
            <Typography variant="h6" gutterBottom sx={{ my: 2 }}>
              Performance
            </Typography>
            {renderSpecifications(performanceInfo)}

            <Typography variant="h6" gutterBottom sx={{ marginTop: 3 }}>
              Dimensions
            </Typography>
            {renderSpecifications(dimensions)}

            <Typography variant="h6" gutterBottom sx={{ marginTop: 3 }}>
              Brakes & Suspension
            </Typography>
            {renderSpecifications(brakesAndSuspension)}

            <Typography variant="h6" gutterBottom sx={{ marginTop: 3 }}>
              Additional Details
            </Typography>
            {renderSpecifications(additionalDetails)}
          </Box>
        </Collapse>

        <Box sx={{ marginTop: 3, textAlign: "center" }}>
          <Button
            variant="contained"
            onClick={handleExpandClick}
            sx={{
              marginTop: 2,
              padding: 2,
              width: "150px",
              backgroundColor: "black",
              color: "white",
              borderRadius: 2,
              ":hover": { backgroundColor: "#444" },
            }}
          >
            {expanded ? "View Less" : "View More"}
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

export default BikeDetailsCard;
