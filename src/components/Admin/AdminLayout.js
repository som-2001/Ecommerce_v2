import { Box } from "@mui/material";
import Topbar from "./Topbar";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";

export const AdminLayout = () => {
  return (
    <Box display="flex">
      <Sidebar />
      <Box flex={1} bgcolor="#f7f9fc">
        <Topbar />
        <Box p={2}><Outlet/></Box>
      </Box>
    </Box>
  );
};
