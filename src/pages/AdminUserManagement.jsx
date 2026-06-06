import { useState } from "react";
import {
  FiSearch,
  FiChevronDown,
  FiClock,
  FiCheckCircle,
  FiTrash2,
} from "react-icons/fi";
import { useUsers } from "../features/users/hooks/useUsers";
import { toast } from "react-toastify";
import { DeleteModal } from "../components";

const StatusCell = ({ status }) => {
  const isActive = status === "ACTIVE";
  return isActive ? (
    <span className="inline-flex items-center gap-1.5 text-[13px] font-medium text-[#16A34A]">
      <FiCheckCircle size={14} className="text-[#22C55E]" /> Active
    </span>
  ) : (
    <span className="inline-flex items-center gap-1.5 text-[13px] font-medium text-[#D97706]">
      <FiClock size={14} className="text-[#F59E0B]" /> {status}
    </span>
  );
};

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
  const [statusFilter, setStatusFilter] = useState("All status");
  const [deleteItem, setDeleteItem] = useState(null);

  const {
    users,
    meta,
    filters,
    setFilters,
    setPage,
    deleteUser,
    isLoading,
    isDeleting,
  } = useUsers();

  const handleDelete = async () => {
    try {
      await deleteUser(deleteItem.id).unwrap();
      toast.success("User deleted successfully");
      setDeleteItem(null);
    } catch {
      toast.error("Failed to delete user");
    }
  };

  const visible = users.filter((u) => {
    const q = search.toLowerCase();
    const matchQ =
      `${u.firstName} ${u.lastName}`.toLowerCase().includes(q) ||
      (u.email ?? "").toLowerCase().includes(q);
    const matchS =
      statusFilter === "All status" ||
      u.status === statusFilter.toUpperCase().replace(" ", "_");
    return matchQ && matchS;
  });

  const formatDate = (dateStr) => {
    if (!dateStr) return "—";
    return new Date(dateStr).toLocaleDateString("en-GB", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  };

  return (
    <div className="w-full pt-3">
      <div className="bg-white border border-[#ECECEC] rounded-2xl font-inter px-4 py-2.5 flex items-center gap-2">
        <FiSearch size={15} className="text-[#9CA3AF] shrink-0" />
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search by name or email..."
          className="flex-1 text-[13px] text-[#374151] placeholder:text-[#9CA3AF] bg-transparent outline-none"
        />
        <div className="flex items-center gap-1.5 border-l border-[#ECECEC] pl-3">
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="text-[13px] text-[#374151] bg-transparent outline-none cursor-pointer appearance-none"
          >
            {["All status", "Active", "Inactive", "Suspended", "Pending Verification"].map((s) => (
              <option key={s}>{s}</option>
            ))}
          </select>
          <FiChevronDown size={13} className="text-[#9CA3AF]" />
        </div>
      </div>

      {/* Loading */}
      {isLoading && (
        <div className="flex items-center justify-center h-40 mt-8">
          <div className="w-10 h-10 border-t-4 border-b-4 rounded-full animate-spin border-bg-btn-primary" />
        </div>
      )}

      {/* Table card */}
      {!isLoading && (
        <div className="bg-white border border-[#ECECEC] rounded-2xl overflow-x-auto font-inter mt-8">
          <table className="w-full border-collapse min-w-175">
            <thead>
              <tr className="border-b border-[#F0F0F0]">
                <TH className="pl-5">User</TH>
                <TH>Email</TH>
                <TH>Role</TH>
                <TH>Status</TH>
                <TH>Joined</TH>
                <TH className="pr-5">Action</TH>
              </tr>
            </thead>
            <tbody>
              {visible.map((u, i) => (
                <tr
                  key={u.id}
                  className="border-b border-[#F0F0F0] last:border-b-0 hover:bg-[#FAFAFA] transition-colors"
                >
                  <td className="pl-5 py-4.5">
                    <div>
                      <p className="font-semibold text-[13px] text-[#111]">
                        {u.firstName} {u.lastName}
                      </p>
                      {u.phone && (
                        <p className="text-[11px] text-[#9CA3AF] mt-0.5">
                          {u.phone}
                        </p>
                      )}
                    </div>
                  </td>
                  <td className="py-4.5 text-[13px] text-[#6B7280]">
                    {u.email}
                  </td>
                  <td className="py-4.5">
                    <span
                      className={`text-[11px] font-semibold px-2 py-0.5 rounded-full ${
                        u.role === "SUPER_ADMIN"
                          ? "bg-[#FEF3C7] text-[#D97706]"
                          : u.role === "ADMIN"
                          ? "bg-[#EFF6FF] text-[#2563EB]"
                          : "bg-[#F3F4F6] text-[#6B7280]"
                      }`}
                    >
                      {u.role}
                    </span>
                  </td>
                  <td className="py-4.5">
                    <StatusCell status={u.status} />
                  </td>
                  <td className="py-4.5 text-[13px] text-[#6B7280]">
                    {formatDate(u.createdAt)}
                  </td>
                  <td className="py-4.5 pr-5">
                    <button
                      onClick={() =>
                        setDeleteItem({ id: u.id, name: `${u.firstName} ${u.lastName}` })
                      }
                      disabled={isDeleting || u.role === "SUPER_ADMIN"}
                      className="text-[#EF4444] hover:text-[#DC2626] disabled:opacity-40 disabled:cursor-not-allowed bg-transparent border-0 cursor-pointer transition-colors"
                      title={u.role === "SUPER_ADMIN" ? "Cannot delete super admin" : "Delete user"}
                    >
                      <FiTrash2 size={14} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {visible.length === 0 && (
            <div className="text-center py-16 text-[#9CA3AF]">
              <p className="text-sm">No users found</p>
            </div>
          )}
        </div>
      )}

      {/* Pagination */}
      {meta && meta.pages > 1 && (
        <div className="border-t border-[#F0F0F0] flex items-center justify-between px-5 py-3 font-inter mt-8 bg-white border border-[#ECECEC] rounded-2xl">
          <span className="text-[13px] text-[#6B7280]">
            Showing {visible.length} of {meta.total} users
          </span>
          <div className="flex items-center gap-1.5">
            <button
              disabled={!meta.hasPrev}
              onClick={() => setPage(filters.page - 1)}
              className="px-3 py-1.5 rounded-lg border border-[#ECECEC] bg-white hover:bg-[#F9FAFB] cursor-pointer text-[13px] transition-colors disabled:opacity-40"
            >
              Previous
            </button>
            <button className="w-8 h-8 rounded-lg bg-[#1A6B3C] text-white font-semibold text-[13px] border-0 cursor-pointer">
              {meta.page}
            </button>
            <button
              disabled={!meta.hasNext}
              onClick={() => setPage(filters.page + 1)}
              className="px-3 py-1.5 rounded-lg border border-[#ECECEC] bg-white hover:bg-[#F9FAFB] cursor-pointer text-[13px] transition-colors disabled:opacity-40"
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
        title="Delete User"
        message="Are you sure you want to delete this user? This action cannot be undone."
        itemName={deleteItem?.name}
        isDeleting={isDeleting}
      />
    </div>
  );
};

export default AdminUserManagement;