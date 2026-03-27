const TestimonialCard = ({ name, testimonial, location }) => {
  return (
    <div className="bg-white w-80 mx-auto md:w-82.5 rounded-2xl py-4 border border-[#74C69D4D]">
      <div className="w-[88%] mx-auto">
        <h2 className="font-inter text-sm md:text-base line-clamp-3">
          {testimonial}
        </h2>
        <div className="my-6">
          <hr className="border-[#74C69D4D]" />
        </div>
        <h2 className="text-[#142F24] text-base lg:text-lg font-inter font-semibold">
          {name}
        </h2>
        <p className="font-inter text-xs md:text-sm py-1">{location}</p>
      </div>
    </div>
  );
};

export default TestimonialCard;
