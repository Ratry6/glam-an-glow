import { Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
const ManageProducts = () => {
    const [manageProducts, setManageProducts] = useState([]);
    const[reload,setReload] = useState(false);
    useEffect(()=>{
        fetch('https://quiet-sands-64773.herokuapp.com/products')
        .then(res=>res.json())
        .then(data=> {
            // console.log(data)
            setManageProducts(data);
            
        })
    },[reload]);
const handleRemovebtn = id =>{
    fetch(`https://quiet-sands-64773.herokuapp.com/removeProduct/${id}`,{
        method : 'DELETE'
    })
    .then(res=>res.json())
    .then(data=> {
        if(data.deletedCount){
            alert('deleted successfully');
            setReload(true);
        }
    })
}
    return (
        <div>
           <h2>Manage the products</h2> 
           <Grid  sx={{margin :'50px 50px 90px 40px'}} container spacing={2}>
    { manageProducts.map(product=><Grid Item xs={4} >
      <Card sx={{ maxWidth: 300, maxHeight: 500, marginBottom: '50px', marginLeft:'20px' }}>
      <CardMedia
        component="img"
        height="140"
        image={product.img}
        alt=""
      />
      <CardContent>
        <Typography  sx={{color :'#C61174'}} gutterBottom variant="h5" component="div">
          {product.name}
        </Typography>
        <br/>
        <Typography  sx={{color :'#C67EB2'}} variant="body2" color="text.secondary">
          {product.description}
        </Typography>
        <br/>
        <Typography variant="body2" color="text.secondary">
        <span style={{color: '#934574', fontWeight:'600'}}>price</span>  : $ {product.price}
        </Typography>
        <br/>
        <Button
        onClick={()=>handleRemovebtn(product._id)}
        sx={{backgroundColor:'#ECCADE', color:'#570C3B'}}
        variant="contained">Remove Item</Button>
      </CardContent>
     
    </Card>


       </Grid>
      )}


      </Grid>
        </div>
    );
};

export default ManageProducts;