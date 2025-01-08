import { Box, Button, CardMedia, Grid, Typography } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { removeCartProduct } from "../../Redux/ProductAdminSlice/ProductSlice";

export const CartProduct = ({cart,setCart}) => {

  const { Cart } = useSelector((state) => state.product);
  const dispatch = useDispatch();

  console.log(cart);
  
  const removeCart = (id) => {
    // Call the API to remove the cart item
    axios
      .delete(`${process.env.REACT_APP_BASEURL}/cart/remove/${id}`, {
        withCredentials: true,
      })
      .then((res) => {
        console.log(res.data.message);
        // Update state only if the API call succeeds
        setCart((prev) => prev.filter((product) => product?.product?._id !== id));
        dispatch(removeCartProduct(id));
      })
      .catch((error) => {
        console.error("Error removing item from cart:", error.message);
      });
  };
  
  return (
    <Box sx={{ padding: 1, borderBottom: "1px solid #e0e0e0", marginBottom: 2 }}>
      <Grid container spacing={2} sx={{ alignItems: "center", }}>
        {/* Product Image */}
     
        <Grid item xs={12} sm={4} md={4} lg={3} sx={{ display:"flex",justifyContent:"center", alignItems: "center" }}>
          <CardMedia 
            component="img"
            image={cart?.product?.image?.[0]}
            sx={{
              width: {xs:"250px",sm:"100px"},
              height: "140px",
              borderRadius: "8px",
              boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
              objectFit:"contain"
            }}
          />
        </Grid>

        {/* Product Details */}
        <Grid item xs={12} sm={7} md={8} lg={4}>
          <Typography
            sx={{
              fontSize: "16px",
              fontWeight: "600",
              marginBottom: "4px",
              lineHeight: 1.4,
            }}
          >
            {cart?.product?.productName}
          </Typography>
          <Typography
            sx={{
              fontSize: "14px",
              color: "#757575",
              marginBottom: "8px",
            }}
          >
            {cart?.product?.description?.slice(0,50)}...
          </Typography>

          {/* Size and Quantity */}
          <Box
            sx={{
              display: "flex",
              gap: "16px",
              marginBottom: "8px",
              fontSize: "14px",
              color: "#424242",
            }}
          >
            <Typography>Size: <span style={{ fontWeight: 600 }}>40</span></Typography>
            <Typography>Qty: <span style={{ fontWeight: 600 }}>1</span></Typography>
          </Box>

          {/* Pricing */}
          <Typography
            sx={{
              fontSize: "16px",
              fontWeight: "600",
              marginBottom: "8px",
              color: "#212121",
            }}
          >
            ${cart?.product?.offerPrice}{" "}
            <span
              style={{
                textDecoration: "line-through",
                fontWeight: 400,
                color: "#9e9e9e",
                marginLeft: "8px",
              }}
            >
              ${cart?.product?.originalPrice}
            </span>{" "}
            <span style={{ color: "#ff4081", marginLeft: "8px" }}>{cart?.product?.discount}% OFF</span>
          </Typography>

          {/* Delivery Date */}
          <Typography
            variant="body2"
            sx={{
              fontSize: "14px",
              color: "#4caf50",
              display: "flex",
              alignItems: "center",
              marginBottom: "8px",
            }}
          >
            <CheckIcon sx={{ fontSize: "16px", marginRight: "4px" }} /> Delivery
            by{" "}
            <span style={{ fontWeight: 600, marginLeft: "4px" }}>4 Jan 2025</span>
          </Typography>
        </Grid>

        {/* Actions */}
        <Grid item xs={12} sm={4} md={3} lg={4} sx={{ textAlign: { xs: "left", md: "right" },display:"flex",justifyContent:"center" }}>
          <Button
            variant="outlined"
            sx={{
              fontSize: "14px",
              color: "#ff4081",
              borderColor: "#ff4081",
              padding: "4px 16px",
              textTransform: "none",
              "&:hover": {
                borderColor: "#ff4081",
                backgroundColor: "#fff5f8",
              },
            }}
            onClick={(e)=>removeCart(cart?.product?._id)}
          >
            Remove
          </Button>
        </Grid>
      
      </Grid>
    </Box>
  );
};
