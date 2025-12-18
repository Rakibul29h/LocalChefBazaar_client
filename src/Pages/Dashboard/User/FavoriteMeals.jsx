import React from "react";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useSecureAxios";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { Trash2 } from "lucide-react";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";
import LoadingSpinner from "../../../components/Shared/LoadingSpinner/LoadingSpinner";

const FavoriteMeals = () => {

    const {user}=useAuth();
    const axiosSecure=useAxiosSecure()
    const queryClient = useQueryClient();

    const {data:favoriteMeals=[],isLoading}=useQuery({
        queryKey:["favoriteMeals",user],
        queryFn: async()=>{
            const result =await axiosSecure(`/myFavorite?email=${user?.email}`);
            return result.data;
        }
    })
   const handleDelete = (id)=>{
     Swal.fire({
           title: "Are you sure?",
           text: "You won't be able to revert this!",
           icon: "warning",
           showCancelButton: true,
           confirmButtonColor: "#3085d6",
           cancelButtonColor: "#d33",
           confirmButtonText: "Yes, delete it!",
         }).then((result) => {
           if (result.isConfirmed) {
             axiosSecure.delete(`/myFavorite/${id}`).then((res) => {
               if (res.data.deletedCount) {
                 Swal.fire({
                   title: "Deleted!",
                   text: "Meal removed from your favorite!",
                   icon: "success",
                 });
                 queryClient.invalidateQueries({
                   queryKey:["favoriteMeals",user],
                 });
               }
             });
           }
         });
   }
   if(isLoading) return <LoadingSpinner></LoadingSpinner>
  return (
    <div>
            <Helmet>
              <title>Favorite Meals</title>
            </Helmet>
      <div className="mb-10 mt-5 mx-5">
        <h2 className="text-2xl font-semibold">  Favorite Meals</h2>     
      </div>
        <div className="overflow-x-auto">


{
  favoriteMeals?.length>0 ? <table className="table ">
          {/* head */}
          <thead>
            <tr className="bg-base-300">
              <th>Meals</th>
              <th>Chef Name</th>
              <th>Price</th>
              <th>Date</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}

            {
                favoriteMeals.map(meal=><tr key={meal._id} className="bg-gray-50 hover:bg-orange-50">
              <td>
                <h2 className=" font-semibold ">{meal.mealName}</h2>
              </td>
              <td>{meal?.chefName}</td>
              <td className="font-semibold">{meal?.price}$</td>
                <td>{new Date(meal.addedAt).toDateString("En-us").slice(4)}</td>
             <td >  <span onClick={()=>handleDelete(meal._id)} className="hover:cursor-pointer"><Trash2 color="red" /></span> </td>
            </tr>)
            } 
            
          </tbody>
        </table>:<span className="my-5 text-lg text-gray-500">You haven't added any meals to your favorites yet.</span>
}
       
      </div>
    </div>
  );
};

export default FavoriteMeals;
