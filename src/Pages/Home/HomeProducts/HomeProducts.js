import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Products from '../../Products/Produtcs/Products';
import './HomeProducts.css'

const HomeProducts = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://quiet-sands-64773.herokuapp.com/products')
            .then(res => res.json())
            .then(data => {
                const displayData = data.slice(0,6);
                setProducts(displayData)
            })
    }, []);
    return (
        <div>
        <div className="all-products" style={{margin: '80px 20px 60px 10px', color : '#82022C', fontWeight: 700, fontSize:'35px'}}>Top Branded Lipsticks</div>
        <div>
            <Row xs={1} md={3} className="g-4">
                {
                    //    all  products and details
                    products.map(product => <Products
                        key={product._id}
                        product={product}></Products>)
                }
            </Row>
        </div>
    </div>
    );
};

export default HomeProducts;