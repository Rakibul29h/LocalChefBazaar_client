import React, { useState } from "react";
import UpdateReviewModal from "../../Modal/UpdateReviewModal/UpdateReviewModal";
import { Star } from "lucide-react";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useSecureAxios";
import { useQueryClient } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";

const MyReviewCard = ({ data }) => {
    const {user}=useAuth();
  const [isOpen, setIsOpen] = useState(false);
    const axiosSecure=useAxiosSecure();
      const queryClient = useQueryClient();
  const deleteHandler = () => {
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
        axiosSecure.delete(`/myReview/${data._id}`).then((res) => {
          if (res.data.deletedCount) {
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
            queryClient.invalidateQueries({
              queryKey:["myReviews",user],
            });
          }
        });
      }
    });

  };
  return (
    <div className=" flex flex-col justify-between  min-w-60 w-full bg-white rounded-2xl p-5 shadow-sm border border-gray-100 ">
      <div className="flex flex-col justify-between h-full">
        <div className="p-2 space-y-2">
          <h2 className="text-xl font-semibold ">{data?.mealName}</h2>
          <div className="flex gap-2 items-center">
            <span className="text-gray-900 font-semibold">Rating:</span>
            <div className="flex items-center gap-1 my-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={14}
                  className={
                    i < data.rating
                      ? "fill-yellow-400 text-yellow-400"
                      : "text-gray-300"
                  }
                />
              ))}
            </div>
          </div>
          <div>
            <h3 className="font-semibold">Comment:</h3>
            <p className="text-sm text-gray-400">{data.comments}</p>
          </div>
          <div className="flex items-center gap-2">
              <h3 className="font-semibold">Date:</h3>
            <span className="text-sm">
                    {"  "}
                    {new Date(data.date).toDateString("En-us").slice(4)}
                  </span>
          </div>
        </div>
        <div className="flex my-3 mx-2 gap-4">
          <button
            onClick={() => setIsOpen(true)}
            className="flex-1 bg-blue-50 hover:bg-blue-100 text-blue-600 text-sm font-semibold py-2.5 rounded-xl transition-colors duration-200"
          >
            Update
          </button>
          <button
            onClick={deleteHandler}
            className="flex-1 bg-red-50 hover:bg-red-100 text-red-500 text-sm font-semibold py-2.5 rounded-xl transition-colors duration-200"
          >
            Delete
          </button>
          <UpdateReviewModal
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            data={data}
          ></UpdateReviewModal>
        </div>
      </div>
    </div>
  );
};

export default MyReviewCard;
