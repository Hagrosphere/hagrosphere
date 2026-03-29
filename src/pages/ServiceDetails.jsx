import { useParams } from "react-router";
import { HeroSection } from "../components";
import { solutionsData } from "../components/DummyData";

const ServiceDetails = () => {
  const { slug } = useParams();
  const solution = solutionsData.find((item) => item.slug === slug);
  if (!solution) return <div>Not found</div>;

  const { title, subtitle, tag, image, details, icon } = solution;

  return (
    <div className="w-full">
      <HeroSection subtitle="SERVICES" title={title} description={subtitle} />

      <section className="bg-[#F8F8F8] py-12 md:py-16">
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
              className="w-full h-64 md:h-72 object-cover"
            />
          </div>
        </div>
      </section>
      <div className="">
        {details.whoFor && (
          <section className="py-12 bg-[#FAF8F4]">
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
    </div>
  );
};

export default ServiceDetails;
