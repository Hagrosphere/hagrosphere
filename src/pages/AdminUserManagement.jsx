import { useState } from "react";
import {
  FiSearch,
  FiChevronDown,
  FiClock,
  FiCheckCircle,
} from "react-icons/fi";

const StatusCell = ({ status }) =>
  status === "Verified" ? (
    <span className="inline-flex items-center gap-1.5 text-[13px] font-medium text-[#16A34A]">
      <FiCheckCircle size={14} className="text-[#22C55E]" /> Verified
    </span>
  ) : (
    <span className="inline-flex items-center gap-1.5 text-[13px] font-medium text-[#D97706]">
      <FiClock size={14} className="text-[#F59E0B]" /> Pending
    </span>
  );

const TH = ({ children, className = "" }) => (
  <th
    className={`text-[11px] font-semibold text-[#9CA3AF] tracking-[0.07em] uppercase py-3 text-left ${className}`}
  >
    {children}
  </th>
);

const Divider = () => <div className="border-b border-[#F0F0F0]" />;

const AdminUserManagement = () => {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatus] = useState("All status");
  const users = [
    {
      name: "Adebayo Farms",
      type: "Farmer",
      loc: "Ogun State",
      status: "Verified",
      joined: "Apr 16, 2026",
      listings: 3,
    },
    {
      name: "Chidi Okafor",
      type: "Farmer",
      loc: "Abia State",
      status: "Pending",
      joined: "Mar 31, 2026",
      listings: 1,
    },
    {
      name: "Ngozi Eze",
      type: "Farmer",
      loc: "Enugu State",
      status: "Pending",
      joined: "Mar 28, 2026",
      listings: 1,
    },
    {
      name: "Fatima Ibrahim",
      type: "Worker",
      loc: "Kaduna State",
      status: "Verified",
      joined: "Apr 20, 2026",
      listings: 0,
    },
    {
      name: "Tunde Adebayo",
      type: "Buyer",
      loc: "Lagos State",
      status: "Verified",
      joined: "Mar 19, 2026",
      listings: 0,
    },
    {
      name: "Plateau Agro Ltd",
      type: "Employer",
      loc: "Plateau State",
      status: "Verified",
      joined: "Feb 10, 2026",
      listings: 2,
    },
  ];

  const visible = users.filter((u) => {
    const q = search.toLowerCase();
    const matchQ =
      u.name.toLowerCase().includes(q) || u.loc.toLowerCase().includes(q);
    const matchS = statusFilter === "All status" || u.status === statusFilter;
    return matchQ && matchS;
  });

  return (
    <div className="w-full pt-3">
      <div className="bg-white border border-[#ECECEC] rounded-2xl font-inter px-4 py-2.5 flex items-center gap-2">
        <FiSearch size={15} className="text-[#9CA3AF] shrink-0" />
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search by job title or location..."
          className="flex-1 text-[13px] text-[#374151] placeholder:text-[#9CA3AF] bg-transparent outline-none"
        />
        <div className="flex items-center gap-1.5 border-l border-[#ECECEC] pl-3">
          <select
            value={statusFilter}
            onChange={(e) => setStatus(e.target.value)}
            className="text-[13px] text-[#374151] bg-transparent outline-none cursor-pointer appearance-none"
          >
            {["All status", "Verified", "Pending"].map((s) => (
              <option key={s}>{s}</option>
            ))}
          </select>
          <FiChevronDown size={13} className="text-[#9CA3AF]" />
        </div>
      </div>

      {/* Table card */}
      <div className="bg-white border border-[#ECECEC] rounded-2xl overflow-x-auto font-inter mt-8">
        <table className="w-full border-collapse min-w-175">
          <thead>
            <tr className="border-b border-[#F0F0F0]">
              <TH className="pl-5">User</TH>
              <TH>Type</TH>
              <TH>Location</TH>
              <TH>Status</TH>
              <TH>Joined</TH>
              <TH>Listings</TH>
              <TH className="pr-5">Action</TH>
            </tr>
          </thead>
          <tbody>
            {visible.map((u, i) => (
              <tr
                key={i}
                className="border-b border-[#F0F0F0] last:border-b-0 hover:bg-[#FAFAFA] transition-colors"
              >
                <td className="pl-5 py-4.5 font-semibold text-[13px] text-[#111]">
                  {u.name}
                </td>
                <td className="py-4.5 text-[13px] text-[#6B7280]">{u.type}</td>
                <td className="py-4.5 text-[13px] text-[#6B7280]">{u.loc}</td>
                <td className="py-4.5">
                  <StatusCell status={u.status} />
                </td>
                <td className="py-4.5 text-[13px] text-[#6B7280]">
                  {u.joined}
                </td>
                <td className="py-4.5 text-[13px] text-[#6B7280]">
                  {u.listings}
                </td>
                <td className="py-4.5 pr-5">
                  <button className="text-[13px] font-medium text-[#374151] hover:text-[#111] bg-transparent border-0 cursor-pointer transition-colors">
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* Pagination inside card */}
      <div className="border-t border-[#F0F0F0] flex items-center justify-between px-5 py-3 font-inter">
        <span className="text-[13px] text-[#6B7280]">
          Showing {visible.length} of {users.length} jobs
        </span>
        <div className="flex items-center gap-1.5">
          <button className="px-3 py-1.5 rounded-lg border border-[#ECECEC] bg-white hover:bg-[#F9FAFB] cursor-pointer text-[13px] transition-colors">
            Previous
          </button>
          <button className="w-8 h-8 rounded-lg bg-[#1A6B3C] text-white font-semibold text-[13px] border-0 cursor-pointer">
            1
          </button>
          <button className="w-8 h-8 rounded-lg border border-[#ECECEC] bg-white hover:bg-[#F9FAFB] cursor-pointer text-[13px] transition-colors">
            2
          </button>
          <button className="px-3 py-1.5 rounded-lg border border-[#ECECEC] bg-white hover:bg-[#F9FAFB] cursor-pointer text-[13px] transition-colors">
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminUserManagement;
