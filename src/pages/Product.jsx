import { HeroSection } from "../components";

const Product = () => {
  return (
    <div className="w-full">
      <HeroSection
        subtitle="Regional Guide"
        title="Produce by State"
        description="Explore what grows best across Nigeria's states. Understand regional agricultural strengths, climate contexts, and seasonal patterns."
      />
      <section className="py-10 md:py-16 bg-white w-full">
        <div className="w-[96%] md:w-[94%] mx-auto"></div>
      </section>
    </div>
  );
};

export default Product;
