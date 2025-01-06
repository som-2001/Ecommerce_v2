
import {
  Box,

  Grid,
  Typography,
} from "@mui/material";

import Footer from "../Footer";
import { RenderCard } from './../productCard/RenderCard';



export const SimilarProducts = ({bikes}) => {


  return (
    <Box>
      <Typography  sx={{ fontWeight: "600", fontSize:{xs:"0.9rem",sm:"1.2rem"}, paddingLeft: {xs:3,sm:6},mt:3 }}>
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
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  my: 2,
                }}
              >
                <RenderCard bike={bike}/>
              </Grid>
            ))
          ) : (
            <Typography
              variant="body1"
              sx={{ textAlign: "center", width: "100%", color: "whitesmoke" }}
            >
              No bikes match your filters.
            </Typography>
          )}
        </Grid>
      </Box>
      <Footer/>
    </Box>
  );
};
