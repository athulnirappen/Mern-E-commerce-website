import { GiShoppingBag } from "react-icons/gi";
import { ImUsers } from "react-icons/im";
import { BsCartFill } from "react-icons/bs";
import { BiSolidErrorAlt } from "react-icons/bi";
import AreaCharts from '../admin/Area';
import BarCharts from '../admin/Bar'

const AdminContent = () => {
  return (
    <div className="p-3">
      <div className="p-3">
        <h2 className="font-bold text-xl ms-5">Hi, Welcome back👋</h2>
      </div>
      {/*  */}
      <div className="mx-5 mt-4 flex flex-wrap gap-10 ">
        <div className="bg-white w-56 rounded-lg p-5 h-auto flex gap-5 items-center  ">
          <span className="text-3xl">
            <GiShoppingBag className="text-green-500" />
          </span>
          <div>
            <h1 className="font-bold">715K</h1>
            <p className="font-light">Weekly Sales</p>
          </div>
        </div>
        <div className="bg-white w-56 rounded-lg p-5 h-auto flex gap-5 items-center  ">
          <span className="text-3xl">
            <ImUsers className="text-blue-500" />
          </span>
          <div>
            <h1 className="font-bold">1.35m</h1>
            <p className="font-light">New Users</p>
          </div>
        </div>
        <div className="bg-white w-56 rounded-lg p-5 h-auto flex gap-5 items-center  ">
          <span className="text-3xl">
            <BsCartFill className="text-yellow-300" />
          </span>
          <div>
            <h1 className="font-bold">1.72m</h1>
            <p className="font-light">New Orders</p>
          </div>
        </div>
        <div className="bg-white w-56 rounded-lg p-5 h-auto flex gap-5 items-center  ">
          <span className="text-3xl">
            <BiSolidErrorAlt className="text-orange-500" />
          </span>
          <div>
            <h1 className="font-bold">234</h1>
            <p className="font-light">Bug Reports</p>
          </div>
        </div>
      </div>

      {/* charts */}

      <div className="flex  flex-wrap gap-10 mt-12 p-5">
        <AreaCharts />
        <BarCharts />
      </div>
    </div>
  );
};

export default AdminContent;
