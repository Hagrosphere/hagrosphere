import { IoIosArrowRoundForward } from "react-icons/io";
import { FiCheckCircle } from "react-icons/fi";
import { LuShield } from "react-icons/lu";

import { HagroHero, Worker } from "../assets";
import { LearnCard, StatsCard, WeServeCard } from "../components";
import {
  articleData,
  features,
  howWeWork,
  verificationStep,
  weServeData,
} from "../components/DummyData";

const Home = () => {
  return (
    <div className="w-full">
      <div
        className="w-full h-[60vh] md:h-screen bg-cover bg-center relative flex items-start text-white"
        style={{
          backgroundImage: `url(${HagroHero})`,
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>

        <div className="relative z-10 w-[90%] mx-auto mt-5 md:mt-8">
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold leading-9 md:leading-16 lg:leading-20">
            Trust-First Agricultural <br /> Coordination in Africa
          </h2>

          <p className="mt-6 leading-6 md:leading-8 max-w-xl  text-sm md:text-base lg:text-lg">
            Facilitating transparency, coordination, and structured
            participation in agriculture for farmers, workers, buyers, and the
            diaspora through verified process.
          </p>
          <div className="mt-12 flex items-center gap-x-7 md:gap-x-10 font-inter">
            <button className="bg-bg-btn text-white text-sm md:text-base px-3 py-2 rounded-lg">
              Submit Enquiry
            </button>
            <button className="border border-white px-3 py-2 text-sm md:text-base rounded-lg">
              Explore Services
            </button>
          </div>
        </div>
      </div>
      <section className="py-12 md:py-16 bg-bg-secondary w-full">
        <div className="w-[96%] md:w-[94%] mx-auto">
          <div className="flex items-center justify-center flex-col">
            <h2 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold mb-6">
              Who We Serve
            </h2>
            <p className="max-w-lg text-center text-text-primary font-inter text-xs md:text-base lg:text-base ">
              HAGROSPHERE coordinates agricultural services for <br /> diverse
              participants across Nigeria and the diaspora.
            </p>
          </div>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 w-[85%] mx-auto gap-6 md:gap-8">
            {weServeData.map((item) => (
              <WeServeCard key={item.id} {...item} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-white w-full">
        <div className="w-[96%] md:w-[94%] mx-auto">
          <div className="flex items-center justify-center flex-col">
            <h2 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold mb-6">
              Our Services
            </h2>
            <p className="max-w-lg text-center text-text-primary font-inter text-xs md:text-base lg:text-base ">
              Three core services designed to improve coordination, <br />{" "}
              access, and transparency in Nigerian agriculture.
            </p>
          </div>
          <div className="mt-10 w-[85%] mx-auto">
            {features.map((item) => (
              <div
                key={item.id}
                className={`flex items-center flex-col gap-7 md:gap-11 ${
                  item.reverse
                    ? "md:flex-row-reverse my-9 md:my-16"
                    : "md:flex-row"
                }`}
              >
                <div className="w-full md:w-[50%]">
                  <img src={item.image} alt={item.title} />
                </div>

                <div className="w-full md:w-[50%] font-inter">
                  <h4 className="text-xs text-bg-btn font-semibold">
                    {item.tag}
                  </h4>

                  <h2 className="my-4 md:my-6 font-semibold text-xl md:text-2xl lg:text-3xl">
                    {item.title}
                  </h2>

                  <p className="text-text-primary text-sm md:text-base">
                    {item.desc}
                  </p>

                  <button className="mt-7 md:mt-12 bg-bg-btn-primary text-white text-sm md:text-base rounded-md py-1.5 md:py-2 px-3 cursor-pointer">
                    Explore Platform
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-bg-secondary w-full">
        <div className="w-[96%] md:w-[94%] mx-auto">
          <div className="flex items-center justify-center flex-col">
            <h2 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold mb-6">
              How We Work
            </h2>
            <p className="max-w-lg md:max-w-xl text-center text-text-primary font-inter text-xs md:text-base lg:text-base ">
              A structured, transparent process designed to build trust at every
              step.
            </p>
          </div>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7 md:gap-10 w-[95%] mx-auto">
            {howWeWork.map((item) => (
              <div className="font-inter" key={item.id}>
                <div className="bg-bg-btn-primary rounded-full w-8 md:w-10 h-8 md:h-10 flex items-center justify-center ">
                  <h2 className="text-white text-base md:text-lg lg:text-xl font-semibold">
                    {item.id}
                  </h2>
                </div>
                <h2 className="my-3 font-semibold">{item.title} </h2>
                <p className="text-text-primary text-xs md:text-sm">
                  {item.detail}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-16 flex items-center justify-center font-inter">
            <button className="text-bg-btn-primary flex items-center gap-x-1 cursor-pointer hover:underline text-sm md:text-base">
              View Our Complete Process
              <IoIosArrowRoundForward className="w-5 md:h-6 h-5 md:w-6" />
            </button>
          </div>
        </div>
      </section>

      <section className="py-9 md:py-12  bg-white w-full">
        <div className="w-[96%] md:w-[94%] mx-auto">
          <div className="flex items-start flex-col-reverse md:flex-row gap-7">
            <div className="w-full md:w-[50%]">
              <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold ">
                Built on Trust and Verification
              </h2>
              <p className="text-text-primary max-w-lg font-inter my-3.5 text-sm md:text-base">
                Every participant, farm, and transaction goes through our
                structured verification process. We prioritize transparency over
                promises.
              </p>
              <div className="mt-6 flex items-start gap-y-5 md:gap-y-6 flex-col">
                {verificationStep.map((item) => (
                  <div className="flex items-start gap-x-4 " key={item.id}>
                    {item.icon}
                    <div className="font-inter">
                      <h3 className="text-base md:text-lg ">{item.title}</h3>
                      <p className="text-text-primary text-sm md:text-base">
                        {item.describe}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-8 flex justify-center md:justify-start">
                <button className="bg-bg-btn-primary flex items-center justify-center text-white rounded-lg px-3 py-2 font-inter text-sm md:text-base cursor-pointer">
                  Read Our Verification Process
                </button>
              </div>
            </div>
            <div className="w-full md:w-[50%]">
              <img
                src={Worker}
                alt="worker"
                className="rounded-xl w-full md:h-full"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="py-12 md:py-16 bg-bg-plane w-full">
        <div className="w-[96%] md:w-[94%] mx-auto">
          <div className="flex items-center justify-center flex-col">
            <h2 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold mb-6">
              Coordination at Scale
            </h2>
            <p className="max-w-lg md:max-w-3xl text-center text-text-primary font-inter text-xs md:text-base lg:text-base ">
              Figures reflect verified coordination activity since 2024. Not
              projected or estimated.
            </p>
          </div>
          <div className="w-full mt-12">
            <StatsCard />
          </div>
        </div>
      </section>
      <section className="py-12 md:py-16 bg-white w-full">
        <div className="w-[96%] md:w-[94%] mx-auto">
          <div className="flex items-center justify-center flex-col">
            <h2 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold mb-6">
              Learn About Agriculture
            </h2>
            <p className="max-w-lg md:max-w-md text-center text-text-primary font-inter text-xs md:text-base lg:text-base ">
              Educational content, market insights, and crop guides <br /> for
              Nigerian agriculture.
            </p>
          </div>
          <div className="mt-9 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-[90%] mx-auto gap-8">
            {articleData.map((item) => (
              <LearnCard key={item.id} {...item} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
