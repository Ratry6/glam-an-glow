import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import { Alert, CircularProgress, Grid, TextField } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import img from '../../../images/login.jpg';
import Button from '@mui/material/Button';
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/UseFirebase/UseAuth';


const Login = () => {
    const location = useLocation();
    const history = useHistory();
    const uri = location.state?.from || '/dashboard';

    const [loginData, setLoginData] = useState({});

    const { user, isLoading, error, signInUser, } = useAuth();


    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLogInData = { ...loginData };
        newLogInData[field] = value;
        console.log(newLogInData)

        setLoginData(newLogInData)
    }

    const handleLogin = e => {
        signInUser(loginData.email, loginData.password, uri, history);
        
        alert('you have logged in successfully')
        e.preventDefault();
    }
    return (


        <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
                <img
                    style={{ width: '600px', height: '300px', margin: '150px 20px 0 100px' }}
                    src={img} lt="" />
            </Grid>
            <Grid item xs={12} md={6}>
                <Typography variant="h4"
                    sx={{ color: '#C00B4F', fontWeight: '400', margin: '100px 10px 20px 5px' }}
                    component="div" gutterBottom>
                    <FontAwesomeIcon icon={faSignInAlt} />  Login
                </Typography>
                <form onSubmit={handleLogin}>

                    <TextField
                        style={{ marginBottom: '20px' }}
                        required
                        id="email"
                        label="Email"
                        name="email"
                        onChange={handleOnChange}
                    />
                    <br />
                    <TextField
                        required
                        id="outlined-password-input"
                        label="Password"
                        type="password"
                        name="password"

                        onChange={handleOnChange}
                    />
                    <br />
                    <Button
                        type="submit"
                        sx={{ backgroundColor: "#E6A0DF", color: "#C00B4F", fontWeight: "600" }}
                        variant="contained">Login</Button>
                </form>

                <br />
                <NavLink to="/register" >
                    <Button
                        style={{ textDecoration: "none", marginTop: '10px' }}
                        variant="text">New User? Please Register</Button>
                </NavLink>
                {isLoading && <CircularProgress />}
                {user?.email && <Alert severity="success">Thanks for logging in</Alert>}
                {error && <Alert severity="error">{error} </Alert>}
            </Grid>

        </Grid>


    );
};

export default Login;