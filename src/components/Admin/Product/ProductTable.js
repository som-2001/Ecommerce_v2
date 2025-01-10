import React, { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Switch,
  TableSortLabel,
} from "@mui/material";
import BasicMenu from "./BasicMenu";
import axios from "axios";
import { enqueueSnackbar } from "notistack";
import { useDispatch } from "react-redux";
import { resetProduct } from "../../../Redux/ProductAdminSlice/ProductSlice";

const ProductTable = () => {
  const [bikes, setBikes] = useState([]);
  const dispatch=useDispatch();

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BASEURL}/products/products`, {
        withCredentials: true,
      })
      .then((res) => {
        console.log(res.data);
        dispatch(resetProduct());
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
    { id: "isNewArrival", label: "New Arrival", sortable: false },
    { id: "isBestSeller", label: "Best Seller", sortable: false },
    { id: "isFeatureProduct", label: "Feature Products", sortable: false },
    { id: "action", label: "Action", sortable: false },
  ];

  const handleToggle = (productId, field) => {
    // Create the payload dynamically based on the field

    const payload = {
      isBestSeller: field === "isBestSeller" ? true : undefined,
      isFeatureProduct: field === "isFeatureProduct" ? true : undefined,
      isNewArrival: field === "isNewArrival" ? true : undefined,
    };
  
    axios
      .put(
        `${process.env.REACT_APP_BASEURL}/products/products/status/${productId}`,
        payload, // Send the correctly formatted payload
        {
          withCredentials: true,
        }
      )
      .then((res) => {
        // Show success message
        enqueueSnackbar(res.data?.message, { variant: "success" });
  
        // Update the state to reflect the changes
        setBikes((prevBikes) =>
          prevBikes.map((bike) =>
            bike._id === productId ? { ...bike, [field]: !bike[field] } : bike
          )
        );
      })
      .catch((err) => {
        // Show error message
        enqueueSnackbar(err.response?.data?.message || "Error updating product", {
          variant: "error",
        });
      });
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
                  checked={bike?.isNewArrival}
                  onChange={() => handleToggle(bike._id, "isNewArrival")}
                />
              </TableCell>
              <TableCell align="center">
                <Switch
                  checked={bike?.isBestSeller}
                  onChange={() => handleToggle(bike._id, "isBestSeller")}
                />
              </TableCell>
              <TableCell align="center">
                <Switch
                  checked={bike?.isFeatureProduct}
                  onChange={() => handleToggle(bike._id, "isFeatureProduct")}
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
