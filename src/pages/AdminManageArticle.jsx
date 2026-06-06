import { useState } from "react";
import { useNavigate } from "react-router";
import { FiSearch, FiChevronDown, FiEye, FiTrash2 } from "react-icons/fi";
import { LuSquarePen } from "react-icons/lu";
import { Countup, DeleteModal } from "../components";
import { useArticles } from "../features/articles/hooks/useArticles";
import { toast } from "react-toastify";

const statusCfg = {
  PUBLISHED: "bg-[#DCFCE7] text-[#16A34A]",
  DRAFT: "bg-[#FEF3C7] text-[#D97706]",
  ARCHIVED: "bg-[#F3F4F6] text-[#6B7280]",
};

const Divider = () => (
  <div className="border-b border-[#E5E7EB] mt-3 mb-5 mx-5" />
);

const AdminArticleManagement = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All status");
  const [deleteItem, setDeleteItem] = useState(null);

  const {
    articles,
    meta,
    filters,
    setFilters,
    setPage,
    remove,
    isLoading,
    isDeleting,
  } = useArticles(true);

  const handleDelete = async () => {
    try {
      await remove(deleteItem.id).unwrap();
      toast.success("Article deleted successfully");
      setDeleteItem(null);
    } catch {
      toast.error("Failed to delete article");
    }
  };

  const visible = articles.filter((a) => {
    const q = search.toLowerCase();
    const matchQ =
      a.title.toLowerCase().includes(q) ||
      (a.category ?? "").toLowerCase().includes(q);
    const matchS =
      statusFilter === "All status" || a.status === statusFilter.toUpperCase();
    return matchQ && matchS;
  });

  const totalViews = articles.reduce((sum, a) => sum + (a.viewCount ?? 0), 0);

  const articleStats = [
    {
      label: "Total Articles",
      value: meta?.total ?? articles.length,
      numCls: "text-[#111]",
    },
    {
      label: "Published",
      value: articles.filter((a) => a.status === "PUBLISHED").length,
      numCls: "text-[#22C55E]",
    },
    {
      label: "Drafts",
      value: articles.filter((a) => a.status === "DRAFT").length,
      numCls: "text-[#F59E0B]",
    },
    { label: "Total Views", value: totalViews, numCls: "text-[#3B82F6]" },
  ];

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
      <div className="flex flex-col w-full gap-4">
        {/* Stat bar */}
        <div className="grid grid-cols-2 gap-5 md:grid-cols-4 font-inter">
          {articleStats.map((s, i) => (
            <div
              key={i}
              className="px-5 py-4 border border-[#E5E7EB] rounded-xl shadow"
            >
              <p
                className={`font-semibold text-xl md:text-2xl leading-none ${s.numCls}`}
              >
                <Countup end={s.value} />
              </p>
              <p className="text-[12px] text-[#9CA3AF] mt-1">{s.label}</p>
            </div>
          ))}
        </div>

        {/* Search + Filter + Add */}
        <div className="flex flex-col items-stretch gap-3 my-5 sm:flex-row sm:items-center">
          <div className="flex-1 flex items-center gap-2 bg-white border border-[#ECECEC] rounded-lg px-4 py-2">
            <FiSearch size={15} className="text-[#9CA3AF] shrink-0" />
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search articles..."
              className="flex-1 min-w-0 text-[13px] text-[#374151] placeholder:text-[#9CA3AF] bg-transparent outline-none"
            />
          </div>
          <div className="flex items-center justify-between gap-2 bg-white border border-[#ECECEC] rounded-lg px-4 py-2 sm:w-[160px] shrink-0">
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="flex-1 text-[13px] text-[#374151] bg-transparent outline-none cursor-pointer appearance-none"
            >
              {["All status", "Published", "Draft", "Archived"].map((s) => (
                <option key={s}>{s}</option>
              ))}
            </select>
            <FiChevronDown size={13} className="text-[#9CA3AF] shrink-0" />
          </div>
        </div>

        {/* Loading */}
        {isLoading && (
          <div className="flex items-center justify-center h-40">
            <div className="w-10 h-10 border-t-4 border-b-4 rounded-full animate-spin border-bg-btn-primary" />
          </div>
        )}

        {/* Article list */}
        {!isLoading && (
          <div className="bg-white border border-[#ECECEC] rounded-2xl font-inter overflow-hidden mb-6">
            {visible.map((a, i) => (
              <div key={a.id}>
                <div className="flex items-center justify-between gap-4 px-5 py-5">
                  <div className="flex flex-col gap-1.5 min-w-0">
                    <div className="flex flex-wrap items-center gap-2">
                      <span
                        className={`text-[11px] font-semibold px-2.5 py-0.5 rounded-full ${statusCfg[a.status] ?? "bg-[#F3F4F6] text-[#6B7280]"}`}
                      >
                        {a.status}
                      </span>
                      <span className="text-[12px] text-[#6B7280]">
                        {a.category?.replace("_", " ")}
                      </span>
                    </div>
                    <p className="font-bold my-1 md:my-1.5 text-[16px] text-[#111] leading-snug">
                      {a.title}
                    </p>
                    <div className="flex flex-wrap items-center gap-1.5 text-[12px] text-[#9CA3AF]">
                      <span>By {a.author ?? "Admin"}</span>
                      <span>•</span>
                      <span>{formatDate(a.publishedAt ?? a.createdAt)}</span>
                      <span>•</span>
                      <FiEye size={13} className="inline" />
                      <span>{(a.viewCount ?? 0).toLocaleString()} views</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-1 shrink-0">
                    <button
                      onClick={() => navigate(`/admin/edit-article/${a.id}`)}
                      className="w-8 h-8 flex items-center justify-center rounded-lg text-[#9CA3AF] hover:text-[#374151] hover:bg-[#F3F4F6] bg-transparent border-0 cursor-pointer transition-colors"
                    >
                      <LuSquarePen size={15} />
                    </button>
                    <button
                      onClick={() => setDeleteItem({ id: a.id, title: a.title })}
                      disabled={isDeleting}
                      className="w-8 h-8 flex items-center justify-center rounded-lg text-[#EF4444] hover:bg-[#FEF2F2] bg-transparent border-0 cursor-pointer transition-colors disabled:opacity-40"
                    >
                      <FiTrash2 size={15} />
                    </button>
                  </div>
                </div>
                {i < visible.length - 1 && <Divider />}
              </div>
            ))}

            {visible.length === 0 && (
              <div className="text-center py-16 text-[#9CA3AF]">
                <p className="text-sm">No articles found</p>
                <button
                  onClick={() => navigate("/admin/add-article")}
                  className="mt-4 bg-bg-btn-primary text-white text-[13px] px-4 py-2 rounded-lg border-0 cursor-pointer"
                >
                  Write your first article
                </button>
              </div>
            )}
          </div>
        )}

        {/* Pagination */}
        {meta && meta.pages > 1 && (
          <div className="flex justify-center gap-2 mb-4">
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
      </div>

      <DeleteModal
        isOpen={!!deleteItem}
        onClose={() => setDeleteItem(null)}
        onConfirm={handleDelete}
        title="Delete Article"
        message="Are you sure you want to delete this article?"
        itemName={deleteItem?.title}
        isDeleting={isDeleting}
      />
    </div>
  );
};

export default AdminArticleManagement;
