import { useState } from "react";
import { LuChevronDown } from "react-icons/lu";
import { useNavigate } from "react-router";

const inputCls =
  "w-full px-3 py-2 border border-[#E5E7EB] rounded-lg text-[13px] text-[#374151] bg-white outline-none focus:border-[#1A6B3C] focus:ring-1 focus:ring-[#1A6B3C] transition-colors placeholder:text-[#9CA3AF]";

const Label = ({ children, required }) => (
  <label className="block text-[12px] font-medium text-[#374151] mb-1.5">
    {children}
    {required && <span className="text-[#EF4444] ml-0.5">*</span>}
  </label>
);

const Section = ({ title, children }) => (
  <div className="bg-white border border-[#ECECEC] rounded-2xl p-5">
    <p className="font-bold text-[15px] text-[#111] mb-4">{title}</p>
    {children}
  </div>
);

const Select = ({ value, onChange, options }) => (
  <div className="relative">
    <select
      value={value}
      onChange={onChange}
      className={`${inputCls} appearance-none cursor-pointer pr-8`}
    >
      {options.map((o) => (
        <option key={o}>{o}</option>
      ))}
    </select>
    <LuChevronDown
      size={14}
      className="absolute right-3 top-1/2 -translate-y-1/2 text-[#9CA3AF] pointer-events-none"
    />
  </div>
);

const Divider = () => (
  <div className="border-b border-[#F0F0F0] mt-3 mb-7 -mx-5" />
);

const AdminEditEquipment = () => {
  const [status, setStatus] = useState("Available");
  const navigate = useNavigate();

  return (
    <div className="w-full pt-3 mb-8">
      <div className="grid grid-cols-1 md:grid-cols-[1fr_260px] gap-4 items-start">
        {/* ════════════════ LEFT COLUMN ════════════════ */}
        <div className="flex flex-col gap-4">
          {/* Basic Information */}
          <Section title="Basic Information">
            <Divider />
            {/* Equipment name */}
            <div className="mb-4 font-inter">
              <Label required>Equipment</Label>
              <input
                className={inputCls}
                defaultValue="Massey Ferguson 375 Tractor"
              />
            </div>

            {/* Category + Location */}
            <div className="grid grid-cols-2 gap-4 mb-4 font-inter">
              <div>
                <Label required>Category</Label>
                <Select
                  value="Tractors"
                  onChange={() => {}}
                  options={[
                    "Tractors",
                    "Harvesters",
                    "Planters",
                    "Irrigation",
                    "Processing",
                  ]}
                />
              </div>
              <div>
                <Label required>Location</Label>
                <input className={inputCls} defaultValue="Ogun State" />
              </div>
            </div>

            {/* Description */}
            <div className="mb-4 font-inter">
              <Label required>Description</Label>
              <textarea
                className={`${inputCls} resize-none h-[80px]`}
                defaultValue="75HP 4WD agricultural tractor suitable for plowing, harrowing, and general farm operations."
              />
            </div>

            {/* Technical Specifications */}
            <div className="font-inter">
              <Label>Technical Specifications</Label>
              {/* Bordered spec box matching the screenshot */}
              <div className="border font-inter border-[#E5E7EB] rounded-lg p-3 bg-white">
                <textarea
                  className="w-full text-[12px] text-[#374151] font-mono bg-transparent outline-none resize-none h-[88px] leading-relaxed"
                  defaultValue={`Engine: 75HP Diesel\nTransmission: 8F/2R\nFuel Capacity: 65L\nWeight: 2,850kg`}
                />
              </div>
            </div>
          </Section>

          {/* Owner Information */}
          <Section title="Owner Information">
            <Divider />
            <div className="grid grid-cols-2 gap-4 font-inter">
              <div>
                <Label required>Owner Name</Label>
                <input className={inputCls} defaultValue="Adebisi Farms" />
              </div>
              <div>
                <Label required>Contact Number</Label>
                <input className={inputCls} defaultValue="+234 801 234 5678" />
              </div>
            </div>
          </Section>

          {/* Pricing */}
          <Section title="Pricing (Optional)">
            <Divider />
            <div className="grid grid-cols-3 gap-4 font-inter">
              {[
                { label: "Daily Rate (₦)", val: "15000" },
                { label: "Weekly Rate (₦)", val: "90000" },
                { label: "Monthly Rate (₦)", val: "300000" },
              ].map((f) => (
                <div key={f.label}>
                  <Label>{f.label}</Label>
                  <input className={inputCls} defaultValue={f.val} />
                </div>
              ))}
            </div>
          </Section>
        </div>

        {/* ════════════════ RIGHT COLUMN ════════════════ */}
        <div className="bg-white border border-[#ECECEC] rounded-2xl p-5">
          <p className="font-bold text-[15px] text-[#111] mb-4">
            Status & Actions
          </p>
          <Divider />

          {/* Availability Status */}
          <div className="mb-4 font-inter">
            <Label>Availability Status</Label>
            <Select
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              options={["Available", "In Use", "Pending", "Maintenance"]}
            />
          </div>

          {/* Save */}
          <button className="w-full font-inter  bg-[#1A6B3C] hover:bg-[#155C32] text-white font-semibold text-[14px] py-2.5 rounded-xl border-0 cursor-pointer transition-colors mb-2">
            Save Changes
          </button>

          {/* Cancel */}
          <button
            className="w-full font-inter bg-white hover:bg-[#F9FAFB] text-[#374151] font-medium text-[14px] py-2.5 rounded-xl border border-[#E5E7EB] cursor-pointer transition-colors"
            onClick={() => navigate(-1)}
          >
            Cancel
          </button>

          {/* Delete */}
          <div className="border-t font-inter border-[#F0F0F0] mt-5 pt-4 text-center">
            <button className="text-[13px] font-semibold text-[#DC2626] hover:text-[#B91C1C] bg-transparent border-0 cursor-pointer transition-colors">
              Delete Equipment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminEditEquipment;
