import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  Switch,
  TableSortLabel,
} from "@mui/material";

const UserTable = () => {
  const [users, setusers] = useState([
    {
      id: 1,
      image: "product_1.jpg",
      name: "Someswar Gorai",
      email: "somgorai726@gmail.com",
      date: "7th May, 2020",
      admin: false,
    },
    {
      id: 2,
      image: "product_2.jpg",
      name: "Rahul Gorai",
      email: "somgorai@klizos.com",
      date: "9th May, 2020",
      admin: true,
    },
  ]);
  
 

  const [order, setOrder] = useState("asc"); // Sorting order
  const [orderBy, setOrderBy] = useState(""); // Column to sort by

  const handleSort = (columnId) => {
    const isAsc = orderBy === columnId && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(columnId);

    setusers((prevusers) =>
      [...prevusers].sort((a, b) => {
       
        return isAsc
          ? a[columnId].localeCompare(b[columnId])
          : b[columnId].localeCompare(a[columnId]);
      })
    );
  };

  const columns = [
    { id: "image", label: "Image", sortable: false },
    { id: "name", label: "User Name", sortable: true },
    { id: "email", label: "Email", sortable: true },
    { id: "date", label: "Date", sortable: true },
    { id: "admin", label: "Admin", sortable: false },
  ];

  const handleToggle = (id, field) => {
    setusers((prevusers) =>
      prevusers.map((bike) =>
        bike.id === id ? { ...bike, [field]: !bike[field] } : bike
      )
    );
  };

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            {columns.map((column) => (
              <TableCell key={column.id} align="center">
                {column.sortable ? (
                  <TableSortLabel
                    active={orderBy === column.id}
                    direction={orderBy === column.id ? order : "asc"}
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
          {users.map((bike) => (
            <TableRow key={bike.id}>
              <TableCell align="center">
                <img
                  src={`../../../images/${bike.image}`}
                  alt={bike.name}
                  width="50"
                />
              </TableCell>
              <TableCell align="center">{bike.name}</TableCell>
              <TableCell align="center">{bike.email}</TableCell>
              <TableCell align="center">{bike.date}</TableCell>
              <TableCell align="center">
                <Switch
                  checked={bike.admin}
                  onChange={() => handleToggle(bike.id, "admin")}
                />
              </TableCell>
              
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default UserTable;
