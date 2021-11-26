import React from 'react';
import { useForm } from "react-hook-form";
import useAuth from '../../../hooks/UseFirebase/UseAuth';

const Review = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const{user} = useAuth();

  const onSubmit = data => {
      if(data.star <0 && data.star>5){
          return;
      }
      fetch('https://quiet-sands-64773.herokuapp.com/review',{
          method: 'POST',
          headers:{
              'content-type' : 'application/json'
          },
          body : JSON.stringify(data)
      })
      .then(res=>res.json())
      .then(data=>{

          if(data.insertedId){
              alert('thank you for your feedback')
          }
      })
  };
 

    return (
        <div>
            <h2 style={{color:'#A23A87', fontSize:'40px' , margin:'40px'}}>Give a Review, Please!</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
 
      <input style={{margin:'10px'}} defaultValue={user.email} {...register("email")} />
      <br/>
      <input style={{margin:'10px'}} {...register("review")} type="text" />
      <br/>
      <input style={{margin:'10px'}} {...register("star")} type="number" />

     
      
     <br/>
      
      <input type="submit" />
      <h3 style={{color:'#8E6381', fontSize:'35px' , margin:'16px'}}>..Thank You..</h3>
    </form>
        </div>
    );
};

export default Review;