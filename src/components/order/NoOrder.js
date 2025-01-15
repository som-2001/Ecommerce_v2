import { Box, CardMedia, Typography } from "@mui/material";


export const NoOrder = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        
        width:"100vw",
        flexDirection:"column"
      }}
    >
      <CardMedia
        component="img"
        image="../../images/cart-empty.gif"
        alt="Empty Cart"
        sx={{ width: { xs: "300px", sm: "550px" } }}
      />
      <Typography variant="h6" color="text.secondary">
        No orders you have made.
      </Typography>
    </Box>
  );
};
