import React from "react";
import { useForm } from "react-hook-form";

const CreateMeal = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    
    console.log(data);

  };

  return (
    <div className="min-h-screen bg-base-200 flex items-center justify-center p-4">
      <div className="w-full max-w-4xl bg-white rounded-xl shadow-xl p-8 md:p-12">
        {/* Header Section */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-slate-800">
            Create a New Meal
          </h2>
          <p className="text-slate-500 mt-2">
            Share your culinary skills with the world
          </p>
        </div>

        {/* Form Section */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="bg-white border border-gray-100 rounded-lg p-6 md:p-8 shadow-sm">
            <div className="grid grid-cols-1 items-center sm:grid-cols-2 gap-6">
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
                  className={`input input-bordered w-full focus:outline-none focus:border-orange-500
                  }`}
                  {...register("foodName", { required: "Food name required" })}
                />
                {errors.foodName&&<span className="text-red-500">{errors.foodName.message}</span>}
             
              </div>

              {/* Price */}
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text font-semibold text-slate-700">
                    Price
                  </span>
                </label>
                <input
                  type="number"
                  defaultValue="1"
                  className={`input input-bordered w-full focus:outline-none focus:border-orange-500 
                  }`}
                  {...register("price", { required: "Price is required", min: 0 })}
                />
                 {errors.price&&<span className="text-red-500">{errors.price.message}</span>}
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
                  className="input input-bordered w-full focus:outline-none focus:border-orange-500"
                  {...register("deliveryTime",{required:"Estimate time is required"})}
                />
                {errors.deliveryTime&&<span className="text-red-500">{errors.deliveryTime.message}</span>}
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
                Add Meal to Menu
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateMeal;
