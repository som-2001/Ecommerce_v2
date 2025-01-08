import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  Radio,
  RadioGroup,
  TextField,
} from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";
import { enqueueSnackbar } from "notistack";
import axios from "axios";

// Yup validation schema
const schema = yup
  .object()
  .shape({
    name: yup.string().required("Name is required"),
    mobile: yup
      .string()
      .matches(/^\d{10}$/, "Phone number must be 10 digits")
      .required("Phone number is required"),
    pincode: yup
      .string()
      .matches(/^\d{6}$/, "Pincode must be 6 digits")
      .required("Pincode is required"),
    locality: yup.string().required("Locality is required"),
    address: yup.string().required("Address is required"),
    city: yup.string().required("City is required"),
    state: yup.string().required("State is required"),
    alternatePhoneumber: yup
      .string()
      .matches(/^\d{10}$/, "Phone number must be 10 digits")
      .optional(),
    landmark: yup.string().optional(),
    addressType: yup
      .string()
      .oneOf(["Home", "Work"], "Address type must be either Home or Work"),
  })
  .required();

export const AddressDialogFunc = ({ open, setOpen, profileData }) => {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  console.log(profileData);

  const handleClose = () => {
    setOpen(false);
  };

  console.log(errors);
  // On form submission
  const onSubmit = async (data) => {
    try {
      console.log(data);
      // Prepare payload for the API request
      const payload = {
        username: data.name,
        email: profileData.email,
        password: profileData.password,
        role: profileData.role,
        fullName: profileData.fullName,
        gender: profileData.gender,
        mobileNumber: profileData.mobileNumber,
        address: {
          pincode: data.pincode,
          locality: data.locality,
          address: data.address,
          city: data.city,
          state: data.state,
          landmark: data.landmark,
          addressType: data.addressType,
        },
      };

      // Make the API call using axios.put
      const response = await axios.put(
        `${process.env.REACT_APP_BASEURL}/users/users/${
          jwtDecode(Cookies.get("accessToken")).id
        }`,
        payload, // axios handles the body as the second argument
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );

      if (response.status === 200) {
        // Handle successful API response
        console.log("Address added successfully:", response.data);
        enqueueSnackbar(response.data.message, { variant: "success" });
        setOpen(false); // Close the dialog
        reset(); // Reset form fields
      } else {
        // Handle error response
        console.error("Error adding address:", response.data);
        enqueueSnackbar("Error adding address", { variant: "error" });
      }
    } catch (error) {
      console.error("Error:", error);
      enqueueSnackbar("Error occurred while updating address", {
        variant: "error",
      });
    }
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="draggable-dialog-title"
    >
      <DialogTitle style={{ cursor: "move" }} id="draggable-dialog-title">
        Add a new address
      </DialogTitle>
      <DialogContent>
        <form
          onSubmit={handleSubmit(onSubmit)}
          style={{
            width: "fit-content",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
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
                name="mobile"
                control={control}
                render={({ field, fieldState }) => (
                  <TextField
                    {...field}
                    type="text"
                    placeholder="10-digit mobile number"
                    label="Mobile"
                    error={!!fieldState.error}
                    helperText={fieldState.error?.message}
                    fullWidth
                  />
                )}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
              <Controller
                name="pincode"
                control={control}
                render={({ field, fieldState }) => (
                  <TextField
                    {...field}
                    type="text"
                    placeholder="Your pincode"
                    label="Pincode"
                    error={!!fieldState.error}
                    helperText={fieldState.error?.message}
                    fullWidth
                  />
                )}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
              <Controller
                name="locality"
                control={control}
                render={({ field, fieldState }) => (
                  <TextField
                    {...field}
                    type="text"
                    placeholder="Locality"
                    label="Locality"
                    error={!!fieldState.error}
                    helperText={fieldState.error?.message}
                    fullWidth
                  />
                )}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={12}>
              <Controller
                name="address"
                control={control}
                render={({ field, fieldState }) => (
                  <TextField
                    {...field}
                    type="text"
                    placeholder="Address (Area and Street)"
                    multiline
                    rows={4}
                    label="Address"
                    error={!!fieldState.error}
                    helperText={fieldState.error?.message}
                    fullWidth
                  />
                )}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
              <Controller
                name="city"
                control={control}
                render={({ field, fieldState }) => (
                  <TextField
                    {...field}
                    type="text"
                    placeholder="City/District/Town"
                    label="City"
                    error={!!fieldState.error}
                    helperText={fieldState.error?.message}
                    fullWidth
                  />
                )}
              />
            </Grid>

            <Grid item xs={12} sm={12} md={6}>
              <Controller
                name="state"
                control={control}
                render={({ field, fieldState }) => (
                  <TextField
                    {...field}
                    type="text"
                    placeholder="State"
                    label="State"
                    error={!!fieldState.error}
                    helperText={fieldState.error?.message}
                    fullWidth
                  />
                )}
              />
            </Grid>

            <Grid item xs={12} sm={12} md={6}>
              <Controller
                name="alternatePhoneumber"
                control={control}
                render={({ field, fieldState }) => (
                  <TextField
                    {...field}
                    type="text"
                    placeholder="Alternate Phone (Optional)"
                    label="Alternate Phone"
                    error={!!fieldState.error}
                    helperText={fieldState.error?.message}
                    fullWidth
                  />
                )}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
              <Controller
                name="landmark"
                control={control}
                render={({ field, fieldState }) => (
                  <TextField
                    {...field}
                    type="text"
                    placeholder="Landmark (Optional)"
                    label="Landmark"
                    error={!!fieldState.error}
                    helperText={fieldState.error?.message}
                    fullWidth
                  />
                )}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
              <FormControl component="fieldset" fullWidth>
                <FormLabel id="address-type-label">Address Type</FormLabel>
                <Controller
                  name="addressType"
                  control={control}
                  defaultValue="Home" // Set default value
                  render={({ field }) => (
                    <RadioGroup
                      {...field}
                      aria-labelledby="address-type-label"
                      row // Aligns radio buttons horizontally
                    >
                      <FormControlLabel
                        value="Home"
                        control={<Radio />}
                        label="Home"
                      />
                      <FormControlLabel
                        value="Work"
                        control={<Radio />}
                        label="Work"
                      />
                     
                    </RadioGroup>
                  )}
                />
              </FormControl>
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
      </DialogContent>
      <DialogActions>
        <Button variant="outlined" onClick={handleClose} sx={{border:"1px solid black",color:"black"}}>
          Cancel
        </Button>
       
      </DialogActions>
    </Dialog>
  );
};
