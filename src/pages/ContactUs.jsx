import { useState } from "react";
import { HeroSection } from "../components";
import { IoIosArrowDown } from "react-icons/io";
import { MdMailOutline } from "react-icons/md";
import { LuPhone } from "react-icons/lu";
import { IoLocationOutline } from "react-icons/io5";

const ContactUs = () => {
  const [userTypeOpen, setUserTypeOpen] = useState(false);
  const [serviceOpen, setServiceOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqData = [
    {
      question: "How long until I hear back?",
      answer:
        "We review all enquiries within 2-3 business days. Complex requests may require additional assessment time.",
    },
    {
      question: "Does enquiry guarantee service?",
      answer:
        "No. Enquiry submission allows us to assess eligibility. Service availability depends on verification and regional capacity.",
    },
    {
      question: "What information should I include?",
      answer:
        "Include your location, farm details (if applicable), specific service needs, timing requirements, and any relevant experience.",
    },
    {
      question: "Is my information secure?",
      answer:
        "Yes. We protect all participant data and use it only for coordination purposes. We never sell your information.",
    },
  ];

  return (
    <div className="w-full">
      <HeroSection
        subtitle="Contact & Enquiry"
        title="Submit an Enquiry"
        description="Provide details about your agricultural needs. We'll assess eligibility and respond within 2–3 business days. Submission does not guarantee service access."
      />

      <section className="py-12">
        <div className="w-[92%] md:w-[94%] mx-auto flex flex-col md:flex-row gap-8 md:gap-16">
          {/* LEFT SIDE */}
          <div className="w-full md:w-[50%]">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold">
              Submit an Enquiry
            </h2>

            <p className="text-[#6B7280] text-sm md:text-base font-inter mt-2">
              Provide details about your needs and we'll assess service
              eligibility.
            </p>

            <form className="w-full mt-8">
              {/* Name + Phone */}
              <div className="flex flex-col md:flex-row gap-5">
                <div className="w-full">
                  <label className="text-sm md:text-base font-medium font-inter">
                    Full Name
                  </label>
                  <input
                    type="text"
                    className="w-full bg-[#F8F9FA] rounded-md outline-0 px-4 mt-3 h-8 md:h-9 border border-[#dadada]"
                  />
                </div>

                <div className="w-full">
                  <label className="text-sm md:text-base font-medium font-inter">
                    Phone Number
                  </label>
                  <input
                    type="text"
                    className="w-full bg-[#F8F9FA] rounded-md outline-0 px-4 mt-3 h-8 md:h-9 border border-[#dadada]"
                  />
                </div>
              </div>

              {/* Email */}
              <div className="mt-5">
                <label className="text-sm md:text-base font-medium font-inter">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full bg-[#F8F9FA] rounded-md outline-0 px-4 mt-3 h-8 md:h-9 border border-[#dadada]"
                />
              </div>

              {/* Dropdowns */}
              <div className="mt-8 flex flex-col md:flex-row gap-5">
                {/* User Type */}
                <div className="relative w-full">
                  <label className="text-sm md:text-base font-medium font-inter">
                    I am a...
                  </label>

                  <div
                    onClick={() => setUserTypeOpen(!userTypeOpen)}
                    className="mt-2 w-full bg-[#F8F9FA] cursor-pointer text-[#6B7280] px-4 py-2 rounded-md flex items-center justify-between text-xs md:text-sm font-inter"
                  >
                    <span>Select type</span>
                    <IoIosArrowDown
                      className={`transition-transform duration-200 ${
                        userTypeOpen ? "rotate-180" : ""
                      }`}
                    />
                  </div>

                  {userTypeOpen && (
                    <div className="absolute mt-1 w-full bg-white border rounded-md shadow">
                      {[
                        "Farmers",
                        "Farm Worker",
                        "Produce Buyer",
                        "Nigerian Diaspora",
                        "Cooperative/Association",
                      ].map((item, index) => (
                        <div
                          key={index}
                          onClick={() => setUserTypeOpen(false)}
                          className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                        >
                          {item}
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Service */}
                <div className="relative w-full">
                  <label className="text-sm md:text-base font-medium font-inter">
                    Service Needed
                  </label>

                  <div
                    onClick={() => setServiceOpen(!serviceOpen)}
                    className="mt-2 w-full bg-[#F8F9FA] cursor-pointer text-[#6B7280] px-4 py-2 rounded-md flex items-center justify-between text-xs md:text-sm font-inter"
                  >
                    <span>Select Service</span>
                    <IoIosArrowDown
                      className={`transition-transform duration-200 ${
                        serviceOpen ? "rotate-180" : ""
                      }`}
                    />
                  </div>

                  {serviceOpen && (
                    <div className="absolute mt-1 w-full bg-white border rounded-md shadow">
                      {[
                        "Equipment Access",
                        "Market Access",
                        "Farm Job Agent",
                        "General Enquiry",
                      ].map((item, index) => (
                        <div
                          key={index}
                          onClick={() => setServiceOpen(false)}
                          className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                        >
                          {item}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Textarea */}
              <div className="mt-6 md:mt-9 w-full">
                <textarea
                  className="w-full resize-none h-24 md:h-36 border border-[#dadada] bg-[#F8F9FA] rounded-lg px-4 py-2 outline-0 font-inter text-xs md:text-sm"
                  placeholder="Please provide details about your enquiry, including location, timeframes, and any specific requirements..."
                />
              </div>

              {/* Button */}
              <button className="w-full bg-bg-btn-primary text-white py-2 font-medium font-inter rounded-md mt-6 md:mt-9">
                Submit Enquiry
              </button>
            </form>
          </div>

          {/* RIGHT SIDE */}
          <div className="w-full md:w-[50%]">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold">
              Other Ways to Reach Us
            </h2>

            <div className="mt-5 space-y-5">
              {/* Contact Cards */}
              {[
                {
                  icon: <MdMailOutline />,
                  title: "Email",
                  details: ["enquiry@hagrosphere.com"],
                },
                {
                  icon: <LuPhone />,
                  title: "Phone",
                  details: ["+234 803 816 3298", "Mon-Fri, 9AM-5PM WAT"],
                },
                {
                  icon: <IoLocationOutline />,
                  title: "Location",
                  details: ["Nigeria", "Serving nationwide"],
                },
              ].map((item, index) => (
                <div key={index} className="bg-[#F7F5F1] py-3 rounded-md">
                  <div className="w-[94%] mx-auto flex items-start gap-3">
                    <div className="bg-white rounded-md flex items-center justify-center w-7 h-7 md:h-9 md:w-9 text-bg-btn-primary text-lg md:text-xl">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-inter text-xs md:text-sm lg:text-base font-medium">
                        {item.title}
                      </h4>
                      {item.details.map((text, i) => (
                        <p
                          key={i}
                          className="text-xs md:text-sm font-inter text-[#6B7280]"
                        >
                          {text}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              ))}

              {/* FAQ */}
              <div className="mt-6 md:mt-8 bg-[#F8F9FA] py-5 px-4 rounded-md">
                <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold">
                  Frequently asked questions
                </h2>

                <div className="mt-6 max-w-xl mx-auto space-y-4">
                  {faqData.map((item, index) => (
                    <div
                      key={index}
                      className="border border-[#E5E7EB] rounded-md"
                    >
                      <button
                        onClick={() => toggleFAQ(index)}
                        className="w-full flex items-center justify-between px-2.5 text-sm font-inter md:text-base md:px-4 py-3 text-left font-medium"
                      >
                        <div className="flex items-center gap-2">
                          <span>{index + 1}.</span>
                          <span>{item.question}</span>
                        </div>
                        <IoIosArrowDown
                          className={`transition-transform duration-200 ${
                            activeIndex === index ? "rotate-180" : ""
                          }`}
                        />
                      </button>

                      {activeIndex === index && (
                        <div className="px-4 pb-3 text-[#6B7280] text-xs md:text-sm font-inter">
                          {item.answer}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
