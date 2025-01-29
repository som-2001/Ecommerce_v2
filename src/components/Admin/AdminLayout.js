import { Box } from "@mui/material";
import Topbar from "./Topbar";
import Sidebar from "./Sidebar";
import { Navigate, Outlet } from "react-router-dom";
import Cookies from "js-cookie";
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import styles from '../../styles/BasicDetails.module.css'

export const AdminLayout = () => {

  const token = Cookies.get("accessToken");
  
  const reset=()=>{
    window.scrollTo(0,0)
  }
  if (!token) return <Navigate to="/" />;

  return (
    <Box display="flex">
      <Sidebar />
      <Box flex={1} bgcolor="#f7f9fc" >
        <Topbar />
        <Box p={2}>
          <Outlet/>
          <ArrowUpwardIcon className={styles.arrow} onClick={reset}/>
        </Box>
      </Box>
    </Box>
  );
};
