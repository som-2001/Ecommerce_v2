import { Box, Grid } from "@mui/material";
import { CartProduct } from "../components/cart/CartProducts";
import { Amount } from "../components/cart/Amout";
import { useEffect, useState } from "react";
import axios from "axios";

export const Cart = () => {
  const [cart, setCart] = useState([]);
  const [amount,setAmount]=useState('');
  

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BASEURL}/cart/product/cart/view`, {
        withCredentials: true,
      })
      .then((res) => {
        setCart(res.data.products);
        setAmount(res.data.totalPrice);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Box sx={{ width: "77vw", my: 5 }}>
        <Grid container spacing={2}>
          {/* Cart Product Grid */}
          <Grid item xs={12} md={7} lg={9}>
            {cart?.map((data, index) => (
              <CartProduct setCart={setCart} cart={data} key={index} />
            ))}
          </Grid>

          {/* Amount Grid */}
          <Grid
            item
            xs={12}
            md={5}
            lg={3}
            sx={{
              position: "sticky", // Makes the Amount sticky
              top: "10px", // Keeps it at the top of the viewport
              height: "fit-content", // Prevents stretching of the grid
            }}
          >
            <Amount amount={amount} length={cart}/>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};
