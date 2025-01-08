import { Box, Chip, Grid, Typography, IconButton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import HomeIcon from "@mui/icons-material/Home";
import WorkIcon from "@mui/icons-material/Work";
import { useEffect, useState } from "react";
import { AddressDialogFunc } from "./AddressDialogFunc";

export const ManageAddresses = ({ profile }) => {
  const [openDialog, setOpenDialog] = useState(false);
  const [address, setAddress] = useState([]);

  useEffect(() => {
    if (profile?.address) {
      console.log(profile?.address);
      setAddress(profile?.address);
    }
  }, [profile]);

  return (
    <Box sx={{ width: "77vw", margin: "0 auto", mt: 4 }}>
      {/* Header Section */}
      <Typography
        variant="h6"
        color="text.secondary"
        sx={{ my: 2,fontSize: "1.1rem" }}
        gutterBottom
      >
        My Addresses ({profile?.address?.length})
      </Typography>

      {/* Add New Address Box */}
      <Box
        sx={{
          border: "1px solid #dfdfdf",
          padding: 2,
          my: 2,
          display: "flex",
          alignItems: "center",
          borderRadius: 2,
          cursor: "pointer",
          backgroundColor: "#fff",
          "&:hover": {
            backgroundColor: "#f9f9f9",
          },
          "&:active": {
            backgroundColor: "#f0f0f0",
          },
        }}
        onClick={(e) => setOpenDialog(true)}
      >
        <AddIcon sx={{ color: "#4caf50", fontSize: "2rem", mr: 2 }} />
        <Typography
          variant="body1"
          sx={{ fontSize: "1rem", fontWeight: "bold", color: "#4caf50" }}
        >
          Add a New Address
        </Typography>
      </Box>

      {/* Empty State */}
      {address?.length === 0 ? (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            my: 5,
          }}
        >
          <Typography variant="body2" color="text.secondary">
            No Address Added by You.
          </Typography>
        </Box>
      ) : null}

      {/* Address Cards */}
      <Grid container spacing={2}>
        {address?.map((data, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Box
              sx={{
                border: "1px solid #dfdfdf",
                padding: 3,
                borderRadius: 2,
                backgroundColor: "#fff",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                position: "relative",
                "&:hover": {
                  boxShadow: "0 6px 12px rgba(0, 0, 0, 0.15)",
                },
              }}
            >
              {/* Address Type Icon */}
              <Chip
                label={data?.addressType}
                sx={{
                  my: 1,
                  backgroundColor:
                    data?.addressType === "Home" ? "#4caf50" : "#2196f3",
                  color: "#fff",
                  fontWeight: "bold",
                  display: "flex",
                  alignItems: "center",
                  pl: 1,
                  width:"fit-content"
                }}
                icon={
                  data?.addressType === "Home" ? (
                    <HomeIcon sx={{ color: "#fff" }} />
                  ) : (
                    <WorkIcon sx={{ color: "#fff" }} />
                  )
                }
              />

              {/* Address Details */}
              <Typography
                variant="body1"
                sx={{ fontWeight: "bold", mt: 1, color: "#333" }}
              >
                {profile?.username}
              </Typography>
              <Box sx={{ mt: 1 }}>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ display: "flex", alignItems: "center", mb: 0.5 }}
                >
                  <LocationOnIcon sx={{ fontSize: "1rem", mr: 1 }} />
                  {data.address}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ display: "flex", alignItems: "center", mb: 0.5 }}
                >
                  <LocationOnIcon sx={{ fontSize: "1rem", mr: 1 }} />
                  {data.locality}, {data.city}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ display: "flex", alignItems: "center", mb: 0.5 }}
                >
                  <LocationOnIcon sx={{ fontSize: "1rem", mr: 1 }} />
                  Pincode: {data.pincode}
                </Typography>
              </Box>

              {/* Action Buttons */}
              <Box
                sx={{
                  position: "absolute",
                  top: 10,
                  right: 10,
                  display: "flex",
                  gap: 1,
                }}
              >
                <IconButton
                  size="small"
                  sx={{ color: "#1976d2" }}
                  onClick={() => console.log("Edit Address")}
                >
                  <EditIcon />
                </IconButton>
                <IconButton
                  size="small"
                  sx={{ color: "#f44336" }}
                  onClick={() => console.log("Delete Address")}
                >
                  <DeleteIcon />
                </IconButton>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>

      {/* Address Dialog */}
      {openDialog && (
        <AddressDialogFunc
          open={openDialog}
          setOpen={setOpenDialog}
          profileData={address}
          setProfileData={setAddress}
        />
      )}
    </Box>
  );
};
