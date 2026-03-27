import { FiCheckCircle } from "react-icons/fi";

const SolutionCard = ({ item, index }) => {
  const isReversed = index % 2 !== 0;

  return (
    <div className="py-5 md:py-10 border-b border-gray-200">
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
          <div className="flex items-center gap-x-2 mb-4 font-inter text-xs md:text-sm">
            <div className="border-2 border-bg-main flex items-center justify-center h-7 w-7 md:w-8 md:h-8 rounded-md text-bg-main">
              {item.icon}
            </div>
            <h4 className="text-[#B07D2A] ">{item.tag}</h4>
          </div>
          <h2 className="text-xl md:text-2xl font-semibold mb-3">
            {item.title}
          </h2>

          <p className="text-gray-600 text-sm mb-4 font-inter ">
            {item.description}
          </p>

          <ul className="space-y-3.5 mb-4 font-inter">
            {item.points.map((point, i) => (
              <li
                key={i}
                className="text-sm text-[#4A4A42] flex font-inter items-center gap-2.5"
              >
                <FiCheckCircle className="text-green-600 h-4 w-4 md:h-5 md:w-5" />
                {point}
              </li>
            ))}
          </ul>

          <button className="bg-[#1A3325] text-white px-4 py-2 text-sm rounded font-inter mt-3">
            Service Details
          </button>
        </div>

        {/* IMAGE */}
        <div className="lg:col-span-6">
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-55 md:h-80 object-cover rounded"
          />
        </div>
      </div>
    </div>
  );
};

export default SolutionCard;
