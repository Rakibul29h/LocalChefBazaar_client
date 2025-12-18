import React from "react";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useSecureAxios";
import { useQuery } from "@tanstack/react-query";
import LoadingSpinner from "../../../components/Shared/LoadingSpinner/LoadingSpinner";
import OrderCard from "../../../components/DashBoard/OrderCard/OrderCard";
import { Helmet } from "react-helmet-async";

const MyOrders = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const { data: ordersData = [], isLoading } = useQuery({
    queryKey: ["meals", user],
    queryFn: async () => {
      const result = await axiosSecure(`/customerOrders?email=${user?.email}`);
      return result.data;
    },
  });

  if (isLoading) return <LoadingSpinner></LoadingSpinner>;
  return (
    <div>
            <Helmet>
              <title>My Orders</title>
            </Helmet>
      <div className="mb-10 mt-5 mx-5">
        <h2 className="text-2xl font-semibold"> My Orders</h2>
        <p className="text-gray-500">Track your delicious deliveries</p>
      </div>
    
    {
      ordersData.length>0?<div className="grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {ordersData.map((order) => (
            <OrderCard key={order._id} order={order}></OrderCard>
          ))}
        </div>:<span className="my-5 text-lg md:px-5 text-gray-500">You haven't order any meals  yet.</span>
    }
        
      
    </div>
  );
};

export default MyOrders;
