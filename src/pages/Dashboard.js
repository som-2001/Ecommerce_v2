import React, { useState, useEffect, useRef } from "react";
import {
  Box,
  Grid,
  Typography,
  Checkbox,
  FormControlLabel,
  Slider,
} from "@mui/material";
import { HomeNavbar } from "../components/HomeNavbar";
import Footer from "../components/Footer.js";
import { RenderCard } from "../components/productCard/RenderCard.js";

const bikes = [
  { id: 1, name: "Yamaha R15", price: 150000, brand: "Yamaha", engine: "150cc", image: "../images/product_1.jpg" },
  { id: 2, name: "KTM Duke 200", price: 200000, brand: "KTM", engine: "200cc", image: "../images/product_2.jpg" },
  { id: 3, name: "Royal Enfield Classic", price: 180000, brand: "Royal Enfield", engine: "350cc", image: "../images/product_3.jpg" },
  { id: 4, name: "Bajaj Pulsar NS200", price: 140000, brand: "Bajaj", engine: "200cc", image: "../images/product_4.jpg" },
  { id: 5, name: "TVS Apache RR310", price: 220000, brand: "TVS", engine: "310cc", image: "../images/product_5.jpg" },
  { id: 6, name: "Yamaha R15", price: 150000, brand: "Yamaha", engine: "150cc", image: "../images/product_6.jpg" },
  { id: 1, name: "Yamaha R15", price: 150000, brand: "Yamaha", engine: "150cc", image: "../images/product_1.jpg" },
  { id: 2, name: "KTM Duke 200", price: 200000, brand: "KTM", engine: "200cc", image: "../images/product_2.jpg" },
  { id: 3, name: "Royal Enfield Classic", price: 180000, brand: "Royal Enfield", engine: "350cc", image: "../images/product_3.jpg" },
  { id: 4, name: "Bajaj Pulsar NS200", price: 140000, brand: "Bajaj", engine: "200cc", image: "../images/product_4.jpg" },
  { id: 5, name: "TVS Apache RR310", price: 220000, brand: "TVS", engine: "310cc", image: "../images/product_5.jpg" },
  { id: 6, name: "Yamaha R15", price: 150000, brand: "Yamaha", engine: "150cc", image: "../images/product_6.jpg" },
  { id: 1, name: "Yamaha R15", price: 150000, brand: "Yamaha", engine: "150cc", image: "../images/product_1.jpg" },
  { id: 2, name: "KTM Duke 200", price: 200000, brand: "KTM", engine: "200cc", image: "../images/product_2.jpg" },
  { id: 3, name: "Royal Enfield Classic", price: 180000, brand: "Royal Enfield", engine: "350cc", image: "../images/product_3.jpg" },
  { id: 4, name: "Bajaj Pulsar NS200", price: 140000, brand: "Bajaj", engine: "200cc", image: "../images/product_4.jpg" },
  { id: 5, name: "TVS Apache RR310", price: 220000, brand: "TVS", engine: "310cc", image: "../images/product_5.jpg" },
  { id: 6, name: "Yamaha R15", price: 150000, brand: "Yamaha", engine: "150cc", image: "../images/product_6.jpg" },
];

const Dashboard = () => {
  const [priceRange, setPriceRange] = useState([100000, 250000]);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [selectedEngines, setSelectedEngines] = useState([]);
  const [isFooterVisible, setIsFooterVisible] = useState(false);
  const footerRef = useRef(null);

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

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {setIsFooterVisible(entry.isIntersecting)});

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
            width: { xs: "86%", md: "23%", lg: "13%" },
            position: isFooterVisible ? "absolute" : "sticky",
            top: isFooterVisible ? "auto" : "80px",
            bottom: isFooterVisible ? "auto" : "80px",
            alignSelf: "start",
            p: 2,
            borderRadius: "16px",
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
            min={100000}
            max={250000}
            sx={{
              
              "& .MuiSlider-thumb": { backgroundColor: "#64b5f6" },
              "& .MuiSlider-track": { backgroundColor: "#64b5f6" },
            }}
          />
          <Typography variant="body2" sx={{ mb: 1 }}>
            $100000-250000
          </Typography>

          {/* Brand Filter */}
          <Typography variant="subtitle1" sx={{ fontWeight: "bold", mb: 1 }}>
            Brand
          </Typography>
          {["Yamaha", "KTM", "Royal Enfield", "Bajaj", "TVS"].map((brand) => (
            <Grid container>
              <Grid item xs={12}>
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
            </Grid>
            </Grid>
          ))}

          {/* Engine Filter */}
          <Typography variant="subtitle1" sx={{ fontWeight: "bold", mt: 3, mb: 1 }}>
            Engine Type
          </Typography>
          {["150cc", "200cc", "350cc", "310cc"].map((engine) => (
            <Grid container>
              <Grid item xs={12}>
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
            </Grid>
            </Grid>
          ))}
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
            sx={{ mb: 3, fontWeight: "bold", color: "whitesmoke", p: 2 }}
          >
            Explore All Bikes
          </Typography>
          <Grid container spacing={3}>
            {filteredBikes.length > 0 ? (
              filteredBikes.map((bike) => (
                <Grid
                  item
                  xs={12}
                  sm={6}
                  md={6}
                  lg={3}
                  key={bike.id}
                  sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
                >
                  <RenderCard bike={bike} />
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
      <Footer ref={footerRef} />
    </Box>
  );
};

export default Dashboard;
