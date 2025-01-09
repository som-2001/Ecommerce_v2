import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TableSortLabel,
  TablePagination,
  Switch,
} from "@mui/material";

const UserTable = ({
  users,
  setUsers,
  page,
  setPage,
  limit,
  setLimit,
  total,
  search,
  setSearch,
  sortBy,
  setSortBy,
  sortOrder,
  setSortOrder,
}) => {
  const handleSort = (columnId) => {
    const isAsc = sortBy === columnId && sortOrder === "asc";
    setSortOrder(isAsc ? "desc" : "asc");
    setSortBy(columnId);
  };

  const columns = [
    { id: "profilePicture", label: "Profile Picture", sortable: false },
    { id: "fullName", label: "Full Name", sortable: true },
    { id: "email", label: "Email", sortable: true },
    { id: "role", label: "Role", sortable: true },
    { id: "createdAt", label: "Created At", sortable: true },
    { id: "admin", label: "Admin", sortable: false },
  ];

  const handleToggle = (id, field) => {
    setUsers((prevUsers) =>
      prevUsers.map((user) => (user._id === id ? { ...user, [field]: !user[field] } : user))
    );
  };

  const handlePageChange = (event, newPage) => {
    setPage(newPage + 1); 
  };

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
                  {column.sortable ? (
                    <TableSortLabel
                      active={sortBy === column.id}
                      direction={sortBy === column.id ? sortOrder : "asc"}
                      onClick={() => handleSort(column.id)}
                    >
                      {column.label}
                    </TableSortLabel>
                  ) : (
                    column.label
                  )}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user) => (
              <TableRow key={user._id}>
                <TableCell align="center">
                  <img
                    src={user.profilePicture}
                    alt={user.fullName}
                    width="50"
                    style={{ borderRadius: "50%" }}
                  />
                </TableCell>
                <TableCell align="center">{user.fullName}</TableCell>
                <TableCell align="center">{user.email}</TableCell>
                <TableCell align="center">{user.role}</TableCell>
                <TableCell align="center">{new Date(user.createdAt).toLocaleDateString()}</TableCell>
                <TableCell align="center">
                  <Switch
                    checked={user.admin || false}
                    onChange={() => handleToggle(user._id, "admin")}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 15]}
        component="div"
        count={total} 
        rowsPerPage={limit}
        page={page - 1} 
        onPageChange={handlePageChange}
        onRowsPerPageChange={handleRowsPerPageChange}
      />
    </>
  );
};

export default UserTable;
