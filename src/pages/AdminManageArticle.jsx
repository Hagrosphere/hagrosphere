// import { Countup } from "../components";

// const AdminManageArticle = () => {
//   const statusCfg = {
//     Published: "bg-[#DCFCE7] text-[#16A34A]",
//     Draft: "bg-[#FEF3C7] text-[#D97706]",
//   };

//   const articlesData = [
//     {
//       id: 1,
//       status: "Published",
//       category: "Crop Production",
//       title: "Best Practices for Rice Farming in Nigeria",
//       author: "Admin User",
//       date: "May 1, 2026",
//       views: "1,240",
//       tags: "rice, farming, best practices",
//       excerpt:
//         "A comprehensive guide covering the best practices for rice farming across Nigeria's key agricultural zones.",
//       content:
//         "Rice farming in Nigeria is a critical agricultural activity...\n\nKey practices include:\n- Proper land preparation\n- Seed selection\n- Water management\n- Fertiliser application",
//       seoTitle: "",
//       metaDesc: "",
//       imageUrl: "",
//     },
//     {
//       id: 2,
//       status: "Published",
//       category: "Equipment Care",
//       title: "How to Maintain Your Tractor Equipment",
//       author: "Admin User",
//       date: "Apr 28, 2026",
//       views: "856",
//       tags: "tractor, maintenance, equipment",
//       excerpt:
//         "Essential maintenance tips to keep your tractor running efficiently throughout the farming season.",
//       content:
//         "Regular tractor maintenance is essential for longevity and performance...\n\n## Daily Checks\n- Engine oil level\n- Tyre pressure\n- Fuel level\n\n## Weekly Maintenance\n- Air filter inspection\n- Belt tension check",
//       seoTitle: "",
//       metaDesc: "",
//       imageUrl: "",
//     },
//     {
//       id: 3,
//       status: "Draft",
//       category: "Jobs & Careers",
//       title: "Understanding Seasonal Employment in Agriculture",
//       author: "Admin User",
//       date: "Apr 25, 2026",
//       views: "0",
//       tags: "jobs, seasonal, employment",
//       excerpt:
//         "An overview of seasonal employment patterns in Nigeria's agricultural sector.",
//       content:
//         "Seasonal employment plays a vital role in agricultural productivity...",
//       seoTitle: "",
//       metaDesc: "",
//       imageUrl: "",
//     },
//     {
//       id: 4,
//       status: "Published",
//       category: "Equipment Care",
//       title: "Irrigation Systems: A Comprehensive Guide",
//       author: "Admin User",
//       date: "Apr 20, 2026",
//       views: "643",
//       tags: "irrigation, water, systems",
//       excerpt:
//         "Everything you need to know about selecting and maintaining irrigation systems for Nigerian farms.",
//       content:
//         "Irrigation is the backbone of dry-season farming in Nigeria...\n\n## Types of Irrigation\n- Drip irrigation\n- Sprinkler systems\n- Flood irrigation",
//       seoTitle: "Irrigation Systems Guide Nigeria",
//       metaDesc:
//         "Comprehensive guide to irrigation systems for Nigerian farmers.",
//       imageUrl: "",
//     },
//     {
//       id: 5,
//       status: "Published",
//       category: "Business",
//       title: "Market Access Strategies for Small Farmers",
//       author: "Admin User",
//       date: "Apr 15, 2026",
//       views: "892",
//       tags: "market, business, small farmers",
//       excerpt:
//         "Practical strategies to help small-scale farmers access larger markets and improve profitability.",
//       content:
//         "Access to markets remains one of the biggest challenges for small farmers...\n\n## Key Strategies\n- Cooperative formation\n- Digital marketplace platforms\n- Contract farming arrangements",
//       seoTitle: "",
//       metaDesc: "",
//       imageUrl: "",
//     },
//     {
//       id: 6,
//       status: "Draft",
//       category: "Safety",
//       title: "Safety Guidelines for Farm Workers",
//       author: "Admin User",
//       date: "Apr 12, 2026",
//       views: "0",
//       tags: "safety, workers, guidelines",
//       excerpt:
//         "Essential safety protocols every farm worker should know to prevent injuries on the job.",
//       content:
//         "Farm safety is often overlooked but critically important...\n\n## Basic Safety Rules\n- Always wear protective gear\n- Follow equipment manuals\n- Report hazards immediately",
//       seoTitle: "",
//       metaDesc: "",
//       imageUrl: "",
//     },
//   ];

//   return (
//     <div className="w-full pt-3">
//       <div className="grid grid-cols-2 gap-5 md:grid-cols-4 font-inter">
//         {articleStats.map((s, i) => (
//           <div
//             key={i}
//             className={`px-5 py-4 border border-[#E5E7EB] rounded-xl shadow`}
//           >
//             <p
//               className={`font-semibold text-xl md:text-2xl leading-none ${s.numCls}`}
//             >
//               <Countup end={s.value} />
//             </p>
//             <p className="text-[12px] text-[#9CA3AF] mt-1">{s.label}</p>
//           </div>
//         ))}
//       </div>

//       <div className="flex flex-col items-stretch gap-3 sm:flex-row sm:items-center">
//         <div className="flex-1 flex items-center gap-2 bg-white border border-[#ECECEC] rounded-lg px-4 py-2">
//           <Search size={15} className="text-[#9CA3AF] shrink-0" />
//           <input
//             value={search}
//             onChange={(e) => setSearch(e.target.value)}
//             placeholder="Search equipment or owner..."
//             className="flex-1 min-w-0 text-[13px] text-[#374151] placeholder:text-[#9CA3AF] bg-transparent outline-none"
//           />
//         </div>
//         <div className="flex items-center justify-between gap-2 bg-white border border-[#ECECEC] rounded-lg px-4 py-2 sm:w-[160px] shrink-0">
//           <select
//             value={statusFilter}
//             onChange={(e) => setStatus(e.target.value)}
//             className="flex-1 text-[13px] text-[#374151] bg-transparent outline-none cursor-pointer appearance-none"
//           >
//             {["All status", "Published", "Draft"].map((s) => (
//               <option key={s}>{s}</option>
//             ))}
//           </select>
//           <ChevronDown size={13} className="text-[#9CA3AF] shrink-0" />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AdminManageArticle;

import { useState } from "react";
import { useNavigate } from "react-router";
import { FiSearch, FiChevronDown, FiEye, FiTrash2 } from "react-icons/fi";
import { LuSquarePen } from "react-icons/lu";
import { Countup } from "../components";

const articlesData = [
  {
    id: 1,
    status: "Published",
    category: "Crop Production",
    title: "Best Practices for Rice Farming in Nigeria",
    author: "Admin User",
    date: "May 1, 2026",
    views: "1,240",
    tags: "rice, farming, best practices",
    excerpt:
      "A comprehensive guide covering the best practices for rice farming across Nigeria's key agricultural zones.",
    content:
      "Rice farming in Nigeria is a critical agricultural activity...\n\nKey practices include:\n- Proper land preparation\n- Seed selection\n- Water management\n- Fertiliser application",
    seoTitle: "",
    metaDesc: "",
    imageUrl: "",
  },
  {
    id: 2,
    status: "Published",
    category: "Equipment Care",
    title: "How to Maintain Your Tractor Equipment",
    author: "Admin User",
    date: "Apr 28, 2026",
    views: "856",
    tags: "tractor, maintenance, equipment",
    excerpt:
      "Essential maintenance tips to keep your tractor running efficiently throughout the farming season.",
    content:
      "Regular tractor maintenance is essential for longevity and performance...\n\n## Daily Checks\n- Engine oil level\n- Tyre pressure\n- Fuel level\n\n## Weekly Maintenance\n- Air filter inspection\n- Belt tension check",
    seoTitle: "",
    metaDesc: "",
    imageUrl: "",
  },
  {
    id: 3,
    status: "Draft",
    category: "Jobs & Careers",
    title: "Understanding Seasonal Employment in Agriculture",
    author: "Admin User",
    date: "Apr 25, 2026",
    views: "0",
    tags: "jobs, seasonal, employment",
    excerpt:
      "An overview of seasonal employment patterns in Nigeria's agricultural sector.",
    content:
      "Seasonal employment plays a vital role in agricultural productivity...",
    seoTitle: "",
    metaDesc: "",
    imageUrl: "",
  },
  {
    id: 4,
    status: "Published",
    category: "Equipment Care",
    title: "Irrigation Systems: A Comprehensive Guide",
    author: "Admin User",
    date: "Apr 20, 2026",
    views: "643",
    tags: "irrigation, water, systems",
    excerpt:
      "Everything you need to know about selecting and maintaining irrigation systems for Nigerian farms.",
    content:
      "Irrigation is the backbone of dry-season farming in Nigeria...\n\n## Types of Irrigation\n- Drip irrigation\n- Sprinkler systems\n- Flood irrigation",
    seoTitle: "Irrigation Systems Guide Nigeria",
    metaDesc: "Comprehensive guide to irrigation systems for Nigerian farmers.",
    imageUrl: "",
  },
  {
    id: 5,
    status: "Published",
    category: "Business",
    title: "Market Access Strategies for Small Farmers",
    author: "Admin User",
    date: "Apr 15, 2026",
    views: "892",
    tags: "market, business, small farmers",
    excerpt:
      "Practical strategies to help small-scale farmers access larger markets and improve profitability.",
    content:
      "Access to markets remains one of the biggest challenges for small farmers...\n\n## Key Strategies\n- Cooperative formation\n- Digital marketplace platforms\n- Contract farming arrangements",
    seoTitle: "",
    metaDesc: "",
    imageUrl: "",
  },
  {
    id: 6,
    status: "Draft",
    category: "Safety",
    title: "Safety Guidelines for Farm Workers",
    author: "Admin User",
    date: "Apr 12, 2026",
    views: "0",
    tags: "safety, workers, guidelines",
    excerpt:
      "Essential safety protocols every farm worker should know to prevent injuries on the job.",
    content:
      "Farm safety is often overlooked but critically important...\n\n## Basic Safety Rules\n- Always wear protective gear\n- Follow equipment manuals\n- Report hazards immediately",
    seoTitle: "",
    metaDesc: "",
    imageUrl: "",
  },
];

const statusCfg = {
  Published: "bg-[#DCFCE7] text-[#16A34A]",
  Draft: "bg-[#FEF3C7] text-[#D97706]",
};

const Divider = () => (
  <div className="border-b border-[#E5E7EB] mt-3 mb-5 mx-5" />
);

const AdminArticleManagement = () => {
  const navigate = useNavigate();
  const [articles, setArticles] = useState(articlesData);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatus] = useState("All status");

  const articleStats = [
    { label: "Total Articles", value: "6", numCls: "text-[#111]" },
    { label: "Published", value: "5", numCls: "text-[#22C55E]" },
    { label: "Drafts", value: "2", numCls: "text-[#F59E0B]" },
    { label: "Total Views", value: "3,824", numCls: "text-[#3B82F6]" },
  ];

  const visible = articles.filter((a) => {
    const q = search.toLowerCase();
    const matchQ =
      a.title.toLowerCase().includes(q) || a.category.toLowerCase().includes(q);
    const matchS = statusFilter === "All status" || a.status === statusFilter;
    return matchQ && matchS;
  });

  const handleDelete = (id) =>
    setArticles((prev) => prev.filter((a) => a.id !== id));

  const handleEdit = (article) =>
    navigate(`/admin/edit-article/${article.id}`, { state: { article } });

  return (
    <div className="w-full pt-3">
      <div className="flex flex-col w-full gap-4">
        {/* ── Stat bar ── */}
        <div className="grid grid-cols-2 gap-5 md:grid-cols-4 font-inter">
          {articleStats.map((s, i) => (
            <div
              key={i}
              className={`px-5 py-4 border border-[#E5E7EB] rounded-xl shadow`}
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

        {/* ── Search + Filter ── */}
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
              onChange={(e) => setStatus(e.target.value)}
              className="flex-1 text-[13px] text-[#374151] bg-transparent outline-none cursor-pointer appearance-none"
            >
              {["All status", "Published", "Draft"].map((s) => (
                <option key={s}>{s}</option>
              ))}
            </select>
            <FiChevronDown size={13} className="text-[#9CA3AF] shrink-0" />
          </div>
        </div>

        {/* ── Article list card ── */}
        <div className="bg-white border border-[#ECECEC] rounded-2xl font-inter overflow-hidden mb-6 ">
          {visible.map((a, i) => (
            <div key={a.id}>
              <div className="flex items-center justify-between gap-4 px-5 py-5">
                {/* Left */}
                <div className="flex flex-col gap-1.5 min-w-0">
                  <div className="flex flex-wrap items-center gap-2">
                    <span
                      className={`text-[11px] font-semibold px-2.5 py-0.5 rounded-full ${statusCfg[a.status]}`}
                    >
                      {a.status}
                    </span>
                    <span className="text-[12px] text-[#6B7280]">
                      {a.category}
                    </span>
                  </div>
                  <p className="font-bold my-1 md:my-1.5 text-[16px] text-[#111] leading-snug">
                    {a.title}
                  </p>
                  <div className="flex flex-wrap items-center gap-1.5 text-[12px] text-[#9CA3AF]">
                    <span>By {a.author}</span>
                    <span>•</span>
                    <span>{a.date}</span>
                    <span>•</span>
                    <FiEye size={13} className="inline" />
                    <span>{a.views} views</span>
                  </div>
                </div>

                {/* Right – actions */}
                <div className="flex items-center gap-1 shrink-0">
                  <button className="w-8 h-8 flex items-center justify-center rounded-lg text-[#9CA3AF] hover:text-[#374151] hover:bg-[#F3F4F6] bg-transparent border-0 cursor-pointer transition-colors">
                    <FiEye size={15} />
                  </button>
                  <button
                    onClick={() => handleEdit(a)}
                    className="w-8 h-8 flex items-center justify-center rounded-lg text-[#9CA3AF] hover:text-[#374151] hover:bg-[#F3F4F6] bg-transparent border-0 cursor-pointer transition-colors"
                  >
                    <LuSquarePen size={15} />
                  </button>
                  <button
                    onClick={() => handleDelete(a.id)}
                    className="w-8 h-8 flex items-center justify-center rounded-lg text-[#EF4444] hover:bg-[#FEF2F2] bg-transparent border-0 cursor-pointer transition-colors"
                  >
                    <FiTrash2 size={15} />
                  </button>
                </div>
              </div>
              {i < visible.length - 1 && <Divider />}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminArticleManagement;
