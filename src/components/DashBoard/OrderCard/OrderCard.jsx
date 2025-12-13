import React from "react";
import useAxiosSecure from "../../../hooks/useSecureAxios";


const OrderCard = ({ order }) => {
  const axiosSecure=useAxiosSecure();
  const { orderStatus, mealName, cost, chefID,foodId, orderTime, quantity, chefName,userEmail,userName } =
    order;




    const handlePayment=()=>{
      const paymentInfo={
        orderId:order._id,
        foodId,
        mealName,
        chefName,
        chefID,
        address:order.userAddress,
        orderStatus,
        paymentStatus:order?.paymentStatus,
        cost,
        quantity,
        customer:{
          email:userEmail,
          name:userName,
        }

      }
      axiosSecure.post("/create-checkout-session",paymentInfo)
      .then(res=>{
        window.location.href=res.data.url
      })
    }
  return (
    <div className=" flex flex-col justify-between  min-w-60 w-full bg-white rounded-2xl p-5 shadow-sm border border-gray-100 ">
      <div className="w-full">
        <div className="flex justify-between items-start gap-3 mb-5">
          <h2 className="text-lg font-bold text-gray-900">{mealName}</h2>
          <span
            className={` text-[10px] font-bold px-2.5 py-1 rounded tracking-wide uppercase  ${
              orderStatus === "pending"
                ? "bg-orange-100 text-orange-600 border-orange-600"
                : orderStatus === "accepted"
                ? "bg-blue-100 text-blue-700 border-blue-600"
                : orderStatus === "cancelled"
                ? "bg-red-100 text-red-700 border-red-600"
                : "bg-green-100 text-green-700 border-green-600"
            }`}
          >
            {orderStatus}
          </span>
        </div>
        <div className="space-y-3 mb-6">
          <div className="flex justify-between items-center text-sm">
            <span className="text-gray-500">Price:</span>
            <span className="text-gray-900 font-bold">${cost}</span>
          </div>

          <div className="flex justify-between items-center text-sm">
            <span className="text-gray-500">Qty:</span>
            <span className="text-gray-900 font-bold">{quantity}</span>
          </div>

          <div className="flex justify-between items-center text-sm">
            <span className="text-gray-500">Chef:</span>
            <span className="text-gray-900 font-bold">{chefName}</span>
          </div>
          <div className="flex justify-between items-center text-sm">
            <span className="text-gray-500">Chef-Id:</span>
            <span className="text-gray-900 font-bold">{chefID}</span>
          </div>
          <div className="flex justify-between items-center text-sm">
            <span className="text-gray-500">Delivery Time:</span>
            <span className="text-gray-900 font-bold">
              {new Date(orderTime).toLocaleTimeString("En-us")}
            </span>
          </div>
        </div>
      </div>

      {/* Status Footer */}

      {order?.paymentStatus === "pending"  && (
        <div onClick={handlePayment} className="bg-green-600 hover:bg-green-700 text-white font-medium text-center py-3 rounded-xl text-sm">
          Pay Now
        </div>
      )}
      {order?.paymentStatus === "paid" && (
        <div className="bg-green-50 text-green-800 font-medium text-center py-3 rounded-xl text-sm">
          Payment Successful
        </div>
      )}
    </div>
  );
};

export default OrderCard;
