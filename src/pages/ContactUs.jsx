import { HeroSection } from "../components";

const ContactUs = () => {
  return (
    <div className="w-full">
      <HeroSection
        subtitle="Contact & Enquiry"
        title="Submit an Enquiry"
        description="Provide details about your agricultural needs. We'll assess eligibility and respond within 2–3 business days. Submission does not guarantee service access."
      />
      <section className="py-12 flex items-start flex-col md:flex-row gap-8">
        <div className="w-full md:w-[50%]">
          <h2 className="">Submit an Enquiry</h2>
        </div>
        <div className="w-full md:w-[50%]"></div>
      </section>
    </div>
  );
};

export default ContactUs;
