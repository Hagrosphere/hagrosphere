import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router";
import { FiChevronDown, FiImage, FiArrowLeft, FiBold, FiItalic, FiList, FiCode } from "react-icons/fi";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Placeholder from "@tiptap/extension-placeholder";
import { useArticles, useArticleById } from "../features/articles/hooks/useArticles";
import { toast } from "react-toastify";
import { DeleteModal } from "../components";

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

const AdminEditArticle = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { update, remove, tags, isUpdating, isDeleting } = useArticles(true);
  const { data: article, isLoading, isError } = useArticleById(id);

  const [form, setForm] = useState({
    title: "",
    category: "",
    tagIds: [],
    excerpt: "",
    coverImage: "",
    status: "PUBLISHED",
  });

  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const editor = useEditor({
    extensions: [
      StarterKit,
      Placeholder.configure({
        placeholder: "Write your article content here. Use the toolbar to format text...",
      }),
    ],
    content: "",
    editorProps: {
      attributes: {
        class: "prose prose-sm md:prose max-w-none focus:outline-none min-h-[200px] px-3 py-2",
      },
    },
  });

  useEffect(() => {
    if (!article) return;
    setForm({
      title: article.title ?? "",
      category: article.category ?? "",
      tagIds: article.tags?.map(t => t.id) ?? [],
      excerpt: article.excerpt ?? "",
      coverImage: article.coverImage ?? "",
      status: article.status ?? "PUBLISHED",
    });
  }, [article]);

  // Set editor content separately once both article and editor are ready
  useEffect(() => {
    if (!article?.content || !editor || editor.isDestroyed) return;
    // Small timeout ensures editor is fully mounted
    const timer = setTimeout(() => {
      editor.commands.setContent(article.content);
    }, 50);
    return () => clearTimeout(timer);
  }, [article?.content, editor]);

  const set = (key) => (e) =>
    setForm((prev) => ({ ...prev, [key]: e.target.value }));

  const handleSave = async (publishNow = false) => {
    const content = editor?.getHTML();
    if (!form.title || !content) {
      toast.error("Please fill in all required fields");
      return;
    }
    try {
      const payload = {
        title: form.title,
        content: content,
        status: publishNow ? "PUBLISHED" : form.status,
      };
      
      if (form.excerpt) payload.excerpt = form.excerpt;
      if (form.category) payload.category = form.category;
      if (form.coverImage) payload.coverImage = form.coverImage;
      if (form.tagIds && form.tagIds.length > 0) payload.tagIds = form.tagIds;

      await update({ id, data: payload }).unwrap();
      toast.success(publishNow ? "Article published successfully!" : "Article updated successfully!");
      navigate("/admin/manage-articles");
    } catch (err) {
      console.error("Article update error:", err);
      toast.error(err?.data?.message ?? "Failed to update article");
    }
  };

  const handleDelete = async () => {
    try {
      await remove(id).unwrap();
      toast.success("Article deleted");
      setShowDeleteModal(false);
      navigate("/admin/manage-articles");
    } catch {
      toast.error("Failed to delete article");
    }
  };

  if (isLoading || !article) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="border-t-4 border-b-4 rounded-full animate-spin h-10 w-10 border-bg-btn-primary" />
      </div>
    );
  }

  if (isError) {
    return (
      <div className="flex flex-col justify-center items-center h-64 gap-3">
        <p className="text-sm text-[#DC2626] font-inter">Failed to load article. You may not have permission or the session expired.</p>
        <button
          onClick={() => navigate("/admin/manage-articles")}
          className="px-4 py-2 text-sm font-medium text-white bg-[#1A6B3C] rounded-lg cursor-pointer border-0"
        >
          Back to Articles
        </button>
      </div>
    );
  }

  return (
    <div className="flex flex-col w-full gap-4 pt-3 mb-8">
      {/* ── Back button ── */}
      <button
        onClick={() => navigate(-1)}
        className="inline-flex font-inter items-center gap-1.5 text-[13px] font-medium text-[#6B7280] hover:text-[#111] bg-transparent border-0 cursor-pointer w-fit transition-colors"
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
                <option value="">Select category…</option>
                {[
                  "FARMING_TIPS",
                  "MARKET_NEWS",
                  "TECHNOLOGY",
                  "POLICY",
                  "INVESTMENT",
                  "DIASPORA",
                  "GENERAL",
                ].map((val) => {
                  const label = val.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
                  return <option key={val} value={val}>{label}</option>;
                })}
              </select>
              <FiChevronDown
                size={14}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[#9CA3AF] pointer-events-none"
              />
            </div>
          </Field>

          <Field label="Tags">
            <div className="relative">
              <select
                className={`${inputCls} appearance-none cursor-pointer pr-8`}
                value=""
                onChange={(e) => {
                  const tagId = e.target.value;
                  if (tagId && !form.tagIds.includes(tagId)) {
                    setForm(prev => ({ ...prev, tagIds: [...prev.tagIds, tagId] }));
                  }
                }}
              >
                <option value="">Add tag…</option>
                {tags.map((tag) => (
                  <option key={tag.id} value={tag.id} disabled={form.tagIds.includes(tag.id)}>
                    {tag.name}
                  </option>
                ))}
              </select>
              <FiChevronDown
                size={14}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[#9CA3AF] pointer-events-none"
              />
            </div>
            {form.tagIds.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-2">
                {form.tagIds.map((tagId) => {
                  const tag = tags.find(t => t.id === tagId);
                  return tag ? (
                    <span
                      key={tagId}
                      className="inline-flex items-center gap-1 px-2 py-1 text-[11px] bg-[#F3F4F6] text-[#374151] rounded"
                    >
                      {tag.name}
                      <button
                        type="button"
                        onClick={() => setForm(prev => ({ ...prev, tagIds: prev.tagIds.filter(id => id !== tagId) }))}
                        className="text-[#6B7280] hover:text-[#111] bg-transparent border-0 cursor-pointer"
                      >
                        ×
                      </button>
                    </span>
                  ) : null;
                })}
              </div>
            )}
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
              value={form.coverImage}
              onChange={set("coverImage")}
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
          
          {/* TipTap Toolbar */}
          <div className="flex flex-wrap gap-1 p-2 mb-2 border border-[#E5E7EB] rounded-t-lg bg-[#F9FAFB]">
            <button
              type="button"
              onClick={() => editor.chain().focus().toggleBold().run()}
              className={`p-2 rounded hover:bg-[#E5E7EB] border-0 cursor-pointer transition-colors ${
                editor?.isActive('bold') ? 'bg-[#E5E7EB]' : 'bg-transparent'
              }`}
              title="Bold"
            >
              <FiBold size={16} />
            </button>
            <button
              type="button"
              onClick={() => editor.chain().focus().toggleItalic().run()}
              className={`p-2 rounded hover:bg-[#E5E7EB] border-0 cursor-pointer transition-colors ${
                editor?.isActive('italic') ? 'bg-[#E5E7EB]' : 'bg-transparent'
              }`}
              title="Italic"
            >
              <FiItalic size={16} />
            </button>
            <button
              type="button"
              onClick={() => editor.chain().focus().toggleCodeBlock().run()}
              className={`p-2 rounded hover:bg-[#E5E7EB] border-0 cursor-pointer transition-colors ${
                editor?.isActive('codeBlock') ? 'bg-[#E5E7EB]' : 'bg-transparent'
              }`}
              title="Code Block"
            >
              <FiCode size={16} />
            </button>
            <div className="w-px h-6 bg-[#E5E7EB] mx-1" />
            <button
              type="button"
              onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
              className={`px-3 py-1 rounded text-[13px] font-semibold hover:bg-[#E5E7EB] border-0 cursor-pointer transition-colors ${
                editor?.isActive('heading', { level: 1 }) ? 'bg-[#E5E7EB]' : 'bg-transparent'
              }`}
              title="Heading 1"
            >
              H1
            </button>
            <button
              type="button"
              onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
              className={`px-3 py-1 rounded text-[13px] font-semibold hover:bg-[#E5E7EB] border-0 cursor-pointer transition-colors ${
                editor?.isActive('heading', { level: 2 }) ? 'bg-[#E5E7EB]' : 'bg-transparent'
              }`}
              title="Heading 2"
            >
              H2
            </button>
            <button
              type="button"
              onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
              className={`px-3 py-1 rounded text-[13px] font-semibold hover:bg-[#E5E7EB] border-0 cursor-pointer transition-colors ${
                editor?.isActive('heading', { level: 3 }) ? 'bg-[#E5E7EB]' : 'bg-transparent'
              }`}
              title="Heading 3"
            >
              H3
            </button>
            <div className="w-px h-6 bg-[#E5E7EB] mx-1" />
            <button
              type="button"
              onClick={() => editor.chain().focus().toggleBulletList().run()}
              className={`p-2 rounded hover:bg-[#E5E7EB] border-0 cursor-pointer transition-colors ${
                editor?.isActive('bulletList') ? 'bg-[#E5E7EB]' : 'bg-transparent'
              }`}
              title="Bullet List"
            >
              <FiList size={16} />
            </button>
            <button
              type="button"
              onClick={() => editor.chain().focus().toggleOrderedList().run()}
              className={`px-3 py-1 rounded text-[13px] font-semibold hover:bg-[#E5E7EB] border-0 cursor-pointer transition-colors ${
                editor?.isActive('orderedList') ? 'bg-[#E5E7EB]' : 'bg-transparent'
              }`}
              title="Numbered List"
            >
              1.
            </button>
          </div>

          {/* TipTap Editor */}
          <div className="border border-[#E5E7EB] rounded-b-lg bg-white overflow-hidden">
            <EditorContent editor={editor} />
          </div>
          <p className="text-[11px] text-[#9CA3AF] mt-1.5">
            Use the toolbar to format your content
          </p>
        </div>
      </Section>

      {/* ── Actions ── */}
      <div className="flex items-center justify-between gap-3 pb-4 font-inter">
        <button
          onClick={() => setShowDeleteModal(true)}
          disabled={isDeleting}
          className="text-[13px] font-semibold text-[#DC2626] hover:text-[#B91C1C] bg-transparent border-0 cursor-pointer transition-colors disabled:opacity-60"
        >
          {isDeleting ? "Deleting..." : "Delete Article"}
        </button>
        <div className="flex items-center gap-3">
          <button
            onClick={() => navigate(-1)}
            className="px-5 py-2.5 text-[13px] font-medium text-[#374151] bg-white border border-[#E5E7EB] rounded-lg hover:bg-[#F9FAFB] cursor-pointer transition-colors"
          >
            Cancel
          </button>
          {form.status === "DRAFT" && (
            <button
              onClick={() => handleSave(true)}
              disabled={isUpdating}
              className="px-5 py-2.5 text-[13px] font-semibold text-white bg-[#1A6B3C] hover:bg-[#155C32] rounded-lg border-0 cursor-pointer transition-colors disabled:opacity-60"
            >
              {isUpdating ? "Publishing..." : "Publish Article"}
            </button>
          )}
          <button
            onClick={() => handleSave(false)}
            disabled={isUpdating}
            className="px-5 py-2.5 text-[13px] font-semibold text-white bg-[#1A6B3C] hover:bg-[#155C32] rounded-lg border-0 cursor-pointer transition-colors disabled:opacity-60"
          >
            {isUpdating ? "Saving..." : "Save Changes"}
          </button>
        </div>
      </div>

      <DeleteModal
        isOpen={showDeleteModal}
        onClose={() => setShowDeleteModal(false)}
        onConfirm={handleDelete}
        title="Delete Article"
        message="Are you sure you want to delete this article? This action cannot be undone."
        itemName={form.title}
        isDeleting={isDeleting}
      />
    </div>
  );
};

export default AdminEditArticle;
