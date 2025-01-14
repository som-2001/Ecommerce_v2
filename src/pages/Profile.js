import { Box } from "@mui/material";
import { Hero } from "./../components/profile/Hero";
import { Form } from "../components/profile/Form";
import { ManageAddresses } from "../components/profile/ManageAddresses";
import { WishList } from "../components/profile/WishList";
import { Orders } from "../components/profile/Orders";
import Footer from "./../components/Footer";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";

function Profile() {
  const [data, setData] = useState([]);
  const [orders,setOrders]=useState([]);
  const [orderError,setOrderError]=useState('');
  const [orderLength,setOrderLength]=useState('');
  const [changeState,setChangeState]=useState(false);

  useEffect(() => {
    axios
      .get(
        `${process.env.REACT_APP_BASEURL}/users/users/${
          jwtDecode(Cookies.get("accessToken")).id
        }`,
        { withCredentials: true }
      )
      .then((res) => {
        console.log(res.data);
        setData(res.data);
       
      })
      .catch((err) => {
        console.log(err);
      });

    axios
      .get(`${process.env.REACT_APP_BASEURL}/orders/userOrders?limit=2`, {
        withCredentials: true,
      })
      .then((res) => {
        console.log(res.data);
        setOrders(res.data?.orders);
        setOrderLength(res.data.orderLength);

      })
      .catch((err) => {
        setOrderError(err?.response?.data?.message)
        console.log(err);
      });
  }, [changeState]);

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          overflowX: "hidden",
        }}
      >
        <Hero data={data} />
        <Form data={data} setChangeState={setChangeState}/>
        <ManageAddresses profile={data} />
        <Orders orders={orders} orderLength={orderLength} orderError={orderError}/>
        <WishList />
      </Box>
      <Footer />
    </>
  );
}

export default Profile;
