import { Box } from "@mui/material";
import { ExploreNow } from "../components/homepage/ExplorNow";
import { About } from "../components/homepage/About";
import { Hero } from "../components/homepage/Hero";
import { Product } from "../components/homepage/Product";
import Footer from "../components/Footer";
import { FAQ } from "../components/homepage/FAQ";
import "../App.css"
import BestSeller from "../components/homepage/BestSeller";
import Gallary from "../components/homepage/Gallary";
import FeatureProduct from "../components/homepage/FeatureProduct";

function Home() {
  return (
    <Box  
    sx={{
      backgroundImage: `url("./images/background.jpg")`,
      backgroundAttachment:"fixed",
      backgroundPosition:"center",
      backgroundRepeat:'no-repeat',
      backgroundSize:{xs:"cover",md:"100%"},
      // overflowX:"hidden"
    }}>
      
      <Hero/>
      <About/>
      <ExploreNow/>
      <Product/>
      <BestSeller/>
      <FeatureProduct/>
      <Gallary/>
      <FAQ/>
      <Footer/>
    </Box>
  );
}

export default Home;
