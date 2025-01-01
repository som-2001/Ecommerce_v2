import { Box } from "@mui/material"
import OrderTable from "../../components/Admin/Order/OrderTable"

export const OrderDashboard=()=>{
    return (
        <Box sx={{display:"flex",justifyContent:"flex-end"}}>    
        
          <OrderTable />
        </Box>
    )
}