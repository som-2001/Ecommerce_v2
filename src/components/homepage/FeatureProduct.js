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

import { useNavigate } from "react-router-dom";
import { Favorite } from "@mui/icons-material";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import PersonIcon from "@mui/icons-material/Person";
import Cookies from "js-cookie";

const product = [
  {
    id: 1,
    image: "../images/product_3.jpg",
  },
  {
    id: 2,
    image: "../images/product_4.jpg",
  },
];

const FeatureProduct = () => {
  const navigate = useNavigate();
  const token = Cookies.get("accessToken");

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
      <Typography
        variant="h3"
        sx={{ fontSize: { xs: "1.5rem", sm: "2.5rem" }, my: 1 }}
      >
        Feature Products
      </Typography>
      <Grid container>
        <Grid
          item
          xs={12}
          sm={6}
          md={6}
          lg={3}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {product &&
            product.map((product, index) => (
              <Card
                sx={{
                  backgroundColor: "#1c1c1c",
                  color: "white",
                  borderRadius: 2,
                  position: "relative",
                  boxShadow: 3,
                  width: { xs: "300px", sm: "300px" },
                  my: 2,
                }}
              >
                <CardMedia
                  component="img"
                  height="200"
                  image={product.image}
                  alt=""
                />
                <Box
                  sx={{
                    position: "absolute",
                    top: 150,
                    left: 10,
                    backgroundColor: "whitesmoke",
                    display: "flex",
                    borderRadius: 2,
                    justifyContent: "center",
                    alignItems: "center",
                    padding: "2px",
                    width: "120px",
                  }}
                >
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ fontWeight: 600, fontSize: "11px" }}
                  >
                    4
                  </Typography>
                  <StarBorderIcon
                    sx={{
                      color: "green",
                      filter: "opacity(0.7)",
                      borderRadius: "50%",
                      padding: "5px",
                      cursor: "pointer",
                      transition: "transform 0.2s",
                      "&:hover": {
                        transform: "scale(1.2)", // Slightly enlarge the icon on hover
                      },
                    }}
                  />
                  <Typography variant="body2" color="text.secondary">
                    |
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ ml: 0.4, fontWeight: 600, fontSize: "11px" }}
                  >
                    10.4K
                  </Typography>
                  <PersonIcon sx={{color:"black"}}/>
                </Box>

                {token && (
                  <Favorite
                    sx={{
                      position: "absolute",
                      top: 10,
                      right: 10,
                      color: "whitesmoke",
                      filter: "opacity(0.7)",
                      borderRadius: "50%",

                      padding: "5px",
                      cursor: "pointer",
                      transition: "transform 0.2s",
                      "&:hover": {
                        transform: "scale(1.2)", // Slightly enlarge the icon on hover
                      },
                    }}
                  />
                )}
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
                  <Box
                    sx={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <Typography sx={{ fontWeight: 700, fontSize: "1.5rem" }}>
                      $150,000
                    </Typography>
                    <Button
                      variant="contained"
                      sx={{
                        backgroundColor: "black",
                        borderRadius: 5,
                        p: 1,
                        width: "120px",
                      }}
                      onClick={(e) => navigate("/explore-products")}
                    >
                      Shop now
                    </Button>
                  </Box>
                </CardContent>
              </Card>
            ))}
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          md={6}
          lg={6}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 5,
          }}
        >
          <Card
            sx={{
              backgroundColor: "#1c1c1c",
              color: "white",
              borderRadius: 2,
              boxShadow: 3,
              position:"relative",
              width: { xs: "300px", sm: "390px", md: "600px" },
            }}
          >
            <CardMedia
              component="img"
              height="400"
              image="../images/product_3.jpg"
              alt=""
            />
              <Box
                  sx={{
                    position: "absolute",
                    bottom: 205,
                    left: 10,
                    backgroundColor: "whitesmoke",
                    display: "flex",
                    borderRadius: 2,
                    justifyContent: "center",
                    alignItems: "center",
                    padding: "2px",
                    width: "120px",
                  }}
                >
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ fontWeight: 600, fontSize: "11px" }}
                  >
                    4
                  </Typography>
                  <StarBorderIcon
                    sx={{
                      color: "green",
                      filter: "opacity(0.7)",
                      borderRadius: "50%",
                      padding: "5px",
                      cursor: "pointer",
                      transition: "transform 0.2s",
                      "&:hover": {
                        transform: "scale(1.2)", // Slightly enlarge the icon on hover
                      },
                    }}
                  />
                  <Typography variant="body2" color="text.secondary">
                    |
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ ml: 0.4, fontWeight: 600, fontSize: "11px" }}
                  >
                    10.4K
                  </Typography>
                  <PersonIcon sx={{color:"black"}}/>
                </Box>

                {token && (
                  <Favorite
                    sx={{
                      position: "absolute",
                      top: 10,
                      right: 10,
                      color: "whitesmoke",
                      filter: "opacity(0.7)",
                      borderRadius: "50%",

                      padding: "5px",
                      cursor: "pointer",
                      transition: "transform 0.2s",
                      "&:hover": {
                        transform: "scale(1.2)", // Slightly enlarge the icon on hover
                      },
                    }}
                  />
                )}
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
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "black",
                    borderRadius: 5,
                    p: 1,
                    width: "120px",
                  }}
                  onClick={(e) => navigate("/explore-products")}
                >
                  Shop now
                </Button>
              </Box>
            </CardContent>
          </Card>
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          md={6}
          lg={3}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {product &&
            product.map((product, index) => (
              <Card
                sx={{
                  backgroundColor: "#1c1c1c",
                  color: "white",
                  borderRadius: 2,
                  position:"relative",
                  boxShadow: 3,
                  width: { xs: "300px", sm: "300px" },
                  my: 2,
                }}
              >
                <CardMedia
                  component="img"
                  height="200"
                  image={product.image}
                  alt=""
                />
                  <Box
                  sx={{
                    position: "absolute",
                    top: 150,
                    left: 10,
                    backgroundColor: "whitesmoke",
                    display: "flex",
                    borderRadius: 2,
                    justifyContent: "center",
                    alignItems: "center",
                    padding: "2px",
                    width: "120px",
                  }}
                >
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ fontWeight: 600, fontSize: "11px" }}
                  >
                    4
                  </Typography>
                  <StarBorderIcon
                    sx={{
                      color: "green",
                      filter: "opacity(0.7)",
                      borderRadius: "50%",
                      padding: "5px",
                      cursor: "pointer",
                      transition: "transform 0.2s",
                      "&:hover": {
                        transform: "scale(1.2)", // Slightly enlarge the icon on hover
                      },
                    }}
                  />
                  <Typography variant="body2" color="text.secondary">
                    |
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ ml: 0.4, fontWeight: 600, fontSize: "11px" }}
                  >
                    10.4K
                  </Typography>
                  <PersonIcon sx={{color:"black"}}/>
                </Box>

                {token && (
                  <Favorite
                    sx={{
                      position: "absolute",
                      top: 10,
                      right: 10,
                      color: "whitesmoke",
                      filter: "opacity(0.7)",
                      borderRadius: "50%",

                      padding: "5px",
                      cursor: "pointer",
                      transition: "transform 0.2s",
                      "&:hover": {
                        transform: "scale(1.2)", // Slightly enlarge the icon on hover
                      },
                    }}
                  />
                )}
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
                  <Box
                    sx={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <Typography sx={{ fontWeight: 700, fontSize: "1.5rem" }}>
                      $150,000
                    </Typography>
                    <Button
                      variant="contained"
                      sx={{
                        backgroundColor: "black",
                        borderRadius: 5,
                        p: 1,
                        width: "120px",
                      }}
                      onClick={(e) => navigate("/explore-products")}
                    >
                      Shop now
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
