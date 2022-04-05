import React, { useEffect, useState } from 'react';


const CustomerData = () => {
//     const [reviews, setReviews]=useState([]);

//     useEffect( ()=>{
//         fetch('customerReview.json')
//         .then(res => res.json())
//         .then(data=> setReviews(data))
//     },[])

const reviews= [
    {
        name: "Liakot Molla",
        review:"This product is vary good",  
    },
    {
        name: "Kamal Uddin",
        review:"This product is vary good",   
    },
    {
        name: "Prince Onik",
        review:"This product is vary good",   
    }
    
]
   
    return (
        <div>
            
            {
                reviews.map(review => console.log(review))
            }
        </div>
    );
};

export default CustomerData;