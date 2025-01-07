import { Box } from "@mui/material";
import Hero from "../components/viewProduct/Hero";
import { Review } from "../components/viewProduct/Review";
import { SimilarProducts } from "../components/viewProduct/SimilarProducts";
import Speicification from "../components/viewProduct/Specification";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Footer from "../components/Footer";

const ViewProduct = () => {
  const { id, modelNumber } = useParams();
  const [product, setProduct] = useState([]);
  const [products, setProducts] = useState([]);
  const [coloredProduct, setColoredProduct] = useState([]);

  // Fetch product data using id from the URL parameter
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BASEURL}/products/products/${id}`, {
        withCredentials: true,
      })
      .then((res) => {
        setProduct(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BASEURL}/products/products`, {
        withCredentials: true,
      })
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });

    axios
      .get(
        `${process.env.REACT_APP_BASEURL}/products/products/colors/${modelNumber}`,
        {
          withCredentials: true,
        }
      )
      .then((res) => {
        setColoredProduct(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        overflowX: "hidden",
      }}
    >
      <Hero product={product} coloredProduct={coloredProduct} />
      <Speicification product={product} />
      <Review />
      <SimilarProducts bikes={products} />
      <Box sx={{ width: "100vw" }}>
        <Footer />
      </Box>
    </Box>
  );
};

export default ViewProduct;
