import { LuShield } from "react-icons/lu";
import { IoIosArrowRoundForward } from "react-icons/io";
import { HeroSection, LearnCard } from "../components";
import { Hub } from "../assets";
import { articleData } from "../components/DummyData";

const Learn = () => {
  return (
    <div className="w-full">
      <HeroSection
        subtitle="Knowledge Base"
        title="Agricultural Content Hub"
        description="Educational resources, market insights, and practical guides for Nigerian agriculture. Learn from experience and make informed decisions."
      />
      <section className="py-10 md:py-16 bg-white w-full">
        <div className="w-[96%] md:w-[94%] mx-auto">
          <div className="w-full h-64 flex items-center flex-col md:flex-row ">
            <div className="w-full md:w-[50%] py-7 bg-[#1b3325] h-full ">
              <div className="w-[90%] mx-auto">
                <div className="flex items-center gap-2 text-[#B07D2A]">
                  <LuShield className="h-5 w-5" />
                  <h4 className="uppercase text-xs font-inter">
                    Featured Resource
                  </h4>
                </div>
                <h2 className="my-5 md:my-8 text-white text-2xl md:text-3xl lg:text-4xl">
                  Produce by State
                </h2>
                <p className="text-white text-xs md:text-sm font-inter">
                  Explore what grows best in each Nigerian state. Primary crops,
                  climate contexts, and seasonal cycles across all 36 states.
                </p>
                <div className="pt-5 pb-2 flex items-center gap-2 text-[#B07D2A] font-inter cursor-pointer">
                  <p className="text-xs md:text-sm">Explore Regional Guide</p>
                  <IoIosArrowRoundForward className="h-6 w-6" />
                </div>
              </div>
            </div>
            {/* <div className="hidden md:block w-full md:w-[50%] h-full ">
              <img src={Hub} alt="hub-image" className="h-full" />
            </div> */}
            <div className="hidden md:block w-full md:w-[50%] h-full relative">
              <img
                src={Hub}
                alt="hub-image"
                className="h-full w-full object-cover"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/50"></div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-4 md:pb-16 bg-white w-full">
        <div className="w-[96%] md:w-[94%] mx-auto">
          <h2 className="text-xl md:text-2xl lg:text-3xl">Latest Articles</h2>
          <div className="mt-9 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-8 lg:gap-10">
            {articleData.map((item) => (
              <LearnCard key={item.id} {...item} />
            ))}
          </div>
        </div>
      </section>
      <section className="py-10 md:py-16 bg-[#FAF8F4] w-full">
        <div className="w-[96%] md:w-[94%] mx-auto">
          <div className=" flex items-center justify-center flex-col max-w-3xl mx-auto">
            <h4 className="text-center text-[#7A7A72] text-xs md:text-sm">
              Content is provided for educational purposes only. Agricultural
              outcomes vary by region, season, and conditions. HAGROSPHERE does
              not guarantee the accuracy of market data or crop yields. Always
              consult local agricultural experts for specific guidance.
            </h4>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Learn;
