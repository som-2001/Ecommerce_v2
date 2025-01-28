import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import { Box } from "@mui/material";
import axios from "axios";
import { enqueueSnackbar } from "notistack";
import DeleteIcon from '@mui/icons-material/Delete';
import styles from '../../styles/profile.module.css'


const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export const AddressDeleteDialogFunc = ({
  open,
  setOpen,
  profileId,
  addressId,
  setAddressData,
}) => {
  const handleClose = () => {
    setOpen(false);
  };

  const handleDelete = () => {
    axios
      .delete(
        `${process.env.REACT_APP_BASEURL}/users/${profileId}/${addressId}`
      )
      .then((res) => {
        enqueueSnackbar(res.data.message, { variant: "success" });
        setAddressData(res.data.user?.address);
        setOpen(false);
      })
      .catch((err) => {
        enqueueSnackbar(err.response.data.message, { variant: "error" });
      });
  };

  return (
    <React.Fragment>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"Logout"}</DialogTitle>
        <DialogContent>
          <Box className={styles.flexContainer}>
            <DeleteIcon
             className={styles.DeleteIcon}
            />
          </Box>
          <DialogContentText id="alert-dialog-slide-description">
            Are you sure you want to Delete this address ?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            variant="outlined"
            className={styles.Cancel}
            onClick={handleClose}
          >
            Cancel
          </Button>
          <Button
            variant="contained"
            onClick={handleDelete}
            className={styles.Delete}
          >
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
};
