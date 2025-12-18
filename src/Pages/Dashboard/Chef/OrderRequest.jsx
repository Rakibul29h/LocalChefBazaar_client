import React from "react";
import OrderRequestCard from "../../../components/DashBoard/OrderRequestCard/OrderRequestCard";
import {  useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useSecureAxios";
import useAuth from "../../../hooks/useAuth";
import useChefID from "../../../hooks/useChefID";
import { Helmet } from "react-helmet-async";

const OrderRequest = () => {
    const {user}=useAuth();
    const [chefID]=useChefID()
    const axiosSecure=useAxiosSecure();
    const {data:OrdersData=[]}=useQuery(
        {
            enabled: !!chefID,
            queryKey:["orders",user,chefID],
            queryFn: async ()=>{
                const result = await axiosSecure(`/chefOrder?chefID=${chefID}`);
                return result.data
            }
        }
    )
   
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
