import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Box, Button, Grid, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { enqueueSnackbar } from "notistack";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import Cookies from 'js-cookie';

const schema = yup
  .object()
  .shape({
    name: yup.string().required("Name is required"),
    gender: yup.string().required("Gender is required"),
    email: yup
      .string()
      .email("Invalid email format")
      .required("Email is required"),
    phoneNumber: yup
      .string()
      .matches(/^\d{10}$/, "Phone number must be 10 digits")
      .required("Phone number is required"),
  })
  .required();

export const Form = ({data}) => {
  const { control, handleSubmit,setValue} = useForm({
    resolver: yupResolver(schema),
  });

  const [isEdit, setIsEdit] = useState(false);

  useEffect(()=>{
    setValue("name",data?.username);
    setValue("email",data?.email);
    setValue("gender",data?.gender);
    setValue("phoneNumber",data?.mobileNumber?.[0]);
  },[data,setValue,isEdit]);
  
  const onSubmit = async(data) => {
  
    await axios.put(
      `${process.env.REACT_APP_BASEURL}/users/users/${jwtDecode(Cookies.get("accessToken")).id}`,data,
      {
        withCredentials: true,
      }).then(res=>{
        enqueueSnackbar("profile has been updated")
      }).catch(err=>{
        enqueueSnackbar("Failed to update profile")

      })
    console.log(data.gender);
    
    setIsEdit(false);
  };

  return (
    <Box
      sx={{
        width: "77vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        style={{
          width: "77vw",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {!isEdit && <Box
          sx={{ display: "flex", justifyContent: "flex-end", width: "77vw" }}
        >
          <Button
            sx={{
              backgroundColor: "black",
              color: "white",
              padding: 1.4,
              width: "120px",
              borderRadius: 2,
              my: 2,
            }}
            onClick={(e) => setIsEdit(true)}
          >
            Edit
          </Button>
        </Box>}

        {isEdit && (
          <Box
            sx={{ display: "flex", justifyContent: "flex-end", width: "77vw" }}
          >
            <Button
              type="submit"
              sx={{
                backgroundColor: "black",
                color: "white",
                padding: 1.4,
                width: "120px",
                borderRadius: 2,
                my: 2,
              }}
              onClick={handleSubmit(onSubmit)}
            >
              Submit
            </Button>
          </Box>
        )}

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
                  slotProps={{
                    input: {
                      readOnly: !isEdit ? true:false,
                    },
                  }}
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
                  slotProps={{
                    input: {
                      readOnly: !isEdit ? true:false,
                    },
                  }}
                  type="text"
                  placeholder="Your Gender"
                
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
                  slotProps={{
                    input: {
                      readOnly: !isEdit ? true:false,
                    },
                  }}
                  type="email"
                  placeholder="Your Email"
                
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
                  slotProps={{
                    input: {
                      readOnly: !isEdit ? true:false,
                    },
                  }}
                  placeholder="Your Phone Number"
               
                  error={!!fieldState.error}
                  helperText={fieldState.error?.message}
                  fullWidth
                />
              )}
            />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};
