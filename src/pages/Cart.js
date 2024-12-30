import { Box, Grid } from "@mui/material"
import { CartProduct } from "../components/cart/CartProducts"
import { Amount } from "../components/cart/Amout"
import { HomeNavbar } from "../components/HomeNavbar"


export const Cart=()=>{
    return(
        <Box sx={{display:'flex',justifyContent:"center",flexDirection:"column",alignItems:"center",}}>
            <HomeNavbar/>

            <Box sx={{width:"77vw",my:5}}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={7} lg={9}>
                    <CartProduct/>
                </Grid>
                <Grid item xs={12} md={5} lg={3}>
                    <Amount/>
                </Grid>
            </Grid>
            </Box>     
        
        </Box>
    )
}