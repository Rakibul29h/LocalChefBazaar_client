import React from "react";
import { useForm } from "react-hook-form";

import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import LoadingSpinner from './../../../components/Shared/LoadingSpinner/LoadingSpinner';
import { useQueryClient } from "@tanstack/react-query";

import useAuth from "../../../hooks/useAuth";

import { imageUpload } from "../../../Utils/Utility";
import ErrorPage from './../../../Pages/ErrorPage/ErrorPage';
import useAxiosSecure from "../../../hooks/useSecureAxios";
const UpdateMealForm = ({data,setIsOpen}) => {
  const { user } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const axiosSecure=useAxiosSecure();
  const queryClient = useQueryClient();

  const {
    isPending,
    isError,
    mutateAsync,
    reset: mutationReset,
  } = useMutation({
    mutationFn: async (payload) =>
      await axiosSecure.patch(`/meals/${data._id}`, payload),
    onSuccess: (data) => {
      if(data.data.modifiedCount)
        toast.success("update successfully");
       queryClient.invalidateQueries(["meals"]);
      
      mutationReset();
      
    }
  });

 
  const ingredients=data.ingredients.join(',')

  const onSubmit = async (data2) => {
    
    const {
      foodName,
      price,
      deliveryTime,
      ingredients,
      chefName,
      chefExperience,
      chefID,
      chefEmail,
      rating,
    } = data2;
    const imageFile = data2.image[0];

    let imageURL;
    if(imageFile)
    {

         imageURL = await imageUpload(imageFile);
    }else{
        imageURL=data.image
    }
    const mealsData = {
      foodName,
      price:Number(price),
      deliveryTime,
      ingredients: ingredients.split(","),
      image: imageURL,
      chefName,
      chefExperience,
      chefID,
      chefEmail,
      rating:Number(rating)
    };
    console.log(mealsData)
    await mutateAsync(mealsData);
    setIsOpen(false)
  };

  if(isPending) return <LoadingSpinner></LoadingSpinner>
  if(isError) return <ErrorPage></ErrorPage>
  return (
    < >
        {/* Form Section */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="bg-white  rounded-lg p-6 md:p-8">
            <div className="grid grid-cols-1 items-center sm:grid-cols-2 gap-6">
              {/* Chef Name */}
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text font-semibold text-slate-700">
                    Chef Name
                  </span>
                </label>
                <input
                  type="text"
                  placeholder="e.g., Beef Tehari"
                  defaultValue={user?.displayName}
                  className={`input input-bordered w-full focus:outline-none focus:border-orange-500
                  }`}
                  {...register("chefName")}
                />
              </div>
              {/* Chef Email */}
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text font-semibold text-slate-700">
                    Chef Email
                  </span>
                </label>
                <input
                  type="email"
                  placeholder="e.g., Beef Tehari"
                  defaultValue={user?.email}
                  readOnly
                  className={`input input-bordered w-full focus:outline-none focus:border-orange-500
                  }`}
                  {...register("chefEmail")}
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
                  placeholder="e.g., Beef Tehari"
                  defaultValue={data.foodName}
                  className={`input input-bordered w-full focus:outline-none focus:border-orange-500
                  }`}
                  {...register("foodName", { required: "Food name required" })}
                />
                {errors.foodName && (
                  <span className="text-red-500">
                    {errors.foodName.message}
                  </span>
                )}
              </div>

              {/* Price */}
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text font-semibold text-slate-700">
                    Price
                  </span>
                </label>
                <input
                  type="text"
                  placeholder="e.g 12.99"
                  defaultValue={data.price}
                  className={`input input-bordered w-full focus:outline-none focus:border-orange-500 
                  }`}
                  {...register("price", {
                    required: "Price is required",
                    min: 0,
                  })}
                />
                {errors.price && (
                  <span className="text-red-500">{errors.price.message}</span>
                )}
              </div>

              {/* Estimated Delivery Time */}
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text font-semibold text-slate-700">
                    Estimated Delivery Time
                  </span>
                </label>
                <input
                  type="text"
                  placeholder="e.g., 45 mins"
                  defaultValue={data.deliveryTime}
                  className="input input-bordered w-full focus:outline-none focus:border-orange-500"
                  {...register("deliveryTime", {
                    required: "Estimate time is required",
                  })}
                />
                {errors.deliveryTime && (
                  <span className="text-red-500">
                    {errors.deliveryTime.message}
                  </span>
                )}
              </div>

              {/* Upload Image */}
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text font-semibold text-slate-700">
                    Upload Image
                  </span>
                </label>
                <div className="flex items-center space-x-2 border border-gray-300 rounded-lg p-2">
                  <input
                    type="file"
                    className="block w-full text-sm text-gray-500
      file:mr-4 file:py-0 file:px-4
      file:rounded-md file:border-0
      file:text-sm file:font-semibold
      file:bg-lime-50 file:text-lime-700
      transition-all
      hover:file:bg-orange-100
      bg-gray-100 border border-dashed border-orange-300 rounded-md cursor-pointer
      focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-orange-400
      py-2"
                    {...register("image")}
                  />
                </div>
              </div>
              {/* Meal Rating */}
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text font-semibold text-slate-700">
                    Rating
                  </span>
                </label>
                <input
                  type="number"
                  min="0"
                  max="5"
                  defaultValue={data.rating}
                  className={`input input-bordered w-full focus:outline-none focus:border-orange-500
                  }`}
                  {...register("rating")}
                />
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
                  placeholder="e.g., CHE-12345"
                  defaultValue={data.chefID}
                  className={`input input-bordered w-full focus:outline-none focus:border-orange-500
                  }`}
                  {...register("chefID")}
                />
              </div>
            </div>

            {/* Chef Experience */}
            <div className="form-control w-full mt-5">
              <label className="label">
                <span className="label-text font-semibold text-slate-700">
                  Chef Experience
                </span>
              </label>
              <input
                type="text"
                placeholder="e.g., Beef Tehari"
                defaultValue={data.chefExperience}
                className={`input input-bordered w-full focus:outline-none focus:border-orange-500
                  }`}
                {...register("chefExperience")}
              />
            </div>
            {/* Ingredients */}
            <div className="form-control w-full mt-6">
              <label className="label">
                <span className="label-text font-semibold text-slate-700">
                  Ingredients
                </span>
              </label>
              <br />
              <textarea
              defaultValue={ingredients}
                className="textarea textarea-bordered h-24 w-full focus:outline-none focus:border-orange-500"
                placeholder="List ingredients separated by commas"
                {...register("ingredients")}
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="mt-8">
              <button
                type="submit"
                className="btn btn-block bg-[#E85D04] hover:bg-[#d05202] text-white border-none normal-case text-lg font-medium"
              >
               Update
              </button>
            </div>
          </div>
        </form>
 
    </>
  );
};

export default UpdateMealForm;
