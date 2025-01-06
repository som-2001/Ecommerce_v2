import React, { useState, useEffect } from 'react';
import { Box, Grid, Typography, Button, Chip, Divider } from '@mui/material';
import { Speed, DirectionsBike, LocalGasStation, Build } from '@mui/icons-material';
import StarIcon from '@mui/icons-material/Star';
import { useNavigate } from 'react-router-dom';

const Hero = ({ product }) => {
  const navigate = useNavigate();
  
  const [selectedImage, setSelectedImage] = useState('');
  const [selectedColor, setSelectedColor] = useState('');

  useEffect(() => {
  
    if (product?.image?.length > 0) {
      setSelectedImage(product.image[0]);
    }
  }, [product]);

  const specifications = [
    { icon: <Speed />, label: 'Top Speed', value: product?.topSpeed || 'N/A' },
    { icon: <DirectionsBike />, label: 'Engine Type', value: product?.engineType || 'N/A' },
    { icon: <LocalGasStation />, label: 'Mileage', value: product?.mileage || 'N/A' },
    { icon: <Build />, label: 'Max Power', value: product?.maxPower || 'N/A' },
    { icon: <Build />, label: 'Torque', value: product?.maxTorque || 'N/A' },
    { icon: <Build />, label: 'Fuel Capacity', value: product?.fuelTankCapacity || 'N/A' },
  ];

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ padding: '1rem' }}>
        <Grid container spacing={4}>
          {/* Left Side: Images */}
          <Grid item xs={12} md={5}>
            <Box
              sx={{
                textAlign: 'center',
                borderRadius: '8px',
                padding: '0.6rem',
              }}
            >
              {selectedImage && (
                <img
                  src={selectedImage}
                  alt={product?.productName || 'Product'}
                  style={{
                    width: '95%',
                    height: '500px',
                    objectFit: 'contain',
                    borderRadius: '8px',
                  }}
                />
              )}
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  marginTop: '1rem',
                  gap: '10px',
                }}
              >
                {product?.image?.map((img, index) => (
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
            <Box sx={{ padding: '20px' }}>
              <Typography variant="h4" sx={{ fontWeight: 'bold', marginBottom: '1rem' }}>
                {product?.productName || 'Product Name'}
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
                <Typography
                  variant="h5"
                  sx={{ fontWeight: 'bold', color: '#FF5722', marginRight: '1rem' }}
                >
                  ₹{product?.offerPrice || 'N/A'}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ textDecoration: 'line-through', color: 'gray' }}
                >
                  ₹{product?.originalPrice || 'N/A'}
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
                sx={{ color: '#757575', marginBottom: '1rem', lineHeight: 1.5 }}
              >
                {product?.description || 'No description available.'}
              </Typography>

              <Box sx={{ display: 'flex', gap: '1rem', marginTop: '1.4rem' }}>
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
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Hero;
