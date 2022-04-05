import React, { useEffect, useState } from 'react';
import Reviews from '../Reviews/Reviews';


const CustomerData = () => {
    const [reviews, setReviews]=useState([]);

    useEffect( ()=>{
        fetch('customerReview.json')
        .then(res => res.json())
        .then(data=> setReviews(data))
    },[])

   
    return (
        <div>
            {
                reviews.map(review=> <Reviews review={review}></Reviews>)
            }
            
        </div>
    );
};

export default CustomerData;