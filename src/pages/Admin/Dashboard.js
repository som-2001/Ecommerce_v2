import React from "react";
import {
  Grid,
  Box,
  Card,
  Typography,
  Avatar,
  CardMedia,
  Stack,
  Chip,
} from "@mui/material";
import { Line } from "react-chartjs-2";
import {
  TrendingUp,
  AttachMoney,
  Person,
} from "@mui/icons-material";
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
    {
      icon: <TrendingUp />,
      label: "Order Placed",
      value: "25k",
      bgcolor: "#36a2eb",
    },
    {
      icon: <AttachMoney />,
      label: "In Shipping",
      value: "25k",
      bgcolor: "#e0584f",
    },
    {
      icon: <Person />,
      label: "Out For Delivery",
      value: "4k",
      bgcolor: "#eb6cc2",
    },
    { icon: <Person />, label: "Delivered", value: "4k", bgcolor: "#d9e04f" },
  ];

  const salesReps = [
    {
      icon: <InventoryIcon sx={{ fontSize: "2rem" }} />,
      name: "Total Products",
      bgcolor: "#85c6f2",
    },
    {
      icon: <LocalShippingIcon sx={{ fontSize: "2rem" }} />,
      name: "Total Orders",
      bgcolor: "#b0a4ed",
    },
    {
      icon: <GroupIcon sx={{ fontSize: "2rem" }} />,
      name: "Total Users",
      bgcolor: "#b1f2e1",
    },
    {
      icon: <StarBorderIcon sx={{ fontSize: "2rem" }} />,
      name: "Total Review",
      bgcolor: "#8febd2",
    },
  ];

  const FeatureProducts = {
    title: "Feature Products",
    items: [
      {
        name: "Royal Enfield",
        price: "$13520",
        Description:
          "Enhanced capabilities thanks to an enlarged display of 6.7 inches and work without recharging throughout the day. Incredible photos as in weak, and in bright light using the new system with two cameras more Enhanced capabilities thanks to an enlarged display of 6.7 inches and work without recharging throughout the day. Incredible photos as in weak...",
        image: "product_1.jpg",
      },
      {
        name: "Royal Enfield",
        price: "$22350",
        Description:
          "Enhanced capabilities thanks to an enlarged display of 6.7 inches and work without recharging throughout the day. Incredible photos as in weak, and in bright light using the new system with two cameras more Enhanced capabilities thanks to an enlarged display of 6.7 inches and work without recharging throughout the day. Incredible photos as in weak...",
        image: "product_1.jpg",
      },
    ],
  };

  const bestSeller = {
    title: "Best Seller",
    items: [
      {
        name: "Royal Enfield",
        price: "$13520",
        Description:
          "Enhanced capabilities thanks to an enlarged display of 6.7 inches and work without recharging throughout the day. Incredible photos as in weak, and in bright light using the new system with two cameras more Enhanced capabilities thanks to an enlarged display of 6.7 inches and work without recharging throughout the day. Incredible photos as in weak...",
        image: "product_1.jpg",
      },
      {
        name: "Royal Enfield",
        price: "$13520",
        Description:
          "Enhanced capabilities thanks to an enlarged display of 6.7 inches and work without recharging throughout the day. Incredible photos as in weak, and in bright light using the new system with two cameras more Enhanced capabilities thanks to an enlarged display of 6.7 inches and work without recharging throughout the day. Incredible photos as in weak...",
        image: "product_1.jpg",
      },
    ],
  };

  const renderProductList = (section) => (
    <Card sx={{ p: 2, mb: 2,background: 'linear-gradient(#e1eef5,rgb(231, 202, 193))' }}>
      <Typography variant="body1" color="text.secondary" gutterBottom>
        {section.title}
      </Typography>
      {section.items.map((item, index) => (
        <Box
          key={index}
          sx={{
            display: "flex",
            justifyContent: "space-between",
            mb: 1,
            alignItems: "center",
          }}
        >
          <CardMedia
            component="img"
            src={`../../images/${item.image}`}
            sx={{ width: "70px", borderRadius: 4 }}
          />
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
            }}
          >
            <Typography variant="body1">{item.name}</Typography>
            <Typography
              variant="body2"
              color="textSecondary"
            >{`${item.Description.slice(0, 50)}...`}</Typography>
          </Box>
          <Typography variant="body2" color="textSecondary">
            <Stack direction="row">
              <Chip label={item.price} sx={{ bgcolor: "#f58989" }} />
            </Stack>
          </Typography>
        </Box>
      ))}
    </Card>
  );

  return (
    <Box>
      {/* Top Sales Representatives */}
      <Grid container spacing={2} sx={{ p: 3 }}>
        {salesReps.map((item, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Card
              sx={{
                display: "flex",
                alignItems: "center",
                p: 2,
                height: "120px",
                gap: "20px",
                // background: `linear-gradient(${item.bgcolor} 1.80%,rgb(228, 214, 236,0.7) 55%)`
              }}
            >
              <Avatar sx={{ bgcolor: item.bgcolor, mr: 2, p: 1 }}>
                {item.icon}
              </Avatar>
              <Box>
                <Typography variant="body1" sx={{ fontSize: "20px" }}>
                  {item.name}
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
            <Card sx={{ p: 4, display: "flex", alignItems: "center",
              // background: `linear-gradient(${item.bgcolor} , rgb(234, 228, 238,0.2)) 50.71%`  
              }}>
              <Avatar sx={{ bgcolor: item.bgcolor, mr: 2, p: 1 }}>
                {item.icon}
              </Avatar>
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
