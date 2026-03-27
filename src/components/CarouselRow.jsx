import { useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import TestimonialCard from "./TestimonialCard";

const CarouselRow = ({ data = [], direction = "forward" }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
  });

  useEffect(() => {
    if (!emblaApi) return;

    const interval = setInterval(() => {
      if (direction === "forward") {
        emblaApi.scrollNext();
      } else {
        emblaApi.scrollPrev();
      }
    }, 2000);

    return () => clearInterval(interval);
  }, [emblaApi, direction]);

  return (
    <div className="overflow-hidden">
      <div ref={emblaRef}>
        <div className="flex gap-4">
          {data.map((item) => (
            <div
              key={item.id}
              className="flex-[0_0_100%] sm:flex-[0_0_50%] lg:flex-[0_0_33.33%]"
            >
              <TestimonialCard {...item} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CarouselRow;
