import { IoIosArrowRoundForward } from "react-icons/io";

const WeServeCard = ({ title, image, description }) => {
  return (
    <div className="w-[88%] md:w-full mx-auto bg-white border border-[#E5E7EB] rounded-xl py-3 md:py-4 shadow-md ">
      <div className="w-[90%] mx-auto">
        <div className="w-full mb-4">
          <img src={image} alt={`${title}`} className="w-full rounded-lg" />
        </div>
        <div className="font-inter">
          <h2 className="text-base md:text-lg lg:text-xl font-semibold ">
            {title}
          </h2>
          <p className="my-2 text-xs md:text-sm lg:text-base text-text-primary">
            {description}
          </p>
          <button className="flex items-center cursor-pointer gap-x-1 text-bg-btn text-xs md:text-sm lg:text-base">
            Learn More <IoIosArrowRoundForward className="h-5 w-5" />{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default WeServeCard;
