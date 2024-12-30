import { Favorite, Speed } from "@mui/icons-material";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Divider,
  Grid,
  Typography,
} from "@mui/material";
import CallMadeIcon from "@mui/icons-material/CallMade";
import { useNavigate } from "react-router-dom";
import LocalGasStationIcon from "@mui/icons-material/LocalGasStation";
import AutoModeIcon from "@mui/icons-material/AutoMode";
import Footer from "../Footer";

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
  const navigate = useNavigate();

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
                <Card
                  sx={{
                    borderRadius: "12px",
                    transition: "transform 0.3s, box-shadow 0.3s",
                    position: "relative",
                    width: {xs:"300px",sm:"350px"},
                    cursor:"pointer"
                  }}
                  onClick={(e) => navigate(`/view-product/${2}`)}
                >
                  <CardMedia
                    component="img"
                    alt={bike.name}
                    height="220"
                    image={bike.image}
                    sx={{ objectFit: "cover", filter: "brightness(0.9)" }}
                  />

                  <Favorite
                    sx={{
                      position: "absolute",
                      top: 10,
                      right: 10,
                      color: "white",
                      borderRadius: "50%",
                      padding: "5px",
                      cursor: "pointer",
                      transition: "transform 0.2s",
                      "&:hover": {
                        transform: "scale(1.2)", // Slightly enlarge the icon on hover
                      },
                    }}
                  />
                  <CardContent
                    sx={{ color: "black", filter: "brightness(0.7)" }}
                  >
                    <Typography variant="h6" component="div">
                      {bike.name}
                    </Typography>
                    <Typography variant="body2">
                      4.0 D5 PowerPulse Momentum 5dr AW… {bike.description}
                    </Typography>
                    <Divider sx={{ backgroundColor: "#C6E4FF", my: 1 }} />
                    <Box sx={{ display: "flex", gap: "20px",
                          justifyContent: "center",
                          alignItems: "center", }}>
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <Speed />
                        <Typography variant="body2" color="text.secondary">50 Miles</Typography>
                      </Box>
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <LocalGasStationIcon />
                        <Typography variant="body2" color="text.secondary">Petrol</Typography>
                      </Box>
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <AutoModeIcon />
                        <Typography variant="body2" color="text.secondary">Automatic</Typography>
                      </Box>
                    </Box>
                    <Divider sx={{ backgroundColor: "#C6E4FF", my: 1 }} />
                    <Box
                      sx={{ display: "flex", justifyContent: "space-between" }}
                    >
                      <Typography sx={{ fontWeight: 700, fontSize: "1.5rem" }}>
                        $150,000
                      </Typography>
                     
                    </Box>
                  </CardContent>
                </Card>
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
