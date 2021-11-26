import { Grid } from '@mui/material';
import React, { useState, useEffect } from 'react';
import useAuth from '../../../hooks/UseFirebase/UseAuth';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Link } from 'react-router-dom';

const DashboardHome = () => {
    const [products, setProducts] = useState([]);
    const [reload, setReload] = useState(false);
    const { user } = useAuth();
    const email = user?.email

    useEffect(() => {
        fetch(`https://quiet-sands-64773.herokuapp.com/myAllOrders/${email}`)
            .then(res => res.json())
            .then(data => {
                setProducts(data);
                console.log(data)
            })
    }, [email, reload]);
  
    return (
        <div>
            <h2 style={{ color: '#4D023A', fontSize: 40 }}>welcome to dashboard</h2>
           
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Price</TableCell>
            <TableCell align="right">Address</TableCell>
            <TableCell align="right">Action</TableCell>
           
          </TableRow>
        </TableHead>
        <TableBody>
          {products.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row[0].name}
              </TableCell>
              <TableCell align="right">${row[0].price}</TableCell>
              <TableCell align="right">{row.Address}</TableCell>
              <TableCell align="right">{row.payment ? 
              'Paid':
              <Link to={`/dashboard/payment/${row._id}`} >
                <button>Pay</button>

              </Link>
            
            }</TableCell>
              
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
                    

           

        </div>
    );
};

export default DashboardHome;