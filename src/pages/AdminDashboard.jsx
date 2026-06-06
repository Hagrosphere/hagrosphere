import {
  HiOutlineBriefcase,
  HiOutlineUsers,
  HiOutlineExclamationCircle,
} from "react-icons/hi";
import { PiWarehouse } from "react-icons/pi";
import { Countup } from "../components";
import { useDashboard } from "../features/dashboard/hooks/useDashboard";

const Badge = ({ label, colorClass, bgClass }) => (
  <span className={`text-[11px] font-semibold px-2 py-1 rounded-full ${bgClass} ${colorClass}`}>
    {label}
  </span>
);

const Divider = () => <div className="border-b border-[#F0F0F0]" />;

const Card = ({ children, className = "" }) => (
  <div className={`bg-white border border-[#ECECEC] rounded-2xl overflow-hidden ${className}`}>
    {children}
  </div>
);

const AdminDashboard = () => {
  const { stats, recent, isOverviewLoading } = useDashboard();

  const tagMap = {
    Equipment: { bgClass: "bg-[#E8F0FE]", colorClass: "text-[#3B5BDB]" },
    User: { bgClass: "bg-[#FFF3E0]", colorClass: "text-[#E65100]" },
    Job: { bgClass: "bg-[#E8F5E9]", colorClass: "text-[#2E7D32]" },
  };

  const statCards = [
    {
      id: 1,
      title: "Total Equipment",
      value: stats?.equipment?.total ?? 0,
      change: `${stats?.equipment?.available ?? 0} available`,
      percentage: "Live",
      icon: <PiWarehouse className="text-[#3B82F6] text-[22px]" />,
      iconBg: "bg-[#EEF4FF]",
      percentageBg: "bg-[#EAFBF1]",
      percentageText: "text-[#22C55E]",
    },
    {
      id: 2,
      title: "Active Jobs",
      value: stats?.jobs?.open ?? 0,
      change: `${stats?.jobs?.total ?? 0} total`,
      percentage: "Live",
      icon: <HiOutlineBriefcase className="text-[#A855F7] text-[22px]" />,
      iconBg: "bg-[#F5EDFF]",
      percentageBg: "bg-[#EAFBF1]",
      percentageText: "text-[#22C55E]",
    },
    {
      id: 3,
      title: "Total Users",
      value: stats?.users?.total ?? 0,
      change: `+${stats?.users?.thisMonth ?? 0} this month`,
      percentage: `+${stats?.users?.growthPercent ?? 0}%`,
      icon: <HiOutlineUsers className="text-[#22C55E] text-[22px]" />,
      iconBg: "bg-[#ECFDF3]",
      percentageBg: "bg-[#EAFBF1]",
      percentageText: "text-[#22C55E]",
    },
    {
      id: 4,
      title: "Unread Messages",
      value: stats?.messages?.unread ?? 0,
      change: "Requires review",
      percentage: "Action needed",
      icon: <HiOutlineExclamationCircle className="text-[#F59E0B] text-[22px]" />,
      iconBg: "bg-[#FFF7ED]",
      percentageBg: "bg-[#FFF4E5]",
      percentageText: "text-[#F59E0B]",
    },
  ];

  if (isOverviewLoading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="border-t-4 border-b-4 rounded-full animate-spin h-10 w-10 border-bg-btn-primary" />
      </div>
    );
  }

  return (
    <div className="w-full pt-3">
      {/* Stat Cards */}
      <div className="grid grid-cols-1 gap-3 md:gap-5 sm:grid-cols-2 xl:grid-cols-4">
        {statCards.map((item) => (
          <div
            key={item.id}
            className="rounded-2xl border border-[#ECECEC] font-inter bg-white p-3 shadow-[0px_1px_2px_rgba(16,24,40,0.04)]"
          >
            <div className="flex items-start justify-between mb-4 md:mb-6">
              <div className={`flex h-7 w-7 md:h-9 md:w-9 items-center justify-center rounded-xl ${item.iconBg}`}>
                {item.icon}
              </div>
              <div className={`rounded-full px-3 py-1 text-xs md:font-medium ${item.percentageBg} ${item.percentageText}`}>
                {item.percentage}
              </div>
            </div>
            <div>
              <h2 className="mb-2 text-xl md:text-2xl font-bold leading-none text-[#111827]">
                <Countup end={item.value} duration={1400} />
              </h2>
              <p className="mb-4 text-xs md:text-sm font-medium text-[#6B7280]">{item.title}</p>
              <div className="flex items-center gap-1 text-xs md:text-sm">
                <span className={item.id === 4 ? "font-medium text-[#6B7280]" : "text-[#9CA3AF]"}>
                  {item.change}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <section className="w-full my-10">
        <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-6 font-inter">
          {/* Recent Equipment */}
          <Card>
            <div className="flex items-center justify-between px-4.5 py-4">
              <div>
                <p className="font-bold text-[15px] text-[#111]">Recent Equipment</p>
                <p className="text-xs text-[#9CA3AF] mt-0.5">Latest equipment listings</p>
              </div>
              <Badge
                label={`${stats?.equipment?.total ?? 0} total`}
                colorClass="text-[#B45309]"
                bgClass="bg-[#FFF4E5]"
              />
            </div>
            <Divider />
            {(recent?.equipment ?? []).slice(0, 3).map((e, i, arr) => (
              <div key={e.id ?? i}>
                <div className="flex items-start gap-3 px-4.5 py-3.5">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1.5">
                      <Badge label="Equipment" {...tagMap.Equipment} />
                    </div>
                    <p className="font-semibold text-sm py-1.5 text-[#111]">{e.name}</p>
                    <p className="text-xs text-[#9CA3AF]">{e.location ?? "—"}</p>
                  </div>
                  <span className={`text-[11px] font-semibold px-2 py-0.5 rounded-full ${
                    e.status === "AVAILABLE" ? "bg-[#F0FDF4] text-[#16A34A]" : "bg-[#FFF7ED] text-[#D97706]"
                  }`}>
                    {e.status}
                  </span>
                </div>
                {i < arr.length - 1 && <Divider />}
              </div>
            ))}
            {(recent?.equipment ?? []).length === 0 && (
              <p className="text-center text-[#9CA3AF] text-sm py-6">No equipment yet</p>
            )}
          </Card>

          {/* Recent Activity */}
          <Card>
            <div className="flex items-center justify-between px-[18px] py-4">
              <div>
                <p className="font-bold text-[15px] text-[#111]">Recent Users</p>
                <p className="text-xs text-[#9CA3AF] mt-0.5">Latest registrations</p>
              </div>
            </div>
            <Divider />
            <div className="py-1.5">
              {(recent?.users ?? []).slice(0, 4).map((u, i) => (
                <div key={u.id ?? i} className="flex items-start gap-3 px-[18px] py-[11px]">
                  <div className="w-2 h-2 rounded-full bg-[#22C55E] mt-[5px] shrink-0" />
                  <div>
                    <p className="font-semibold text-[13px] text-[#111]">
                      {u.firstName} {u.lastName}
                    </p>
                    <p className="text-xs text-[#6B7280]">{u.email}</p>
                    <p className="text-[11px] text-[#9CA3AF] mt-0.5">{u.role}</p>
                  </div>
                </div>
              ))}
              {(recent?.users ?? []).length === 0 && (
                <p className="text-center text-[#9CA3AF] text-sm py-6">No users yet</p>
              )}
            </div>
          </Card>
        </div>
      </section>

      <section className="w-full mb-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7 font-inter">
          {/* Recent Jobs */}
          <Card>
            <div className="px-4.5 py-4">
              <p className="font-bold text-[15px] text-[#111]">Recent Jobs</p>
              <p className="text-xs text-[#9CA3AF] mt-0.5">Latest job postings</p>
            </div>
            <Divider />
            {(recent?.jobs ?? []).slice(0, 4).map((j, i, arr) => (
              <div key={j.id ?? i}>
                <div className="flex items-center justify-between px-4.5 py-3">
                  <div>
                    <p className="font-semibold text-[13px] text-[#111]">{j.title}</p>
                    <p className="text-xs text-[#9CA3AF]">{j.company}</p>
                    <p className="text-xs text-[#9CA3AF]">{j.location}</p>
                  </div>
                  <span className={`text-[11px] font-semibold px-2 py-0.5 rounded-full ${
                    j.status === "OPEN" ? "bg-[#F0FDF4] text-[#16A34A]" : "bg-[#F3F4F6] text-[#6B7280]"
                  }`}>
                    {j.status}
                  </span>
                </div>
                {i < arr.length - 1 && <Divider />}
              </div>
            ))}
            {(recent?.jobs ?? []).length === 0 && (
              <p className="text-center text-[#9CA3AF] text-sm py-6">No jobs yet</p>
            )}
          </Card>

          {/* Recent Articles */}
          <Card>
            <div className="px-4.5 py-4">
              <p className="font-bold text-[15px] text-[#111]">Recent Articles</p>
              <p className="text-xs text-[#9CA3AF] mt-0.5">Latest content</p>
            </div>
            <Divider />
            {(recent?.articles ?? []).slice(0, 4).map((a, i, arr) => (
              <div key={a.id ?? i}>
                <div className="flex items-center justify-between px-4.5 py-3">
                  <div>
                    <p className="font-semibold text-[13px] text-[#111]">{a.title}</p>
                    <p className="text-xs text-[#9CA3AF]">{a.viewCount ?? 0} views</p>
                  </div>
                  <span className={`text-[11px] font-semibold px-2 py-0.5 rounded-full ${
                    a.status === "PUBLISHED" ? "bg-[#F0FDF4] text-[#16A34A]" : "bg-[#FFF7ED] text-[#D97706]"
                  }`}>
                    {a.status}
                  </span>
                </div>
                {i < arr.length - 1 && <Divider />}
              </div>
            ))}
            {(recent?.articles ?? []).length === 0 && (
              <p className="text-center text-[#9CA3AF] text-sm py-6">No articles yet</p>
            )}
          </Card>
        </div>
      </section>
    </div>
  );
};

export default AdminDashboard;
