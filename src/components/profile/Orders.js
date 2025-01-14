import { Box, CardMedia, Grid, Typography, Button } from "@mui/material";
import { OrderTracker } from "./OrderTracker";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import dayjs from "dayjs";

export const Orders = ({ orders,orderLength,orderError }) => {
  const navigate = useNavigate();

  return (
    <Box sx={{ width: "77vw", mt: 2 }}>
      <Typography variant="h6" color="text.secondary" gutterBottom>
        My Orders ({orderLength }) (
        <span
          style={{
            fontSize: "1.0rem",
            textDecoration: "underline",
            cursor: "pointer",
            color: "#64b5f6",
          }}
          onClick={(e) => navigate("/all-orders")}
        >
          see more
        </span>
        )
      </Typography>
      {orderError==="No orders found for this user."?<Typography variant="body2" color="text.secondary" align="center" sx={{my:5}}>You have not ordered yet.</Typography>:null}
      {orders?.map((order) => (
        <OrderCard key={order._id} order={order} />
      ))}
    </Box>
  );
};

const OrderCard = ({ order, }) => {
  const [showAllProducts, setShowAllProducts] = useState(false);

 
  return (
    <Box
      sx={{ border: "1px solid #dfdfdf", padding: 2, my: 2, borderRadius: 2 }}
    >
      <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
        Order ID: {order._id}
      </Typography>

      <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
        Ordered on:{" "}
        {dayjs(order.shipmentDetails.deliveryDate).format("DD MMM, YYYY")}
      </Typography>

      {/* Product List */}
     
      <Box>
      
        {(showAllProducts ? order.products : order.products.slice(0, 1)).map(
          (product) => (
            <Grid container spacing={2} key={product._id} sx={{ mb: 2 }}>
              <Grid item xs={12} sm={12} md={3} lg={3} sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems:"center"
                }}>
                <CardMedia
                  component="img"
                  image={product.image?.[0] || "../images/default_product.jpg"} // Default image fallback
                  alt={product.productName}
                  sx={{
                    width: "150px",
                    height: "100px",
                    borderRadius: 1,
                    objectFit: "cover",
                  }}
                />
              </Grid>

              <Grid
                item
                xs={12}
                sm={12}
                md={4}
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    
                  }}
              >
                <Typography variant="body2" color="text.primary" sx={{fontWeight:"bold"}}>
                  {product.productName} - {product.brand} ({product.model})
                </Typography>
                <Typography variant="body1" color="green">
                  ${product.offerPrice || "N/A"}
                </Typography>
                <Box sx={{ mt: 2 }}>
                  <Typography variant="body2" color="text.secondary" sx={{fontWeight:"bold"}}>
                    Total Price: ${order.totalPrice} 
                  </Typography>
                  
                  <Typography variant="body2" color="text.secondary" sx={{fontWeight:"bold"}}>
                    Payment Status: {order.paymentStatus}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{fontWeight:"bold"}}>
                    Order Mode: {order.orderMode}
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} sm={12} md={5} sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    
                  }}>
                <OrderTracker status={order?.status}/>
              </Grid>
            </Grid>
          )
        )}

        {/* Show More/Show Less Button */}
        {order.products.length > 1 && (
          <Button
            variant="text"
            size="small"
            onClick={() => setShowAllProducts(!showAllProducts)}
            sx={{ textTransform: "none", color: "#64b5f6" }}
          >
            {showAllProducts
              ? "Show Less"
              : `Show More (${order.products.length} products)`}
          </Button>
        )}
      </Box>
    </Box>
  );
};
