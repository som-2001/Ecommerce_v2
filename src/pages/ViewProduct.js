import { Box } from "@mui/material";
import Hero from "../components/viewProduct/Hero";
import { Review } from "../components/viewProduct/Review";
import { SimilarProducts } from "../components/viewProduct/SimilarProducts";
import Speicification from "../components/viewProduct/Specification";

const ViewProduct = () => {
  
  return (
    <Box  sx={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",overflowX:"hidden"}}>
        <Hero/>
        <Speicification/>
        <Review/>
        <SimilarProducts/>
       
    </Box>
  );
};

export default ViewProduct;
