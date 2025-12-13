import { CircleCheckBig, CircleX } from "lucide-react";
import React from "react";

const OrderRequestCard = ({orderInfo}) => {
  

  const {orderStatus,price,quantity,userAddress,userEmail,orderTime,cost,mealName}=orderInfo
  return (
    <div className="w-full bg-white  shadow-sm max-w-5xl mx-auto p-5 flex justify-between items-center rounded2xl">
      {/* Content  */}
      <div>
        {/* title and status */}
        <div className="flex-1 flex items-center gap-5 flex-wrap">
          <h2 className="text-xl font-semibold">{mealName}</h2>
          <div
            className={`px-2 py-1 rounded-md  ${
              orderStatus === "pending"
                ? "bg-orange-100 text-orange-600 "
                : orderStatus === "accepted"
                ? "bg-blue-100 text-blue-700"
                : "bg-green-100 text-green-300 "
            }`}
          >
           {orderStatus}
          </div>
        </div>
        {/* Details part */}

        <div className="space-y-1 mb-6 ">
          <div className="text-sm">
            <span className="text-gray-500">Price:</span>
            <span className="text-gray-900 font-bold">${price}</span>
          </div>
          <div className="text-sm">
            <span className="text-gray-500">Quantity:</span>
            <span className="text-gray-900">{quantity}</span>
          </div>
          <div className=" text-sm">
            <span className="text-gray-500">Customer E-mail: </span>
            <span className="text-gray-900 ">{userEmail}</span>
          </div>
          <div className=" text-sm">
            <span className="text-gray-500">Address: </span>
            <span className="text-gray-900 ">{userAddress}</span>
          </div>
          <div className="text-sm">
            <span className="text-gray-500">Order Time: </span>
            <span className="text-gray-900 ">{orderTime}</span>
          </div>
          {
            // Payment status
          }
        </div>
      </div>
      {/* Action button  */}

      <div className="flex gap-5 ">
        <button className="bg-green-400 flex px-3 py-1 btn hover:bg-green-600 disabled:bg-gray-200 disabled:cursor-not-allowed">
          <span>
            {" "}
            <CircleCheckBig size={20} />{" "}
          </span>
          <span>Accept</span>
        </button>
        <button className="bg-red-500 flex px-3 py-1 btn hover:bg-red-600 disabled:bg-gray-200 disabled:cursor-not-allowed">
          <span>
            <CircleX size={20 } />
          </span>
          <span>Cancel</span>
        </button>
      </div>
    </div>
  );
};

export default OrderRequestCard;
