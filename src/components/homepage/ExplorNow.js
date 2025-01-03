import { Box, Button, Typography } from "@mui/material"
import { useNavigate } from "react-router-dom"

export const ExploreNow=()=>{

  const navigate=useNavigate();

    return(
        <Box sx={{backgroundColor:"transparent",display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",p:{xs:4,sm:10},height:"90vh"}}>
        <Box sx={{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",}}>
        <Typography variant="h6" color="#73b2eb" sx={{mb:4}}>COLLECTIONS</Typography>
        <Typography variant="h3" color="whitesmoke" sx={{ fontSize: { xs: "1.1rem", sm: "2rem", md: "2.2rem" } }}>EXPLORE OUR BIKE COLLECTIONS</Typography>
        <Button variant="contained" sx={{borderRadius:4,padding:"19px",mb:5,backgroundColor:"white",color:"black",mt:5}} onClick={(e)=>navigate("/explore-products")}>Explore now</Button>     
        </Box>
      </Box>
    )

}