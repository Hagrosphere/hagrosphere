import { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { Countup } from "../components";
import { useDashboard } from "../features/dashboard/hooks/useDashboard";

const Divider = () => <div className="border-b border-[#F0F0F0]" />;

const actionIcons = {
  CREATE: "✅",
  UPDATE: "✏️",
  DELETE: "🗑️",
  LOGIN: "👤",
  LOGOUT: "🚪",
  PUBLISH: "📢",
  ARCHIVE: "📦",
  SUSPEND: "🚫",
  ACTIVATE: "✅",
  UPLOAD: "📎",
  PASSWORD_RESET: "🔑",
};

const AdminActivity = () => {
  const [filter, setFilter] = useState("All");
  const {
    activity,
    activityMeta,
    activityPage,
    setActivityPage,
    isActivityLoading,
    stats,
  } = useDashboard();

  const formatTime = (dateStr) => {
    if (!dateStr) return "—";
    const diff = Math.floor((Date.now() - new Date(dateStr).getTime()) / 1000);
    if (diff < 60) return "Just now";
    if (diff < 3600) return `${Math.floor(diff / 60)} minutes ago`;
    if (diff < 86400) return `${Math.floor(diff / 3600)} hours ago`;
    if (diff < 172800) return "Yesterday";
    return `${Math.floor(diff / 86400)} days ago`;
  };

  const statBar = [
    { label: "Pending Messages", value: stats?.messages?.unread ?? 0 },
    { label: "New Users Today", value: stats?.users?.thisMonth ?? 0 },
    { label: "Open Jobs", value: stats?.jobs?.open ?? 0 },
    { label: "Total Activity", value: activityMeta?.total ?? 0 },
  ];

  const visible = filter === "All" ? activity : activity.filter((a) => a.action === "CREATE");

  return (
    <div className="w-full pt-3">
      <div className="grid grid-cols-2 gap-5 md:grid-cols-4 font-inter">
        {statBar.map((s, i) => (
          <div key={i} className="px-5.5 py-4.5 border border-[#E5E7EB] rounded-xl shadow">
            <p className="font-bold text-xl md:text-2xl text-[#111] leading-none">
              <Countup end={s.value} />
            </p>
            <p className="text-xs md:text-sm text-[#7A7A72] mt-1.5">{s.label}</p>
          </div>
        ))}
      </div>

      <section className="my-8">
        <div className="bg-white w-full border border-[#ECECEC] rounded-2xl font-inter">
          {/* Header */}
          <div className="flex items-center justify-between px-4.5 py-3.5">
            <p className="font-bold text-[15px] text-[#111]">Recent Activity</p>
            <div className="flex gap-1.5">
              {["All", "Creates"].map((f) => (
                <button
                  key={f}
                  onClick={() => setFilter(f)}
                  className={`text-xs px-3.5 py-1 rounded-[7px] border border-[#E5E7EB] cursor-pointer transition-colors ${
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

          {/* Loading */}
          {isActivityLoading && (
            <div className="flex justify-center items-center h-32">
              <div className="border-t-4 border-b-4 rounded-full animate-spin h-8 w-8 border-bg-btn-primary" />
            </div>
          )}

          {/* Items */}
          {!isActivityLoading && visible.map((item, i) => (
            <div key={item.id}>
              <div className="flex items-start gap-1 flex-col md:flex-row px-4 py-3.5">
                <div className="flex items-start gap-3 md:flex-1">
                  <div className="pt-1 shrink-0">
                    <div className={`w-2 h-2 rounded-full mt-1 ${
                      item.action === "CREATE" ? "bg-[#00C950]" : "bg-[#FE9A00]"
                    }`} />
                  </div>

                  <div className="w-9.5 h-9.5 rounded-[10px] bg-[#F3F4F6] flex items-center justify-center text-[17px] shrink-0">
                    {actionIcons[item.action] ?? "📋"}
                  </div>

                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-[13px] text-[#111]">
                      {item.action} {item.resourceType}
                    </p>
                    <p className="text-xs text-[#6B7280] mt-0.5">{item.description}</p>
                    {item.user && (
                      <p className="text-[11px] text-[#9CA3AF] mt-0.5">
                        by {item.user.firstName} {item.user.lastName}
                      </p>
                    )}
                    <p className="text-[11px] text-[#9CA3AF] mt-1">
                      {formatTime(item.createdAt)}
                    </p>
                  </div>
                </div>
              </div>
              {i < visible.length - 1 && <Divider />}
            </div>
          ))}

          {!isActivityLoading && visible.length === 0 && (
            <p className="text-center text-[#9CA3AF] text-sm py-10">No activity yet</p>
          )}

          <Divider />

          {/* Pagination */}
          <div className="py-3.5 flex items-center justify-between px-4.5">
            <span className="text-[12px] text-[#9CA3AF]">
              {activityMeta ? `${activityMeta.total} total activities` : ""}
            </span>
            <div className="flex items-center gap-2">
              {activityPage > 1 && (
                <button
                  onClick={() => setActivityPage(activityPage - 1)}
                  className="text-[#6B7280] text-[13px] font-medium bg-transparent border-0 cursor-pointer hover:text-[#374151]"
                >
                  Previous
                </button>
              )}
              {activityMeta && activityPage < activityMeta.pages && (
                <button
                  onClick={() => setActivityPage(activityPage + 1)}
                  className="text-[#6B7280] text-[13px] font-medium bg-transparent border-0 cursor-pointer hover:text-[#374151] flex items-center gap-1"
                >
                  Load more <FaArrowRight className="w-2.5 h-2.5" />
                </button>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AdminActivity;
