import { useState } from "react";
import Add from "./Add";
import ProductsTable from "./ProductsTable";

const Products = () => {

    const [serverResponse, setServerResponse] = useState({})
    
    const handleResponse = (res) => {
        setServerResponse(res)
        
    }
  return (
    <>
      <div className="mt-3 p-5">
        <h1 className="font-bold text-3xl">AllProducts</h1>
        <hr className="border-b-2 mt-3 border-gray-300" />

        <div className="mt-3 absolute right-28">
          <Add handleResponse={handleResponse} />
        </div>

        <div>
          <ProductsTable serverResponse={serverResponse} />
        </div>
      </div>
    </>
  );
};

export default Products;
