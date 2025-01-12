import React, { useState, useEffect, useRef } from "react";
import {
  Box,
  Grid,
  Typography,
  CardMedia,
  CircularProgress,
  Drawer,
  Button,
} from "@mui/material";
import Footer from "../components/Footer.js";
import { RenderCard } from "../components/productCard/RenderCard.js";
import axios from "axios";
import { FilterSideBar } from "../components/FilterSideBar.js";
import FilterListIcon from "@mui/icons-material/FilterList";
import { DrawerFilter } from "../components/DrawerFilter.js";

const Dashboard = () => {
  const [bikesList, setBikesList] = useState([]);
  const [load, setLoad] = useState(true);
  const [brands, setBrands] = useState([]);
  const [fuelType, setFuelType] = useState([]);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [selectedFuelType, setSelectedFuelType] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const [fromValue, setFromValue] = useState("");
  const fromValueRef=useRef(undefined);
  const toValueRef=useRef(undefined);
  const [toValue, setToValue] = useState("");
  const [urlParamsState, setUrlParamsState] = useState();
  const [drawerOpen,setDrawerOpen]=useState(false);

  const footerRef = useRef(null);

  const handleFilterChange = (updatedBrandParams,updatedFuelParams) => {

    console.log(updatedBrandParams);
    const urlParams = new URLSearchParams();
    setPage(1);
    // Add price filters if defined
    if (fromValueRef?.current!==undefined) urlParams.append("minPrice", fromValueRef?.current);
    if (toValueRef?.current!==undefined) urlParams.append("maxPrice", toValueRef?.current);

    // Add selected brands if any
    if (updatedBrandParams?.length > 0) {
      updatedBrandParams?.forEach((brand) => urlParams.append("brand", brand));
    }
    // Add selected fuel types if any
    if (updatedFuelParams?.length > 0) {
      updatedFuelParams?.forEach((fuel) => urlParams.append("fuelType", fuel));
    }
    setUrlParamsState(urlParams.toString());
  };

  useEffect(() => {
    setLoad(true);

    // Fetch bikes for the first page
    axios
      .get(
        `${process.env.REACT_APP_BASEURL}/products/filter?${urlParamsState}&page=${page}`,
        { withCredentials: true }
      )
      .then((res) => {
        setBikesList(res.data?.products || []);
        setTotalPages(res.data?.totalPages || 1);
        setLoad(false);
      })
      .catch((err) => {
        console.error(err);
        setLoad(false);
      });

    // Fetch brands and fuel types
    axios
      .get(`${process.env.REACT_APP_BASEURL}/products/brand`, {
        withCredentials: true,
      })
      .then((res) => {
        setBrands(res.data?.brand || []);
        setFuelType(res?.data?.fuelType || []);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [urlParamsState]);

  // Observer to detect when footer is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting && !isLoadingMore && page < totalPages) {
          setPage((prevPage) => prevPage + 1);
        }
      },
      { threshold: 0.6 }
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => {
      if (footerRef.current) observer.unobserve(footerRef.current);
    };
  }, [isLoadingMore, page, totalPages]);

  // Fetch more bikes when page changes
  useEffect(() => {
    if (page === 1) return; // Skip initial fetch (handled in the first useEffect)

    setIsLoadingMore(true);

    axios
      .get(
        `${process.env.REACT_APP_BASEURL}/products/filter?${urlParamsState}&page=${page}`,
        {
          withCredentials: true,
        }
      )
      .then((res) => {
        setBikesList((prevBikes) => [
          ...prevBikes,
          ...(res.data?.products || []),
        ]);
        setIsLoadingMore(false);
      })
      .catch((err) => {
        console.error(err);
        setIsLoadingMore(false);
      });
  }, [page]);

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
        <FilterSideBar
          setBikesList={setBikesList}
          selectedBrands={selectedBrands}
          setSelectedBrands={setSelectedBrands}
          selectedFuelType={selectedFuelType}
          setSelectedFuelType={setSelectedFuelType}
          brands={brands}
          fuelType={fuelType}
          fromValue={fromValue}
          toValue={toValue}
          setFromValue={setFromValue}
          setToValue={setToValue}
          handleFilterChange={handleFilterChange}
          fromValueRef={fromValueRef}
          toValueRef={toValueRef}
        />

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
          {/* Loading Indicator for More Items */}
          {isLoadingMore && (
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                py: 3,
              }}
            >
              <CircularProgress size={24} />
            </Box>
          )}
          <Box ref={footerRef}></Box>
        </Box>
      </Box>

      <Drawer
        anchor="bottom"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        ModalProps={{ keepMounted: true }}
      >
        <DrawerFilter
          setBikesList={setBikesList}
          selectedBrands={selectedBrands}
          setSelectedBrands={setSelectedBrands}
          selectedFuelType={selectedFuelType}
          setSelectedFuelType={setSelectedFuelType}
          brands={brands}
          fuelType={fuelType}
          fromValue={fromValue}
          toValue={toValue}
          setFromValue={setFromValue}
          setToValue={setToValue}
          handleFilterChange={handleFilterChange}
        />
      </Drawer>
        
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
     
      <Footer />
    </Box>
  );
};

export default Dashboard;
