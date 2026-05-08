import { useNavigate } from "react-router";
import { FiSearch } from "react-icons/fi";
import { RiMapPinLine } from "react-icons/ri";
import { GiBanknote } from "react-icons/gi";
import { FaRegClock } from "react-icons/fa";
import { HeroSection } from "../components";
import { useMemo, useState } from "react";
import { jobsData, workPlacementProcess } from "../components/DummyData";

const Jobs = () => {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState("All Jobs");
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState("Most Recent");
  const [currentPage, setCurrentPage] = useState(1);

  const categories = [
    "All Jobs",
    "Crop Production",
    "Livestock",
    "Processing",
    "Equipment Operation",
    "Farm Management",
  ];

  const categoryColorMap = {
    "CROP PRODUCTION": "text-[#3D8B6A]",
    LIVESTOCK: "text-[#B07D2A]",
    PROCESSING: "text-[#2A7AB0]",
    "EQUIPMENT OPERATION": "text-[#8B3D6A]",
    "FARM MANAGEMENT": "text-[#6A3D8B]",
  };

  const contractBgMap = {
    "Seasonal Contract": "bg-[#FFF7E6] text-[#B07D2A]",
    "Full-time": "bg-[rgba(63,125,90,0.1)] text-[#3D8B6A]",
    Contract: "bg-[#EFF5FF] text-[#2A7AB0]",
  };

  const ITEMS_PER_PAGE = 5;

  const formatSalary = (min, max) =>
    `₦${min.toLocaleString()} – ₦${max.toLocaleString()}/month`;

  const filtered = useMemo(() => {
    let data = [...jobsData];

    if (activeCategory !== "All Jobs") {
      data = data.filter(
        (j) => j.category.toLowerCase() === activeCategory.toLowerCase(),
      );
    }

    if (search.trim()) {
      const q = search.toLowerCase();
      data = data.filter(
        (j) =>
          j.title.toLowerCase().includes(q) ||
          j.description.toLowerCase().includes(q) ||
          j.category.toLowerCase().includes(q),
      );
    }

    if (sortBy === "Most Recent") {
      data.sort((a, b) => a.postedDaysAgo - b.postedDaysAgo);
    } else if (sortBy === "Highest Pay") {
      data.sort((a, b) => b.salaryMax - a.salaryMax);
    }

    return data;
  }, [activeCategory, search, sortBy]);

  const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE);
  const paginated = filtered.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE,
  );

  const handleCategoryChange = (cat) => {
    setActiveCategory(cat);
    setCurrentPage(1);
  };

  const handleSearch = (e) => {
    setSearch(e.target.value);
    setCurrentPage(1);
  };

  const postedLabel = (days) => {
    if (days === 0) return "Posted today";
    if (days === 1) return "Posted 1 day ago";
    if (days < 7) return `Posted ${days} days ago`;
    const weeks = Math.floor(days / 7);
    return `Posted ${weeks} week${weeks > 1 ? "s" : ""} ago`;
  };

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
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => handleCategoryChange(cat)}
                    className={` text-xs font-medium px-3 py-1 md:py-2 rounded-md
                      tracking-[0.04em] transition-all duration-200
                      border cursor-pointer font-inter
                      ${
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

            {/* Search Bar */}
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

          {/* ===========================   Results bar     ==================================*/}
          <div className="flex items-center justify-between mt-8 mb-5 font-inter">
            <p className="text-sm text-[#7A7A72]">
              <span className="font-semibold text-[#1A1A17]">
                {filtered.length}
              </span>{" "}
              {filtered.length === 1 ? "job" : "jobs"} available
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

          {/* ==================      Jobs Listing CArds =====================*/}

          <div className="flex flex-col gap-3">
            {paginated.length === 0 ? (
              <div className="py-16 text-center text-sm text-[#7A7A72]">
                No jobs match your search.
              </div>
            ) : (
              paginated.map((job) => (
                <div
                  key={job.id}
                  className="rounded-lg border border-[#E8E2D9] bg-white px-6 py-5 transition-shadow duration-200 hover:shadow-md"
                >
                  <div className="flex flex-col items-start justify-between gap-4 md:flex-row">
                    {/* Left */}
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-center font-inter gap-3.5 mb-2">
                        <span
                          className={`text-xs font-semibold  tracking-[0.06em] ${
                            categoryColorMap[job.category] || "text-[#4A4A42]"
                          }`}
                        >
                          {job.category}
                        </span>
                        <span
                          className={`rounded px-2 py-0.5 text-xs font-medium ${
                            contractBgMap[job.contractType] ||
                            "bg-[#E8E2D9] text-[#4A4A42]"
                          }`}
                        >
                          {job.contractType}
                        </span>
                      </div>

                      <h3 className="text-base md:text-lg font-semibold text-[#1A1A17]">
                        {job.title}
                      </h3>
                      <p className="mt-1.5 font-inter text-xs md:text-sm leading-relaxed text-[#4A4A42] line-clamp-2">
                        {job.description}
                      </p>

                      <div className="mt-3 flex flex-wrap items-center gap-4 text-xs md:text-sm font-inter  text-[#7A7A72]">
                        <span className="flex items-center gap-1">
                          <RiMapPinLine className="w-4 h-4 md:w-4.5 md:h-4.5" />
                          {job.state}
                        </span>
                        <span className="flex items-center gap-1">
                          <GiBanknote className="w-4 h-4 md:w-4.5 md:h-4.5" />
                          {formatSalary(job.salaryMin, job.salaryMax)}
                        </span>
                        {(job.duration || job.positionType) && (
                          <span className="flex items-center gap-1">
                            <FaRegClock className="w-4 h-4 md:w-4.5 md:h-4.5" />
                            {job.duration || job.positionType}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Right */}
                    <div className="flex flex-row items-center justify-between w-full gap-3 md:w-fit font-inter md:items-end md:flex-col shrink-0">
                      <span className="text-xs text-[#9A9A92]">
                        {postedLabel(job.postedDaysAgo)}
                      </span>
                      <button
                        onClick={() =>
                          navigate(`/job-listing-details/${job.id}`)
                        }
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

          {/* ===========================   Pagination     ==================================*/}
          {totalPages > 1 && (
            <div className="flex items-center justify-center gap-1 mt-8">
              <button
                onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                disabled={currentPage === 1}
                className="flex px-3 py-1 items-center justify-center rounded border border-[#D4C9B8] text-[#4A4A42] hover:bg-[#F0EBE3] disabled:opacity-40 disabled:cursor-not-allowed"
              >
                {/* <ChevronLeft size={16} /> */}
                Previous
              </button>
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
                <button
                  key={p}
                  onClick={() => setCurrentPage(p)}
                  className={`flex h-9 w-9 items-center justify-center rounded border text-sm font-medium transition-colors ${
                    p === currentPage
                      ? "border-[#1F4D3A] bg-[#1F4D3A] text-white"
                      : "border-[#D4C9B8] text-[#4A4A42] hover:bg-[#F0EBE3]"
                  }`}
                >
                  {p}
                </button>
              ))}
              <button
                onClick={() =>
                  setCurrentPage((p) => Math.min(totalPages, p + 1))
                }
                disabled={currentPage === totalPages}
                className="flex px-3 py-1 items-center justify-center rounded border border-[#D4C9B8] text-[#4A4A42] hover:bg-[#F0EBE3] disabled:opacity-40 disabled:cursor-not-allowed"
              >
                {/* <ChevronRight size={16} />
                 */}
                Next
              </button>
            </div>
          )}
        </div>
      </section>

      <section className="py-8 mt-5 md:py-10 bg-[#FAF8F4] w-full">
        <div className="w-[90%] md:w-[94%] mx-auto">
          <h4 className="text-[#B07D2A] text-xs font-medium font-inter">
            Job Application Process
          </h4>
          <h2 className="mt-4 text-xl font-bold mb-7 md:text-2xl lg:text-3xl">
            How Worker Placement Works
          </h2>
          <div className="grid grid-cols-1 gap-4 mt-4 md:mt-8 md:grid-cols-2 lg:grid-cols-3 md:gap-6">
            {workPlacementProcess.map((item) => (
              <div
                className="bg-white w-[95%] mx-auto md:w-full py-6 border border-white/40"
                key={item.id}
              >
                <div className="w-[90%] mx-auto ">
                  <h2 className="pb-3.5 md:pb-4 text-base md:text-lg font-medium">
                    {item.title}
                  </h2>
                  <p className="font-inter text-xs md:text-sm text-[#4A4A42] ">
                    {item.description}
                  </p>
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
