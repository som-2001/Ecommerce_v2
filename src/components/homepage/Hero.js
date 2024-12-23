import { Box, CardMedia, Typography } from "@mui/material"
import { motion } from 'motion/react';

export const Hero=()=>{
    return(
    <Box
        sx={{
          minHeight: { xs: "50vh", sm: "70vh", md: "80vh", lg: "100vh" },
          width: "100%",
          backgroundImage: `url("https://cdn.shopify.com/s/files/1/0577/9675/5633/files/leo_mtdanstore_h2-slide.png?v=1640138612")`,
          position: "relative",
          backgroundSize: "contain",
          backgroundPosition: "center",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          
        }}
      >
        {/* Animated Product Image */}
        <motion.div
          initial={{ x: "-15vw", opacity: 0.2 }}
          animate={{ x: 0, opacity: 1, transition: { duration: 1 } }}
        >
          <CardMedia
            component="img"
            src="https://cdn.shopify.com/s/files/1/0577/9675/5633/files/leo_mtdanstore_h2-slide-item.png?v=1640138893"
            sx={{
              width: { xs: "250px", sm: "500px", md: "700px", lg: "900px" },
              height: "auto",
            }}
          />
        </motion.div>

        {/* Text Section */}
        <Box
          sx={{
            position: "absolute",
            bottom: "5%",
            left: "50%",
            transform: "translateX(-50%)",
            textAlign: "center",
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            gap: { xs: "20px", sm: "40px", md: "56px" },
          }}
        >
          {/* Text Items */}
          <Typography
            variant="h6"
            sx={{
              fontWeight: "600",
              color: "white",
              fontSize: { xs: "0.8rem", sm: "1rem", md: "1.2rem", lg: "1.4rem" },
            
            }}
          >
            <motion.div
              initial={{ y: "2vh", opacity: 0 }}
              animate={{ y: 0, opacity: 1, transition: { duration: 1 } }}
            >
              ZONTES 310T
            </motion.div>
          </Typography>

          <Typography
            variant="h6"
            sx={{
              fontWeight: "600",
              color: "white",
              fontSize: { xs: "0.8rem", sm: "1rem", md: "1.2rem", lg: "1.4rem" },
            }}
          >
            <motion.div
              initial={{ y: "2vh", opacity: 0 }}
              animate={{ y: 0, opacity: 1, transition: { duration: 1 } }}
            >
              125 G1 SMOKE
            </motion.div>
          </Typography>

          <Typography
            variant="h6"
            sx={{
              fontWeight: "600",
              color: "white",
              fontSize: { xs: "0.8rem", sm: "1rem", md: "1.2rem", lg: "1.4rem" },
            }}
          >
            <motion.div
              initial={{ y: "2vh", opacity: 0 }}
              animate={{ y: 0, opacity: 1, transition: { duration: 1 } }}
            >
              USD 14.99
            </motion.div>
          </Typography>
        </Box>
      </Box>
    )
}