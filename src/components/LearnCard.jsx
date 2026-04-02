const LearnCard = ({ image, tag, title, description }) => {
  return (
    <div className="w-[90%] mx-auto md:w-full max-w-sm border border-[#E5E7EB] rounded-2xl overflow-hidden bg-white">
      {/* Image */}
      <div className="w-full h-36 overflow-hidden">
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>

      <div className="p-5">
        {/* Tag */}
        <span className="text-xs font-inter font-semibold bg-[#B07D2A0D] text-bg-btn px-3 py-1 rounded-3xl uppercase">
          {tag}
        </span>

        {/* Title */}
        <h2 className="mt-4 text-base md:text-lg lg:text-xl  leading-6  text-gray-900">
          {title}
        </h2>

        {/* Description */}
        <p className="mt-3 text-sm font-inter text-gray-500 leading-6 line-clamp-3">
          {description}
        </p>

        {/* Link */}
        <button className="mt-4 text-yellow-700 font-inter cursor-pointer font-medium text-sm flex items-center gap-2">
          Read Article →
        </button>
      </div>
    </div>
  );
};

export default LearnCard;
