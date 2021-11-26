import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import { Alert, CircularProgress, Grid, TextField } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRegistered } from '@fortawesome/free-solid-svg-icons';
import img from '../../../images/register.png';
import Button from '@mui/material/Button';
import { NavLink, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/UseFirebase/UseAuth';


const Register = () => {
    const {user, createUser, isLoading,error} =   useAuth();
    
    const [loginData, setLoginData] = useState({});
    const history = useHistory();

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLogInData = { ...loginData };
        // console.log(newLogInData, field, value );
        newLogInData[field]  = value;
 
            
        setLoginData(newLogInData)
    }

    

    const handleLogin = e => {
        if(loginData.password !== loginData.password2){
            alert('your password did not match');
            return
        }
     createUser(loginData.email, loginData.password,history);
     console.log(loginData.email, loginData.password);
        e.preventDefault();
    }
   
    return (
        <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
                <img
                    style={{ width: '800px', height: '300px', margin: '150px 20px 0 40px' }}
                    src={img} lt="" />
            </Grid>
            <Grid item xs={12} md={6}>
                <Typography variant="h4"
                    sx={{ color: '#C00B4F', fontWeight: '400', margin: '50px 10px 20px 5px' }}
                    component="div" gutterBottom>
                    <FontAwesomeIcon icon={faRegistered} />  Register
                </Typography>
              { !isLoading && <form onSubmit={handleLogin}>
                   
                    <TextField
                        style={{ marginBottom: '20px' }}
                        required
                        label="Email"
                        type="email"
                        name="email"
                        onChange={handleOnChange}
                    />
                    <br />
                    <TextField
                        style={{ marginBottom: '20px' }}
                        required
                        label="Password"
                        type="password"
                        name="password"
                        onChange={handleOnChange}
                    />
                    <br/>
                    <TextField
                        style={{ marginBottom: '20px' }}
                        required
                        label="re-type your password"
                        type="password"
                        name="password2"
                        onChange={handleOnChange}
                    />
                    <br/>
                     <Button
               
                    type="submit"
                    sx={{ backgroundColor: "#E6A0DF", color: "#C00B4F", fontWeight: "600" }}
                    variant="contained">Create Account</Button>
                </form>}
                {isLoading && <CircularProgress/>}
                {user?.email && <Alert severity="success">Congrats! your account created successfully</Alert> }
               {error &&  <Alert severity="error">{error} </Alert>}
               
                    <br/>
                    <NavLink to="/login" >
                        <Button 
                        style={{textDecoration :'none', marginTop:'10px'}}
                        variant="text">Already Registered? Please Login</Button>
                    </NavLink>
            </Grid>

        </Grid>

    );
};

export default Register;