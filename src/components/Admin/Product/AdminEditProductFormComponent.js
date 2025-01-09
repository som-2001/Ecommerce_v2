import React, { useEffect, useState } from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Box,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import BasicDetails from "./BasicDetails";
import Specifications from "./Specification";
import OrderPrice from "./OrderPrice";
import Features from "./Features";
import ImageDetails from "./ImageDetails";
import axios from "axios";
import { useParams } from "react-router-dom";

const BikeFormWithAccordion = () => {

  const {id}=useParams();
  const [expanded, setExpanded] = useState("panel1"); // Track which panel is expanded
  const [product,setProduct]=useState([]);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BASEURL}/products/products/${id}`, {
        withCredentials: true,
      })
      .then((res) => {
        setProduct(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // Handle panel expansion
  const handleChange = (panel) => (event, isExpanded) => {
    
    setExpanded(isExpanded ? panel : false);
  };

  // Validation callbacks
 
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
          <BasicDetails product={product} />
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
          <Specifications product={product}/>
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
          <OrderPrice product={product} />
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
          <Features product={product} />
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
          <ImageDetails item={product} />
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default BikeFormWithAccordion;
