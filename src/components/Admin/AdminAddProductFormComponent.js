import React, { useState } from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Box,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import BasicDetails from "./ProductForm/BasicDetails";
import Specifications from "./ProductForm/Specification";
import OrderPrice from "./ProductForm/OrderPrice";
import Features from "./ProductForm/Features";
import ImageDetails from "./ProductForm/ImageDetails";

const BikeFormWithAccordion = () => {
  const [expanded, setExpanded] = useState("panel1"); 
  const [validBasicInfo, setValidBasicInfo] = useState(false);
  const [validSpecifications, setValidSpecifications] = useState(false);
  const [validPriceDetails, setValidPriceDetails] = useState(false); 
  const [validFeatures, setValidFeatures] = useState(false); 

  
  const handleChange = (panel) => (event, isExpanded) => {
    if (panel === "panel2" && !validBasicInfo) return; 
    if (panel === "panel3" && !validSpecifications) return; 
    if (panel === "panel4" && !validPriceDetails) return;
    if (panel === "panel5" && !validFeatures) return; 
    
    setExpanded(isExpanded ? panel : false);
  };

  const handleBasicInfoValidation = (isValid) => {
   
    if (isValid) {
      setExpanded("panel2"); 
    }
  };

  const handleSpecificationsValidation = (isValid) => {
    setValidBasicInfo(isValid); 
    setValidSpecifications(isValid);
    if (isValid) {
      setExpanded("panel3"); 
    }
  };

  const handlePriceDetailsValidation = (isValid) => {
    setValidPriceDetails(isValid);
    if (isValid) {
      setExpanded("panel4"); 
    }
  };

  const handleFeaturesValidation = (isValid) => {
    setValidFeatures(isValid);
    if (isValid) {
      setExpanded("panel5");
    }
  };

  return (
    <Box p={4}>
      {/* Basic Information */}
      <Accordion expanded={expanded === "panel1"} onChange={handleChange("panel1")}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="body1" color="text.secondary">
            Basic Information
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <BasicDetails onValidation={handleBasicInfoValidation} />
        </AccordionDetails>
      </Accordion>

      {/* Specifications */}
      <Accordion expanded={expanded === "panel2"} onChange={handleChange("panel2")}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="body1" color="text.secondary">
            Specifications
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Specifications onValidation={handleSpecificationsValidation} />
        </AccordionDetails>
      </Accordion>

      {/* Price Details */}
      <Accordion expanded={expanded === "panel3"} onChange={handleChange("panel3")}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="body1" color="text.secondary">
            Price Details
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <OrderPrice onValidation={handlePriceDetailsValidation} />
        </AccordionDetails>
      </Accordion>

      {/* Features */}
      <Accordion expanded={expanded === "panel4"} onChange={handleChange("panel4")}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="body1" color="text.secondary">
            Features
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Features onValidation={handleFeaturesValidation} />
        </AccordionDetails>
      </Accordion>

      {/* Images */}
      <Accordion expanded={expanded === "panel5"} onChange={handleChange("panel5")}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="body1" color="text.secondary">
            Images
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <ImageDetails />
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default BikeFormWithAccordion;
