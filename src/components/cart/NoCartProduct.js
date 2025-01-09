import { Box, CardMedia, Typography } from "@mui/material"

export const NoCartProduct=()=>{
    return(
        <Box sx={{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:'column'}}>
            <CardMedia component="img" image="../../images/cart-empty.gif" alt="Empty Cart" sx={{width:{xs:"300px",sm:"550px"}}}/>
            <Typography variant="h6" color="text.secondary">No Products are currently in your cart.</Typography>
        </Box>
    )
}