import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Box, Button, Grid, TextField } from "@mui/material";

const schema = yup
  .object()
  .shape({
    name: yup.string().required("Name is required"),
    gender: yup.string().required("Gender is required"),
    email: yup.string().email("Invalid email format").required("Email is required"),
    phoneNumber: yup
      .string()
      .matches(/^\d{10}$/, "Phone number must be 10 digits")
      .required("Phone number is required"),
  })
  .required();

export const Form = () => {
  const { control, handleSubmit, reset } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  return (
   <Box sx={{width:"100vw",display:"flex",justifyContent:"center",alignItems:"center"}}> 
    <form onSubmit={handleSubmit(onSubmit)} style={{width:"90vw",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={6}>
          <Controller
            name="name"
            control={control}
            render={({ field, fieldState }) => (
              <TextField
                {...field}
                type="text"
                placeholder="Your Full Name"
                label="Name"
                error={!!fieldState.error}
                helperText={fieldState.error?.message}
                fullWidth
              />
            )}
          />
        </Grid>
        <Grid item xs={12} sm={12} md={6}>
          <Controller
            name="gender"
            control={control}
            render={({ field, fieldState }) => (
              <TextField
                {...field}
                type="text"
                placeholder="Your Gender"
                label="Gender"
                error={!!fieldState.error}
                helperText={fieldState.error?.message}
                fullWidth
              />
            )}
          />
        </Grid>
        <Grid item xs={12} sm={12} md={6}>
          <Controller
            name="email"
            control={control}
            render={({ field, fieldState }) => (
              <TextField
                {...field}
                type="email"
                placeholder="Your Email"
                label="Email"
                error={!!fieldState.error}
                helperText={fieldState.error?.message}
                fullWidth
              />
            )}
          />
        </Grid>
        <Grid item xs={12} sm={12} md={6}>
          <Controller
            name="phoneNumber"
            control={control}
            render={({ field, fieldState }) => (
              <TextField
                {...field}
                type="text"
                placeholder="Your Phone Number"
                label="Phone Number"
                error={!!fieldState.error}
                helperText={fieldState.error?.message}
                fullWidth
              />
            )}
          />
        </Grid>
      </Grid>
      <Button
        type="submit"
        sx={{
          backgroundColor: "black",
          color: "white",
          padding: 2,
          width: "150px",
          borderRadius: 2,
          my: 2,
        }}
      >
        Submit
      </Button>
    </form>
    </Box>
  );
};
