import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TablePagination,
} from "@mui/material";

const ReviewTable = ({ reviews, page, setPage, limit, setLimit, total }) => {
  // Define columns for the review data
  const columns = [
    { id: "reviewId", label: "Review ID", sortable: false },
    { id: "productName", label: "Product Name", sortable: true },
    { id: "userName", label: "User Name", sortable: false },
    { id: "rating", label: "Rating", sortable: true },
    { id: "reviewText", label: "Review Text", sortable: true },
    { id: "createdAt", label: "Date Posted", sortable: true },
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
                <TableCell align="center">{review._id}</TableCell>
                <TableCell align="center">{review.product.productName}</TableCell>
                <TableCell align="center">{review.user.fullName}</TableCell>
                <TableCell align="center">{review.rating}</TableCell>
                <TableCell align="center">{review.reviewText}</TableCell>
                <TableCell align="center">
                  {new Date(review.createdAt).toLocaleDateString()}
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
    </>
  );
};

export default ReviewTable;
