import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import { NavLink } from 'react-router-dom';
import Button from '@mui/material/Button';
import useAuth from '../../../hooks/UseFirebase/UseAuth';





const Navigation = () => {
  const {user,logout} = useAuth();
    return (
        <Box sx={{ flexGrow: 1}}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Glam and Glow
          </Typography>
          <NavLink 
          style={{textDecoration :'none', color: 'white'}}
          to="/home">
            <Button color="inherit">Home</Button>

          </NavLink>
          <NavLink 
          style={{textDecoration :'none', color: 'white'}}
          to="/explore">
            <Button color="inherit">Explore More</Button>

          </NavLink>
         
       { user?.email ?
       <Box>
         <NavLink 
          style={{textDecoration :'none', color: 'white'}}
          to="/dashboard">
            <Button  color="inherit">Dashboard</Button>

          </NavLink>
          <Button onClick={logout} color="inherit">Logout</Button>
         </Box>
        :
       <NavLink 
          style={{textDecoration :'none', color: 'white'}}
          to="/login">
            <Button  color="inherit">Login</Button>

          </NavLink>}
        
        </Toolbar>
      </AppBar>
    </Box>
    );
};

export default Navigation;