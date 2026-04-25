import { FiCheckCircle } from "react-icons/fi";
import { useNavigate } from "react-router";

const SolutionCard = ({ item, index, slug }) => {
  const isReversed = index % 2 !== 0;

  const navigate = useNavigate();

  return (
    <div className="py-5 border-b border-gray-200 md:py-10">
      <div
        className={`grid lg:grid-cols-12 gap-6 items-center ${
          isReversed
            ? "lg:[&>*:nth-child(3)]:order-2 lg:[&>*:nth-child(2)]:order-3"
            : ""
        }`}
      >
        {/* NUMBER */}
        <div className="lg:col-span-1">
          <p className="text-[#B07D2A] text-2xl md:text-3xl lg:text-4xl font-semibold">
            {item.id}
          </p>
        </div>

        {/* TEXT */}
        <div className="lg:col-span-5">
          <div className="flex items-center mb-4 text-xs gap-x-2 font-inter md:text-sm">
            <div className="flex items-center justify-center border-2 rounded-md border-bg-main h-7 w-7 md:w-8 md:h-8 text-bg-main">
              {item.icon}
            </div>
            <h4 className="text-[#B07D2A] ">{item.tag}</h4>
          </div>
          <h2 className="mb-3 text-xl font-semibold md:text-2xl">
            {item.title}
          </h2>

          <p className="mb-4 text-sm text-gray-600 font-inter ">
            {item.description}
          </p>

          <ul className="space-y-3.5 mb-4 font-inter">
            {item.points.map((point, i) => (
              <li
                key={i}
                className="text-sm text-[#4A4A42] flex font-inter items-center gap-2.5"
              >
                <FiCheckCircle className="w-4 h-4 text-green-600 md:h-5 md:w-5" />
                {point}
              </li>
            ))}
          </ul>

          <button
            className="bg-[#1A3325] text-white px-4 py-2 cursor-pointer text-sm rounded font-inter mt-3"
            onClick={() => navigate(`/services/${slug}`)}
          >
            Service Details
          </button>
        </div>

        {/* IMAGE */}
        <div className="lg:col-span-6">
          <img
            src={item.image}
            alt={item.title}
            className="object-cover w-full rounded-xl h-55 md:h-80"
          />
        </div>
      </div>
    </div>
  );
};

export default SolutionCard;
