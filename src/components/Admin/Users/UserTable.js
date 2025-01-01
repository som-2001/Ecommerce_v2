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
import Paper from '@mui/material/Paper';
// import Button from '@mui/material/Button';
// import Drawer from '@mui/material/Drawer';
import { visuallyHidden } from '@mui/utils';
import { Switch } from '@mui/material';

const rows = [
  { image:'product_1.jpg',id: 1, name: 'Alice Johnson', email: 'alice.johnson@example.com', date: '01/01/2024' },
  { image:'product_2.jpg',id: 2, name: 'Bob Smith', email: 'bob.smith@example.com', date: '02/01/2024' },
];
const label = { inputProps: { 'aria-label': 'Switch demo' } };

const headCells = [
  { id: 'image', numeric: false, disablePadding: false, label: 'Image' },
  { id: 'name', numeric: false, disablePadding: false, label: 'User Name' },
  { id: 'email', numeric: false, disablePadding: false, label: 'Email' },
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
            align="center"
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

export default function UserTable() {
  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('name');
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  // const [drawerOpen, setDrawerOpen] = React.useState(false);
  // const [selectedRow, setSelectedRow] = React.useState(null);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  // const handleOpenDrawer = (row) => {
  //   setSelectedRow(row);
  //   setDrawerOpen(true);
  // };

  // const handleCloseDrawer = () => {
  //   setDrawerOpen(false);
  //   setSelectedRow(null);
  // };

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
              {rows.map((row) => (
                <TableRow key={row.id}>
                   <TableCell align="center">
                    <img src={`../../../images/${row.image}`} alt='' style={{width:"100px"}}/>
                   </TableCell>
                  <TableCell align="center">{row.name}</TableCell>
                  <TableCell align="center">{row.email}</TableCell>
                  <TableCell align="center">{row.date}</TableCell>
                  <TableCell align="center">
                    {/* <Button variant="text" onClick={() => handleOpenDrawer(row)}>
                      View Details
                    </Button> */}
                    <Switch {...label} defaultChecked />
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

      {/* <Drawer anchor="right" open={drawerOpen} onClose={handleCloseDrawer}>
        <Box sx={{ width: 400, p: 3 }}>
          <Typography variant="h5" sx={{ mb: 2, fontWeight: 'bold' }}>
            User Details
          </Typography>
          <Divider sx={{ mb: 2 }} />
          {selectedRow && (
            <>
              <Typography variant="body1" sx={{ mb: 1 }}>
                <strong>Name:</strong> {selectedRow.name}
              </Typography>
              <Typography variant="body1" sx={{ mb: 1 }}>
                <strong>Email:</strong> {selectedRow.email}
              </Typography>
              <Typography variant="body1" sx={{ mb: 1 }}>
                <strong>Joined On:</strong> {selectedRow.date}
              </Typography>
            </>
          )}
        </Box>
      </Drawer> */}
    </Box>
  );
}
