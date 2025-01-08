import React, { useState } from "react";
import {
  Box,
  Button,
  CardMedia,
  Grid,
  Typography,
  IconButton,
} from "@mui/material";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import Cookies from 'js-cookie';
import axios from "axios";
import {jwtDecode} from "jwt-decode";
import { enqueueSnackbar, SnackbarProvider } from "notistack";
import { LogoutDialog } from "./LogoutDialog";

export const Hero = ({data}) => {
  const [profileImage, setProfileImage] = useState(
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Breezeicons-actions-22-im-user.svg/1200px-Breezeicons-actions-22-im-user.svg.png"
  );
  const [open,setOpen]=useState(false);

  const openLogoutDialog=()=>{
    setOpen(true);
  }

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setProfileImage(imageUrl); // Update the image preview

      const formData = new FormData();
      formData.append("profilePicture", file);
      console.log(file);

      axios.put(`${process.env.REACT_APP_BASEURL}/users/profile-picture/${jwtDecode(Cookies.get("accessToken")).id}`,formData,{
        withCredentials: true
      }).then(res=>{
        enqueueSnackbar("Profile picture has been updated successfully")
      }).catch(err=>{
        enqueueSnackbar("Failed to update profile picture", {variant: "error"})
      })

    }
  };

  return (
    <Box sx={{ width: "77vw", padding: { xs: 2, sm: 5 } }}>
     
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box>
          <Typography variant="h5" color="text.secondary" sx={{fontSize:{xs:"1.0rem",lg:"1.6rem"}}}>
            Welcome, {data?.fullName}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Joined on, {new Date(data.createdAt).toLocaleDateString()}
            {/* {new Date(data.createdAt).toLocaleDateString()} */}
          </Typography>
        </Box>
        <Box>
          <Button
            sx={{
              backgroundColor: "black",
              color: "white",
              padding: 1.4,
              width: "120px",
              borderRadius: 2,
            }}
            onClick={openLogoutDialog}
          >
            Logout
          </Button>
        </Box>
      </Box>

      <Box
        sx={{
          backgroundImage: "linear-gradient(to right, #9d9dff, #ffffbe);",
          height: "90px",
          my: 2,
          padding: 2,
          borderRadius: "9px 9px 0px 0px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems:"center",
        }}
      >
        <Grid container spacing={2}>
          <Grid
            item
            xs={4}
            sm={2}
            md={2}
            lg={1}
            sx={{
            
              position: "relative", // Important for overlay positioning
            }}
          >
            <CardMedia
              component="img"
              image={profileImage}
              sx={{
                width: "80px",
                height: "80px",
                borderRadius: "50px",
                objectFit:"cover"
              }}
            />
            <Box
              sx={{
                position: "absolute",
                top: 9,
                left: 12,
                width: "80px",
                height: "80px",
                backgroundColor: "rgba(0, 0, 0, 0.5)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                opacity: 0,
                borderRadius: "50%",
                transition: "opacity 1s",
                "&:hover": {
                  opacity: 1,
                },
              }}
            >
              
              <IconButton
                sx={{
                  backgroundColor: "rgba(0, 0, 0, 0.6)",
                  color: "white",
                  "&:hover": { backgroundColor: "rgba(0, 0, 0, 0.8)" },
                }}
              >
                <input
                type="file"
                accept="image/*"
                style={{
                  position: "absolute",
                  width: "100%",
                  height: "100%",
                  opacity: 0,
                  cursor: "pointer",
                }}
                onChange={handleImageChange}
              />
                <PhotoCamera />
              </IconButton>
            </Box>
          </Grid>
          <Grid
            item
            xs={8}
            sm={6}
            md={4}
            lg={3}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Typography variant="h6">{data?.fullName}</Typography>
            <Typography variant="body2" color="text.secondary">
              {data?.email}
            </Typography>
          </Grid>
        </Grid>
      </Box>

        <LogoutDialog open={open} setOpen={setOpen}/>
    </Box>
  );
};
