import CarouselRow from "./CarouselRow";
import { testimonialData } from "./DummyData";

const TestimonialSection = () => {
  const midpoint = Math.ceil(testimonialData.length / 2);

  const firstRow = testimonialData.slice(0, midpoint);
  const secondRow = testimonialData.slice(midpoint);

  return (
    <div className="space-y-6 mt-8">
      {/* Forward */}
      <CarouselRow data={firstRow} direction="forward" />

      {/* Backward */}
      <CarouselRow data={secondRow} direction="backward" />
    </div>
  );
};

export default TestimonialSection;
