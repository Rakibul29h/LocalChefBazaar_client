import React from "react";
import {
  Shield,
  Zap,
  Globe,
  Users,
  Smartphone,
  ArrowRight,
  Leaf,
  SquareMenu,
  Truck,
  DollarSign,
} from "lucide-react";


const WhyChoose = () => {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8">
      {/* Feature Section Container */}
      <section className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6">
           Why Choose Us
          </h1>
          <p className="text-lg text-gray-500">
           We bring you the authentic taste of home with quality and trust. Here is why thousands of foodies love ordering from LocalChefBazaar.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

     
            {/* Fresh Ingredients */}
          <div className="flex flex-col p-8 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:border-green-100 transition-all duration-300 group">
            <div className="flex items-center justify-center w-12 h-12 mb-6 rounded-lg bg-green-50 group-hover:bg-green-600 transition-colors duration-300">
              <div className=" text-green-600 group-hover:text-white transition-colors duration-300">
                <Leaf></Leaf>
              </div>
            </div>
            <h3 className="mb-3 text-xl font-bold text-gray-900 group-hover:text-green-600 transition-colors">
              Fresh Ingredients
            </h3>
            <p className="mb-6 text-gray-500 leading-relaxed grow">
              We use farm-fresh and high-quality ingredients every day to ensure the best taste.
            </p>
          </div>

                 {/* Daily Updated Menu */}
          <div className="flex flex-col p-8 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:border-indigo-100 transition-all duration-300 group">
            <div className="flex items-center justify-center w-12 h-12 mb-6 rounded-lg bg-indigo-50 group-hover:bg-indigo-400 transition-colors duration-300">
              <div className=" text-indigo-600 group-hover:text-white transition-colors duration-300">
                <SquareMenu />
              </div>
            </div>
            <h3 className="mb-3 text-xl font-bold text-gray-900 group-hover:text-indigo-600 transition-colors">
              Daily Updated Menu
            </h3>
            <p className="mb-6 text-gray-500 leading-relaxed grow">
             New meals prepared daily to keep your taste buds excited and never bored.
            </p>
          </div>

                 {/*Hygienic Cooking */}
          <div className="flex flex-col p-8 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:border-purple-100 transition-all duration-300 group">
            <div className="flex items-center justify-center w-12 h-12 mb-6 rounded-lg bg-purple-50 group-hover:bg-purple-400 transition-colors duration-300">
              <div className=" text-purple-600 group-hover:text-white transition-colors duration-300">
               <Shield></Shield>
              </div>
            </div>
            <h3 className="mb-3 text-xl font-bold text-gray-900 group-hover:text-purple-600 transition-colors">
             Hygienic Cooking
            </h3>
            <p className="mb-6 text-gray-500 leading-relaxed grow">
            Strict hygiene standards maintained in every step of the cooking process.
            </p>
          </div>

                 {/*Fast Delivery */}
          <div className="flex flex-col p-8 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:border-orange-100 transition-all duration-300 group">
            <div className="flex items-center justify-center w-12 h-12 mb-6 rounded-lg bg-orange-50 group-hover:bg-orange-400 transition-colors duration-300">
              <div className=" text-orange-600 group-hover:text-white transition-colors duration-300">
               <Truck></Truck>
              </div>
            </div>
            <h3 className="mb-3 text-xl font-bold text-gray-900 group-hover:text-orange-400 transition-colors">
             Fast Delivery
            </h3>
            <p className="mb-6 text-gray-500 leading-relaxed grow">
            Hot meals delivered on time, every time to your doorstep.
            </p>
          </div>

               {/* {/Affordable Pricing */}
          <div className="flex flex-col p-8 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:border-amber-100 transition-all duration-300 group">
            <div className="flex items-center justify-center w-12 h-12 mb-6 rounded-lg bg-amber-50 group-hover:bg-amber-400 transition-colors duration-300">
              <div className=" text-amber-600 group-hover:text-white transition-colors duration-300">
              <DollarSign></DollarSign>
              </div>
            </div>
            <h3 className="mb-3 text-xl font-bold text-gray-900 group-hover:text-amber-400 transition-colors">
           Affordable Pricing
            </h3>
            <p className="mb-6 text-gray-500 leading-relaxed grow">
            Quality homemade meals at reasonable prices that won't break the bank.
            </p>
          </div>

                         {/*Trusted by Thousands */}
          <div className="flex flex-col p-8 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:border-rose-100 transition-all duration-300 group">
            <div className="flex items-center justify-center w-12 h-12 mb-6 rounded-lg bg-rose-50 group-hover:bg-rose-400 transition-colors duration-300">
              <div className=" text-rose-600 group-hover:text-white transition-colors duration-300">
              <Users />
              </div>
            </div>
            <h3 className="mb-3 text-xl font-bold text-gray-900 group-hover:text-rose-400 transition-colors">
            Trusted by Thousands
            </h3>
            <p className="mb-6 text-gray-500 leading-relaxed grow">
           Loved by our growing customer community across the city.
            </p>
          </div>


        </div>
      </section>
    </div>
  );
};

export default WhyChoose;
