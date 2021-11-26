import React, { useEffect, useState } from 'react';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { useParams } from 'react-router';
import { useForm } from "react-hook-form";
import { Grid, TextField } from '@mui/material';
import useAuth from '../../../hooks/UseFirebase/UseAuth';



const PlaceOrder = () => {

    const { register, handleSubmit, reset } = useForm();
    const { user } = useAuth();
    const email = user.email;


    const [details, setDetails] = useState([]);
    useEffect(() => {
        fetch(`https://quiet-sands-64773.herokuapp.com/selectedProduct/${id}`)
            .then(res => res.json())
            .then(data => {
                setDetails(data);
                console.log(data)


            })
    }, [])
    const { id } = useParams();

    // console.log(details)




    const onSubmit = data => {



        const dumpyData = { ...details, ...data, email, status:'pending' }
        console.log(dumpyData)


        console.log(data);

        fetch('https://quiet-sands-64773.herokuapp.com/placingorder', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(dumpyData)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('your order is placed sucessfully');
                    reset();

                }
            })
    }
    return (
        <>
            {
                details.map(detail => <Grid sx={{ margin: '50px 10px' }} container spacing={2}>
                    <Grid items sm={12} md={6}>
                        <div>
                            <img style={{ width: '320px' }}
                                src={detail.img} />
                        </div>
                    </Grid>
                    <Grid items sm={12} md={6}>
                        <CardContent>
                            <Typography sx={{ fontSize: 30, color: '#1473A0' }} color="text.secondary" gutterBottom>
                                The product you have selected-
                            </Typography>
                            <Typography sx={{ fontSize: 25, color: '#4189AA', marginBottom: '20px' }} variant="h5" component="div">
                                Item Name:{detail.name}
                            </Typography>
                            <Typography sx={{ mb: 2, color: '#303D45' }} color="text.secondary">
                                price : ${detail.price}
                            </Typography>
                            <Typography variant="body2">
                                <TextField
                                    id="outlined-number"
                                    label="lipstick shade no"
                                    type="number"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                />
                            </Typography>
                            <br />
                            <Typography variant="body2">
                                <TextField
                                    id="outlined-number"
                                    label="how much lipstick you want"
                                    type="number"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                />
                            </Typography>
                        </CardContent>

                    </Grid>
                </Grid>)
            }

            <div>
                <div>
                    <p style={{ fontSize: '30px', fontWeight: '600', color: '#134660', margin: '20px' }}>Please fill up the form to confirm your order</p>
                </div>
                <form onSubmit={handleSubmit(onSubmit)}>






                    <p style={{ color: '#320814', margin: '20px 0' }}>insert your phone number and address</p>
                    <br />
                    <input type="number" style={{ marginBottom: '10px' }} {...register("userPhoneNumber", { required: true, maxLength: 20 })} placeholder="your phone number" />
                    <br />
                    <input type="text" style={{ marginBottom: '10px' }}  {...register("Address")} placeholder="your address" required />
                    <br />
                    <input type="submit" />
                </form>
            </div>
        </>
    );
}


export default PlaceOrder;