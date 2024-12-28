import { Box, Chip, Grid, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { useState } from "react";
import { AddressDialogFunc } from "./AddressDialogFunc";

export const ManageAddresses = () => {
  const [openDialog, setOpenDialog] = useState(false);


  return (
    <Box sx={{ width: "90vw" }}>
      <Typography variant="h6" color="text.secondary" sx={{my:2}} gutterBottom>
        Manage Addresses (2)
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
        onClick={(e)=>setOpenDialog(true)}
      >
        <AddIcon />
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ width: { xs: "100%", md: "40%" },
           
          }}

        >
          Add a new Address
        </Typography>
      </Box>
    
    <Grid container spacing={4}>
       <Grid item xs={12} sm={12} md={6}>
          <Box sx={{ border: "1px solid #dfdfdf", padding: 2, my: 2 }}>
            <Chip label={"Home"} sx={{ my: 1 }} />
            <Typography variant="body1">Someswar Gorai</Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ width: { xs: "100%", md: "90%" } }}
            >
              Trish bigha, 1km away from academy of technology college,Adisaptagram,
              Bansberia, West Bengal - 712502
            </Typography>
          </Box>
       </Grid>
       <Grid item xs={12} sm={12} md={6}>
          <Box sx={{ border: "1px solid #dfdfdf", padding: 2, my: 2 }}>
            <Chip label={"Home"} sx={{ my: 1 }} />
            <Typography variant="body1">Someswar Gorai</Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ width: { xs: "100%", md: "90%" } }}
            >
              Trish bigha, 1km away from academy of technology college,Adisaptagram,
              Bansberia, West Bengal - 712502
            </Typography>
          </Box>

       </Grid>
    </Grid>
      

      
      {openDialog && (
        <AddressDialogFunc open={openDialog} setOpen={setOpenDialog} />
      )}
    </Box>
  );
};
