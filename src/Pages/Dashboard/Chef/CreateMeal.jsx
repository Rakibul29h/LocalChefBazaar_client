import React from "react";
import CreateMealForm from "../../../components/DashBoard/Form/CreateMealForm";
import { Helmet } from "react-helmet-async";
const CreateMeal = () => {



  return (
    <div className="min-h-screen bg-base-200 flex items-center justify-center p-4">
            <Helmet>
        <title>Create Meal</title>
      </Helmet>
      <div className="w-full max-w-4xl bg-white rounded-xl shadow-xl p-8 md:p-12">
        {/* Header Section */}
        <div className="mx-8">
          <h2 className="text-3xl font-bold text-slate-800">
            Create a New Meal
          </h2>
          <p className="text-slate-500 mt-2">
            Share your culinary skills with the world
          </p>
        </div>
{/* Form section */}
        <CreateMealForm></CreateMealForm>
      </div>
    </div>
  );
};

export default CreateMeal;
