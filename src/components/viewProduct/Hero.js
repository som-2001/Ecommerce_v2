import React, { useState } from 'react';
import { Box, Grid, Typography, Button, TextField, Chip } from '@mui/material';
import { Speed, DirectionsBike, LocalGasStation, Build } from '@mui/icons-material';
import { HomeNavbar } from './../HomeNavbar';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import Inventory2Icon from '@mui/icons-material/Inventory2';
import VerifiedIcon from '@mui/icons-material/Verified';

const product = {
  id: 1,
  name: 'Bike Model X',
  description: 'Enhanced capabilities thanks toan enlarged display of 6.7 inchesand work without rechargingthroughout the day. Incredible photosas in weak, yesand in bright lightusing the new systemwith two cameras more...',
  price: '$4,999',
  images: [
    '../images/product_1.jpg',
    '../images/product_2.jpg',
    '../images/product_3.jpg',
    '../images/product_4.jpg',
  ],
  sizes: ['Small', 'Medium', 'Large', 'X-Large'],
  colors: ['Red', 'Blue', 'Green', 'Black'],
};

const specifications = [
  { icon: <Speed />, label: 'Top Speed', value: '150 km/h' },
  { icon: <DirectionsBike />, label: 'Engine Type', value: '4-Stroke, Single Cylinder' },
  { icon: <LocalGasStation />, label: 'Mileage', value: '45 km/l' },
  { icon: <Build />, label: 'Max Power', value: '19.3 HP @ 8500 RPM' },
  { icon: <Build />, label: 'Torque', value: '14 Nm @ 6500 RPM' },
  { icon: <Build />, label: 'Fuel Capacity', value: '12 Liters' },
];

const Hero = () => {
  const [selectedImage, setSelectedImage] = useState(product.images[0]);
  const [selectedColor, setSelectedColor] = useState('');


  return (
    <Box >
      <HomeNavbar />
      <Box sx={{ padding: '2rem',my:5 }}>
        <Grid container spacing={4}>
          {/* Left Side: Images */}
          <Grid item xs={12} md={6}>
            <Box sx={{ textAlign: 'center' }}>
              {/* Main Image */}
              <img
                src={selectedImage}
                alt={product.name}
                style={{ width: '95%', maxHeight: '600px', objectFit: 'contain', borderRadius: '8px' }}
              />
              {/* Thumbnails */}
              <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '1rem' }}>
                {product.images.map((img, index) => (
                  <img
                    key={index}
                    src={img}
                    alt={`Thumbnail ${index + 1}`}
                    style={{
                      width: '60px',
                      height: '60px',
                      objectFit: 'cover',
                      margin: '0 8px',
                      border: selectedImage === img ? '2px solid gold' : '2px solid gray',
                      borderRadius: '4px',
                      cursor: 'pointer',
                    }}
                    onClick={() => setSelectedImage(img)}
                  />
                ))}
              </Box>
            </Box>
          </Grid>

          {/* Right Side: Product Details */}
          <Grid item xs={12} md={6}>
            <Typography variant="h4" gutterBottom>
              {product.name}
            </Typography>
            
            <Typography variant="body1" sx={{ color: 'black', marginBottom: '1rem' }}>
              {product.price} <span style={{textDecoration:'line-through',color:"grey"}}>{product.price}</span>
            </Typography>

            <Box sx={{ marginBottom: '1rem',display:"flex",gap:"20px",alignItems:"center",mb:4 }}>
              <Typography variant="body1" gutterBottom>
                Select Color:
              </Typography>
              <Box sx={{ display: 'flex', gap: '1rem' }}>
                {product.colors.map((color, index) => (
                  <Box
                    key={index}
                    sx={{
                      width: '30px',
                      height: '30px',
                      backgroundColor: color.toLowerCase(),
                      border: selectedColor === color ? '3px solid gold' : '2px solid gray',
                      borderRadius: '50%',
                      cursor: 'pointer',
                      transition: 'transform 0.2s',
                      '&:hover': {
                        transform: 'scale(1.1)',
                      },
                    }}
                    onClick={() => setSelectedColor(color)}
                  />
                ))}
              </Box>
              {selectedColor && (
                <Typography variant="body2" sx={{ marginTop: '0.5rem' }}>
                  Selected Color: <strong>{selectedColor}</strong>
                </Typography>
              )}
            </Box>


            {/* Highlighted Specifications Chips */}
            <Box sx={{ marginBottom: '1rem', display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
              {specifications.map((spec, index) => (
                <Chip
                  key={index}
                  icon={spec.icon}
                  label={`${spec.label}: ${spec.value}`}
                  sx={{
                    backgroundColor: 'whitesmoke',
                    color: 'black',
                    fontWeight: 'bold',
                    fontSize: '0.9rem',
                    padding: 3.5,
                    borderRadius: '20px',
                    '&:hover': {
                      backgroundColor: '#1565c0',
                    },
                  }}
                />
              ))}
            </Box>
            <Typography variant="body2" color='text.secondary' gutterBottom>
              {product.description}
            </Typography>

            {/* Buttons */}
            <Box sx={{ display: 'flex', gap: '1rem', marginTop: '2rem' }}>
              <Button
                variant="contained"
                sx={{
                  flex: 1,
                  padding: 2,
                  backgroundColor: 'black',
                  color: 'white',
                  borderRadius: 3,
                 
                }}
              >
                Buy Now
              </Button>
              <Button
                variant="outlined"
                sx={{
                  flex: 1,
                  borderColor: 'black',
                  color: 'black',
                  borderRadius: 3,
                
                }}
              >
                Add to Cart
              </Button>
            </Box>

            <Box sx={{display: 'flex', flexDirection:{xs:"column",sm:"row"}, gap: '4rem',mt:4,justifyContent:"center"}}>
                <Box sx={{display: 'flex', gap: '1rem',justifyContent:'center',alignItems:"center"}}>
                   <LocalShippingIcon sx={{padding:2,backgroundColor:"whitesmoke",borderRadius:2}}/>
                   <Box sx={{display: 'flex',flexDirection:"column"}}>
                      <Typography variant='body1' color="text.secondary">Free Delivery</Typography>
                      <Typography variant='body2'>1-2 day</Typography>
                   </Box>
                </Box>
                <Box sx={{display: 'flex', gap: '1rem',justifyContent:'center',alignItems:"center"}}>
                   <Inventory2Icon sx={{padding:2,backgroundColor:"whitesmoke",borderRadius:2}}/>
                   <Box sx={{display: 'flex',flexDirection:"column"}}>
                      <Typography variant='body1' color="text.secondary">In Stock </Typography>
                      <Typography variant='body2'>Today</Typography>
                   </Box>
                </Box>
                <Box sx={{display: 'flex', gap: '1rem',justifyContent:'center',alignItems:"center"}}>
                   <VerifiedIcon sx={{padding:2,backgroundColor:"whitesmoke",borderRadius:2}}/>
                   <Box sx={{display: 'flex', flexDirection:"column"}}>
                      <Typography variant='body1' color="text.secondary">Guaranteed</Typography>
                      <Typography variant='body2'>1 year</Typography>
                   </Box>
                </Box>
            </Box>

          </Grid>
        </Grid>
      </Box>
      
    </Box>
  );
};

export default Hero;
