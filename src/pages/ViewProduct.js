import { Box } from "@mui/material";
import Hero from "../components/viewProduct/Hero";
import { Review } from "../components/viewProduct/Review";
import Footer from "../components/Footer";
import { SimilarProducts } from "../components/viewProduct/SimilarProducts";

const ViewProduct = () => {
  
  return (
    <Box >
        <Hero/>
        <Review/>
        <SimilarProducts/>
        <Footer/>
    </Box>
  );
};

export default ViewProduct;
