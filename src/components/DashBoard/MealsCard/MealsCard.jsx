import React, { useState } from "react";
import { Star } from "lucide-react";
import UpdateMealModal from "../../Modal/UpdateMealModal/UpdateMealModal";
import Swal from "sweetalert2";
import { useQueryClient } from "@tanstack/react-query";

import useAxiosSecure from "../../../hooks/useSecureAxios";
import useAuth from "../../../hooks/useAuth";

const MealsCard = ({ mealData }) => {
  const {user}=useAuth()
  const [isOpen, setIsOpen] = useState(false);
  const {
    foodName: title,
    image: imageUrl,
    rating,
    deliveryTime: time,
    price,
    ingredients,
    chefID,
  } = mealData;
const queryClient = useQueryClient();

  const axiosSecure=useAxiosSecure()
  const deleteHandler=async()=>{
   
Swal.fire({
  title: "Are you sure?",
  text: "You won't be able to revert this!",
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "Yes, delete it!"
}).then((result) => {
  if (result.isConfirmed) {
    const id = mealData._id;
    axiosSecure.delete(`/meals/${id}`)
    .then(res=>
    {
      if(res.data.deletedCount)
      {
         
    Swal.fire({
      title: "Deleted!",
      text: "Your file has been deleted.",
      icon: "success"
    });
      queryClient.invalidateQueries({
    queryKey: ["meals",user ]
  });
      }
    }
    )
 
  }
});
      
  }
  return (
    <div className="w-full max-w-sm bg-white rounded-3xl shadow-lg overflow-hidden border border-gray-100 font-sans mx-auto group cursor-pointer">
      <div className="flex flex-col justify-between h-full">
        <div>
          {/* Image Container */}
          <div className="relative h-56 w-full overflow-hidden">
            <img
              src={imageUrl}
              alt={title}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />

            {/* Rating Badge */}
            <div className="absolute top-4 right-4 bg-white py-1 px-2.5 rounded-lg shadow-sm flex items-center gap-1">
              <Star className="w-4 h-4 text-orange-500 fill-orange-500" />
              <span className="text-slate-900 font-bold text-sm">{rating}</span>
            </div>
          </div>

          {/* Content Container */}
          <div className="p-5">
            {/* Title */}
            <div></div>
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-bold text-slate-900 mb-2">{title}</h3>
              <p className="bg-orange-200 px-2 rounded-full text-center py-1 font-semibold text-gray-500">
                {chefID}
              </p>
            </div>

            {/* Meta Info (Time & Price) */}
            <div className="flex justify-between items-center mb-6">
              <span className="text-gray-500 text-sm font-medium">{time}</span>
              <span className="text-slate-900 text-lg font-bold">${price}</span>
            </div>

            {/* ingredient */}
            <div className="mb-3">
              <h2 className=" font-semibold">Ingredients:</h2>
            </div>
            <div className="flex gap-2 mb-5 flex-wrap">
              {ingredients.map((ingredient, index) => (
                <span
                  className="bg-green-100 px-2 py-1 rounded-2xl"
                  key={index}
                >
                  {ingredient}
                </span>
              ))}
            </div>
          </div>
        </div>
        {/* Action Buttons */}
        <div className="flex mb-5 mx-2 gap-4">
          <button
            onClick={() => setIsOpen(true)}
            className="flex-1 bg-blue-50 hover:bg-blue-100 text-blue-600 text-sm font-semibold py-2.5 rounded-xl transition-colors duration-200"
          >
            Update
          </button>
          <button onClick={deleteHandler} className="flex-1 bg-red-50 hover:bg-red-100 text-red-500 text-sm font-semibold py-2.5 rounded-xl transition-colors duration-200">
            Delete
          </button>
          <UpdateMealModal
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            data={mealData}
          ></UpdateMealModal>
        </div>
      </div>
    </div>
  );
};

export default MealsCard;
