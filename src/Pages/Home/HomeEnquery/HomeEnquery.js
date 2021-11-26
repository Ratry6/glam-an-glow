import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import bg from '../../../images/enqueryBg.jpg'
import { TextField } from '@mui/material';
import Button from '@mui/material/Button';

const enqueryBg = {
    background: `url(${bg})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover'

}

const HomeEnquery = () => {
    return (
        <Box style={enqueryBg} sx={{ flexGrow: 1 }}>
            <Typography
                style={{ margin: '50px 20px 10 10px', color: '#E5BEE5', fontWeight: 600, fontFamily: 'cursive' }}
                variant="h4" gutterBottom component="div">
                get in touch
            </Typography>
            <Typography
                style={{ margin: '20px 70px', color: '#6A346A', fontWeight: 500, fontFamily: 'inherit' }}
                variant="h6" gutterBottom component="div">
                luxury Lipstick Brands That Will Make You Feel Fancy.When it comes to lipstick, performance is essential. A lipstick should last throughout your workday.
            </Typography>
            <Grid sx={{margin:'60px 50px'}} container spacing={2}>
                <Grid item xs={6} md={4}>
                    <Box
                        component="form"
                        sx={{
                            '& .MuiTextField-root': { m: 1, width: '25ch' },
                        }}
                        noValidate
                        autoComplete="off"
                    >
                        <TextField
                            id="name"
                            label="Name"
                            type="name"
                            variant="filled"
                        />
                        <TextField
                            id="email"
                            label="Email Address"
                            type="email"
                            variant="filled"
                        />
                        <TextField
                            id="name"
                            label="Phone Number"
                            type="name"
                            variant="filled"
                        />
                    </Box>
                </Grid>
                <Grid item xs={6} md={4}>
                    <Box
                        component="form"
                        sx={{
                            '& .MuiTextField-root': { m: 1, width: '25ch' },
                        }}
                        noValidate
                        autoComplete="off"
                    >
                        <TextField
                            id="filled-search"
                            label="serach your desire lipstick brand"
                            type="search"
                            variant="filled"
                        />
                         <TextField
          id="filled-number"
          label="how much lipstick you need?"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          variant="filled"
        />
         <TextField
          id="filled-helperText"
          label="message*"
          defaultValue="type here.."
          helperText="Some important text"
          variant="filled"
        />
                    </Box>
                </Grid>

            </Grid>


            <Button type="subit" sx={{backgroundColor:'#D633D6', margin:'60px 0 90px 0'}} variant="contained">Send Enquery</Button>
        </Box >
        
    );
};

export default HomeEnquery;