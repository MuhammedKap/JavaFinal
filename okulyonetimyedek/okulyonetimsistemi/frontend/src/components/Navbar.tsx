import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import SchoolIcon from '@mui/icons-material/School';

const Navbar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <SchoolIcon sx={{ mr: 2 }} />
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Okul Yönetim Sistemi
        </Typography>
        <Box>
          <Button color="inherit" component={RouterLink} to="/">
            Ana Sayfa
          </Button>
          <Button color="inherit" component={RouterLink} to="/students">
            Öğrenciler
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar; 