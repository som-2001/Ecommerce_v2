import { Box } from "@mui/material"
import { Hero } from './../components/profile/Hero';
import { Form } from "../components/profile/Form";
import { ManageAddresses } from "../components/profile/ManageAddresses";
import { WishList } from "../components/profile/WishList";
import { Orders } from "../components/profile/Orders";
import Footer from './../components/Footer';


function Profile(){
    return(
        <>
        <Box sx={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",overflowX:"hidden"}}>
            <Hero/>
            <Form/>
            <ManageAddresses/>
            <Orders/>
            <WishList/>
     
        </Box>
        <Footer/>
        </>
    )
}

export default Profile;