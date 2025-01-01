import React from "react";
import { useForm, Controller } from "react-hook-form";
import {
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Grid,
  Typography,
  Button,
  Box,
} from "@mui/material";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const validationSchema = Yup.object({
  availableColors: Yup.array()
    .min(1, "At least one color must be selected")
    .required("Available Colors are required"),
  stock: Yup.number()
    .min(0, "Stock cannot be negative")
    .required("Stock is required"),
});

function ColorStock() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Grid container spacing={2}>
        {/* Available Colors */}
        <Grid item xs={12} sm={6} md={4}>
          <Controller
            name="availableColors"
            control={control}
            render={({ field }) => (
              <FormControl fullWidth error={!!errors.availableColors}>
                <InputLabel>Available Colors</InputLabel>
                <Select
                  {...field}
                  multiple
                  value={field.value || []}
                  onChange={(e) => field.onChange(e.target.value)}
                  renderValue={(selected) => selected.join(", ")}
                >
                  <MenuItem value="Red">Red</MenuItem>
                  <MenuItem value="Black">Black</MenuItem>
                  <MenuItem value="Blue">Blue</MenuItem>
                  <MenuItem value="White">White</MenuItem>
                  <MenuItem value="Green">Green</MenuItem>
                  <MenuItem value="Yellow">Yellow</MenuItem>
                  {/* Add more colors as needed */}
                </Select>
                {errors.availableColors && (
                  <Typography color="error">
                    {errors.availableColors.message}
                  </Typography>
                )}
              </FormControl>
            )}
          />
        </Grid>

        {/* Stock */}
        <Grid item xs={12} sm={6} md={4}>
          <Controller
            name="stock"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                label="Stock"
                variant="outlined"
                fullWidth
                type="number"
                inputProps={{ min: 0 }}
                error={!!errors.stock}
                helperText={errors.stock?.message}
              />
            )}
          />
        </Grid>
      </Grid>

      <Box sx={{display:"flex",justifyContent:"center",alignItems:"center",mt:2}}>
        <Button type="submit" variant="contained" sx={{
                padding:2,
                borderRadius:2,
                width:"140px",
                backgroundColor:"black",
                color:'white'
            }}>
          Submit
        </Button>
      </Box>
    </form>
  );
}

export default ColorStock;
