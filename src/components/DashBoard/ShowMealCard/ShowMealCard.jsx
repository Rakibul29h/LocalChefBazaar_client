import { ChefHat, Star } from 'lucide-react';
import React from 'react';
import { CiLocationOn } from "react-icons/ci";
import { IoMdTime } from "react-icons/io";
import { Link } from 'react-router';
const ShowMealCard = ({mealData}) => {

      const {
    foodName: title,
    image: imageUrl,
    rating,
    deliveryTime: time,
    price,
    chefID,
    chefName,
    deliveryArea:location
  } = mealData;
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
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-xl font-bold text-slate-900 mb-2">{title}</h3>
              <span className="text-orange-500 text-2xl font-bold">${price}</span>
            </div>

            {/* Meta Info (Time & Price) */}
            <div className="flex justify-between items-center mb-6">
              <span className='flex gap-2 items-center'><ChefHat size={16}></ChefHat> Chef {chefName}</span>
              <p className=" text-center text-sm font-semibold text-orange-400">
                {chefID}
              </p>
            </div>
            {/* location and time */}
            <div className='flex gap-3 flex-wrap items-center'>

                <div className='flex item-center gap-2'>

                    <CiLocationOn />
             
                <span className='text-gray-500 text-sm'>{location}</span>
                </div>
               
               <div className='flex items-center gap-0.5 '>

                    <IoMdTime />
            <span className="text-gray-500 text-sm ">{time}</span>
               </div>
               
            </div>
           
          </div>
        </div>
        {/* Action Buttons */}
        <div className=' px-5 mb-5 w-full'>
            <Link to={`/singleMeal/${mealData._id}`} className='btn w-full bg-black text-white font-semibold hover:bg-orange-500  hover:text-black w-fulltransition-all duration-300 ease-in-out '>See Details</Link>
        </div>
      </div>
    </div>
    );
};

export default ShowMealCard;