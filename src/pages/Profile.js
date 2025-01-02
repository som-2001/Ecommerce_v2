import { Box } from "@mui/material";
import { Hero } from "./../components/profile/Hero";
import { Form } from "../components/profile/Form";
import { ManageAddresses } from "../components/profile/ManageAddresses";
import { WishList } from "../components/profile/WishList";
import { Orders } from "../components/profile/Orders";
import Footer from "./../components/Footer";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { ScaleLoader } from "react-spinners";

function Profile() {
  const { data,isPending,isError } = useQuery({
    queryKey: ["profile"],
    queryFn: async () => {
      const response = await axios.get(
        `${process.env.REACT_APP_BASEURL}/user/profile`,
        {
          withCredentials: true,
        }
      );
      return response.data;
    },
  });

  if (isPending) return <Box sx={{display:"flex",justifyContent:"center",alignItems:"center",minHeight:"100vh"}}><ScaleLoader color="black"/></Box>;
  if (isError) return <div>Error :</div>;

  console.log(data);
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
        <ManageAddresses />
        <Orders />
        <WishList />
      </Box>
      <Footer />
    </>
  );
}

export default Profile;
