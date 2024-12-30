import Cookies from 'js-cookie';
import { Outlet } from 'react-router-dom';
import { HomeNavbar } from './HomeNavbar';
import { AuthNavbar } from './AuthNavbar';
export const ProtectedRoute=()=>{
   
    const token=Cookies.get("accessToken");
    console.log(token);
    console.log("sgseg");

    return(
        <>
        {token? <AuthNavbar/> : <HomeNavbar/>}
        <Outlet/>
        </>
    )
}