import React from "react";
import { Grid, Box, Card, Typography, Avatar, CardMedia } from "@mui/material";
import { Line } from "react-chartjs-2";
import { TrendingUp, AttachMoney, Person, Description } from "@mui/icons-material";
import GroupIcon from "@mui/icons-material/Group";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import InventoryIcon from "@mui/icons-material/Inventory";

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
    { icon: <TrendingUp />, label: "Order Placed", value: "25k" },
    { icon: <AttachMoney />, label: "In Shipping", value: "25k" },
    { icon: <Person />, label: "Out For Delivery", value: "4k" },
    { icon: <Person />, label: "Delivered", value: "4k" },
  ];

  const salesReps = [
    { icon: <InventoryIcon sx={{ fontSize: "2rem" }} />, name: "Total Products" },
    { icon: <LocalShippingIcon sx={{ fontSize: "2rem" }} />, name: "Total Orders" },
    { icon: <GroupIcon sx={{ fontSize: "2rem" }} />, name: "Total Users" },
    { icon: <StarBorderIcon sx={{ fontSize: "2rem" }} />, name: "Total Review" },
  ];

  const FeatureProducts = {
    title: "Feature Products",
    items: [
      { name: "Duke", price: "$13520", Description: "Last Week",image:"product_1.jpg" },
      { name: "Royal Enfield", price: "$22350", Description: "Last Week",image:"product_1.jpg" },
    ],
  };

  const bestSeller = {
    title: "Best Seller",
    items: [
      { name: "Duke", price: "$13520", Description: "Last Week",image:"product_1.jpg" },
      { name: "Royal Enfield",price: "$13520", Description: "Last Week",image:"product_1.jpg" },
    ],
  };

  const renderProductList = (section) => (
    <Card sx={{ p: 2, mb: 2 }}>
      <Typography variant="h6" gutterBottom>
        {section.title}
      </Typography>
      {section.items.map((item, index) => (
        <Box
          key={index}
          sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}
        >
          <CardMedia component="img" src={`../../images/${item.image}`} sx={{width:"70px"}}/>
          <Box sx={{display:'flex',flexDirection:"column",justifyContent:"flex-start"}}>
          <Typography variant="body1">{item.name}</Typography>
          <Typography variant="body2" color="textSecondary">{item.Description}</Typography>
          </Box>
          <Typography variant="body2" color="textSecondary">
            Price {item.price} 
          </Typography>
        </Box>
      ))}
    </Card>
  );

  return (
    <Box>
      {/* Top Sales Representatives */}
      <Grid container spacing={2} sx={{ p: 3 }}>
        {salesReps.map((name, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Card
              sx={{
                display: "flex",
                alignItems: "center",
                p: 2,
                height: "120px",
                gap: "20px",
              }}
            >
              {name.icon}
              <Box>
                <Typography variant="body1" sx={{ fontSize: "20px" }}>
                  {name.name}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ fontSize: "15px" }}
                  color="textSecondary"
                >
                  ${Math.round(Math.random() * 2000) + 1000}.00
                </Typography>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Metrics */}
      <Grid container spacing={2} mb={3}>
        {metrics.map((item, i) => (
          <Grid item xs={12} sm={6} md={3} key={i}>
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
       
          {renderProductList(bestSeller)}
        
       
          {renderProductList(FeatureProducts)}
        
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard;