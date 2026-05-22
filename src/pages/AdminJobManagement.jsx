import { useState } from "react";
import {
  FiSearch,
  FiChevronDown,
  FiMapPin,
  FiDollarSign,
  FiUsers,
  FiClock,
  FiEye,
  FiEdit,
  FiTrash2,
} from "react-icons/fi";
import { useNavigate } from "react-router";

const AdminJobManagement = () => {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatus] = useState("All status");
  const navigate = useNavigate();
  const statusBadge = {
    Active: "bg-[#DCFCE7] text-[#16A34A]",
    Closed: "bg-[#FEE2E2] text-[#DC2626]",
  };

  const typeBadge = {
    Seasonal: "bg-[#EFF6FF] text-[#2563EB]",
    "Full-time": "bg-[#F0FDF4] text-[#16A34A]",
    Contract: "bg-[#EFF6FF] text-[#2563EB]",
  };

  const Pill = ({ label, cls }) => (
    <span
      className={`text-[11px] font-semibold px-2.5 py-0.5 rounded-full ${cls}`}
    >
      {label}
    </span>
  );

  const jobs = [
    {
      id: 1,
      cat: "CROP PRODUCTION",
      title: "Rice Farm Worker",
      loc: "Ogun State",
      salary: "₦40,000 - ₦85,000/month",
      applicants: 12,
      posted: "Posted 3 days ago",
      status: "Active",
      type: "Seasonal",
    },
    {
      id: 2,
      cat: "EQUIPMENT OPERATION",
      title: "Tractor Operator",
      loc: "Kano State",
      salary: "₦70,000 - ₦85,000/month",
      applicants: 8,
      posted: "Posted 5 days ago",
      status: "Active",
      type: "Full-time",
    },
    {
      id: 3,
      cat: "LIVESTOCK",
      title: "Poultry Farm Assistant",
      loc: "Ogun State",
      salary: "₦40,000 - ₦50,000/month",
      applicants: 15,
      posted: "Posted 1 week ago",
      status: "Active",
      type: "Full-time",
    },
    {
      id: 4,
      cat: "MANAGEMENT",
      title: "Farm Supervisor",
      loc: "Oyo State",
      salary: "₦90,000 - ₦120,000/month",
      applicants: 6,
      posted: "Posted 1 week ago",
      status: "Closed",
      type: "Seasonal",
    },
    {
      id: 5,
      cat: "MANAGEMENT",
      title: "Vegetable Farm Worker",
      loc: "Delta State",
      salary: "₦90,000 - ₦150,000/month",
      applicants: 24,
      posted: "Posted 2 weeks ago",
      status: "Closed",
      type: "Contract",
    },
  ];

  const visible = jobs.filter((j) => {
    const q = search.toLowerCase();
    const matchQ =
      j.title.toLowerCase().includes(q) || j.loc.toLowerCase().includes(q);
    const matchS = statusFilter === "All status" || j.status === statusFilter;
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
            {["All status", "Active", "Closed"].map((s) => (
              <option key={s}>{s}</option>
            ))}
          </select>
          <FiChevronDown size={13} className="text-[#9CA3AF]" />
        </div>
      </div>

      {/* Job list card */}
      <div className="grid gap-5 mt-8">
        {visible.map((job) => (
          <div
            key={job.id}
            className="border border-[#ECECEC] rounded-2xl font-inter "
          >
            <div className="flex flex-col items-start justify-between gap-4 px-5 py-5 md:flex-row ">
              {/* Left – meta + title */}
              <div className="flex flex-col gap-1.5 min-w-0">
                {/* Category + badges */}
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-[11px] font-semibold text-[#9CA3AF] tracking-[0.06em] uppercase">
                    {job.cat}
                  </span>
                  <Pill label={job.status} cls={statusBadge[job.status]} />
                  <Pill label={job.type} cls={typeBadge[job.type]} />
                </div>

                {/* Title */}
                <p className="font-bold text-[16px] text-[#111] leading-snug">
                  {job.title}
                </p>

                {/* Meta row */}
                <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-[12px] text-[#6B7280]">
                  <span className="flex items-center gap-1">
                    <FiMapPin size={12} className="text-[#9CA3AF]" />
                    {job.loc}
                  </span>
                  <span className="flex items-center gap-1">
                    <FiDollarSign size={12} className="text-[#9CA3AF]" />
                    {job.salary}
                  </span>
                  <span className="flex items-center gap-1">
                    <FiUsers size={12} className="text-[#9CA3AF]" />
                    {job.applicants} applicants
                  </span>
                  <span className="flex items-center gap-1">
                    <FiClock size={12} className="text-[#9CA3AF]" />
                    {job.posted}
                  </span>
                </div>
              </div>

              {/* Right – actions */}
              <div className="flex items-center gap-2 shrink-0">
                <button className="flex items-center gap-1.5 text-[13px] text-[#6B7280] hover:text-[#374151] bg-transparent border-0 cursor-pointer transition-colors">
                  <FiEye size={15} /> View
                </button>
                <button
                  className="w-8 h-8 flex items-center justify-center rounded-lg text-[#6B7280] hover:bg-[#F3F4F6] bg-transparent border-0 cursor-pointer transition-colors"
                  onClick={() => navigate(`/admin/edit-job/${job.id}`)}
                >
                  <FiEdit size={15} />
                </button>
                <button className="w-8 h-8 flex items-center justify-center rounded-lg text-[#EF4444] hover:bg-[#FEF2F2] bg-transparent border-0 cursor-pointer transition-colors">
                  <FiTrash2 size={15} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex items-center flex-col md:flex-row gap-5 justify-between text-[13px] text-[#6B7280] mt-5 mb-7 font-inter">
        <span>
          Showing {visible.length} of {jobs.length} jobs
        </span>
        <div className="flex items-center gap-1.5">
          <button className="px-3 py-1.5 rounded-lg border border-[#ECECEC] bg-white hover:bg-[#F9FAFB] cursor-pointer transition-colors text-[13px]">
            Previous
          </button>
          <button className="w-8 h-8 rounded-lg bg-[#1A6B3C] text-white font-semibold text-[13px] border-0 cursor-pointer">
            1
          </button>
          <button className="w-8 h-8 rounded-lg border border-[#ECECEC] bg-white hover:bg-[#F9FAFB] cursor-pointer text-[13px] transition-colors">
            2
          </button>
          <button className="px-3 py-1.5 rounded-lg border border-[#ECECEC] bg-white hover:bg-[#F9FAFB] cursor-pointer transition-colors text-[13px]">
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminJobManagement;
