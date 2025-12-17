import React from "react";
import useAxiosSecure from "../../../hooks/useSecureAxios";
import { useQuery } from "@tanstack/react-query";
import LoadingSpinner from "../../../components/Shared/LoadingSpinner/LoadingSpinner";
import { FiDollarSign } from "react-icons/fi";
import { TbUsers } from "react-icons/tb";
import { IoTimeOutline } from "react-icons/io5";
import { CircleCheckBig } from "lucide-react";
import Barchar from "../../../components/DashBoard/Chart/Barchar";
import Piechar from "../../../components/DashBoard/Chart/Piechar";
const PlatformStatistics = () => {
  const axiosSecure = useAxiosSecure();

  const { data: StatisticData = [], isLoading } = useQuery({
    queryKey: ["statistics"],
    queryFn: async () => {
      const result = await axiosSecure(`/getStatistic`);
      return result.data;
    },
  });
  const barChartData = [
    {
      name: "Total Payment",
      value: StatisticData.totalRevinue,
    },
    {
      name: "Total Users",
      value: StatisticData.totalUser,
    },
    {
      name: "Orders Pending",
      value: StatisticData.pendingOrders,
    },
    {
      name: "Orders Delivered",
      value: StatisticData.deliveredOrders,
    },
  ];

  const pieChartData =
    StatisticData?.userStat?.map((item) => {
      return {
        name: item.status,
        value: item.count,
      };
    }) || [];

  if (isLoading) return <LoadingSpinner></LoadingSpinner>;
  return (
    <div>
      <div className="mb-10 mt-5 mx-5">
        <h2 className="text-2xl font-semibold">Platform Statistics</h2>
        <p className="text-gray-500">Overview of LocalChefBazaar performance</p>
      </div>

      <div className="grid grid-cols-1 pr-4 lg:pr-0 sm:grid-cols-2 xl:grid-cols-4 gap-10">
        {/* Card */}
        {/* revinue */}
        <div className="shadow-sm border border-gray-300 rounded-2xl flex items-center px-10 py-5 gap-5">
          <div className="w-10 h-10 sm:w-14 sm:h-14 bg-green-200 text-green-700 rounded-full flex justify-center items-center text-2xl">
            <FiDollarSign />
          </div>
          <div>
            <h4 className="text-gray-400 font-semibold">Total Revenue</h4>
            <h1 className="text-4xl font-bold">$ {StatisticData.totalRevinue}</h1>
          </div>
        </div>

        {/* user */}
        <div className="shadow-sm border border-gray-300 rounded-2xl flex items-center px-10 py-5 gap-5">
          <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-200 text-blue-600  rounded-full flex justify-center items-center text-2xl">
            <TbUsers />
          </div>
          <div>
            <h4 className="text-gray-400 font-semibold">Total User</h4>
            <h1 className="text-4xl font-bold">{StatisticData.totalUser}</h1>
          </div>
        </div>
        <div className="shadow-sm border border-gray-300 rounded-2xl flex items-center px-10 py-5 gap-5">
          <div className="w-10 h-10 sm:w-12 sm:h-12 bg-orange-200 text-orange-600 rounded-full flex justify-center items-center text-3xl">
            <IoTimeOutline />
          </div>
          <div>
            <h4 className="text-gray-400 font-semibold">Orders Pending</h4>
            <h1 className="text-4xl font-bold">
              {StatisticData.pendingOrders}
            </h1>
          </div>
        </div>
        <div className="shadow-sm border border-gray-300 rounded-2xl flex items-center px-10 py-5 gap-5">
          <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-200 rounded-full flex justify-center items-center text-2xl">
            <CircleCheckBig size={24} color="#000080" />
          </div>
          <div>
            <h4 className="text-gray-400 font-semibold">Orders Delivered</h4>
            <h1 className="text-4xl font-bold">
              {StatisticData.deliveredOrders}
            </h1>
          </div>
        </div>
      </div>
      <div className=" flex flex-col lg:flex-row my-10 w-full gap-20 justify-center lg:items-center ">

        <div className="lg:flex-1 border border-gray-50 shadow-sm rounded-2xl px-5 py-5 h-[300px] md:h-[500px]">

            <h2 className="text-2xl font-bold">Order matrics</h2>

             <Barchar data={barChartData}></Barchar>
    
         
        </div>
  
        <div className="lg:flex-1 h-[300px] md:h-[500px] border p-5 border-gray-50 shadow-sm rounded-2xl">
                <h2 className="text-2xl font-bold">Order matrics</h2>
                <div></div>
          <Piechar data={pieChartData}></Piechar>
        </div>
      </div>
    </div>
  );
};

export default PlatformStatistics;
