import { FiCheckCircle, FiClock, FiSearch } from "react-icons/fi";
import { Countup, DeleteModal } from "../components";
import { useState } from "react";
import { LuChevronDown, LuUsers, LuSquarePen, LuTrash2 } from "react-icons/lu";
import { RiMapPinLine } from "react-icons/ri";
import { GiBanknote } from "react-icons/gi";
import { useNavigate } from "react-router";
import { useEquipment } from "../features/equipment/hooks/useEquipment";
import { toast } from "react-toastify";

const AdminEquipment = () => {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All status");
  const [deleteItem, setDeleteItem] = useState(null);
  const navigate = useNavigate();

  const {
    equipment,
    meta,
    filters,
    setFilters,
    setPage,
    remove,
    isLoading,
    isDeleting,
  } = useEquipment();

  const statusCfg = {
    AVAILABLE: {
      bg: "bg-[#F0FDF4]",
      text: "text-[#16A34A]",
      Icon: FiCheckCircle,
      iconCls: "text-[#22C55E]",
      label: "Available",
    },
    RENTED: {
      bg: "bg-[#EFF6FF]",
      text: "text-[#2563EB]",
      Icon: FiClock,
      iconCls: "text-[#3B82F6]",
      label: "In Use",
    },
    MAINTENANCE: {
      bg: "bg-[#FFFBEB]",
      text: "text-[#D97706]",
      Icon: FiClock,
      iconCls: "text-[#F59E0B]",
      label: "Maintenance",
    },
  };
  console.log(equipment, "Equpment data");
  const StatusBadge = ({ status }) => {
    const cfg = statusCfg[status] ?? {
      bg: "bg-[#F3F4F6]",
      text: "text-[#6B7280]",
      Icon: FiClock,
      iconCls: "text-[#9CA3AF]",
      label: status,
    };
    return (
      <span
        className={`inline-flex items-center gap-1 text-[11px] font-semibold px-2 py-0.5 rounded-full ${cfg.bg} ${cfg.text}`}
      >
        <cfg.Icon size={11} className={cfg.iconCls} />
        {cfg.label}
      </span>
    );
  };

  const handleDelete = async () => {
    try {
      await remove(deleteItem.id).unwrap();
      toast.success("Equipment deleted successfully");
      setDeleteItem(null);
    } catch {
      toast.error("Failed to delete equipment");
    }
  };

  // Client-side filter on top of server data
  const visible = equipment.filter((e) => {
    const q = search.toLowerCase();
    const matchQ =
      e.name.toLowerCase().includes(q) ||
      (e.location ?? "").toLowerCase().includes(q);
    const matchS =
      statusFilter === "All status" ||
      e.status === statusFilter.toUpperCase().replace(" ", "_");
    return matchQ && matchS;
  });

  const stats = [
    {
      label: "Total Equipment",
      value: meta?.total ?? equipment.length,
      numClass: "text-[#111]",
    },
    {
      label: "Available",
      value: equipment.filter((e) => e.status === "AVAILABLE").length,
      numClass: "text-[#22C55E]",
    },
    {
      label: "In Use",
      value: equipment.filter((e) => e.status === "RENTED").length,
      numClass: "text-[#3B82F6]",
    },
    {
      label: "Maintenance",
      value: equipment.filter((e) => e.status === "MAINTENANCE").length,
      numClass: "text-[#F59E0B]",
    },
  ];

  return (
    <div className="w-full pt-3">
      {/* Stats */}
      <div className="grid grid-cols-2 gap-5 md:grid-cols-4 font-inter">
        {stats.map((s, i) => (
          <div
            key={i}
            className="px-5 py-4 border border-[#E5E7EB] rounded-xl shadow"
          >
            <p
              className={`font-semibold text-xl md:text-2xl leading-none ${s.numClass}`}
            >
              <Countup end={s.value} />
            </p>
            <p className="text-[12px] text-[#9CA3AF] mt-1">{s.label}</p>
          </div>
        ))}
      </div>

      {/* Search + Filter + Add */}
      <div className="border border-[#E5E7EB] mt-8 rounded-2xl p-2 md:p-4">
        <div className="flex flex-col items-stretch gap-3 sm:flex-row sm:items-center">
          <div className="flex-1 flex items-center gap-2 bg-white border border-[#ECECEC] rounded-lg px-4 py-2">
            <FiSearch size={15} className="text-[#9CA3AF] shrink-0" />
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search equipment or location..."
              className="flex-1 min-w-0 text-[13px] text-[#374151] placeholder:text-[#9CA3AF] bg-transparent outline-none"
            />
          </div>
          <div className="flex items-center justify-between gap-2 bg-white border border-[#ECECEC] rounded-lg px-4 py-2 sm:w-36 shrink-0">
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="flex-1 text-[13px] text-[#374151] bg-transparent outline-none cursor-pointer appearance-none"
            >
              {["All status", "Available", "Rented", "Maintenance"].map((s) => (
                <option key={s}>{s}</option>
              ))}
            </select>
            <LuChevronDown size={13} className="text-[#9CA3AF] shrink-0" />
          </div>
        </div>
      </div>

      {/* Loading */}
      {isLoading && (
        <div className="flex items-center justify-center h-40">
          <div className="w-10 h-10 border-t-4 border-b-4 rounded-full animate-spin border-bg-btn-primary" />
        </div>
      )}

      {/* Grid */}
      {!isLoading && (
        <div className="grid grid-cols-1 gap-4 mt-8 mb-4 md:gap-6 font-inter sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((item, i) => (
            <div
              key={item.id ?? i}
              className="bg-white border border-[#ECECEC] rounded-2xl p-4 flex flex-col gap-3"
            >
              <div className="flex items-start justify-between">
                <div className="w-10 h-10 rounded-xl bg-[#EEF4FF] flex items-center justify-center">
                  <svg
                    viewBox="0 0 24 24"
                    className="w-5 h-5 text-[#3B82F6]"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.8}
                  >
                    <circle cx="7" cy="17" r="2.5" />
                    <circle cx="17" cy="17" r="1.5" />
                    <path d="M4.5 17H3V9l3-3h6l2 4h3.5l1.5 3v4h-1.5" />
                    <path d="M9 6v6H4.5" />
                  </svg>
                </div>
                <StatusBadge status={item.status} />
              </div>

              <div>
                <p className="font-bold text-[14px] text-[#111] leading-snug">
                  {item.name}
                </p>
                <div className="mt-2 flex flex-col gap-[3px]">
                  <span className="flex items-center gap-1.5 text-[12px] text-[#6B7280]">
                    <RiMapPinLine
                      size={12}
                      className="text-[#9CA3AF] shrink-0"
                    />
                    {item.location ?? "—"}
                  </span>
                  <span className="flex items-center gap-1.5 text-[12px] text-[#6B7280]">
                    <LuUsers size={12} className="text-[#9CA3AF] shrink-0" />
                    {item.category?.name ?? "—"}
                  </span>
                  <span className="flex items-center gap-1.5 text-[12px] text-[#6B7280]">
                    <GiBanknote size={12} className="text-[#9CA3AF] shrink-0" />
                    ₦{Number(item.pricePerDay).toLocaleString()}/day
                  </span>
                </div>
              </div>

              <div className="flex items-center justify-between pt-3 border-t border-[#F0F0F0] mt-auto">
                <span className="text-[12px] text-[#9CA3AF]">
                  {item.category?.name ?? "—"}
                </span>
                <div className="flex items-center gap-2">
                  <button
                    className="inline-flex items-center gap-1.5 bg-bg-deepmain hover:bg-[#155C32] text-white text-[12px] font-semibold px-3 py-1.5 rounded-lg border-0 cursor-pointer transition-colors"
                    onClick={() =>
                      navigate(`/admin/edit-equipment/${item.slug}`)
                    }
                  >
                    <LuSquarePen size={12} /> Edit
                  </button>
                  <button
                    className="inline-flex items-center gap-1.5 bg-[#FEF2F2] hover:bg-[#FEE2E2] text-[#DC2626] text-[12px] font-semibold px-3 py-1.5 rounded-lg border-0 cursor-pointer transition-colors"
                    onClick={() => setDeleteItem({ id: item.id, name: item.name })}
                    disabled={isDeleting}
                  >
                    <LuTrash2 size={12} />
                  </button>
                </div>
              </div>
            </div>
          ))}

          {visible.length === 0 && (
            <div className="col-span-full text-center py-16 text-[#9CA3AF]">
              <p className="text-sm">No equipment found</p>
              <button
                onClick={() => navigate("/admin/add-equipment")}
                className="mt-4 bg-bg-btn-primary text-white text-[13px] px-4 py-2 rounded-lg border-0 cursor-pointer"
              >
                Add your first equipment
              </button>
            </div>
          )}
        </div>
      )}

      {/* Pagination */}
      {meta && meta.pages > 1 && (
        <div className="flex justify-center gap-2 mt-6 mb-4">
          <button
            disabled={!meta.hasPrev}
            onClick={() => setPage(filters.page - 1)}
            className="px-4 py-2 text-[13px] border border-[#E5E7EB] rounded-lg disabled:opacity-40 cursor-pointer hover:bg-[#F9FAFB]"
          >
            Previous
          </button>
          <span className="px-4 py-2 text-[13px] text-[#6B7280]">
            Page {meta.page} of {meta.pages}
          </span>
          <button
            disabled={!meta.hasNext}
            onClick={() => setPage(filters.page + 1)}
            className="px-4 py-2 text-[13px] border border-[#E5E7EB] rounded-lg disabled:opacity-40 cursor-pointer hover:bg-[#F9FAFB]"
          >
            Next
          </button>
        </div>
      )}

      <DeleteModal
        isOpen={!!deleteItem}
        onClose={() => setDeleteItem(null)}
        onConfirm={handleDelete}
        title="Delete Equipment"
        message="Are you sure you want to delete this equipment?"
        itemName={deleteItem?.name}
        isDeleting={isDeleting}
      />
    </div>
  );
};

export default AdminEquipment;
