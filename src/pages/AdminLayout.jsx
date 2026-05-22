import { Outlet } from "react-router";
import { Sidebar, Topbar } from "../components";

const AdminLayout = () => {
  return (
    <div className="flex items-start w-full overflow-x-hidden">
      <div className="hidden md:block fixed md:w-[20%] lg:w-[17%] h-screen bg-bg-deepmain">
        <Sidebar />
      </div>

      <div className="ml-auto w-full md:w-[80%] lg:w-[83%]">
        <div className="fixed top-0 right-0 z-10 w-full md:w-[80%] lg:w-[83%]">
          <Topbar />
        </div>

        <div className="mt-16 md:mt-20">
          <div className="w-[94%] md:w-[98%] mx-auto">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
