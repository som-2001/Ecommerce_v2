import React, { useState } from 'react';
import { Box, Grid, Typography, Button, Chip, Divider } from '@mui/material';
import { Speed, DirectionsBike, LocalGasStation, Build } from '@mui/icons-material';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import Inventory2Icon from '@mui/icons-material/Inventory2';
import VerifiedIcon from '@mui/icons-material/Verified';
import StarIcon from '@mui/icons-material/Star';
import { useNavigate } from 'react-router-dom';

const product = {
  id: 1,
  name: 'Bike Model X',
  description:
    'Enhanced capabilities thanks to an enlarged display of 6.7 inches and work without recharging throughout the day. Incredible photos as in weak, and in bright light using the new system with two cameras more Enhanced capabilities thanks to an enlarged display of 6.7 inches and work without recharging throughout the day. Incredible photos as in weak...',
  price: '$4,999',
  discountedPrice: '$3,499',
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
  const navigate = useNavigate();

  return (
    <Box sx={{width:"100%"}}>
      
      <Box sx={{ padding: '2rem', my: 5 }}>
        <Grid container spacing={4}>
          {/* Left Side: Images */}
          <Grid item xs={12} md={5}>
            <Box
              sx={{
                textAlign: 'center',
                // boxShadow: '0px 4px 9px rgba(0,0,0,0.1)',
                borderRadius: '8px',
                padding: '0.6rem',
              }}
            >
              <img
                src={selectedImage}
                alt={product.name}
                style={{
                  width: '95%',
                  maxHeight: '600px',
                  objectFit: 'contain',
                  borderRadius: '8px',
                }}
              />
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  marginTop: '1rem',
                  gap: '10px',
                }}
              >
                {product.images.map((img, index) => (
                  <img
                    key={index}
                    src={img}
                    alt={`Thumbnail ${index + 1}`}
                    style={{
                      width: '60px',
                      height: '60px',
                      objectFit: 'cover',
                      border: selectedImage === img ? '2px solid gold' : '2px solid gray',
                      borderRadius: '4px',
                      cursor: 'pointer',
                      transition: 'transform 0.3s',
                    }}
                    onClick={() => setSelectedImage(img)}
                  />
                ))}
              </Box>
            </Box>
          </Grid>

          {/* Right Side: Product Details */}
          <Grid item xs={12} md={6}>
            <Typography variant="h4" sx={{ fontWeight: 'bold', marginBottom: '1rem' }}>
              {product.name}
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
              <Typography
                variant="h5"
                sx={{ fontWeight: 'bold', color: '#FF5722', marginRight: '1rem' }}
              >
                {product.discountedPrice}
              </Typography>
              <Typography
                variant="body1"
                sx={{ textDecoration: 'line-through', color: 'gray' }}
              >
                {product.price}
              </Typography>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  marginLeft: '1rem',
                  color: '#FFA439',
                }}
              >
                <StarIcon />
                <Typography sx={{ marginLeft: '4px', fontWeight: 600 }}>4.5</Typography>
              </Box>
            </Box>

            <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '2rem' }}>
              <Typography variant="body1" sx={{ fontWeight: 600 }}>
                Select Color:
              </Typography>
              <Box sx={{ display: 'flex', gap: '0.4rem' }}>
                {product.colors.map((color, index) => (
                  <Box
                    key={index}
                    sx={{
                      width: '40px',
                      height: '40px',
                      backgroundColor: color.toLowerCase(),
                      border: selectedColor === color ? '3px solid gold' : '2px solid gray',
                      borderRadius: '50%',
                      cursor: 'pointer',
                      transition: 'transform 0.3s',
                      '&:hover': {
                        transform: 'scale(1.2)',
                      },
                    }}
                    onClick={() => setSelectedColor(color)}
                  />
                ))}
              </Box>
            </Box>

            <Divider sx={{ marginBottom: '2rem' }} />

            <Box
              sx={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '1rem',
                marginBottom: '1rem',
                justifyContent: 'start',
              }}
            >
              {specifications.map((spec, index) => (
                <Chip
                  key={index}
                  icon={spec.icon}
                  label={`${spec.label}: ${spec.value}`}
                  sx={{
                    padding: '0.5rem',
                    fontWeight: '600',
                    color: 'black',
                    border: '1px solid #d3d3d3',
                    backgroundColor: '#f9f9f9',
                    '&:hover': {
                      backgroundColor: '#e3f2fd',
                    },
                  }}
                />
              ))}
            </Box>
            <Typography
              variant="body2"
              sx={{ color: '#757575', marginBottom: '2rem', lineHeight: 1.5,height:"150px" }}
            >
              {product.description}
            </Typography>

            <Box sx={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
              <Button
                variant="contained"
                sx={{
                  flex: 1,
                  padding: '1rem',
                  backgroundColor: 'black',
                  color: 'white',
                  borderRadius: 3,
                  '&:hover': {
                    backgroundColor: '#0d47a1',
                  },
                }}
                onClick={() => navigate('/payment')}
              >
                Buy Now
              </Button>
              <Button
                variant="outlined"
                sx={{
                  flex: 1,
                  padding: '1rem',
                  borderColor: 'black',
                  color: 'black',
                  borderRadius: 3,
                  '&:hover': {
                    backgroundColor: '#e3f2fd',
                  },
                }}
                onClick={() => navigate('/cart')}
              >
                Add to Cart
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Hero;
