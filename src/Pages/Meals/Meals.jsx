import React, { useState } from "react";
import ShowMealCard from "../../components/DashBoard/ShowMealCard/ShowMealCard";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useSecureAxios";
import { useQuery } from "@tanstack/react-query";
import LoadingSpinner from "../../components/Shared/LoadingSpinner/LoadingSpinner";
import Container from "../../components/Shared/Container/Container";
import { FaArrowLeftLong, FaArrowRight } from "react-icons/fa6";

const Meals = () => {
  const [totalMeals, setTotalMeals] = useState(0);
  const [totalPage, setTotalPage] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const limit = 9;
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const [sort, setSort] = useState("");
  const { data: mealsData = [], isLoading } = useQuery({
    queryKey: ["meals", user, sort, currentPage],
    queryFn: async () => {
      const result = await axiosSecure(
        `/allMeals?sort=${sort}&limits=${limit}&skip=${currentPage * limit}`
      );
      setTotalMeals(result.data.totalMeal);
      setTotalPage(Math.ceil(result.data.totalMeal / limit));
      return result.data.meals;
    },
  });

  console.log(totalPage);
  const handleSort = (e) => {
    setSort(e.target.value);
  };

  // const mealsData=mealsDataFull?.meals || [];

  if (isLoading) return <LoadingSpinner></LoadingSpinner>;
  return (
    <Container>
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
      <div className="min-h-[70vh]">
              <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 w-full">
        {mealsData.map((meal) => (
          <ShowMealCard key={meal._id} mealData={meal}></ShowMealCard>
        ))}
      </div>
      </div>

      <div className="flex justify-center gap-5 flex-wrap my-10">
        <button className={`btn ${currentPage === 0 && "hidden"}`} onClick={()=>setCurrentPage(currentPage-1)}>prev</button>
        {[...Array(totalPage).keys()].map((i) => (
          <button onClick={() => setCurrentPage(i)} className={`btn ${i===currentPage && "btn-primary text-white"}`}>
            {i}
          </button>
          
        ))}
        <button className={`btn ${currentPage === totalPage-1 && "hidden"}`} onClick={()=>setCurrentPage(currentPage+1)}> next </button>
      </div>
    </Container>
  );
};

export default Meals;
