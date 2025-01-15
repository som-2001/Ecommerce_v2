import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
  } from "@mui/material";
  
  import { enqueueSnackbar } from "notistack";
  import axios from "axios";
  
  export const ReviewDeleteDrawer = ({
    openReviewDelete,
    setOpenReviewDelete,
    reviewId,
    setReviews,
  }) => {
    const handleClose = () => {
      setOpenReviewDelete(false);
    };
    const handleDelete = () => {
      axios
        .delete(`${process.env.REACT_APP_BASEURL}/review/${reviewId}`, {
          withCredentials: true,
        })
        .then((res) => {
          enqueueSnackbar(res?.data?.message, { variant: "success" });
          setReviews(res?.data?.updatedReview);
          setOpenReviewDelete(false);
        })
        .catch((error) => {
          enqueueSnackbar(error?.response?.data?.message, { variant: "error" });
        });
  
      
    };
    return (
      <Dialog
        open={openReviewDelete}
        onClose={handleClose}
        aria-labelledby="draggable-dialog-title"
      >
        <DialogTitle style={{ cursor: "move" }} id="draggable-dialog-title">
          Delete Review
        </DialogTitle>
        <DialogContent>
          Are you sure you want to delete this review ?
        </DialogContent>
        <DialogActions>
          <Button
            variant="outlined"
            onClick={handleClose}
            sx={{ border: "1px solid black", color: "black" }}
          >
            Cancel
          </Button>
          <Button
            variant="outlined"
            onClick={handleDelete}
            sx={{ border: "1px solid black", color: "black" }}
          >
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    );
  };
  