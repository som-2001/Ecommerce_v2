import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import { ExploreNow } from "../components/homepage/ExplorNow";
import { About } from "../components/homepage/About";
import { Hero } from "../components/homepage/Hero";
import { Product } from "../components/homepage/Product";
import Footer from "../components/Footer";
import { FAQ } from "../components/homepage/FAQ";
import "../App.css";
import BestSeller from "../components/homepage/BestSeller";
import Gallary from "../components/homepage/Gallary";
import FeatureProduct from "../components/homepage/FeatureProduct";
import { Partners } from "../components/homepage/Partners";
import Benefits from "../components/homepage/Benefits";
import { Review } from "../components/homepage/Review";
import Cookies from "js-cookie";
import { AuthNavbar } from "../components/AuthNavbar";
import { HomeNavbar } from "../components/HomeNavbar";
import { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setSearch } from "../Redux/ProductAdminSlice/ProductSlice";
import { useNavigate } from "react-router-dom";
import styles from '../styles/home.module.css';

function Home() {
  const token = Cookies.get("accessToken");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [newArrival, setNewArrival] = useState([]);
  const [bestSeller, setBestSeller] = useState([]);
  const [featureProduct, setFeatureProduct] = useState([]);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BASEURL}/home/gets`)
      .then((res) => {
        // Categorize data properly
        setNewArrival(res?.data?.newArrivals);
        setBestSeller(res?.data?.bestSellers);
        setFeatureProduct(res?.data?.featureProducts);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const { search } = useSelector((state) => state.product);
  return (
    <Box
    className={styles.home}
      sx={{
        backgroundSize: { xs: "cover", md: "100%" },
      }}
    >
      {token ? <AuthNavbar /> : <HomeNavbar />}
      {search?.length > 0 && (
        <Box
        className={styles.search}
          sx={{right: { xs: "5%", sm: "35%",md:"31%",lg:"28%" }}}
        >
          <Grid container spacing={1}>
            {search.map((data, index) => (
              <Grid item xs={12} key={index}>
                <Card
                  sx={{ display: "flex", height: "fit-content" }}
                  onClick={(e) => {
                    navigate(`/view-product/${data?._id}/${data?.modelNumber}`);
                    dispatch(setSearch([]));
                  }}
                >
                  {/* Product Image */}
                  <CardMedia
                    component="img"
                    height="80"
                    className={styles.searchCard}
                    image={data.image?.[0] || "https://via.placeholder.com/180"} // Placeholder if no image
                    alt={data.productName || "Product Image"}
                  />
                  {/* Product Details */}
                  <CardContent>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ fontWeight: "bold", mb: 1 }}
                    >
                      {data.productName || "Product Name"} ({data.brand})
                    </Typography>

                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ fontWeight: "bold", color: "#FF5722" }}
                    >
                      ₹{data.offerPrice || "N/A"}{" "}
                      <span
                        style={{
                          textDecoration: "line-through",
                          color: "gray",
                        }}
                      >
                        ₹{data.originalPrice}
                      </span>
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      )}
      <Hero />
      <About />
      <ExploreNow />
      <Product product={newArrival} />
      <BestSeller product={bestSeller} />
      <FeatureProduct product={featureProduct} />
      <Partners />
      <Gallary />
      <Benefits />
      <Review />
      <FAQ />
      <Footer />
    </Box>
  );
}

export default Home;
