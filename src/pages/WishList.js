import React from 'react';
import { Grid, Typography, Box } from '@mui/material';
import { RenderCard } from '../components/productCard/RenderCard';

import Footer from '../components/Footer';

// Sample data (replace this with your actual Bike data)
const Bike = [
  { id: 1, name: "Yamaha R15", price: 150000, brand: "Yamaha", engine: "150cc", image: '../images/product_1.jpg' },
  { id: 2, name: "KTM Duke 200", price: 200000, brand: "KTM", engine: "200cc", image: '../images/product_2.jpg' },
];

function WishList() {
  return (

  <>
   
    <Box
      sx={{
        backgroundColor: "#f9f9f9",
        minHeight: "100vh",
        p: { xs: 1, sm: 4, md: 6 },
      }}
    >
      <Typography
        variant="h4"
        sx={{
          fontWeight: "bold",
          mb: 4,
          textAlign: "center",
        
        }}
        color="text.secondary"
      >
        My Wishlist (2 Items)
      </Typography>
      <Grid container spacing={1}>
        {Bike.length > 0 ? (
          Bike.map((bike) => (
            <Grid
              item
              xs={6}
              sm={6}
              md={4}
              lg={3}
              key={bike.id}
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <RenderCard bike={bike} />
            </Grid>
          ))
        ) : (
          <Typography
            variant="h6"
            sx={{
              textAlign: 'center',
              width: '100%',
              mt: 4,
              color: "#555",
            }}
          >
            No items in your wishlist!
          </Typography>
        )}
      </Grid>
    </Box>
    <Footer/>
  </>    
  );
}

export default WishList;
