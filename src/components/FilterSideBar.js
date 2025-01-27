import {
  Box,
  Checkbox,
  FormControlLabel,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { useRef } from "react";
import styles from '../styles/FilterSideBar.module.css'

export const FilterSideBar = ({
  selectedBrands,
  setSelectedBrands,
  selectedFuelType,
  setSelectedFuelType,
  brands,
  fuelType,
  fromValue,
  toValue,
  fromValueRef,
  toValueRef,
  setFromValue,
  setToValue,
  handleFilterChange,
}) => {

  const input=useRef(null);

  const toggleBrand = (brand) => {
    const updatedBrands = selectedBrands.includes(brand)
      ? selectedBrands.filter((b) => b !== brand)
      : [...selectedBrands, brand];

    handleFilterChange(updatedBrands, selectedFuelType);
    setSelectedBrands(updatedBrands);
  };

  const toggleFuelType = (fuel) => {
    const updatedFuelType = selectedFuelType.includes(fuel)
      ? selectedFuelType.filter((f) => f !== fuel)
      : [...selectedFuelType, fuel];

    handleFilterChange(selectedBrands, updatedFuelType);
    setSelectedFuelType(updatedFuelType);
  };

  return (
    <Box
    className={styles.parent}
      sx={{
        width: { xs: "100%", md: "23%", lg: "15%" },
        display: { xs: "none", md: "flex" },
      }}
    >
      <Typography
        variant="h5"
        className={styles.FilterBike}
      >
        Filter Bikes
      </Typography>
      {/* Price Filter */}
      <Typography
        variant="subtitle1"
        className={styles.subtitle1}
      >
        Price Range
      </Typography>
      <Grid
        container
        spacing={1}
        className={styles.grid}
      >
        <Grid item xs={6}>
          <TextField
            label="From"
            InputLabelProps={{
              style: { color: "#64b5f6" }, // Label color
            }}
            value={fromValue}
            onChange={(e) => {
              setFromValue(e.target.value);
              fromValueRef.current = e.target.value;

              if(input.current){
                clearTimeout(input.current);
              }  
              input.current = setTimeout(() => {
                handleFilterChange(selectedBrands, selectedFuelType);
              }, 500);
            }}
            variant="outlined"
            size="small"
            fullWidth
            sx={{
              "& .MuiInputBase-root": {
                borderRadius: "8px",
                backgroundColor: "#f0f0f0",
              },
            }}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            label="To"
            InputLabelProps={{
              style: { color: "#64b5f6" }, // Label color
            }}
            value={toValue}
            onChange={(e) => {
              toValueRef.current = e.target.value;
              setToValue(e.target.value);

               if(input.current){
                clearTimeout(input.current);
              }  
              input.current = setTimeout(() => {
                handleFilterChange(selectedBrands, selectedFuelType);
              }, 500);
             
            }}
            variant="outlined"
            size="small"
            fullWidth
            sx={{
              "& .MuiInputBase-root": {
                borderRadius: "8px",
                backgroundColor: "#f0f0f0",
              },
            }}
          />
        </Grid>
      </Grid>

      {/* Brand Filter */}
      <Typography
        variant="subtitle1"
        className={styles.brand}
      >
        Brand
      </Typography>
      {brands?.map((brand) => (
        <FormControlLabel
          key={brand}
          control={
            <Checkbox
              checked={selectedBrands.includes(brand)}
              onChange={() => toggleBrand(brand)}
              sx={{
                color: "#64b5f6",
              }}
            />
          }
          label={
            <Typography
              className={styles.brandLabel}
            >
              {brand}
            </Typography>
          }
        />
      ))}

      {/* Fuel Type Filter */}
      <Typography
        variant="subtitle1"
        className={styles.fuelType}
      >
        Fuel Type
      </Typography>
      {fuelType.map((fuel) => (
        <FormControlLabel
          key={fuel}
          control={
            <Checkbox
              checked={selectedFuelType.includes(fuel)}
              onChange={() => toggleFuelType(fuel)}
              sx={{
                color: "#64b5f6",
              }}
            />
          }
          label={
            <Typography
            className={styles.fuelLabel}
            >
              {fuel}
            </Typography>
          }
        />
      ))}
    </Box>
  );
};
