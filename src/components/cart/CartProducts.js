import { Box, Button, CardMedia, Grid, Typography } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import axios from "axios";
import { useDispatch } from "react-redux";
import { removeAmount, removeCartProduct } from "../../Redux/ProductAdminSlice/ProductSlice";
import { enqueueSnackbar } from "notistack";
import styles from "../../styles/cart.module.css"
import dayjs from "dayjs";

export const CartProduct = ({ cart, setCart }) => {
  const dispatch = useDispatch();

  const removeCart = (id,price) => {
    axios
      .delete(`${process.env.REACT_APP_BASEURL}/cart/remove/${id}`, {
        withCredentials: true,
      })
      .then((res) => {
        enqueueSnackbar(res.data.message,{variant:"success"});
        setCart((prev) => prev.filter((product) => product?.product?._id !== id));
        dispatch(removeCartProduct(id));
        dispatch(removeAmount(price));
      })
      .catch((error) => {
        console.error("Error removing item from cart:", error.message);
      });
  };

  return (
    <Box
    className={styles.CartProductBox}
      sx={{
        "&:hover": {
          boxShadow: "0 12px 32px rgba(0, 0, 0, 0.15)",
        },
      }}
    >
      <Grid container spacing={3} sx={{ alignItems: "center" }}>
        {/* Product Image */}
        <Grid
          item
          xs={12}
          sm={4}
          md={3}
          className={styles.flex}
        >
          <CardMedia
            component="img"
            image={cart?.product?.image?.[0]}
            alt={cart?.product?.productName}
            sx={{
              width: { xs: "200px", sm: "150px" },
            }}
            className={styles.img}
          />
        </Grid>

        {/* Product Details */}
        <Grid item xs={12} sm={8} md={6}>
          <Typography
            className={styles.textFormat1}
          >
            {cart?.product?.productName}
          </Typography>
          <Typography
            sx={{
              fontSize: "14px",
              color: "#555",
              marginBottom: "12px",
              lineHeight: 1.6,
            }}
          >
            {cart?.product?.description?.slice(0, 50)}...
          </Typography>

          {/* Pricing */}
          <Typography
            sx={{
              fontSize: "18px",
              fontWeight: "700",
              color: "#2c3e50",
              marginBottom: "12px",
            }}
          >
            ${cart?.product?.offerPrice}
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
            <span style={{ color: "#ff4081", marginLeft: "8px" }}>
              {cart?.product?.discount}% OFF
            </span>
          </Typography>

          {/* Delivery Date */}
          <Typography
            sx={{
              fontSize: "14px",
              color: "#4caf50",
              display: "flex",
              alignItems: "center",
            }}
          >
            <CheckIcon sx={{ fontSize: "18px", marginRight: "6px" }} />
            Delivery by{" "}
            <span style={{ fontWeight: "600", marginLeft: "4px" }}>
              {dayjs(new Date().getTime()).add(7,"day").format("DD MMM,YYYY")}
            </span>
          </Typography>
        </Grid>

        {/* Actions */}
        <Grid
          item
          xs={12}
          md={3}
          sx={{
            display: "flex",
            justifyContent: { xs: "center", md: "flex-end" },
          }}
        >
          <Button
            variant="contained"
            className={styles.removeButton}
            sx={{
              "&:hover": {
                background: "linear-gradient(135deg, #ff4081, #ff5a5f)",
                boxShadow: "0 6px 16px rgba(255, 64, 129, 0.5)",
              },
            }}
            onClick={() => removeCart(cart?.product?._id,cart?.product?.offerPrice)}
          >
            Remove
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};
