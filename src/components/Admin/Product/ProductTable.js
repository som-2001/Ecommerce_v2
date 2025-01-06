import React, { useEffect, useState } from "react";
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
import BasicMenu from "./BasicMenu";
import axios from "axios";
import { SnackbarProvider } from "notistack";

const ProductTable = () => {
  const [bikes, setBikes] = useState([]);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BASEURL}/products/products`, {
        withCredentials: true,
      })
      .then((res) => {
        console.log(res.data);
        setBikes(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const [order, setOrder] = useState("asc"); // Sorting order
  const [orderBy, setOrderBy] = useState(""); // Column to sort by

  const handleSort = (columnId) => {
    const isAsc = orderBy === columnId && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(columnId);

    setBikes((prevBikes) =>
      [...prevBikes].sort((a, b) => {
       
        return isAsc
          ? a[columnId].localeCompare(b[columnId])
          : b[columnId].localeCompare(a[columnId]);
      })
    );
  };

  const columns = [
    { id: "image", label: "Bike Image", sortable: false },
    { id: "name", label: "Bike Name", sortable: true },
    { id: "brand", label: "Brand", sortable: true },
    { id: "engineCapacity", label: "Engine Capacity", sortable: true },
    { id: "mileage", label: "Mileage", sortable: true },
    { id: "price", label: "Price($)", sortable: true },
    { id: "newArrival", label: "New Arrival", sortable: false },
    { id: "bestSeller", label: "Best Seller", sortable: false },
    { id: "featureProducts", label: "Feature Products", sortable: false },
    { id: "action", label: "Action", sortable: false },
  ];

  const handleToggle = (id, field) => {
    setBikes((prevBikes) =>
      prevBikes.map((bike) =>
        bike._id === id ? { ...bike, [field]: !bike[field] } : bike
      )
    );
  };

  return (
    <TableContainer component={Paper}>
      <SnackbarProvider/>
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
          {bikes.map((bike) => (
            <TableRow key={bike._id}>
              <TableCell align="center">
                <img
                  src={`${bike.image?.[0]}`}
                  alt={bike.name}
                  width="70"
                />
              </TableCell>
              <TableCell align="center">{bike.productName}</TableCell>
              <TableCell align="center">{bike.brand}</TableCell>
              <TableCell align="center">{bike.engineCapacity}</TableCell>
              <TableCell align="center">{bike.mileage}</TableCell>
              <TableCell align="center">{bike.originalPrice}</TableCell>
              <TableCell align="center">
                <Switch
                  checked={bike.newArrival}
                  onChange={() => handleToggle(bike._id, "newArrival")}
                />
              </TableCell>
              <TableCell align="center">
                <Switch
                  checked={bike.bestSeller}
                  onChange={() => handleToggle(bike._id, "bestSeller")}
                />
              </TableCell>
              <TableCell align="center">
                <Switch
                  checked={bike.featureProducts}
                  onChange={() => handleToggle(bike._id, "featureProducts")}
                />
              </TableCell>
              <TableCell align="center">
                  <BasicMenu id={bike._id} setBikes={setBikes}/>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ProductTable;
