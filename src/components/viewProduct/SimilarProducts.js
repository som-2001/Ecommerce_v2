
import {
  Box,

  Grid,
  Typography,
} from "@mui/material";

import { RenderCard } from './../productCard/RenderCard';

import styles from '../../styles/ViewProduct.module.css';

export const SimilarProducts = ({bikes,load}) => {


  return (
    <Box className={styles.similarProductsWidth}>
      <Typography className={styles.heading} sx={{ fontSize:{xs:"0.9rem",sm:"1.2rem"}, paddingLeft: {xs:3,sm:6} }}>
        Similar Products you may be interested in
      </Typography>
      <Box sx={{ padding: 4 }}>
        <Grid container spacing={3}>
          {bikes.length > 0 ? (
            bikes.map((bike) => (
              <Grid
                item
                xs={12}
                sm={6}
                md={4}
                lg={3}
                key={bike.id}
                className={styles.RenderCard}
              >
                <RenderCard bike={bike} load={load}/>
              </Grid>
            ))
          ) : (
            <Typography
              variant="body1"
            >
              Not Available Any Bike.
            </Typography>
          )}
        </Grid>
      </Box>
    
    </Box>
  );
};
