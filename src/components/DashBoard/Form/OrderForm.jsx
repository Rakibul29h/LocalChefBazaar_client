import React from "react";
import { useForm } from "react-hook-form";
import LoadingSpinner from './../../../components/Shared/LoadingSpinner/LoadingSpinner';

import ErrorPage from './../../../Pages/ErrorPage/ErrorPage';
import useAuth from "../../../hooks/useAuth";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useSecureAxios";
import { useNavigate } from "react-router";

const OrderForm = ({mealData}) => {

    const {user}=useAuth()
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },

  } = useForm();

  const navigate=useNavigate();


    const {
    foodName,
    chefID,
    price
  } = mealData;
 
  const axiosSecure=useAxiosSecure();
  const onSubmit = async (data) => {

    const {price,chefID,foodName,quantity,userAddress,userEmail,userName}=data

    const cost = (price * quantity).toFixed(2);
    Swal.fire({
      title: "Are you Agree?",
      text: `A payment of ${cost} $ is required.`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#00A300",
      cancelButtonColor: "#d33",
      confirmButtonText: "Confirm"
    }).then((result) => {
      if (result.isConfirmed) {

            const orderInfo={
        price,
        chefID,
        mealName:foodName,
        quantity,
        userAddress,
        userEmail,
        userName,
        cost,
        foodId:mealData._id,
        orderTime:new Date()

    }
    axiosSecure.post("/orders",orderInfo)
    .then(res=>{
      if(res.data.insertedId)
      {
        Swal.fire({
          title: "Success",
          text: "Your order has been successfully placed.",
          icon: "success"
        });
      }
      reset()
      navigate(-1)
    })
        
     
      }
    });


  };


  return (
    < >
        {/* Form Section */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="bg-white  rounded-lg p-6 md:p-8">
            <div className="grid grid-cols-1 items-center sm:grid-cols-2 gap-6">
              {/* User Name */}
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text font-semibold text-slate-700">
                 Your Name
                  </span>
                </label>
                <input
                  type="text"
                  
                  defaultValue={user?.displayName}
                  className={`input input-bordered w-full focus:outline-none focus:border-orange-500
                  }`}
                  {...register("userName")}
                />
              </div>
              {/* Chef Email */}
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text font-semibold text-slate-700">
                    Your Email
                  </span>
                </label>
                <input
                  type="email"
                  
                  defaultValue={user?.email}
                  readOnly
                  className={`input input-bordered w-full focus:outline-none focus:border-orange-500
                  }`}
                  {...register("userEmail")}
                />
              </div>
              {/* Food Name */}
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text font-semibold text-slate-700">
                    Food Name
                  </span>
                </label>
                <input
                  type="text"
                  defaultValue={foodName}
                  readOnly
                  className={`input input-bordered w-full focus:outline-none focus:border-orange-500
                  }`}
                  {...register("foodName")}
                />
                
              </div>

              {/* Price */}
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text font-semibold text-slate-700">
                    Price ($)
                  </span>
                </label>
                <input
                  type="text"
                  defaultValue={price}
                  readOnly
                  className={`input input-bordered w-full focus:outline-none focus:border-orange-500 
                  }`}
                  {...register("price")}
                />
                {errors.price && (
                  <span className="text-red-500">{errors.price.message}</span>
                )}
              </div>

              {/* Quantity */}
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text font-semibold text-slate-700">
                    Quantity
                  </span>
                </label>
                <input
                  type="number"
                  defaultValue={1}
                  min={1}
                  className={`input input-bordered w-full focus:outline-none focus:border-orange-500 
                  }`}
                  {...register("quantity")}
                />
                {errors.quantity && (
                  <span className="text-red-500">{errors.price.message}</span>
                )}
              </div>


              
 
   
              {/* Chef ID */}
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text font-semibold text-slate-700">
                    Chef ID
                  </span>
                </label>
                <input
                  type="text"
                  placeholder="e.g., CHEF-1234"
                  defaultValue={chefID}
                  readOnly
                  className={`input input-bordered w-full focus:outline-none focus:border-orange-500
                  }`}
                  {...register("chefID")}
                />
              </div>
                   {/* Address */}
              <div className="form-control w-full sm:col-span-2">
                <label className="label">
                  <span className="label-text font-semibold text-slate-700">
                    Address
                  </span>
                </label>
                <input
                  type="text"
                    placeholder="e.g Dhaka ...."
                  className={`input input-bordered w-full focus:outline-none  focus:border-orange-500 
                  }`}
                  {...register("userAddress")}
                />
                
              </div>

            </div>




            {/* Submit Button */}
            <div className="mt-8">
              <button
                type="submit"
                className="btn btn-block bg-[#E85D04] hover:bg-[#d05202] text-white border-none normal-case text-lg font-medium"
              >
                Order
              </button>
            </div>
          </div>
        </form>
 
    </>
  );
};

export default OrderForm;
