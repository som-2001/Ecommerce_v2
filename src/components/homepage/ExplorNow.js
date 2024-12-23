import { Box, Button, Typography } from "@mui/material"

export const ExploreNow=()=>{

    return(
        <Box sx={{backgroundColor:"transparent",display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",p:10,height:"90vh"}}>
        <Box sx={{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",}}>
        <Typography variant="h6" color="#C6E4FF" sx={{mb:4}}>COLLECTIONS</Typography>
        <Typography variant="h3" color="whitesmoke"><span>EXPLORE</span> OUR BIKE </Typography>
        <Typography variant="h3" color="#C6E4FF" >COLLECTION</Typography>    
        <Button variant="contained" sx={{borderRadius:6,padding:"19px",mb:5,backgroundColor:"#C6E4FF",color:"black",mt:5}}>Explore now</Button>     
        </Box>
      </Box>
    )

}