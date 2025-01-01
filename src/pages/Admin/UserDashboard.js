import { Box } from "@mui/material"
import UserTable from "../../components/Admin/Users/UserTable"

export const UserDashboard=()=>{
    return (
        <Box sx={{display:"flex",justifyContent:"flex-end"}}>    
        
          <UserTable />
        </Box>
    )
}