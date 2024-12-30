import { Box } from "@mui/material";
import Hero from "../components/viewProduct/Hero";
import { Review } from "../components/viewProduct/Review";
import Footer from "../components/Footer";
import { SimilarProducts } from "../components/viewProduct/SimilarProducts";

const ViewProduct = () => {
  
  return (
    <Box  sx={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",overflowX:"hidden"}}>
        <Hero/>
        <Review/>
        <SimilarProducts/>
       
    </Box>
  );
};

export default ViewProduct;
