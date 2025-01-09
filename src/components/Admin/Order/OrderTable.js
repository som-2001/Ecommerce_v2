import React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import Drawer from "@mui/material/Drawer";
import {
  Chip,
  Divider,
  Rating,
  Stack,
  Grid,
} from "@mui/material";
import OrderStepper from "./OrderStepper";

const rows = [
  {
    id: 1,
    name: "Bike A",
    model: "2021",
    orderId: "12345",
    price: "$500",
    review: "Great!",
    status: "Shipped",
    order_date: "01/01/2025",
    expected_delivery_date: "03/01/2025",
    customers: [
      {
        name: "Rahul Kumar",
        contact: "1234567890",
        email: "rahul@example.com",
      },
      {
        name: "Sneha Singh",
        contact: "0987654321",
        email: "sneha@example.com",
      },
    ],
  },
  {
    id: 2,
    name: "Bike B",
    model: "2022",
    orderId: "12346",
    price: "$700",
    review: "Good!",
    status: "Delivered",
    order_date: "01/01/2025",
    expected_delivery_date: "03/01/2025",
    customers: [
      { name: "Amit Sharma", contact: "1234567890", email: "amit@example.com" },
      {
        name: "Priya Verma",
        contact: "0987654321",
        email: "priya@example.com",
      },
    ],
  },
];

const headCells = [
  { id: "name", numeric: false, disablePadding: false, label: "Bike Name" },
  { id: "model", numeric: true, disablePadding: false, label: "Bike Model" },
  { id: "orderId", numeric: true, disablePadding: false, label: "Order ID" },
  { id: "price", numeric: true, disablePadding: false, label: "Price" },
  { id: "review", numeric: true, disablePadding: false, label: "Review" },
  {
    id: "order Date",
    numeric: true,
    disablePadding: false,
    label: "Order Date",
  },
  {
    id: "Expected Delivery Date",
    numeric: true,
    disablePadding: false,
    label: "Expected Delivery Date",
  },
  { id: "status", numeric: true, disablePadding: false, label: "Status" },
  { id: "action", numeric: false, disablePadding: false, label: "Action" },
];

function EnhancedTableHead(props) {
  const { order, orderBy } = props;
 
  return (
    <TableHead>
      <TableRow>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align="center"
            sortDirection={orderBy === headCell.id ? order : false}
          >
           
              {headCell.label}
             
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  onRequestSort: PropTypes.func.isRequired,
  order: PropTypes.oneOf(["asc", "desc"]).isRequired,
  orderBy: PropTypes.string.isRequired,
};

export default function OrderTable() {
  const [order, setOrder] = React.useState("asc");
  const [orderBy, setOrderBy] = React.useState("name");
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const [selectedRow, setSelectedRow] = React.useState(null);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleOpenDrawer = (row) => {
    setSelectedRow(row);
    setDrawerOpen(true);
  };

  const handleCloseDrawer = () => {
    setDrawerOpen(false);
    setSelectedRow(null);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Paper sx={{ width: "100%", mb: 2 }}>
        <TableContainer>
          <Table aria-labelledby="tableTitle">
            <EnhancedTableHead
              order={order}
              orderBy={orderBy}
              onRequestSort={handleRequestSort}
            />
            <TableBody>
              {rows.map((row, index) => (
                <TableRow key={row.id}>
                  <TableCell align="center">{row.name}</TableCell>
                  <TableCell align="center">{row.model}</TableCell>
                  <TableCell align="center">{row.orderId}</TableCell>
                  <TableCell align="center">{row.price}</TableCell>
                  <TableCell align="center">
                    <Rating name="read-only" value={4} readOnly />
                  </TableCell>
                  <TableCell align="center">{row.order_date}</TableCell>
                  <TableCell align="center">
                    {row.expected_delivery_date}
                  </TableCell>
                  <TableCell align="center">
                    <Stack direction="row">
                      <Chip label={row.status} />
                    </Stack>
                  </TableCell>
                  <TableCell align="center">
                    <Button
                      variant="text"
                      onClick={() => handleOpenDrawer(row)}
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
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>

      <Drawer anchor="right" open={drawerOpen} onClose={handleCloseDrawer}>
        <Box sx={{ width: 400, p: 3 }}>
          <Typography variant="h6" sx={{ mb: 2, fontWeight: "bold" }}>
            Order Details
          </Typography>
          <Divider sx={{ mb: 2 }} />
          {selectedRow && (
            <>
              <Typography variant="body1" sx={{ mb: 1 }}>
                <strong>Order Information:</strong>
              </Typography>
              <Grid container>
                <Grid item xs={7}>
                    <img src="../../../images/product_1.jpg" alt="" style={{width:"170px"}}/>
                </Grid>
                <Grid item xs={4} sx={{display:"flex",flexDirection:"column", justifyContent:"center"}}>
                  <Typography variant="body2">
                    Bike Name: {selectedRow.name}
                  </Typography>
                  <Typography variant="body2">
                    Model: {selectedRow.model}
                  </Typography>
                  <Typography variant="body2">
                    Order ID: {selectedRow.orderId}
                  </Typography>
                  <Typography variant="body2">
                    Price: {selectedRow.price}
                  </Typography>
                </Grid>
              </Grid>
              <Divider sx={{ mt: 2, mb: 2 }} />
              <Typography variant="body1" sx={{ mb: 1 }}>
                <strong>Customer Details:</strong>
              </Typography>
              <Grid container spacing={2}>
                {selectedRow.customers.map((customer, index) => (
                  <Grid item xs={6} key={index}>
                    <Box>
                      <Typography variant="body2">
                        <strong>Name:</strong> {customer.name}
                      </Typography>
                      <Typography variant="body2">
                        <strong>Contact:</strong> {customer.contact}
                      </Typography>
                      <Typography variant="body2">
                        <strong>Email:</strong> {customer.email}
                      </Typography>
                    </Box>
                    <Divider sx={{ mt: 1, mb: 1 }} />
                  </Grid>
                ))}
              </Grid>
              <Typography variant="body1" sx={{ mt: 2, mb: 1 }}>
                <strong>Order Status:</strong>
              </Typography>
              <OrderStepper />
            </>
          )}
        </Box>
      </Drawer>
    </Box>
  );
}
