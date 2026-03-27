import { HagroHeroTwo } from "../assets";

const HeroSection = ({ subtitle, title, description }) => {
  return (
    <div
      className={`w-full relative flex items-start bg-cover bg-center text-white h-[46vh] md:h-[60vh]`}
      style={{
        backgroundImage: `url(${HagroHeroTwo})`,
      }}
    >
      <div className="absolute inset-0 bg-[#1A3325CC]"></div>

      <div className="relative z-10 w-[92%] mx-auto mt-5 md:mt-8">
        {subtitle && (
          <h4 className="text-[#B07D2A] font-inter text-xs md:text-sm lg:text-base uppercase">
            {subtitle}
          </h4>
        )}
        {title && (
          <h2 className="my-4 md:my-8 text-2xl md:text-3xl lg:text-4xl font-bold max-w-2xl leading-10 md:leading-12">
            {title}
          </h2>
        )}
        {description && (
          <p className="max-w-3xl text-sm md:text-base lg:text-lg font-inter">
            {description}
          </p>
        )}
      </div>
    </div>
  );
};

export default HeroSection;
