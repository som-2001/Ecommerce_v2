
import {
  Box,

  Grid,
  Typography,
} from "@mui/material";

import Footer from "../Footer";
import { RenderCard } from './../productCard/RenderCard';

const bikes = [
  {
    id: 1,
    name: "Yamaha R15",
    price: 150000,
    brand: "Yamaha",
    engine: "150cc",
    image: "../images/product_1.jpg",
  },
  {
    id: 2,
    name: "KTM Duke 200",
    price: 200000,
    brand: "KTM",
    engine: "200cc",
    image: "../images/product_2.jpg",
  },
  {
    id: 3,
    name: "Royal Enfield Classic",
    price: 180000,
    brand: "Royal Enfield",
    engine: "350cc",
    image: "../images/product_3.jpg",
  },
  {
    id: 4,
    name: "Bajaj Pulsar NS200",
    price: 140000,
    brand: "Bajaj",
    engine: "200cc",
    image: "../images/product_4.jpg",
  },
  {
    id: 5,
    name: "TVS Apache RR310",
    price: 220000,
    brand: "TVS",
    engine: "310cc",
    image: "../images/product_5.jpg",
  },
  {
    id: 6,
    name: "Yamaha R15",
    price: 150000,
    brand: "Yamaha",
    engine: "150cc",
    image: "../images/product_6.jpg",
  },
];

export const SimilarProducts = () => {


  return (
    <Box>
      <Typography  sx={{ fontWeight: "600", fontSize:{xs:"0.9rem",sm:"1.2rem"}, paddingLeft: {xs:3,sm:6},mt:3 }}>
        Similar Products you may be interested in
      </Typography>
      <Box sx={{ padding: 4 }}>
        <Grid container spacing={3}>
          {bikes.length > 0 ? (
            bikes.map((bike) => (
              <Grid
                item
                xs={12}
                sm={6}
                md={4}
                lg={3}
                key={bike.id}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  my: 2,
                }}
              >
                <RenderCard bike={bike}/>
              </Grid>
            ))
          ) : (
            <Typography
              variant="body1"
              sx={{ textAlign: "center", width: "100%", color: "whitesmoke" }}
            >
              No bikes match your filters.
            </Typography>
          )}
        </Grid>
      </Box>
      <Footer/>
    </Box>
  );
};
