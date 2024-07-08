import SidebarAdmin from "../components/admin/Sidebar";


const AllOrders = () => {
  return (
    <>
      <div className="bg-blue-100 min-h-screen">
        <div className=" lg:grid lg:grid-cols-12">
          <div className="lg:col-span-2">
            <SidebarAdmin />
          </div>

          <div className=" lg:col-span-10 ms-6"></div>
        </div>
      </div>
    </>
  );
}

export default AllOrders