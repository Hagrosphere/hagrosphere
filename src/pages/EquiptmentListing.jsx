import { useState, useMemo } from "react";
import { FiSearch } from "react-icons/fi";

import { EquipmentCard, HeroSection } from "../components";
import {
  equipmentData,
  equipmentVerificationProcess,
} from "../components/DummyData";

const ITEMS_PER_PAGE = 9;

const TAGS = [
  "All Equipment",
  "Tractors",
  "Harvesters",
  "Planters",
  "Irrigation",
  "Processing",
];

const EquiptmentListing = () => {
  const [activeTag, setActiveTag] = useState("All Equipment");
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const handleViewDetails = (item) => {
    console.log("Selected:", item);
  };

  // Filter by tag and search query
  const filteredData = useMemo(() => {
    return equipmentData.filter((item) => {
      const matchesTag =
        activeTag === "All Equipment" ||
        item.category?.toLowerCase() === activeTag.toLowerCase();

      const query = searchQuery.toLowerCase();
      const matchesSearch =
        !query ||
        item.name?.toLowerCase().includes(query) ||
        item.description?.toLowerCase().includes(query) ||
        item.category?.toLowerCase().includes(query);

      return matchesTag && matchesSearch;
    });
  }, [activeTag, searchQuery]);

  // Pagination
  const totalPages = Math.max(
    1,
    Math.ceil(filteredData.length / ITEMS_PER_PAGE),
  );
  const paginatedData = filteredData.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE,
  );

  // Reset to page 1 when filter or search changes
  const handleTagChange = (tag) => {
    setActiveTag(tag);
    setCurrentPage(1);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1);
  };

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) setCurrentPage(page);
  };

  // Generate page number array
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="w-full">
      <HeroSection
        subtitle="EQUIPMENT ACCESS"
        title="Book Agricultural Equipment"
        description="Browse verified agricultural machinery available for coordinated access. All equipment undergoes inspection and verification before listing."
      />
      <section className="py-6 bg-white md:py-8">
        <div className="w-[96%] md:w-[94%] mx-auto">
          <div className="flex items-center flex-col-reverse gap-2 md:gap-0 md:flex-row justify-between md:border-b border-b-[#E5DDD0] md:pb-1">
            {/* Filter Tags */}
            <div className="w-full">
              <div className="grid grid-cols-3 gap-2 mt-6 mb-8 md:flex md:flex-wrap">
                {TAGS.map((tag) => (
                  <button
                    key={tag}
                    onClick={() => handleTagChange(tag)}
                    className={`
                      text-xs font-medium px-3 py-1 md:py-2 rounded-md
                      tracking-[0.04em] transition-all duration-200
                      border cursor-pointer font-inter
                      ${
                        activeTag === tag
                          ? "bg-bg-btn-primary border-[#5C8A3A] text-white"
                          : "bg-[#FAF8F3] border-[#D9D4C7] text-[#5B5B5B] hover:border-[#5C8A3A] hover:text-[#2F4F2F]"
                      }
                    `}
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>

            {/* Search Bar */}
            <div className="flex items-end w-full justify-normal md:justify-end">
              <div className="relative w-full md:w-78 font-inter">
                <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-[#7A7A72]" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={handleSearchChange}
                  placeholder="Search equipment by title or keyword..."
                  className="w-full rounded border border-[#E5DDD0] pl-10 pr-4 py-1.5 text-sm text-[#7A7A72] placeholder:text-[#7A7A72] outline-0"
                />
              </div>
            </div>
          </div>

          <div className="my-4 md:my-8">
            {/* Results count */}
            <p className="text-sm text-[#7A7A72] mb-4">
              Showing {paginatedData.length} of {filteredData.length} equipment
            </p>

            {/* Equipment Grid */}
            {paginatedData.length > 0 ? (
              <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
                {paginatedData.map((item, idx) => (
                  <EquipmentCard
                    key={`${item.name}-${idx}`}
                    {...item}
                    onViewDetails={handleViewDetails}
                  />
                ))}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center py-16 text-center">
                <p className="text-[#5B5B5B] text-base font-medium">
                  No equipment found.
                </p>
                <p className="text-[#7A7A72] text-sm mt-1">
                  Try adjusting your search or filter.
                </p>
              </div>
            )}

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex flex-wrap items-center justify-center gap-2 mt-12">
                <button
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                  className="rounded border border-[#E5DDD0] px-4 py-1 text-sm text-[#7A7A72] disabled:opacity-40 disabled:cursor-not-allowed hover:border-[#5C8A3A] transition-colors"
                >
                  Previous
                </button>

                {pageNumbers.map((page) => (
                  <button
                    key={page}
                    onClick={() => handlePageChange(page)}
                    className={`h-8 w-8 rounded text-sm md:text-base transition-colors
                      ${
                        currentPage === page
                          ? "bg-[#1F4D3A] text-white"
                          : "border border-[#E5DDD0] text-[#7A7A72] hover:border-[#5C8A3A]"
                      }
                    `}
                  >
                    {page}
                  </button>
                ))}

                <button
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className="rounded border border-[#E5DDD0] px-4 py-1 text-sm text-[#7A7A72] disabled:opacity-40 disabled:cursor-not-allowed hover:border-[#5C8A3A] transition-colors"
                >
                  Next
                </button>
              </div>
            )}
          </div>
        </div>
      </section>
      <section className="py-8 mt-5 md:py-10 bg-[#FAF8F4] w-full">
        <div className="w-[90%] md:w-[94%] mx-auto">
          <h4 className="text-[#B07D2A] text-xs font-medium font-inter">
            Equipment Verification
          </h4>
          <h2 className="mt-4 text-xl font-bold mb-7 md:text-2xl lg:text-3xl">
            All Equipment Is Verified
          </h2>
          <div className="grid grid-cols-1 gap-4 mt-4 md:mt-8 md:grid-cols-2 lg:grid-cols-3 md:gap-6">
            {equipmentVerificationProcess.map((item) => (
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

      <section className="py-12 text-center text-white bg-bg-btn-primary">
        <h3 className="text-lg font-semibold md:text-xl lg:text-2xl ">
          Need Equipment Not Listed Here?
        </h3>
        <p className="max-w-xl mx-auto my-5 text-xs leading-5 text-center md:my-8 font-inter md:text-sm lg:text-base md:leading-7">
          Submit an enquiry detailing your equipment needs and we'll work to
          coordinate access with verified equipment owners in your region.
        </p>
        <button
          className="px-6 py-2 text-sm rounded-md cursor-pointer bg-bg-btn font-inter"
          // onClick={() => navigate()}
        >
          Submit Equipment Enquiry
        </button>
      </section>
    </div>
  );
};

export default EquiptmentListing;
