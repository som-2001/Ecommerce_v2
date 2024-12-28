import { Box } from "@mui/material";
import OrderComponent from "../components/order/OrderComponent";
import { HomeNavbar } from "../components/HomeNavbar";

export function Order() {
  return (
    <Box sx={{overflowX:"hidden"}}>
      <HomeNavbar />
      <Box sx={{width:"100vw",display:"flex",justifyContent:"center",alignItems:"center",}}>
        <OrderComponent />
      </Box>
    </Box>
  );
}
export default Order;
