import {
  Box,
  Checkbox,
  FormControlLabel,
  Grid,
  TextField,
  Typography,
} from "@mui/material";

export const FilterSideBar = ({
  selectedBrands,
  setSelectedBrands,
  selectedFuelType,
  setSelectedFuelType,
  brands,
  fuelType,
  fromValue,
  toValue,
  setFromValue,
  setToValue,
  handleFilterChange,
}) => {
  const toggleBrand = (brand) => {
    const updatedBrands = selectedBrands.includes(brand)
      ? selectedBrands.filter((b) => b !== brand) 
      : [...selectedBrands, brand]; 

    setSelectedBrands(updatedBrands);
  };

  const toggleFuelType = (fuel) => {
    const updatedFuelType = selectedFuelType.includes(fuel)
      ? selectedFuelType.filter((f) => f !== fuel) 
      : [...selectedFuelType, fuel];

    setSelectedFuelType(updatedFuelType);
  };

  return (
    <Box
      sx={{
        width: { xs: "100%", md: "23%", lg: "15%" },
        display: { xs: "none", md: "flex" },
        flexDirection: "column",
        p: 3,
        borderRadius: "24px",
        background: "linear-gradient(145deg, #1F1F2B, #272738)",
        boxShadow:
          "0 10px 20px rgba(0, 0, 0, 0.5), inset 0 1px 1px rgba(255, 255, 255, 0.1)",
        color: "whitesmoke",
        transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
        height: "600px",
        "&:hover": {
          boxShadow:
            "0 15px 25px rgba(0, 0, 0, 0.7), inset 0 2px 2px rgba(255, 255, 255, 0.2)",
          
        },
      }}
    >
      <Typography
        variant="h5"
        sx={{
          mb: 3,
          fontWeight: "bold",
          textAlign: "center",
          color: "rgba(100, 181, 246, 1)",
          textShadow: "0 2px 4px rgba(0, 0, 0, 0.4)",
        }}
      >
        Filter Bikes
      </Typography>

      {/* Price Filter */}
      <Typography
        variant="subtitle1"
        sx={{ fontWeight: "bold", mb: 1, color: "#64b5f6" }}
      >
        Price Range
      </Typography>
      <Grid
        container
        spacing={1}
        sx={{ mb: 2, display: "flex", alignItems: "center" }}
      >
        <Grid item xs={5}>
          <TextField
            label="From"
            value={fromValue}
            onChange={(e) => setFromValue(e.target.value)}
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
        <Grid item xs={5}>
          <TextField
            label="To"
            value={toValue}
            onChange={(e) => setToValue(e.target.value)}
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
        <Grid xs={2}>
          <Typography
            variant="body2"
            onClick={handleFilterChange}
            sx={{ color: "white", ml: 2 }}
          >
            Apply
          </Typography>
        </Grid>
      </Grid>

      {/* Brand Filter */}
      <Typography
        variant="subtitle1"
        sx={{ fontWeight: "bold", color: "#64b5f6" }}
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
                "&.Mui-checked": {
                  color: "#64b5f6",
                  boxShadow: "0 0 8px rgba(100, 181, 246, 0.8)",
                },
              }}
            />
          }
          label={
            <Typography
              sx={{
                fontSize: "14px",
                color: "#E0E0E0",
                "&:hover": { color: "#64b5f6" },
              }}
            >
              {brand}
            </Typography>
          }
        />
      ))}

      {/* Fuel Type Filter */}
      <Typography
        variant="subtitle1"
        sx={{ fontWeight: "bold", mt: 3, mb: 2, color: "#64b5f6" }}
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
                "&.Mui-checked": {
                  color: "#64b5f6",
                  boxShadow: "0 0 8px rgba(100, 181, 246, 0.8)",
                },
              }}
            />
          }
          label={
            <Typography
              sx={{
                fontSize: "14px",
                color: "#E0E0E0",
                "&:hover": { color: "#64b5f6" },
              }}
            >
              {fuel}
            </Typography>
          }
        />
      ))}
    </Box>
  );
};
