import { Box } from "@mui/material";
import { HomeNavbar } from "../components/HomeNavbar";
import { ExploreNow } from "../components/homepage/ExplorNow";
import { About } from "../components/homepage/About";
import { Hero } from "../components/homepage/Hero";
import { Product } from "../components/homepage/Product";
import Footer from "../components/Footer";
import { FAQ } from "../components/homepage/FAQ";
import "../App.css"

function Home() {
  return (
    <Box  sx={{
      backgroundImage: `url("./images/background.jpg")`,
      backgroundAttachment:"fixed",
      backgroundPosition:"center",
      backgroundRepeat:'no-repeat',
      backgroundSize:{xs:"cover",md:"100%"}
    }}>
      <HomeNavbar />
      <Hero/>
      <About/>
      <ExploreNow/>
      <Product/>
      <FAQ/>
      <Footer/>

    </Box>
  );
}

export default Home;
