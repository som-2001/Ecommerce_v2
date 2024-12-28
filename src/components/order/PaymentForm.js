import { Box, Typography, CardMedia, Grid, Button, Divider } from "@mui/material";

export const PaymentForm = () => {
  return (
    <Box sx={{ padding: { xs: 2, sm: 4, md: 6 }, width: {xs:"88vw",md:"70vw"}, margin: "0 auto" }}>
      <Grid container spacing={4}>
        {/* Summary Section */}
        <Grid item xs={12} md={6}>
          <Typography variant="h5" sx={{ mb: 2, fontWeight: "bold" }}>
            Summary
          </Typography>

          <Box sx={{ backgroundColor: "whitesmoke", padding: 2, borderRadius: 2, mb: 3 }}>
            <Grid container spacing={2} alignItems="center">
              <Grid item xs={3}>
                <CardMedia
                  component="img"
                  image="../images/product_1.jpg"
                  sx={{ width: "60px", height: "60px", borderRadius: 1 }}
                />
              </Grid>
              <Grid item xs={6}>
                <Typography variant="body1" fontWeight="bold">
                  Bike Model 1
                </Typography>
              </Grid>
              <Grid item xs={3}>
                <Typography variant="body1" fontWeight="bold">
                  $1399
                </Typography>
              </Grid>
            </Grid>
          </Box>

          {/* Address Section */}
          <Box sx={{ mb: 2 }}>
            <Typography variant="body2" color="text.secondary">
              Address
            </Typography>
            <Typography variant="body2" sx={{ fontWeight: "bold", color: "text.primary" }}>
              1131 Dusty Townline, Jacksonville, TX 40322
            </Typography>
          </Box>

          {/* Shipment Section */}
          <Box sx={{ mb: 3 }}>
            <Typography variant="body2" color="text.secondary">
              Shipment Method
            </Typography>
            <Typography variant="body2" sx={{ fontWeight: "bold", color: "text.primary" }}>
              Free
            </Typography>
          </Box>

          {/* Price Breakdown */}
          <Box>
            <Grid container spacing={2} sx={{ mb: 1 }}>
              <Grid item xs={6}>
                <Typography variant="body1">Subtotal</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="body1" textAlign="right">
                  $2345
                </Typography>
              </Grid>
            </Grid>
            <Grid container spacing={2} sx={{ mb: 1 }}>
              <Grid item xs={6}>
                <Typography variant="body1">Estimated Tax</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="body1" textAlign="right">
                  $50
                </Typography>
              </Grid>
            </Grid>
            <Grid container spacing={2} sx={{ mb: 1 }}>
              <Grid item xs={6}>
                <Typography variant="body1">Shipping & Handling</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="body1" textAlign="right">
                  $29
                </Typography>
              </Grid>
            </Grid>
            <Divider sx={{ my: 1 }} />
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <Typography variant="h6" fontWeight="bold">
                  Total
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="h6" fontWeight="bold" textAlign="right">
                  $2426
                </Typography>
              </Grid>
            </Grid>
          </Box>
        </Grid>

        {/* Payment Section */}
        <Grid item xs={12} md={6}>
          <Typography variant="h5" sx={{ mb: 3, fontWeight: "bold" }}>
            Payment
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 3 }}>
            <CardMedia
              component="img"
              image="../images/card.png"
              sx={{ width: "300px", maxWidth: "300px", borderRadius: 2 }}
            />
            <Button
              sx={{
                backgroundColor: "black",
                padding: "12px 24px",
                color: "white",
                fontWeight: "bold",
                textTransform: "uppercase",
                "&:hover": { backgroundColor: "#333" },
              }}
            >
              Pay
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};
