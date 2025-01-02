import React from 'react';
import { Grid, TextField, Button, Box } from '@mui/material';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { addProduct } from '../../../Redux/ProductAdminSlice/ProductSlice';

// Validation Schema using Yup
const validationSchema = Yup.object().shape({
  originalPrice: Yup.number()
    .required('Original Price is required')
    .positive('Original Price must be a positive number'),
  offerPrice: Yup.number()
    .required('Offer Price is required')
    .positive('Offer Price must be a positive number')
    .lessThan(Yup.ref('originalPrice'), 'Offer Price must be less than Original Price'),
  discount: Yup.number()
    .required('Discount is required')
    .positive('Discount must be a positive number')
    .max(100, 'Discount cannot exceed 100%')
    .test('discount-limit', 'Discount cannot exceed Original Price', function(value) {
      const { originalPrice } = this.parent;
      return value <= originalPrice;
    }),
});

const OrderPrice = ({onValidation}) => {
  const { control, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const dispatch=useDispatch();

  const onSubmit = (data) => {
    console.log('Form Submitted:', data);
    dispatch(addProduct(data));
    onValidation(true)
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Grid container spacing={2}>

        {/* Original Price */}
        <Grid item xs={12} sm={6}>
          <Controller
            name="originalPrice"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                label="Original Price"
                fullWidth
                type="number"
                error={!!errors.originalPrice}
                helperText={errors.originalPrice?.message}
              />
            )}
          />
        </Grid>

        {/* Offer Price */}
        <Grid item xs={12} sm={6}>
          <Controller
            name="offerPrice"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                label="Offer Price"
                fullWidth
                type="number"
                error={!!errors.offerPrice}
                helperText={errors.offerPrice?.message}
              />
            )}
          />
        </Grid>

        {/* Discount */}
        <Grid item xs={12} sm={6}>
          <Controller
            name="discount"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                label="Discount (%)"
                fullWidth
                type="number"
                error={!!errors.discount}
                helperText={errors.discount?.message}
              />
            )}
          />
        </Grid>

        {/* Submit Button */}
        <Grid item xs={12}>
        <Box sx={{display:"flex",justifyContent:"center",alignItems:"center"}}>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            sx={{
                padding:2,
                borderRadius:2,
                width:"180px",
                backgroundColor:"black",
                color:'white',
                mt:1
            }}
          >
           Save & Continue
          </Button>
          </Box>
        </Grid>
      </Grid>
    </form>
  );
};

export default OrderPrice;
