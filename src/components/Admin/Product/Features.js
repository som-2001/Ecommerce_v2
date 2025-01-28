import React, { useEffect } from "react";
import {
  Grid,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Typography,
  Button,
  Box,
} from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { EditProduct } from "../../../Redux/ProductAdminSlice/ProductSlice";
import styles from "../../../styles/BasicDetails.module.css";

// Validation Schema using Yup
const validationSchema = Yup.object().shape({
  absType: Yup.string().required("ABS Type is required"),
  fuelTankCapacity: Yup.number()
    .required("Fuel Tank Capacity is required")
    .positive("Fuel Tank Capacity must be a positive number"),
  topSpeed: Yup.number()
    .required("Top Speed is required")
    .positive("Top Speed must be a positive number"),
  instrumentConsole: Yup.string().required("Instrument Console is required"),
  bluetoothConnectivity: Yup.string().required(
    "Bluetooth Connectivity is required"
  ),
  mobileChargingPort: Yup.string().required("Mobile Charging Port is required"),
  alloyWheels: Yup.string().required("Alloy Wheels option is required"),
  ledLights: Yup.string().required("LED Lights option is required"),
});

const Features = ({ product }) => {
  const {
    control,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });
  const dispatch = useDispatch();

  useEffect(() => {
    if (product) {
      setValue("absType", product?.absType || "");
      setValue("fuelTankCapacity", product?.fuelTankCapacity || "");
      setValue("topSpeed", product?.topSpeed || "");
      setValue("instrumentConsole", product?.instrumentConsole || "");
      setValue(
        "bluetoothConnectivity",
        product?.bluetoothConnectivity ? "Available" : "Not Available"
      );
      setValue(
        "mobileChargingPort",
        product?.mobileChargingPort ? "Available" : "Not Available"
      );
      setValue(
        "alloyWheels",
        product?.alloyWheels ? "Available" : "Not Available"
      );
      setValue("ledLights", product?.ledLights ? "Available" : "Not Available");
    }
  }, [product, setValue]);

  const onSubmit = (data) => {
  
    const formattedData = {
      absType: data.absType,
      fuelTankCapacity: data.fuelTankCapacity,
      topSpeed: data.topSpeed,
      instrumentConsole: data.instrumentConsole,
      bluetoothConnectivity: data.bluetoothConnectivity === "Available"?true:false ,
      mobileChargingPort: data.mobileChargingPort === "Available"?true:false,
      alloyWheels: data.alloyWheels === "Available"?true:false,
      ledLights: data.ledLights === "Available"?true:false,
    };
    console.log("Form Submitted:", formattedData);
    dispatch(EditProduct(formattedData));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Grid container spacing={2}>
        {/* ABS Type */}
        <Grid item xs={12} sm={6} md={4}>
          <Controller
            name="absType"
            control={control}
            render={({ field }) => (
              <FormControl fullWidth>
                <InputLabel>ABS Type</InputLabel>
                <Select {...field} value={field.value || ""} error={!!errors.absType}>
                  <MenuItem value="None">None</MenuItem>
                  <MenuItem value="Single-channel">Single-channel</MenuItem>
                  <MenuItem value="Dual-channel">Dual-channel</MenuItem>
                </Select>
                <Typography color="error">{errors.absType?.message}</Typography>
              </FormControl>
            )}
          />
        </Grid>

        {/* Fuel Tank Capacity */}
        <Grid item xs={12} sm={6} md={4}>
          <Controller
            name="fuelTankCapacity"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                label="Full Tank Capacity"
                focused
                fullWidth
                error={!!errors.fuelTankCapacity}
                helperText={errors.fuelTankCapacity?.message}
                type="number"
              />
            )}
          />
        </Grid>

        {/* Top Speed */}
        <Grid item xs={12} sm={6} md={4}>
          <Controller
            name="topSpeed"
           
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                label="Top Speed"
                focused
                fullWidth
                error={!!errors.topSpeed}
                helperText={errors.topSpeed?.message}
                type="number"
              />
            )}
          />
        </Grid>

        {/* Instrument Console */}
        <Grid item xs={12} sm={6} md={4}>
          <Controller
            name="instrumentConsole"
            control={control}
            focused
            render={({ field }) => (
              <TextField
                {...field}
                focused
                label="Instrument Console"
                fullWidth
                error={!!errors.instrumentConsole}
                helperText={errors.instrumentConsole?.message}
              />
            )}
          />
        </Grid>

        {/* Bluetooth Connectivity */}
        <Grid item xs={12} sm={6} md={4}>
          <Controller
            name="bluetoothConnectivity"
            control={control}
            render={({ field }) => (
              <FormControl fullWidth>
                <InputLabel>Bluetooth Connectivity</InputLabel>
                <Select {...field} value={field.value || ""} error={!!errors.bluetoothConnectivity}>
                  <MenuItem value="Available">Available</MenuItem>
                  <MenuItem value="Not Available">Not Available</MenuItem>
                </Select>
                <Typography color="error">{errors.bluetoothConnectivity?.message}</Typography>
              </FormControl>
            )}
          />
        </Grid>

        {/* Mobile Charging Port */}
        <Grid item xs={12} sm={6} md={4}>
          <Controller
            name="mobileChargingPort"
            control={control}
            render={({ field }) => (
              <FormControl fullWidth>
                <InputLabel>Mobile Charging Port</InputLabel>
                <Select {...field} value={field.value || ""} error={!!errors.mobileChargingPort}>
                  <MenuItem value="Available">Available</MenuItem>
                  <MenuItem value="Not Available">Not Available</MenuItem>
                </Select>
                <Typography color="error">{errors.mobileChargingPort?.message}</Typography>
              </FormControl>
            )}
          />
        </Grid>

        {/* Alloy Wheels */}
        <Grid item xs={12} sm={6} md={4}>
          <Controller
            name="alloyWheels"
            control={control}
            render={({ field }) => (
              <FormControl fullWidth>
                <InputLabel>Alloy Wheels</InputLabel>
                <Select {...field} value={field.value || ""} error={!!errors.alloyWheels}>
                  <MenuItem value="Available">Available</MenuItem>
                  <MenuItem value="Not Available">Not Available</MenuItem>
                </Select>
                <Typography color="error">{errors.alloyWheels?.message}</Typography>
              </FormControl>
            )}
          />
        </Grid>

        {/* LED Lights */}
        <Grid item xs={12} sm={6} md={4} sx={{mb:2}}>
          <Controller
            name="ledLights"
            control={control}
            render={({ field }) => (
              <FormControl fullWidth>
                <InputLabel>LED Lights</InputLabel>
                <Select {...field} value={field.value || ""} error={!!errors.ledLights}>
                  <MenuItem value="Available">Available</MenuItem>
                  <MenuItem value="Not Available">Not Available</MenuItem>
                </Select>
                <Typography color="error">{errors.ledLights?.message}</Typography>
              </FormControl>
            )}
          />
        </Grid>
      </Grid>

      {/* Submit Button */}
      <Grid item xs={12}>
        <Box className={styles.center}>
          <Button
          type="submit"
           className={styles.button}
          >
            Save & Continue
          </Button>
        </Box>
      </Grid>
    </form>
  );
};

export default Features;
