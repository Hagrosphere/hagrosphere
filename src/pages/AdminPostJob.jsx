import { useState } from "react";
import { LuChevronDown } from "react-icons/lu";
import { useNavigate } from "react-router";
import { useJobs } from "../features/jobs/hooks/useJobs";
import { toast } from "react-toastify";

const inputCls =
  "w-full px-3 py-2 border border-[#E5E7EB] rounded-lg text-[13px] text-[#374151] bg-white outline-none focus:border-[#1A6B3C] focus:ring-1 focus:ring-[#1A6B3C] transition-colors placeholder:text-[#9CA3AF]";

const Label = ({ children, required }) => (
  <label className="block text-[13px] font-medium text-[#374151] mb-1.5">
    {children}
    {required && <span className="text-[#EF4444] ml-0.5">*</span>}
  </label>
);

const Field = ({ label, required, children }) => (
  <div className="font-inter">
    {label && <Label required={required}>{label}</Label>}
    {children}
  </div>
);

const SelectField = ({
  label,
  required,
  options,
  value,
  onChange,
  placeholder,
}) => (
  <Field label={label} required={required}>
    <div className="relative font-inter">
      <select
        className={`${inputCls} appearance-none cursor-pointer pr-8`}
        value={value}
        onChange={onChange}
      >
        <option value="">{placeholder ?? "Select…"}</option>
        {options.map((o) => (
          <option
            key={typeof o === "string" ? o : o.id}
            value={typeof o === "string" ? o : o.id}
          >
            {typeof o === "string" ? o : o.name}
          </option>
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

const AdminPostJob = () => {
  const navigate = useNavigate();
  const { create, categories, isCreating } = useJobs(true);

  const [form, setForm] = useState({
    title: "",
    categoryId: "",
    location: "",
    type: "",
    deadline: "",
    salaryMin: "",
    salaryMax: "",
    description: "",
    requirements: "",
    benefits: "",
    applicationEmail: "",
    applicationPhone: "",
    status: "OPEN",
  });

  const set = (key) => (e) =>
    setForm((prev) => ({ ...prev, [key]: e.target.value }));

  const handleSubmit = async (asDraft = false) => {
    if (
      !form.title ||
      !form.categoryId ||
      !form.location ||
      !form.description
    ) {
      toast.error("Please fill in all required fields");
      return;
    }

    try {
      await create({
        title: form.title,
        categoryId: form.categoryId,
        location: form.location,
        type: form.type || "FULL_TIME",
        description: form.description,
        requirements: form.requirements || undefined,
        benefits: form.benefits
          ? form.benefits.split("\n").filter(Boolean)
          : [],
        salaryMin: form.salaryMin ? parseFloat(form.salaryMin) : undefined,
        salaryMax: form.salaryMax ? parseFloat(form.salaryMax) : undefined,
        applicationEmail: form.applicationEmail || undefined,
        deadline: form.deadline || undefined,
        status: asDraft ? "DRAFT" : "OPEN",
        company: "Hagrosphere",
      }).unwrap();

      toast.success(
        asDraft ? "Job saved as draft" : "Job posted successfully!",
      );
      navigate("/admin/manage-jobs");
    } catch (err) {
      toast.error(err?.data?.message ?? "Failed to post job");
    }
  };

  return (
    <div className="w-full pt-3">
      <Section title="Basic Information">
        <Divider />
        <Field label="Job Title" required>
          <input
            className={inputCls}
            placeholder="e.g., Rice Farm Worker"
            value={form.title}
            onChange={set("title")}
          />
        </Field>

        <div className="grid grid-cols-2 gap-4">
          <SelectField
            label="Category"
            required
            options={categories}
            value={form.categoryId}
            onChange={set("categoryId")}
          />
          <Field label="Location (State)" required>
            <input
              className={inputCls}
              placeholder="e.g., Ogun State"
              value={form.location}
              onChange={set("location")}
            />
          </Field>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <SelectField
            label="Employment Type"
            required
            value={form.type}
            onChange={set("type")}
            options={[
              { id: "FULL_TIME", name: "Full-time" },
              { id: "PART_TIME", name: "Part-time" },
              { id: "SEASONAL", name: "Seasonal" },
              { id: "CONTRACT", name: "Contract" },
              { id: "INTERNSHIP", name: "Internship" },
            ]}
          />
          <Field label="Application Deadline">
            <input
              type="date"
              className={`${inputCls} cursor-pointer`}
              value={form.deadline}
              onChange={set("deadline")}
            />
          </Field>
        </div>
      </Section>

      <div className="my-8">
        <Section title="Compensation">
          <Divider />
          <div className="grid grid-cols-2 gap-4">
            <Field label="Minimum Salary (₦/month)">
              <input
                className={inputCls}
                placeholder="e.g., 40000"
                type="number"
                value={form.salaryMin}
                onChange={set("salaryMin")}
              />
            </Field>
            <Field label="Maximum Salary (₦/month)">
              <input
                className={inputCls}
                placeholder="e.g., 85000"
                type="number"
                value={form.salaryMax}
                onChange={set("salaryMax")}
              />
            </Field>
          </div>
        </Section>
      </div>

      <Section title="Job Details">
        <Divider />
        <Field label="Job Description" required>
          <textarea
            className={`${inputCls} resize-none h-24`}
            placeholder="Describe the job responsibilities..."
            value={form.description}
            onChange={set("description")}
          />
        </Field>
        <Field label="Requirements & Qualifications">
          <textarea
            className={`${inputCls} resize-none h-24`}
            placeholder="List required skills, experience, education..."
            value={form.requirements}
            onChange={set("requirements")}
          />
        </Field>
        <Field label="Benefits (Optional — one per line)">
          <textarea
            className={`${inputCls} resize-none h-24`}
            placeholder="Housing provided&#10;Three meals daily&#10;Health insurance"
            value={form.benefits}
            onChange={set("benefits")}
          />
        </Field>
      </Section>

      <div className="my-8">
        <Section title="Contact Information">
          <Divider />
          <div className="grid grid-cols-2 gap-4">
            <Field label="Application Email">
              <input
                className={inputCls}
                placeholder="jobs@hagrosphere.com"
                value={form.applicationEmail}
                onChange={set("applicationEmail")}
              />
            </Field>
            <Field label="Contact Phone">
              <input
                className={inputCls}
                placeholder="+234 810 123 4567"
                value={form.applicationPhone}
                onChange={set("applicationPhone")}
              />
            </Field>
          </div>
        </Section>
      </div>

      <div className="flex items-center justify-end gap-3 pb-4 font-inter">
        <button
          className="px-5 py-2.5 text-[13px] font-medium text-[#374151] bg-white border border-[#E5E7EB] rounded-lg hover:bg-[#F9FAFB] cursor-pointer transition-colors"
          onClick={() => navigate(-1)}
        >
          Cancel
        </button>
        <button
          className="px-5 py-2.5 text-[13px] font-medium text-[#374151] bg-white border border-[#E5E7EB] rounded-lg hover:bg-[#F9FAFB] cursor-pointer transition-colors"
          disabled={isCreating}
          onClick={() => handleSubmit(true)}
        >
          Save as Draft
        </button>
        <button
          className="px-5 py-2.5 text-[13px] font-semibold text-white bg-[#1A6B3C] hover:bg-[#155C32] rounded-lg border-0 cursor-pointer transition-colors disabled:opacity-60"
          disabled={isCreating}
          onClick={() => handleSubmit(false)}
        >
          {isCreating ? "Posting..." : "Post Job"}
        </button>
      </div>
    </div>
  );
};

export default AdminPostJob;
