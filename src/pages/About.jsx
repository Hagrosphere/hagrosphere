import { AboutFallback } from "../assets";
import { HeroSection } from "../components";
import { FiEye } from "react-icons/fi";
import { BsBullseye } from "react-icons/bs";
import { useEffect, useState } from "react";
import { LuShield } from "react-icons/lu";
import { isNotData, ourValueData, whoWeServe } from "../components/DummyData";

const About = () => {
  const [index, setIndex] = useState(0);

  const commitments = [
    "We coordinate real agricultural services for real participants who understand the inherent risks of farming.",
    "We prioritize transparency, trust, and structured agricultural engagement.",
    "We connect farmers, workers, and buyers through verified systems.",
    "We eliminate speculation by enabling real, data-driven participation.",
    "We build a reliable ecosystem for sustainable agricultural growth.",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % commitments.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full">
      <HeroSection
        subtitle="About Us"
        title="Building Productive Engagement in Nigerian Agriculture"
        description=" Driving transparency, alignment, and structured engagement in
            Nigerian agriculture. Not just for investing for coordinating and
            enhancing agricultural value."
      />
      <section className="w-full">
        <div className="bg-white py-8 md:py-16">
          <div className="max-w-6xl mx-auto px-4 relative">
            {/* Vertical Divider */}
            <div className="hidden md:block absolute left-1/2 top-0 h-full w-px bg-[#D4A24C] transform -translate-x-1/2"></div>

            <div className="grid md:grid-cols-2 gap-12 md:gap-20">
              {/* LEFT - Vision */}
              <div className="space-y-4 md:space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-md bg-[#1A3325] flex items-center justify-center text-white">
                    <FiEye />
                  </div>
                  <p className="text-xs font-medium text-[#B07D2A] uppercase font-inter">
                    Our Vision
                  </p>
                </div>

                <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-[#1A1A1A]">
                  Verification Replacing Speculation
                </h2>

                <p className="text-xs md:text-sm text-gray-600 leading-relaxed font-inter">
                  We envision a Nigerian agricultural sector where trust,
                  verification, and structured coordination replace speculation
                  and empty promises.
                </p>

                <p className="text-xs md:text-sm text-gray-600 leading-relaxed font-inter">
                  Farmers access resources they need. Workers find reliable
                  opportunities. Buyers receive consistent quality. The diaspora
                  participates with clarity. All through transparent, verified
                  processes.
                </p>
              </div>

              {/* RIGHT - Mission */}
              <div className="space-y-4 md:space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-md bg-[#1A3325] flex items-center justify-center text-white">
                    <BsBullseye />
                  </div>
                  <p className="text-xs font-medium text-[#B07D2A] uppercase font-inter">
                    Our Mission
                  </p>
                </div>

                <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-[#1A1A1A]">
                  Transparency Over Promises
                </h2>

                <p className="text-xs md:text-sm text-gray-600 leading-relaxed font-inter">
                  Hagrosphere improves transparency, coordination, and
                  structured participation in Nigerian agriculture. We connect
                  farmers, workers, and buyers through verified processes that
                  prioritise trust over promises.
                </p>

                <p className="text-xs md:text-sm text-gray-600 leading-relaxed font-inter">
                  We are not an investment platform. We coordinate real
                  agricultural services for real participants who understand the
                  inherent risks of farming.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-2 md:mt-8">
          <div
            className="w-full h-[20vh] md:h-[50vh] lg:h-[60vh] bg-cover bg-center relative flex items-start text-white"
            style={{
              backgroundImage: `url(${AboutFallback})`,
            }}
          >
            <div className="absolute inset-0 bg-black/50"></div>
            <div className="relative z-10 w-[90%] mx-auto mt-5 md:mt-8">
              <h4 className="text-[#B07D2A] font-inter text-xs md:text-sm lg:text-base uppercase">
                Our Commitment
              </h4>
              <h2 className="my-2 md:my-4 max-w-3xs md:max-w-96 leading-5 md:leading-10 italic text-base md:text-lg lg:text-2xl">
                "{commitments[index]}"
              </h2>
              <div className="mt-4 md:mt-0 w-12 h-0.5 bg-[#B07D2A]"></div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-12 md:py-16 bg-[#FAF8F4] w-full">
        <div className="w-[96%] md:w-[94%] mx-auto">
          <div className="flex items-center justify-center flex-col">
            <h2 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold mb-6">
              Our Values
            </h2>
          </div>
          <div className="mt-5 md:mt-8 w-[97%] md:w-[95%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-0.5">
            {ourValueData.map((item) => (
              <div
                className="bg-white w-[95%] mx-auto md:w-full py-4"
                key={item.id}
              >
                <div className="w-[90%] mx-auto">
                  {item.icon}
                  <h2 className="my-4 md:my-6 text-base md:text-lg font-medium">
                    {item.title}
                  </h2>
                  <p className="font-inter text-xs md:text-sm text-[#4A4A42]">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-12 md:py-16 bg-bg-main w-full">
        <div className="w-[96%] md:w-[94%] mx-auto">
          <div className="flex items-center justify-center flex-col">
            <h2 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold mb-6 text-white">
              What HAGROSPHERE Is <span className="italic">Not</span>
            </h2>
            <p className="max-w-lg text-center text-white font-inter text-xs md:text-base lg:text-base ">
              We believe in setting the record straight. Transparency begins
              with being clear about our boundaries.
            </p>
          </div>
          <div className="mt-5 md:mt-8 w-[97%] md:w-[95%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-0.5">
            {isNotData.map((item) => (
              <div
                className="bg-[#31473b] w-[95%] mx-auto md:w-full py-4 border border-white/40"
                key={item.id}
              >
                <div className="w-[90%] mx-auto text-white">
                  <div className="h-2 w-2 bg-[#B07D2A] "></div>
                  <h2 className="my-4 md:my-6 text-base md:text-lg font-medium">
                    {item.title}
                  </h2>
                  <p className="font-inter text-xs md:text-sm ">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-12 md:py-16 bg-white w-full">
        <div className="w-[96%] md:w-[94%] mx-auto">
          <div className="flex items-center justify-center flex-col">
            <h2 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold mb-6 ">
              Who We Serve
            </h2>
          </div>
          <div className="mt-5 md:mt-8 w-[97%] md:w-[95%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-0.5">
            {whoWeServe.map((item) => (
              <div
                className="bg-[#FAF8F4] w-[95%] mx-auto md:w-full py-4"
                key={item.id}
              >
                <div className="w-[90%] mx-auto ">
                  <h2 className="mb-4 md:mb-6 text-base md:text-lg font-medium">
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

export default About;
