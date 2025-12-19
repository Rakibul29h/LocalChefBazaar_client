import React, { useState } from "react";
import ShowMealCard from "../../components/DashBoard/ShowMealCard/ShowMealCard";
import LoadingSpinner from "../../components/Shared/LoadingSpinner/LoadingSpinner";
import Container from "../../components/Shared/Container/Container";
import MealsContainer from "./MealsContainer";
import { Helmet } from "react-helmet-async";


const Meals = () => {

  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("");
 const [currentPage, setCurrentPage] = useState(0);

  const handleSort = (e) => {
    setSort(e.target.value);
  };
  const handleChange = (e) => {
    const value = e.target.value;
    setSearch(value);
    setCurrentPage(0)
  };


  return (
    <Container>
      <Helmet>
        <title>All Meals {search}</title>
      </Helmet>
      <div className="w-full px-4 my-5">
        <div className="mx-auto  rounded-2xl bg-linear-to-r from-purple-500 via-violet-500 to-indigo-500 p-6 shadow-xl">
          <h2 className="flex items-center gap-2 text-2xl font-bold text-white">
            Find Your Perfect Dish
          </h2>
          <p className="mt-1 text-sm text-purple-100">
            Not sure what to eat? Discover dishes from local chefs based on your
            mood or cravings.
          </p>

          <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center">
            <input
              type="text"
              placeholder="e.g. Spicy street food for a rainy day"
              className="input input-bordered focus:shadow-md focus:border-none w-full rounded-xl bg-white/90 text-gray-800 placeholder-gray-400 focus:outline-none"
              onChange={handleChange}
            />
           
          </div>
        </div>
      </div>
      <div className="mb-10 flex justify-between mt-5 ">
        <h2 className="text-2xl font-semibold"> All Meals</h2>
        <fieldset className="fieldset focus:outline-0">
          <select
            onChange={handleSort}
            defaultValue={""}
            className="select outline-none"
          >
            <option disabled value={""}>
              Sort by Price
            </option>
            <option value={"asc"}>Low to High</option>
            <option value={"des"}>High to Low</option>
          </select>
        </fieldset>
      </div>
      <MealsContainer sort={sort} search={search} currentPage={currentPage} setCurrentPage={setCurrentPage} ></MealsContainer>
    
    </Container>
  );
};

export default Meals;
