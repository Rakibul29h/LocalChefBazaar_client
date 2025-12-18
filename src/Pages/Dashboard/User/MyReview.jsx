import React from 'react';
import MealsCard from '../../../components/DashBoard/MealsCard/MealsCard';
import { useQuery } from '@tanstack/react-query';


import useAuth from '../../../hooks/useAuth';
import useAxiosSecure from '../../../hooks/useSecureAxios';
import LoadingSpinner from '../../../components/Shared/LoadingSpinner/LoadingSpinner';
import MyReviewCard from '../../../components/DashBoard/MyReviewCard/MyReviewCard';
import { Helmet } from 'react-helmet-async';

const MyReview = () => {

    const {user}=useAuth()
    const axiosSecure=useAxiosSecure();


    const {data:myReviews=[],isLoading}=useQuery({
        queryKey:["myReviews",user],
        queryFn: async ()=>{
         const result=   await axiosSecure(`/myReviews?email=${user?.email}`)
         return result.data;
        }
    })
    if(isLoading) return <LoadingSpinner></LoadingSpinner>
    return (
        <div>
                  <Helmet>
                    <title>My Review</title>
                  </Helmet>
            <div className='mb-10 mt-5 mx-5'>
                <h2 className='text-2xl font-semibold'> My Reviews</h2>
                <p className='text-gray-500'>Manage the meals you offer</p>
            </div>

        {
            myReviews.length>0?<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 w-full'>

                {
                    myReviews.map(review=><MyReviewCard key={review._id} data={review}></MyReviewCard>)
                }
               
            </div>:<span className="my-5 text-lg md:px-5 text-gray-500">You haven't added any reviews  yet.</span>
           
        }
            
        </div>
    );
};

export default MyReview;