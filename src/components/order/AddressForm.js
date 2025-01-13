import { Box, Chip, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { useEffect, useState } from "react";
import { AddressDialogFunc } from "../profile/AddressDialogFunc";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import Cookies from "js-cookie";
import { useDispatch } from "react-redux";
import { setAddressDetails } from "../../Redux/ProductAdminSlice/ProductSlice";

export const AddressForm = ({ handlefunction }) => {
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedId, setSelectedId] = useState(null);
  const [addressData, setAddressData] = useState([]);
  const dispatch=useDispatch();

  useEffect(() => {
    axios
      .get(
        `${process.env.REACT_APP_BASEURL}/users/users/${
          jwtDecode(Cookies.get("accessToken")).id
        }`,
        { withCredentials: true }
      )
      .then((res) => {
        console.log(res.data);
        setAddressData(res.data?.address);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleIdFunction = (id,address) => {
    setSelectedId((prev) => (prev === id ? null : id)); // Toggle the same checkbox or select a new one
    dispatch(setAddressDetails({address:address}));
    handlefunction(true);
  };

  return (
    <Box sx={{ width: { xs: "82vw", sm: "90vw", md: "60vw" } }}>
      <Typography variant="h6" color="text.secondary" gutterBottom>
        Manage Addresses ({addressData.length})
      </Typography>

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
          variant="body2"
          color="text.secondary"
          sx={{ fontSize: "1rem", fontWeight: "bold", color: "#4caf50" }}
        >
          Add a new Address
        </Typography>
      </Box>

      {addressData.map((address) => (
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
              style={{cursor:"pointer"}}
              checked={selectedId === address._id} // Only the selected checkbox will appear checked
              onChange={() => handleIdFunction(address._id,address)}
            />
          </Box>
          <Box>
            <Chip
              label={address?.addressType}
              sx={{
                my: 1,
                backgroundColor:
                  address?.addressType === "Home" ? "#4caf50" : "#2196f3",
                color: "white",
              }}
            />
            <Typography variant="body1" sx={{fontWeight:"bold"}}>{address?.customerName}</Typography>
            <Typography variant="body2" color="text.secondary">
              {address?.landmark}
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "row",flexWrap:"wrap",wordBreak:"break-word" }}>
              <Typography variant="body2" color="text.secondary">
                {address?.locality},{" "}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {address?.state},{" "}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {address?.address}
              </Typography>
            </Box>
            <Typography variant="body2" color="text.secondary">
              {address?.pincode}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              +91-{address?.contactNumber}
            </Typography>
          </Box>
        </Box>
      ))}

      {openDialog && (
        <AddressDialogFunc open={openDialog} setOpen={setOpenDialog} profileData={addressData} setProfileData={setAddressData} />
      )}
    </Box>
  );
};
