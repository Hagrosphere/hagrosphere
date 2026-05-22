import { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { Countup } from "../components";

const Divider = () => <div className="border-b border-[#F0F0F0]" />;

const AdminActivity = () => {
  const [filter, setFilter] = useState("All");
  const feedItems = [
    {
      actionRequired: true,
      icon: "🚜",
      title: "New equipment added",
      sub: "Massey Ferguson 365 Tractor added by Adebayo Farms",
      time: "3 hours ago",
    },
    {
      actionRequired: true,
      icon: "💼",
      title: "Job application received",
      sub: "New application for Rice Farm Worker position in Ebonyi State",
      time: "4 hours ago",
    },
    {
      actionRequired: true,
      icon: "👤",
      title: "New user registration",
      sub: "Chidi Okafor registered as a farmer – verification pending",
      time: "5 hours ago",
    },
    {
      actionRequired: false,
      icon: "🚜",
      title: "Equipment booking request",
      sub: "John Deere Harvester requested by Kaduna Cooperative",
      time: "6 hours ago",
    },
    {
      actionRequired: false,
      icon: "💼",
      title: "Job posting created",
      sub: "Tractor Operator position posted in Kano State",
      time: "1 day ago",
    },
    {
      actionRequired: false,
      icon: "💼",
      title: "Job application approved",
      sub: "Applicant for Poultry Farm Assistant position approved",
      time: "1 day ago",
    },
  ];

  const visible =
    filter === "All" ? feedItems : feedItems.filter((f) => f.actionRequired);
  const statBar = [
    { label: "Pending Actions", value: 3 },
    { label: "New Today", value: 5 },
    { label: "This Week", value: 28 },
    { label: "Total Activity", value: 156 },
  ];

  return (
    <div className="w-full pt-3">
      <div className="grid grid-cols-2 gap-5 md:grid-cols-4 font-inter ">
        {statBar.map((s, i) => (
          <div
            key={i}
            className={`px-5.5 py-4.5 border border-[#E5E7EB] rounded-xl shadow`}
          >
            <p className="font-bold text-xl md:text-2xl  text-[#111] leading-none">
              <Countup end={s.value} />
            </p>
            <p className="text-xs md:text-sm text-[#7A7A72] mt-1.5">
              {s.label}
            </p>
          </div>
        ))}
      </div>
      <section className="my-8">
        <div className="bg-white w-full border border-[#ECECEC] rounded-2xl font-inter">
          {/* Header */}
          <div className="flex items-center justify-between px-4.5 py-3.5">
            <p className="font-bold text-[15px] text-[#111]">Recent Activity</p>
            <div className="flex gap-1.5">
              {["All", "Actions Required"].map((f) => (
                <button
                  key={f}
                  onClick={() => setFilter(f)}
                  className={`text-xs px-3.5 py-1 rounded-[7px] border border-[#E5E7EB] cursor-pointer transition-colors
                    ${
                      filter === f
                        ? "bg-[#F3F4F6] text-[#111] font-semibold"
                        : "bg-transparent text-[#6B7280] font-normal hover:bg-[#F9FAFB]"
                    }`}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>
          <Divider />

          {/* Items */}
          {visible.map((item, i) => (
            <div key={i}>
              <div className="flex items-start  gap-1 flex-col md:flex-row px-4 py-3.5">
                {/* Status dot */}
                <div className="flex items-start gap-3 md:flex-1">
                  <div className="pt-1 shrink-0">
                    <div
                      className={`w-2 h-2 rounded-full mt-1 ${
                        item.actionRequired ? "bg-[#FE9A00]" : "bg-[#00C950]"
                      }`}
                    />
                  </div>

                  {/* Icon */}
                  <div className="w-9.5 h-9.5 rounded-[10px] bg-[#F3F4F6] flex items-center justify-center text-[17px] shrink-0">
                    {item.icon}
                  </div>

                  {/* Text */}
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-[13px] text-[#111]">
                      {item.title}
                    </p>
                    <p className="text-xs text-[#6B7280] mt-0.5">{item.sub}</p>
                    <p className="text-[11px] text-[#9CA3AF] mt-1">
                      {item.time}
                    </p>
                  </div>
                </div>

                {/* Action Required badge + Review */}
                {item.actionRequired && (
                  <div className="flex flex-row items-center justify-between w-full gap-2 mt-2 md:flex-col md:mt-0 md:w-fit md:items-end shrink-0">
                    <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-[#FFFBEB] text-[#E17100]">
                      Action Required
                    </span>
                    <button className="flex items-center gap-1 p-0 text-xs font-semibold bg-transparent border-0 cursor-pointer md:text-sm">
                      Review
                      <FaArrowRight className="inline-block w-2.5 h-2.5 " />
                    </button>
                  </div>
                )}
              </div>
              {i < visible.length - 1 && <Divider />}
            </div>
          ))}

          <Divider />
          <div className="py-3.5 text-center">
            <button className="text-[#6B7280] text-[13px] font-medium bg-transparent border-0 cursor-pointer hover:text-[#374151] transition-colors">
              Load more activity
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AdminActivity;
