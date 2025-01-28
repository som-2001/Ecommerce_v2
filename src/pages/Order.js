import { Box } from "@mui/material";
import OrderComponent from "../components/order/OrderComponent";
import styles from "../styles/Order.module.css";

export function Order() {
  return (
    <Box className={styles.orderPageParent}>
      <Box className={styles.OrderComponentWrapperClass}>
        <OrderComponent />
      </Box>
    </Box>
  );
}
export default Order;
