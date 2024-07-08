import SidebarAdmin from "../components/admin/Sidebar";
import Users from "../components/admin/Users";


const AllUsers = () => {
  return (
    <>
      <div className="bg-blue-100 min-h-screen">
        <div className=" lg:grid lg:grid-cols-12">
          <div className="lg:col-span-2">
            <SidebarAdmin />
          </div>

          <div className=" lg:col-span-10 ms-6">
            <Users/>
          </div>
        </div>
      </div>
    </>
  );
}

export default AllUsers