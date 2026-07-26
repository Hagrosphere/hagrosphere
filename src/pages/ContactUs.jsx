import { useState } from "react";
import { HeroSection } from "../components";
import { IoIosArrowDown } from "react-icons/io";
import { MdMailOutline } from "react-icons/md";
import { LuPhone } from "react-icons/lu";
import { IoLocationOutline } from "react-icons/io5";
import { useContact } from "../features/contact/hooks/useContact";
import { toast } from "react-toastify";

const ContactUs = () => {
  const [userTypeOpen, setUserTypeOpen] = useState(false);
  const [serviceOpen, setServiceOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);

  // Form state
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    userType: "",
    service: "",
    subject: "",
    message: "",
  });

  const { submit, isSubmitting, isSubmitted } = useContact();

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation
    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please fill in all required fields");
      return;
    }

    // Build subject from selections
    const subject = `${formData.userType || "General"} - ${formData.service || "Enquiry"}`;

    try {
      await submit({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        subject: subject,
        message: formData.message,
      }).unwrap();

      toast.success("Your enquiry has been submitted successfully!");

      // Reset form
      setFormData({
        name: "",
        phone: "",
        email: "",
        userType: "",
        service: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      toast.error(
        error?.data?.message || "Failed to submit enquiry. Please try again.",
      );
    }
  };

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
            <h2 className="text-xl font-semibold md:text-2xl lg:text-3xl">
              Submit an Enquiry
            </h2>

            <p className="text-[#6B7280] text-sm md:text-base font-inter mt-2">
              Provide details about your needs and we'll assess service
              eligibility.
            </p>

            <form className="w-full mt-8" onSubmit={handleSubmit}>
              {/* Name + Phone */}
              <div className="flex flex-col gap-5 md:flex-row">
                <div className="w-full">
                  <label className="text-sm font-medium md:text-base font-inter">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-[#F8F9FA] rounded-md outline-0 px-4 mt-3 h-8 md:h-9 border border-[#dadada]"
                  />
                </div>

                <div className="w-full">
                  <label className="text-sm font-medium md:text-base font-inter">
                    Phone Number
                  </label>
                  <input
                    type="text"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full bg-[#F8F9FA] rounded-md outline-0 px-4 mt-3 h-8 md:h-9 border border-[#dadada]"
                  />
                </div>
              </div>

              {/* Email */}
              <div className="mt-5">
                <label className="text-sm font-medium md:text-base font-inter">
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full bg-[#F8F9FA] rounded-md outline-0 px-4 mt-3 h-8 md:h-9 border border-[#dadada]"
                />
              </div>

              {/* Dropdowns */}
              <div className="flex flex-col gap-5 mt-8 md:flex-row">
                {/* User Type */}
                <div className="relative w-full">
                  <label className="text-sm font-medium md:text-base font-inter">
                    I am a...
                  </label>

                  <div
                    onClick={() => setUserTypeOpen(!userTypeOpen)}
                    className="mt-2 w-full bg-[#F8F9FA] cursor-pointer text-[#6B7280] px-4 py-2 rounded-md flex items-center justify-between text-xs md:text-sm font-inter"
                  >
                    <span>{formData.userType || "Select type"}</span>
                    <IoIosArrowDown
                      className={`transition-transform duration-200 ${
                        userTypeOpen ? "rotate-180" : ""
                      }`}
                    />
                  </div>

                  {userTypeOpen && (
                    <div className="absolute z-10 w-full mt-1 bg-white border rounded-md shadow">
                      {[
                        "Farmers",
                        "Farm Worker",
                        "Produce Buyer",
                        "Nigerian Diaspora",
                        "Cooperative/Association",
                      ].map((item, index) => (
                        <div
                          key={index}
                          onClick={() => {
                            setFormData({ ...formData, userType: item });
                            setUserTypeOpen(false);
                          }}
                          className="px-4 py-2 cursor-pointer hover:bg-gray-100"
                        >
                          {item}
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Service */}
                <div className="relative w-full">
                  <label className="text-sm font-medium md:text-base font-inter">
                    Service Needed
                  </label>

                  <div
                    onClick={() => setServiceOpen(!serviceOpen)}
                    className="mt-2 w-full bg-[#F8F9FA] cursor-pointer text-[#6B7280] px-4 py-2 rounded-md flex items-center justify-between text-xs md:text-sm font-inter"
                  >
                    <span>{formData.service || "Select Service"}</span>
                    <IoIosArrowDown
                      className={`transition-transform duration-200 ${
                        serviceOpen ? "rotate-180" : ""
                      }`}
                    />
                  </div>

                  {serviceOpen && (
                    <div className="absolute z-10 w-full mt-1 bg-white border rounded-md shadow">
                      {[
                        "Equipment Access",
                        "Market Access",
                        "Farm Job Agent",
                        "General Enquiry",
                      ].map((item, index) => (
                        <div
                          key={index}
                          onClick={() => {
                            setFormData({ ...formData, service: item });
                            setServiceOpen(false);
                          }}
                          className="px-4 py-2 cursor-pointer hover:bg-gray-100"
                        >
                          {item}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Textarea */}
              <div className="w-full mt-6 md:mt-9">
                <label className="text-sm font-medium md:text-base font-inter">
                  Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  className="w-full resize-none h-24 md:h-36 border border-[#dadada] bg-[#F8F9FA] rounded-lg px-4 py-2 outline-0 font-inter text-xs md:text-sm mt-2"
                  placeholder="Please provide details about your enquiry, including location, timeframes, and any specific requirements..."
                />
              </div>

              {/* Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-2 mt-6 font-medium text-white transition-all rounded-md bg-bg-btn-primary font-inter md:mt-9 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-opacity-90"
              >
                {isSubmitting ? "Submitting..." : "Submit Enquiry"}
              </button>
            </form>
          </div>

          {/* RIGHT SIDE */}
          <div className="w-full md:w-[50%]">
            <h2 className="text-xl font-semibold md:text-2xl lg:text-3xl">
              Other Ways to Reach Us
            </h2>

            <div className="mt-5 space-y-5">
              {/* Contact Cards */}
              {[
                {
                  icon: <MdMailOutline />,
                  title: "Email",
                  details: ["hello@hagrosphere.com"],
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
                    <div className="flex items-center justify-center text-lg bg-white rounded-md w-7 h-7 md:h-9 md:w-9 text-bg-btn-primary md:text-xl">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="text-xs font-medium font-inter md:text-sm lg:text-base">
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
                <h2 className="text-xl font-semibold md:text-2xl lg:text-3xl">
                  Frequently asked questions
                </h2>

                <div className="max-w-xl mx-auto mt-6 space-y-4">
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
