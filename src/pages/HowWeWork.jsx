import { LuShield } from "react-icons/lu";
import { HeroSection } from "../components";
import { phases, verificationProcess } from "../components/DummyData";

const HowWeWork = () => {
  return (
    <div className="w-full">
      <HeroSection
        subtitle="Process & Verification"
        title="How We Work"
        description="Our structured verification and coordination processes are designed to build trust at every step. Transparency is not optional, it's foundational."
      />
      <section className="py-8 md:py-10 bg-white w-full">
        <div className="w-[96%] md:w-[94%] mx-auto">
          <div className="">
            <h4 className="font-inter text-[#B07D2A] text-xs md:text-sm">
              Core Process
            </h4>
            <h2 className="font-bold text-xl md:text-2xl lg:text-3xl mt-2 md:mt-2.5">
              Three Phases of Coordination
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-0.5 mt-6 md:mt-10">
            {phases.map((item) => (
              <div className="w-full py-8 bg-[#FAF8F4]" key={item.id}>
                <div className="w-[90%] mx-auto">
                  <div className="w-full flex items-center justify-between">
                    <h4 className="text-[#B07D2A] text-xl md:text-2xl lg:text-3xl font-bold">
                      0{item.id}
                    </h4>
                    <div className="">{item.icon}</div>
                  </div>
                  <h2 className="py-5 text-base md:text-lg lg:text-xl font-medium">
                    {item.title}
                  </h2>
                  <p className="text-[#4A4A42] text-xs md:text-sm font-inter">
                    {item.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-8 md:py-10 bg-white w-full">
        <div className="w-[96%] md:w-[94%] mx-auto">
          <div className="">
            <h4 className="font-inter text-[#B07D2A] text-xs md:text-sm">
              Verification Protocols
            </h4>
            <h2 className="font-bold text-xl md:text-2xl lg:text-3xl mt-2 md:mt-2.5">
              How We Verify Participants
            </h2>
          </div>
          <div className="mt-7 md:mt-10 flex flex-col gap-y-6 md:gap-y-10">
            {verificationProcess.map((item) => (
              <div className=" border border-[#E5DDD0]" key={item.id}>
                <div className="bg-[#FAF8F4] ">
                  <div className="w-[95%] py-2 mx-auto flex items-center gap-3">
                    {item.icon}
                    <h4 className="font-medium text-lg md:text-xl">
                      {item.title}
                    </h4>
                  </div>
                </div>
                <div className="">
                  {item.content.map((data) => (
                    <div
                      className="border-b border-b-[#E5DDD0] py-2 md:py-3"
                      key={data.id}
                    >
                      <div className="w-[95%] mx-auto font-inter">
                        <h4 className="font-medium text-sm md:text-base">
                          {data.title}
                        </h4>
                        <p className="text-[#4A4A42] text-xs md:text-sm mt-1">
                          {data.detail}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowWeWork;
