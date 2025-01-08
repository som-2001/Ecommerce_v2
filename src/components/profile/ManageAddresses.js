import { Box, Chip, Grid, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { useState } from "react";
import { AddressDialogFunc } from "./AddressDialogFunc";

export const ManageAddresses = ({ profile }) => {
  const [openDialog, setOpenDialog] = useState(false);

  return (
    <Box sx={{ width: "77vw" }}>
      <Typography
        variant="h6"
        color="text.secondary"
        sx={{ my: 2 }}
        gutterBottom
      >
        My Addresses ({profile?.address?.length})
      </Typography>

      <Box
        sx={{
          border: "1px solid #dfdfdf",
          padding: 2,
          my: 2,
          display: "flex",
          alignItems: "center",
          cursor: "pointer",
          "&:hover": {
            backgroundColor: "#f5f5f5",
          },
          "&:active": {
            backgroundColor: "#e0e0e0",
          },
        }}
        onClick={(e) => setOpenDialog(true)}
      >
        <AddIcon />
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ width: { xs: "100%", md: "40%" } }}
        >
          Add a new Address
        </Typography>
      </Box>

      {profile?.address?.length===0 ? <Box sx={{display:'flex',justifyContent:"center",alignItems:"center",my:5}}><Typography variant="body2" color="text.secondary" >No Address Added by you.</Typography></Box>:null}
      <Grid container spacing={4}>
        
          {profile?.address?.map((data, index) => (
            <Grid item xs={12} sm={12} md={6}>
            <Box sx={{ border: "1px solid #dfdfdf", padding: 2, my: 2 }}>
              <Chip label={data?.addressType} sx={{ my: 1 }} />
              <Typography variant="body1">{profile?.username}</Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ width: { xs: "100%", md: "90%" } }}
              >
               {data.pincode}
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ width: { xs: "100%", md: "90%" } }}
              >
               {data.locality}
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ width: { xs: "100%", md: "90%" } }}
              >
               {data.address}
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ width: { xs: "100%", md: "90%" } }}
              >
               {data.city}
              </Typography>

            </Box>
            </Grid>
          ))}
      </Grid>

      {openDialog && (
        <AddressDialogFunc open={openDialog} setOpen={setOpenDialog} profileData={profile}/>
      )}
    </Box>
  );
};
