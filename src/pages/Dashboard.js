import React, { useState } from "react";
import {
  Box,
  Grid,
  Typography,
  Checkbox,
  FormControlLabel,
  Slider,
  Button,
  Card,
  CardMedia,
  CardContent,
  CardActions,
} from "@mui/material";
import { HomeNavbar } from "../components/HomeNavbar";
import { Favorite } from "@mui/icons-material";
import Footer from "../components/Footer.js"

const bikes = [
  { id: 1, name: "Yamaha R15", price: 150000, brand: "Yamaha", engine: "150cc", image: '../images/home_img_1.png' },
  { id: 2, name: "KTM Duke 200", price: 200000, brand: "KTM", engine: "200cc", image: '../images/home_img_2.png' },
  { id: 3, name: "Royal Enfield Classic", price: 180000, brand: "Royal Enfield", engine: "350cc", image: '../images/home_img_3.png' },
  { id: 4, name: "Bajaj Pulsar NS200", price: 140000, brand: "Bajaj", engine: "200cc", image: '../images/home_img_4.jpg' },
  { id: 5, name: "TVS Apache RR310", price: 220000, brand: "TVS", engine: "310cc", image: '../images/home_img_1.png' },
];

const Dashboard = () => {
  const [priceRange, setPriceRange] = useState([100000, 250000]);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [selectedEngines, setSelectedEngines] = useState([]);

  const handlePriceChange = (event, newValue) => {
    setPriceRange(newValue);
  };

  const toggleBrand = (brand) => {
    setSelectedBrands((prev) =>
      prev.includes(brand) ? prev.filter((b) => b !== brand) : [...prev, brand]
    );
  };

  const toggleEngine = (engine) => {
    setSelectedEngines((prev) =>
      prev.includes(engine) ? prev.filter((e) => e !== engine) : [...prev, engine]
    );
  };

  const filteredBikes = bikes.filter(
    (bike) =>
      bike.price >= priceRange[0] &&
      bike.price <= priceRange[1] &&
      (selectedBrands.length === 0 || selectedBrands.includes(bike.brand)) &&
      (selectedEngines.length === 0 || selectedEngines.includes(bike.engine))
  );

  return (
    <Box>
      <HomeNavbar />
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: 3,
          p: 3,
          backgroundColor: "#121212",
          minHeight: "100vh",
        }}
      >
        {/* Sidebar Filter */}
        <Box
          sx={{
            width: { xs: "100%", md: "20%" },
            p: 2,
            backgroundColor: "#1E1E1E",
            borderRadius: "16px",
            boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.5)",
            color: "whitesmoke",
          }}
        >
          <Typography variant="h5" sx={{ mb: 3, fontWeight: "bold" }}>
            Filter Bikes
          </Typography>

          {/* Price Filter */}
          <Typography variant="subtitle1" sx={{ fontWeight: "bold", mb: 1 }}>
            Price Range
          </Typography>
          <Slider
            value={priceRange}
            onChange={handlePriceChange}
            valueLabelDisplay="auto"
            min={100000}
            max={250000}
            sx={{
              mb: 3,
              "& .MuiSlider-thumb": { backgroundColor: "#64b5f6" },
              "& .MuiSlider-track": { backgroundColor: "#64b5f6" },
            }}
          />

          {/* Brand Filter */}
          <Typography variant="subtitle1" sx={{ fontWeight: "bold", mb: 1 }}>
            Brand
          </Typography>
          {["Yamaha", "KTM", "Royal Enfield", "Bajaj", "TVS"].map((brand) => (
            <FormControlLabel
              key={brand}
              control={
                <Checkbox
                  checked={selectedBrands.includes(brand)}
                  onChange={() => toggleBrand(brand)}
                  sx={{
                    color: "#64b5f6",
                    "&.Mui-checked": { color: "#64b5f6" },
                  }}
                />
              }
              label={brand}
              sx={{ mb: 1 }}
            />
          ))}

          {/* Engine Filter */}
          <Typography variant="subtitle1" sx={{ fontWeight: "bold", mt: 3, mb: 1 }}>
            Engine Type
          </Typography>
          {["150cc", "200cc", "350cc", "310cc"].map((engine) => (
            <FormControlLabel
              key={engine}
              control={
                <Checkbox
                  checked={selectedEngines.includes(engine)}
                  onChange={() => toggleEngine(engine)}
                  sx={{
                    color: "#64b5f6",
                    "&.Mui-checked": { color: "#64b5f6" },
                  }}
                />
              }
              label={engine}
              sx={{ mb: 1 }}
            />
          ))}

          <Button
            variant="contained"
            fullWidth
            sx={{
              mt: 3,
              backgroundColor: "#64b5f6",
              color: "black",
              "&:hover": { backgroundColor: "#2196f3" },
            }}
            onClick={() => {
              setSelectedBrands([]);
              setSelectedEngines([]);
              setPriceRange([100000, 250000]);
            }}
          >
            Reset Filters
          </Button>
        </Box>

        {/* Product Grid */}
        <Box
          sx={{
            flex: 1,
            p: 2,
            backgroundColor: "#1E1E1E",
            borderRadius: "16px",
            boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.5)",
          }}
        >
          <Typography
            variant="h5"
            sx={{ mb: 3, fontWeight: "bold", color: "whitesmoke" }}
          >
            Available Bikes
          </Typography>
          <Grid container spacing={3}>
            {filteredBikes.length > 0 ? (
              filteredBikes.map((bike) => (
                <Grid item xs={12} sm={6} md={4} lg={4} key={bike.id}>
                  <Card
                    sx={{
                      borderRadius: "12px",
                      transition: "transform 0.3s, box-shadow 0.3s",
                      position:"relative"
                    }}
                  >
                    <CardMedia
                      component="img"
                      alt={bike.name}
                      height="220"
                      image={bike.image}
                      sx={{ objectFit: "cover" }}
                    />
                   
                   <Favorite
      sx={{
        position: "absolute",
        top: 10,
        right: 10,
        color: "#C6E4FF",
        backgroundColor: "rgba(255, 255, 255, 0.8)", // Add a background to make it stand out
        borderRadius: "50%",
        padding: "5px",
        cursor: "pointer",
        transition: "transform 0.2s",
        "&:hover": {
          transform: "scale(1.2)", // Slightly enlarge the icon on hover
        },
      }}
    />
                    <CardContent sx={{ backgroundColor: "#1E1E1E", color: "whitesmoke" }}>
                      <Typography variant="h6" component="div">
                        {bike.name}
                      </Typography>
                      <Typography variant="body2">Price: ₹{bike.price.toLocaleString()}</Typography>
                      <Typography variant="body2">Engine: {bike.engine}</Typography>
                    </CardContent>
                    <CardActions sx={{ backgroundColor: "#1E1E1E" }}>
                      <Button
                        size="small"
                        variant="contained"
                        fullWidth
                        sx={{
                          backgroundColor: "#64b5f6",
                          color: "black",
                          padding:1.3,
                          "&:hover": { backgroundColor: "#2196f3" },
                        }}
                      >
                        View Details
                      </Button>
                    </CardActions>
                  </Card>
                
                </Grid>
              ))
            ) : (
              <Typography
                variant="body1"
                sx={{ textAlign: "center", width: "100%", color: "whitesmoke" }}
              >
                No bikes match your filters.
              </Typography>
            )}
          </Grid>
        </Box>
      </Box>
      <Footer/>
    </Box>
  );
};

export default Dashboard;
