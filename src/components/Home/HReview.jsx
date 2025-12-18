import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";
import "swiper/css";
import useAxios from "./../../hooks/useAxios";
import { useQuery } from "@tanstack/react-query";
import { Star } from "lucide-react";
import Container from "../Shared/Container/Container";
const HReview = () => {
  const Axios = useAxios();

  const { data: reviews = [] } = useQuery({
    queryKey: ["HomeReview"],
    queryFn: async () => {
      const result = await Axios(`/Hreview`);
      return result.data;
    },
  });

  return (
    <Container>
      <div className="md:my-5 ">
        <h2 className="text-2xl sm:text-4xl md:text-5xl font-semibold text-center">
          What People Say
        </h2>
      </div>
      <div className="my-5 md:my-20 px-3 md:px-10 py-5">
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          grabCursor={true}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          loop={reviews.length >= 3}
          className="mySwiper"
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 25,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
        >
          {reviews.map((review) => (
            <SwiperSlide key={review._id}>
              {" "}
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

                    <p className="text-gray-600 text-sm mt-2">
                      {review.comments}
                    </p>
                  </div>
                </div>
              </div>{" "}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </Container>
  );
};

export default HReview;
