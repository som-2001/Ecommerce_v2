import Cookies from 'js-cookie';
import { Navigate, Outlet } from 'react-router-dom';
import { HomeNavbar } from './HomeNavbar';
import { AuthNavbar } from './AuthNavbar';
export const ProtectedRoute=()=>{
   
    const token=Cookies.get("accessToken");
    
    // if(!token) return <Navigate to="/signin"/>

    return(
        <>
        {token? <AuthNavbar/> : <HomeNavbar/>}
        <Outlet/>
        </>
    )
}