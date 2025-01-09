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

const FeatureProduct = ({ product }) => {
  const navigate = useNavigate();
  const token = Cookies.get("accessToken");

  console.log(product);
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
            product?.slice(0, 2)?.map((product, index) => (
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
                  image={product.image?.[0]}
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
                  <PersonIcon sx={{ color: "black" }} />
                </Box>

                {token && (
                  <Favorite
                    sx={{
                      position: "absolute",
                      top: 10,
                      right: 10,
                      color: "black",
                      filter: "opacity(0.7)",
                      borderRadius: "50%",
                      backgroundColor: "white",
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
                    {product?.productName}
                  </Typography>
                  <Typography variant="body2">
                    {product?.description.slice(0, 70)}...
                  </Typography>
                  <Divider sx={{ backgroundColor: "#C6E4FF", my: 1 }} />
                  <Box sx={{ display: "flex", gap: "20px" }}>
                    <Box>
                      <Typography>{product?.mileage} Miles</Typography>
                    </Box>
                    <Box>
                      <Typography>{product?.fuelType}</Typography>
                    </Box>
                    <Box>
                      <Typography>{product?.kerbWeight}</Typography>
                    </Box>
                  </Box>
                  <Divider sx={{ backgroundColor: "#C6E4FF", my: 1 }} />
                  <Box
                    sx={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <Typography sx={{ fontWeight: 700, fontSize: "1.5rem" }}>
                      ${product?.offerPrice}
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
          {product &&
            product?.slice(2, 3)?.map((product, index) => (
              <Card
                sx={{
                  backgroundColor: "#1c1c1c",
                  color: "white",
                  borderRadius: 2,
                  position: "relative",
                  boxShadow: 3,
                  width: { xs: "300px", sm: "500px" },

                  my: 2,
                }}
              >
                <CardMedia
                  component="img"
                  height="200"
                  image={product.image?.[0]}
                  alt=""
                  sx={{ height: { xs: "200px", sm: "300px" } }}
                />
                <Box
                  sx={{
                    position: "absolute",
                    top: { xs: 150, sm: 250 },
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
                  <PersonIcon sx={{ color: "black" }} />
                </Box>

                {token && (
                  <Favorite
                    sx={{
                      position: "absolute",
                      top: 10,
                      right: 10,
                      color: "black",
                      filter: "opacity(0.7)",
                      borderRadius: "50%",
                      backgroundColor: "white",
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
                    {product?.productName}
                  </Typography>
                  <Typography variant="body2">
                    {product?.description.slice(0, 70)}...
                  </Typography>
                  <Divider sx={{ backgroundColor: "#C6E4FF", my: 1 }} />
                  <Box sx={{ display: "flex", gap: "20px" }}>
                    <Box>
                      <Typography>{product?.mileage} Miles</Typography>
                    </Box>
                    <Box>
                      <Typography>{product?.fuelType}</Typography>
                    </Box>
                    <Box>
                      <Typography>{product?.kerbWeight}</Typography>
                    </Box>
                  </Box>
                  <Divider sx={{ backgroundColor: "#C6E4FF", my: 1 }} />
                  <Box
                    sx={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <Typography sx={{ fontWeight: 700, fontSize: "1.5rem" }}>
                      ${product?.offerPrice}
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
          lg={3}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {product &&
            product?.slice(3, 5)?.map((product, index) => (
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
                  image={product.image?.[0]}
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
                  <PersonIcon sx={{ color: "black" }} />
                </Box>

                {token && (
                  <Favorite
                    sx={{
                      position: "absolute",
                      top: 10,
                      right: 10,
                      color: "black",
                      filter: "opacity(0.7)",
                      borderRadius: "50%",
                      backgroundColor: "white",
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
                    {product?.productName}
                  </Typography>
                  <Typography variant="body2">
                    {product?.description.slice(0, 70)}...
                  </Typography>
                  <Divider sx={{ backgroundColor: "#C6E4FF", my: 1 }} />
                  <Box sx={{ display: "flex", gap: "20px" }}>
                    <Box>
                      <Typography>{product?.mileage} Miles</Typography>
                    </Box>
                    <Box>
                      <Typography>{product?.fuelType}</Typography>
                    </Box>
                    <Box>
                      <Typography>{product?.kerbWeight}</Typography>
                    </Box>
                  </Box>
                  <Divider sx={{ backgroundColor: "#C6E4FF", my: 1 }} />
                  <Box
                    sx={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <Typography sx={{ fontWeight: 700, fontSize: "1.5rem" }}>
                      ${product?.offerPrice}
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
