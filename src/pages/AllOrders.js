import React from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Grid,
  Avatar,
  Rating,
  Divider,
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import { HomeNavbar } from "../components/HomeNavbar";
import Footer from "../components/Footer";

const orders = [
  {
    id: "12345",
    productName:
      "Combed Cotton Rich Graphic Round Neck Half Sleeve Tshirt-2718",
    brand: "Duke",
    productImage: "https://via.placeholder.com/60",
    color: "red",
    price: "$24124",
    deliveryDate: "Sun, 6 Oct",
    returnDate: "Sun, 20 Oct",
    status: "Delivered",
  },
];

const OrdersPage = () => {
  return (
    <Box>
      <HomeNavbar />
      <Box sx={{ padding: "20px" }}>
        <Typography
          variant="h5"
          sx={{ marginBottom: "20px", fontWeight: "bold",width:"46vw",display:"flex",justifyContent:"center" }}
        >
          All Orders
        </Typography>
        <Grid container spacing={3}>
          {orders.map((order) => (
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
                  <Avatar
                    sx={{
                      backgroundColor: "green",
                      marginRight: "10px",
                    }}
                  >
                    <CheckCircleIcon />
                  </Avatar>
                  <Box>
                    <Typography
                      variant="body1"
                      sx={{ color: "green", fontWeight: "bold" }}
                    >
                      {order.status}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      On {order.deliveryDate}
                    </Typography>
                  </Box>
                </Box>
                {/* Product Info Section */}
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    backgroundColor: "#f9f9f9",
                    padding: "16px",
                    borderRadius: "8px",
                  }}
                >
                  <img
                    src="../images/product_1.jpg"
                    alt={order.productName}
                    style={{
                      width: "60px",
                      height: "60px",
                      marginRight: "16px",
                    }}
                  />
                  <Box sx={{ flexGrow: 1 }}>
                    <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                      {order.brand}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {order.productName}
                    </Typography>
                    <Box sx={{ display: "flex", gap: "10px" }}>
                      <Typography variant="body2" color="text.secondary">
                        Color:{" "}
                      </Typography>
                      <Box
                        sx={{
                          width: "16px",
                          height: "16px",
                          backgroundColor: order.color,
                          borderRadius: "50%",
                          transition: "transform 0.2s",
                        }}
                      />
                    </Box>
                    <Typography variant="body2" color="text.secondary">
                      Price: {order.price}
                    </Typography>
                  </Box>
                  <LocalShippingOutlinedIcon color="action" />
                </Box>
                {/* Footer Section */}
                <CardContent>
                  <Typography variant="body2" color="text.secondary">
                    Order ID # {order.id}
                  </Typography>
                  <Divider sx={{ marginY: "16px" }} />
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <Rating value={2} />
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
      <Footer />
    </Box>
  );
};

export default OrdersPage;
