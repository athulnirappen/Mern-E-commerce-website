import { useDispatch, useSelector } from "react-redux";
import { fetchAllProducts, } from "../../redux/productSlice";
import { useEffect } from "react";
import { useState } from "react";
import { setCategory } from "../../redux/categorySlice";

const SidebarPart = () => {
  const [categories, setCategories] = useState([]);

  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.product);
 
   
   

  const listUniqueCategories = () => {
    const uniqueCategories = [...new Set(data.map((item) => item.category))];
    setCategories(uniqueCategories);
  };

 

  useEffect(() => {
    dispatch(fetchAllProducts());

  }, [dispatch]);

  useEffect(() => {
        listUniqueCategories();
  }, [data])
  

 

  return (
    <div className=" mx-3">
      <div className=" border-2 rounded-md p-5 lg:w-52 w-28 h-auto cursor-pointer ">
        <h2 className="text-center md:font-bold font-normal ">CATEGORY</h2>
        <hr className="border-b-2 mt-2 mb-2" />

        <div className="p-3 mb-3">
          {categories.map((val, i) => (
            <div
              className="flex justify-center mb-3 border p-2 rounded hover:bg-violet-500 hover:text-white"
              key={i}
            >
              <h3
                className="font-semibold "
                onClick={() => dispatch(setCategory(val))}
              >
                {val}
              </h3>
            </div>
          ))}
          <div className="flex gap-5 items-center justify-center  border p-2 rounded hover:bg-violet-500 hover:text-white">
            <h3
              className="font-semibold  "
              onClick={() => dispatch(setCategory("All"))}
            >
              All
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SidebarPart;
