import { Card, CardActions, CardContent, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/UseFirebase/UseAuth';
import Button from '@mui/material/Button';

const MyOrders = () => {
    const {user} = useAuth();
    const [myOrders, setMyOrders] = useState([]);
    const [reload,setReload] = useState(true);
    
    const email = user?.email

    useEffect(()=>{
        fetch(`https://quiet-sands-64773.herokuapp.com/myAllOrders/${email}` )
        .then(res=> res.json())
        .then(data=> {
            setMyOrders(data);
            console.log(data)
        })
    },[email,reload]);

    const handleDeleteBtn =(id)=>{
        fetch(`https://quiet-sands-64773.herokuapp.com/delete/${id}`,{
            method:'DELETE'
        })
        .then(res=> res.json())
        .then(data=>{
            if(data.acknowledged){
                alert('are you sure?');
                setReload(false);
            }
        })
    }

    return (
        <div>
            
            <h3 style={{margin : '20px 0'}}>Thanks! <br/> you have ordered {myOrders?.length} products</h3>
           
        <Grid container spacing={2}>
            {
                myOrders.map(myOrder=><Grid items sm={12} md={6}>
                    <Card sx={{ maxWidth: 540, maxHeight: 350 , margin: '30px 50px'}}>
      <CardContent>
        <Typography sx={{fontSize:'30px', margin:'10px 0', color: '#A20F5C'}} component="div">
        your product name : {myOrder[0].name}
        </Typography>
        <Typography sx={{fontSize:'20px', margin:'20px 0', color:'#475059'}} component="div">
        price : $ {myOrder[0].price}
        </Typography>
        <Typography sx={{fontSize:'14px', margin:'10px 0', color:'#A08793'}} component="div">
        if you want to delete, click below
        </Typography>
        
      </CardContent>
      <CardActions>
      <Button
       sx={{backgroundColor:'#ECCADE', color:'#570C3B', marginLeft:20, marginBottom:10}}
       variant="contained"
                   onClick={()=>handleDeleteBtn(myOrder._id)}
                   >remove item</Button>
      </CardActions>
    </Card>
                  
                  
                  
                  
                   
                  
                    </Grid>
                    )
            }
            
            </Grid>
        </div>
    );
};

export default MyOrders;