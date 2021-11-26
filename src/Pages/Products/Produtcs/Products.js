import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { useHistory } from 'react-router';
import Button from '@mui/material/Button';

import './Products.css'

const Products = ({product}) => {
    const {_id, name, description,img,price} = product;
    const history = useHistory();
    const handleOrderBtn = (key)=>{
        history.push(`/placeOrder/${key}`);
        // console.log(key)
    }
    return (
        <div>
        <Col>
  <Card className="card">
    <Card.Img className="card-img" variant="top" src={img} />
    <Card.Body>
      <Card.Title sx={{color:'#500644'}} className="card-title">{name}</Card.Title>
      <Card.Text  className="card-text">
        
        <p > {description}</p>
        </Card.Text>
        <Card.Text>
          <p><span style={{color:'#5F4B5D', fontWeight:'600'}}>price</span> : ${price}</p>
        </Card.Text>
        <Card.Text>
        <Button  variant="contained"
        sx={{backgroundColor:'#ECCADE', color:'#570C3B'}}
        onClick={()=>handleOrderBtn(_id)}
        >Order Now</Button>
      </Card.Text>
    </Card.Body>
  </Card>
</Col>
    </div>
    );
};

export default Products;