import React from "react";
import { Grid, Box, Card, Typography, Avatar, IconButton } from "@mui/material";
import { Line } from "react-chartjs-2";
import { MoreVert, TrendingUp, AttachMoney, Person } from "@mui/icons-material";
import Sidebar from "../../components/Admin/Sidebar";
import Topbar from "../../components/Admin/Topbar";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LineController,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";

// Register components
ChartJS.register(
  LineElement,
  PointElement,
  LineController,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
);

const Dashboard = () => {
  const chartData = {
    labels: ["2015", "2016", "2017", "2018", "2019", "2020"],
    datasets: [
      {
        label: "Approved",
        data: [20, 30, 40, 35, 50, 45],
        borderColor: "#ff6384",
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        tension: 0.4,
        fill: true,
      },
      {
        label: "Submitted",
        data: [10, 25, 30, 40, 45, 50],
        borderColor: "#36a2eb",
        backgroundColor: "rgba(54, 162, 235, 0.2)",
        tension: 0.4,
        fill: true,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
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
        type: "category",
        title: {
          display: true,
          text: "Year",
        },
      },
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: "Claims",
        },
      },
    },
  };

  const metrics = [
    { icon: <TrendingUp />, label: "Product Sold", value: "25.1k" },
    { icon: <AttachMoney />, label: "Total Profit", value: "$2,435k" },
    { icon: <Person />, label: "New Customers", value: "43.5k" },
  ];

  const salesReps = [
    "Nicholas Patrick",
    "Cordell Edwards",
    "Derrick Spencer",
    "Larissa Burton",
  ];

  return (
    <Box>
      {/* Top Sales Representatives */}
      <Card sx={{ p: 2, mb: 3 }}>
        <Typography variant="h6" gutterBottom>
          Top Sales Representatives
        </Typography>
        <Grid container spacing={2}>
          {salesReps.map((name, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Card sx={{ display: "flex", alignItems: "center", p: 2 }}>
                <Avatar sx={{ mr: 2 }}>{name[0]}</Avatar>
                <Box>
                  <Typography>{name}</Typography>
                  <Typography variant="body2" color="textSecondary">
                    ${Math.round(Math.random() * 2000) + 1000}.00
                  </Typography>
                </Box>
                <IconButton sx={{ ml: "auto" }}>
                  <MoreVert />
                </IconButton>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Card>

      {/* Metrics */}
      <Grid container spacing={2} mb={3}>
        {metrics.map((item, i) => (
          <Grid item xs={12} sm={6} md={4} key={i}>
            <Card sx={{ p: 2, display: "flex", alignItems: "center" }}>
              <Avatar sx={{ bgcolor: "#36a2eb", mr: 2 }}>{item.icon}</Avatar>
              <Box>
                <Typography variant="body2" color="textSecondary">
                  {item.label}
                </Typography>
                <Typography variant="h6">{item.value}</Typography>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Charts */}
      <Grid container spacing={2}>
        <Grid item xs={12} md={8}>
          <Card sx={{ p: 2 }}>
            <Typography variant="h6" gutterBottom>
              Claims Over the Years
            </Typography>
            <Box height={400}>
              <Line data={chartData} options={options} />
            </Box>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card
            sx={{
              p: 2,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography variant="h6" gutterBottom>
              Sales Team Target
            </Typography>
            <Typography variant="h4" color="primary">
              82%
            </Typography>
            <Typography>Achieved</Typography>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard;
