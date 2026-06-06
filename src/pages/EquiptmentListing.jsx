import { useState } from "react";
import { FiSearch } from "react-icons/fi";

import { EquipmentCard, HeroSection } from "../components";
import { equipmentVerificationProcess } from "../components/DummyData";
import { useEquipment } from "../features/equipment/hooks/useEquipment";

const EquiptmentListing = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const { equipment, categories, meta, setFilters, setPage, isLoading } = useEquipment();
  const [activeTag, setActiveTag] = useState("All Equipment");

  const allCategories = ["All Equipment", ...categories.map((c) => c.name)];

  const handleViewDetails = (item) => {
    console.log("Selected:", item);
  };

  const handleTagChange = (cat) => {
    setActiveTag(cat);
    if (cat === "All Equipment") {
      setFilters({ category: undefined });
    } else {
      const found = categories.find((c) => c.name === cat);
      if (found) setFilters({ category: found.slug });
    }
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    setFilters({ search: e.target.value || undefined });
  };

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
                {allCategories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => handleTagChange(cat)}
                    className={`text-xs font-medium px-3 py-1 md:py-2 rounded-md tracking-[0.04em] transition-all duration-200 border cursor-pointer font-inter ${
                      activeTag === cat
                        ? "bg-bg-btn-primary border-[#5C8A3A] text-white"
                        : "bg-[#FAF8F3] border-[#D9D4C7] text-[#5B5B5B] hover:border-[#5C8A3A] hover:text-[#2F4F2F]"
                    }`}
                  >
                    {cat}
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
              <span className="font-semibold text-[#1A1A17]">{meta?.total ?? equipment.length}</span> equipment available
            </p>

            {/* Equipment Grid */}
            {isLoading ? (
              <div className="flex justify-center items-center h-40">
                <div className="border-t-4 border-b-4 rounded-full animate-spin h-10 w-10 border-bg-btn-primary" />
              </div>
            ) : equipment.length > 0 ? (
              <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
                {equipment.map((item) => (
                  <EquipmentCard
                    key={item.id}
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
        >
          Submit Equipment Enquiry
        </button>
      </section>
    </div>
  );
};

export default EquiptmentListing;
