import { Box, CardMedia, Typography } from "@mui/material"
import styles from "../../styles/cart.module.css"

export const NoCartProduct=()=>{
    return(
        <Box className={styles.noCartBox}>
            <CardMedia component="img" image="../../images/cart-empty.gif" alt="Empty Cart" sx={{width:{xs:"300px",sm:"550px"}}}/>
            <Typography variant="h6" color="text.secondary">No Products are currently in your cart.</Typography>
        </Box>
    )
}