import {
  Box,
  CardMedia,
  Grid,
  LinearProgress,
  Rating,
  TextField,
  Typography,
} from "@mui/material";

const ratings = [
  { label: "Excellent", value: 60, color: "green" },
  { label: "Good", value: 20, color: "blue" },
  { label: "Average", value: 10, color: "orange" },
  { label: "Bad", value: 10, color: "red" },
];

const reviews = [
  {
    image: "https://mui.com/static/images/avatar/1.jpg",
    name: "Grace Carey",
    rate: 4,
    comment:
      "I was a bit nervous to be buying a secondhand phone from Amazon, but I couldn’t be happier with my purchase!! I have a pre-paid data plan so I was worried that this phone wouldn’t connect with my data plan, since the new phones don’t have the physical Sim tray anymore, but couldn’t have been easier! I bought an Unlocked black iPhone 14 Pro Max in excellent condition and everything is PERFECT. It was super easy to set up and the phone works and looks great. It truly was in excellent condition. Highly recommend!!!🖤",
    date: "23th Jan, 2024",
  },
  {
    image: "https://mui.com/static/images/avatar/2.jpg",
    name: "Ronald Richards",
    rate: 5,
    comment:
      "I was a bit nervous to be buying a secondhand phone from Amazon, but I couldn’t be happier with my purchase!! ",
    date: "23th Jan, 2024",
  },
];

export const Review = () => {
  return (
    <Box sx={{ padding: 3 }}>
      <Typography sx={{ fontWeight: "600" }} gutterBottom>
        Ratings & Reviews
      </Typography>
      <Box sx={{ padding: { xs: 2, sm: 7 } }}>
        <Grid container spacing={4}>
          <Grid
            item
            xs={12}
            md={5}
            lg={3}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "whitesmoke",
                padding: 4,
                width: "200px",
              }}
            >
              <Typography variant="h4">4.8</Typography>
              <Typography variant="body2">of 125 reviews</Typography>
              <Rating name="read-only" value={4} readOnly />
            </Box>
          </Grid>
          <Grid item xs={12} md={7} lg={9}>
            <Box sx={{ marginBottom: "2rem" }}>
              <Typography variant="h6" gutterBottom>
                Ratings
              </Typography>
              {ratings.map((rating, index) => (
                <Box
                  key={index}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: "1rem",
                    marginBottom: "1rem",
                  }}
                >
                  <Typography variant="body2" sx={{ width: "80px" }}>
                    {rating.label}
                  </Typography>
                  <LinearProgress
                    variant="determinate"
                    value={rating.value}
                    sx={{
                      flex: 1,
                      height: "8px", // Set height explicitly
                      borderRadius: "5px",
                      backgroundColor: "#e0e0e0", // Base bar color
                      "& .MuiLinearProgress-bar": {
                        backgroundColor: rating.color, // Dynamic color
                      },
                    }}
                  />
                  <Typography
                    variant="body2"
                    sx={{ width: "40px", textAlign: "right" }}
                  >
                    {rating.value}%
                  </Typography>
                </Box>
              ))}
            </Box>
          </Grid>
        </Grid>
      </Box>
      <TextField placeholder="Leave comment" fullWidth />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          mt: 6,
        }}
      >
        {reviews &&
          reviews.map((data, index) => (
            <Grid
              container
              spacing={2}
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                my: 2,
                backgroundColor: "whitesmoke",
                padding: "30px 0px 60px 0px",
                width: {xs:"100%",md:"70%"}
              }}
            >
              <Grid
                item
                xs={4}
                sm={2}
                md={1}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <CardMedia
                  component="img"
                  image={data.image}
                  sx={{ width: "60px", borderRadius: 10 }}
                />
              </Grid>
              <Grid item xs={8} sm={10} md={11}>
                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                  <Typography variant="body1" sx={{ fontWeight: "700" }}>
                    {data.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{mr:2}}>
                    {data.date}
                  </Typography>
                </Box>
                <Rating name="read-only" value={data.rate} readOnly />
                
              </Grid>
              <Grid sx={{padding:3}}>
                {data.comment}
              </Grid>
            </Grid>
          ))}
      </Box>
    </Box>
  );
};
