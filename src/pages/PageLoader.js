import { Box } from "@mui/material"
import {ScaleLoader} from 'react-spinners';

export const PageLoader=()=>{
    return(
        <Box sx={{minHeight:"100vh",display:"flex",justifyContent:"center",alignItems:"center",backgroundColor:"black"}}>   
            <ScaleLoader color="#f6f6f6"/>
        </Box>
    )
}