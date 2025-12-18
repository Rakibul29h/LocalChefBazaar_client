import React from 'react';
import MealsCard from '../../../components/DashBoard/MealsCard/MealsCard';
import { useQuery } from '@tanstack/react-query';


import useAuth from '../../../hooks/useAuth';
import useAxiosSecure from '../../../hooks/useSecureAxios';
import LoadingSpinner from '../../../components/Shared/LoadingSpinner/LoadingSpinner';
import { Helmet } from 'react-helmet-async';

const MyMeals = () => {

    const {user}=useAuth()
    const axiosSecure=useAxiosSecure();


    const {data:mealsData=[],isLoading}=useQuery({
        queryKey:["meals",user],
        queryFn: async ()=>{
         const result=   await axiosSecure(`/meals/${user?.email}`)
         return result.data;
        }
    })
    if(isLoading) return <LoadingSpinner></LoadingSpinner>
    return (
        <div>
                  <Helmet>
        <title>My Meal</title>
      </Helmet>
            <div className='mb-10 mt-5 md:mx-5'>
                <h2 className='text-2xl font-semibold'> My Meals</h2>
                <p className='text-gray-500'>Manage the meals you offer</p>
            </div>
            {
                mealsData.length>0?     <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 w-full'>
              {
            mealsData.map((meal)=><MealsCard key={meal._id} mealData={meal}></MealsCard>)
           }  
            </div> :<span className="my-5 text-lg md:px-5 text-gray-500">You haven't create any meals  yet.</span>
            }
       
           
        </div>
    );
};

export default MyMeals;