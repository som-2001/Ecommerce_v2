import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Drawer from '@mui/material/Drawer';
import { visuallyHidden } from '@mui/utils';
import { Divider, Rating } from '@mui/material';

const rows = [
  { id: 1, name: 'Bike A', model: '2021', orderId: '12345', price: '$500', review: 'Great!', date: '01/01/2024' },
  { id: 2, name: 'Bike B', model: '2022', orderId: '12346', price: '$700', review: 'Good!', date: '02/01/2024' },
];

const headCells = [
  { id: 'name', numeric: false, disablePadding: false, label: 'Bike Name' },
  { id: 'model', numeric: true, disablePadding: false, label: 'Bike Model' },
  { id: 'orderId', numeric: true, disablePadding: false, label: 'Order ID' },
  { id: 'price', numeric: true, disablePadding: false, label: 'Price' },
  { id: 'review', numeric: true, disablePadding: false, label: 'Review' },
  { id: 'date', numeric: true, disablePadding: false, label: 'Date' },
  { id: 'action', numeric: false, disablePadding: false, label: 'Action' },
];

function EnhancedTableHead(props) {
  const { order, orderBy, onRequestSort } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align='center'
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  onRequestSort: PropTypes.func.isRequired,
  order: PropTypes.oneOf(['asc', 'desc']).isRequired,
  orderBy: PropTypes.string.isRequired,
};

export default function ReviewTable() {
  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('name');
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const [selectedRow, setSelectedRow] = React.useState(null);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
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
    <Box sx={{ width: '100%' }}>
      <Paper sx={{ width: '100%', mb: 2 }}>
        <TableContainer>
          <Table aria-labelledby="tableTitle">
            <EnhancedTableHead order={order} orderBy={orderBy} onRequestSort={handleRequestSort} />
            <TableBody>
              {rows.map((row, index) => (
                <TableRow key={row.id}>
                  <TableCell align='center'>{row.name}</TableCell>
                  <TableCell align="center">{row.model}</TableCell>
                  <TableCell align="center">{row.orderId}</TableCell>
                  <TableCell align="center">{row.price}</TableCell>
                  <TableCell align="center"><Rating name="read-only" value={4} readOnly /></TableCell>
                  <TableCell align="center">{row.date}</TableCell>
                  <TableCell align='center'>
                    <Button variant="text" onClick={() => handleOpenDrawer(row)}>
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
          <Typography variant="h5" sx={{ mb: 2, fontWeight: 'bold' }}>
            Review Details
          </Typography>
          <Divider sx={{ mb: 2 }} />
          {selectedRow && (
            <>
              <Typography variant="body1" sx={{ mb: 1 }}>
                <strong>Bike Name:</strong> {selectedRow.name}
              </Typography>
              <Typography variant="body1" sx={{ mb: 1 }}>
                <strong>Model:</strong> {selectedRow.model}
              </Typography>
              <Typography variant="body1" sx={{ mb: 1 }}>
                <strong>Order ID:</strong> {selectedRow.orderId}
              </Typography>
              <Typography variant="body1" sx={{ mb: 1 }}>
                <strong>Price:</strong> {selectedRow.price}
              </Typography>
              <Typography variant="body1" sx={{ mb: 1 }}>
                <strong>Date:</strong> {selectedRow.date}
              </Typography>
              <Typography variant="body1" sx={{ mb: 1 }}>
                <strong>Review:</strong> {selectedRow.review}
              </Typography>
            </>
          )}
        </Box>
      </Drawer>
    </Box>
  );
}
