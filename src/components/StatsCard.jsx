import CountUp from "./Countup";

const stats = [
  {
    value: "2,400+",
    title: "Farmers Coordinated",
    sub: "Since 2024",
  },
  {
    value: "1,200+",
    title: "Workers Placed",
    sub: "Verified placements",
  },
  {
    value: "850+",
    title: "Equipment Bookings",
    sub: "Successful coordination",
  },
  {
    value: "36",
    title: "States Covered",
    sub: "Nationwide presence",
  },
];

const StatsCard = () => {
  return (
    <div className="w-full">
      <div className="w-[95%] mx-auto border border-[#cfc8bd] bg-white">
        <div className="grid grid-cols-1 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-[#cfc8bd]">
          {stats.map((item, index) => (
            <div key={index} className="px-4 py-6 text-center md:py-8">
              <h2 className="text-3xl md:text-4xl font-semibold text-[#1A3325]">
                <CountUp
                  end={parseInt(item.value.replace(/,/g, ""))}
                  duration={2000}
                />
              </h2>

              <p className="mt-2 text-sm font-medium text-black font-inter">
                {item.title}
              </p>

              <p className="text-xs text-[#7A7A72] mt-1 font-inter">
                {item.sub}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StatsCard;
