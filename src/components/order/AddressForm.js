import { Box, Chip, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { useState } from "react";
import { AddressDialogFunc } from "../profile/AddressDialogFunc";

export const AddressForm = ({ handlefunction }) => {
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedId, setSelectedId] = useState(null);

  const addresses = [
    {
      id: 1,
      type: "Home",
      name: "Someswar Gorai",
      details:
        "Trish bigha, 1km away from academy of technology college, Adisaptagram, Bansberia, West Bengal - 712502",
    },
    {
      id: 2,
      type: "Work",
      name: "Someswar Gorai",
      details:
        "Trish bigha, 1km away from academy of technology college, Adisaptagram, Bansberia, West Bengal - 712502",
    },
  ];

  const handleIdFunction = (id) => {
    setSelectedId((prev) => (prev === id ? null : id)); // Toggle the same checkbox or select a new one
    handlefunction(true);
  };


  return (
    <Box sx={{ width: { xs: "82vw", sm: "90vw", md: "60vw" } }}>
      <Typography variant="h6" color="text.secondary" gutterBottom>
        Manage Addresses ({addresses.length})
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

      {addresses.map((address) => (
        <Box
          key={address.id}
          sx={{
            border: "1px solid #dfdfdf",
            padding: 2,
            my: 2,
            display: "flex",
            alignItems: "center",
            gap: "20px",
          }}
        >
          <Box>
            <input
              type="radio"
              checked={selectedId === address.id} // Only the selected checkbox will appear checked
              onChange={() => handleIdFunction(address.id)}
            />
          </Box>
          <Box>
            <Chip label={address.type} sx={{ my: 1 }} />
            <Typography variant="body1">{address.name}</Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ width: { xs: "100%", md: "40%" } }}
            >
              {address.details}
            </Typography>
          </Box>
        </Box>
      ))}

      {openDialog && (
        <AddressDialogFunc open={openDialog} setOpen={setOpenDialog} />
      )}

    </Box>
  );
};
