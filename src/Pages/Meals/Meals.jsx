import React, {useState } from "react";
import ShowMealCard from "../../components/DashBoard/ShowMealCard/ShowMealCard";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useSecureAxios";
import { useQuery } from "@tanstack/react-query";
import LoadingSpinner from "../../components/Shared/LoadingSpinner/LoadingSpinner";

const Meals = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

    const [sort,setSort]=useState("");
  const { data: mealsData = [], isLoading } = useQuery({
    queryKey: ["meals", user,sort],
    queryFn: async () => {
      const result = await axiosSecure(`/allMeals?sort=${sort}`);
      return result.data;
    },
  });

  const handleSort=(e)=>{
        setSort(e.target.value)
   
  }

  if (isLoading) return <LoadingSpinner></LoadingSpinner>;
  return (
    <div>
      <div className="mb-10 flex justify-between mt-5 ">
        <h2 className="text-2xl font-semibold"> All Meals</h2>
        <fieldset className="fieldset focus:outline-0">
         
          <select onChange={handleSort} defaultValue={""} className="select outline-none">
            <option disabled value={""}>Sort by Price</option>
            <option value={"asc"}>Low to High</option>
            <option value={"des"}>High to Low</option>
          </select>
        
        </fieldset>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 w-full">
        {mealsData.map((meal) => (
          <ShowMealCard key={meal._id} mealData={meal}></ShowMealCard>
        ))}
      </div>
    </div>
  );
};

export default Meals;
