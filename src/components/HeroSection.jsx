import { LuCalendar } from "react-icons/lu";
import { MdOutlineAccessTime } from "react-icons/md";
import { FiUser } from "react-icons/fi";
import { HagroHeroTwo } from "../assets";

const HeroSection = ({ subtitle, title, description, author, date, time }) => {
  return (
    <div
      className={`w-full relative flex items-start bg-cover bg-center text-white h-[46vh] md:h-[50vh]`}
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
          <h2 className="max-w-2xl my-4 text-2xl font-bold leading-10 md:my-8 md:text-3xl lg:text-4xl md:leading-12">
            {title}
          </h2>
        )}
        {description && (
          <p className="max-w-3xl text-sm md:text-base lg:text-lg font-inter">
            {description}
          </p>
        )}
        {author && time && date && (
          <div className="flex flex-col items-start gap-y-2.5 md:gap-y-0 md:items-center md:flex-row gap-x-7 md:gap-x-10 font-inter">
            <div className="flex items-center gap-x-2">
              <LuCalendar className="w-4 h-4 md:w-5 md:h-5" />
              <span className="text-sm md:text-base">{date}</span>
            </div>
            <div className="flex items-center gap-x-2">
              <MdOutlineAccessTime className="w-4 h-4 md:w-5 md:h-5" />
              <span className="text-sm md:text-base">{time}</span>
            </div>
            <div className="flex items-center gap-x-2">
              <FiUser className="w-4 h-4 md:w-5 md:h-5" />
              <span className="text-sm md:text-base">{author}</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default HeroSection;
