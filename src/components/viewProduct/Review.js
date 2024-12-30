import {
  Box,
  CardMedia,
  Grid,
  LinearProgress,
  Rating,
  TextField,
  Typography,
  Button,
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
    <Box sx={{ padding: 4,width:{xs:"90vw",lg:"57vw" }}}>
      {/* Section Title */}
      <Typography
        variant="h5"
        sx={{ fontWeight: "bold", mb: 3, color: "#333", textAlign: "center" }}
      >
        Ratings & Reviews
      </Typography>

      {/* Ratings Overview */}
      <Grid container spacing={4}>
        <Grid
          item
          xs={12}
          md={4}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              backgroundColor: "white",
              borderRadius: "16px",
              padding: 3,
              boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.1)",
              textAlign: "center",
            }}
          >
            <Typography variant="h3" sx={{ fontWeight: "bold", color: "#1565c0" }}>
              4.8
            </Typography>
            <Typography variant="body2" sx={{ color: "#666" }}>
              of 125 reviews
            </Typography>
            <Rating name="read-only" value={4.8} precision={0.1} readOnly />
          </Box>
        </Grid>

        <Grid item xs={12} md={8}>
          <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
            Ratings Breakdown
          </Typography>
          {ratings.map((rating, index) => (
            <Box
              key={index}
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 2,
                mb: 2,
              }}
            >
              <Typography variant="body2" sx={{ width: "80px", fontWeight: "bold" }}>
                {rating.label}
              </Typography>
              <LinearProgress
                variant="determinate"
                value={rating.value}
                sx={{
                  flex: 1,
                  height: 10,
                  borderRadius: 5,
                  "& .MuiLinearProgress-bar": {
                    backgroundColor: rating.color,
                  },
                }}
              />
              <Typography variant="body2" sx={{ width: "40px", textAlign: "right" }}>
                {rating.value}%
              </Typography>
            </Box>
          ))}
        </Grid>
      </Grid>

      {/* Add Review */}
      <Box
        sx={{
          display:"flex",
          flexDirection:'column',
          justifyContent:'center',
          alignItems:'center',
          backgroundColor: "white",
          padding: 3,
          borderRadius: "16px",
          boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.1)",
          mt: 5,
        }}
      >
        <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2,justifyContent:"flex-start" }}>
          Leave a Review
        </Typography>
        <TextField
          placeholder="Write your comment here..."
          fullWidth
          multiline
          rows={4}
          sx={{ mb: 2 }}
        />
        <Button variant="contained" color="primary" sx={{ padding: '1rem',
                  backgroundColor: 'black',
                  color: 'white',
                  borderRadius: 3,
                  '&:hover': {
                    backgroundColor: '#0d47a1',
                  }, }}>
          Submit Review
        </Button>
      </Box>

      {/* Reviews Section */}
      <Box sx={{ mt: 5 }}>
        {reviews.map((data, index) => (
          <Box
            key={index}
            sx={{
              backgroundColor: "white",
              padding: 3,
              borderRadius: "16px",
              boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.1)",
              mb: 3,
            }}
          >
            <Grid container spacing={2}>
              <Grid
                item
                xs={3}
                sm={2}
                md={1}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <CardMedia
                  component="img"
                  image={data.image}
                  alt={data.name}
                  sx={{
                    width: "60px",
                    height: "60px",
                    borderRadius: "50%",
                    objectFit: "cover",
                  }}
                />
              </Grid>
              <Grid item xs={9} sm={10} md={11}>
                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                  <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                    {data.name}
                  </Typography>
                  <Typography variant="body2" sx={{ color: "#888" }}>
                    {data.date}
                  </Typography>
                </Box>
                <Rating name="read-only" value={data.rate} readOnly size="small" />
                <Typography variant="body2" sx={{ mt: 1, color: "#555" }}>
                  {data.comment}
                </Typography>
              </Grid>
            </Grid>
          </Box>
        ))}
      </Box>
    </Box>
  );
};
