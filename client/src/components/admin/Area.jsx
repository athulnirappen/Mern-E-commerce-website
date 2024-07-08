import { AreaChart, Area,XAxis,YAxis,CartesianGrid,Legend,Tooltip} from 'recharts'

const productSales = [
  {
    name: "jan",
    product1: 4000,
    product2: 2400,
  },
  {
    name: "feb",
    product1: 3000,
    product2: 2200,
  },
  {
    name: "Mar",
    product1: 4200,
    product2: 2410,
  },
  {
    name: "Apr",
    product1: 2700,
    product2: 2100,
  },
  {
    name: "May",
    product1: 1200,
    product2: 1100,
  },
  {
    name: "june",
    product1: 3500,
    product2: 2430,
  },
];

const AreaCharts = () => {
    return (
      <div className="border rounded-md p-5 w-auto bg-white flex justify-center items-center">
            <AreaChart  width={450} height={400} data={productSales}>
                <YAxis />
                <XAxis dataKey={"name"} />
                <CartesianGrid strokeDasharray={"5 5"} />
                <Tooltip />
                <Legend/>
          <Area
            dataKey="product1"
            type={"monotone"}
            stroke="#2563eb"
            fill="#3b82f6"
            stackId={"1"}
          />
          <Area
            dataKey="product2"
            type={"monotone"}
            stroke="#7c3aed"
            fill="#8b5cf6"
            stackId={"1"}
          />
        </AreaChart>
      </div>
    );
}

export default AreaCharts