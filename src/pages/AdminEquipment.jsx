import { FiCheckCircle, FiClock, FiSearch } from "react-icons/fi";
import { Countup } from "../components";
import { useState } from "react";
import { LuChevronDown, LuUsers, LuSquarePen } from "react-icons/lu";
import { RiMapPinLine } from "react-icons/ri";
import { GiBanknote } from "react-icons/gi";
import { useNavigate } from "react-router";

const AdminEquipment = () => {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatus] = useState("All status");
  const navigate = useNavigate();
  const stats = [
    { label: "Total Equipment", value: 8, numClass: "text-[#111]" },
    { label: "Available", value: 5, numClass: "text-[#22C55E]" },
    { label: "In Use", value: 2, numClass: "text-[#3B82F6]" },
    { label: "Pending", value: 1, numClass: "text-[#F59E0B]" },
  ];

  const statusCfg = {
    Available: {
      bg: "bg-[#F0FDF4]",
      text: "text-[#16A34A]",
      Icon: FiCheckCircle,
      iconCls: "text-[#22C55E]",
    },
    "In Use": {
      bg: "bg-[#EFF6FF]",
      text: "text-[#2563EB]",
      Icon: FiClock,
      iconCls: "text-[#3B82F6]",
    },
    Pending: {
      bg: "bg-[#FFFBEB]",
      text: "text-[#D97706]",
      Icon: FiClock,
      iconCls: "text-[#F59E0B]",
    },
  };

  const StatusBadge = ({ status }) => {
    const { bg, text, Icon, iconCls } = statusCfg[status];
    return (
      <span
        className={`inline-flex items-center gap-1 text-[11px] font-semibold px-2 py-0.5 rounded-full ${bg} ${text}`}
      >
        <Icon size={11} className={iconCls} />
        {status}
      </span>
    );
  };

  const equipment = [
    {
      name: "Massey Ferguson 375 Tractor",
      loc: "Ogun State",
      owner: "Adebayo Farms",
      price: "₦15,000/day",
      cat: "Tractors",
      status: "Available",
    },
    {
      name: "John Deere Combine Harvester",
      loc: "Kaduna State",
      owner: "Kaduna Agro",
      price: "₦25,000/day",
      cat: "Harvesters",
      status: "Available",
    },
    {
      name: "Row Crop Planter",
      loc: "Kano State",
      owner: "Northern Farms Ltd",
      price: "₦8,000/day",
      cat: "Planters",
      status: "In Use",
    },
    {
      name: "Drip Irrigation System",
      loc: "Lagos State",
      owner: "Lagos Farm Co-op",
      price: "₦5,000/day",
      cat: "Irrigation",
      status: "Available",
    },
    {
      name: "Rice Milling Machine",
      loc: "Ebonyi State",
      owner: "Abakaliki Mills",
      price: "₦12,000/day",
      cat: "Processing",
      status: "Pending",
    },
    {
      name: "Cassava Processing Equipment",
      loc: "Imo State",
      owner: "Owerri Processors",
      price: "₦10,000/day",
      cat: "Processing",
      status: "Available",
    },
    {
      name: "New Holland TD90 Tractor",
      loc: "Benue State",
      owner: "Benue Cooperative",
      price: "₦18,000/day",
      cat: "Tractors",
      status: "In Use",
    },
    {
      name: "Maize Sheller Machine",
      loc: "Plateau State",
      owner: "Jos Grain Mills",
      price: "₦6,000/day",
      cat: "Processing",
      status: "Available",
    },
  ];

  const visible = equipment.filter((e) => {
    const q = search.toLowerCase();
    const matchQ =
      e.name.toLowerCase().includes(q) || e.owner.toLowerCase().includes(q);
    const matchS = statusFilter === "All status" || e.status === statusFilter;
    return matchQ && matchS;
  });

  return (
    <div className="w-full pt-3">
      <div className="grid grid-cols-2 gap-5 md:grid-cols-4 font-inter">
        {stats.map((s, i) => (
          <div
            key={i}
            className={`px-5 py-4 border border-[#E5E7EB] rounded-xl shadow`}
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

      <div className="border border-[#E5E7EB] mt-8 rounded-2xl p-2 md:p-4">
        <div className="flex flex-col items-stretch gap-3 sm:flex-row sm:items-center">
          {/* Search box */}
          <div className="flex-1 flex items-center gap-2 bg-white border border-[#ECECEC] rounded-lg px-4 py-2">
            <FiSearch size={15} className="text-[#9CA3AF] shrink-0" />
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search equipment or owner..."
              className="flex-1 min-w-0 text-[13px] text-[#374151] placeholder:text-[#9CA3AF] bg-transparent outline-none"
            />
          </div>

          {/* Dropdown box */}
          <div className="flex items-center justify-between gap-2 bg-white border border-[#ECECEC] rounded-lg px-4 py-2 sm:w-36 shrink-0">
            <select
              value={statusFilter}
              onChange={(e) => setStatus(e.target.value)}
              className="flex-1 text-[13px] text-[#374151] bg-transparent outline-none cursor-pointer appearance-none"
            >
              {["All status", "Available", "In Use", "Pending"].map((s) => (
                <option key={s}>{s}</option>
              ))}
            </select>
            <LuChevronDown size={13} className="text-[#9CA3AF] shrink-0" />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 mt-8 mb-4 md:gap-6 font-inter sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((item, i) => (
          <div
            key={i}
            className="bg-white border border-[#ECECEC] rounded-2xl p-4 flex flex-col gap-3"
          >
            {/* Icon + Status badge */}
            <div className="flex items-start justify-between">
              <div className="w-10 h-10 rounded-xl bg-[#EEF4FF] flex items-center justify-center">
                {/* tractor-like icon in blue */}
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

            {/* Name + info */}
            <div>
              <p className="font-bold text-[14px] text-[#111] leading-snug">
                {item.name}
              </p>
              <div className="mt-2 flex flex-col gap-[3px]">
                <span className="flex items-center gap-1.5 text-[12px] text-[#6B7280]">
                  <RiMapPinLine size={12} className="text-[#9CA3AF] shrink-0" />
                  {item.loc}
                </span>
                <span className="flex items-center gap-1.5 text-[12px] text-[#6B7280]">
                  <LuUsers size={12} className="text-[#9CA3AF] shrink-0" />
                  {item.owner}
                </span>
                <span className="flex items-center gap-1.5 text-[12px] text-[#6B7280]">
                  <GiBanknote size={12} className="text-[#9CA3AF] shrink-0" />
                  {item.price}
                </span>
              </div>
            </div>

            {/* Footer: category + Edit button */}
            <div className="flex items-center justify-between pt-3 border-t border-[#F0F0F0] mt-auto">
              <span className="text-[12px] text-[#9CA3AF]">{item.cat}</span>
              <button
                className="inline-flex items-center gap-1.5 bg-bg-deepmain hover:bg-[#155C32] text-white text-[12px] font-semibold px-3 py-1.5 rounded-lg border-0 cursor-pointer transition-colors"
                onClick={() => navigate(`/admin/edit-equipment/${item.name}`)}
              >
                <LuSquarePen size={12} /> Edit
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminEquipment;
