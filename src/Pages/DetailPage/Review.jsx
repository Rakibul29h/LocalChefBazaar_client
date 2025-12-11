import React from 'react';

const Review = () => {
    return (
        <div>
           <div className='flex justify-between'>
            <h2 className='text-lg font-semibold'>Customer Reviews</h2>
            <button className='text-lg font-semibold text-orange-400 hover:underline hover:cursor-pointer'>Write a Review</button>
           </div>
        </div>
    );
};

export default Review;