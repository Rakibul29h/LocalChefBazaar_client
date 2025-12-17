import React from "react";
import {
  Cell,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

const Piechar = ({ data }) => {
  const colors = ["#d35400", "#e67e22", "#f39c12"];
  return (
    <div className=" flex justify-center items-center h-full w-full ">
      <div className="w-full max-w-[700px] h-full">
        <PieChart
          style={{
            width: "100%",
            maxWidth: "500px",
            maxHeight: "80vh",
            aspectRatio: 1,
          }}
          responsive
          margin={{ top: 50, right: 50, bottom: 50, left: 50 }}
        >
          <Tooltip></Tooltip>
          <Legend></Legend>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            innerRadius="60%"
            outerRadius="80%"
            label
            isAnimationActive={true}
          >
            {data?.map((item, index) => (
              <Cell
                key={`cell-${index}`}
                fill={colors[index % colors.length]}
              />
            ))}
          </Pie>
        </PieChart>
      </div>
    </div>
  );
};

export default Piechar;
