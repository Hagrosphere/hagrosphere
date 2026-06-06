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
import { useJobs } from "../features/jobs/hooks/useJobs";
import { toast } from "react-toastify";
import { DeleteModal } from "../components";

const AdminJobManagement = () => {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All status");
  const [deleteItem, setDeleteItem] = useState(null);
  const navigate = useNavigate();

  const {
    jobs,
    meta,
    filters,
    setFilters,
    setPage,
    remove,
    isLoading,
    isDeleting,
  } = useJobs(true);

  // Update backend filter when dropdown changes
  const handleStatusChange = (value) => {
    setStatusFilter(value);
    if (value === "All status") {
      setFilters({ status: null }); // Use null to explicitly remove status
    } else {
      setFilters({ status: value.toUpperCase().replace("-", "_") });
    }
  };

  const statusBadge = {
    OPEN: "bg-[#DCFCE7] text-[#16A34A]",
    CLOSED: "bg-[#FEE2E2] text-[#DC2626]",
    DRAFT: "bg-[#FEF3C7] text-[#D97706]",
    PAUSED: "bg-[#F3F4F6] text-[#6B7280]",
  };

  const typeBadge = {
    SEASONAL: "bg-[#EFF6FF] text-[#2563EB]",
    FULL_TIME: "bg-[#F0FDF4] text-[#16A34A]",
    PART_TIME: "bg-[#F5F3FF] text-[#7C3AED]",
    CONTRACT: "bg-[#EFF6FF] text-[#2563EB]",
    INTERNSHIP: "bg-[#FFF7ED] text-[#D97706]",
  };

  const Pill = ({ label, cls }) => (
    <span
      className={`text-[11px] font-semibold px-2.5 py-0.5 rounded-full ${cls}`}
    >
      {label}
    </span>
  );

  const handleDelete = async () => {
    try {
      await remove(deleteItem.id).unwrap();
      toast.success("Job deleted successfully");
      setDeleteItem(null);
    } catch {
      toast.error("Failed to delete job");
    }
  };

  // Client-side search filter on top of server data
  const visible = jobs.filter((j) => {
    const q = search.toLowerCase();
    const matchQ =
      j.title.toLowerCase().includes(q) ||
      (j.location ?? "").toLowerCase().includes(q);
    return matchQ;
  });

  const formatSalary = (job) => {
    if (!job.salaryMin) return "Salary not specified";
    return `₦${Number(job.salaryMin).toLocaleString()} - ₦${Number(job.salaryMax ?? job.salaryMin).toLocaleString()}/month`;
  };

  const formatDate = (dateStr) => {
    if (!dateStr) return "—";
    const date = new Date(dateStr);
    const diff = Math.floor(
      (Date.now() - date.getTime()) / (1000 * 60 * 60 * 24),
    );
    if (diff === 0) return "Today";
    if (diff === 1) return "Yesterday";
    if (diff < 7) return `${diff} days ago`;
    if (diff < 14) return "1 week ago";
    return `${Math.floor(diff / 7)} weeks ago`;
  };

  return (
    <div className="w-full pt-3">
      {/* Search + Filter + Add */}
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
            onChange={(e) => handleStatusChange(e.target.value)}
            className="text-[13px] text-[#374151] bg-transparent outline-none cursor-pointer appearance-none"
          >
            {["All status", "Open", "Closed", "Draft", "Paused"].map((s) => (
              <option key={s}>{s}</option>
            ))}
          </select>
          <FiChevronDown size={13} className="text-[#9CA3AF]" />
        </div>
      </div>

      {/* Loading */}
      {isLoading && (
        <div className="flex items-center justify-center h-40">
          <div className="w-10 h-10 border-t-4 border-b-4 rounded-full animate-spin border-bg-btn-primary" />
        </div>
      )}

      {/* Job list */}
      {!isLoading && (
        <div className="grid gap-5 mt-8">
          {visible.map((job) => (
            <div
              key={job.id}
              className="border border-[#ECECEC] rounded-2xl font-inter"
            >
              <div className="flex flex-col items-start justify-between gap-4 px-5 py-5 md:flex-row">
                {/* Left */}
                <div className="flex flex-col gap-1.5 min-w-0">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-[11px] font-semibold text-[#9CA3AF] tracking-[0.06em] uppercase">
                      {job.category?.name ?? "—"}
                    </span>
                    <Pill
                      label={job.status}
                      cls={
                        statusBadge[job.status] ?? "bg-[#F3F4F6] text-[#6B7280]"
                      }
                    />
                    <Pill
                      label={job.type?.replace("_", "-")}
                      cls={typeBadge[job.type] ?? "bg-[#F3F4F6] text-[#6B7280]"}
                    />
                  </div>

                  <p className="font-bold text-[16px] text-[#111] leading-snug">
                    {job.title}
                  </p>

                  <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-[12px] text-[#6B7280]">
                    <span className="flex items-center gap-1">
                      <FiMapPin size={12} className="text-[#9CA3AF]" />
                      {job.location ?? "—"}
                    </span>
                    <span className="flex items-center gap-1">
                      <FiDollarSign size={12} className="text-[#9CA3AF]" />
                      {formatSalary(job)}
                    </span>
                    <span className="flex items-center gap-1">
                      <FiClock size={12} className="text-[#9CA3AF]" />
                      {formatDate(job.publishedAt ?? job.createdAt)}
                    </span>
                  </div>
                </div>

                {/* Right – actions */}
                <div className="flex items-center gap-2 shrink-0">
                  <button
                    className="w-8 h-8 flex items-center justify-center rounded-lg text-[#6B7280] hover:bg-[#F3F4F6] bg-transparent border-0 cursor-pointer transition-colors"
                    onClick={() => navigate(`/admin/edit-job/${job.id}`)}
                  >
                    <FiEdit size={15} />
                  </button>
                  <button
                    className="w-8 h-8 flex items-center justify-center rounded-lg text-[#EF4444] hover:bg-[#FEF2F2] bg-transparent border-0 cursor-pointer transition-colors"
                    onClick={() => setDeleteItem({ id: job.id, title: job.title })}
                    disabled={isDeleting}
                  >
                    <FiTrash2 size={15} />
                  </button>
                </div>
              </div>
            </div>
          ))}

          {visible.length === 0 && (
            <div className="text-center py-16 text-[#9CA3AF] border border-[#ECECEC] rounded-2xl">
              <p className="text-sm">No jobs found</p>
              <button
                onClick={() => navigate("/admin/add-job")}
                className="mt-4 bg-bg-btn-primary text-white text-[13px] px-4 py-2 rounded-lg border-0 cursor-pointer"
              >
                Post your first job
              </button>
            </div>
          )}
        </div>
      )}

      {/* Pagination */}
      {meta && (
        <div className="flex items-center flex-col md:flex-row gap-5 justify-between text-[13px] text-[#6B7280] mt-5 mb-7 font-inter">
          <span>
            Showing {visible.length} of {meta.total} jobs
          </span>
          <div className="flex items-center gap-1.5">
            <button
              disabled={!meta.hasPrev}
              onClick={() => setPage(filters.page - 1)}
              className="px-3 py-1.5 rounded-lg border border-[#ECECEC] bg-white hover:bg-[#F9FAFB] cursor-pointer transition-colors text-[13px] disabled:opacity-40"
            >
              Previous
            </button>
            {Array.from(
              { length: Math.min(meta.pages, 5) },
              (_, i) => i + 1,
            ).map((p) => (
              <button
                key={p}
                onClick={() => setPage(p)}
                className={`w-8 h-8 rounded-lg text-[13px] border-0 cursor-pointer ${
                  p === meta.page
                    ? "bg-[#1A6B3C] text-white font-semibold"
                    : "border border-[#ECECEC] bg-white hover:bg-[#F9FAFB]"
                }`}
              >
                {p}
              </button>
            ))}
            <button
              disabled={!meta.hasNext}
              onClick={() => setPage(filters.page + 1)}
              className="px-3 py-1.5 rounded-lg border border-[#ECECEC] bg-white hover:bg-[#F9FAFB] cursor-pointer transition-colors text-[13px] disabled:opacity-40"
            >
              Next
            </button>
          </div>
        </div>
      )}

      <DeleteModal
        isOpen={!!deleteItem}
        onClose={() => setDeleteItem(null)}
        onConfirm={handleDelete}
        title="Delete Job"
        message="Are you sure you want to delete this job posting?"
        itemName={deleteItem?.title}
        isDeleting={isDeleting}
      />
    </div>
  );
};

export default AdminJobManagement;
