import { useState } from "react";
import {
  FiSearch, FiChevronDown, FiClock, FiCheckCircle, FiTrash2, FiUserPlus, FiX,
} from "react-icons/fi";
import { useUsers } from "../features/users/hooks/useUsers";
import { toast } from "react-toastify";
import { DeleteModal } from "../components";

const ROLES = ["USER", "ADMIN", "SUPER_ADMIN"];

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
  <th className={`text-[11px] font-semibold text-[#9CA3AF] tracking-[0.07em] uppercase py-3 text-left ${className}`}>
    {children}
  </th>
);

const EMPTY_FORM = { firstName: "", lastName: "", email: "", password: "", role: "ADMIN" };

const CreateAdminModal = ({ isOpen, onClose, onCreate, isCreating }) => {
  const [form, setForm] = useState(EMPTY_FORM);
  const [errors, setErrors] = useState({});

  if (!isOpen) return null;

  const validate = () => {
    const e = {};
    if (!form.firstName.trim()) e.firstName = "Required";
    if (!form.lastName.trim()) e.lastName = "Required";
    if (!form.email.trim()) e.email = "Required";
    else if (!/\S+@\S+\.\S+/.test(form.email)) e.email = "Invalid email";
    if (!form.password) e.password = "Required";
    else if (form.password.length < 8) e.password = "Min 8 characters";
    return e;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const e2 = validate();
    if (Object.keys(e2).length) { setErrors(e2); return; }
    await onCreate(form);
    setForm(EMPTY_FORM);
    setErrors({});
  };

  const field = (key, label, type = "text") => (
    <div>
      <label className="block text-[12px] font-medium text-[#374151] mb-1">{label}</label>
      <input
        type={type}
        value={form[key]}
        onChange={(e) => { setForm(f => ({ ...f, [key]: e.target.value })); setErrors(er => ({ ...er, [key]: undefined })); }}
        className={`w-full px-3 py-2 text-[13px] border rounded-lg outline-none focus:ring-2 focus:ring-[#1A6B3C]/30 ${errors[key] ? "border-red-400" : "border-[#ECECEC]"}`}
      />
      {errors[key] && <p className="text-[11px] text-red-500 mt-0.5">{errors[key]}</p>}
    </div>
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center font-inter">
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />
      <div className="relative bg-white rounded-2xl shadow-2xl w-[90%] max-w-md mx-auto overflow-hidden">
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
          <h3 className="text-[15px] font-semibold text-gray-900">Create Admin Account</h3>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600 transition-colors bg-transparent border-0 cursor-pointer">
            <FiX size={20} />
          </button>
        </div>
        <form onSubmit={handleSubmit} className="px-6 py-5 flex flex-col gap-3.5">
          <div className="grid grid-cols-2 gap-3">
            {field("firstName", "First Name")}
            {field("lastName", "Last Name")}
          </div>
          {field("email", "Email", "email")}
          {field("password", "Password", "password")}
          <div>
            <label className="block text-[12px] font-medium text-[#374151] mb-1">Role</label>
            <select
              value={form.role}
              onChange={(e) => setForm(f => ({ ...f, role: e.target.value }))}
              className="w-full px-3 py-2 text-[13px] border border-[#ECECEC] rounded-lg outline-none focus:ring-2 focus:ring-[#1A6B3C]/30"
            >
              <option value="ADMIN">ADMIN</option>
              <option value="SUPER_ADMIN">SUPER_ADMIN</option>
            </select>
          </div>
          <div className="flex gap-3 pt-1">
            <button type="button" onClick={onClose} disabled={isCreating}
              className="flex-1 px-4 py-2.5 text-[13px] font-semibold text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors disabled:opacity-50 cursor-pointer">
              Cancel
            </button>
            <button type="submit" disabled={isCreating}
              className="flex-1 px-4 py-2.5 text-[13px] font-semibold text-white bg-[#1A6B3C] rounded-lg hover:bg-[#155c33] transition-colors disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer">
              {isCreating ? "Creating..." : "Create Account"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

const AdminUserManagement = () => {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All status");
  const [deleteItem, setDeleteItem] = useState(null);
  const [showCreate, setShowCreate] = useState(false);

  const {
    users, meta, filters, setFilters, setPage,
    deleteUser, updateRole, createAdmin,
    isLoading, isDeleting, isCreating,
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

  const handleRoleChange = async (id, role) => {
    try {
      await updateRole(id, role).unwrap();
      toast.success("Role updated");
    } catch {
      toast.error("Failed to update role");
    }
  };

  const handleCreate = async (form) => {
    try {
      await createAdmin(form);
      toast.success("Admin account created successfully");
      setShowCreate(false);
    } catch (err) {
      toast.error(err?.data?.message ?? err?.message ?? "Failed to create account");
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
    return new Date(dateStr).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" });
  };

  return (
    <div className="w-full pt-3">
      {/* Search + filter + create */}
      <div className="flex items-center gap-3">
        <div className="flex-1 bg-white border border-[#ECECEC] rounded-2xl font-inter px-4 py-2.5 flex items-center gap-2">
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
        <button
          onClick={() => setShowCreate(true)}
          className="flex items-center gap-2 px-4 py-2.5 bg-[#1A6B3C] text-white text-[13px] font-semibold rounded-2xl hover:bg-[#155c33] transition-colors border-0 cursor-pointer shrink-0"
        >
          <FiUserPlus size={15} /> Create Admin
        </button>
      </div>

      {isLoading && (
        <div className="flex items-center justify-center h-40 mt-8">
          <div className="w-10 h-10 border-t-4 border-b-4 rounded-full animate-spin border-bg-btn-primary" />
        </div>
      )}

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
              {visible.map((u) => (
                <tr key={u.id} className="border-b border-[#F0F0F0] last:border-b-0 hover:bg-[#FAFAFA] transition-colors">
                  <td className="pl-5 py-4.5">
                    <div>
                      <p className="font-semibold text-[13px] text-[#111]">{u.firstName} {u.lastName}</p>
                      {u.phone && <p className="text-[11px] text-[#9CA3AF] mt-0.5">{u.phone}</p>}
                    </div>
                  </td>
                  <td className="py-4.5 text-[13px] text-[#6B7280]">{u.email}</td>
                  <td className="py-4.5">
                    {u.role === "SUPER_ADMIN" ? (
                      <span className="text-[11px] font-semibold px-2 py-0.5 rounded-full bg-[#FEF3C7] text-[#D97706]">
                        SUPER_ADMIN
                      </span>
                    ) : (
                      <select
                        value={u.role}
                        onChange={(e) => handleRoleChange(u.id, e.target.value)}
                        className="text-[11px] font-semibold px-2 py-0.5 rounded-full border border-[#ECECEC] bg-[#EFF6FF] text-[#2563EB] outline-none cursor-pointer"
                      >
                        {ROLES.filter(r => r !== "SUPER_ADMIN").map(r => (
                          <option key={r} value={r}>{r}</option>
                        ))}
                      </select>
                    )}
                  </td>
                  <td className="py-4.5"><StatusCell status={u.status} /></td>
                  <td className="py-4.5 text-[13px] text-[#6B7280]">{formatDate(u.createdAt)}</td>
                  <td className="py-4.5 pr-5">
                    <button
                      onClick={() => setDeleteItem({ id: u.id, name: `${u.firstName} ${u.lastName}` })}
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

      <CreateAdminModal
        isOpen={showCreate}
        onClose={() => setShowCreate(false)}
        onCreate={handleCreate}
        isCreating={isCreating}
      />

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
