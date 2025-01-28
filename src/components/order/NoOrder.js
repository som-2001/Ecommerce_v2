import { Box, CardMedia, Typography } from "@mui/material";
import styles from '../../styles/Order.module.css'

export const NoOrder = () => {
  return (
    <Box
      className={styles.noOrderParent}
    >
      <CardMedia
        component="img"
        image="../../images/cart-empty.gif"
        alt="Empty Cart"
        sx={{ width: { xs: "300px", sm: "550px" } }}
      />
      <Typography variant="h6" color="text.secondary">
        No orders you have made.
      </Typography>
    </Box>
  );
};
