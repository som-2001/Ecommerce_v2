import React, { useState } from "react";
import { Card, CardContent, Typography, Grid, Box, Button, Collapse, Divider } from "@mui/material";

const BikeDetailsCard = ({ product }) => {
  const [expanded, setExpanded] = useState(false);

  const generalInfo = [
    { label: "Brand", value: product.brand },
    { label: "Model", value: product.model },
    { label: "Engine Capacity", value: `${product.engineCapacity} cc` },
    { label: "Max Power", value: `${product.maxPower} PS` },
    { label: "Fuel Type", value: product.fuelType },
    { label: "Year of Launch", value: product.yearOfLaunch },
  ];

  const performanceInfo = [
    { label: "Top Speed", value: `${product.topSpeed} km/h` },
    { label: "Max Torque", value: `${product.maxTorque} Nm` },
    { label: "Mileage", value: `${product.mileage} kmpl` },
  ];

  const dimensions = [
    { label: "Seat Height", value: `${product.seatHeight} mm` },
    { label: "Ground Clearance", value: `${product.groundClearance} mm` },
    { label: "Kerb Weight", value: `${product.kerbWeight} kg` },
    { label: "Fuel Tank Capacity", value: `${product.fuelTankCapacity} L` },
  ];

  const brakesAndSuspension = [
    { label: "ABS Type", value: product.absType },
    { label: "Cooling System", value: product.coolingSystem },
    { label: "Gearbox", value: product.gearbox },
  ];

  const additionalDetails = [
    { label: "Original Price", value: `₹${product.originalPrice}` },
    { label: "Offer Price", value: `₹${product.offerPrice}` },
    { label: "Discount", value: `${product.discount}%` },
    { label: "Stock", value: `${product.stock} units available` },
    { label: "Bluetooth Connectivity", value: product.bluetoothConnectivity ? "Yes" : "No" },
    { label: "Mobile Charging Port", value: product.mobileChargingPort ? "Yes" : "No" },
    { label: "Alloy Wheels", value: product.alloyWheels ? "Yes" : "No" },
    { label: "LED Lights", value: product.ledLights ? "Yes" : "No" },
    { label: "Instrument Console", value: product.instrumentConsole },
    { label: "Selected Color", value: product.selectedColor },
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
    <Card sx={{ width: { xs: "80vw", sm: "60vw" }, margin: "auto", padding: 2, borderRadius: 2 }}>
      <CardContent>
        <Typography variant="h5" gutterBottom sx={{ textAlign: "center", fontWeight: "bold" }}>
          {product.productName} - Specifications
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
