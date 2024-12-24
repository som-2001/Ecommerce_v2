import { Box, Button, Typography } from "@mui/material"

export const ExploreNow=()=>{

    return(
        <Box sx={{backgroundColor:"transparent",display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",p:10,height:"90vh"}}>
        <Box sx={{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",}}>
        <Typography variant="h6" color="#C6E4FF" sx={{mb:4}}>COLLECTIONS</Typography>
        <Typography variant="h3" color="whitesmoke" sx={{ fontSize: { xs: "1.5rem", sm: "2rem", md: "2.2rem" } }}>EXPLORE OUR BIKE COLLECTIONS</Typography>
        <Button variant="contained" sx={{borderRadius:6,padding:"19px",mb:5,backgroundColor:"#C6E4FF",color:"black",mt:5}}>Explore now</Button>     
        </Box>
      </Box>
    )

}