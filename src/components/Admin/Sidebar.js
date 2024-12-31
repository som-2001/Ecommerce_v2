import React from 'react';
import { Box, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { Dashboard, MonetizationOn, Queue, HealthAndSafety } from '@mui/icons-material';

const Sidebar = () => {
  return (
    <Box width="250px" bgcolor="#4e59e7"  color="white">
      <Box textAlign="center" p={2} fontSize={20}>
        VENTES
      </Box>
      <List>
        {[
          { label: 'Dashboard', icon: <Dashboard /> },
          { label: 'Claims', icon: <MonetizationOn /> },
          { label: 'Biller Queue', icon: <Queue /> },
          { label: 'Health', icon: <HealthAndSafety /> },
        ].map((item, index) => (
          <ListItem button key={index}>
            <ListItemIcon sx={{ color: 'white' }}>{item.icon}</ListItemIcon>
            <ListItemText primary={item.label} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default Sidebar;
