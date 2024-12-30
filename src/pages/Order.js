import { Box } from "@mui/material";
import OrderComponent from "../components/order/OrderComponent";


export function Order() {
  return (
    <Box sx={{overflowX:"hidden"}}>
      
      <Box sx={{width:"100vw",display:"flex",justifyContent:"center",alignItems:"center",}}>
        <OrderComponent />
      </Box>
    </Box>
  );
}
export default Order;
