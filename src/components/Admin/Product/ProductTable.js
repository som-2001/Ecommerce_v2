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
import BasicMenu from "./BasicMenu";

const ProductTable = () => {
  const [bikes, setBikes] = useState([
    {
      id: 1,
      image: "product_1.jpg",
      name: "Splendor Plus",
      brand: "Hero",
      engineCapacity: "97.2cc",
      mileage: "70 kmpl",
      price: "1,000",
      newArrival: false,
      bestSeller: false,
      featureProducts: true,
    },
    {
      id: 2,
      image: "product_2.jpg",
      name: "Pulsar 150",
      brand: "Bajaj",
      engineCapacity: "149.5cc",
      mileage: "50 kmpl",
      price: "1,500",
      newArrival: false,
      bestSeller: true,
      featureProducts: true,
    },
    {
      id: 3,
      image: "product_3.jpg",
      name: "FZ V3",
      brand: "Yamaha",
      engineCapacity: "149cc",
      mileage: "45 kmpl",
      price: "1,800",
      newArrival: true,
      bestSeller: true,
      featureProducts: true,
    },
    // ... (other bike data)
  ]);

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
          {bikes.map((bike) => (
            <TableRow key={bike.id}>
              <TableCell align="center">
                <img
                  src={`../../../images/${bike.image}`}
                  alt={bike.name}
                  width="50"
                />
              </TableCell>
              <TableCell align="center">{bike.name}</TableCell>
              <TableCell align="center">{bike.brand}</TableCell>
              <TableCell align="center">{bike.engineCapacity}</TableCell>
              <TableCell align="center">{bike.mileage}</TableCell>
              <TableCell align="center">{bike.price}</TableCell>
              <TableCell align="center">
                <Switch
                  checked={bike.newArrival}
                  onChange={() => handleToggle(bike.id, "newArrival")}
                />
              </TableCell>
              <TableCell align="center">
                <Switch
                  checked={bike.bestSeller}
                  onChange={() => handleToggle(bike.id, "bestSeller")}
                />
              </TableCell>
              <TableCell align="center">
                <Switch
                  checked={bike.featureProducts}
                  onChange={() => handleToggle(bike.id, "featureProducts")}
                />
              </TableCell>
              <TableCell align="center">
                  <BasicMenu id={bike.id} setBikes={setBikes}/>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ProductTable;
