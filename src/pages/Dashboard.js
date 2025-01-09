import React, { useState, useEffect, useRef } from "react";
import {
  Box,
  Grid,
  Typography,
  Checkbox,
  FormControlLabel,
  Slider,
  Button,
  Drawer,
  CardMedia,
} from "@mui/material";
import Footer from "../components/Footer.js";
import { RenderCard } from "../components/productCard/RenderCard.js";
import FilterListIcon from "@mui/icons-material/FilterList";
import axios from "axios";


export const bikes = [
  {
    id: 1,
    name: "Yamaha R15",
    price: 150000,
    brand: "Yamaha",
    engine: "150cc",
    image: "../images/product_1.jpg",
  },
  {
    id: 2,
    name: "KTM Duke 200",
    price: 200000,
    brand: "KTM",
    engine: "200cc",
    image: "../images/product_2.jpg",
  },
  {
    id: 3,
    name: "KTM Duke 200",
    price: 200000,
    brand: "KTM",
    engine: "200cc",
    image: "../images/product_3.jpg",
  },
  {
    id: 4,
    name: "KTM Duke 200",
    price: 200000,
    brand: "KTM",
    engine: "200cc",
    image: "../images/product_4.jpg",
  },
  {
    id: 5,
    name: "KTM Duke 200",
    price: 200000,
    brand: "KTM",
    engine: "200cc",
    image: "../images/product_5.jpg",
  },
  // Add more bike data as required
];

const Dashboard = () => {
  const [bikesList, setBikesList] = useState([]);
  const [priceRange, setPriceRange] = useState([0, 2500000000]);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [selectedEngines, setSelectedEngines] = useState([]);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [isFooterVisible, setIsFooterVisible] = useState(false);
  const footerRef = useRef(null);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BASEURL}/products/products`, {
        withCredentials: true,
      })
      .then((res) => {
        setBikesList(res.data);
      })
      .catch((err) => {
        console.log(err);
      });

    
  }, []);

  console.log(bikesList);

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
      prev.includes(engine)
        ? prev.filter((e) => e !== engine)
        : [...prev, engine]
    );
  };

  const filteredBikes = bikesList.filter(
    (bike) =>
      bike.offerPrice >= priceRange[0] &&
      bike.offerPrice <= priceRange[1] &&
      (selectedBrands.length === 0 || selectedBrands.includes(bike.brand)) &&
      (selectedEngines.length === 0 || selectedEngines.includes(bike.engineCapacity))
  );
  console.log(filteredBikes);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsFooterVisible(entry.isIntersecting);
      },
      { root: null, threshold: 0 }
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => {
      if (footerRef.current) {
        observer.unobserve(footerRef.current);
      }
    };
  }, []);

  
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: 3,
          p: { xs: 0, sm: 3 },
          backgroundColor: "#121212",
          minHeight: "100vh",
        }}
      >
        {/* Sidebar Filter */}
        <Box
          sx={{
            width: { xs: "100%", md: "23%", lg: "13%" },
            position: isFooterVisible ? "absolute" : "sticky",
            top: isFooterVisible ? "auto" : "80px",
            bottom: isFooterVisible ? "auto" : "80px",
            display: { xs: "none", md: "flex" },
            flexDirection: "column",
            p: 2,
            borderRadius: "16px",
            backgroundColor: "#1E1E1E",
            color: "whitesmoke",
          }}
        >
          <Typography variant="h5" sx={{ mb: 3, fontWeight: "bold" }}>
            Filter Bikes
          </Typography>

          {/* Price Filter */}
          <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
            Price Range
          </Typography>
          <Slider
            value={priceRange}
            onChange={handlePriceChange}
            valueLabelDisplay="auto"
            min={100}
            max={25000}
            sx={{
              "& .MuiSlider-thumb": { backgroundColor: "#64b5f6" },
              "& .MuiSlider-track": { backgroundColor: "#64b5f6" },
            }}
          />
          <Typography variant="body2" sx={{ mb: 1 }}>
            $100 - $25000
          </Typography>

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
          <Typography
            variant="subtitle1"
            sx={{ fontWeight: "bold", mt: 3, mb: 1 }}
          >
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
          <Grid container spacing={{ xs: 0.5, sm: 3 }}>
            {filteredBikes.length > 0 ? (
              filteredBikes.map((bike) => (
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
                
                sx={{ display:"flex",justifyContent:"center", alignItems:"center", width: "100%", color: "whitesmoke",height:"50vh",flexDirection: "column",mt:5 }}
              >
                 <CardMedia component="img" image="../../images/product-empty.gif" alt="Empty Product" sx={{width:{xs:"300px"}}}/>
                <Typography variant="body1" sx={{mt:2}}>No bikes match your filters.</Typography>
              </Box>
            )}
          </Grid>
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
            <Typography
              variant="subtitle1"
              sx={{ fontWeight: "bold", mt: 3, mb: 1 }}
            >
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
