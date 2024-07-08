import AdminContent from "../components/admin/AdminContent";

import SidebarAdmin from "../components/admin/Sidebar";

const AdminDashboard = () => {
  return (
    <>
      <div className="bg-blue-100 mini-h-screen">
        <div className=" lg:grid lg:grid-cols-12">
          <div className="lg:col-span-2">
            <SidebarAdmin />
          </div>

          <div className=" lg:col-span-10 ms-6">
            <AdminContent />
          </div>
        </div>

        {/* charts */}
      </div>
    </>
  );
};

export default AdminDashboard;
