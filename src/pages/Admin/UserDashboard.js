import { Box, Typography } from "@mui/material";
import UserTable from "../../components/Admin/Users/UserTable";
import { useEffect, useState } from "react";
import axios from "axios";
import styles from "../../styles/Admin/ReviewDashboard.module.css";

export const UserDashboard = () => {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1); 
  const [limit, setLimit] = useState(10); 
  const [total, setTotal] = useState(0); 
  const [search, setSearch] = useState('');
  const [role, setRole] = useState('');
  const [sortBy, setSortBy] = useState('createdAt');
  const [sortOrder, setSortOrder] = useState('desc'); 

  const fetchUsers = () => {
    // Construct query parameters
    const queryParams = new URLSearchParams({
      page,
      limit,
      search,
      role,
      sortBy,
      sortOrder,
    }).toString();

    // API call
    axios
      .get(`${process.env.REACT_APP_BASEURL}/users/users?${queryParams}`, { withCredentials: true })
      .then((res) => {
        console.log(res.data);
        setUsers(res.data?.users);
        setTotal(res.data?.total)
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchUsers(); 
  }, [page, limit, search, role, sortBy, sortOrder]); 

  return (
    <Box className={styles.parent}>
      <Typography variant="body1" sx={{ mb: 4, fontSize: "20px" }} color="text.secondary">
        User Dashboard
      </Typography>
      <UserTable
        users={users}
        setUsers={setUsers}
        page={page}
        setPage={setPage}
        total={total}
        limit={limit}
        setLimit={setLimit}
        search={search}
        setSearch={setSearch}
        role={role}
        setRole={setRole}
        sortBy={sortBy}
        setSortBy={setSortBy}
        sortOrder={sortOrder}
        setSortOrder={setSortOrder}
      />
    </Box>
  );
};
