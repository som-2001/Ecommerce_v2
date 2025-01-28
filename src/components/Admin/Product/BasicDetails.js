import React, { useEffect } from "react";
import { Grid, TextField, MenuItem, Button, Box } from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { EditProduct } from "../../../Redux/ProductAdminSlice/ProductSlice";
import styles from "../../../styles/BasicDetails.module.css";

// Validation Schema using Yup
const validationSchema = Yup.object().shape({
  productName: Yup.string()
    .required("Bike Name is required")
    .min(2, "Bike Name must be at least 2 characters long")
    .max(50, "Bike Name cannot exceed 50 characters"),

  brand: Yup.string()
    .required("Brand is required")
    .oneOf(["Honda", "Yamaha", "Royal Enfield"], "Invalid brand selected"),

  model: Yup.string()
    .required("Model is required")
    .min(2, "Model must be at least 2 characters long")
    .max(50, "Model cannot exceed 50 characters"),

  modelNumber: Yup.string()
    .min(2, "Model must be at least 2 characters long")
    .max(50, "Model cannot exceed 50 characters"),

  type: Yup.string()
    .required("Type is required")
    .oneOf(["Cruiser", "Sport", "Naked", "Adventure"], "Invalid type selected"),

  engineCapacity: Yup.number()
    .required("Engine Capacity is required")
    .positive("Engine Capacity must be a positive number")
    .integer("Engine Capacity must be an integer")
    .min(50, "Engine Capacity must be at least 50 CC")
    .max(2000, "Engine Capacity cannot exceed 2000 CC"),

  yearOfLaunch: Yup.number()
    .required("Year of Launch is required")
    .min(1900, "Year of Launch must be greater than or equal to 1900")
    .max(new Date().getFullYear(), `Year of Launch cannot be in the future`),

  description: Yup.string()
    .required("Description is required")
    .min(10, "Description must be at least 10 characters long")
    .max(500, "Description cannot exceed 500 characters"),
});

const BasicDetails = ({ product }) => {
  const dispatch = useDispatch();

  const {
    control,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  useEffect(() => {
    console.log(product?.productName);

    if (product) {
      console.log(product.brand);
      setValue("productName", product?.productName || "");
      setValue("brand", product?.brand || "");
      setValue("model", product?.model || "");
      setValue("modelNumber", product?.modelNumber || "");
      setValue("type", product?.type || "");
      setValue("engineCapacity", product?.engineCapacity || "");
      setValue("yearOfLaunch", product?.yearOfLaunch || "");
      setValue("description", product?.description || "");
      dispatch(
        EditProduct({
          productName: product.productName,
          brand: product.brand,
          model: product.model,
          modelNumber: product?.modelNumber,
          type: product.type,
          engineCapacity: product?.engineCapacity,
          yearOfLaunch: product?.yearOfLaunch,
          description: product?.description,
        })
      );
    }
  }, [product, setValue, dispatch]);
  const onSubmit = (data) => {
    console.log("Form Submitted:", data);
   
    dispatch(EditProduct(data));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Grid container spacing={2}>
        {/* Bike Name */}
        <Grid item xs={12} sm={6}>
          <Controller
            name="productName"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                focused
                label="Product Name"
                fullWidth
                error={!!errors.productName}
                helperText={errors.productName?.message}
              />
            )}
          />
        </Grid>

        {/* Brand */}
        <Grid item xs={12} sm={6}>
          <Controller
            name="brand"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                value={field.value || ""}
                fullWidth
                focused
                label="Brand"
                select
                error={!!errors.brand}
                helperText={errors.brand?.message}
              >
                <MenuItem value="Honda">Honda</MenuItem>
                <MenuItem value="Yamaha">Yamaha</MenuItem>
                <MenuItem value="Royal Enfield">Royal Enfield</MenuItem>
              </TextField>
            )}
          />
        </Grid>

        {/* Model */}
        <Grid item xs={12} sm={6}>
          <Controller
            name="model"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                focused
                label="Model"
                fullWidth
                error={!!errors.model}
                helperText={errors.model?.message}
              />
            )}
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <Controller
            name="modelNumber"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                label="Model Number"
                focused
                fullWidth
                error={!!errors.modelNumber}
                helperText={errors.modelNumber?.message}
              />
            )}
          />
        </Grid>

        {/* Type */}
        <Grid item xs={12} sm={4}>
          <Controller
            name="type"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                value={field.value || ""}
                fullWidth
                label="Type"
                select
                focused
                error={!!errors.type}
                helperText={errors.type?.message}
              >
                <MenuItem value="Cruiser">Cruiser</MenuItem>
                <MenuItem value="Sport">Sport</MenuItem>
                <MenuItem value="Naked">Naked</MenuItem>
                <MenuItem value="Adventure">Adventure</MenuItem>
              </TextField>
            )}
          />
        </Grid>

        {/* Engine Capacity */}
        <Grid item xs={12} sm={4}>
          <Controller
            name="engineCapacity"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                label="Engine Capacity"
                fullWidth
                focused
                type="number"
                error={!!errors.engineCapacity}
                helperText={errors.engineCapacity?.message}
              />
            )}
          />
        </Grid>

        {/* Year of Launch */}
        <Grid item xs={12} sm={4}>
          <Controller
            name="yearOfLaunch"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                focused
                fullWidth
                label="Year of Launch"
                type="number"
                error={!!errors.yearOfLaunch}
                helperText={errors.yearOfLaunch?.message}
              />
            )}
          />
        </Grid>

        {/* Description */}
        <Grid item xs={12}>
          <Controller
            name="description"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                fullWidth
                multiline
                label="Description"
                focused
                rows={3}
                error={!!errors.description}
                helperText={errors.description?.message}
              />
            )}
          />
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
      </Grid>
    </form>
  );
};

export default BasicDetails;
