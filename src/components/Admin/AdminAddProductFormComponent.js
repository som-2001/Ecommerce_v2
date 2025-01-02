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
  const [expanded, setExpanded] = useState("panel1"); // Track which panel is expanded
  const [validBasicInfo, setValidBasicInfo] = useState(false); // Track if Basic Details are valid
  const [validSpecifications, setValidSpecifications] = useState(false); // Track if Specifications are valid
  const [validPriceDetails, setValidPriceDetails] = useState(false); // Track if Price Details are valid
  const [validFeatures, setValidFeatures] = useState(false); // Track if Features are valid

  // Handle panel expansion
  const handleChange = (panel) => (event, isExpanded) => {
    if (panel === "panel2" && !validBasicInfo) return; // Prevent expansion of specifications if Basic Details are not valid
    if (panel === "panel3" && !validSpecifications) return; // Prevent expansion of Price if Specifications are not valid
    if (panel === "panel4" && !validPriceDetails) return; // Prevent expansion of Features if Price is not valid
    if (panel === "panel5" && !validFeatures) return; // Prevent expansion of Images if Features are not valid
    
    setExpanded(isExpanded ? panel : false);
  };

  // Validation callbacks
  const handleBasicInfoValidation = (isValid) => {
   
    if (isValid) {
      setExpanded("panel2"); // Expand the second panel if the first panel is valid
    }
  };

  const handleSpecificationsValidation = (isValid) => {
    setValidBasicInfo(false); 
    setValidSpecifications(isValid);
    if (isValid) {
      setExpanded("panel3"); // Expand the third panel if the second panel is valid
    }
  };

  const handlePriceDetailsValidation = (isValid) => {
    setValidPriceDetails(isValid);
    if (isValid) {
      setExpanded("panel4"); // Expand the fourth panel if the third panel is valid
    }
  };

  const handleFeaturesValidation = (isValid) => {
    setValidFeatures(isValid);
    if (isValid) {
      setExpanded("panel5"); // Expand the fifth panel if the fourth panel is valid
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
