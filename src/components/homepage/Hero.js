import { Box, Button, CardMedia, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import styles from "../../styles/HomeHero.module.css";

export const Hero = () => {
  const navigate = useNavigate();

  return (
    <Box
      className={styles.hero}
      sx={{
        minHeight: { xs: "48vh", sm: "59vh", md: "86vh", lg: "90vh" },
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
          }}
        />
      </motion.div>

      {/* Shop Now Button */}
      <Box
        className={styles.shopBox}
        sx={{
          bottom: { xs: "4%", sm: "8%", md: "10%", lg: "16%" },
        }}
      >
        <motion.div
          initial={{ y: "5vh", opacity: 0 }}
          animate={{ y: 0, opacity: 1, transition: { duration: 0.8 } }}
        >
          <Button
            variant="contained"
            className={styles.shopBtn}
            sx={{
              padding: { xs: "8px 16px", sm: "10px 20px", md: "12px 24px" },
              fontSize: { xs: "12px", sm: "14px", md: "16px" },
            }}
            onClick={() => navigate("/explore-products")}
          >
            Shop Now
          </Button>
        </motion.div>
      </Box>

      {/* Text Section */}
      <Box
        className={styles.text}
        sx={{
          top: { xs: "4%", sm: "8%", md: "10%", lg: "10%" },
          gap: { xs: "12px", sm: "20px", md: "32px" },
        }}
      >
        {/* Text Items */}
        {["ZONTES 310T", "125 G1 SMOKE", "USD 14.99"].map((text, index) => (
          <Typography
            key={index}
            variant="h6"
            className={styles.HomeHeroTypography}
            sx={{
              fontSize: { xs: "12px", sm: "1rem", md: "1.3rem", lg: "1.5rem" },
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
