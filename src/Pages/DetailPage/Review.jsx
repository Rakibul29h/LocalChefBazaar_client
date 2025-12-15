import React, { useState } from "react";
import ReviewModal from "../../components/Modal/ReviewModal/ReviewModal";

import { Star } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import useAuth from "./../../hooks/useAuth";
import useAxiosSecure from "./../../hooks/useSecureAxios";
import LoadingSpinner from "../../components/Shared/LoadingSpinner/LoadingSpinner";

const Review = ({ id }) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleReview = () => {
    setIsOpen(true);
  };
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const { data: reviews = [], isLoading } = useQuery({
    queryKey: ["review", user],
    queryFn: async () => {
      const result = await axiosSecure(`/review?id=${id}`);
      return result.data;
    },
  });

  if (isLoading) return <LoadingSpinner></LoadingSpinner>;
  return (
    <div>
      <div className="max-w-3xl mx-auto space-y-6">
        <div className="flex justify-between">
          <h2 className="text-xl font-semibold">Customer Reviews</h2>
          <button
            className="text-lg font-semibold text-orange-400 hover:underline hover:cursor-pointer"
            onClick={handleReview}
          >
            Add Review
          </button>
        </div>
        {
          reviews.length===0? <span>No reviews yet</span>:
        reviews.map((review) => (
          <div
            key={review._id}
            className="bg-white rounded-2xl shadow-md p-5 border border-gray-100"
          >
            <div className="flex items-start gap-4">
              <img
                src={review?.reviewerImage}
                alt={review?.reviewerName}
                className="w-12 h-12 rounded-full object-cover"
              />

              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-lg">
                    {review?.reviewerName}
                  </h3>
                  <div className=" text-sm text-gray-500">
                    <span className="">
                    {" "}
                    {new Date(review.date).toLocaleTimeString("en-US", {
                      hour: "numeric",
                      minute: "2-digit",
                      hour12: true,
                    })}
                  </span>{", "}
                  <span>
                    {"  "}
                    {new Date(review.date).toDateString("En-us").slice(4)}
                  </span>
                  </div>
                  
                </div>

                <div className="flex items-center gap-1 my-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className={
                        i < review.rating
                          ? "fill-yellow-400 text-yellow-400"
                          : "text-gray-300"
                      }
                    />
                  ))}
                </div>

                <p className="text-gray-600 text-sm mt-2">{review.comments}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <ReviewModal isOpen={isOpen} setIsOpen={setIsOpen} id={id}></ReviewModal>
    </div>
  );
};

export default Review;
