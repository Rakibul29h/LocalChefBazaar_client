import React from "react";
import banner1 from "../../assets/Banner1.jpg";
import banner2 from "../../assets/banner2.jpg";
import banner3 from "../../assets/banner3.jpg";
import Container from "../Shared/Container/Container";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { Link } from 'react-router';


const Banner = () => {
  return (
    <div>
      <Carousel
      autoPlay={true}
      infiniteLoop={true}
      interval={3000}
      showStatus={false}
      showThumbs={false}
      swipeable={false}
      >
   <div className="w-full min-h-[calc(100vh-40px)]  bg-orange-50">
        {/* banner 1 */}
        <Container>
          <div className="flex flex-col justify-center text-center sm:text-left sm:justify-between  sm:flex-row px-5  items-center gap-5 md:gap-10 h-[calc(100vh-40px)] max-h-[900px]">
            {/* Content section */}
            <div className="order-2 sm:order-1">
              <div className=" space-y-8">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold ">
                  Homemade Food,{" "}
                  <span className="text-orange-400">Delivered Warm</span>
                </h2>
                <p className="lg:text-lg">
                  Connect with local home chefs and enjoy authentic, healthy,
                  and affordable meals delivered straight to your doorstep.
                </p>
                {/* Action Button */}
                <div className="flex flex-col sm:flex-row gap-4">
                  {/* View menu button */}
                  <div>
                    <Link to={"/meals"} className="btn bg-orange-500  transition-all duration-300 hover:bg-orange-600 text-white rounded-full text-lg px-5 py-2">
                      {" "}
                      View menu{" "}
                    </Link>
                  </div>
                  <div>
                    <Link to={"dashboard/profile"} className="btn btn-primary btn-outline text-black hover:text-white  transition-all duration-300 hover:bg-orange-600  rounded-full px-5 py-2 text-lg">
                      Become a Chef
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            {/* image section */}
            <div className=" sm:h-full flex items-center order-1 sm:order-2">
              <div className="relative w-80 h-80 md:w-[450px] md:h-[450px] lg:w-[500px] lg:h-[500px] xl:w-[550px] xl:h-[550px] 2xl:w-[600px] 2xl:h-[600px] bg-white rounded-full flex items-center justify-center shadow-sm p-2 md:p-4 ">
                {/* Image Container */}
                <div className="w-full h-full rounded-full overflow-hidden relative">
                  <img
                    src={banner1}
                    alt="Healthy homemade bowl with tofu and vegetables"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
      {/* banner 2 */}
      <div className="w-full h-[calc(100vh-40px)] max-h-[900px] bg-green-50">
        <Container>
          <div className="flex flex-col justify-center text-center sm:text-left sm:justify-between  sm:flex-row px-5  items-center gap-5 md:gap-10 h-[calc(100vh-40px)] max-h-[900px]">
            {/* Content section */}
            <div className="order-2 sm:order-1">
              <div className=" space-y-8">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold ">
                  Fresh Ingredients,
                  <span className="text-green-400">Cooked with Love</span>
                </h2>
                <p className="lg:text-lg">
                 Every meal is prepared with fresh, locally sourced ingredients by chefs who cook with passion.
                </p>
                {/* Action Button */}
                <div className="flex flex-col sm:flex-row gap-4">
                  {/* View menu button */}
                  <div>
                    <Link to={"/meals"} className="btn bg-green-500  transition-all duration-300 hover:bg-green-600 text-white rounded-full text-lg px-5 py-2">
                      {" "}
                      View menu{" "}
                    </Link>
                  </div>
                  <div>
                    <Link to={"dashboard/profile"} className="btn btn-success btn-outline text-black hover:text-white  transition-all duration-300 hover:bg-green-600  rounded-full px-5 py-2 text-lg">
                      Become a Chef
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            {/* image section */}
            <div className=" sm:h-full flex items-center order-1 sm:order-2">
              <div className="relative w-80 h-80 md:w-[450px] md:h-[450px] lg:w-[500px] lg:h-[500px] xl:w-[550px] xl:h-[550px] 2xl:w-[600px] 2xl:h-[600px] bg-white rounded-full flex items-center justify-center shadow-sm p-2 md:p-4 ">
                {/* Image Container */}
                <div className="w-full h-full rounded-full overflow-hidden relative">
                  <img
                    src={banner2}
                    alt="Healthy homemade bowl with tofu and vegetables"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>

      {/* banner 3 */}
      <div className="w-full h-[calc(100vh-40px)] max-h-[900px] bg-blue-50">
        <Container>
          <div className="flex flex-col justify-center text-center sm:text-left sm:justify-between  sm:flex-row px-5  items-center gap-5 md:gap-10 h-[calc(100vh-40px)] max-h-[900px]">
            {/* Content section */}
            <div className="order-2 sm:order-1">
              <div className=" space-y-8">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold ">
                  Support Your,{" "}
                  <span className="text-blue-400">Local Community</span>
                </h2>
                <p className="lg:text-lg">
                 Empower your neighbors and discover hidden culinary gems in your own community right now.
                </p>
                {/* Action Button */}
                <div className="flex flex-col sm:flex-row gap-4">
                  {/* View menu button */}
                  <div>
                    <Link to={"/meals"} className="btn bg-blue-500  transition-all duration-300 hover:bg-blue-600 text-white rounded-full text-lg px-5 py-2">
                      {" "}
                      View menu{" "}
                    </Link>
                  </div>
                  <div>
                    <Link to={"dashboard/profile"} className="btn btn-blue btn-outline text-black hover:text-white  transition-all duration-300 hover:bg-blue-600  rounded-full px-5 py-2 text-lg">
                      Become a Chef
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            {/* image section */}
            <div className=" sm:h-full flex items-center order-1 sm:order-2">
              <div className="relative w-80 h-80 md:w-[450px] md:h-[450px] lg:w-[500px] lg:h-[500px] xl:w-[550px] xl:h-[550px] 2xl:w-[600px] 2xl:h-[600px] bg-white rounded-full flex items-center justify-center shadow-sm p-2 md:p-4 ">
                {/* Image Container */}
                <div className="w-full h-full rounded-full overflow-hidden relative">
                  <img
                    src={banner3}
                    alt="Healthy homemade bowl with tofu and vegetables"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
      </Carousel>
   
    </div>
  );
};

export default Banner;
