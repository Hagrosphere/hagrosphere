import { FiSearch } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import { HeroSection } from "../components";
import { states, ZONE_THEME } from "../components/DummyData";

const Product = () => {
  return (
    <div className="w-full">
      <HeroSection
        subtitle="Regional Guide"
        title="Produce by State"
        description="Explore what grows best across Nigeria's states. Understand regional agricultural strengths, climate contexts, and seasonal patterns."
      />
      <section className="py-7 md:py-10 bg-white w-full">
        <div className="w-[96%] md:w-[94%] mx-auto">
          <div className="max-w-96">
            <div className="relative w-full">
              {/* Icon */}
              <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-lg" />

              {/* Input */}
              <input
                type="search"
                placeholder="Search by state or region..."
                className="border border-[#E5DDD0] h-7 md:h-10 w-full rounded-lg pl-10 pr-3 outline-none font-inter text-xs md:text-sm"
              />
            </div>
            <p className="mt-2 text-[#7A7A72] font-inter text-xs md:text-sm  ">
              showing 12 of 12 states
            </p>
          </div>
          <div className="mt-10 w-full relative">
            {/* VERTICAL DIVIDER */}
            <div className="hidden md:block absolute left-1/2 top-0 h-full w-px font-bold bg-[#D4A24C] transform -translate-x-1/2"></div>
            <div className="grid md:grid-cols-2 gap-12 md:gap-20">
              {states.map((item) => {
                const theme = ZONE_THEME[item?.zone];

                return (
                  <div
                    key={item.id}
                    className="w-full border-b border-b-[#E5DDD0] pb-3"
                  >
                    <div className="w-[92%] mx-auto">
                      {/* Header */}
                      <div className="flex items-start justify-between">
                        <div>
                          <h3 className="font-semibold text-sm md:text-base">
                            {item.name}
                          </h3>

                          <div className="flex items-center gap-1 text-[#7A7A72] mt-1 text-xs md:text-sm font-inter pb-4">
                            <IoLocationOutline />
                            <p className="capitalize">{item.zone}</p>
                          </div>
                        </div>

                        {/* Zone Badge */}
                        <div
                          className={`${theme?.badgeBg} ${theme?.badgeBorder} border px-2`}
                        >
                          <h4
                            className={`${theme?.badgeText} uppercase text-[10px] font-inter py-1`}
                          >
                            {item.zone}
                          </h4>
                        </div>
                      </div>

                      {/* Crops Section */}
                      <div className="mt-3 mb-3">
                        {/* PRIMARY */}
                        <div>
                          <h4 className="text-[#7A7A72] uppercase font-inter text-[10px] md:text-xs mb-2">
                            primary
                          </h4>
                          <div className="flex items-center gap-2 flex-wrap">
                            {item.primary.map((crop, index) => (
                              <div
                                key={index}
                                className="bg-[#1A3325] py-1 px-2"
                              >
                                <p className="text-white text-[10px] md:text-xs font-inter">
                                  {crop}
                                </p>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* SECONDARY */}
                        <div className="mt-4">
                          <h4 className="text-[#7A7A72] uppercase font-inter text-[10px] md:text-xs mb-2">
                            secondary
                          </h4>
                          <div className="flex items-center gap-2 flex-wrap">
                            {item.secondary.map((crop, index) => (
                              <div
                                key={index}
                                className="bg-[#F4EFE6] border border-[#E5DDD0] py-1 px-2"
                              >
                                <p className="text-[10px] md:text-xs font-inter">
                                  {crop}
                                </p>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* EMERGING */}
                        <div className="mt-4">
                          <h4 className="text-[#7A7A72] uppercase font-inter text-[10px] md:text-xs mb-2">
                            emerging
                          </h4>
                          <div className="flex items-center gap-2 flex-wrap">
                            {item.emerging.map((crop, index) => (
                              <div
                                key={index}
                                className="bg-white border border-[#B07D2A] py-1 px-2"
                              >
                                <p className="text-[10px] md:text-xs text-[#B07D2A] font-inter">
                                  {crop}
                                </p>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Divider */}
                        <hr className="border border-[#E5DDD0] my-6" />

                        {/* Season Info */}
                        <div className="grid grid-cols-3 gap-3">
                          {item.season.map((s) => (
                            <div key={s.id}>
                              <h4 className="text-[#7A7A72] uppercase font-inter text-[10px] md:text-xs mb-2">
                                {s.name}
                              </h4>
                              <p className="text-[10px] md:text-xs text-[#7A7A72] font-inter">
                                {s.description}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="mt-8 md:mt-14 w-full py-4 bg-[#FAF8F4] border border-[#E5DDD0]">
            <div className="w-[96%] mx-auto">
              <p className=" text-[#7A7A72] font-inter text-xs leading-5">
                <span className="text-[#1A1A17]">Disclaimer:</span> This
                information is based on general regional agricultural data.
                Actual crop suitability varies based on specific location, soil
                type, micro-climate, and farming practices. This is educational
                content only and should not be used as the sole basis for
                agricultural decisions. Consult local agricultural extension
                officers for specific guidance.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Product;
