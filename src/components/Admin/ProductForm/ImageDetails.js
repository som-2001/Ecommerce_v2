import React, { useState } from "react";
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
} from "@mui/material";

// Define the validation schema using Yup
const validationSchema = Yup.object().shape({
  selectedColor: Yup.string().required("Color is required"),
  stock: Yup.number()
    .typeError("Stock must be a number")
    .positive("Stock must be greater than 0")
    .required("Stock is required"),
  files: Yup.array()
    .min(1, "Please upload at least one image")
    .required("Images are required"),
});

function ImageDetails() {
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
    watch,
  } = useForm({
    resolver: yupResolver(validationSchema), // Apply Yup validation schema
    defaultValues: {
      selectedColor: "",
      stock: "",
      files: [],
    },
  });

  const [files, setFiles] = useState([]);
  const [colors, setColors] = useState([]);

  const handleFileChange = (e) => {
    const selectedFiles = Array.from(e.target.files);
    setFiles(selectedFiles);
    setValue("files", selectedFiles); // Update the form value for files
  };

  const onSubmit = (data) => {
    const newColorEntry = {
      color: data.selectedColor,
      images: files,
      stock: data.stock,
    };

    setColors((prevColors) => [...prevColors, newColorEntry]);
    setFiles([]);
    reset(); // Reset the form
  };

  return (
    <Box>
      <Typography variant="h6" gutterBottom>
        Color and Image Details
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={2}>
          {/* Color Selection */}
          <Grid item xs={12} sm={6} md={4}>
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
          <Grid item xs={12} sm={6} md={4}>
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
          <Grid item xs={12} sm={6} md={4}>
            <Controller
              name="files"
              control={control}
              render={({ field }) => (
                <Button
                  variant="contained"
                  component="label"
                  sx={{
                    padding: 2,
                    borderRadius: 2,
                    width: "170px",
                    backgroundColor: "black",
                    color: "white",
                  }}
                >
                  Upload Images
                  <input
                    type="file"
                    accept="image/*"
                    multiple
                    hidden
                    onChange={(e) => {
                      field.onChange(e); // Call field's onChange
                      handleFileChange(e); // Save selected files
                    }}
                  />
                </Button>
              )}
            />
            {errors.files && (
              <Typography color="error">{errors.files.message}</Typography>
            )}
          </Grid>

          {/* Display selected image previews */}
          <Grid item xs={12}>
            {files.length > 0 && (
              <Box>
                <Typography variant="body2">Selected Images:</Typography>
                <Grid container spacing={2}>
                  {files.map((file, index) => (
                    <Grid item xs={12} sm={2} key={index}>
                      <Box
                        component="img"
                        src={URL.createObjectURL(file)} // Display preview using the file URL
                        alt={file.name}
                        sx={{ width: "100%", height: "auto", borderRadius: 1 }}
                      />
                    </Grid>
                  ))}
                </Grid>
              </Box>
            )}
          </Grid>

          {/* Submit Button */}
          <Grid item xs={12}>
            <Box sx={{display:"flex",justifyContent:"center",alignItems:"center"}}>
              <Button
                type="submit"
                variant="contained"
                sx={{
                  padding: 2,
                  borderRadius: 2,
                  width: "140px",
                  backgroundColor: "black",
                  color: "white",
                }}
              >
                Add Entry
              </Button>
            </Box>
          </Grid>
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
                  <TableCell>Color</TableCell>
                  <TableCell>Images</TableCell>
                  <TableCell>Stock</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {colors.map((colorEntry, index) => (
                  <TableRow key={index}>
                    <TableCell>{colorEntry.color}</TableCell>
                    <TableCell>
                      <Grid container spacing={1}>
                        {colorEntry.images.map((image, idx) => (
                          <Grid item xs={4} key={idx}>
                            <Box
                              component="img"
                              src={URL.createObjectURL(image)}
                              alt={`Image ${idx}`}
                              sx={{
                                width: "100%",
                                height: "auto",
                                borderRadius: 1,
                              }}
                            />
                          </Grid>
                        ))}
                      </Grid>
                    </TableCell>
                    <TableCell>{colorEntry.stock}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      )}
    </Box>
  );
}

export default ImageDetails;
