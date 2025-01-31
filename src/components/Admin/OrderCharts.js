import React from "react";
import { Grid, Card, Typography, Box } from "@mui/material";
import { Bar, Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";


ChartJS.register(CategoryScale, LinearScale, BarElement, ArcElement, Tooltip, Legend);

const OrderCharts = ({ orderData }) => {
  const orderStatuses = {
    ordered: orderData?.ordered?.length || 0,
    shipped: orderData?.shipped?.length || 0,
    delivered: orderData?.delivered?.length || 0,
    cancelled: orderData?.cancelled?.length || 0,
  };


  const barData = {
    labels: ["Ordered", "Shipped", "Delivered", "Cancelled"],
    datasets: [
      {
        label: "Orders by Status",
        data: [
          orderStatuses.ordered,
          orderStatuses.shipped,
          orderStatuses.delivered,
          orderStatuses.cancelled,
        ],
        backgroundColor: ["#ebe7d8", "#A6CDC6", "#16404D", "#DDA853"],
        borderColor: ["#A6CDC6", "#ebe7d8", "#DDA853", "#16404D"],
        borderWidth: 1,
      },
    ],
  };


  const pieData = {
    labels: ["Ordeded", "Shipped", "Delivered", "Cancelled"],
    datasets: [
      {
        data: [
          orderStatuses.ordered,
          orderStatuses.shipped,
          orderStatuses.delivered,
          orderStatuses.cancelled,
        ],
        backgroundColor: ["#FBF5DD", "#A6CDC6", "#16404D", "#DDA853"],
        hoverOffset: 4,
      },
    ],
  };


  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      tooltip: {
        mode: "index",
        intersect: false,
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Order Status",
        },
      },
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: "Number of Orders",
        },
      },
    },
  };

  return (
    <Box sx={{ p: 3 }}>
      <Grid container spacing={2}>
        {/* Bar Chart */}
        <Grid item xs={12} md={6}>
          <Card sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
              Bar Chart: Orders by Status
            </Typography>
            <Box height={400}>
              <Bar data={barData} options={options} />
            </Box>
          </Card>
        </Grid>

        {/* Pie Chart */}
        <Grid item xs={12} md={6}>
          <Card sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
              Pie Chart: Orders Distribution
            </Typography>
            <Box height={400} sx={{display:"flex",justifyContent:"center"}}>
              <Pie data={pieData} />
            </Box>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default OrderCharts;
