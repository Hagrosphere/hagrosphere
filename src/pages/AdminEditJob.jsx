import { useState } from "react";
import { LuChevronDown } from "react-icons/lu";
import { useNavigate } from "react-router";

const inputCls =
  "w-full px-3 py-2 border border-[#E5E7EB] rounded-lg text-[13px] text-[#374151] bg-white outline-none focus:border-[#1A6B3C] focus:ring-1 focus:ring-[#1A6B3C] transition-colors placeholder:text-[#9CA3AF]";

const Label = ({ children, required }) => (
  <label className="block text-[13px] font-medium text-[#374151] mb-1.5">
    {children}
    {required && <span className="text-[#374151]">*</span>}
  </label>
);

const Field = ({ label, required, children }) => (
  <div className="font-inter">
    {label && <Label required={required}>{label}</Label>}
    {children}
  </div>
);

const SelectField = ({ label, required, options, value, onChange }) => (
  <Field label={label} required={required}>
    <div className="relative font-inter">
      <select
        className={`${inputCls} appearance-none cursor-pointer pr-8`}
        value={value}
        onChange={onChange}
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
  </Field>
);

const Section = ({ title, children }) => (
  <div className="bg-white border border-[#E5E7EB] rounded-xl p-5 flex flex-col gap-4">
    <p className="font-bold text-[15px] text-[#111]">{title}</p>
    {children}
  </div>
);

const Divider = () => <div className="border-b border-[#F0F0F0] mb-5 -mx-5" />;

// ── Pre-filled job data (swap this with props/route state in real usage) ──────
const jobData = {
  title: "Rice Farm Worker",
  category: "Crop Production",
  location: "Ogun State",
  employmentType: "Seasonal",
  deadline: "2026-06-30",
  minSalary: "40,000",
  maxSalary: "85,000",
  jobDetails:
    "Responsible for planting, tending, and harvesting rice crops across the farm. Day-to-day tasks include irrigation management, pest control, and equipment handling under the supervision of the farm manager.",
  requirements:
    "Minimum of 1 year experience in crop farming. Ability to operate basic farm equipment. Physical fitness required for outdoor field work. OND or equivalent is an advantage.",
  benefits:
    "Accommodation provided on-site. Three meals daily. End-of-season bonus. Health insurance coverage.",
  contactEmail: "jobs@hagrosphere.com",
  contactPhone: "+235 810 123 4567",
};

const AdminEditJob = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({ ...jobData });

  const set = (key) => (e) =>
    setForm((prev) => ({ ...prev, [key]: e.target.value }));

  return (
    <div className="w-full pt-3">
      {/* ── Basic Information ── */}
      <Section title="Basic Information">
        <Divider />

        <Field label="Job Title" required>
          <input
            className={inputCls}
            value={form.title}
            onChange={set("title")}
            placeholder="e.g., Rice Farm Worker"
          />
        </Field>

        <div className="grid grid-cols-2 gap-4">
          <SelectField
            label="Category"
            required
            value={form.category}
            onChange={set("category")}
            options={[
              "Crop Production",
              "Livestock",
              "Equipment Operation",
              "Management",
            ]}
          />
          <Field label="Location (State)" required>
            <input
              className={inputCls}
              value={form.location}
              onChange={set("location")}
              placeholder="e.g., Ogun State"
            />
          </Field>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <SelectField
            label="Employment Type"
            required
            value={form.employmentType}
            onChange={set("employmentType")}
            options={["Full-time", "Part-time", "Seasonal", "Contract"]}
          />
          <Field label="Application Deadline" required>
            <input
              type="date"
              className={`${inputCls} cursor-pointer`}
              value={form.deadline}
              onChange={set("deadline")}
            />
          </Field>
        </div>
      </Section>

      {/* ── Compensation ── */}
      <div className="my-8">
        <Section title="Compensation">
          <Divider />
          <div className="grid grid-cols-2 gap-4">
            <Field label="Minimum Salary (₦/month)">
              <input
                className={inputCls}
                value={form.minSalary}
                onChange={set("minSalary")}
              />
            </Field>
            <Field label="Maximum Salary (₦/month)">
              <input
                className={inputCls}
                value={form.maxSalary}
                onChange={set("maxSalary")}
              />
            </Field>
          </div>
        </Section>
      </div>

      {/* ── Job Details ── */}
      <Section title="Job Details">
        <Divider />

        <div className="font-inter">
          <p className="text-[13px] font-medium text-[#374151] mb-1.5">
            Job Details
          </p>
          <textarea
            className={`${inputCls} resize-none h-22`}
            value={form.jobDetails}
            onChange={set("jobDetails")}
            placeholder="Describe the job responsibilities, day-to-day tasks, and what the role entails..."
          />
        </div>

        <div className="font-inter">
          <p className="text-[13px] font-medium text-[#374151] mb-1.5">
            Requirements & Qualifications
          </p>
          <textarea
            className={`${inputCls} resize-none h-22`}
            value={form.requirements}
            onChange={set("requirements")}
            placeholder="List the required skills, experience, education, and qualifications..."
          />
        </div>

        <div className="font-inter">
          <p className="text-[13px] font-medium text-[#374151] mb-1.5">
            Benefits (Optional)
          </p>
          <textarea
            className={`${inputCls} resize-none h-22`}
            value={form.benefits}
            onChange={set("benefits")}
            placeholder="List any benefits like housing, meals, training, insurance, etc..."
          />
        </div>
      </Section>

      {/* ── Contact Information ── */}
      <div className="my-8">
        <Section title="Contact Information">
          <Divider />
          <div className="grid grid-cols-2 gap-4">
            <Field label="Contact Email">
              <input
                className={inputCls}
                value={form.contactEmail}
                onChange={set("contactEmail")}
              />
            </Field>
            <Field label="Contact Phone">
              <input
                className={inputCls}
                value={form.contactPhone}
                onChange={set("contactPhone")}
              />
            </Field>
          </div>
        </Section>
      </div>

      {/* ── Actions ── */}
      <div className="flex items-center justify-end gap-3 pb-4 font-inter">
        <button
          onClick={() => navigate(-1)}
          className="px-5 py-2.5 text-[13px] font-medium text-[#374151] bg-white border border-[#E5E7EB] rounded-lg hover:bg-[#F9FAFB] cursor-pointer transition-colors"
        >
          Cancel
        </button>
        <button className="px-5 py-2.5 text-[13px] font-semibold text-white bg-[#1A6B3C] hover:bg-[#155C32] rounded-lg border-0 cursor-pointer transition-colors">
          Save Changes
        </button>
      </div>
    </div>
  );
};

export default AdminEditJob;
