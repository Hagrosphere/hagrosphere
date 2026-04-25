import { useParams } from "react-router";
import { HeroSection } from "../components";
import { IoWarningOutline } from "react-icons/io5";
import { FiCheckCircle } from "react-icons/fi";
import { IoMdTime } from "react-icons/io";
import { solutionsData } from "../components/DummyData";

const ServiceDetails = () => {
  const { slug } = useParams();
  const solution = solutionsData.find((item) => item.slug === slug);
  if (!solution) return <div>Not found</div>;

  const { title, subtitle, image, details, icon } = solution;

  return (
    <div className="w-full">
      <HeroSection subtitle="SERVICES" title={title} description={subtitle} />

      <section className="bg-[#F8F8F8] py-8 md:py-16">
        <div className="max-w-6xl mx-auto px-4 flex flex-col lg:flex-row gap-8 items-center">
          <div className="flex-1">
            <div className="flex items-center gap-x-3 mb-3">
              <div className="bg-[#1A3325] text-white rounded-md flex items-center justify-center w-6 h-6 md:h-9 md:w-9">
                {icon}
              </div>
              <p className="text-[#B07D2A] text-xs font-medium font-inter uppercase ">
                Service Overview
              </p>
            </div>
            <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold mt-4  mb-4 md:mb-5 max-w-lg  leading-7 md:leading-10">
              {details.introTitle}
            </h2>
            <p className="text-[#4A4A42] text-xs md:text-sm font-inter">
              {details.introText}
            </p>
            <p className="mt-2 text-[#4A4A42] text-xs md:text-sm font-inter">
              {details.introSubText}
            </p>
          </div>

          <div className="flex-1">
            <img
              src={image}
              alt={title}
              className="w-full h-64 md:h-72 object-cover rounded-xl"
            />
          </div>
        </div>
      </section>
      <div className="">
        {details.whoFor && (
          <section className="py-3 md:py-12 bg-[#FAF8F4]">
            <div className="max-w-6xl mx-auto px-4">
              <h4 className="my-4 text-[#B07D2A] uppercase text-sm font-medium font-inter">
                Eligibility
              </h4>
              <h3 className="text-xl md:text-2xl lg:text-3xl font-bold mb-6 md:mb-9">
                Who This Service Is For
              </h3>

              <div className="grid grid-cols-1  md:grid-cols-3 gap-4 md:gap-6">
                {details.whoFor.map((item) => (
                  <div key={item.id} className="py-6 bg-white">
                    <div className="w-[90%] mx-auto">
                      <h3 className="text-sm md:text-base lg:text-lg font-semibold mb-3.5">
                        {item.title}
                      </h3>
                      <p className="font-inter text-xs md:text-sm">
                        {item.detail}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}
      </div>
      {/* TWO SIDED (ONLY FOR JOB) */}
      {details.twoSided && (
        <section className="py-3 md:py-12 bg-[#FAF8F4]">
          <div className="w-[88%] mx-auto">
            <h4 className="my-4 text-[#B07D2A] uppercase text-sm font-medium font-inter">
              Eligibility
            </h4>
            <h3 className="text-xl md:text-2xl lg:text-3xl font-bold mb-6 md:mb-9">
              Two-Sided Service
            </h3>
          </div>
          <div className="w-[88%] mx-auto grid  md:grid-cols-2 gap-3.5 md:gap-0.5">
            {details.twoSided.map((item) => (
              <div className="bg-white py-6 w-full" key={item.id}>
                <div className="w-[90%] mx-auto">
                  <h4 className="font-inter text-xs md:text-sm text-[#B07D2A]">
                    {item.title}
                  </h4>
                  <h4 className="font-medium text-base md:text-lg lg:text-xl my-4">
                    {item.subtitle}
                  </h4>
                  <ul className="space-y-2 text-sm">
                    {item.options.map((option) => (
                      <li
                        key={option.id}
                        className="flex items-center gap-2 text-xs md:text-sm font-inter"
                      >
                        <div className="w-1.5 h-1.5 bg-bg-btn"></div>
                        {option}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* HOW IT WORKS */}

      {details.howItWorks && (
        <section className="py-12 bg-[#F8F8F8]">
          <div className="max-w-6xl mx-auto px-4">
            <h4 className="my-4 text-[#B07D2A] uppercase text-sm font-medium font-inter">
              process
            </h4>
            <h3 className="text-xl md:text-2xl lg:text-3xl font-bold mb-6 md:mb-8">
              How It Works
            </h3>

            <div className="">
              {details.howItWorks.map((item) => (
                <div
                  className="flex items-center gap-4 md:gap-6 pb-3 border-b border-b-[#E5DDD0] mb-4 md:mb-6"
                  key={item.id}
                >
                  <h4 className="text-[#B07D2A] font-inter text-base md:text-lg">
                    0{item.id}
                  </h4>
                  <div className="">
                    <h2 className="font-medium text-base md:text-lg mb-1">
                      {item.title}
                    </h2>
                    <p className="font-inter text-xs md:text-sm">
                      {item.detail}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* HOW IT WORKS FOR FARM JOB AGENT */}
      {details.twoSidedHowItWorks && (
        <section className="py-12 bg-white">
          <div className="max-w-6xl mx-auto px-4 flex items-start flex-col md:flex-row gap-3 md:gap-10">
            {details.twoSidedHowItWorks.map((item) => (
              <div className="w-full md:w-[50%]" key={item.id}>
                <h4 className="mb-2.5 text-[#B07D2A] uppercase text-sm font-medium font-inter">
                  {item.topTag}
                </h4>
                <h3 className="text-lg md:text-xl lg:text-2xl font-bold mb-6 md:mb-8">
                  {item.title}
                </h3>
                <div className="">
                  {item.howItWorks.map((item) => (
                    <div
                      className="flex items-center gap-4 md:gap-6 pb-3 border-b border-b-[#E5DDD0] mb-4 md:mb-6"
                      key={item.id}
                    >
                      <h4 className="text-[#B07D2A] font-inter text-base md:text-lg">
                        0{item.id}
                      </h4>
                      <div className="">
                        <h2 className="font-medium text-base md:text-lg mb-1">
                          {item.title}
                        </h2>
                        <p className="font-inter text-xs ">{item.detail}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* PROCESS DATA FOR FARM EQUIPMENT */}
      {details.processDetail && (
        <section className="py-6 md:py-12 bg-[#FAF8F4]">
          <div className="max-w-6xl mx-auto px-4 flex items-start flex-col md:flex-row gap-10">
            <div className="w-full md:w-[50%]">
              <div className="mb-6 md:mb-9">
                <h4 className="mb-2.5 text-[#B07D2A] uppercase text-sm font-medium font-inter">
                  Requirements
                </h4>
                <h3 className="text-lg md:text-xl lg:text-2xl font-bold">
                  Eligibility Criteria
                </h3>
              </div>
              <div className="flex flex-col gap-y-3">
                {details.processDetail.requirement.map((item, index) => (
                  <div className="flex items-center gap-3 md:gap-4" key={index}>
                    <FiCheckCircle className="h-4 w-4 md:h-5 md:w-5 text-[#3D8B6A]" />
                    <p className="text-[#4A4A42] text-xs md:text-sm font-inter">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className="w-full md:w-[50%]">
              <div className="mb-6 md:mb-9">
                <h4 className="mb-2.5 text-[#B07D2A] uppercase text-sm font-medium font-inter">
                  Timeline
                </h4>
                <h3 className="text-lg md:text-xl lg:text-2xl font-bold">
                  Expected Timeframes
                </h3>
              </div>
              <div className="flex flex-col gap-y-5 md:gap-y-7">
                {details.processDetail.timeline.map((item) => (
                  <div
                    className="flex items-start gap-3 md:gap-4 border-b border-b-[#E5DDD0] pb-5"
                    key={item.id}
                  >
                    <IoMdTime className="h-4 w-4 md:h-5 md:w-5 text-[#3D8B6A]" />
                    <div className="">
                      <h5 className="flex items-center gap-2.5 font-inter text-sm">
                        <span className="font-semibold">{item.title}</span>
                        <span className="text-[#B07D2A]">{item.time}</span>
                      </h5>
                      <p className="text-[#4A4A42] text-xs md:text-sm font-inter">
                        {item.detail}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* SERVICE SCOOPE FOR MARKET ACCESS */}
      {details.serviceScope && (
        <section className="py-12 bg-[#E5DDD0]">
          <div className="max-w-6xl mx-auto px-4 flex items-start flex-col md:flex-row gap-3 md:gap-10">
            <div className="w-full md:w-[50%]">
              <div className="mb-6 md:mb-9">
                <h4 className="mb-2.5 text-[#B07D2A] uppercase text-sm font-medium font-inter">
                  Supported Produce
                </h4>
                <h3 className="text-lg md:text-xl lg:text-2xl font-bold">
                  Currently Coordinated Crops
                </h3>
              </div>
              <div className="">
                {details.serviceScope.supportedProduce.map((item) => (
                  <div
                    className="flex items-start gap-2 md:gap-6 font-inter border-b border-b-[#7A7A72] pb-4 mb-2"
                    key={item.id}
                  >
                    <h3 className="font-semibold text-[#1A1A17] text-sm md:text-base">
                      {item.title}
                    </h3>
                    <div className="">
                      <p className="flex items-center  gap-x-2  flex-row">
                        {item.produce.map((item, i) => (
                          <p
                            className="text-[#4A4A42] text-xs md:text-sm "
                            key={i}
                          >
                            {item}
                            {i !== item?.produce?.length - 1 && ", "}
                          </p>
                        ))}
                      </p>
                      <p className="text-[#7A7A72] text-xs md:text-sm mt-0.5">
                        Active buyer networks in most regions
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="w-full md:w-[50%]">
              <div className="mb-6 md:mb-9">
                <h4 className="mb-2.5 text-[#B07D2A] uppercase text-sm font-medium font-inter">
                  Requirements
                </h4>
                <h3 className="text-lg md:text-xl lg:text-2xl font-bold">
                  Eligibility Criteria
                </h3>
              </div>
              <div className="flex flex-col gap-y-3">
                {details.serviceScope.requirement.map((item, index) => (
                  <div className="flex items-center gap-3 md:gap-4" key={index}>
                    <FiCheckCircle className="h-4 w-4 md:h-5 md:w-5 text-[#3D8B6A]" />
                    <p className="text-[#4A4A42] text-xs md:text-sm font-inter">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* REQUIREMENT FOR FARM JOB AGENT  */}

      {details.requirements && (
        <section className="py-12 bg-[#FAF8F4]">
          <div className="max-w-6xl mx-auto px-4 flex items-start flex-col md:flex-row gap-3 md:gap-10">
            <div className="flex items-start flex-col gap-6 md:gap-8 md:flex-row w-full">
              {details.requirements.map((item) => (
                <div className="mb-6 md:mb-9 w-full md:w-[50%] " key={item.id}>
                  <h4 className="mb-2.5 text-[#B07D2A] uppercase text-sm font-medium font-inter">
                    {item.topTag}
                  </h4>
                  <h3 className="text-lg md:text-xl lg:text-2xl font-bold">
                    {item.title}
                  </h3>
                  <div className="flex flex-col gap-y-3 mt-5 md:mt-8">
                    {item.requirementList.map((item, index) => (
                      <div
                        className="flex items-center gap-3 md:gap-4"
                        key={index}
                      >
                        <FiCheckCircle className="h-4 w-4 md:h-5 md:w-5 text-[#3D8B6A]" />
                        <p className="text-[#4A4A42] text-xs md:text-sm font-inter">
                          {item}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {details.processingDetail && (
        <section className="py-12 bg-white">
          <div className="max-w-6xl mx-auto px-4 flex items-start flex-col md:flex-row gap-3 md:gap-10">
            <div className="w-full md:w-[50%]">
              <div className="mb-6 md:mb-9">
                <h4 className="mb-2.5 text-[#B07D2A] uppercase text-sm font-medium font-inter">
                  Timeline
                </h4>
                <h3 className="text-lg md:text-xl lg:text-2xl font-bold">
                  Expected Timeframes
                </h3>
              </div>
              <div className="flex flex-col gap-y-3">
                {details.processingDetail.timeline.map((item) => (
                  <div
                    className="flex items-start gap-3 md:gap-4 border-b border-b-[#E5DDD0] pb-5"
                    key={item.id}
                  >
                    <IoMdTime className="h-4 w-4 md:h-5 md:w-5 text-[#3D8B6A]" />
                    <div className="">
                      <h5 className="flex items-center gap-2.5 font-inter text-sm">
                        <span className="font-semibold">{item.title}</span>
                        <span className="text-[#B07D2A]">{item.time}</span>
                      </h5>
                      <p className="text-[#4A4A42] text-xs md:text-sm font-inter">
                        {item.detail}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="w-full md:w-[50%]">
              <div className="mb-6 md:mb-9">
                <h4 className="mb-2.5 text-[#B07D2A] uppercase text-sm font-medium font-inter flex items-center gap-x-2">
                  <IoWarningOutline className="h-5 w-5" />
                  <span>Limitations</span>
                </h4>
                <h3 className="text-lg md:text-xl lg:text-2xl font-bold">
                  Risks & Limitations
                </h3>
              </div>
              <div className="flex flex-col gap-y-5 md:gap-y-7">
                {details.processingDetail.limitation.map((item) => (
                  <div
                    className="border-b border-b-[#E5DDD0] pb-5"
                    key={item.id}
                  >
                    <div className="">
                      <h5 className="font-inter text-sm">
                        <span className="font-medium ">{item.title}</span>
                      </h5>
                      <p className="text-[#4A4A42] mt-1.5 text-xs font-inter">
                        {item.detail}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* RISK & LIMITATION */}

      {details.limitation && (
        <section className="py-12 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <div className="flex items-start gap-4">
              <IoWarningOutline className="text-[#8B7355] w-6 h-6 md:w-8 md:h-8 animate-pulse" />
              <div className="">
                <h4 className="uppercase font-inter text-xs text-[#8B7355] ">
                  Limitations
                </h4>
                <h2 className="mt-1 font-bold text-lg md:text-xl lg:text-2xl">
                  Risks & Limitations
                </h2>
              </div>
            </div>
            <div className="mt-7 grid md:grid-cols-2 gap-4 md:gap-px">
              {details.limitation.map((item) => (
                <div className="bg-bg-plane w-full py-6" key={item.id}>
                  <div className="w-[90%] mx-auto">
                    <h3 className="font-inter text-base md:text-lg font-medium">
                      {item.title}
                    </h3>
                    <p className="py-3 text-xs md:text-sm font-inter text-[#4A4A42]">
                      {item.detail}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="bg-[#1F4D3A] text-white py-12 text-center">
        <h3 className="text-lg md:text-xl lg:text-2xl font-semibold ">
          Ready to Request Equipment Access?
        </h3>
        <p className="my-5 md:my-8 font-inter text-sm md:text-base lg:text-lg">
          Submit an enquiry to see if equipment sharing is available in your
          region.
        </p>
        <button className="bg-white font-inter text-[#1F4D3A] px-6 py-2 text-sm rounded-md">
          Submit Equipment Enquiry
        </button>
      </section>
    </div>
  );
};

export default ServiceDetails;
