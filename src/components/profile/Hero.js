import { Box, Button, CardMedia, Grid, Typography } from "@mui/material";

export const Hero = () => {
  return (
    <Box sx={{ width: "92vw", padding: { xs: 2, sm: 5 } }}>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box>
          <Typography variant="h5">Welcome, Someswar</Typography>
          <Typography variant="body2" color="text.secondary">
            Fri, 27 Dec 2024
          </Typography>
        </Box>
        <Box>
          <Button
            variant="body1"
            sx={{
              backgroundColor: "black",
              color: "white",
              padding: 1.4,
              width: "120px",
              borderRadius: 2,
            }}
          >
            Logout
          </Button>
        </Box>
      </Box>

      {/* linear-gradient  */}
      <Box
        sx={{
          backgroundImage: "linear-gradient(to right, #9d9dff, #ffffbe);",
          height: "90px",
          my: 2,
          padding: 2,
          borderRadius: "9px 9px 0px 0px",
        }}
      >
        <Grid container spacing={2}>
          <Grid
            item
            xs={4}
            sm={2}
            md={2}
            lg={1}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <CardMedia
              component="img"
              image="https://mui.com/static/images/avatar/1.jpg"
              sx={{ width: "80px", height: "80px", borderRadius: 10 }}
            />
          </Grid>
          <Grid
            item
            xs={8}
            sm={6}
            md={4}
            lg={4}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Typography variant="h6">Someswar Gorai</Typography>
            <Typography variant="body2" color="text.secondary">
              Someswar Gorai@gmail.com
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};
