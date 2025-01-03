import * as React from "react";
import PropTypes from "prop-types";
import { alpha } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import TableSortLabel from "@mui/material/TableSortLabel";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import DeleteIcon from "@mui/icons-material/Delete";
import { visuallyHidden } from "@mui/utils";
import { Button } from "@mui/material";

// Function to create sample data
function createData(id, image, name, brand, engineCapacity, mileage, price, FeatureProduct) {
  return {
    id,
    image,
    name,
    brand,
    engineCapacity,
    mileage,
    price,
    FeatureProduct,
  };
}

// Helper function for sorting
function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

// Function to return the comparator based on the order
function getComparator(order, orderBy) {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

// Define the column headers
const headCells = [
  { id: "image", numeric: false, disablePadding: true, label: "Bike Image" },
  { id: "name", numeric: false, disablePadding: true, label: "Bike Name" },
  { id: "brand", numeric: false, disablePadding: false, label: "Brand" },
  { id: "engineCapacity", numeric: false, disablePadding: false, label: "Engine Capacity" },
  { id: "mileage", numeric: false, disablePadding: false, label: "Mileage" },
  { id: "price", numeric: false, disablePadding: false, label: "Price" },
  { id: "Feature Products", numeric: false, disablePadding: false, label: "Feature Products" },
];

// Define the table header component
function EnhancedTableHead(props) {
  const { onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        <TableCell padding="checkbox">
          <Checkbox
            color="primary"
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{ "aria-label": "select all bikes" }}
          />
        </TableCell>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={"center"}
            padding={headCell.disablePadding ? "none" : "normal"}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : "asc"}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === "desc" ? "sorted descending" : "sorted ascending"}
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
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.oneOf(["asc", "desc"]).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};

// Define the table toolbar component
function EnhancedTableToolbar(props) {
  const { numSelected, handleDelete } = props;
  return (
    <Toolbar
      sx={[
        { pl: { sm: 2 }, pr: { xs: 1, sm: 1 } },
        numSelected > 0 && {
          bgcolor: (theme) => alpha(theme.palette.primary.main, theme.palette.action.activatedOpacity),
        },
      ]}
    >
      {numSelected > 0 ? (
        <Typography sx={{ flex: "1 1 100%" }} color="inherit" variant="subtitle1" component="div">
          {numSelected} selected
        </Typography>
      ) : (
        <Typography sx={{ flex: "1 1 100%" }} variant="h6" id="tableTitle" component="div">
          Bikes Inventory
        </Typography>
      )}
      {numSelected > 0 ? (
        <Tooltip title="Delete">
          <IconButton onClick={handleDelete}>
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      ) : null}
    </Toolbar>
  );
}

EnhancedTableToolbar.propTypes = {
  numSelected: PropTypes.number.isRequired,
  handleDelete: PropTypes.func.isRequired,
};

// Main Table Component
export default function BikeTable() {
  const initialRows = [
    createData(1, "product_1.jpg", "Splendor Plus", "Hero", "97.2cc", "70 kmpl", "$1,000", false),
    createData(2, "product_2.jpg", "Pulsar 150", "Bajaj", "149.5cc", "50 kmpl", "$1,500", true),
    createData(3, "product_3.jpg", "FZ V3", "Yamaha", "149cc", "45 kmpl", "$1,800", false),
    createData(4, "product_4.jpg", "Classic 350", "Royal Enfield", "349cc", "35 kmpl", "$2,800", false),
    createData(5, "product_5.jpg", "Activa 6G", "Honda", "109.5cc", "60 kmpl", "$1,200", false),
    createData(6, "product_6.jpg", "Apache RTR 160", "TVS", "159.7cc", "50 kmpl", "$1,600", false),
    createData(7, "product_1.jpg", "R15 V4", "Yamaha", "155cc", "40 kmpl", "$2,000", false),
    createData(8, "product_2.jpg", "Gixxer SF", "Suzuki", "155cc", "47 kmpl", "$1,900", true),
    createData(9, "product_3.jpg", "Bullet 350", "Royal Enfield", "346cc", "40 kmpl", "$2,500", false),
    createData(10, "product_4.jpg", "Himalayan", "Royal Enfield", "411cc", "30 kmpl", "$3,000", false),
  ];

  const [order, setOrder] = React.useState("asc");
  const [orderBy, setOrderBy] = React.useState("price");
  const [selected, setSelected] = React.useState([]);
  const [rows, setRows] = React.useState(initialRows); // Initialize rows here
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelected = rows.map((n) => n.id);
      setSelected(newSelected);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, id) => {
    const selectedIndex = selected.indexOf(id);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }
    setSelected(newSelected);
  };

  const handleDelete = () => {
    const newRows = rows.filter((row) => !selected.includes(row.id));
    setRows(newRows); // Update rows after deleting selected ones
    setSelected([]); // Clear selected rows
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  

  const isSelected = (id) => selected.indexOf(id) !== -1;

  const filteredRows = rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);

  return (
    <Box sx={{ width: "100%" }}>
      <Paper sx={{ width: "100%", mb: 2 }}>
        <EnhancedTableToolbar numSelected={selected.length} handleDelete={handleDelete} />
        <TableContainer>
          <Table sx={{ minWidth: 750 }} aria-labelledby="tableTitle" size={dense ? "small" : "medium"}>
            <EnhancedTableHead
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onRequestSort={handleRequestSort}
              onSelectAllClick={handleSelectAllClick}
              rowCount={rows.length}
            />
            <TableBody>
              {filteredRows.sort(getComparator(order, orderBy)).map((row) => {
                const isItemSelected = isSelected(row.id);
                return (
                  <TableRow
                    hover
                    onClick={(event) => handleClick(event, row.id)}
                    role="checkbox"
                    aria-checked={isItemSelected}
                    tabIndex={-1}
                    key={row.id}
                    selected={isItemSelected}
                  >
                    <TableCell padding="checkbox">
                      <Checkbox checked={isItemSelected} />
                    </TableCell>
                    <TableCell align="center">
                      <img src={`../../../images/${row.image}`} style={{width:"100px",borderRadius:"10px"}} alt=""/>
                    </TableCell>
                    <TableCell align="center">{row.name}</TableCell>
                    <TableCell align="center">{row.brand}</TableCell>
                    <TableCell align="center">{row.engineCapacity}</TableCell>
                    <TableCell align="center">{row.mileage}</TableCell>
                    <TableCell align="center">{row.price}</TableCell>
                    <TableCell align="center" >
                      <Button sx={{width:"120px",backgroundColor:"black",color:"white",borderRadius:2,p:1}}>
                      Edit
                      </Button></TableCell>
                  </TableRow>
                );
              })}
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
    </Box>
  );
}
