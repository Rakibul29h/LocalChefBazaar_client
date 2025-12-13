import { useMutation } from "@tanstack/react-query";
import { useQueryClient } from "@tanstack/react-query";
import { CircleCheckBig, CircleX, Truck } from "lucide-react";
import React from "react";
import useAxiosSecure from "../../../hooks/useSecureAxios";
import toast from "react-hot-toast";
import useAuth from "../../../hooks/useAuth";
import ErrorPage from "../../../Pages/ErrorPage/ErrorPage";
import LoadingSpinner from "../../Shared/LoadingSpinner/LoadingSpinner";

const OrderRequestCard = ({ orderInfo }) => {
  const axiosSecure = useAxiosSecure();
  const {
    orderStatus,
    price,
    quantity,
    userAddress,
    userEmail,
    orderTime,
    mealName,
    chefID,
  } = orderInfo;

  const { user } = useAuth();


  const queryClient = useQueryClient();
  const {
    isPending,
    isError,
    mutateAsync,
    reset: mutationReset,
  } = useMutation({
    mutationFn: async (payload) =>
      await axiosSecure.patch(
        `/chefOrder?status=${payload}&id=${orderInfo._id}`
      ),
    onSuccess: (data) => {
      if (data.data.modifiedCount) {
        queryClient.invalidateQueries("orders", user, chefID);
        toast.success(`Order ${data.data.orderStatus} successfully` )

      }
      mutationReset();
    },
  });

  const handleOrder = async (status) => {
    await mutateAsync(status);
  };
  if(isPending) return <LoadingSpinner></LoadingSpinner>
  if(isError) return <ErrorPage></ErrorPage>
  return (
    <div className="w-full bg-white rounded-2xl  shadow-lg max-w-5xl mx-auto p-5 flex justify-between items-center rounded2xl">
      {/* Content  */}
      <div>
        {/* title and status */}
        <div className="flex-1 flex items-center gap-5 flex-wrap">
          <h2 className="text-xl font-semibold">{mealName}</h2>
          <div
            className={`px-2 py-1 rounded-md  ${
              orderStatus === "pending"
                ? "bg-orange-100 text-orange-600 border-orange-600"
                : orderStatus === "accepted"
                ? "bg-blue-100 text-blue-700 border-blue-600":
                orderStatus==="cancelled"?"bg-red-100 text-red-700 border-red-600"
                : "bg-green-100 text-green-700 border-green-600"
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

            orderInfo?.paymentStatus &&   <div className="text-sm">
            <span className="text-gray-500">Payment Status: </span>
            <span className="text-gray-900 ">{orderInfo?.paymentStatus}</span>
          </div>
          }
        </div>
      </div>
      {/* Action button  */}

      <div>
        {(orderStatus === "accepted" || orderStatus ==="delivered") ? (
          <div>
            <button
              disabled={orderStatus === "delivered"}
              onClick={()=>handleOrder("delivered")}
              className="bg-orange-500 flex px-3 text-white py-1 btn ]hover:bg-orange-600 disabled:bg-gray-200 disabled:cursor-not-allowed disabled:text-gray-500"
            >
              <span>
                {" "}
                <Truck size={20} />{" "}
              </span>
              <span>Deliver</span>
            </button>
          </div>
        ) : (
          <div className="flex gap-5 ">
            <button
              disabled={orderStatus === "cancelled"}
              onClick={() => handleOrder("accepted")}
              className="bg-green-400 flex px-3 py-1 btn hover:bg-green-600 disabled:bg-gray-200 disabled:cursor-not-allowed"
            >
              <span>
                {" "}
                <CircleCheckBig size={20} />{" "}
              </span>
              <span>Accept</span>
            </button>
            <button
              disabled={orderStatus === "cancelled"}
              onClick={() => handleOrder("cancelled")}
              className="bg-red-500 flex px-3 py-1 btn hover:bg-red-600 disabled:bg-gray-200 disabled:cursor-not-allowed"
            >
              <span>
                <CircleX size={20} />
              </span>
              <span>Cancel</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default OrderRequestCard;
