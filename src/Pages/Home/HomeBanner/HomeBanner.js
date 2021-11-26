import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import model1 from '../../../images/model1.jpg';
import model2 from '../../../images/model2.jpg';
import Typography from '@mui/material/Typography';


const HomeBanner = () => {
    return (
     
        <Box  sx={{ flexGrow: 1 }}>
               <Typography 
        style={{margin: '30px 20px 0 10px', color : '#82022C', fontWeight: 600}}
        variant="h3" gutterBottom component="div">
         Welcome to Lipstick World
        </Typography> 
        <Grid container spacing={2}>
        <Grid item xs={6} md={4}>
           <img
           style={{width: 200, height:250, margin: '60px 40px 0 10px'}}
           src={model1} alt=""/>
        </Grid>
        <Grid item xs={6} md={4}>
        <img
           style={{width: 220, height:400, margin: '100px 280px 0 10px'}}
           src={model2} alt=""/>
        </Grid>
        <Grid item xs={6} md={4}>
        <Typography 
        style={{margin: '100px 100px 0 10px', color : '#6B142F'}}
        variant="h3" gutterBottom component="div">
        ~~ EXCLUSIVE FLAT *30%* Discount~~
      </Typography>
        <Typography 
        style={{margin: '10px 20px 0 10px', color : '#B95272'}}
        variant="h6" gutterBottom component="div">
        --on any LIPSTICK you want
      </Typography>
        </Grid>
       
        
      </Grid>
      </Box>
    );
};

export default HomeBanner;