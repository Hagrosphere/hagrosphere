import { NavLink, useNavigate } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { Adminlogo } from "../assets";
import { CiGrid42 } from "react-icons/ci";
import { LuTractor, LuFileText } from "react-icons/lu";
import { FiBriefcase } from "react-icons/fi";
import { RiGroupLine } from "react-icons/ri";
import { IoNotificationsOutline, IoDocumentTextOutline } from "react-icons/io5";
import { MdOutlineSettings, MdLogout } from "react-icons/md";
import { selectCurrentUser, clearAuth } from "../features/auth/slice/authSlice";
import { useLogoutMutation } from "../features/auth/authApi";
import { toast } from "react-toastify";

const Sidebar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const currentUser = useSelector(selectCurrentUser);
  const [logout, { isLoading }] = useLogoutMutation();

  const handleLogout = async () => {
    try {
      await logout().unwrap();
      dispatch(clearAuth());
      toast.success("Logged out successfully");
      navigate("/admin/login");
    } catch (err) {
      // Force logout on client side even if server call fails
      dispatch(clearAuth());
      toast.error("Logout failed");
      navigate("/admin/login");
    }
  };

  const getInitials = () => {
    if (!currentUser) return "A";
    const first = currentUser.firstName?.[0] || "";
    const last = currentUser.lastName?.[0] || "";
    return (first + last).toUpperCase() || "A";
  };

  const getFullName = () => {
    if (!currentUser) return "Admin User";
    return (
      `${currentUser.firstName || ""} ${currentUser.lastName || ""}`.trim() ||
      "Admin User"
    );
  };

  const getRole = () => {
    if (!currentUser?.role) return "Administrator";
    return currentUser.role.replace("_", " ");
  };
  return (
    <div className="flex flex-col w-full h-screen text-white ">
      <div className="py-3 border-b border-b-[#7A7A72] ">
        <div className="w-[85%] mx-auto ">
          <div className="flex items-center gap-3 ">
            <img src={Adminlogo} alt="" className="w-11 h-11 " />
            <div className="font-inter">
              <h2 className="text-sm font-bold md:text-base">HAGROSPHERE</h2>
              <h4 className="text-xs md:text-sm ">ADMIN PORTAL</h4>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[85%] mx-auto mt-10 flex-1">
        <div className="space-y-6">
          <NavLink
            to="/admin"
            className="flex items-center w-full gap-4 text-base font-medium font-inter "
          >
            <CiGrid42 className="w-5.5 h-5.5 font-semibold" />
            Dashboard
          </NavLink>
          <NavLink
            to="/admin/manage-equipment"
            className="flex items-center w-full gap-4 text-base font-inter "
          >
            <LuTractor className="w-5.5 h-5.5" />
            Equipment
          </NavLink>
          <NavLink
            to="/admin/manage-jobs"
            className="flex items-center w-full gap-4 text-base font-inter "
          >
            <FiBriefcase className="w-5.5 h-5.5 font-semibold" />
            Jobs
          </NavLink>
          <NavLink
            to="/admin/applications"
            className="flex items-center w-full gap-4 text-base font-inter "
          >
            <IoDocumentTextOutline className="w-5 h-5" />
            Applications
          </NavLink>
          <NavLink
            to="/admin/manage-users"
            className="flex items-center w-full gap-4 text-base font-inter "
          >
            <RiGroupLine className="w-5.5 h-5.5 font-semibold" />
            Users
          </NavLink>
          <NavLink
            to="/admin/manage-articles"
            className="flex items-center w-full gap-4 text-base font-inter "
          >
            <LuFileText className="w-5.5 h-5.5 font-semibold" />
            Articles
          </NavLink>
          <NavLink
            to="/admin/activity"
            className="flex items-center w-full gap-4 text-base font-inter "
          >
            <IoNotificationsOutline className="w-5.5 h-5.5 font-semibold" />
            Activity
          </NavLink>
          <NavLink
            to="/admin/settings"
            className="flex items-center w-full gap-4 text-base font-inter "
          >
            <MdOutlineSettings className="w-5.5 h-5.5 font-semibold" />
            Settings
          </NavLink>
        </div>
      </div>
      <div className="w-[85%] mx-auto space-y-4.5 py-3 mb-auto">
        <div className="w-full py-1 bg-bg-btn-primary rounded-xl">
          <div className="w-[86%] mx-auto flex items-center gap-3">
            <div className="bg-[#1C1C18] h-8 w-8 rounded-full flex items-center justify-center">
              <h2 className="text-sm font-medium font-inter">
                {getInitials()}
              </h2>
            </div>
            <div className="font-inter">
              <h2 className="text-xs font-medium">{getFullName()}</h2>
              <h4 className="text-xs">{getRole()}</h4>
            </div>
          </div>
        </div>
        <div className="pl-2">
          <button
            onClick={handleLogout}
            disabled={isLoading}
            className="flex items-center gap-3 cursor-pointer font-inter"
          >
            <MdLogout className="w-5.5 h-5.5 " />
            {isLoading ? "Logging out..." : "Logout"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
