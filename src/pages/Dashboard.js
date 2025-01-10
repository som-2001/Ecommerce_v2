import React, { useState, useEffect, useRef } from "react";
import {
  Box,
  Grid,
  Typography,
  Checkbox,
  FormControlLabel,
  Button,
  Drawer,
  CardMedia,
  CircularProgress,
  TextField,
} from "@mui/material";
import Footer from "../components/Footer.js";
import { RenderCard } from "../components/productCard/RenderCard.js";
import FilterListIcon from "@mui/icons-material/FilterList";
import axios from "axios";

const Dashboard = () => {
  const [bikesList, setBikesList] = useState([]);
  const [bikesList1, setBikesList1] = useState([]);
  const [load, setLoad] = useState(true);
  const [priceRange, setPriceRange] = useState([]);
  const [brands, setBrands] = useState([]);
  const [fuelType, setFuelType] = useState([]);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [selectedFuelType, setSelectedFuelType] = useState([]);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [isFooterVisible, setIsFooterVisible] = useState(false);
  const [fromValue, setFromValue] = useState("");
  const [toValue, setToValue] = useState("");

  const handleFromChange = (event) => {
    setFromValue(event.target.value);
  };

  const handleToChange = (event) => {
    setToValue(event.target.value);
  };
  const footerRef = useRef(null);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BASEURL}/products/products`, {
        withCredentials: true,
      })
      .then((res) => {
        setLoad(false);
        setBikesList(res.data);
        setBikesList1(res.data);
      })
      .catch((err) => {
        setLoad(false);
        console.log(err);
      });

    axios
      .get(`${process.env.REACT_APP_BASEURL}/products/brand`, {
        withCredentials: true,
      })
      .then((res) => {
        setLoad(false);
        setBrands(res.data?.brand);
        setPriceRange([0, res.data?.price?.[res.data?.price.length - 1]]);
        setFuelType(res?.data?.fuelType);
      })
      .catch((err) => {
        setLoad(false);
        console.log(err);
      });
  }, []);

  const handlePriceChange = () => {
    const urlParams = new URLSearchParams();

    urlParams.append("minPrice", fromValue);
    urlParams.append("maxPrice", toValue);
    axios
      .get(
        `${process.env.REACT_APP_BASEURL}/products/filter/price?${urlParams}`,
        {
          withCredentials: true,
        }
      )
      .then((res) => {
        console.log(res?.data);
        setBikesList(res?.data?.products); // Update the product list based on response
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const toggleBrand = (brand) => {
    const updatedBrands = selectedBrands.includes(brand)
      ? selectedBrands.filter((b) => b !== brand) // Remove the brand if already selected
      : [...selectedBrands, brand]; // Add the brand if not already selected

    setSelectedBrands(updatedBrands);

    // Optionally, update the filtered list using an API
    const urlParams = new URLSearchParams();
    updatedBrands.forEach((b) => urlParams.append("brand", b));
    if (urlParams.size > 0) {
      axios
        .get(
          `${process.env.REACT_APP_BASEURL}/products/filter/brand?${urlParams}`,
          {
            withCredentials: true,
          }
        )
        .then((res) => {
          setBikesList(res.data?.products || []);
        })
        .catch((err) => {
          console.error(err);
        });
    } else {
      setBikesList(bikesList1);
    }
  };

  const togglefuelType = (fuelType) => {
    const updatedFuelType = selectedFuelType.includes(fuelType)
      ? selectedFuelType.filter((b) => b !== fuelType)
      : [...selectedFuelType, fuelType]; // Add the brand if not already selected

    setSelectedFuelType(updatedFuelType);

    // Optionally, update the filtered list using an API
    const urlParams = new URLSearchParams();
    updatedFuelType.forEach((b) => urlParams.append("fuelType", b));

    console.log(urlParams.size);

    if (urlParams.size > 0) {
      axios
        .get(
          `${process.env.REACT_APP_BASEURL}/products/filter/fuelType?${urlParams}`,
          {
            withCredentials: true,
          }
        )
        .then((res) => {
          setBikesList(res.data?.products || []);
        })
        .catch((err) => {
          console.error(err);
        });
    } else {
      setBikesList(bikesList1);
    }
  };

  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: 1,
          p: { xs: 0, sm: 3 },
          backgroundColor: "#121212",
          minHeight: "100vh",
        }}
      >
        {/* Sidebar Filter */}
        <Box
          sx={{
            width: { xs: "100%", md: "23%", lg: "15%" },
            position: isFooterVisible ? "absolute" : "sticky",
            top: isFooterVisible ? "auto" : "80px",
            bottom: isFooterVisible ? "auto" : "80px",
            display: { xs: "none", md: "flex" },
            flexDirection: "column",
            p: 3,
            borderRadius: "24px",
            background: "linear-gradient(145deg, #1F1F2B, #272738)",
            boxShadow:
              "0 10px 20px rgba(0, 0, 0, 0.5), inset 0 1px 1px rgba(255, 255, 255, 0.1)",
            color: "whitesmoke",
            transition:
              "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
            "&:hover": {
              boxShadow:
                "0 15px 25px rgba(0, 0, 0, 0.7), inset 0 2px 2px rgba(255, 255, 255, 0.2)",
            height:"600px"   
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
          {/* 'From' TextField */}
          <Grid container spacing={1} sx={{mb:2,display:"flex",alignItems:"center"}}>
            <Grid item xs={5}>
              <TextField
                label="From"
                value={fromValue}
                onChange={handleFromChange}
                variant="outlined"
                size="small"
                fullWidth
                sx={{
                  "& .MuiInputBase-root": {
                    borderRadius: "8px", // Custom border radius for the text field
                    backgroundColor: "#f0f0f0", // Background color of the input field
                  },
                  "& .MuiInputLabel-root": {
                    color: "#333", // Label color
                  },
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: "#64b5f6", // Border color
                    },
                    "&:hover fieldset": {
                      borderColor: "#42a5f5", // Border color when hovered
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "#1e88e5", // Focused border color
                    },
                  },
                }}
              />
            </Grid>

            {/* 'To' TextField */}
            <Grid item xs={5}>
              <TextField
                label="To"
                value={toValue}
                onChange={handleToChange}
                variant="outlined"
                size="small"
                fullWidth
                sx={{
                  "& .MuiInputBase-root": {
                    borderRadius: "8px",
                    backgroundColor: "#f0f0f0",
                  },
                  "& .MuiInputLabel-root": {
                    color: "#333",
                  },
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: "#64b5f6",
                    },
                    "&:hover fieldset": {
                      borderColor: "#42a5f5",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "#1e88e5",
                    },
                  },
                }}
              />
            </Grid>
            <Grid xs={2}>
              <Typography variant="body2" onClick={handlePriceChange} sx={{ color: "white",ml:2 }}>
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
                  checked={brand?.brand?.includes(selectedBrands)}
                  onChange={(e) => toggleBrand(brand, e)}
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
                    transition: "color 0.2s",
                    "&:hover": { color: "#64b5f6" },
                  }}
                >
                  {brand}
                </Typography>
              }
            />
          ))}

          {/* Milage Filter */}
          <Typography
            variant="subtitle1"
            sx={{
              fontWeight: "bold",
              mt: 3,
              mb: 2,
              color: "#64b5f6",
            }}
          >
            fuelType
          </Typography>
          {fuelType.map((fuelType) => (
            <FormControlLabel
              key={fuelType}
              control={
                <Checkbox
                  checked={fuelType?.fuelType?.includes(fuelType)}
                  onChange={() => togglefuelType(fuelType)}
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
                    transition: "color 0.2s",
                    "&:hover": { color: "#64b5f6" },
                  }}
                >
                  {fuelType}
                </Typography>
              }
              sx={{ mb: 1 }}
            />
          ))}
        </Box>

        {/* Product Grid */}
        <Box
          sx={{
            flex: 1,
            p: { xs: 0.3, sm: 2 },
            backgroundColor: "#1E1E1E",
            borderRadius: "16px",
            boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.5)",
            my: { xs: 1, sm: 0 },
          }}
        >
          <Typography
            variant="h5"
            sx={{ mb: 3, fontWeight: "bold", color: "whitesmoke", p: 2 }}
          >
            Explore All Bikes
          </Typography>
          {!load ? (
            <Grid container spacing={{ xs: 0.5, sm: 3 }}>
              {bikesList.length > 0 ? (
                bikesList.map((bike) => (
                  <Grid
                    item
                    xs={6}
                    sm={6}
                    md={6}
                    lg={3}
                    key={bike.id}
                    sx={{
                      display: "flex",
                      flexWrap: "wrap",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <RenderCard bike={bike} />
                  </Grid>
                ))
              ) : (
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "100%",
                    color: "whitesmoke",
                    height: "50vh",
                    flexDirection: "column",
                    mt: 5,
                  }}
                >
                  <CardMedia
                    component="img"
                    image="../../images/product-empty.gif"
                    alt="Empty Product"
                    sx={{ width: { xs: "300px" } }}
                  />
                  <Typography variant="body1" sx={{ mt: 2 }}>
                    No bikes match your filters.
                  </Typography>
                </Box>
              )}
            </Grid>
          ) : (
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                color: "whitesmoke",
                height: "80vh",
              }}
            >
              <CircularProgress size={35} />
            </Box>
          )}
        </Box>

        {/* Filter Drawer for small screens */}
        <Drawer
          anchor="bottom"
          open={drawerOpen}
          onClose={() => setDrawerOpen(false)}
          PaperProps={{
            sx: {
              backgroundColor: "#1E1E1E",
              color: "whitesmoke",
              height: "80%",
              overflowX: "hidden",
            },
          }}
        >
          <Box sx={{ p: 3 }}>
            <Typography variant="h5" sx={{ mb: 3, fontWeight: "bold" }}>
              Filter Bikes
            </Typography>

            {/* Price Filter */}
            <Typography
            variant="subtitle1"
            sx={{ fontWeight: "bold", mb: 1, color: "#64b5f6" }}
          >
            Price Range
          </Typography>
          {/* 'From' TextField */}
          <Grid container spacing={1} sx={{mb:2,display:"flex",alignItems:"center"}}>
            <Grid item xs={5}>
              <TextField
                label="From"
                value={fromValue}
                onChange={handleFromChange}
                variant="outlined"
                size="small"
                fullWidth
                sx={{
                  "& .MuiInputBase-root": {
                    borderRadius: "8px", // Custom border radius for the text field
                    backgroundColor: "#f0f0f0", // Background color of the input field
                  },
                  "& .MuiInputLabel-root": {
                    color: "#333", // Label color
                  },
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: "#64b5f6", // Border color
                    },
                    "&:hover fieldset": {
                      borderColor: "#42a5f5", // Border color when hovered
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "#1e88e5", // Focused border color
                    },
                  },
                }}
              />
            </Grid>

            {/* 'To' TextField */}
            <Grid item xs={5}>
              <TextField
                label="To"
                value={toValue}
                onChange={handleToChange}
                variant="outlined"
                size="small"
                fullWidth
                sx={{
                  "& .MuiInputBase-root": {
                    borderRadius: "8px",
                    backgroundColor: "#f0f0f0",
                  },
                  "& .MuiInputLabel-root": {
                    color: "#333",
                  },
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: "#64b5f6",
                    },
                    "&:hover fieldset": {
                      borderColor: "#42a5f5",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "#1e88e5",
                    },
                  },
                }}
              />
            </Grid>
            <Grid xs={2}>
              <Typography variant="body2" onClick={handlePriceChange} sx={{ color: "white",ml:2 }}>
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
                  checked={brand?.brand?.includes(selectedBrands)}
                  onChange={(e) => toggleBrand(brand, e)}
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
                    transition: "color 0.2s",
                    "&:hover": { color: "#64b5f6" },
                  }}
                >
                  {brand}
                </Typography>
              }
            />
          ))}

          {/* Milage Filter */}
          <Typography
            variant="subtitle1"
            sx={{
              fontWeight: "bold",
              mt: 3,
              mb: 2,
              color: "#64b5f6",
            }}
          >
            fuelType
          </Typography>
          {fuelType.map((fuelType) => (
            <FormControlLabel
              key={fuelType}
              control={
                <Checkbox
                  checked={fuelType?.fuelType?.includes(fuelType)}
                  onChange={() => togglefuelType(fuelType)}
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
                    transition: "color 0.2s",
                    "&:hover": { color: "#64b5f6" },
                  }}
                >
                  {fuelType}
                </Typography>
              }
              sx={{ mb: 1 }}
            />
          ))}
            {/* Buttons */}
            <Box
              sx={{ display: "flex", justifyContent: "space-between", mt: 3 }}
            >
              <Button
                variant="outlined"
                sx={{
                  color: "whitesmoke",
                  borderColor: "#64b5f6",
                  "&:hover": { borderColor: "#2196f3" },
                }}
              >
                Reset
              </Button>
              <Button
                variant="contained"
                onClick={() => setDrawerOpen(false)}
                sx={{ backgroundColor: "#64b5f6", color: "black" }}
              >
                Apply
              </Button>
            </Box>
          </Box>
        </Drawer>

        {/* Floating Filter Button for small screens */}
        <Box
          sx={{
            display: { xs: "flex", md: "none" },
            position: "fixed",
            bottom: 16,
            left: "50%",
            transform: "translateX(-50%)",
            zIndex: 1000,
          }}
        >
          <Button
            variant="contained"
            startIcon={<FilterListIcon />}
            onClick={() => setDrawerOpen(true)}
            sx={{
              backgroundColor: "black",
              color: "white",
              borderRadius: 4,
              padding: 2,
            }}
          >
            Filters
          </Button>
        </Box>
      </Box>

      <Footer ref={footerRef} />
    </Box>
  );
};

export default Dashboard;
