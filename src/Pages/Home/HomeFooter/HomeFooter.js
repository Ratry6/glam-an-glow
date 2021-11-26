import Button from '@restart/ui/esm/Button';
import React from 'react';
import './HomeFooter.css';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import footerimg from '../../../images/footerimg.jpg';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faMailBulk, faPhone } from '@fortawesome/free-solid-svg-icons';
import { fab, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';



const HomeFooter = () => {
    const [value, setValue] = React.useState(0);
    
    return (
        <div>
        <div className="footer--part">
            <input className="input-text" type="text" placeholder="Enter your E-mail Address" />
            <Button className="btn-subscribe">Subscribe Us</Button>
            <Box sx={{ width: 500 }}>
      <BottomNavigation
      sx={{marginLeft : '380px', width:'500px'}}
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
        <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
        <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />
      </BottomNavigation>
    </Box>
            <div className="footer-detail">
                <div className="footer-intro">
                    <h2 className="footer-title">Glam-and-Glow</h2>
                    <img src={footerimg}
                    />
                </div>

                <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
        <Typography 
        style={{margin: '80px 0 10px 20px', color : '#F7F2F2', fontWeight: 600}}
        variant="h6" gutterBottom component="div">
        Contact
        </Typography> 
        <Typography  sx={{marginLeft:'10px'}}>
        <FontAwesomeIcon icon={faHome} /> Gulshan 1
        </Typography> 
        <Typography  sx={{marginLeft:'10px'}} >
         Dhaka
        </Typography> 
        <Typography  sx={{marginLeft:'45px'}} >
         Bangladesh
        </Typography> 
        <br/>
        <Typography  sx={{marginLeft:'45px'}} >
        <FontAwesomeIcon icon={faPhone} /> 0181818838

        </Typography> 
        <Typography  sx={{marginLeft:'45px'}} >
        02-99999

        </Typography> 
        
        </Grid>
        <Grid item xs={12} md={6}>
        <Typography 
        style={{ margin: '80px 150px 10px 10px',color : '#F7F2F2', fontWeight: 600}}
        variant="h6" gutterBottom component="div">
     Social
        </Typography> 
        <Typography  sx={{marginLeft:'20px'}} >
        <FontAwesomeIcon icon={faMailBulk} /> glamandglow@gmail.com

        </Typography> 
        <br/>
       
        <Typography  sx={{marginLeft:'25px'}} >
        <FontAwesomeIcon icon={faFacebook}/>
        glamandglow/facebook.com


        </Typography> 
        <br/>
        <Typography   >
        <FontAwesomeIcon icon={faInstagram}/>  
        glam-and-glow


        </Typography> 
        </Grid>
        
      </Grid>
    </Box>



                
            </div>

        </div>
    </div>
    );
};

export default HomeFooter;