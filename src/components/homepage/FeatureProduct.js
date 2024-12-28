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

const product=[
    {
        id:1,
        image:"../images/product_3.jpg"
    },{
        id:2,
        image:"../images/product_4.jpg"
    }
]

const FeatureProduct = () => {
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
       Feature Products
      </Typography>
      <Grid container >
        
          <Grid item xs={12} sm={6} md={6} lg={3} sx={{ display: "flex",flexDirection:"column", justifyContent: "center",alignItems:"center" }} >
            {product && product.map((product,index)=>(
            <Card
              sx={{
                backgroundColor: "#1c1c1c",
                color: "white",
                borderRadius: 2,
                boxShadow: 3,
                width:{xs:"300px",sm:"390px"},
                my:2
              }}
            >
              <CardMedia
                component="img"
                height="200"
                image={product.image}
                alt=""
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
            ))}
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={6} sx={{ display: "flex",flexDirection:"column", justifyContent: "center",alignItems:"center" }}>
            <Card
              sx={{
                backgroundColor: "#1c1c1c",
                color: "white",
                borderRadius: 2,
                boxShadow: 3,
                width:{xs:"300px",sm:"390px",md:"650px"}
              }}
            >
              <CardMedia
                component="img"
                height="400"
                 image="../images/product_3.jpg"
                alt=""
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
          <Grid item xs={12} sm={6} md={6} lg={3} sx={{ display: "flex",flexDirection:"column", justifyContent: "center",alignItems:"center" }} >
            {product && product.map((product,index)=>(
            <Card
              sx={{
                backgroundColor: "#1c1c1c",
                color: "white",
                borderRadius: 2,
                boxShadow: 3,
                width:{xs:"300px",sm:"390px"},
                my:2
              }}
            >
              <CardMedia
                component="img"
                height="200"
                image={product.image}
                alt=""
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
            ))}
          </Grid>
        
      </Grid>
    </Box>
  );
};

export default FeatureProduct;
