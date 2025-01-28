import { Box } from "@mui/material";
import Hero from "../components/viewProduct/Hero";
import { Review } from "../components/viewProduct/Review";
import { SimilarProducts } from "../components/viewProduct/SimilarProducts";
import Speicification from "../components/viewProduct/Specification";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Footer from "../components/Footer";
import styles from '../styles/ViewProduct.module.css'

const ViewProduct = () => {
  const { id, modelNumber } = useParams();
  const [product, setProduct] = useState([]);
  const [products, setProducts] = useState([]);
  const [coloredProduct, setColoredProduct] = useState([]);
  const [load,setLoad]=useState(true);
  const [load1,setLoad1]=useState(true);

  // Fetch product data using id from the URL parameter
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BASEURL}/products/products/${id}`, {
        withCredentials: true,
      })
      .then((res) => {
        setLoad(false);
        setProduct(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BASEURL}/products/filter?page=1`, {
        withCredentials: true,
      })
      .then((res) => {
        setLoad1(false);
        setProducts(res.data?.products);

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
  }, [id,modelNumber]);

  return (
    <Box
      className={styles.container}
    >
      <Hero product={product} coloredProduct={coloredProduct} load={load}/>
      <Speicification product={product} load={load}/>
      <Review />
      <SimilarProducts bikes={products} load={load1}/>
    </Box>
  );
};

export default ViewProduct;
