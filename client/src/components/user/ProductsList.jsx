import { useDispatch, useSelector } from "react-redux";

import ProductCard from "./ProductCard";
import { STATUSES, fetchAllProducts } from "../../redux/productSlice";
import { useEffect, useState } from "react";

const ProductsList = () => {
  const [page, setPage] = useState(1);

  const dispatch = useDispatch();

  const { data: products, status } = useSelector((state) => state.product);
  const Categories = useSelector((state) => state.category.category);
  const search=useSelector((state)=>state.search.search)

  const Handlepage = (currentpage) => {
    if (currentpage >= 1 && currentpage !== page && currentpage <= 2) {
      setPage(currentpage);
    }
  };

  useEffect(() => {
    dispatch(fetchAllProducts());
  }, [dispatch]);

 

  if (status === STATUSES.Loading) {
    return <h2 className="text-red-400 font-bold">Loading....</h2>;
  }
  return (
    <>
      <div className="mt-[4%] mb-[5%] mx-14  justify-center p-4">
        <h2 className="font-bold text-2xl">New Products</h2>
        <hr className="mt-3 border-2" />
        <div className=" flex flex-wrap justify-center items-center gap-5 mt-5">
          {products.filter((product)=>{
            if(Categories ==="All"){
              return product.title.toLowerCase().includes(search.toLowerCase())
            }else{
              return (
                Categories === product.category &&
                product.title.toLowerCase().includes(search.toLowerCase())
              );
            }

          }).slice(page * 9 - 9, page * 9).map((product, i) => {
            return <ProductCard key={i} product={product} />;
          })}
        </div>
      </div>
      <div className=" p-5 flex items-center justify-end me-10 ">
        {/* pagination */}
        <div className="border border-gray-500 px-4 py-2 w-24 rounded-s-md text-center cursor-pointer">
          <p
            className="text-blue-700 font-semibold"
            onClick={() => Handlepage(page - 1)}
          >
            previous
          </p>
        </div>

        <div className="border border-gray-500 px-4 py-2 w-24 text-center rounded-e-md cursor-pointer ">
          <p
            className="text-blue-700 font-semibold"
            onClick={() => Handlepage(page + 1)}
          >
            next
          </p>
        </div>
      </div>
    </>
  );
};

export default ProductsList;
