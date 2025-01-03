import { Box, Button, CardMedia, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export const Hero = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        minHeight: { xs: "48vh", sm: "40vh", md: "100vh" },
        width: "100%",
        backgroundImage: `url("https://cdn.shopify.com/s/files/1/0577/9675/5633/files/leo_mtdanstore_h2-slide.png?v=1640138612")`,
        position: "relative",
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
        flexDirection: "column",
        padding: { xs: 2, sm: 3 },
      }}
    >
      {/* Animated Product Image */}
      <motion.div
        initial={{ x: "-20vw", opacity: 0 }}
        animate={{ x: 0, opacity: 1, transition: { duration: 1.2 } }}
      >
        <CardMedia
          component="img"
          src="https://cdn.shopify.com/s/files/1/0577/9675/5633/files/leo_mtdanstore_h2-slide-item.png?v=1640138893"
          sx={{
            width: { xs: "180px", sm: "350px", md: "550px", lg: "700px" },
            height: "auto",
            padding: { xs: 1, sm: 2, md: 3 },
            borderRadius: "16px",
            margin: "0 auto",
          }}
        />
      </motion.div>

      {/* Shop Now Button */}
      <motion.div
        initial={{ y: "5vh", opacity: 0 }}
        animate={{ y: 0, opacity: 1, transition: { duration: 0.8 } }}
       
      >
        <Button
          variant="contained"
          sx={{
            padding: { xs: "8px 16px", sm: "10px 20px", md: "12px 24px" },
            fontSize: { xs: "12px", sm: "14px", md: "16px" },
            backgroundColor: "#000",
            color: "#fff",
            borderRadius: "10px",
            textTransform: "none",
            "&:hover": {
              backgroundColor: "#333",
            },
          }}
          onClick={() => navigate("/explore-products")}
        >
          Shop Now
        </Button>
      </motion.div>

      {/* Text Section */}
      <Box
        sx={{
          position: "absolute",
          top: { xs: "4%", sm: "8%", md: "10%", lg: "12%" },
          left: "50%",
          transform: "translateX(-50%)",
          textAlign: "center",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          gap: { xs: "12px", sm: "20px", md: "32px" },
          px: 2,
        }}
      >
        {/* Text Items */}
        {["ZONTES 310T", "125 G1 SMOKE", "USD 14.99"].map((text, index) => (
          <Typography
            key={index}
            variant="h6"
            sx={{
              fontWeight: 700,
              color: "white",
              fontSize: { xs: "12px", sm: "1rem", md: "1.3rem", lg: "1.5rem" },
              letterSpacing: "0.05em",
            }}
          >
            <motion.div
              initial={{ y: "2vh", opacity: 0 }}
              animate={{
                y: 0,
                opacity: 1,
                transition: { duration: 0.8 + index * 0.2 },
              }}
            >
              {text}
            </motion.div>
          </Typography>
        ))}
      </Box>
    </Box>
  );
};
