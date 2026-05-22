import { useState } from "react";
import { useNavigate } from "react-router";
import { FiChevronDown, FiImage, FiArrowLeft } from "react-icons/fi";

// ── Shared primitives ─────────────────────────────────────────────────────────
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

const Section = ({ title, children }) => (
  <div className="bg-white border border-[#E5E7EB] rounded-2xl p-5 flex flex-col gap-4">
    <p className="font-bold text-[15px] text-[#111]">{title}</p>
    {children}
  </div>
);

const Divider = () => <div className="border-b border-[#F0F0F0] -mx-5 mb-1" />;

const AdminPostArticle = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    title: "",
    category: "",
    tags: "",
    excerpt: "",
    imageUrl: "",
    content: "",
    seoTitle: "",
    metaDesc: "",
  });

  const set = (key) => (e) =>
    setForm((prev) => ({ ...prev, [key]: e.target.value }));

  const handleSubmit = () => {
    // TODO: send form data to API
    navigate(-1);
  };

  return (
    <div className="flex flex-col w-full gap-4 pt-3 mb-8">
      {/* ── Back button ── */}
      <button
        onClick={() => navigate(-1)}
        className="inline-flex items-center font-inter gap-1.5 text-[13px] font-medium text-[#6B7280] hover:text-[#111] bg-transparent border-0 cursor-pointer w-fit transition-colors"
      >
        <FiArrowLeft size={15} /> Back to Articles
      </button>

      {/* ── Basic Information ── */}
      <Section title="Basic Information">
        <Divider />

        <Field label="Article Title" required>
          <input
            className={inputCls}
            value={form.title}
            onChange={set("title")}
            placeholder="e.g., Best Practices for Rice Farming in Nigeria"
          />
        </Field>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <Field label="Category" required>
            <div className="relative">
              <select
                className={`${inputCls} appearance-none cursor-pointer pr-8`}
                value={form.category}
                onChange={set("category")}
              >
                <option value="" disabled>
                  Select category…
                </option>
                {[
                  "Crop Production",
                  "Equipment Care",
                  "Jobs & Careers",
                  "Business",
                  "Safety",
                  "Market Trends",
                  "Technology",
                  "Sustainability",
                ].map((o) => (
                  <option key={o}>{o}</option>
                ))}
              </select>
              <FiChevronDown
                size={14}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[#9CA3AF] pointer-events-none"
              />
            </div>
          </Field>

          <Field label="Tags (comma-separated)">
            <input
              className={inputCls}
              value={form.tags}
              onChange={set("tags")}
              placeholder="rice, farming, best practices"
            />
          </Field>
        </div>

        <Field label="Excerpt / Summary" required>
          <textarea
            className={`${inputCls} resize-none h-[80px]`}
            value={form.excerpt}
            onChange={set("excerpt")}
            placeholder="Brief summary that appears in article listings..."
          />
        </Field>
      </Section>

      {/* ── Featured Image ── */}
      <Section title="Featured Image">
        <Divider />
        <Field label="Image URL">
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[#9CA3AF]">
              <FiImage size={14} />
            </span>
            <input
              className={`${inputCls} pl-8`}
              value={form.imageUrl}
              onChange={set("imageUrl")}
              placeholder="e.g., https://example.com/image.jpg"
            />
          </div>
        </Field>
      </Section>

      {/* ── Article Content ── */}
      <Section title="Article Content">
        <Divider />
        <div className="font-inter">
          <Label required>Content</Label>
          <textarea
            className={`${inputCls} resize-none h-[200px]`}
            value={form.content}
            onChange={set("content")}
            placeholder="Write your article content here. Use markdown formatting for headings, lists, and emphasis..."
          />
          <p className="text-[11px] text-[#9CA3AF] mt-1.5">
            Supports Markdown formatting
          </p>
        </div>
      </Section>

      {/* ── SEO Settings ── */}
      <Section title="SEO Settings">
        <Divider />
        <Field label="SEO Title">
          <input
            className={inputCls}
            value={form.seoTitle}
            onChange={set("seoTitle")}
            placeholder="Leave empty to use article title"
          />
        </Field>
        <Field label="Meta Description">
          <input
            className={inputCls}
            value={form.metaDesc}
            onChange={set("metaDesc")}
            placeholder="Leave empty to use excerpt"
          />
        </Field>
      </Section>

      {/* ── Actions ── */}
      <div className="flex items-center justify-between gap-3 pb-4 mt-4 font-inter">
        <button
          onClick={() => navigate(-1)}
          className="px-5 py-2.5 text-[13px] font-medium text-[#374151] bg-white border border-[#E5E7EB] rounded-lg hover:bg-[#F9FAFB] cursor-pointer transition-colors"
        >
          Cancel
        </button>

        <div className="flex items-center gap-3 md:gap-5">
          <button className="px-5 py-2.5 text-[13px] font-medium text-[#374151] bg-white border border-[#E5E7EB] rounded-lg hover:bg-[#F9FAFB] cursor-pointer transition-colors">
            Save as Draft
          </button>

          <button
            onClick={handleSubmit}
            className="px-5 py-2.5 text-[13px] font-semibold text-white bg-[#1A6B3C] hover:bg-[#155C32] rounded-lg border-0 cursor-pointer transition-colors"
          >
            Post Article
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminPostArticle;
