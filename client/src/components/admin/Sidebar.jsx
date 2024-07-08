import { HiChartPie, HiShoppingBag, HiUser } from "react-icons/hi";
import { BsCartCheckFill } from "react-icons/bs";
import { FaPowerOff } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";
import { useState } from "react";
import { FaBarsStaggered } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";


const SidebarAdmin = () => {

  const [active, setActive] = useState(true)
  const navigate=useNavigate()
  
  const logOUT = () => {
    localStorage.removeItem('userINFO')
    navigate('/')

  }
  return (
    <>
      <div className={`${active ? "none" : "block"} p-3`}>
        <FaBarsStaggered onClick={() => setActive(!active)} />
      </div>
      <div
        className={` fixed top-0 left-0 w-full lg:w-[15vw] bg-white h-full p-5 ${
          active ? "translate-x-0" : "-translate-x-full"
        } transition-all duration-500 z-50`}
      >
        <div className="absolute right-5 border rounded-md p-2 cursor-pointer lg:hidden">
          <IoMdClose className="text-xl  " onClick={() => setActive(!active)} />
        </div>
        <div className="flex items-center justify-center flex-col mt-3 gap-2">
          <Link to={"/dashboard"}>
            <img
              src="https://pbs.twimg.com/profile_images/1525054844297302016/gjS8FBUu_400x400.jpg"
              alt="no image"
              className="w-20 h-20 rounded-md"
            />
          </Link>
        </div>

        <div className="flex flex-col gap-3 mt-16">
          <Link to={"/dashboard"}>
            <div className="flex  border px-3 py-2 rounded items-center gap-3 cursor-pointer hover:bg-blue-600 hover:text-white">
              <HiChartPie className="text-xl" />

              <p className="font-bold">Dashboard</p>
            </div>
          </Link>

          <Link to={"/adminproducts"}>
            <div className="flex  border px-3 py-2 rounded items-center gap-3 cursor-pointer hover:bg-blue-600 hover:text-white">
              <HiShoppingBag className="text-xl" />

              <p className="font-bold">Products</p>
            </div>
          </Link>

          <Link to={"/allusers"}>
            <div className="flex  border px-3 py-2 rounded items-center gap-3 cursor-pointer hover:bg-blue-600 hover:text-white">
              <HiUser className="text-xl" />
              <p className="font-bold">Users</p>
            </div>
          </Link>

          <Link to={"/allorders"}>
            <div className="flex  border px-3 py-2 rounded items-center gap-3 cursor-pointer hover:bg-blue-600 hover:text-white">
              <BsCartCheckFill className="text-xl" />
              <p className="font-bold">Orders</p>
            </div>
          </Link>

          <div className="flex  border px-3 py-2 rounded items-center gap-3 cursor-pointer hover:bg-blue-600 hover:text-white">
            <FaPowerOff className="text-xl" />
            <p className="font-bold" onClick={logOUT}>Logout</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SidebarAdmin;
