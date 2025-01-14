import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import axios from "axios";
import ReviewTable from './../../components/Admin/Review/ReviewTable';

export const ReviewDashboard = () => {
  const [reviews, setReviews] = useState([]);
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
      .get(`${process.env.REACT_APP_BASEURL}/review/reviews/pagination?${queryParams}`, { withCredentials: true })
      .then((res) => {
        console.log(res.data?.reviews);
        setReviews(res.data?.reviews);
        setTotal(res?.data?.totalReviews)
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
       Review Dashboard
      </Typography>
      <ReviewTable
        reviews={reviews}
        setReviews={setReviews}
        page={page}
        setPage={setPage}
        total={total}
        limit={limit}
        setLimit={setLimit}
       
      />
    </Box>
  );
};
