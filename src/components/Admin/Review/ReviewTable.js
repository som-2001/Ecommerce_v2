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
import TableSortLabel from "@mui/material/TableSortLabel";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import Drawer from "@mui/material/Drawer";
import { CardMedia, Divider, Grid, Rating } from "@mui/material";

const rows = [
  {
    id: 1,
    name: "Bike A",
    model: "2021",
    orderId: "12345",
    price: "$500",
    status: "Shipped",
    date: "01/01/2025",
    image: "product_1.jpg",
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
    review: [
      {
        image: "https://mui.com/static/images/avatar/1.jpg",
        name: "Grace Carey",
        rate: 4,
        comment:
          "I was a bit nervous to be buying a secondhand phone from Amazon, but I couldn’t be happier with my purchase!! I have a pre-paid data plan so I was worried that this phone wouldn’t connect with my data plan, since the new phones don’t have the physical Sim tray anymore, but couldn’t have been easier! I bought an Unlocked black iPhone 14 Pro Max in excellent condition and everything is PERFECT. It was super easy to set up and the phone works and looks great. It truly was in excellent condition. Highly recommend!!!🖤",
        date: "23th Jan, 2024",
      },
      {
        image: "https://mui.com/static/images/avatar/2.jpg",
        name: "Grace Carey",
        rate: 5,
        comment:
          "I was a bit nervous to be buying a secondhand phone from Amazon, but I couldn’t be happier with my purchase!! I have a pre-paid data plan so I was worried that this phone wouldn’t connect with my data plan, since the new phones don’t have the physical Sim tray anymore, but couldn’t have been easier! I bought an Unlocked black iPhone 14 Pro Max in excellent condition and everything is PERFECT. It was super easy to set up and the phone works and looks great. It truly was in excellent condition. Highly recommend!!!🖤",
        date: "23th Jan, 2024",
      },
    ],
  },
  {
    id: 2,
    name: "Bike B",
    model: "2022",
    orderId: "12346",
    price: "$700",
    status: "Delivered",
    date: "01/01/2025",
    image: "product_2.jpg",
    expected_delivery_date: "03/01/2025",
    customers: [
      { name: "Amit Sharma", contact: "1234567890", email: "amit@example.com" },
      {
        name: "Priya Verma",
        contact: "0987654321",
        email: "priya@example.com",
      },
    ],
    review: [
      {
        image: "https://mui.com/static/images/avatar/2.jpg",
        name: "Grace Carey",
        rate: 4,
        comment:
          "I was a bit nervous to be buying a secondhand phone from Amazon, but I couldn’t be happier with my purchase!! I have a pre-paid data plan so I was worried that this phone wouldn’t connect with my data plan, since the new phones don’t have the physical Sim tray anymore, but couldn’t have been easier! I bought an Unlocked black iPhone 14 Pro Max in excellent condition and everything is PERFECT. It was super easy to set up and the phone works and looks great. It truly was in excellent condition. Highly recommend!!!🖤",
        date: "23th Jan, 2024",
      },
    ],
  },
];

const headCells = [
  { id: "image", numeric: false, disablePadding: false, label: "Bike Image" },
  { id: "name", numeric: false, disablePadding: false, label: "Bike Name" },
  { id: "model", numeric: true, disablePadding: false, label: "Bike Model" },
  { id: "orderId", numeric: true, disablePadding: false, label: "Order ID" },
  { id: "price", numeric: true, disablePadding: false, label: "Price" },
  { id: "review", numeric: true, disablePadding: false, label: "Review" },
  { id: "date", numeric: true, disablePadding: false, label: "Date" },
  { id: "action", numeric: false, disablePadding: false, label: "Action" },
];

function EnhancedTableHead(props) {
  return (
    <TableHead>
      <TableRow>
        {headCells.map((headCell) => (
          <TableCell key={headCell.id} align="center">
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

export default function ReviewTable() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const [selectedRow, setSelectedRow] = React.useState(null);

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
            <EnhancedTableHead />
            <TableBody>
              {rows.map((row, index) => (
                <TableRow key={row.id}>
                  <TableCell align="center">
                    <img
                      src={`../../../images/${row.image}`}
                      alt=""
                      style={{ width: "100px", borderRadius: 5 }}
                    />
                  </TableCell>
                  <TableCell align="center">{row.name}</TableCell>
                  <TableCell align="center">{row.model}</TableCell>
                  <TableCell align="center">{row.orderId}</TableCell>
                  <TableCell align="center">{row.price}</TableCell>
                  <TableCell align="center">
                    <Rating name="read-only" value={4} readOnly />
                  </TableCell>
                  <TableCell align="center">{row.date}</TableCell>
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
                <strong>Product Information:</strong>
              </Typography>
              <Grid container>
                <Grid item xs={3.6}>
                  <img
                    src="../../../images/product_1.jpg"
                    alt=""
                    style={{ width: "120px", borderRadius: "10px" }}
                  />
                </Grid>
                <Grid
                  item
                  xs={8.4}
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                    gap: "12px",
                    alignItems: "center",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                  >
                    <Typography variant="body2">Bike Name</Typography>
                    <Typography variant="body2" sx={{ fontSize: "12px" }}>
                      {selectedRow.name}
                    </Typography>
                  </Box>

                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                  >
                    <Typography variant="body2">Bike Model</Typography>
                    <Typography variant="body2" sx={{ fontSize: "12px" }}>
                      {selectedRow.model}
                    </Typography>
                  </Box>

                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                  >
                    <Typography variant="body2">Price</Typography>
                    <Typography variant="body2" sx={{ fontSize: "12px" }}>
                      <span>$700</span>
                    </Typography>
                  </Box>
                </Grid>
              </Grid>

              <Typography variant="body1" sx={{ mt: 2, mb: 1 }}>
                <strong>Review:</strong>
              </Typography>
              {selectedRow.review?.map((data, index) => (
                <Box
                  key={index}
                  sx={{
                    backgroundColor: "white",
                    padding: 3,
                    borderRadius: "16px",
                    boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.1)",
                    mb: 3,
                  }}
                >
                  <Grid container spacing={2}>
                    <Grid
                      item
                      xs={3}
                      sm={2}
                      md={2}
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <CardMedia
                        component="img"
                        image={data.image}
                        alt={data.name}
                        sx={{
                          width: "60px",
                          height: "60px",
                          borderRadius: "50%",
                          objectFit: "cover",
                        }}
                      />
                    </Grid>
                    <Grid item xs={9} sm={10} md={10}>
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                          {data.name}
                        </Typography>
                        <Typography variant="body2" sx={{ color: "#888" }}>
                          {data.date}
                        </Typography>
                      </Box>
                      <Rating
                        name="read-only"
                        value={data.rate}
                        readOnly
                        size="small"
                      />
                      <Typography variant="body2" sx={{ mt: 1, color: "#555" }}>
                        {data.comment}
                      </Typography>
                    </Grid>
                  </Grid>
                </Box>
              ))}
            </>
          )}
        </Box>
      </Drawer>
    </Box>
  );
}
