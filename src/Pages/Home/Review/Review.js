import React, { useEffect, useState } from 'react';

const Review = () => {
    const [review,setReview] = useState([]);
    useEffect(()=>{
        fetch('https://quiet-sands-64773.herokuapp.com/displayReview')
        .then(res=>res.json())
        .then(data => setReview(data))
    },[])
    return (
        <div>
            <h1 style={{color:'#530139', margin:'30px', fontSize:'50px'}}>Total {review.length} reviews</h1>
            {
                review.map(singleReview => <div>
                    <h3 style={{color:'#B04471', margin:'20px'}}>email : {singleReview.email}</h3>
                    <p style={{color:'#3F2730', margin:'20px', fontSize:'25px'}}>Feedback : {singleReview.review}</p>
                   {
                        [...Array(parseInt(singleReview.star)).keys()].map(e=><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" style={{display :'inline', width:'18px', color:'#430614'}} viewBox="0 0 20 20" fill="currentColor">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>)
                   }
                   
                    </div>)
            }
            <h4 style={{color:'#463136', margin:'40px'}}>-----Thanks for staying with us-------</h4>
        </div>
    );
};

export default Review;