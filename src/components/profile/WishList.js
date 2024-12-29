import { Box, CardMedia, Grid, Typography } from "@mui/material"
import { useNavigate } from "react-router-dom"

export const WishList=()=>{
    const navigate=useNavigate();

    return(
        <Box sx={{ width: "77vw" }}>
        <Typography variant="h6" color="text.secondary" gutterBottom>
          My WishList (2)
          (<span style={{fontSize:"1.0rem",textDecoration:"underline",cursor:"pointer",color:"#64b5f6"}}
          onClick={(e)=>navigate("/wishlist")}
          >see more</span>)
        </Typography>
  
        <Box sx={{ border: "1px solid #dfdfdf", padding: 2, my: 2 }}>
         <Grid container spacing={2}> 
            <Grid item xs={12} sm={12} md={3} lg={2}>
                <CardMedia component="img" image="../images/product_1.jpg" 
                sx={{ width: "180px", height: "100px" }}
                />
            </Grid>
            
            <Grid item xs={12} sm={12} md={4} sx={{display:"flex",justifyContent:"center",flexDirection:"column"}}>
                <Typography variant="body1">INSANESWORM 240 TC Microfiber Single Floral Flat Bedsheet</Typography>
                <Typography variant="body2">$23300 <span style={{textDecoration:"line-through"}}>$23523</span> 25% off</Typography>
            </Grid>
        </Grid>
        </Box>
        <Box sx={{ border: "1px solid #dfdfdf", padding: 2, my: 2 }}>
         <Grid container spacing={2}> 
            <Grid item xs={12} sm={12} md={3} lg={2}>
                <CardMedia component="img" image="../images/product_1.jpg" 
                sx={{ width: "180px", height: "100px" }}
                />
            </Grid>
            
            <Grid item xs={12} sm={12} md={4} sx={{display:"flex",justifyContent:"center",flexDirection:"column"}}>
                <Typography variant="body1">INSANESWORM 240 TC Microfiber Single Floral Flat Bedsheet</Typography>
                <Typography variant="body2">$23300 <span style={{textDecoration:"line-through"}}>$23523</span> 25% off</Typography>
            </Grid>
        </Grid>
        </Box>
  
      </Box>
    )
}