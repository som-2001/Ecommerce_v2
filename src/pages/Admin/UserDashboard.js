import { Box, Typography } from "@mui/material"
import UserTable from "../../components/Admin/Users/UserTable"

export const UserDashboard=()=>{

  
    return (
        <Box sx={{display:"flex",justifyContent:"flex-end",flexDirection:"column"}}>    
        
          <Typography variant="body1" sx={{mb:4,fontSize:"20px"}} color="text.secondary">User Dashboard</Typography>
          <UserTable />
        </Box>
    )
}