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
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { EditProduct } from "../../../Redux/ProductAdminSlice/ProductSlice";
import { enqueueSnackbar } from "notistack";
import { useParams } from "react-router-dom";
// import { enqueueSnackbar, SnackbarProvider } from "notistack";

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

function ImageDetails({ item }) {
  const {
    control,
    formState: { errors },
    setValue,
  } = useForm({
    resolver: yupResolver(validationSchema),
    defaultValues: {
      selectedColor: "",
      stock: "",
      files: [],
    },
  });

  useEffect(() => {
    if (item) {
      setValue("selectedColor", item.selectedColor);
      setValue("stock", item.stock);
    }
  }, [item, setValue]);

  const [files, setFiles] = useState([]);
  const [files1,setFiles1]=useState([]);
  const [colors, setColors] = useState([]);
  const [selectedColor,setSelectedColor] = useState();
  const [stock,setStock]=useState('');
  const [totalLength,setTotalLength]=useState();
  const [disableBtn, setDisableBtn] = useState(true);
  const {id}=useParams();
  const { product } = useSelector((state) => state.product);

  useEffect(() => {
    if (item) {
      setTotalLength(item?.image?.length);
  
      const updatedFiles = {
        color: item.selectedColor || "", // Use default if missing
        stock: item.stock || "", // Use default if missing
        images: Array.isArray(item.image) ? item.image : [], // Ensure it's an array
      };
  
      // Set the `files` field in the form to the `images` array
      setValue("files", updatedFiles.images);
  
      // Update other state values
      
      setFiles1(Array.isArray(item.image) ? item.image:[]);
      setColors(updatedFiles); // If `setColors` is used for other purposes
      setSelectedColor(item.selectedColor);
      setStock(item.stock);
    }
  }, [item, setValue]);
  

  console.log(colors);

  const handleFileChange = (e) => {
    const selectedFiles = Array.from(e.target.files);
    console.log("selected", selectedFiles.length);
    console.log("item.image", item.image.length);

    if (files.length + selectedFiles.length + totalLength > 4) {
      return enqueueSnackbar("Atmost 4 images will be supported.", {
        variant: "warning",
      });
    }

    
    const combinedFiles = [...files, ...selectedFiles];
    const validFiles = combinedFiles.slice(0, 4);

    const processedFiles = validFiles.map((file) =>
      typeof file !== "string" ? file : URL.createObjectURL(file)
    );

    setFiles(validFiles);
    setFiles1([...files1, ...processedFiles]);
    setValue("files", validFiles);
  };

  const handleColorChange=(e)=>{

    console.log(e.target.value);
    setSelectedColor(e.target.value);
    setValue("selectedColor", e.target.value);
  }
  const handleStockChange=(e)=>{
    setStock(e.target.value);
    setValue("stock", e.target.value);
  }
  const handleDeleteImage = (indexToDelete) => {
    const updatedFiles = files.filter((_, index) => index !== indexToDelete);
    setFiles(updatedFiles);
    setFiles1(updatedFiles);
    if (updatedFiles.length === 0) setDisableBtn(true);
    setValue("files", updatedFiles);
  };

  const handleDeleteImage1=(id)=>{
   
    const updatedFiles = colors.images?.filter((_, index) => index !== id);
    setColors((prevColors) => ({
      ...prevColors, // Spread the previous colors object
      images: updatedFiles, // Only update the 'images' array
    }));

    setTotalLength(totalLength-1);
    setValue("files", updatedFiles);
    setFiles1(updatedFiles);
  }
  
  const onSubmit = (data) => {
    const formData = new FormData();
    console.log(stock);

    // Add product-level fields (e.g., name, brand, engineCapacity, etc.)
    formData.append("productName", product.bikeName);
    formData.append("brand", product.brand);
    formData.append("model", product.model);
    formData.append("modelNumber", product.modelNumber);
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

    console.log(files1);
    for (let i = 0; i < files1?.length; i++) {
      formData.append('images', files1?.[i]);
    }
    formData.append("selectedColor", selectedColor);
    formData.append("stock",stock);

    axios
      .put(`${process.env.REACT_APP_BASEURL}/products/products/${id}`, formData, {
        withCredentials: true,
      })
      .then((response) => {
        console.log("Product created successfully:", response.data);
      })
      .catch((error) => {
        console.log(error);
        // enqueueSnackbar(error.response.data.message, { variant: "error" });
        console.error("Product creation failed:", error);
      });
  };

  return (
    <Box>
      <Typography variant="body2" sx={{ mb: 1 }} color="text.secondary">
        Color and Image Details
      </Typography>
      <form>
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
                  onChange={(e) => {
                    field.onChange(e);
                    handleColorChange(e);
                  }}
                >
                  <MenuItem value="" disabled>
                    Select a color
                  </MenuItem>
                  <MenuItem value="Red">Red</MenuItem>
                  <MenuItem value="Yellow">Yellow</MenuItem>
                  <MenuItem value="Blue">Blue</MenuItem>
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
                  onChange={(e) => {
                    field.onChange(e);
                    handleStockChange(e);
                  }}
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

          {/* <Grid item xs={12} sm={6} md={3}>
           
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
           
          </Grid> */}

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
              <TableRow>
                <TableCell align="center" sx={{ width: "120px" }}>
                  {colors?.color}
                </TableCell>
                <TableCell align="center">
                  <Grid container spacing={1}>
                    {colors?.images?.map((image, idx) => (
                      <Grid item xs={6} sm={3} key={idx}>
                        <Box
                          sx={{
                            position: "relative", // Ensure that the icon can be positioned absolutely within this container
                            width: "100%", // Make the image container fill the cell
                            height: "auto", // Keep the aspect ratio intact
                          }}
                        >
                          <Box
                            component="img"
                            src={image}
                            alt={`Image ${idx}`}
                            sx={{
                              width: "100%",
                              height: "auto",
                              objectFit: "contain",
                              borderRadius: 1,
                              boxShadow: 1,
                            }}
                          />
                          {/* Delete icon is now inside the same container */}
                          <IconButton
                            sx={{
                              position: "absolute",
                              top: 5,
                              right: 5,
                              backgroundColor: "rgba(0, 0, 0, 0.5)",
                              color: "white",
                              borderRadius: "50%",
                              padding: 0.5,
                            }}
                            size="small"
                            onClick={() => handleDeleteImage1(idx)}
                          >
                            <DeleteIcon fontSize="small" />
                          </IconButton>
                        </Box>
                      </Grid>
                    ))}
                  </Grid>
                </TableCell>
                <TableCell align="center" sx={{ width: "120px" }}>
                  {colors?.stock}
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Box>

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
          // disabled={disableBtn}
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
