
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useSecureAxios";
import { useQuery } from "@tanstack/react-query";
import Container from "../Shared/Container/Container";
import ShowMealCard from "../DashBoard/ShowMealCard/ShowMealCard";
import LoadingSpinner from "../Shared/LoadingSpinner/LoadingSpinner";
import { Link } from "react-router";
import { motion } from "framer-motion";
const HMeals = () => {
      const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const { data: mealsData = [], isLoading } = useQuery({
    queryKey: ["meals", user],
    queryFn: async () => {
      const result = await axiosSecure(`/hMeals`);
      return result.data;
    },
  });
    const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  if(isLoading) return <LoadingSpinner></LoadingSpinner>
  return <Container>

    <div className="text-center py-10">
        <h2 className="text-3xl md:text-4xl font-semibold">Daily Specials</h2>
        <p className=" md:text-lg">Fresh from the kitchen to your table</p>

    </div>
    
    <div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 w-full">
        {mealsData.map((meal) => (
          <motion.div
          key={meal._id}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionVariants}
      >
      <ShowMealCard  mealData={meal}></ShowMealCard>
      </motion.div>
         
        ))}
      </div>
      <div className="flex justify-center my-10">
        <Link to={"/meals"} className="btn btn-primary rounded-full"> See more</Link>
      </div>
    </div>
  </Container>
  ;
};

export default HMeals;
