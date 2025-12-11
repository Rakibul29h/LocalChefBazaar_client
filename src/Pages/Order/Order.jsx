import React from 'react';
import { useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';
import useAxiosSecure from '../../hooks/useSecureAxios';
import { useQuery } from '@tanstack/react-query';
import LoadingSpinner from '../../components/Shared/LoadingSpinner/LoadingSpinner';
import OrderForm from '../../components/DashBoard/Form/OrderForm';

const Order = () => {
    
 const { user } = useAuth();
  const { id } = useParams();

  const axiosSecure = useAxiosSecure();

  const { data: mealsData = {}, isLoading } = useQuery({
    queryKey: ["meals", user, id],
    queryFn: async () => {
      const result = await axiosSecure(`/singleMeal/${id}`);

      return result.data;
    },
  });



  if(isLoading) return <LoadingSpinner></LoadingSpinner>

    return (
        <div className="min-h-screen bg-base-200 flex items-center justify-center p-4">
      <div className="w-full max-w-4xl bg-white rounded-xl shadow-xl p-8 md:p-12">
        {/* Header Section */}
        <div className="mx-8">
          <h2 className="text-3xl font-bold text-slate-800">
            Place the Order
          </h2>
         
        </div>
{/* Form section */}
            <OrderForm mealData={mealsData}></OrderForm>
      </div>
    </div>
    );
};

export default Order;