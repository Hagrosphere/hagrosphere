import { LuShield } from "react-icons/lu";
import { IoIosArrowRoundForward } from "react-icons/io";
import { HeroSection, LearnCard } from "../components";
import { Hub } from "../assets";
import { articleData } from "../components/DummyData";
import { useState } from "react";

const Learn = () => {
  const [activeTag, setActiveTag] = useState("ALL");
  const filtered =
    activeTag === "ALL"
      ? articleData
      : articleData.filter((a) => a.tag === activeTag);
  const allTags = [
    "ALL",
    ...Array.from(new Set(articleData.map((a) => a.tag))),
  ];
  return (
    <div className="w-full mt-2">
      <HeroSection
        subtitle="Knowledge Base"
        title="Agricultural Content Hub"
        description="Educational resources, market insights, and practical guides for Nigerian agriculture. Learn from experience and make informed decisions."
      />
      <section className="w-full py-10 bg-white md:py-16">
        <div className="w-[96%] md:w-[94%] mx-auto">
          <div className="flex flex-col items-center w-full h-64 md:flex-row ">
            <div className="w-full md:w-[50%] py-7 bg-[#1b3325] h-full ">
              <div className="w-[90%] mx-auto">
                <div className="flex items-center gap-2 text-[#B07D2A]">
                  <LuShield className="w-5 h-5" />
                  <h4 className="text-xs uppercase font-inter">
                    Featured Resource
                  </h4>
                </div>
                <h2 className="my-5 text-2xl text-white md:my-8 md:text-3xl lg:text-4xl">
                  Produce by State
                </h2>
                <p className="text-xs text-white md:text-sm font-inter">
                  Explore what grows best in each Nigerian state. Primary crops,
                  climate contexts, and seasonal cycles across all 36 states.
                </p>
                <div className="pt-5 pb-2 flex items-center gap-2 text-[#B07D2A] font-inter cursor-pointer">
                  <p className="text-xs md:text-sm">Explore Regional Guide</p>
                  <IoIosArrowRoundForward className="w-6 h-6" />
                </div>
              </div>
            </div>

            <div className="hidden md:block w-full md:w-[50%] h-full relative">
              <img
                src={Hub}
                alt="hub-image"
                className="object-cover w-full h-full"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/50"></div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-4 bg-white md:pb-16">
        <div className="w-[96%] md:w-[94%] mx-auto">
          {/* Heading */}
          <h2 className="text-xl font-semibold md:text-2xl lg:text-3xl">
            Latest Articles
          </h2>

          <div className="flex flex-wrap gap-2 mt-6 mb-8 ">
            {allTags.map((tag) => (
              <button
                key={tag}
                onClick={() => setActiveTag(tag)}
                className={`
            text-xs font-medium px-3 py-1 md:py-1.5 rounded-full
            tracking-[0.04em] transition-all duration-200
            border cursor-pointer
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

          {/* Articles */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-10 mt-9">
            {filtered.map((item) => (
              <LearnCard key={item.id} {...item} />
            ))}
          </div>
        </div>
      </section>
      <section className="py-10 md:py-16 bg-[#FAF8F4] w-full">
        <div className="w-[96%] md:w-[94%] mx-auto">
          <div className="flex flex-col items-center justify-center max-w-3xl mx-auto ">
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
