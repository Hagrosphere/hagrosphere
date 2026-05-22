// import { FiSearch } from "react-icons/fi";
// import { IoNotificationsOutline, IoMenuSharp } from "react-icons/io5";
// import { IoMdClose } from "react-icons/io";
// import { Adminlogo } from "../assets";
// import { useState } from "react";

// const Topbar = () => {
//   const [menu, setMenu] = useState(false);
//   return (
//     <div className="w-full bg-white border-b border-b-[#EFF6FF] shadow py-2 md:py-3 lg:py-2.5">
//       <div className="w-[94%] md:w-[98%] mx-auto flex items-center justify-between font-inter">
//         <div className="flex items-center gap-1.5 md:hidden ">
//           <img src={Adminlogo} alt="" className="w-8 h-8 " />
//           <div className="font-inter">
//             <h2 className="text-sm font-bold">HAGROSPHERE</h2>
//             <h4 className="text-[11px] font-medium text-[#7A7A72]">
//               ADMIN PORTAL
//             </h4>
//           </div>
//         </div>
//         <div className="hidden md:block">
//           <h2 className="text-base font-medium md:text-lg">Dashboard</h2>
//           <p className="text-[#7A7A72] md:text-xs lg:text-sm ">
//             Wednesday, May 6, 2026
//           </p>
//         </div>
//         <div className="items-center hidden gap-4 md:flex">
//           <div className="relative w-full md:w-78 font-inter">
//             <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-[#7A7A72]" />
//             <input
//               type="text"
//               //   value={searchQuery}
//               //   onChange={handleSearchChange}
//               placeholder="Search"
//               className="w-full rounded border border-[#E5DDD0] pl-10 pr-4 py-1.5 text-sm text-[#7A7A72] placeholder:text-[#7A7A72] outline-0"
//             />
//           </div>
//           <div className="relative">
//             <IoNotificationsOutline className="text-[#7A7A72] h-5 w-5 lg:h-5.5 lg:w-5.5" />
//             <div className="absolute -top-3 -right-1 text-[#E17100]">
//               <h4 className="text-base font-semibold">3</h4>
//             </div>
//           </div>
//         </div>
//         <div className="block md:hidden" onClick={() => setMenu(!menu)}>
//           {menu ? (
//             <IoMdClose className="w-6 h-6" />
//           ) : (
//             <IoMenuSharp className="w-6 h-6" />
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Topbar;

import { FiSearch } from "react-icons/fi";
import { IoNotificationsOutline, IoMenuSharp } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import { Adminlogo } from "../assets";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router";

// Page config: maps route paths to title, subtitle, and optional action button

const getRealDate = () => {
  return new Date().toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

const Topbar = () => {
  const [menu, setMenu] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const PAGE_CONFIG = {
    "/admin": {
      title: "Dashboard",
      subtitle: null,
      showDate: true,
    },
    "/admin/settings": {
      title: "Settings",
      subtitle: "Manage your account and platform settings",
    },
    "/admin/activity": {
      title: "Activity Feed",
      subtitle: "Monitor all platform activities and system notifications",
    },
    "/admin/manage-jobs": {
      title: "Job Management",
      subtitle: "Manage all job listings and applications",
      action: {
        label: "+ Post Job",
        onClick: () => navigate("/admin/add-job"),
      },
    },
    "/admin/add-job": {
      title: "Post New Job",
      subtitle: "Create a new job listing for the platform",
    },
    "/admin/manage-equipment": {
      title: "Equipment Management",
      subtitle: "Manage all agricultural equipment listings",
      action: {
        label: "+ Add Equipment",
        onClick: () => navigate("/admin/add-equipment"),
      },
    },

    "/admin/manage-articles": {
      title: "Article Management",
      subtitle: "Manage educational content and blog articles",
      action: {
        label: "+ Add Article",
        onClick: () => navigate("/admin/add-article"),
      },
    },

    "/admin/add-equipment": {
      title: "Add Equipment",
      subtitle: "Add a new equipment to the list",
    },
    "/admin/manage-users": {
      title: "User Management",
      subtitle: "Manage and verify platform users",
    },
    "/admin/edit-equipment/:name": {
      title: "Edit Equipment",
      subtitle: "Update equipment information and availability",
    },
  };

  const getPageConfig = (pathname) => {
    // First try exact match
    if (PAGE_CONFIG[pathname]) return PAGE_CONFIG[pathname];

    // Then try startsWith for dynamic routes
    for (const [pattern, config] of Object.entries(PAGE_CONFIG)) {
      if (pattern.includes("/:")) {
        // Convert "/edit-equipment/:name" → "/edit-equipment/"
        const base = pattern.split("/:")[0];
        if (pathname.startsWith(base)) {
          return config;
        }
      }
    }

    // Fallback
    return { title: "Dashboard", showDate: true };
  };

  const config = getPageConfig(location.pathname);

  return (
    <div className="w-full bg-white border-b border-b-[#EFF6FF] shadow py-2 md:py-3 ">
      <div className="w-[94%] md:w-[98%] mx-auto flex items-center justify-between font-inter">
        {/* Mobile: logo */}
        <div className="flex items-center gap-1.5 md:hidden">
          <img src={Adminlogo} alt="" className="w-8 h-8" />
          <div className="font-inter">
            <h2 className="text-sm font-bold">HAGROSPHERE</h2>
            <h4 className="text-[11px] font-medium text-[#7A7A72]">
              ADMIN PORTAL
            </h4>
          </div>
        </div>

        {/* Desktop: dynamic title + subtitle/date */}
        <div className="hidden md:block">
          <h2 className="text-base font-bold md:text-lg">{config.title}</h2>
          <p className="text-[#7A7A72] md:text-xs ">
            {config.showDate ? getRealDate() : config.subtitle}
          </p>
        </div>

        {/* Desktop: search + bell + optional action button */}
        <div className="items-center hidden gap-4 md:flex">
          <div className="relative w-full md:w-78 font-inter">
            <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-[#7A7A72]" />
            <input
              type="text"
              placeholder="Search"
              className="w-full rounded border border-[#E5DDD0] pl-10 pr-4 py-1.5 text-sm text-[#7A7A72] placeholder:text-[#7A7A72] outline-0"
            />
          </div>

          <div className="relative">
            <IoNotificationsOutline className="text-[#7A7A72] h-5 w-5 lg:h-5.5 lg:w-5.5" />
            <div className="absolute -top-3 -right-1 text-[#E17100]">
              <h4 className="text-base font-semibold">3</h4>
            </div>
          </div>

          {config.action && (
            <button
              onClick={config.action.onClick}
              className="flex items-center gap-1.5 bg-[#2d6a2d] hover:bg-[#245224] text-white text-sm font-medium px-4 py-1.5 rounded-md transition-colors whitespace-nowrap"
            >
              {config.action.label}
            </button>
          )}
        </div>

        {/* Mobile: hamburger */}
        <div className="block md:hidden" onClick={() => setMenu(!menu)}>
          {menu ? (
            <IoMdClose className="w-6 h-6" />
          ) : (
            <IoMenuSharp className="w-6 h-6" />
          )}
        </div>
      </div>
    </div>
  );
};

export default Topbar;
