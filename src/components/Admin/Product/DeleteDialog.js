import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import { Box } from "@mui/material";
import { enqueueSnackbar } from "notistack";
import axios from "axios";
import styles from "../../../styles/BasicDetails.module.css";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export const DeleteDialog = ({ open, setOpen, id, setBikes }) => {
  const handleClose = () => {
    setOpen(false);
  };

  const handleDelete = () => {
    axios
      .delete(`${process.env.REACT_APP_BASEURL}/products/products/${id}`)
      .then((res) => {
        enqueueSnackbar(res.data.message, { variant: "success" });
        setBikes((prevbikes) => prevbikes.filter((item) => item._id !== id));
        setOpen(false);
      })
      .catch((res) => {
        enqueueSnackbar(res?.response?.data?.message, { variant: "error" });
        console.log(res);
        setOpen(false);
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
          <Box sx={{ display: "flex", justifyContent: "center", my: 2 }}>
            <ExitToAppIcon
              sx={{
                backgroundColor: "whitesmoke",
                p: 2,
                borderRadius: 8,
                fontSize: "2.2rem",
              }}
            />
          </Box>
          <DialogContentText id="alert-dialog-slide-description">
            Are you sure you want to Delete ?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            variant="outlined"
            sx={{
              border: "none",
              color: "black",
            }}
            onClick={handleClose}
          >
            Cancel
          </Button>
          <Button
            variant="contained"
            onClick={handleDelete}
            className={styles.deleteButton}
          >
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
};
