import { Alert, Button,TextField } from '@mui/material';
import React, { useState } from 'react';

const MakeAdmin = () => {
    const [email, setEmail] = useState('');
const[success,setSuccess]= useState(false);

    const handleAdminSubmit= e=>{
        const user = {email};
        console.log(user)

        fetch('https://quiet-sands-64773.herokuapp.com/users/admin',{
            method: 'PUT',
            headers: {
                'content-type' : 'application/json'
            },
            body : JSON.stringify(user)
        })
        .then(res=> res.json())
        .then(data=>{
            if(data.modifiedCount){
                console.log(data);
                setSuccess(true);            }
           
        })
        e.preventDefault()
    }
    const handleEmail = e=>{
        setEmail(e.target.value);
    }
    return (
        <div>
            <h2>make me admin</h2>
            <form onSubmit={handleAdminSubmit}>
            <TextField id="standard-basic" label="Email" type="email" onBlur={handleEmail} variant="standard" />
            <br/>
            <Button type="submit" variant="contained">Make Admin</Button>
            </form>
            {success && <Alert severity="success">Made Admin successfully</Alert>}
        </div>
    );
};

export default MakeAdmin;