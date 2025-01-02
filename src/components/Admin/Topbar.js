import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Avatar,
  Button,
  Badge,
  TextField,
  InputAdornment,
} from "@mui/material";
import { Notifications } from "@mui/icons-material";
import SearchIcon from '@mui/icons-material/Search';

const Topbar = () => {
  return (
    <AppBar position="static" color="transparent" elevation={0} sx={{ mb: 0 }}>
      <Toolbar>
        <TextField
          placeholder="Search…"
          sx={{
            background: "#e1eef5",
            borderRadius: 2,
            // p: "0 20px",
            flex: 1,
            marginRight: 1,
          }}
          slotProps={{
            input: {
              endAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            },
          }}
        />
        <IconButton sx={{ bgcolor: "#d3e9f5",mr:2 }}>
          <Badge badgeContent={4} color="error">
            <Notifications />
          </Badge>
        </IconButton>
        <Button
          sx={{
            width: "120px",
            backgroundColor: "black",
            color: "white",
            p: 1,
            borderRadius: 2,
            mr: 1,
          }}
        >
          Logout
        </Button>
        <Avatar sx={{ bgcolor: "#eb6cc2" }}>A</Avatar>
      </Toolbar>
    </AppBar>
  );
};

export default Topbar;
