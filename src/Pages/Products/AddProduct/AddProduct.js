import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import './AddProduct.css';


const AddProduct = () => {
    const { register, handleSubmit , reset} = useForm();

    const onSubmit = data => {
        console.log(data)
        axios.post('https://quiet-sands-64773.herokuapp.com/products', data)
            .then(res => {
                if(res.data.insertedId){
                    alert('product added successfullly');
                    reset();
                }
            })
            .then(data => console.log(data))
            .catch(err=> console.log(err))
    };
    return (
        <div className="add-product">
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name", { required: true, maxLength: 20 })} placeholder="name" />
                <textarea {...register("description")} placeholder="description" />

                <input {...register("img")} placeholder="img url" />
                <input {...register("price")} placeholder="price" />
               

                <input type="submit" />
            </form>
        </div>
    );
};

export default AddProduct;