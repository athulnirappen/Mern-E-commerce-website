import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
  Tooltip,
} from "recharts";

const salesData = [
  {
    name: "jan",
    revenue: 4000,
    profit: 2400,
  },
  {
    name: "feb",
    revenue: 3000,
    profit: 2200,
  },
  {
    name: "Mar",
    revenue: 4200,
    profit: 2410,
  },
  {
    name: "Apr",
    revenue: 2700,
    profit: 2100,
  },
  {
    name: "May",
    revenue: 1200,
    profit: 1100,
  },
  {
    name: "june",
    revenue: 3500,
    profit: 2430,
  },
];

const BarCharts = () => {
  return (
    <div className="border p-5 w-auto rounded-md bg-white flex justify-center items-center">
      <BarChart width={450} height={400} data={salesData} margin={{right:30}}>
        <YAxis />
        <XAxis dataKey={"name"} />
        <CartesianGrid strokeDasharray={"3 3"} />
        <Tooltip  />
        <Legend />
        <Bar
          dataKey="revenue"
          
          fill="#3b82f6"
          
        />
        <Bar
          dataKey="profit"
          
          fill="#8b5cf6"
         
        />
      </BarChart>
    </div>
  );
};

export default BarCharts;
