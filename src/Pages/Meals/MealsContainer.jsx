
import { useState } from "react";
import ShowMealCard from "../../components/DashBoard/ShowMealCard/ShowMealCard";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useSecureAxios";
import { useQuery } from "@tanstack/react-query";
import LoadingSpinner from "../../components/Shared/LoadingSpinner/LoadingSpinner";
import Container from "../../components/Shared/Container/Container";
const MealsContainer = ({sort,search}) => {
     const [totalPage, setTotalPage] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);

  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const limit = 9;
  const { data: mealsData = [], isLoading } = useQuery({
    queryKey: ["meals", user, sort, currentPage,search],
    queryFn: async () => {
      const result = await axiosSecure(
        `/allMeals?sort=${sort}&limits=${limit}&skip=${currentPage * limit}&search=${search}`
      );

      setTotalPage(Math.ceil(result.data.totalMeal / limit));
      return result.data.meals;
    },
  });


if(isLoading) return <LoadingSpinner></LoadingSpinner>
    return (
          <div>
        <div className="min-h-[70vh]">
          <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 w-full">
            {mealsData.map((meal) => (
              <ShowMealCard key={meal._id} mealData={meal}></ShowMealCard>
            ))}
          </div>
        </div>

        <div className="flex justify-center gap-5 flex-wrap my-10">
          <button 
            className={`btn ${currentPage === 0 && "hidden"}`}
            onClick={() => setCurrentPage(currentPage - 1)}
          >
            prev
          </button>
          {[...Array(totalPage).keys()].map((i) => (
            <button
            key={i}
              onClick={() => setCurrentPage(i)}
              className={`btn ${i === currentPage && "btn-primary text-white"}`}
            >
              {i}
            </button>
          ))}
          <button
            className={`btn ${currentPage === totalPage - 1 && "hidden"}`}
            onClick={() => setCurrentPage(currentPage + 1)}
          >
            {" "}
            next{" "}
          </button>
        </div>
      </div>
    );
};

export default MealsContainer;