import React from "react";
import {
  Box,
  Grid,
  Typography,
  Card,
  CardMedia,
  CardContent,
  Button,
  Divider,
} from "@mui/material";
import CallMadeIcon from "@mui/icons-material/CallMade";
const products = [
  {
    id: 1,
    name: "Bajaj Pulsar NS200",
    description: "This is an amazing product that you’ll love.",
    price: "$29.99",
    image: "../images/product_1.jpg",
  },
  {
    id: 2,
    name: "Bajaj Pulsar NS200",
    description: "An incredible product with outstanding features.",
    price: "$49.99",
    image: "../images/product_2.jpg",
  },
  {
    id: 3,
    name: "Bajaj Pulsar NS200",
    description: "Perfect for anyone looking for quality and value.",
    price: "$19.99",
    image: "../images/product_3.jpg",
  },
  {
    id: 4,
    name: "Bajaj Pulsar NS200",
    description: "Experience excellence with this premium product.",
    price: "$99.99",
    image: "../images/product_4.jpg",
  },
];

const BestSeller = () => {
  return (
  
    <Box
      sx={{
        backgroundColor: "black",
        color: "white",
        padding: "2rem",
        textAlign: "center",
      }}
    >
      <Typography variant="body2" color="#999999" gutterBottom>
        Your Best Ride Starts here
      </Typography>
      <Typography variant="h3" gutterBottom>
        Best Sellers
      </Typography>
      <Grid container spacing={3} sx={{display:"flex",justifyContent:"center",textAlign:"center"}}>

        {products.slice(0,3).map((product) => (
          <Grid item xs={12} sm={6} md={4} key={product.id} sx={{display:"flex",justifyContent:"center",textAlign:"center"}}>
            
            <Card
              sx={{
                backgroundColor: "#1c1c1c",
                color: "white",
                borderRadius: 2,
                boxShadow: 3,
                width:{xs:"340px",sm:"390px"}
              }}
            >
              <CardMedia
                component="img"
                height="200"
                image={product.image}
                alt={product.name}
              />
              <CardContent
                sx={{
                  backgroundColor: "white",
                  color: "black",
                  filter: "brightness(0.9)",
                }}
              >
                <Typography variant="h6" component="div">
                  Bajaj Pulsar NS200
                </Typography>
                <Typography variant="body2">
                  4.0 D5 PowerPulse Momentum 5dr AW…{" "}
                </Typography>
                <Divider sx={{ backgroundColor: "#C6E4FF", my: 1 }} />
                <Box sx={{ display: "flex", gap: "20px" }}>
                  <Box>
                    <Typography>50 Miles</Typography>
                  </Box>
                  <Box>
                    <Typography>Petrol</Typography>
                  </Box>
                  <Box>
                    <Typography>Automatic</Typography>
                  </Box>
                </Box>
                <Divider sx={{ backgroundColor: "#C6E4FF", my: 1 }} />
                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                  <Typography sx={{ fontWeight: 700, fontSize: "1.5rem" }}>
                    $150,000
                  </Typography>
                  <Button>
                    View Details <CallMadeIcon />
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default BestSeller;
