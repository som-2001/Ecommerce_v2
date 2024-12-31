import React from 'react';
import { AppBar, Toolbar, IconButton, InputBase, Avatar } from '@mui/material';
import { Search, Notifications } from '@mui/icons-material';

const Topbar = () => {
  return (
    <AppBar position="static" color="transparent" elevation={0} sx={{ mb: 2 }}>
      <Toolbar>
        <InputBase
          placeholder="Search…"
          sx={{
            background: '#f1f3f5',
            borderRadius: 2,
            p: '0 10px',
            flex: 1,
            marginRight: 2,
          }}
        />
        <IconButton>
          <Notifications />
        </IconButton>
        <Avatar>DC</Avatar>
      </Toolbar>
    </AppBar>
  );
};

export default Topbar;
