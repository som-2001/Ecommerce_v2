import React, { useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import {
  Button,
  Grid,
  Typography,
  Box,
  MenuItem,
  Select,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Paper,
  IconButton,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { useSelector } from "react-redux";
import axios from "axios";
import { enqueueSnackbar,SnackbarProvider } from "notistack";
// import { enqueueSnackbar, SnackbarProvider } from "notistack";
import { useNavigate } from 'react-router-dom';

// Define the validation schema using Yup
const validationSchema = Yup.object().shape({
  selectedColor: Yup.string().required("Color is required"),
  stock: Yup.number()
    .typeError("Stock must be a number")
    .positive("Stock must be greater than 0")
    .required("Stock is required"),
  files: Yup.array()
    .min(1, "Please upload at least one image")
    .max(4, "At most 4 images will be uploaded")
    .required("Images are required"),
});

function ImageDetails() {
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm({
    resolver: yupResolver(validationSchema),
    defaultValues: {
      selectedColor: "",
      stock: "",
      files: [],
    },
  });

  const [files, setFiles] = useState([]);
  const [colors, setColors] = useState([]);
  const [stock, setStock] = useState("");
  const [disableBtn, setDisableBtn] = useState(true);
  const [colorDisabled, setColorDisabled] = useState(false);
  const { product } = useSelector((state) => state.product);
  const navigate=useNavigate();

  const handleFileChange = (e) => {
    const selectedFiles = Array.from(e.target.files);
    const combinedFiles = [...files, ...selectedFiles];
    const validFiles = combinedFiles.slice(0, 4);
    setFiles(validFiles);
    setValue("files", validFiles);
  };

  const handleDeleteImage = (indexToDelete) => {
    const updatedFiles = files.filter((_, index) => index !== indexToDelete);
    setFiles(updatedFiles);
    if (updatedFiles.length === 0) setDisableBtn(true);
    setValue("files", updatedFiles);
  };

  const onAddEntry = async (data) => {
    const convertFilesToDataURLs = (files) =>
      Promise.all(
        files.map(
          (file) =>
            new Promise((resolve, reject) => {
              const reader = new FileReader();
              reader.onload = () => resolve(reader.result);
              reader.onerror = () => reject(reader.error);
              reader.readAsDataURL(file);
            })
        )
      );

    const convertedFiles = await convertFilesToDataURLs(files);

    const newColorEntry = {
      color: data.selectedColor,
      images: convertedFiles, // Store converted Data URLs
      stock: data.stock,
    };

    setColorDisabled(true);

    const updatedColors = [...colors, newColorEntry];
    setColors(updatedColors);
    setStock(data.stock);

    // setFiles([]);
    reset(); // Reset the form
    setDisableBtn(false);
  };


  const onSubmit = () => {
    console.log(product);
    const formData = new FormData();
    console.log(colors);

    // Add product-level fields (e.g., name, brand, engineCapacity, etc.)
    formData.append("productName", product.bikeName);
    formData.append("brand", product.brand);
    formData.append("model", product.model);
    formData.append("type", product.type);
    formData.append("engineCapacity", product.engineCapacity);
    formData.append("yearOfLaunch", product.yearOfLaunch);
    formData.append("description", product.description);
    formData.append("engineType", product.engineType);
    formData.append("fuelType", product.fuelType);
    formData.append("mileage", product.mileage);
    formData.append("maxPower", product.maxPower);
    formData.append("maxTorque", product.maxTorque);
    formData.append("gearbox", product.gearbox);
    formData.append("coolingSystem", product.coolingSystem);
    formData.append("seatHeight", product.seatHeight);
    formData.append("groundClearance", product.groundClearance);
    formData.append("kerbWeight", product.kerbWeight);
    formData.append("originalPrice", product.originalPrice);
    formData.append("offerPrice", product.offerPrice);
    formData.append("discount", product.discount);
    formData.append("absType", product.absType);
    formData.append("fuelTankCapacity", product.fuelTankCapacity);
    formData.append("topSpeed", product.topSpeed);
    formData.append("instrumentConsole", product.instrumentConsole);
    formData.append("bluetoothConnectivity", product.bluetoothConnectivity==="Available"?true:false);
    formData.append("mobileChargingPort", product.mobileChargingPort==="Available"?true:false);
    formData.append("alloyWheels", product.alloyWheels==="Available"?true:false);
    formData.append("ledLights", product.ledLights==="Available"?true:false);
    for (let i = 0; i < files.length; i++) {
      formData.append('images', files[i]);
    }
    formData.append("selectedColor", colors[0].color);
    formData.append("stock", stock);

    axios
      .post(`${process.env.REACT_APP_BASEURL}/products/products`, formData,  {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        withCredentials: true,
      })
      .then((response) => {
        enqueueSnackbar(response.data.message, { variant: "success" })
        console.log("Product created successfully:", response.data);
        setFiles([]);
        setColors(false);
        setTimeout(()=>{
          navigate("/admin/products")
        },2000);
      })
      .catch((error) => {
        console.log(error);
        enqueueSnackbar(error?.response?.data?.message, { variant: "error" });
        console.error("Product creation failed:", error);
      });
  };

  return (
    <Box>
      <SnackbarProvider/>
      <Typography variant="body2" sx={{ mb: 1 }} color="text.secondary">
        Color and Image Details
      </Typography>
      <form onSubmit={handleSubmit(onAddEntry)}>
        <Grid container spacing={2}>
          {/* Color Selection */}
          <Grid item xs={12} sm={6} md={3}>
            <Controller
              name="selectedColor"
              control={control}
              render={({ field }) => (
                <Select
                  {...field}
                  fullWidth
                  displayEmpty
                  error={!!errors.selectedColor}
                >
                  <MenuItem value="" disabled>
                    Select a color
                  </MenuItem>
                  <MenuItem value="Red" disabled={colorDisabled}>
                    Red
                  </MenuItem>
                  <MenuItem value="Yellow" disabled={colorDisabled}>
                    Yellow
                  </MenuItem>
                  <MenuItem value="Blue" disabled={colorDisabled}>
                    Blue
                  </MenuItem>
                </Select>
              )}
            />
            {errors.selectedColor && (
              <Typography color="error">
                {errors.selectedColor.message}
              </Typography>
            )}
          </Grid>

          {/* Stock Input */}
          <Grid item xs={12} sm={6} md={3}>
            <Controller
              name="stock"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  type="number"
                  fullWidth
                  error={!!errors.stock}
                  placeholder="Enter stock quantity"
                />
              )}
            />
            {errors.stock && (
              <Typography color="error">{errors.stock.message}</Typography>
            )}
          </Grid>

          {/* File Upload */}
          <Grid item xs={12} sm={6} md={2}>
            <Controller
              name="files"
              control={control}
              render={({ field }) => (
                <Button
                  variant="outlined"
                  component="label"
                  sx={{
                    padding: 2,
                    borderRadius: 2,
                    width: "170px",
                    border: "1px solid black",
                    color: "black",
                  }}
                >
                  Upload Images
                  <input
                    type="file"
                    accept="image/*"
                    multiple
                    hidden
                    onChange={(e) => {
                      field.onChange(e);
                      handleFileChange(e);
                    }}
                  />
                </Button>
              )}
            />
            {errors.files && (
              <Typography color="error" variant="body2" sx={{ my: 1 }}>
                {errors.files.message}
              </Typography>
            )}
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Button
              type="submit"
              variant="outlined"
              sx={{
                padding: 2,
                borderRadius: 2,
                width: "140px",
                border: "1px solid black",
                color: "black",
              }}
            >
              Add Entry
            </Button>
          </Grid>

          {/* Display selected image previews */}
          <Grid item xs={12}>
            {files.length > 0 && (
              <Box>
                <Typography variant="body2">Selected Images:</Typography>
                <Grid container spacing={2}>
                  {files.map((file, index) => (
                    <Grid item xs={2} key={index}>
                      <Box
                        sx={{
                          position: "relative",
                          display: "inline-block",
                          width: "150px",
                        }}
                      >
                        <Box
                          component="img"
                          src={URL.createObjectURL(file)}
                          alt={file.name}
                          sx={{
                            width: "150px",
                            height: "150px",
                            borderRadius: 1,
                            objectFit: "contain",
                          }}
                        />
                        <IconButton
                          sx={{
                            position: "absolute",
                            top: 5,
                            right: 5,
                            backgroundColor: "white",
                          }}
                          size="small"
                          onClick={() => handleDeleteImage(index)}
                        >
                          <DeleteIcon fontSize="small" />
                        </IconButton>
                      </Box>
                    </Grid>
                  ))}
                </Grid>
              </Box>
            )}
          </Grid>

          {/* Buttons */}
        </Grid>
      </form>

      {/* Display Table */}
      {colors.length > 0 && (
        <Box mt={4}>
          <Typography variant="h6">Entries</Typography>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell align="center">Color</TableCell>
                  <TableCell align="center">Images</TableCell>
                  <TableCell align="center">Stock</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {colors.map((colorEntry, index) => (
                  <TableRow key={index}>
                    <TableCell align="center" sx={{ width: "120px" }}>
                      {colorEntry.color}
                    </TableCell>
                    <TableCell align="center">
                      <Grid container spacing={1}>
                        {colorEntry.images.map((image, idx) => (
                          <Grid item xs={3} key={idx}>
                            <Box
                              component="img"
                              src={image}
                              alt={`Image ${idx}`}
                              sx={{
                                width: "150px",
                                height: "150px",
                                objectFit: "contain",
                                borderRadius: 1,
                              }}
                            />
                          </Grid>
                        ))}
                      </Grid>
                    </TableCell>
                    <TableCell align="center" sx={{ width: "120px" }}>
                      {colorEntry.stock}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      )}

      <Box
        sx={{
          my: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Button
          onClick={onSubmit}
          variant="outlined"
          disabled={disableBtn}
          sx={{
            padding: 1.9,
            borderRadius: 2,
            width: "140px",
            backgroundColor: "black",

            color: "white",
          }}
        >
          Submit
        </Button>
      </Box>
    </Box>
  );
}

export default ImageDetails;
