import React, { useEffect, useState } from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Grid,
  Avatar,
  Divider,
  CircularProgress,
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from '@mui/icons-material/Cancel';
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import Footer from "../components/Footer";
import axios from "axios";
import dayjs from "dayjs";
import { ReviewDrawer } from "../components/UserReview/ReviewDrawer";
import { NoOrder } from "../components/order/NoOrder";

const OrdersPage = () => {
  const [orders, setOrders] = useState([]);
  const [productDetails, setProductDetails] = useState([]);
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BASEURL}/orders/userOrders`, {
        withCredentials: true,
      })
      .then((res) => {
        console.log(res.data);
        setLoading(false);
        setOrders(res.data?.orders);
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
      });
  }, []);

  const handleOpenDrawer = (id) => {
    setDrawerOpen(true);
    axios
      .get(`${process.env.REACT_APP_BASEURL}/products/products/${id}`, {
        withCredentials: true,
      })
      .then((res) => {
        setProductDetails(res?.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <Box>
      <Box sx={{ padding: "20px" }}>
        <Typography
          variant="h5"
          sx={{
            marginBottom: "20px",
            fontWeight: "bold",
            width: "46vw",
            display: "flex",
            justifyContent: "center",
          }}
        >
          All Orders
        </Typography>
        <Grid container spacing={3}>
          {loading ? (
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "60vh",
                width: "100vw",
                flexDirection: "column",
              }}
            >
              <CircularProgress />
            </Box>
          ) : orders?.length === 0 ? (
            <NoOrder />
          ) : (
            orders.map((order) => (
              <Grid
                item
                xs={12}
                key={order.id}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Card
                  sx={{
                    padding: "20px",
                    border: "1px solid #e0e0e0",
                    width: { xs: "78vw", md: "57vw" },
                  }}
                >
                  {/* Header Section */}
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      marginBottom: "16px",
                    }}
                  >
                    {order?.status==="cancelled" ? <Avatar
                      sx={{
                        backgroundColor: "red",
                        marginRight: "10px",
                      }}
                    >
                      <CancelIcon />
                    </Avatar> :<Avatar
                      sx={{
                        backgroundColor: "green",
                        marginRight: "10px",
                      }}
                    >
                      <CheckCircleIcon />
                    </Avatar>}
                    <Box>
                      <Typography
                        variant="body1"
                        sx={{ color: order.status==="cancelled"?"red":"green", fontWeight: "bold" }}
                      >
                        {order.status}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        On{" "}
                        {dayjs(order?.shipmentDetails?.deliveryDate).format(
                          "DD-MMM-YYYY"
                        )}
                      </Typography>
                    </Box>
                  </Box>
                  {/* Product Info Section */}
                  {order?.products?.map((item, index) => (
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        backgroundColor: "#f9f9f9",
                        padding: "16px",
                        borderRadius: "8px",
                        mb: 1,
                      }}
                    >
                      <img
                        src={item?.image?.[0]}
                        alt={order.productName}
                        style={{
                          width: "70px",
                          height: "70px",
                          marginRight: "16px",
                          objectFit: "contain",
                        }}
                      />
                      <Grid container>
                        <Grid item xs={12} sm={6} sx={{ flexGrow: 1 }}>
                          <Typography
                            variant="body1"
                            sx={{ fontWeight: "bold" }}
                          >
                            {item?.productName} ({item?.brand})
                          </Typography>

                          <Box sx={{ display: "flex", gap: "10px" }}>
                            <Typography variant="body2" color="text.secondary">
                              Color:{" "}
                            </Typography>
                            <Box
                              sx={{
                                width: "16px",
                                height: "16px",
                                backgroundColor: item?.selectedColor,
                                borderRadius: "50%",
                                transition: "transform 0.2s",
                                border: "1px solid black",
                              }}
                            />
                          </Box>
                          <Typography variant="body2" color="green">
                            Price: ${order.totalPrice}
                          </Typography>
                        </Grid>
                        <Grid item xs={8} sm={6}>
                          {order?.status === "delivered" ? (
                            <Typography
                              variant="body2"
                              sx={{
                                my: 1,
                                color: "#ff4081",
                                cursor: "pointer",
                              }}
                              onClick={(e) => handleOpenDrawer(item?._id)}
                            >
                              Rate & Review
                            </Typography>
                          ) : null}
                        </Grid>
                      </Grid>

                      <LocalShippingOutlinedIcon color="action" />
                    </Box>
                  ))}

                  {/* Footer Section */}
                  <CardContent>
                    <Divider sx={{ marginY: "16px" }} />

                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ fontWeight: "bold" }}
                    >
                      Order ID # {order._id}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))
          )}
        </Grid>
      </Box>
      {drawerOpen && (
        <ReviewDrawer
          product={productDetails}
          drawerOpen={drawerOpen}
          setDrawerOpen={setDrawerOpen}
        />
      )}
      <Footer />
    </Box>
  );
};

export default OrdersPage;
