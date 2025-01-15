import React, { useEffect, useState } from "react";
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
import { TrendingUp, AttachMoney } from "@mui/icons-material";
import GroupIcon from "@mui/icons-material/Group";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import InventoryIcon from "@mui/icons-material/Inventory";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";

import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import OrderCharts from "../../components/Admin/OrderCharts";
import dayjs from "dayjs";

// Register components
ChartJS.register(
  LineElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement
);

// Process data
const processRevenueData = (orders) => {
  const revenueByDate = {};

  orders.forEach((order) => {
    const date = dayjs(
      order.shipmentDetails.deliveryDate
    ).format("DD MMM,YYYY");
    revenueByDate[date] = (revenueByDate[date] || 0) + order.totalPrice;
  });

  const labels = Object.keys(revenueByDate).sort();
  const revenues = labels.map((date) => revenueByDate[date]);

  return { labels, revenues };
};

const options = {
  responsive: true,
  plugins: {
    legend: { position: "top" },
    tooltip: { mode: "index", intersect: false },
  },
  scales: {
    x: { title: { display: true, text: "Date" } },
    y: { title: { display: true, text: "Revenue" }, beginAtZero: true },
  },
};

const Dashboard = () => {
  const [result, setResult] = useState([]);
  const [newArrival, setNewArrival] = useState([]);
  const [bestSeller, setBestSeller] = useState([]);
  const [featureProduct, setFeatureProduct] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BASEURL}/products/fitler/all`, {
        withCredentials: true,
      })
      .then((res) => {
        console.log(res?.data);
        setResult(res?.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BASEURL}/home/gets`)
      .then((res) => {
        // Categorize data properly
        setNewArrival(res?.data?.newArrivals);
        setBestSeller(res?.data?.bestSellers);
        setFeatureProduct(res?.data?.featureProducts);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const { labels, revenues } = processRevenueData(result?.delivered || []);

  const data = {
    labels,
    datasets: [
      {
        label: "Total Revenue",
        data: revenues,
        borderColor: "#DDA853",
        backgroundColor: "#16404D",
        tension: 0.4,
        fill: true,
      },
    ],
  };

  const metrics = [
    {
      icon: <TrendingUp />,
      label: "Order Placed",
      value: "25k",
      cardBg: "#f5f5f5",
      iconBg: "#d1c4e9",
      data: result?.ordered?.length,
    },
    {
      icon: <AttachMoney />,
      label: "In Shipping",
      value: "25k",
      cardBg: "#e3f2fd",
      iconBg: "#bbdefb",
      data: result?.shipped?.length,
    },
    {
      icon: <LocalShippingIcon />,
      label: "Delivered",
      value: "4k",
      cardBg: "#ede7f6",
      iconBg: "#b39ddb",
      data: result?.delivered?.length,
    },
    {
      icon: <HighlightOffIcon />,
      label: "Cancelled",
      value: "4k",
      cardBg: "#f1f8e9",
      iconBg: "#c5e1a5",
      data: result?.cancelled?.length,
    },
  ];

  const salesReps = [
    {
      icon: <InventoryIcon />,
      name: "Total Products",
      cardBg: "#f3e5f5",
      iconBg: "#ce93d8",
      data: result?.totalProducts,
    },
    {
      icon: <LocalShippingIcon />,
      name: "Total Orders",
      cardBg: "#e8f5e9",
      iconBg: "#81c784",
      data: result?.Orders,
    },
    {
      icon: <GroupIcon />,
      name: "Total Users",
      cardBg: "#e3f2fd",
      iconBg: "#64b5f6",
      data: result?.Users,
    },
    {
      icon: <StarBorderIcon />,
      name: "Total Reviews",
      cardBg: "#fff3e0",
      iconBg: "#ffb74d",
      data: result?.Reviews,
    },
  ];

  const renderProductList = (section, title) => (
    <Card
      sx={{
        p: 2,
        mb: 2,
      }}
    >
      <Typography variant="body1" color="text.secondary" gutterBottom>
        {title}
      </Typography>
      {section?.slice(0, 3)?.map((item, index) => (
        <Box
          key={index}
          sx={{
            display: "flex",
            justifyContent: "space-between",
            mb: 1,
            alignItems: "center",
            gap: 2,
          }}
        >
          <CardMedia
            component="img"
            src={item.image?.[0]}
            sx={{ width: "70px", cursor: "pointer" }}
            onClick={(e) =>
              navigate(`/view-product/${item?._id}/${item?.modelNumber}`)
            }
          />
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
            }}
          >
            <Typography variant="body1">{item.productName}</Typography>
            <Typography variant="body2" color="textSecondary">
              {`${item.description.slice(0, 40)}...`}
            </Typography>
          </Box>

          <Stack direction="row">
            <Chip
              label={item.offerPrice}
              sx={{ bgcolor: "#DDA853", color: "white", width: "100px" }}
            />
          </Stack>
        </Box>
      ))}
    </Card>
  );
  return (
    <Box sx={{ p: 3 }}>
      {/* Top Sales Representatives */}
      <Grid container spacing={2} sx={{ mb: 3 }}>
        {salesReps.map((item, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Card
              sx={{
                display: "flex",
                alignItems: "center",
                p: 2,
                height: "120px",
                backgroundColor: item.cardBg,
                boxShadow: 3,
                borderRadius: 2,
                gap: "16px",
              }}
            >
              <Avatar
                sx={{ bgcolor: item.iconBg, p: 1, width: 56, height: 56 }}
              >
                {item.icon}
              </Avatar>
              <Box>
                <Typography variant="body2" color="text.secondary">
                  {item.name}
                </Typography>
                <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                  {item?.data}
                </Typography>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Metrics */}
      <Grid container spacing={2} sx={{ mb: 3 }}>
        {metrics.map((item, i) => (
          <Grid item xs={12} sm={6} md={3} key={i}>
            <Card
              sx={{
                p: 3,
                display: "flex",
                alignItems: "center",
                backgroundColor: item.cardBg,
                boxShadow: 3,
                borderRadius: 2,
              }}
            >
              <Avatar
                sx={{
                  bgcolor: item.iconBg,
                  p: 1,
                  width: 56,
                  height: 56,
                  mr: 2,
                }}
              >
                {item.icon}
              </Avatar>
              <Box>
                <Typography variant="body2" color="text.secondary">
                  {item.label}
                </Typography>
                <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                  {item.data}
                </Typography>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>

      <OrderCharts orderData={result} />

      {/* Charts */}
      <Grid container spacing={2}>
        <Grid item xs={12} md={8}>
          <Card
            sx={{
              p: 3,
             
              borderRadius: 2,
            }}
          >
            <Typography variant="h6" gutterBottom>
              Visual Representations of Revenue
            </Typography>
            <Box height={430} sx={{ width: "100%" }}>
              <Line data={data} options={options} />
            </Box>
          </Card>
        </Grid>

        <Grid item xs={12} md={4}>
          <Card
            sx={{
              p: 3,
            }}
          >
            {renderProductList(bestSeller, "Latest Best Sellers")}
          </Card>
          <Card
            sx={{
              p: 3,

              mt: 2,
            }}
          >
            {renderProductList(featureProduct, "Latest Feature Products")}
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard;
