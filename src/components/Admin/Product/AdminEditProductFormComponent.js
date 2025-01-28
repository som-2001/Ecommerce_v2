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
import { useDispatch } from "react-redux";
import { EditProduct } from "../../../Redux/ProductAdminSlice/ProductSlice";

const BikeFormWithAccordion = () => {

  const dispatch=useDispatch();
  const {id}=useParams();
  const [expanded, setExpanded] = useState("panel1");
  const [product,setProduct]=useState([]);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BASEURL}/products/products/${id}`, {
        withCredentials: true,
      })
      .then((res) => {
        setProduct(res.data);
        dispatch(EditProduct({
          topSpeed: res?.data?.topSpeed,
          productName: res?.data?.productName,
          brand: res?.data?.brand,
          model: res?.data?.model,
          modelNumber: res?.data?.modelNumber,
          type: res?.data?.type,
          engineCapacity: res?.data?.engineCapacity,
          yearOfLaunch: res?.data?.yearOfLaunch,
          description: res?.data?.description,
          engineType: res?.data?.engineType,
          fuelType: res?.data?.fuelType,
          mileage: res?.data?.mileage,
          maxPower: res?.data?.maxPower,
          maxTorque: res?.data?.maxTorque,
          gearbox: res?.data?.gearbox,
          coolingSystem: res?.data?.coolingSystem,
          seatHeight: res?.data?.seatHeight,
          groundClearance: res?.data?.groundClearance,
          kerbWeight: res?.data?.kerbWeight,
          originalPrice: res?.data?.originalPrice,
          offerPrice: res?.data?.offerPrice,
          discount: res?.data?.discount,
          absType: res?.data?.absType,
          fuelTankCapacity: res?.data?.fuelTankCapacity,
          instrumentConsole: res?.data?.instrumentConsole,
          bluetoothConnectivity: res?.data?.bluetoothConnectivity,
          mobileChargingPort: res?.data?.mobileChargingPort,
          alloyWheels: res?.data?.alloyWheels,
          ledLights: res?.data?.ledLights,
        }));
        
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleChange = (panel) => (event, isExpanded) => {
    
    setExpanded(isExpanded ? panel : false);
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
