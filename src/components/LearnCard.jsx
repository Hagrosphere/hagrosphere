import { useNavigate } from "react-router";

const LearnCard = ({ coverImage, category, title, excerpt, id, slug }) => {
  const navigate = useNavigate();
  
  const fallbackImage = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300'%3E%3Crect width='400' height='300' fill='%23f0f4f0'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-size='18' fill='%239ca3af'%3ENo Image%3C/text%3E%3C/svg%3E";
  
  return (
    <div className="w-[90%] mx-auto md:w-full max-w-sm border border-[#E5E7EB] rounded-2xl overflow-hidden bg-white">
      {/* Image */}
      <div className="w-full overflow-hidden h-36">
        <img 
          src={coverImage || fallbackImage} 
          alt={title} 
          className="object-cover w-full h-full"
          onError={(e) => { e.target.src = fallbackImage; }}
        />
      </div>

      <div className="p-5">
        {/* Tag */}
        <span className="text-xs font-inter font-semibold bg-[#B07D2A0D] text-bg-btn px-3 py-1 rounded-3xl uppercase">
          {category?.replace(/_/g, ' ')}
        </span>

        {/* Title */}
        <h2 className="mt-4 text-base leading-6 text-gray-900 md:text-lg lg:text-xl">
          {title}
        </h2>

        {/* Description */}
        <p className="mt-3 text-sm leading-6 text-gray-500 font-inter line-clamp-3">
          {excerpt}
        </p>

        {/* Link */}
        <button
          className="flex items-center gap-2 mt-4 text-sm font-medium text-yellow-700 cursor-pointer font-inter"
          onClick={() => navigate(`/learn/${slug || id}`)}
        >
          Read Article →
        </button>
      </div>
    </div>
  );
};

export default LearnCard;
