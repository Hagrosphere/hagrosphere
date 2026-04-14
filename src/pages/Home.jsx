import { IoIosArrowRoundForward } from "react-icons/io";
import { HagroHero, Worker } from "../assets";
import { Carousel, LearnCard, StatsCard, WeServeCard } from "../components";
import {
  articleData,
  features,
  howWeWork,
  testimonialData,
  verificationStep,
  weServeData,
} from "../components/DummyData";
import { useNavigate } from "react-router";

const Home = () => {
  const navigate = useNavigate();
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
          <h2 className="text-2xl font-bold leading-9 md:text-4xl lg:text-5xl md:leading-16 lg:leading-20">
            Trust-First Agricultural <br /> Coordination in Africa
          </h2>

          <p className="max-w-xl mt-6 text-sm leading-6 md:leading-8 md:text-base lg:text-lg">
            Facilitating transparency, coordination, and structured
            participation in agriculture for farmers, workers, buyers, and the
            diaspora through verified process.
          </p>
          <div className="flex items-center mt-12 gap-x-7 md:gap-x-10 font-inter">
            <button
              className="px-3 py-2 text-sm text-white rounded-lg cursor-pointer bg-bg-btn md:text-base"
              onClick={() => navigate("/contact-us")}
            >
              Submit Enquiry
            </button>
            <button
              className="px-3 py-2 text-sm border border-white rounded-lg md:text-base"
              onClick={() => navigate("/services")}
            >
              Explore Services
            </button>
          </div>
        </div>
      </div>
      <section className="w-full py-12 md:py-16 bg-bg-secondary">
        <div className="w-[96%] md:w-[94%] mx-auto">
          <div className="flex flex-col items-center justify-center">
            <h2 className="mb-6 text-xl font-semibold md:text-2xl lg:text-3xl xl:text-4xl">
              Who We Serve
            </h2>
            <p className="max-w-lg text-xs text-center text-text-primary font-inter md:text-base lg:text-base ">
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

      <section className="w-full py-12 bg-white md:py-16">
        <div className="w-[96%] md:w-[94%] mx-auto">
          <div className="flex flex-col items-center justify-center">
            <h2 className="mb-6 text-xl font-semibold md:text-2xl lg:text-3xl xl:text-4xl">
              Our Services
            </h2>
            <p className="max-w-lg text-xs text-center text-text-primary font-inter md:text-base lg:text-base ">
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
                  <h4 className="text-xs font-semibold text-bg-btn">
                    {item.tag}
                  </h4>

                  <h2 className="my-4 text-xl font-semibold md:my-6 md:text-2xl lg:text-3xl">
                    {item.title}
                  </h2>

                  <p className="text-sm text-text-primary md:text-base">
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

      <section className="w-full py-12 md:py-16 bg-bg-secondary">
        <div className="w-[92%] md:w-[94%] mx-auto">
          <div className="flex flex-col items-center justify-center">
            <h2 className="mb-6 text-xl font-semibold md:text-2xl lg:text-3xl xl:text-4xl">
              How We Work
            </h2>
            <p className="max-w-lg text-xs text-center md:max-w-xl text-text-primary font-inter md:text-base lg:text-base ">
              A structured, transparent process designed to build trust at every
              step.
            </p>
          </div>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7 md:gap-10 w-[95%] mx-auto">
            {howWeWork.map((item) => (
              <div className="font-inter" key={item.id}>
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-bg-btn-primary md:w-10 md:h-10 ">
                  <h2 className="text-base font-semibold text-white md:text-lg lg:text-xl">
                    {item.id}
                  </h2>
                </div>
                <h2 className="my-3 font-semibold">{item.title} </h2>
                <p className="text-xs text-text-primary md:text-sm">
                  {item.detail}
                </p>
              </div>
            ))}
          </div>
          <div className="flex items-center justify-center mt-16 font-inter">
            <button
              className="flex items-center text-sm cursor-pointer text-bg-btn-primary gap-x-1 hover:underline md:text-base"
              onClick={() => navigate("/how-we-work")}
            >
              View Our Complete Process
              <IoIosArrowRoundForward className="w-5 h-5 md:h-6 md:w-6" />
            </button>
          </div>
        </div>
      </section>

      <section className="w-full bg-white py-9 md:py-12">
        <div className="w-[90%] md:w-[94%] mx-auto">
          <div className="flex flex-col-reverse items-start md:flex-row gap-7">
            <div className="w-full md:w-[50%]">
              <h2 className="text-xl font-semibold md:text-2xl lg:text-3xl ">
                Built on Trust and Verification
              </h2>
              <p className="text-text-primary max-w-lg font-inter my-3.5 text-sm md:text-base">
                Every participant, farm, and transaction goes through our
                structured verification process. We prioritize transparency over
                promises.
              </p>
              <div className="flex flex-col items-start mt-6 gap-y-5 md:gap-y-6">
                {verificationStep.map((item) => (
                  <div className="flex items-start gap-x-4 " key={item.id}>
                    {item.icon}
                    <div className="font-inter">
                      <h3 className="text-base md:text-lg ">{item.title}</h3>
                      <p className="text-sm text-text-primary md:text-base">
                        {item.describe}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex justify-center mt-8 md:justify-start">
                <button className="flex items-center justify-center px-3 py-2 text-sm text-white rounded-lg cursor-pointer bg-bg-btn-primary font-inter md:text-base">
                  Read Our Verification Process
                </button>
              </div>
            </div>
            <div className="w-full md:w-[50%]">
              <img
                src={Worker}
                alt="worker"
                className="w-full rounded-xl md:h-full"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-16 bg-bg-plane">
        <div className="w-[96%] md:w-[94%] mx-auto">
          <div className="flex flex-col items-center justify-center">
            <h2 className="mb-6 text-xl font-semibold md:text-2xl lg:text-3xl xl:text-4xl">
              Coordination at Scale
            </h2>
            <p className="max-w-lg text-xs text-center md:max-w-3xl text-text-primary font-inter md:text-base lg:text-base ">
              Figures reflect verified coordination activity since 2024. Not
              projected or estimated.
            </p>
          </div>
          <div className="w-full mt-12">
            <StatsCard />
          </div>
        </div>
      </section>
      <section className="w-full py-12 bg-white md:py-16">
        <div className="w-[96%] md:w-[94%] mx-auto">
          <div className="flex flex-col items-center justify-center">
            <h2 className="mb-6 text-xl font-semibold md:text-2xl lg:text-3xl xl:text-4xl">
              Learn About Agriculture
            </h2>
            <p className="max-w-lg text-xs text-center md:max-w-md text-text-primary font-inter md:text-base lg:text-base ">
              Educational content, market insights, and crop guides <br /> for
              Nigerian agriculture.
            </p>
          </div>
          <div className="mt-9 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-[90%] mx-auto gap-8">
            {articleData.slice(0, 3).map((item) => (
              <LearnCard key={item.id} {...item} />
            ))}
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-16 bg-bg-secondary">
        <div className="w-[96%] md:w-[94%] mx-auto">
          <div className="flex flex-col items-center justify-center">
            <h2 className="mb-6 text-xl font-semibold md:text-2xl lg:text-3xl xl:text-4xl">
              What Our Users Say
            </h2>
            <p className="max-w-lg text-xs text-center md:max-w-xl text-text-primary font-inter md:text-base lg:text-base ">
              Real experiences from farmers, workers, and buyers across Nigeria.
            </p>
          </div>
          <div className="mt-8 md:mt-10 w-[95%] md:w-[86%] mx-auto">
            <Carousel data={testimonialData} />
          </div>
        </div>
      </section>
      <section className="w-full py-12 bg-white md:py-16">
        <div className="w-[96%] md:w-[94%] mx-auto">
          <div className="flex flex-col items-center justify-center">
            <h2 className="mb-4 text-xl font-semibold leading-8 md:text-2xl lg:text-3xl xl:text-4xl md:mb-6 md:leading-12">
              Ready to <span className="text-bg-btn">Transform</span> <br />{" "}
              Nigerian Agriculture?
            </h2>
            <p className="max-w-md text-xs text-center text-text-primary font-inter md:text-base lg:text-base ">
              Join thousands of farmers, agribusinesses, and buyers building a
              sustainable agricultural future together
            </p>
            <div className="mt-9 md:mt-14">
              <button
                className="flex items-center px-4 py-2 bg-white shadow-sm cursor-pointer gap-x-2 font-inter rounded-3xl"
                onClick={() => navigate("/services")}
              >
                Start Your Journey
                <div className="flex items-center justify-center w-6 h-6 text-white rounded-full bg-bg-btn-primary">
                  <IoIosArrowRoundForward />
                </div>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
