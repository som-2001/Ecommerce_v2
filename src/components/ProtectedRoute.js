import Cookies from "js-cookie";
import { Navigate, Outlet } from "react-router-dom";
import { AuthNavbar } from "./AuthNavbar";
import { Box } from "@mui/material";
import { Search } from "./Search";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import styles from "../styles/BasicDetails.module.css";

export const ProtectedRoute = () => {
  const token = Cookies.get("accessToken");

  const reset = () => {
    window.scrollTo(0, 0);
  };
  if (!token) return <Navigate to="/" />;

  return (
    <Box>
      <AuthNavbar />
      <Search />
      <Outlet />
      <ArrowUpwardIcon className={styles.arrow} onClick={reset} />
    </Box>
  );
};
