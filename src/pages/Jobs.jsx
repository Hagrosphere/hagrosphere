import { useNavigate } from "react-router";
import { FiSearch } from "react-icons/fi";
import { RiMapPinLine } from "react-icons/ri";
import { GiBanknote } from "react-icons/gi";
import { FaRegClock } from "react-icons/fa";
import { HeroSection } from "../components";
import { useMemo, useState } from "react";
import { workPlacementProcess } from "../components/DummyData";
import { useJobs } from "../features/jobs/hooks/useJobs";

const Jobs = () => {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState("All Jobs");
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState("Most Recent");
  const [currentPage, setCurrentPage] = useState(1);

  const { jobs, categories, meta, setFilters, setPage, isLoading } = useJobs();

  const allCategories = ["All Jobs", ...categories.map((c) => c.name)];

  const categoryColorMap = {
    "CROP PRODUCTION": "text-[#3D8B6A]",
    LIVESTOCK: "text-[#B07D2A]",
    PROCESSING: "text-[#2A7AB0]",
    "EQUIPMENT OPERATION": "text-[#8B3D6A]",
    "FARM MANAGEMENT": "text-[#6A3D8B]",
  };

  const typeBgMap = {
    SEASONAL: "bg-[#FFF7E6] text-[#B07D2A]",
    FULL_TIME: "bg-[rgba(63,125,90,0.1)] text-[#3D8B6A]",
    CONTRACT: "bg-[#EFF5FF] text-[#2A7AB0]",
    PART_TIME: "bg-[#F5F3FF] text-[#7C3AED]",
    INTERNSHIP: "bg-[#FFF7ED] text-[#D97706]",
  };

  const formatSalary = (min, max) => {
    if (!min) return "Salary negotiable";
    return `₦${Number(min).toLocaleString()} – ₦${Number(max ?? min).toLocaleString()}/month`;
  };

  const formatDate = (dateStr) => {
    if (!dateStr) return "Recently";
    const diff = Math.floor((Date.now() - new Date(dateStr).getTime()) / (1000 * 60 * 60 * 24));
    if (diff === 0) return "Today";
    if (diff === 1) return "1 day ago";
    if (diff < 7) return `${diff} days ago`;
    const w = Math.floor(diff / 7);
    return `${w} week${w > 1 ? "s" : ""} ago`;
  };

  const handleCategoryChange = (cat) => {
    setActiveCategory(cat);
    setCurrentPage(1);
    if (cat === "All Jobs") {
      setFilters({ category: undefined });
    } else {
      const found = categories.find((c) => c.name === cat);
      if (found) setFilters({ category: found.slug });
    }
  };

  const handleSearch = (e) => {
    setSearch(e.target.value);
    setCurrentPage(1);
    setFilters({ search: e.target.value || undefined });
  };

  // Client-side sort
  const sorted = useMemo(() => {
    const data = [...jobs];
    if (sortBy === "Highest Pay") {
      data.sort((a, b) => (b.salaryMax ?? 0) - (a.salaryMax ?? 0));
    }
    return data;
  }, [jobs, sortBy]);

  return (
    <div className="w-full">
      <HeroSection
        subtitle="CAREERS"
        title="Agricultural Job Opportunities"
        description="Browse verified farm work opportunities across Nigeria. All positions are from verified employers with clear terms and background-checked placements."
      />

      <section className="py-6 bg-white md:py-8">
        <div className="w-[96%] md:w-[94%] mx-auto">
          <div className="flex items-center flex-col-reverse gap-2 md:gap-0 md:flex-row justify-between md:border-b border-b-[#E5DDD0] md:pb-1">
            {/* Filter Tags */}
            <div className="w-full md:w-[70%] lg:w-[60%]">
              <div className="grid grid-cols-3 gap-2 mt-6 mb-8 md:flex md:flex-wrap">
                {allCategories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => handleCategoryChange(cat)}
                    className={`text-xs font-medium px-3 py-1 md:py-2 rounded-md tracking-[0.04em] transition-all duration-200 border cursor-pointer font-inter ${
                      activeCategory === cat
                        ? "bg-bg-btn-primary border-[#5C8A3A] text-white"
                        : "bg-white border-[#D9D4C7] text-[#5B5B5B] hover:border-[#5C8A3A] hover:text-[#2F4F2F]"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Search */}
            <div className="flex items-end w-full md:w-[30%] lg:w-[40%] justify-normal md:justify-end">
              <div className="relative w-full md:w-78 font-inter">
                <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-[#7A7A72]" />
                <input
                  type="text"
                  value={search}
                  onChange={handleSearch}
                  placeholder="Search jobs by title or keyword..."
                  className="w-full rounded border border-[#E5DDD0] pl-10 pr-4 py-1.5 text-sm text-[#7A7A72] placeholder:text-[#7A7A72] outline-0"
                />
              </div>
            </div>
          </div>

          {/* Results bar */}
          <div className="flex items-center justify-between mt-8 mb-5 font-inter">
            <p className="text-sm text-[#7A7A72]">
              <span className="font-semibold text-[#1A1A17]">{meta?.total ?? jobs.length}</span>{" "}
              {(meta?.total ?? jobs.length) === 1 ? "job" : "jobs"} available
            </p>
            <div className="flex items-center gap-3 rounded border border-[#D4C9B8] bg-white px-3 py-1.5">
              <span className="text-sm text-[#4A4A42]">Sort by:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-transparent text-sm text-[#4A4A42] outline-none cursor-pointer"
              >
                <option>Most Recent</option>
                <option>Highest Pay</option>
              </select>
            </div>
          </div>

          {/* Job cards */}
          {isLoading ? (
            <div className="flex justify-center items-center h-40">
              <div className="border-t-4 border-b-4 rounded-full animate-spin h-10 w-10 border-bg-btn-primary" />
            </div>
          ) : (
            <div className="flex flex-col gap-3">
              {sorted.length === 0 ? (
                <div className="py-16 text-center text-sm text-[#7A7A72]">
                  No jobs match your search.
                </div>
              ) : (
                sorted.map((job) => (
                  <div
                    key={job.id}
                    className="rounded-lg border border-[#E8E2D9] bg-white px-6 py-5 transition-shadow duration-200 hover:shadow-md"
                  >
                    <div className="flex flex-col items-start justify-between gap-4 md:flex-row">
                      {/* Left */}
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-wrap items-center font-inter gap-3.5 mb-2">
                          <span className={`text-xs font-semibold tracking-[0.06em] ${categoryColorMap[job.category?.name?.toUpperCase()] ?? "text-[#4A4A42]"}`}>
                            {job.category?.name?.toUpperCase()}
                          </span>
                          <span className={`rounded px-2 py-0.5 text-xs font-medium ${typeBgMap[job.type] ?? "bg-[#E8E2D9] text-[#4A4A42]"}`}>
                            {job.type?.replace("_", "-")}
                          </span>
                        </div>

                        <h3 className="text-base md:text-lg font-semibold text-[#1A1A17]">{job.title}</h3>
                        <p className="mt-1.5 font-inter text-xs md:text-sm leading-relaxed text-[#4A4A42] line-clamp-2">
                          {job.description}
                        </p>

                        <div className="mt-3 flex flex-wrap items-center gap-4 text-xs md:text-sm font-inter text-[#7A7A72]">
                          <span className="flex items-center gap-1">
                            <RiMapPinLine className="w-4 h-4" /> {job.location}
                          </span>
                          <span className="flex items-center gap-1">
                            <GiBanknote className="w-4 h-4" />
                            {formatSalary(job.salaryMin, job.salaryMax)}
                          </span>
                          {job.experience && (
                            <span className="flex items-center gap-1">
                              <FaRegClock className="w-4 h-4" /> {job.experience}
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Right */}
                      <div className="flex flex-row items-center justify-between w-full gap-3 md:w-fit font-inter md:items-end md:flex-col shrink-0">
                        <span className="text-xs text-[#9A9A92]">
                          {formatDate(job.publishedAt ?? job.createdAt)}
                        </span>
                        <button
                          onClick={() => navigate(`/job-listing-details/${job.slug || job.id}`)}
                          className="rounded bg-[#1F4D3A] px-4 py-1.5 md:py-2 text-xs font-semibold text-white transition-colors hover:bg-[#174030] cursor-pointer"
                        >
                          View Details
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          )}

          {/* Pagination */}
          {meta && meta.pages > 1 && (
            <div className="flex items-center justify-center gap-1 mt-8">
              <button
                onClick={() => setPage(meta.page - 1)}
                disabled={!meta.hasPrev}
                className="flex px-3 py-1 items-center justify-center rounded border border-[#D4C9B8] text-[#4A4A42] hover:bg-[#F0EBE3] disabled:opacity-40 disabled:cursor-not-allowed"
              >
                Previous
              </button>
              {Array.from({ length: meta.pages }, (_, i) => i + 1).map((p) => (
                <button
                  key={p}
                  onClick={() => setPage(p)}
                  className={`flex h-9 w-9 items-center justify-center rounded border text-sm font-medium transition-colors ${
                    p === meta.page
                      ? "border-[#1F4D3A] bg-[#1F4D3A] text-white"
                      : "border-[#D4C9B8] text-[#4A4A42] hover:bg-[#F0EBE3]"
                  }`}
                >
                  {p}
                </button>
              ))}
              <button
                onClick={() => setPage(meta.page + 1)}
                disabled={!meta.hasNext}
                className="flex px-3 py-1 items-center justify-center rounded border border-[#D4C9B8] text-[#4A4A42] hover:bg-[#F0EBE3] disabled:opacity-40 disabled:cursor-not-allowed"
              >
                Next
              </button>
            </div>
          )}
        </div>
      </section>

      {/* How it works */}
      <section className="py-8 mt-5 md:py-10 bg-[#FAF8F4] w-full">
        <div className="w-[90%] md:w-[94%] mx-auto">
          <h4 className="text-[#B07D2A] text-xs font-medium font-inter">Job Application Process</h4>
          <h2 className="mt-4 text-xl font-bold mb-7 md:text-2xl lg:text-3xl">How Worker Placement Works</h2>
          <div className="grid grid-cols-1 gap-4 mt-4 md:mt-8 md:grid-cols-2 lg:grid-cols-3 md:gap-6">
            {workPlacementProcess.map((item) => (
              <div className="bg-white w-[95%] mx-auto md:w-full py-6 border border-white/40" key={item.id}>
                <div className="w-[90%] mx-auto">
                  <h2 className="pb-3.5 md:pb-4 text-base md:text-lg font-medium">{item.title}</h2>
                  <p className="font-inter text-xs md:text-sm text-[#4A4A42]">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Jobs;
