import React, { useState } from "react";
import { ArrowLeft, ChefHat, Star, Utensils, Clock, Info,  } from "lucide-react";
import { Link, Outlet, useNavigate, useParams } from "react-router";
import useAxiosSecure from "../../hooks/useSecureAxios";
import { useQuery } from "@tanstack/react-query";
import useAuth from "../../hooks/useAuth";
import LoadingSpinner from "../../components/Shared/LoadingSpinner/LoadingSpinner";
import Review from "./Review";

// Main App Component
const DetailPage = () => {
  const [activeTab, setActiveTab] = useState("details");
  const { user } = useAuth();
  const { id } = useParams();

  const axiosSecure = useAxiosSecure();

  const { data: mealsData = {}, isLoading } = useQuery({
    queryKey: ["meals", user, id],
    queryFn: async () => {
      const result = await axiosSecure(`/singleMeal/${id}`);

      return result.data;
    },
  });

  const {
    foodName,
    chefExperience,
    chefID,
    chefName,
    rating,
    image,
    deliveryArea,
    price,
    deliveryTime,
    ingredients,
  } = mealsData;
  const nevigate=useNavigate();
  const handleBack=()=>{
    nevigate("/meals")
  }
  if(isLoading) return <LoadingSpinner></LoadingSpinner>
  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8 font-sans">
      {/* Top Navigation */}
      <div className="max-w-3xl mx-auto mb-4">
        <button onClick={handleBack} className="btn btn-ghost btn-sm gap-2 text-gray-600 hover:bg-transparent pl-0 hover:text-gray-900 normal-case text-sm font-normal">
          <ArrowLeft size={16} />
          Back to Meals
        </button>
      </div>

      {/* Main Card */}
      <div className="max-w-3xl mx-auto bg-base-100 rounded-3xl shadow-sm overflow-hidden border border-gray-100">
        {/* Hero Image Section */}
        <div className="relative h-64 md:h-80 w-full ">
          <img
            src={image}
            alt={foodName}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-6 md:p-8">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
              {foodName}
            </h1>
            <div className="flex items-center gap-4 text-white/90 text-sm font-medium">
              <div className="flex items-center gap-2">
                <ChefHat size={18} />
                <span>{chefName}</span>
              </div>
              <div className="flex items-center gap-1 text-yellow-400">
                <Star size={18} fill="currentColor" />
                <span className="text-white">{rating}</span>
              </div>
            </div>
          </div>
        </div>
        {/* 
        Content Section */}
        <div className="p-6 md:p-8">
          {/* Custom Tabs */}
          <div className="flex border-b border-gray-100 mb-6">
            <button
              onClick={() => setActiveTab("details")}
              className={`pb-3 px-1 text-sm font-medium transition-colors relative ${
                activeTab === "details"
                  ? "text-orange-500"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              Details
              {activeTab === "details" && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-orange-500 rounded-full"></span>
              )}
            </button>
            <button
              onClick={() => setActiveTab("reviews")}
              className={`pb-3 px-1 ml-8 text-sm font-medium transition-colors relative ${
                activeTab === "reviews"
                  ? "text-orange-500"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              Reviews
              {activeTab === "reviews" && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-orange-500 rounded-full"></span>
              )}
            </button>
          </div>

          {/* Tab Content */}
          {activeTab === "details" ? (
            <div className="animate-in  fade-in zoom-in-95 duration-300">
             <div className="flex gap-2 flex-wrap">
                <b>Chef-expreience:</b>
                 <p className="text-gray-600 mb-8 leading-relaxed">
                {chefExperience}
              </p>
             </div>
             <div className="flex gap-2 -my-4 flex-wrap">
                <b>Chef-Id:</b>
                 <p className="text-gray-600 mb-8 leading-relaxed">
                {chefID}
              </p>
             </div>
              

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {/* Ingredients Box */}
                <div className="bg-[#FFF8F1] p-5 rounded-2xl">
                  <div className="flex items-center gap-2 text-orange-500 font-semibold mb-3">
                    <Utensils size={18} />
                    <span>Ingredients</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {ingredients.map((item) => (
                      <span
                        key={item}
                        className="bg-white text-gray-700 text-xs py-1.5 px-3 rounded-full font-medium shadow-sm border border-orange-100/50"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Delivery Info Box */}
                <div className="bg-[#F0F7FF] p-5 rounded-2xl">
                  <div className="flex items-center gap-2 text-blue-600 font-semibold mb-3">
                    <Clock size={18} />
                    <span>Delivery Info</span>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-start gap-2">
                      <span className="text-gray-500 min-w-10">Area:</span>
                      <span className="text-gray-800 font-medium">
                       {deliveryArea}
                      </span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-gray-500 min-w-10">Time:</span>
                      <span className="text-gray-800 font-medium">{deliveryTime}</span>
                    </div>
                  </div>
                </div>
              </div><div className="flex items-center justify-between pt-4 border-t border-gray-50 mt-2">
            <div>
              <span className="text-3xl font-bold text-orange-500">${price}</span>
            </div>

            <Link to={`/orders/${id}`}className="bg-red-50 hover:bg-red-100 text-red-500 px-6 py-3 rounded-xl font-medium text-sm transition-colors duration-200">
             Order Now
            </Link>
          </div>
            </div>
          ) : (
            <div className=" animate-in fade-in zoom-in-95 duration-300">
              <Review id={id} ></Review>
            </div>
          )}

       
          
        </div>
      </div>
    </div>
  );
};

export default DetailPage;
