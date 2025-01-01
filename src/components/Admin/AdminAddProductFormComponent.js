import React, { useState } from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  TextField,
  Checkbox,
  FormControlLabel,
  MenuItem,
  Grid,
  Button,
  Box,
  InputAdornment,
  FormControl,
  FormLabel,
  Select,
  InputLabel,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import BasicDetails from "./ProductForm/BasicDetails";
import Specifications from "./ProductForm/Specification";
import OrderPrice from "./ProductForm/OrderPrice";
import Features from "./ProductForm/Features";
import ColorStock from "./ProductForm/ColorStock";
import ImageDetails from "./ProductForm/ImageDetails";

// Validation Schema with Yup
const schema = yup.object().shape({
  // Basic Information
  bikeName: yup.string().required("Bike Name is required"),
  brand: yup.string().required("Brand is required"),
  model: yup.string().required("Model is required"),
  type: yup.string().required("Type is required"),
  engineCapacity: yup
    .number()
    .typeError("Engine Capacity must be a number")
    .required("Engine Capacity is required"),
  yearOfLaunch: yup
    .number()
    .typeError("Year of Launch must be a number")
    .required("Year of Launch is required"),
  // Specifications
  engineType: yup.string().required("Engine Type is required"),
  fuelType: yup.string().required("Fuel Type is required"),
  mileage: yup
    .number()
    .typeError("Mileage must be a number")
    .required("Mileage is required"),
  maxPower: yup.string().required("Maximum Power is required"),
  maxTorque: yup.string().required("Maximum Torque is required"),
  gearbox: yup.string().required("Gearbox is required"),
  coolingSystem: yup.string().required("Cooling System is required"),
  seatHeight: yup
    .number()
    .typeError("Seat Height must be a number")
    .required("Seat Height is required"),
  groundClearance: yup
    .number()
    .typeError("Ground Clearance must be a number")
    .required("Ground Clearance is required"),
  kerbWeight: yup
    .number()
    .typeError("Kerb Weight must be a number")
    .required("Kerb Weight is required"),
  // Price Details
  originalPrice: yup
    .number()
    .typeError("Original Price must be a number")
    .required("Original Price is required"),
  offerPrice: yup.number().typeError("Offer Price must be a number"),
  onRoadPrice: yup
    .number()
    .typeError("On-Road Price must be a number")
    .required("On-Road Price is required"),
  discount: yup.number().typeError("Discount must be a number"),
  // Colors
  availableColors: yup.array().required("Available Colors are required"),
});

const BikeFormWithAccordion = () => {

  const [file,setFile]=useState('');

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      // Basic Information
      bikeName: "",
      brand: "",
      model: "",
      type: "",
      engineCapacity: "",
      yearOfLaunch: "",
      // Specifications
      engineType: "",
      fuelType: "",
      mileage: "",
      maxPower: "",
      maxTorque: "",
      gearbox: "",
      coolingSystem: "",
      seatHeight: "",
      groundClearance: "",
      kerbWeight: "",
      // Price Details
      originalPrice: "",
      offerPrice: "",
      discount: "",
      // Features
      abs: false,
      bluetooth: false,
      mobileChargingPort: false,
      alloyWheels: false,
      ledLights: false,
      // Colors
      availableColors: [],

      //images
      file:''
    },
  });

  const onSubmit = (data) => {
    console.log("Form Data:", data);
    console.log(file);
  };

  return (
    <Box p={4}>
   
        {/* Basic Information */}
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography variant="h6">Basic Information</Typography>
          </AccordionSummary>
          <AccordionDetails>
           <BasicDetails/>
          </AccordionDetails>
        </Accordion>

        {/* Specifications */}
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography variant="h6">Specifications</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Specifications/>
          </AccordionDetails>
        </Accordion>

        {/* Price Details */}
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography variant="h6">Price Details</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <OrderPrice/>
          </AccordionDetails>
        </Accordion>

        {/* Features */}
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography variant="h6">Features</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Features/>
         
          </AccordionDetails>
        </Accordion>

        {/* Colors */}
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography variant="h6">Colors</Typography>
          </AccordionSummary>
          <AccordionDetails>
            {/* Available Colors (Multiselect) */}
            <ColorStock/>
          </AccordionDetails>
        </Accordion>

        {/* Images */}

        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography variant="h6">Images</Typography>
          </AccordionSummary>
          <AccordionDetails>
           
          <ImageDetails/>
          </AccordionDetails>
        </Accordion>

    </Box>
  );
};

export default BikeFormWithAccordion;
