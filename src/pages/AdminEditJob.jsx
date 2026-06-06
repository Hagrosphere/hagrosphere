import { useState, useEffect } from "react";
import { LuChevronDown } from "react-icons/lu";
import { useNavigate, useParams } from "react-router";
import { useJobs, useJobById } from "../features/jobs/hooks/useJobs";
import { toast } from "react-toastify";
import { DeleteModal } from "../components";

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

const SelectField = ({ label, required, options, value, onChange }) => (
  <Field label={label} required={required}>
    <div className="relative font-inter">
      <select className={`${inputCls} appearance-none cursor-pointer pr-8`} value={value} onChange={onChange}>
        <option value="">Select…</option>
        {options.map((o) => (
          <option key={typeof o === "string" ? o : o.id} value={typeof o === "string" ? o : o.id}>
            {typeof o === "string" ? o : o.name}
          </option>
        ))}
      </select>
      <LuChevronDown size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-[#9CA3AF] pointer-events-none" />
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

const AdminEditJob = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { update, remove, categories, isUpdating, isDeleting } = useJobs(true);
  const { data: jobData, isLoading } = useJobById(id);

  const job = jobData;

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
    status: "OPEN",
  });

  const [showDeleteModal, setShowDeleteModal] = useState(false);

  useEffect(() => {
    if (job) {
      setForm({
        title: job.title ?? "",
        categoryId: job.category?.id ?? "",
        location: job.location ?? "",
        type: job.type ?? "",
        deadline: job.deadline ? job.deadline.split("T")[0] : "",
        salaryMin: job.salaryMin ? String(job.salaryMin) : "",
        salaryMax: job.salaryMax ? String(job.salaryMax) : "",
        description: job.description ?? "",
        requirements: job.requirements ?? "",
        benefits: Array.isArray(job.benefits) ? job.benefits.join("\n") : "",
        applicationEmail: job.applicationEmail ?? "",
        status: job.status ?? "OPEN",
      });
    }
  }, [job]);

  const set = (key) => (e) => setForm((prev) => ({ ...prev, [key]: e.target.value }));

  const handleSave = async () => {
    if (!form.title || !form.categoryId || !form.location || !form.description) {
      toast.error("Please fill in all required fields");
      return;
    }
    try {
      await update({
        id,
        data: {
          title: form.title,
          categoryId: form.categoryId,
          location: form.location,
          type: form.type || undefined,
          description: form.description,
          requirements: form.requirements || undefined,
          benefits: form.benefits ? form.benefits.split("\n").filter(Boolean) : [],
          salaryMin: form.salaryMin ? parseFloat(form.salaryMin) : undefined,
          salaryMax: form.salaryMax ? parseFloat(form.salaryMax) : undefined,
          applicationEmail: form.applicationEmail || undefined,
          deadline: form.deadline || undefined,
          status: form.status,
        },
      }).unwrap();
      toast.success("Job updated successfully!");
      navigate("/admin/manage-jobs");
    } catch (err) {
      toast.error(err?.data?.message ?? "Failed to update job");
    }
  };

  const handleDelete = async () => {
    try {
      await remove(id).unwrap();
      toast.success("Job deleted");
      setShowDeleteModal(false);
      navigate("/admin/manage-jobs");
    } catch {
      toast.error("Failed to delete job");
    }
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="border-t-4 border-b-4 rounded-full animate-spin h-10 w-10 border-bg-btn-primary" />
      </div>
    );
  }

  return (
    <div className="w-full pt-3">
      <Section title="Basic Information">
        <Divider />
        <Field label="Job Title" required>
          <input className={inputCls} value={form.title} onChange={set("title")} placeholder="e.g., Rice Farm Worker" />
        </Field>

        <div className="grid grid-cols-2 gap-4">
          <SelectField label="Category" required options={categories} value={form.categoryId} onChange={set("categoryId")} />
          <Field label="Location (State)" required>
            <input className={inputCls} value={form.location} onChange={set("location")} placeholder="e.g., Ogun State" />
          </Field>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <SelectField
            label="Employment Type" required
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
            <input type="date" className={`${inputCls} cursor-pointer`} value={form.deadline} onChange={set("deadline")} />
          </Field>
        </div>

        <SelectField
          label="Status"
          value={form.status}
          onChange={set("status")}
          options={[
            { id: "OPEN", name: "Open" },
            { id: "CLOSED", name: "Closed" },
            { id: "DRAFT", name: "Draft" },
            { id: "PAUSED", name: "Paused" },
          ]}
        />
      </Section>

      <div className="my-8">
        <Section title="Compensation">
          <Divider />
          <div className="grid grid-cols-2 gap-4">
            <Field label="Minimum Salary (₦/month)">
              <input className={inputCls} type="number" value={form.salaryMin} onChange={set("salaryMin")} placeholder="e.g., 40000" />
            </Field>
            <Field label="Maximum Salary (₦/month)">
              <input className={inputCls} type="number" value={form.salaryMax} onChange={set("salaryMax")} placeholder="e.g., 85000" />
            </Field>
          </div>
        </Section>
      </div>

      <Section title="Job Details">
        <Divider />
        <Field label="Job Description" required>
          <textarea className={`${inputCls} resize-none h-24`} value={form.description} onChange={set("description")} placeholder="Describe responsibilities..." />
        </Field>
        <Field label="Requirements & Qualifications">
          <textarea className={`${inputCls} resize-none h-24`} value={form.requirements} onChange={set("requirements")} placeholder="List required skills..." />
        </Field>
        <Field label="Benefits (one per line)">
          <textarea className={`${inputCls} resize-none h-24`} value={form.benefits} onChange={set("benefits")} placeholder="Housing provided&#10;Three meals daily" />
        </Field>
      </Section>

      <div className="my-8">
        <Section title="Contact Information">
          <Divider />
          <Field label="Application Email">
            <input className={inputCls} value={form.applicationEmail} onChange={set("applicationEmail")} placeholder="jobs@hagrosphere.com" />
          </Field>
        </Section>
      </div>

      <div className="flex items-center justify-between pb-4 font-inter">
        <button
          onClick={() => setShowDeleteModal(true)}
          disabled={isDeleting}
          className="text-[13px] font-semibold text-[#DC2626] hover:text-[#B91C1C] bg-transparent border-0 cursor-pointer transition-colors disabled:opacity-60"
        >
          {isDeleting ? "Deleting..." : "Delete Job"}
        </button>
        <div className="flex items-center gap-3">
          <button
            className="px-5 py-2.5 text-[13px] font-medium text-[#374151] bg-white border border-[#E5E7EB] rounded-lg hover:bg-[#F9FAFB] cursor-pointer transition-colors"
            onClick={() => navigate(-1)}
          >
            Cancel
          </button>
          <button
            className="px-5 py-2.5 text-[13px] font-semibold text-white bg-[#1A6B3C] hover:bg-[#155C32] rounded-lg border-0 cursor-pointer transition-colors disabled:opacity-60"
            disabled={isUpdating}
            onClick={handleSave}
          >
            {isUpdating ? "Saving..." : "Save Changes"}
          </button>
        </div>
      </div>

      <DeleteModal
        isOpen={showDeleteModal}
        onClose={() => setShowDeleteModal(false)}
        onConfirm={handleDelete}
        title="Delete Job"
        message="Are you sure you want to delete this job posting? This action cannot be undone."
        itemName={form.title}
        isDeleting={isDeleting}
      />
    </div>
  );
};

export default AdminEditJob;
