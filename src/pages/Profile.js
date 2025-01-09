import { Box } from "@mui/material";
import { Hero } from "./../components/profile/Hero";
import { Form } from "../components/profile/Form";
import { ManageAddresses } from "../components/profile/ManageAddresses";
import { WishList } from "../components/profile/WishList";
import { Orders } from "../components/profile/Orders";
import Footer from "./../components/Footer";
import axios from "axios";
import {jwtDecode} from "jwt-decode";
import Cookies from 'js-cookie';
import { useEffect, useState } from "react";

function Profile() {

  const [data,setData]=useState([]);

  useEffect(()=>{
    axios.get(`${process.env.REACT_APP_BASEURL}/users/users/${jwtDecode(Cookies.get("accessToken")).id}`,{withCredentials:true}).then(res=>{
      console.log(res.data);
      setData(res.data)
    }).catch(err=>{
      console.log(err);
    });
  },[]);
  // const { data,isPending,isError } = useQuery({
  //   queryKey: ["profile"],
  //   queryFn: async () => {
  //     const response = await axios.get(
  //       `${process.env.REACT_APP_BASEURL}/users/users/${jwtDecode(Cookies.get("accessToken")).id}`,
  //       {
  //         withCredentials: true,
  //       }
  //     );
  //     return response.data;
  //   },
  // });

  // if (isPending) return <Box sx={{display:"flex",justifyContent:"center",alignItems:"center",minHeight:"100vh"}}><ScaleLoader color="black"/></Box>;
  // if (isError) return <div>Error :</div>;


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
        <Hero data={data}/>
        <Form data={data}/>
        <ManageAddresses profile={data}/>
        <Orders />
        <WishList />
      </Box>
      <Footer />
    </>
  );
}

export default Profile;
