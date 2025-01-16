import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TablePagination,
  Rating,
  Button,
  Typography,
} from "@mui/material";
import dayjs from "dayjs";
import { AdminopenReviewDrawer } from "./AdminopenReviewDrawer";

const ReviewTable = ({ reviews,setReviews, page, setPage, limit, setLimit, total }) => {
  const [openReviewDrawer, setOpenReviewDrawer] = useState(false);
  const [specificReview,setSpecificReview]=useState([]);

  const columns = [
    { id: "productImage", label: "Product Image" },
    { id: "productName", label: "Product Name" },
    { id: "userName", label: "User Name" },
    { id: "rating", label: "Rating" },
    { id: "createdAt", label: "Date Posted" },
    { id: "actions", label: "Explore" },
  ];

  // Handle page change
  const handlePageChange = (event, newPage) => {
    setPage(newPage + 1);
  };

  // Handle rows per page change
  const handleRowsPerPageChange = (event) => {
    setLimit(parseInt(event.target.value, 10));
    setPage(1);
  };

  return (
    <>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell key={column.id} align="center">
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {reviews.map((review) => (
              <TableRow key={review._id}>
                <TableCell align="center">
                  <img
                    src={review?.product?.image?.[0]}
                    alt=""
                    style={{
                      width: "80px",
                      height: "60px",
                      objectFit: "contain",
                    }}
                  />
                </TableCell>
                <TableCell align="center">
                  {review?.product?.productName}
                </TableCell>
                <TableCell align="center">{review?.user?.fullName}</TableCell>
                <TableCell align="center">
                  <Rating size="medium" value={review?.rating} readOnly />
                </TableCell>
                <TableCell align="center">
                  {dayjs(review?.createdAt).format("DD  MMM,YYYY")}
                </TableCell>
                <TableCell align="center">
                  <Button
                    onClick={(e)=>{setSpecificReview(review)
                      setOpenReviewDrawer(true)
                    }}
                    sx={{
                      color: "white",
                      backgroundColor: "black",
                      p: 1.5,
                      borderRadius: 3,
                    }}
                  >
                    Explore
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 15]}
        component="div"
        count={total} // Total number of reviews
        rowsPerPage={limit} // Items per page
        page={page - 1} // Current page (adjusted for 0-indexing)
        onPageChange={handlePageChange}
        onRowsPerPageChange={handleRowsPerPageChange}
      />

      {openReviewDrawer && (
        <AdminopenReviewDrawer
          drawerOpen={openReviewDrawer}
          setDrawerOpen={setOpenReviewDrawer}
          review={specificReview}
          setReviews={setReviews}
        />
      )}
    </>
  );
};

export default ReviewTable;
