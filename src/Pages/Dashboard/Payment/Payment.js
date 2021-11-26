import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import {loadStripe} from '@stripe/stripe-js';
import {Elements} from '@stripe/react-stripe-js'
import CheckoutForm from './CheckoutForm/CheckoutForm';


const stripePromise = loadStripe('pk_test_51JyNcsDrUMNM3GqcxvV8g4nYfdSpNZrtSqJVWO5QHuhdgwtwwvdkwaGPKP0AnDJSkzhkDYoDdD67M3NCj6d0mE8G00JSqYNjYf');

const Payment = () => {
    const {id} = useParams();
    const [purchase,setPurchase] = useState([{}]);
   useEffect(()=>{
    fetch(`https://quiet-sands-64773.herokuapp.com/orders/${id}`)
    .then(res=>res.json())
    .then(data=>setPurchase(data))
   },[id]);
    return (
        <div>
            <h2>Payment for : {purchase.email}</h2>
            <h3>Product Name : {purchase[0].name}</h3>
             <h4>Pay : ${purchase[0].price} </h4>
           {purchase[0].price &&  <Elements stripe={stripePromise} >
        <CheckoutForm 
        purchase={purchase}

        />
      </Elements>}
        </div>
    );
};

export default Payment;