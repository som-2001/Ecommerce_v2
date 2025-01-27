import { Box, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import styles from "../../styles/Explore.module.css";

export const ExploreNow = () => {
  const navigate = useNavigate();

  return (
    <Box className={styles.hero} sx={{ p: { xs: 4, sm: 10 } }}>
      <Box className={styles.layout}>
        <Typography variant="h6" color="#73b2eb" sx={{ mb: 4 }}>
          COLLECTIONS
        </Typography>
        <Typography
          variant="h3"
          color="whitesmoke"
          sx={{ fontSize: { xs: "1.1rem", sm: "2rem", md: "2.2rem" } }}
        >
          EXPLORE OUR BIKE COLLECTIONS
        </Typography>
        <Button
          variant="contained"
          className={styles.btn}
          onClick={(e) => navigate("/explore-products")}
        >
          Explore now
        </Button>
      </Box>
    </Box>
  );
};
