import { Box, CardMedia, Typography } from "@mui/material";
import { motion } from "motion/react";

export const Hero = () => {
  return (
    <Box
      sx={{
        minHeight: { xs: "50vh", sm: "70vh", md: "80vh", lg: "100vh" },
        width: "100%",
        backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.7)), url("https://cdn.shopify.com/s/files/1/0577/9675/5633/files/leo_mtdanstore_h2-slide.png?v=1640138612")`,
        position: "relative",
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
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
            width: { xs: "200px", sm: "400px", md: "600px", lg: "750px" },
            height: "auto",
            padding: { xs: 2, sm: 3, md: 4 },
            borderRadius: 2,
          }}
        />
      </motion.div>

      {/* Text Section */}
      <Box
        sx={{
          position: "absolute",
          bottom: "8%",
          left: "50%",
          transform: "translateX(-50%)",
          textAlign: "center",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          gap: { xs: "12px", sm: "24px", md: "36px" },
          px: 2,
        }}
      >
        {/* Text Items */}
        {["ZONTES 310T", "125 G1 SMOKE", "USD 14.99"].map((text, index) => (
          <Typography
            key={index}
            variant="h6"
            sx={{
              fontWeight: "700",
              color: "white",
              fontSize: {
                xs: "0.9rem",
                sm: "1.2rem",
                md: "1.5rem",
                lg: "1.8rem",
              },
              letterSpacing: "0.1em",
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
