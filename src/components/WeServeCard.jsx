import { IoIosArrowRoundForward } from "react-icons/io";

const WeServeCard = ({ title, image, description }) => {
  return (
    <div className="w-[88%] md:w-full mx-auto bg-white border border-[#E5E7EB] rounded-xl py-3 md:py-4 shadow-md ">
      <div className="w-[90%] mx-auto">
        <div className="w-full mb-4">
          <img src={image} alt={`${title}`} className="w-full rounded-lg" />
        </div>
        <div className="font-inter">
          <h2 className="text-sm font-semibold md:text-base ">{title}</h2>
          <p className="my-2 text-xs md:text-sm text-text-primary">
            {description}
          </p>
          <button className="flex items-center mt-4 text-xs cursor-pointer gap-x-1 text-bg-btn md:text-sm lg:text-base">
            Learn More <IoIosArrowRoundForward className="w-5 h-5" />{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default WeServeCard;
