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
  Select,
  MenuItem,
} from "@mui/material";
import axios from "axios";
import { enqueueSnackbar } from "notistack";

const OrderTable = ({ orders, page, setPage, limit, setLimit, total }) => {
  // Define columns for the order data
  const columns = [
    { id: "orderId", label: "Order ID", sortable: false },
    { id: "customerName", label: "Customer Name", sortable: true },
    { id: "contactNumber", label: "Contact Number", sortable: false },
    { id: "totalPrice", label: "Total Price", sortable: true },
    { id: "paymentStatus", label: "Payment Status", sortable: true },
    { id: "orderMode", label: "Order Mode", sortable: true },
    { id: "status", label: "Order Status", sortable: true },
    { id: "deliveryDate", label: "Delivery Date", sortable: true },
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

  const handleOrderStatusChange = (id, value) => {

    console.log(id,value);
    axios
      .put(
        `${process.env.REACT_APP_BASEURL}/orders/order/status`,
        { orderId: id, status: value },
        {
          withCredentials: true,
        }
      )
      .then((res) => {
        enqueueSnackbar(res.data?.message, { variant: "success" });
      })
      .catch((error) => {
        enqueueSnackbar(error?.response?.data?.message, { variant: "error" });
      });
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
            {orders.map((order) => (
              <TableRow key={order._id}>
                <TableCell align="center">{order._id}</TableCell>
                <TableCell align="center">
                  {order.shippingAddress[0]?.customerName || "N/A"}
                </TableCell>
                <TableCell align="center">
                  {order.shippingAddress[0]?.contactNumber || "N/A"}
                </TableCell>
                <TableCell align="center">{`$${order.totalPrice}`}</TableCell>
                <TableCell align="center">{order.paymentStatus}</TableCell>
                <TableCell align="center">{order.orderMode}</TableCell>
                <TableCell align="center">
                  <Select
                    sx={{width:"150px"}}
                    defaultValue={order?.status}
                    onChange={(e) => handleOrderStatusChange(order?._id, e.target.value)}
                  >
                    <MenuItem value="ordered">Ordered</MenuItem>
                    <MenuItem value="shipped">Shipped</MenuItem>
                    <MenuItem value="delivered">Delivered</MenuItem>
                    <MenuItem value="cancelled">Cancelled</MenuItem>
                  </Select>
                </TableCell>
                <TableCell align="center">
                  {new Date(
                    order.shipmentDetails.deliveryDate
                  ).toLocaleDateString()}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 15]}
        component="div"
        count={total} // Total number of orders
        rowsPerPage={limit} // Items per page
        page={page - 1} // Current page (adjusted for 0-indexing)
        onPageChange={handlePageChange}
        onRowsPerPageChange={handleRowsPerPageChange}
      />
    </>
  );
};

export default OrderTable;
