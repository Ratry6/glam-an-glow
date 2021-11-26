import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';

const ManageOrders = () => {
    const [manageOrders, setManageOrders] = useState([]);
    const [reload,setReload] = useState(true);
    useEffect(()=>{
        fetch('https://quiet-sands-64773.herokuapp.com/manageAllOrders')
        .then(res=> res.json())
        .then(data =>{
            console.log(data);
            setManageOrders(data);
            setReload(true);

        })
    },[reload]);

    const handleUpdate = id =>{
        const confirm = window.confirm('are you sure to update status?');
        if(confirm){
            fetch(`https://quiet-sands-64773.herokuapp.com/updatingStatus/${id}`,{
                method: 'PUT'
            })
            .then(res=>res.json())
            .then(data=>{
                console.log(data)
                setReload(false)
            })
        }
        
    }
    const handleRemove= id=>{
        const confirm = window.confirm('are you sure to delete?');
        if(confirm){
            fetch(`https://quiet-sands-64773.herokuapp.com/delete/${id}`,{
                method:'DELETE'
            })
            .then(res=>res.json())
            .then(data=>{
                console.log(data);
                setReload(false);
            })
        }
    }

   
    return (
        <div>
            <h2>manage orders</h2>
            <div>
                {
                    manageOrders.map(manageOrder =><div key={manageOrder._id}>
                        <p>mail : {manageOrder.email}</p>
                        <p>name : {manageOrder[0].name}</p>
                        <p>Status : {manageOrder.status}</p>
                        <Button variant="contained" onClick={()=>handleUpdate(manageOrder._id)}>Update Status</Button>
                        <Button variant="contained" onClick={()=>handleRemove(manageOrder._id)}> Delete</Button>
                        </div>)
                }
            </div>
        </div>
    );
};

export default ManageOrders;