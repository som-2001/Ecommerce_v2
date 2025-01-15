import {
    Box,
    Button,
    Checkbox,
    FormControlLabel,
    Typography,
    Divider,
  } from "@mui/material";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
  
  export const Amount = ({length}) => {

    const navigate=useNavigate();
    const {amount}=useSelector(state=>state.product);
    const [cartItems,setCartItems] =useState(0);

    useEffect(()=>{
       if(length){
        setCartItems(length)
       }
    },[]);
    
    return (
      <Box sx={{ padding: 2, border: "1px solid #e0e0e0", borderRadius: "8px",}}>
        {/* Coupons Section */}
        <Typography
          sx={{ fontSize: "16px", fontWeight: "600", marginBottom: "8px" }}
        >
          COUPONS
        </Typography>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: "16px",
          }}
        >
          <Typography sx={{ fontSize: "14px", fontWeight: 500 }}>
            Apply Coupons
          </Typography>
          <Button
            variant="outlined"
            sx={{
              fontSize: "12px",
              padding: "4px 12px",
              textTransform: "none",
              borderColor: "#ff4081",
              color: "#ff4081",
              "&:hover": {
                borderColor: "#ff4081",
                backgroundColor: "#fff5f8",
              },
            }}
          >
            Apply
          </Button>
        </Box>
  
        <Divider sx={{ marginBottom: "16px" }} />
  
        {/* Donation Section */}
        <Typography
          sx={{ fontSize: "16px", fontWeight: "600", marginBottom: "8px" }}
        >
          SUPPORT TRANSFORMATIVE SOCIAL WORK IN INDIA
        </Typography>
        <FormControlLabel
          control={<Checkbox size="small" />}
          label="Donate and make a difference"
          sx={{ fontSize: "14px", color: "#424242", marginBottom: "8px" }}
        />
        <Box
          sx={{
            display: "flex",
            gap: "8px",
            flexWrap: "wrap",
            marginBottom: "16px",
          }}
        >
          {["₹10", "₹20", "₹50", "₹100"].map((amount, index) => (
            <Button
              key={index}
              variant="outlined"
              sx={{
                fontSize: "12px",
                padding: "4px 12px",
                textTransform: "none",
                borderColor: "#e0e0e0",
                "&:hover": {
                  borderColor: "#424242",
                },
              }}
            >
              {amount}
            </Button>
          ))}
        </Box>
        <Typography
          sx={{
            fontSize: "12px",
            color: "#ff4081",
            cursor: "pointer",
            marginBottom: "16px",
          }}
        >
          Know More
        </Typography>
  
        <Divider sx={{ marginBottom: "16px" }} />
  
        {/* Price Details Section */}
        <Typography
          sx={{
            fontSize: "16px",
            fontWeight: "600",
            marginBottom: "8px",
          }}
        >
          PRICE DETAILS ({length.length} Items)
        </Typography>
        <Box sx={{ marginBottom: "16px" }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "8px",
            }}
          >
            <Typography sx={{ fontSize: "14px" }}>Total MRP</Typography>
            <Typography sx={{ fontSize: "14px", fontWeight: "600" }}>
              {amount}
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "8px",
            }}
          >
            <Typography sx={{ fontSize: "14px" }}>Discount on MRP</Typography>
            <Typography
              sx={{ fontSize: "14px", fontWeight: "600", color: "#4caf50" }}
            >
              0
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "8px",
            }}
          >
            <Typography sx={{ fontSize: "14px" }}>Coupon Discount</Typography>
            <Typography
              sx={{
                fontSize: "14px",
                fontWeight: "600",
                color: "#ff4081",
                cursor: "pointer",
              }}
            >
              Apply Coupon
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "8px",
            }}
          >
            <Typography
              sx={{ fontSize: "14px", cursor: "pointer", color: "#ff4081" }}
            >
              Platform Fee
            </Typography>
            <Typography sx={{ fontSize: "14px", fontWeight: "600" }}>
              0
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "8px",
            }}
          >
            <Typography
              sx={{ fontSize: "14px", cursor: "pointer", color: "#ff4081" }}
            >
              Shipping Fee
            </Typography>
            <Typography
              sx={{
                fontSize: "14px",
                fontWeight: "600",
                color: "#4caf50",
              }}
            >
              FREE
            </Typography>
          </Box>
        </Box>
  
        <Divider sx={{ marginBottom: "16px" }} />
  
        {/* Total Amount */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: "16px",
          }}
        >
          <Typography sx={{ fontSize: "16px", fontWeight: "600" }}>
            Total Amount
          </Typography>
          <Typography sx={{ fontSize: "16px", fontWeight: "600" }}>
            {amount}
          </Typography>
        </Box>
  
        {/* Place Order Button */}
        <Button
          variant="contained"
          fullWidth
          disabled={amount===0}
          sx={{
            backgroundColor: "#ff4081",
            color: "#ffffff",
            padding: "12px 0",
            fontSize: "16px",
            textTransform: "none",
            fontWeight: "600",
            "&:hover": {
              backgroundColor: "#ff1c75",
            },
          }}
          onClick={(e)=>navigate(`/payment/bike-order-cart`)}
        >
          Place Order
        </Button>
      </Box>
    );
  };
  