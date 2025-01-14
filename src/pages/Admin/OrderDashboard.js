import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import axios from "axios";
import OrderTable from './../../components/Admin/Order/OrderTable';

export const OrderDashboard = () => {
  const [orders, setOrders] = useState([]);
  const [page, setPage] = useState(1); 
  const [limit, setLimit] = useState(10); 
  const [total, setTotal] = useState(0); 
  

  const fetchOrders = () => {
    // Construct query parameters
    const queryParams = new URLSearchParams({
      page,
      limit,
      
    }).toString();

    // API call
    axios
      .get(`${process.env.REACT_APP_BASEURL}/orders/orders?${queryParams}`, { withCredentials: true })
      .then((res) => {
        console.log(res.data);
        setOrders(res.data?.orders);
        setTotal(res?.data?.totalOrders)
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchOrders(); 
  }, [page, limit]); 

  return (
    <Box sx={{ display: "flex", justifyContent: "flex-end", flexDirection: "column" }}>
      <Typography variant="body1" sx={{ mb: 4, fontSize: "20px" }} color="text.secondary">
        Order Dashboard
      </Typography>
      <OrderTable
        orders={orders}
        setOrders={setOrders}
        page={page}
        setPage={setPage}
        total={total}
        limit={limit}
        setLimit={setLimit}
       
      />
    </Box>
  );
};
