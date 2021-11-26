import { Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {  pink } from '@mui/material/colors';
import Avatar from '@mui/material/Avatar';
import PageviewIcon from '@mui/icons-material/Pageview';
import LinearProgress from '@mui/material/LinearProgress';
import Stack from '@mui/material/Stack';


const ExploreMore = () => {

  const [products, setProducts] = useState([]);
  const history = useHistory();
  const handleOrderBtn = (key) => {
    history.push(`/placeOrder/${key}`);
    // console.log(key)
  }
  useEffect(() => {
    fetch('https://quiet-sands-64773.herokuapp.com/products')
      .then(res => res.json())
      .then(data => {
        setProducts(data)
        console.log(data);
      })
      
  }, []);



  return (
    <div>
      <div>
      <Grid container spacing={2} sx={{margin : '30px 100px 80px 40px', color: '#9F0759'}}>
      <Grid item xs={4}  >
      <Avatar sx={{ bgcolor: pink[500] }}>
  <PageviewIcon />
</Avatar>
  </Grid>
  <Grid item xs={8}>
  <Typography gutterBottom variant="h3" component="div">
         ...Exploring More Products
        </Typography>
       
  </Grid>
  <Stack sx={{ width: '100%', color: 'grey.500' }} spacing={2}>
      <LinearProgress color="secondary" />
      </Stack>
        </Grid>
        
      </div>
      <Grid  sx={{margin :'50px 50px 90px 40px'}} container spacing={2}>
    { products.map(product=><Grid Item xs={4} >
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
        onClick={()=>handleOrderBtn(product._id)}
        sx={{backgroundColor:'#ECCADE', color:'#570C3B'}}
        variant="contained">Order Now</Button>
      </CardContent>
      <CardActions >
        <Button sx={{color :'#6C0B43'}} size="small">Share</Button>
        <Button sx={{color :'#6C0B43'}}  size="small">Learn More</Button>
      </CardActions>
    </Card>


       </Grid>
      )}


      </Grid>

    </div>

  );
};

export default ExploreMore;