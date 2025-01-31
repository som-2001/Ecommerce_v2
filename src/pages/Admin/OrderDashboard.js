import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import axios from "axios";
import OrderTable from './../../components/Admin/Order/OrderTable';
import styles from "../../styles/Admin/OrderDashboard.module.css";

export const OrderDashboard = () => {
  const [orders, setOrders] = useState([]);
  const [page, setPage] = useState(1); 
  const [limit, setLimit] = useState(10); 
  const [total, setTotal] = useState(0); 
  const [load,setLoad]=useState(true);
  

  const fetchOrders = () => {
  
    const queryParams = new URLSearchParams({
      page,
      limit,
      
    }).toString();

    axios
      .get(`${process.env.REACT_APP_BASEURL}/orders/orders?${queryParams}`, { withCredentials: true })
      .then((res) => {
        console.log(res.data);
        setLoad(false);
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
    <Box className={styles.parent} >
      <Typography variant="body1" className={styles.body} color="text.secondary">
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
        load={load}
      />
    </Box>
  );
};
