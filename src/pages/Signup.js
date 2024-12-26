import {
  Box,
  Button,
  CardMedia,
  Checkbox,
  Grid,
  InputAdornment,
  TextField,
  Typography,
  FormControl,
  FormHelperText,
  CircularProgress,
} from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import HttpsIcon from "@mui/icons-material/Https";
import PersonIcon from "@mui/icons-material/Person";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import "../App.css";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import * as EmailValidator from "email-validator";
import { motion } from "motion/react";
import axios from "axios";
import { useMutation } from "@tanstack/react-query";

const schema = yup.object().shape({
  name: yup
    .string()
    .matches(/^[a-z" "A-Z]*$/, "only letters are allowed here")
    .test("invalid_space", "spaces at first won't be accepted", (value) => {
      if (value.startsWith(" ")) return false;
      else return true;
    })
    .required("name is required"),
  email: yup
    .string()
    .test("Invalid email", (value) => {
      // Check for leading spaces and invalid email format
      return !value?.startsWith(" ") && EmailValidator.validate(value);
    })
    .required("Email is required"),
  password: yup
    .string()
    .matches(/[a-z]/, "password should contain atleast one lowercase")
    .matches(/[A-Z]/, "password should contain atleast one uppercase")
    .matches(/[1-9]/, "password should contain atleast one number")
    .matches(
      /[!@#$%^&*()_+|/?,./]/,
      "password should contain atleast one special characters"
    )
    .max(15, "maximum 15 characters")
    .min(8, "minimum 8 characters")
    .required("password is required"),
  confirmpassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match.")
    .required("confirm password is required"),
  checkbox: yup
    .boolean()
    .oneOf([true], "You must agree to the terms and conditions.")
    .required("You must agree to the terms and conditions."),
});

function Signup () {
  const {
    handleSubmit,
    formState: { errors },
    control,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const navigate = useNavigate();

  const mutation = useMutation({
    mutationKey: ["register"],
    mutationFn: (user) => {
      return axios.post(`${process.env.REACT_APP_BASEURL}/register`, user);
    },
    onSuccess: (user) => {
      console.log(user);
      toast.success("Registration successful");
      setTimeout(() => {
        navigate("/signin");
      }, 1500);
    },
    onError: (error) => {
      console.error("Registration failed:", error);
      toast.error("Registration failed");
    },
  });

  const onSubmit = (data) => {
    mutation.mutate({
      name: data.name.trim(),
      email: data.email.trim(),
      password: data.password.trim(),
      confirmpassword: data.confirmpassword.trim(),
      checkbox: data.checkbox,
    });
  };

  return (
    <Box>
      <ToastContainer />
     
      <Grid container>
        <Grid item xs={12} md={6} lg={7}>
          <Box>
            <CardMedia
              component="video"
              src="../images/register_bike_video.mp4"
              autoPlay
              loop
              muted
              sx={{
                height: { xs: "50vh", md: "100vh" },
                filter: "brightness(0.4)",
                objectFit:"cover"
              }}
            />
          </Box>
          <Typography
            variant="h3"
            sx={{
              top: { xs: "17%", sm: "17%", md: "40%",lg:"28%" },
              left: { xs: "8%", sm: "15%", md: "3%" },
              width: { md: "400px", lg: "660px" },
              fontSize: { xs: "1.7rem", sm: "2.5rem",lg:"3.2rem" }
            }}
            className="parentText"
          >
            <motion.p
              initial={{ x: "-100vw" }}
              animate={{ x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              Ride Your Dreams, Shop the Best Bikes.
            </motion.p>
          </Typography>
        </Grid>
        <Grid item xs={12} md={6} lg={5} className="flex-container">
          <Typography variant="h6" sx={{ mt: 2,fontWeight:600 }}>
          <motion.p
              initial={{ scale:0 }}
              animate={{ scale:1}}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >Create an Account
            </motion.p>
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 5,width:{xs:"306px",md:"400px"} }}>
          
            Start your engine  and drive into  the world of premium bikes! 🚗
      
          </Typography>
          <form onSubmit={handleSubmit(onSubmit)} className="flex-container">
            <Box>
              <FormControl>
                <Controller
                  control={control}
                  name="name"
                  render={({ field }) => (
                    <TextField
                      {...field}
                      variant="standard"
                      type="text"
                      placeholder="John doe"
                      sx={{
                        width: { xs: "300px", sm: "500px", md: "400px" },
                        my: 1,
                        "& .MuiInput-input": {
                          padding: "10px",
                        },

                        "& .MuiInput-underline::before": {
                          borderBottom:
                            "1px solid rgb(171 158 158 / 42%) !important",
                        },
                      }}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <PersonIcon />
                          </InputAdornment>
                        ),
                      }}
                    />
                  )}
                />
                <FormHelperText className="error" sx={{ color: "error.main" }}>
                  {errors && errors?.name?.message}
                </FormHelperText>
              </FormControl>
            </Box>
            <Box sx={{ mt: 2 }}>
              <FormControl>
                <Controller
                  control={control}
                  name="email"
                  render={({ field }) => (
                    <TextField
                      variant="standard"
                      {...field}
                      type="text"
                      placeholder="John@gmail.com"
                      sx={{
                        width: { xs: "300px", sm: "500px", md: "400px" },
                        my: 1,
                        "& .MuiInput-input": {
                          padding: "10px",
                        },
                        "& .MuiInput-underline::before": {
                          borderBottom:
                            "1px solid rgb(171 158 158 / 42%) !important",
                        },
                      }}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <EmailIcon />
                          </InputAdornment>
                        ),
                      }}
                    />
                  )}
                />
                <FormHelperText sx={{ color: "error.main" }} className="error">
                  {errors && errors?.email?.message}
                </FormHelperText>
              </FormControl>
            </Box>
            <Box sx={{ mt: 2 }}>
              <FormControl>
                <Controller
                  control={control}
                  name="password"
                  render={({ field }) => (
                    <TextField
                      variant="standard"
                      type="password"
                      {...field}
                      placeholder="Type your password here"
                      sx={{
                        width: { xs: "300px", sm: "500px", md: "400px" },
                        my: 1,
                        "& .MuiInput-input": {
                          padding: "10px",
                        },
                        "& .MuiInput-underline::before": {
                          borderBottom:
                            "1px solid rgb(171 158 158 / 42%) !important",
                        },
                      }}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <HttpsIcon />
                          </InputAdornment>
                        ),
                      }}
                    />
                  )}
                />
                <FormHelperText sx={{ color: "error.main" }} className="error">
                  {errors && errors?.password?.message}
                </FormHelperText>
              </FormControl>
            </Box>
            <Box sx={{ mt: 2 }}>
              <FormControl>
                <Controller
                  control={control}
                  name="confirmpassword"
                  render={({ field }) => (
                    <TextField
                      variant="standard"
                      type="text"
                      {...field}
                      placeholder="Type your confirm password here"
                      sx={{
                        width: { xs: "300px", sm: "500px", md: "400px" },
                        my: 1,
                        "& .MuiInput-input": {
                          padding: "10px",
                        },
                        "& .MuiInput-underline::before": {
                          borderBottom:
                            "1px solid rgb(171 158 158 / 42%) !important",
                        },
                      }}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <HttpsIcon />
                          </InputAdornment>
                        ),
                      }}
                    />
                  )}
                />
                <FormHelperText sx={{ color: "error.main" }} className="error">
                  {errors && errors?.confirmpassword?.message}
                </FormHelperText>
              </FormControl>
            </Box>
            <Button
              type="submit"
              className="submitbutton"
              sx={{ width: { xs: "300px", sm: "500px", md: "400px" } }}
            >
              {mutation.isPending ? (
                <CircularProgress size={30} />
              ) : (
                <span>Create Account</span>
              )}
            </Button>
            <Box sx={{ width: { xs: "314px", sm: "511px", md: "421px" } }}>
              <FormControl className="checkbox">
                <Controller
                  name="checkbox"
                  control={control}
                  render={({ field }) => (
                    <Checkbox
                      {...field}
                      color="primary" // Optional: set color if needed
                    />
                  )}
                />
                <Typography variant="body2" color="rgb(129 123 123)">
                  I've agreed with terms of service and our privacy policy
                </Typography>
              </FormControl>
              {/* Display error message if it exists */}
              {errors?.checkbox && (
                <FormHelperText sx={{ color: "error.main", ml: 2 }}>
                  {errors.checkbox.message}
                </FormHelperText>
              )}
            </Box>
          </form>

          <Box className="signinBtn">
            <Typography variant="body2" color="rgb(171 158 158 / 92%)">
              Already have an account?{" "}
              <span
                style={{
                  color: "rgb(91 93 145 / 92%)",
                  cursor: "pointer",
                  fontWeight: "500",
                }}
                onClick={(e) => navigate("/signin")}
              >
                Sign in 
              </span>
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};
export default Signup;