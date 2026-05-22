import {
  HiOutlineBriefcase,
  HiOutlineUsers,
  HiOutlineExclamationCircle,
} from "react-icons/hi";

import { PiWarehouse } from "react-icons/pi";
import { Countup } from "../components";

const Badge = ({ label, colorClass, bgClass }) => (
  <span
    className={`text-[11px] font-semibold px-2 py-1 rounded-full ${bgClass} ${colorClass}`}
  >
    {label}
  </span>
);

const Divider = () => <div className="border-b border-[#F0F0F0]" />;

const Card = ({ children, className = "" }) => (
  <div
    className={`bg-white border border-[#ECECEC] rounded-2xl overflow-hidden ${className}`}
  >
    {children}
  </div>
);

const AdminDashboard = () => {
  const tagMap = {
    Equipment: { bgClass: "bg-[#E8F0FE]", colorClass: "text-[#3B5BDB]" },
    User: { bgClass: "bg-[#FFF3E0]", colorClass: "text-[#E65100]" },
    Job: { bgClass: "bg-[#E8F5E9]", colorClass: "text-[#2E7D32]" },
  };

  const approvals = [
    {
      type: "Equipment",
      date: "May 1",
      title: "New Holland Tractor T6050",
      by: "Adebayo Farms",
    },
    {
      type: "User",
      date: "May 1",
      title: "Farmer Verification Request",
      by: "Ngozi Eze",
    },
    {
      type: "Job",
      date: "Apr 30",
      title: "Farm Supervisor Position",
      by: "Plateau Agro Ltd",
    },
  ];

  const recentActivity = [
    { title: "Equipment added", sub: "Massey Ferguson 365", time: "2h ago" },
    { title: "Job application", sub: "Rice Farm Worker", time: "4h ago" },
    { title: "User registered", sub: "Chidi Okafor", time: "5h ago" },
    { title: "Booking approved", sub: "John Deere Harvester", time: "6h ago" },
  ];

  const topEquipment = [
    {
      name: "Massey Ferguson 375 Tractor",
      location: "Ogun State",
      bookings: 24,
      price: "₦360,000",
    },
    {
      name: "John Deere Combine Harvester",
      location: "Kaduna State",
      bookings: 18,
      price: "₦450,000",
    },
    {
      name: "Rice Milling Machine",
      location: "Ebonyi State",
      bookings: 16,
      price: "₦180,000",
    },
    {
      name: "Drip Irrigation System",
      location: "Lagos State",
      bookings: 16,
      price: "₦60,000",
    },
  ];

  const stateActivity = [
    { state: "Lagos State", eq: 47, jobs: 32, users: 89, pct: "+12%" },
    { state: "Ogun State", eq: 38, jobs: 28, users: 71, pct: "+8%" },
    { state: "Kaduna State", eq: 34, jobs: 24, users: 65, pct: "+15%" },
    { state: "Kano State", eq: 29, jobs: 21, users: 54, pct: "+6%" },
    { state: "Plateau State", eq: 25, jobs: 18, users: 48, pct: "+10%" },
    { state: "Kogi State", eq: 25, jobs: 18, users: 48, pct: "+10%" },
  ];

  const stats = [
    {
      id: 1,
      title: "Total Equipment",
      value: "47",
      change: "+3",
      period: "this month",
      percentage: "+6%",
      icon: <PiWarehouse className="text-[#3B82F6] text-[22px]" />,
      iconBg: "bg-[#EEF4FF]",
      percentageBg: "bg-[#EAFBF1]",
      percentageText: "text-[#22C55E]",
    },
    {
      id: 2,
      title: "Active Jobs",
      value: "23",
      change: "+5",
      period: "this week",
      percentage: "+22%",
      icon: <HiOutlineBriefcase className="text-[#A855F7] text-[22px]" />,
      iconBg: "bg-[#F5EDFF]",
      percentageBg: "bg-[#EAFBF1]",
      percentageText: "text-[#22C55E]",
    },
    {
      id: 3,
      title: "Verified Users",
      value: "312",
      change: "+18",
      period: "this month",
      percentage: "+6%",
      icon: <HiOutlineUsers className="text-[#22C55E] text-[22px]" />,
      iconBg: "bg-[#ECFDF3]",
      percentageBg: "bg-[#EAFBF1]",
      percentageText: "text-[#22C55E]",
    },
    {
      id: 4,
      title: "Pending Approvals",
      value: "8",
      change: "Requires review",
      period: "",
      percentage: "Action needed",
      icon: (
        <HiOutlineExclamationCircle className="text-[#F59E0B] text-[22px]" />
      ),
      iconBg: "bg-[#FFF7ED]",
      percentageBg: "bg-[#FFF4E5]",
      percentageText: "text-[#F59E0B]",
    },
  ];
  return (
    <div className="w-full pt-3">
      <div className="grid grid-cols-1 gap-3 md:gap-5 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map((item) => (
          <div
            key={item.id}
            className="rounded-2xl border border-[#ECECEC] font-inter bg-white p-3 shadow-[0px_1px_2px_rgba(16,24,40,0.04)]"
          >
            {/* Top */}
            <div className="flex items-start justify-between mb-4 md:mb-6">
              <div
                className={`flex h-7 w-7 md:h-9 md:w-9 items-center justify-center rounded-xl ${item.iconBg}`}
              >
                <span className="">{item.icon}</span>
              </div>

              <div
                className={`rounded-full px-3 py-1 text-xs md:font-medium ${item.percentageBg} ${item.percentageText}`}
              >
                {item.percentage}
              </div>
            </div>

            {/* Content */}
            <div>
              <h2 className="mb-2 text-xl md:text-2xl font-bold leading-none text-[#111827]">
                <Countup end={item.value} duration={1400} />
              </h2>

              <p className="mb-4 text-xs md:text-sm font-medium text-[#6B7280]">
                {item.title}
              </p>

              <div className="flex items-center gap-1 text-xs md:text-sm">
                {item.id !== 4 && (
                  <span className="font-semibold text-[#22C55E]">
                    {item.change}
                  </span>
                )}

                <span
                  className={`${
                    item.id === 4
                      ? "font-medium text-[#6B7280]"
                      : "text-[#9CA3AF]"
                  }`}
                >
                  {item.id !== 4 ? item.period : item.change}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <section className="w-full my-10">
        <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-6 font-inter">
          {/* Pending Approvals */}
          <Card>
            <div className="flex items-center justify-between px-4.5 py-4">
              <div>
                <p className="font-bold text-[15px] text-[#111]">
                  Pending Approvals
                </p>
                <p className="text-xs text-[#9CA3AF] mt-0.5">
                  Items awaiting your review
                </p>
              </div>
              <Badge
                label="8 pending"
                colorClass="text-[#B45309]"
                bgClass="bg-[#FFF4E5]"
              />
            </div>
            <Divider />

            {approvals.map((a, i) => (
              <div key={i}>
                <div className="flex items-start gap-3 px-4.5 py-3.5">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1.5">
                      <Badge label={a.type} {...tagMap[a.type]} />
                      <span className="text-[11px] text-[#9CA3AF]">
                        {a.date}
                      </span>
                    </div>
                    <p className="font-semibold text-sm py-1.5 text-[#111]">
                      {a.title}
                    </p>
                    <p className="text-xs text-[#9CA3AF]">by {a.by}</p>
                  </div>
                  <div className="flex gap-2 md:gap-3 shrink-0">
                    <button className="bg-[#1A6B3C] text-white text-xs md:text-sm  px-4 py-1 rounded-lg border-0 cursor-pointer hover:bg-[#155C32] transition-colors">
                      Approve
                    </button>
                    <button className="bg-[#F3F4F6] text-[#374151] text-[13px]  px-3.5 py-1 rounded-lg border border-[#E5E7EB] cursor-pointer hover:bg-[#E5E7EB] transition-colors">
                      Reject
                    </button>
                  </div>
                </div>
                {i < approvals.length - 1 && <Divider />}
              </div>
            ))}
          </Card>

          {/* Recent Activity */}
          <Card>
            <div className="flex items-center justify-between px-[18px] py-4">
              <div>
                <p className="font-bold text-[15px] text-[#111]">
                  Recent Activity
                </p>
                <p className="text-xs text-[#9CA3AF] mt-0.5">
                  Latest platform events
                </p>
              </div>
              <button className="text-[#1A6B3C] text-[13px] font-semibold bg-transparent border-0 cursor-pointer">
                View all
              </button>
            </div>
            <Divider />

            <div className="py-1.5">
              {recentActivity.map((a, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 px-[18px] py-[11px]"
                >
                  <div className="w-2 h-2 rounded-full bg-[#22C55E] mt-[5px] shrink-0" />
                  <div>
                    <p className="font-semibold text-[13px] text-[#111]">
                      {a.title}
                    </p>
                    <p className="text-xs text-[#6B7280]">{a.sub}</p>
                    <p className="text-[11px] text-[#9CA3AF] mt-0.5">
                      {a.time}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </section>
      <section className="w-full mb-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7 font-inter">
          {/* Top Equipment */}
          <Card>
            <div className="px-4.5 py-4">
              <p className="font-bold text-[15px] text-[#111]">Top Equipment</p>
              <p className="text-xs text-[#9CA3AF] mt-0.5">
                Most booked this month
              </p>
            </div>
            <Divider />

            {topEquipment.map((e, i) => (
              <div key={i}>
                <div className="flex items-center justify-between px-4.5 py-3">
                  <div>
                    <p className="font-semibold text-[13px] text-[#111]">
                      {e.name}
                    </p>
                    <p className="text-xs text-[#9CA3AF]">{e.location}</p>
                    <p className="text-xs text-[#9CA3AF]">
                      {e.bookings} bookings
                    </p>
                  </div>
                  <p className="font-bold text-sm text-[#111]">{e.price}</p>
                </div>
                {i < topEquipment.length - 1 && <Divider />}
              </div>
            ))}

            <Divider />
            <div className="px-4.5  py-3">
              <button className="text-[#1A6B3C] text-[13px] font-semibold bg-transparent border-0 cursor-pointer">
                View all approvals ↗
              </button>
            </div>
          </Card>

          {/* Activity by State */}
          <Card>
            <div className="px-4.5 py-4">
              <p className="font-bold text-[15px] text-[#111]">
                Activity by State
              </p>
              <p className="text-xs text-[#9CA3AF] mt-0.5">
                Top regions this month
              </p>
            </div>
            <Divider />

            {stateActivity.map((s, i) => (
              <div key={i}>
                <div className="flex items-center justify-between px-4.5 py-3">
                  <div className="flex-1">
                    <p className="font-semibold text-[13px] text-[#111] mb-1">
                      {s.state}
                    </p>
                    <p className="text-xs text-[#9CA3AF]">
                      {s.eq} equipment &nbsp;·&nbsp; {s.jobs} jobs &nbsp;·&nbsp;{" "}
                      {s.users} users
                    </p>
                  </div>
                  <Badge
                    label={s.pct}
                    colorClass="text-[#15803D]"
                    bgClass="bg-[#DCFCE7]"
                  />
                </div>
                {i < stateActivity.length - 1 && <Divider />}
              </div>
            ))}
          </Card>
        </div>
      </section>
    </div>
  );
};

export default AdminDashboard;
