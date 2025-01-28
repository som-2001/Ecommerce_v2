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
import styles from "../styles/Dashboard.module.css";

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
  const fromValueRef = useRef(undefined);
  const toValueRef = useRef(undefined);
  const [toValue, setToValue] = useState("");
  const [urlParamsState, setUrlParamsState] = useState();
  const [drawerOpen, setDrawerOpen] = useState(false);

  const footerRef = useRef(null);

  const handleFilterChange = (updatedBrandParams, updatedFuelParams) => {
    console.log(updatedBrandParams);
    const urlParams = new URLSearchParams();
    setPage(1);

    if (fromValueRef?.current !== undefined)
      urlParams.append("minPrice", fromValueRef?.current);
    if (toValueRef?.current !== undefined)
      urlParams.append("maxPrice", toValueRef?.current);

    if (updatedBrandParams?.length > 0) {
      updatedBrandParams?.forEach((brand) => urlParams.append("brand", brand));
    }

    if (updatedFuelParams?.length > 0) {
      updatedFuelParams?.forEach((fuel) => urlParams.append("fuelType", fuel));
    }
    setUrlParamsState(urlParams.toString());
  };

  useEffect(() => {
    setLoad(true);

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

  useEffect(() => {
    if (page === 1) return;

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
        className={styles.parent}
        sx={{
          flexDirection: { xs: "column", md: "row" },
          p: { xs: 0, sm: 3 },
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
          className={styles.productGrid}
          sx={{
            p: { xs: 0.3, sm: 2 },
            my: { xs: 1, sm: 0 },
          }}
        >
          <Typography variant="h5" className={styles.Typography}>
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
                    className={styles.container}
                  >
                    <RenderCard bike={bike} />
                  </Grid>
                ))
              ) : (
                <Box className={styles.centeredContainer}>
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
            <Box className={styles.centeredContainer80vh}>
              <CircularProgress size={35} />
            </Box>
          )}
          {/* Loading Indicator for More Items */}
          {isLoadingMore && (
            <Box className={styles.centeredContainerWithPadding}>
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
          fromValueRef={fromValueRef}
          toValueRef={toValueRef}
        />
      </Drawer>

      <Box
        className={styles.fixedButton}
        sx={{
          display: { xs: "flex", md: "none" },
        }}
      >
        <Button
          variant="contained"
          startIcon={<FilterListIcon />}
          onClick={() => setDrawerOpen(true)}
          className={styles.button}
        >
          Filters
        </Button>
      </Box>

      <Footer />
    </Box>
  );
};

export default Dashboard;
