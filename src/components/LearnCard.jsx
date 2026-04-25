import { useNavigate } from "react-router";

const LearnCard = ({ image, tag, title, subtitle, id }) => {
  const navigate = useNavigate();
  return (
    <div className="w-[90%] mx-auto md:w-full max-w-sm border border-[#E5E7EB] rounded-2xl overflow-hidden bg-white">
      {/* Image */}
      <div className="w-full overflow-hidden h-36">
        <img src={image} alt={title} className="object-cover w-full h-full" />
      </div>

      <div className="p-5">
        {/* Tag */}
        <span className="text-xs font-inter font-semibold bg-[#B07D2A0D] text-bg-btn px-3 py-1 rounded-3xl uppercase">
          {tag}
        </span>

        {/* Title */}
        <h2 className="mt-4 text-base leading-6 text-gray-900 md:text-lg lg:text-xl">
          {title}
        </h2>

        {/* Description */}
        <p className="mt-3 text-sm leading-6 text-gray-500 font-inter line-clamp-3">
          {subtitle}
        </p>

        {/* Link */}
        <button
          className="flex items-center gap-2 mt-4 text-sm font-medium text-yellow-700 cursor-pointer font-inter"
          onClick={() => navigate(`/learn/${id}`)}
        >
          Read Article →
        </button>
      </div>
    </div>
  );
};

export default LearnCard;
