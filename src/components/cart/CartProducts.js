import { Box, Button, CardMedia, Grid, Typography } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";

export const CartProduct = () => {
  return (
    <Box sx={{ padding: 1, borderBottom: "1px solid #e0e0e0", marginBottom: 2 }}>
      <Grid container spacing={2} sx={{ alignItems: "center", }}>
        {/* Product Image */}
     
        <Grid item xs={12} sm={4} md={4} lg={3} sx={{ display:"flex",justifyContent:"center", alignItems: "center" }}>
          <CardMedia 
            component="img"
            image="../images/product_1.jpg"
            sx={{
              width: {xs:"250px",sm:"100px"},
              height: "140px",
              borderRadius: "8px",
              boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
            }}
          />
        </Grid>

        {/* Product Details */}
        <Grid item xs={12} sm={7} md={8} lg={4}>
          <Typography
            sx={{
              fontSize: "16px",
              fontWeight: "600",
              marginBottom: "4px",
              lineHeight: 1.4,
            }}
          >
            Royal Enfield
          </Typography>
          <Typography
            sx={{
              fontSize: "14px",
              color: "#757575",
              marginBottom: "8px",
            }}
          >
            The Roadster LifeStyle Co Men Light Blue Solid Regular Fit...
          </Typography>

          {/* Size and Quantity */}
          <Box
            sx={{
              display: "flex",
              gap: "16px",
              marginBottom: "8px",
              fontSize: "14px",
              color: "#424242",
            }}
          >
            <Typography>Size: <span style={{ fontWeight: 600 }}>40</span></Typography>
            <Typography>Qty: <span style={{ fontWeight: 600 }}>1</span></Typography>
          </Box>

          {/* Pricing */}
          <Typography
            sx={{
              fontSize: "16px",
              fontWeight: "600",
              marginBottom: "8px",
              color: "#212121",
            }}
          >
            $47,046{" "}
            <span
              style={{
                textDecoration: "line-through",
                fontWeight: 400,
                color: "#9e9e9e",
                marginLeft: "8px",
              }}
            >
              $124,453
            </span>{" "}
            <span style={{ color: "#ff4081", marginLeft: "8px" }}>58% OFF</span>
          </Typography>

          {/* Delivery Date */}
          <Typography
            variant="body2"
            sx={{
              fontSize: "14px",
              color: "#4caf50",
              display: "flex",
              alignItems: "center",
              marginBottom: "8px",
            }}
          >
            <CheckIcon sx={{ fontSize: "16px", marginRight: "4px" }} /> Delivery
            by{" "}
            <span style={{ fontWeight: 600, marginLeft: "4px" }}>4 Jan 2025</span>
          </Typography>
        </Grid>

        {/* Actions */}
        <Grid item xs={12} sm={4} md={3} lg={4} sx={{ textAlign: { xs: "left", md: "right" },display:"flex",justifyContent:"center" }}>
          <Button
            variant="outlined"
            sx={{
              fontSize: "14px",
              color: "#ff4081",
              borderColor: "#ff4081",
              padding: "4px 16px",
              textTransform: "none",
              "&:hover": {
                borderColor: "#ff4081",
                backgroundColor: "#fff5f8",
              },
            }}
          >
            Remove
          </Button>
        </Grid>
      
      </Grid>
    </Box>
  );
};
