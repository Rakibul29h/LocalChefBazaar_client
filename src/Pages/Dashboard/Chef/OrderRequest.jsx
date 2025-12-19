import React from "react";
import OrderRequestCard from "../../../components/DashBoard/OrderRequestCard/OrderRequestCard";
import {  useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useSecureAxios";
import useAuth from "../../../hooks/useAuth";
import useChefID from "../../../hooks/useChefID";
import { Helmet } from "react-helmet-async";
import LoadingSpinner from "../../../components/Shared/LoadingSpinner/LoadingSpinner";

const OrderRequest = () => {
    const {user}=useAuth();
    const [chefID,isChefLoading]=useChefID()
    const axiosSecure=useAxiosSecure();
    const {data:OrdersData=[],isLoading}=useQuery(
        {
            enabled: !!chefID,
            queryKey:["orders",user,chefID],
            queryFn: async ()=>{
                const result = await axiosSecure(`/chefOrder?chefID=${chefID}`);
                return result.data
            }
        }
    )
    if(isChefLoading) return <LoadingSpinner></LoadingSpinner>
    if(isLoading) return <LoadingSpinner></LoadingSpinner>
    
  return (
    <div>
            <Helmet>
        <title>Order Request</title>
      </Helmet>
      <div className="mb-10 mt-5 mx-5">
        <h2 className="text-2xl font-semibold"> Order Requests</h2>
        <p className="text-gray-500">Manage incoming orders from customers</p>
      </div>
      {
        OrdersData.length>0?  <div className="flex flex-col gap-10">
        {
            OrdersData.map(order=><OrderRequestCard key={order._id} orderInfo={order} ></OrderRequestCard>)
        }
      </div>:<span className="my-5 text-lg md:px-5 text-gray-500">You haven't  any order requests  yet.</span>
      }
    </div>
  );
};

export default OrderRequest;
