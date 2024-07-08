import ProductsList from "../components/user/ProductsList";
import SidebarPart from "../components/user/Sidebar";

const AllProducts = () => {
  return (
    <>
      <div className="grid grid-cols-12  mx-7 ">
        <div className="col-span-2 mt-[30%]">
          <SidebarPart />
        </div>
        <div className="col-span-10 lg:ms-0 ms-16">
          <ProductsList />
        </div>
      </div>
    </>
  );
};

export default AllProducts;
