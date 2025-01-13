import React, { useState, useEffect } from "react";
import { Box, Grid, Typography, Button, Chip, Divider } from "@mui/material";
import {
  Speed,
  DirectionsBike,
  LocalGasStation,
  Build,
} from "@mui/icons-material";
import StarIcon from "@mui/icons-material/Star";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { enqueueSnackbar } from "notistack";
import { useDispatch, useSelector } from "react-redux";
import { addAmount, addCart } from "../../Redux/ProductAdminSlice/ProductSlice";

const Hero = ({ product, coloredProduct }) => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { cart } = useSelector((state) => state.product);
  const dispatch = useDispatch();

  const [selectedImage, setSelectedImage] = useState("");
  const [selectedColor, setSelectedColor] = useState(0);

  useEffect(() => {
    if (product?.image?.length > 0) {
      setSelectedImage(product.image[0]);
    }
    if (coloredProduct?.length > 0) {
      setSelectedColor(coloredProduct?.[0]?.selectedColor);
    }
  }, [product, coloredProduct]);

  const addToCart = (amount) => {
    axios
      .post(
        `${process.env.REACT_APP_BASEURL}/cart/product/cart`,
        {
          productId: id,
          quantity: 1,
        },
        {
          withCredentials: true,
        }
      )
      .then((res) => {
        console.log(res.data);
        enqueueSnackbar(res.data.message, { variant: "success" });
        dispatch(addCart(id));
        dispatch(addAmount(amount));
      })
      .catch((err) => {
        enqueueSnackbar(err.response.data.message, { variant: "error" });
      });
  };

  const specifications = [
    { icon: <Speed />, label: "Top Speed", value: product?.topSpeed || "N/A" },
    {
      icon: <DirectionsBike />,
      label: "Engine Type",
      value: product?.engineType || "N/A",
    },
    {
      icon: <LocalGasStation />,
      label: "Mileage",
      value: product?.mileage || "N/A",
    },
    { icon: <Build />, label: "Max Power", value: product?.maxPower || "N/A" },
    { icon: <Build />, label: "Torque", value: product?.maxTorque || "N/A" },
    {
      icon: <Build />,
      label: "Fuel Capacity",
      value: product?.fuelTankCapacity || "N/A",
    },
    
  ];

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ padding: "1rem" }}>
        <Grid container spacing={4}>
          {/* Left Side: Images */}
          <Grid item xs={12} md={5} sx={{ mt: 4 }}>
            <Box
              sx={{
                textAlign: "center",
                borderRadius: "8px",
                padding: "0.6rem",
              }}
            >
              {selectedImage && (
                <img
                  src={selectedImage}
                  alt={product?.productName || "Product"}
                  style={{
                    width: "95%",
                    height: { xs: "200px", sm: "500px" },
                    objectFit: "contain",
                    borderRadius: "8px",
                  }}
                />
              )}
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  marginTop: "1rem",
                  gap: "10px",
                }}
              >
                {product?.image?.map((img, index) => (
                  <img
                    key={index}
                    src={img}
                    alt={`Thumbnail ${index + 1}`}
                    style={{
                      width: "60px",
                      height: "60px",
                      objectFit: "cover",
                      border:
                        selectedImage === img
                          ? "2px solid gold"
                          : "2px solid gray",
                      borderRadius: "4px",
                      cursor: "pointer",
                      transition: "transform 0.3s",
                    }}
                    onClick={() => setSelectedImage(img)}
                  />
                ))}
              </Box>
            </Box>
          </Grid>

          {/* Right Side: Product Details */}
          <Grid item xs={12} md={6}>
            <Box sx={{ padding: { xs: "0px", sm: "20px" } }}>
              <Typography
                variant="h4"
                sx={{ fontWeight: "bold", marginBottom: "0.5rem" }}
              >
                {product?.productName || "Product Name"} ({product?.brand})
              </Typography>
              <Typography variant="body2" sx={{ marginBottom: "0.5rem" }}>
                Available since: {new Date(product?.createdAt).toLocaleString()}
              </Typography>
              <Typography variant="body1" color="green" fontWeight="bold">
                Special price
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                 
                }}
              >
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: "bold",
                    color: "#FF5722",
                    marginRight: "0.4rem",
                  }}
                >
                  ₹{product?.offerPrice || "N/A"}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ textDecoration: "line-through", color: "gray" }}
                >
                  ₹{product?.originalPrice || "N/A"}
                </Typography>

                <Typography
                  variant="body1"
                  sx={{ color: "green", marginLeft: "0.4rem" }}
                >
                  {product?.discount || "N/A"}% off
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    marginLeft: "0.4rem",
                    color: "#FFA439",
                  }}
                >
                  <StarIcon />
                  <Typography sx={{ marginLeft: "4px", fontWeight: 600 }}>
                    4.5
                  </Typography>
                </Box>
              </Box>

              <Box sx={{ my: 0.3 }}>
                <Typography variant="body2" sx={{fontWeight:"600",mb:2}}>Model Version: {product?.yearOfLaunch}</Typography>
              </Box>

              <Divider sx={{ marginBottom: "1rem" }} />
              <Box
                sx={{
                  marginBottom: "1rem",
                  display: "flex",
                  gap: "10px",
                  alignItems: "center",
                  mb: 2,
                }}
              >
                <Typography variant="body1">Select Color:</Typography>

                <Box sx={{ display: "flex", gap: "0.6rem" }}>
                  {coloredProduct.map((color, index) => (
                    <Box
                      key={index}
                      sx={{
                        width: "30px",
                        height: "30px",
                        backgroundColor: color?.selectedColor?.toLowerCase(),
                        border:
                          selectedColor === color?.selectedColor
                            ? "2px solid black"
                            : "2px solid gray",
                        borderRadius: "50%",
                        cursor: "pointer",
                        transition: "transform 0.2s",
                        "&:hover": {
                          transform: "scale(1.1)",
                        },
                      }}
                      onClick={() => {
                        navigate(
                          `/view-product/${color?._id}/${color?.modelNumber}`
                        );
                        setSelectedColor(color?.selectedColor);
                      }}
                    />
                  ))}
                </Box>
                {/* {selectedColor && (
                <Typography variant="body2" sx={{ marginTop: '0.5rem' }}>
                  Selected Color: <strong>{selectedColor}</strong>
                </Typography>
              )} */}
              </Box>

              <Divider sx={{ marginBottom: "1rem" }} />

              <Box
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "1rem",
                  marginBottom: "1rem",
                  justifyContent: "start",
                }}
              >
                {specifications.map((spec, index) => (
                  <Chip
                    key={index}
                    icon={spec.icon}
                    label={`${spec.label}: ${spec.value}`}
                    sx={{
                      padding: "0.5rem",
                      fontWeight: "600",
                      color: "black",
                      border: "1px solid #d3d3d3",
                      backgroundColor: "#f9f9f9",
                      "&:hover": {
                        backgroundColor: "#e3f2fd",
                      },
                    }}
                  />
                ))}
              </Box>
              <Typography
                variant="body2"
                sx={{ color: "#757575", marginBottom: "1rem", lineHeight: 1.5 }}
              >
                {product?.description || "No description available."}
              </Typography>

              <Box sx={{ display: "flex", gap: "1rem", marginTop: "1.4rem" }}>
                <Button
                  variant="contained"
                  sx={{
                    flex: 1,
                    padding: "1rem",
                    backgroundColor: "black",
                    color: "white",
                    borderRadius: 3,
                    "&:hover": {
                      backgroundColor: "grey",
                    },
                  }}
                  onClick={() => navigate(`/payment/${product?._id}`)}
                >
                  Buy Now
                </Button>
                <Button
                  variant="outlined"
                  disabled={cart.includes(product?._id)}
                  sx={{
                    flex: 1,
                    padding: "1rem",
                    borderColor: "black",
                    color: "black",
                    borderRadius: 3,
                    "&:hover": {
                      backgroundColor: "#e3f2fd",
                    },
                  }}
                  // onClick={() => navigate('/cart')}
                  onClick={(e) => addToCart(product?.offerPrice)}
                >
                  Add to Cart
                </Button>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Hero;
