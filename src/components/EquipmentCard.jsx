import { IoLocationOutline } from "react-icons/io5";
import { useNavigate } from "react-router";

const EquipmentCard = ({
  category,
  status,
  name,
  description,
  state,
  price,
  images = [],
  id,
}) => {
  const navigate = useNavigate();
  const FALLBACK_IMAGE =
    "https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=800&auto=format&fit=crop";

  const available = status === "Available";
  const thumbnail = images[0] || FALLBACK_IMAGE;

  return (
    <div className="w-[90%] mx-auto md:w-full flex flex-col bg-white rounded shadow-sm">
      <img
        src={thumbnail}
        alt={name}
        className="object-cover w-full h-52 md:h-64"
        onError={(e) => {
          e.target.src = FALLBACK_IMAGE;
        }}
      />
      <div className="flex flex-col flex-1 gap-4 px-4 py-5">
        <div className="flex items-center justify-between gap-3">
          <span className="text-xs font-inter tracking-[0.024em] text-[#B07D2A]">
            {category}
          </span>
          <span
            className={`rounded px-2 py-1 font-inter text-xs tracking-[0.024em] ${
              available
                ? "bg-[rgba(63,125,90,0.1)] text-[#3D8B6A]"
                : "bg-[#E5DDD0] text-[#C6922A]"
            }`}
          >
            {status}
          </span>
        </div>
        <h3 className="text-lg md:text-xl font-medium leading-3.5 md:leading-4 text-[#1A1A17]">
          {name}
        </h3>
        <p className="text-sm leading-5 md:leading-5.5 text-[#4A4A42] font-inter">
          {description}
        </p>
        <div className="flex items-center gap-x-0.5 md:gap-x-1">
          <IoLocationOutline className="inline-block w-4 h-4 md:w-5 md:h-5 text-[#7A7A72]" />
          <p className="text-xs md:text-sm leading-4 md:leading-5 text-[#7A7A72] font-inter">
            {state}
          </p>
        </div>
        <p className="font-inter text-base md:text-lg lg:text-xl font-semibold text-[#1A1A17]">
          {price}
        </p>
      </div>
      <div className="">
        <button
          onClick={() => navigate(`/equipment-listing-details/${id}`)}
          className="w-full rounded bg-[#1F4D3A]  cursor-pointer py-1.5 text-sm md:text-base leading-4 md:leading-6 text-white"
        >
          View Details
        </button>
      </div>
    </div>
  );
};

export default EquipmentCard;
