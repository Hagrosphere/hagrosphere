import { HeroSection, SolutionCard } from "../components";
import { processData, solutionsData } from "../components/DummyData";

const Services = () => {
  return (
    <div className="w-full">
      <HeroSection
        subtitle="SERVICES"
        title="Three Core Coordination Services"
        description="Each service addresses a specific challenge faced by Nigerian farmers, workers, and buyers. All follow our verified, transparent coordination process."
      />
      <section className="bg-[#F9F9F9] py-3 md:py-12">
        <div className="max-w-6xl mx-auto px-4">
          {solutionsData.map((item, index) => (
            <SolutionCard key={item.id} item={item} index={index} />
          ))}
        </div>
        <div className=""></div>
      </section>
      <section className="py-12 md:py-16 bg-[#E5DDD0] w-full">
        <div className="w-[96%] md:w-[94%] mx-auto">
          <h4 className="text-[#B07D2A] text-xs font-medium font-inter">
            Universal Process
          </h4>
          <h2 className="mt-4 mb-7 text-xl md:text-2xl lg:text-3xl font-bold">
            All Services Follow the Same Structured Process
          </h2>
          <div className="mt-4 md:mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-0.5">
            {processData.map((item) => (
              <div
                className="bg-white w-[95%] mx-auto md:w-full py-6 border border-white/40"
                key={item.id}
              >
                <div className="w-[90%] mx-auto ">
                  <h4 className="uppercase text-[#B07D2A] text-xs font-medium fontin">
                    {item.tag}
                  </h4>
                  <h2 className="my-4 md:my-4 text-base md:text-lg font-medium">
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

export default Services;
