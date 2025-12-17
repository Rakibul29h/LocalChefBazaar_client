import React from "react";
import {
  BarChart,
  Legend,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Bar,
  ResponsiveContainer,
} from "recharts";
const Barchar = ({ data }) => {
  return (
    <div className="flex justify-center items-center h-full w-full py-4 px-4">
      <div className="w-full max-w-[700px] h-full">
        <BarChart
          data={data}
          style={{
            width: "100%",
            maxWidth: "700px",
            maxHeight: "70vh",
            aspectRatio: 1.618,
          }}
          responsive
          margin={{
            top: 20,
            right: 20,
            bottom: 20,
            left: 20,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis width="auto" />
          <Tooltip />
          <Legend />
          <Bar
            dataKey="value"
            fill="#ff6900"
            barSize={30}
            isAnimationActive={true}
          />
        </BarChart>
      </div>
    </div>
  );
};

export default Barchar;
