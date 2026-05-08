import { useState } from "react";
import { useNavigate, useParams } from "react-router";
import { RiMapPinLine, RiErrorWarningLine } from "react-icons/ri";
import { GiBanknote } from "react-icons/gi";
import { FiCheckCircle } from "react-icons/fi";
import { FaRegClock } from "react-icons/fa";
import { HeroSection } from "../components";
import { jobsData } from "../components/DummyData";
import { IoMdArrowBack } from "react-icons/io";

const JobDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    fullName: "",
    phoneNumber: "",
    emailAddress: "",
    currentLocation: "",
    yearsExperience: "",
    availability: "",
    coverLetter: "",
    consent: false,
  });

  const job = jobsData.find((item) => item.id === id);

  const categoryColorMap = {
    "CROP PRODUCTION": "text-[#3D8B6A]",
    LIVESTOCK: "text-[#B07D2A]",
    PROCESSING: "text-[#2A7AB0]",
    "EQUIPMENT OPERATION": "text-[#8B3D6A]",
    "FARM MANAGEMENT": "text-[#6A3D8B]",
  };

  const contractBgMap = {
    "Seasonal Contract": "bg-[#FFF7E6] text-[#B07D2A]",
    "Full-time": "bg-[rgba(63,125,90,0.1)] text-[#3D8B6A]",
    Contract: "bg-[#EFF5FF] text-[#2A7AB0]",
  };

  const formatSalary = (min, max) =>
    `₦${min.toLocaleString()} – ₦${max.toLocaleString()}/month`;

  const postedLabel = (days) => {
    if (days === 0) return "Today";
    if (days === 1) return "1 day ago";
    if (days < 7) return `${days} days ago`;
    const w = Math.floor(days / 7);
    return `${w} week${w > 1 ? "s" : ""} ago`;
  };
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const inputClass = (field) =>
    `w-full rounded border bg-white px-3 py-1.5 md:py-2.5 text-sm text-[#1A1A17] outline-none focus:ring-1 transition-colors ${
      errors[field]
        ? "border-red-400 focus:border-red-400 focus:ring-red-400"
        : "border-[#D4C9B8] focus:border-[#1F4D3A] focus:ring-[#1F4D3A]"
    }`;

  const handleSubmit = () => {
    const required = {
      fullName: "Full Name",
      phoneNumber: "Phone Number",
      emailAddress: "Email Address",
      currentLocation: "Current Location",
      yearsExperience: "Years of Experience",
      availability: "Availability",
      coverLetter: "Cover Letter",
    };
    const newErrors = {};
    Object.entries(required).forEach(([field, label]) => {
      if (!form[field].toString().trim()) {
        newErrors[field] = `${label} is required`;
      }
    });
    if (
      form.emailAddress &&
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.emailAddress)
    ) {
      newErrors.emailAddress = "Enter a valid email address";
    }
    if (!form.consent) {
      newErrors.consent = "You must agree to the terms before submitting";
    }
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    setErrors({});
    setSubmitted(true);
  };

  return (
    <div className="w-full">
      <HeroSection subtitle="Job Opportunity" title={`${job?.title}`} />
      <section className="py-6 bg-white md:py-8">
        <div className="w-[90%] md:w-[94%] mx-auto">
          <button
            className="flex items-center gap-2 text-[#2E6B4F] cursor-pointer font-medium"
            onClick={() => navigate(-1)}
          >
            <IoMdArrowBack className="inline-block w-4.5 h-4.5  " />
            <span className="text-sm font-inter ">Back to all jobs</span>
          </button>

          <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_385px]">
            {/* ============================   LEFT   ============================== */}
            <div className="flex flex-col ">
              <div className="flex flex-wrap items-center gap-2 mb-1 font-inter">
                <span
                  className={`text-xs font-medium md:font-semibold ${
                    categoryColorMap[job.category] || "text-[#4A4A42]"
                  }`}
                >
                  {job.category}
                </span>
                <span
                  className={`rounded px-2.5 py-0.5 text-xs font-medium  ${
                    contractBgMap[job.contractType] ||
                    "bg-[#E8E2D9] text-[#4A4A42]"
                  }`}
                >
                  {job.contractType}
                </span>
              </div>
              <h1 className="text-lg  md:text-xl lg:text-2xl font-bold text-[#1A1A17] my-4">
                {job.title}
              </h1>
              <div className="flex flex-wrap gap-2.5 md:gap-4 font-inter  text-xs md:text-sm text-[#7A7A72]">
                <span className="flex items-center gap-1.5">
                  <RiMapPinLine className="w-4 h-4 md:w-5 md:h-5" /> {job.state}
                </span>
                <span className="flex items-center gap-1.5">
                  <GiBanknote className="w-4 h-4 md:w-5 md:h-5" />
                  {formatSalary(job.salaryMin, job.salaryMax)}
                </span>
                {(job.duration || job.positionType) && (
                  <span className="flex items-center gap-1.5">
                    <FaRegClock className="w-4 h-4 md:w-5 md:h-5" />
                    {job.duration || job.positionType}
                  </span>
                )}
              </div>
              {/* =====================================  Job Description ======================== */}
              <div className="mt-4">
                <h2 className="text-base md:text-lg lg:text-xl font-semibold text-[#1A1A17] mb-3">
                  Job Description
                </h2>
                <p className="text-sm md:text-base font-inter text-[#4A4A42]">
                  {job.description}
                </p>

                {/* ============================   Responsibilities  =========================== */}
                <h3 className="mt-6 mb-3 text-base md:text-lg lg:text-xl font-semibold text-[#1A1A17]">
                  Responsibilities
                </h3>
                <ul className="flex flex-col gap-2 font-inter">
                  {job.responsibilities.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2.5 text-xs md:text-sm text-[#4A4A42]"
                    >
                      <div className="h-1.5 w-1.5 md:w-2 md:h-2 bg-[#B07D2A]"></div>
                      {item}
                    </li>
                  ))}
                </ul>

                {/* ========================= Requirements  ======================== */}
                <h3 className="mt-6 mb-3 text-base md:text-lg lg:text-xl font-semibold text-[#1A1A17]">
                  Requirements
                </h3>

                <div className="flex flex-col gap-2 font-inter">
                  {job.requirements.map((item) => (
                    <div
                      className="flex items-center gap-2  text-[#4A4A42]"
                      key={item}
                    >
                      <FiCheckCircle className="text-[#3D8B6A]" />
                      <span className="text-xs md:text-sm">{item}</span>
                    </div>
                  ))}
                </div>

                {/* ====================   What We Offer =============================== */}
                <h3 className="mt-6 mb-3 text-base md:text-lg lg:text-xl font-semibold text-[#1A1A17]">
                  What We Offer
                </h3>
                <ul className="flex flex-col gap-2 font-inter">
                  {job.whatWeOffer.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2.5 text-xs md:text-sm text-[#4A4A42]"
                    >
                      <FiCheckCircle size={15} className=" text-[#3D8B6A]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            {/* =========================  RIGHT SIDEBAR  ===========================  */}
            <div className="flex flex-col gap-4 md:gap-5">
              <div className="border border-[#E5DDD0] bg-[#F7F5F1] px-5 py-6.5">
                <h3 className=" text-base md:text-lg font-semibold text-[#1A1A17] mb-4">
                  Job Details
                </h3>
                <div className="font-inter">
                  <p className="text-xs md:text-sm text-[#9A9A92] mb-0.5">
                    EMPLOYER
                  </p>
                  <p className="text-sm md:text-base text-[#1A1A17]">
                    {job.employer}
                  </p>
                </div>
                <div className="my-3.5 md:my-5 font-inter">
                  <p className="text-xs md:text-sm text-[#9A9A92] mb-0.5">
                    WORK SCHEDULE
                  </p>
                  <p className="text-sm md:text-base text-[#4A4A42]">
                    {job.workSchedule}
                  </p>
                </div>
                <div className="mb-3.5 md:mb-5 font-inter">
                  <p className="text-xs md:text-sm text-[#9A9A92] mb-0.5">
                    START DATE
                  </p>
                  <p className="text-sm md:text-base text-[#4A4A42]">
                    {job.startDate}
                  </p>
                </div>
                <div className="font-inter">
                  <p className="text-xs md:text-sm text-[#9A9A92] mb-0.5">
                    POSTED
                  </p>
                  <p className="text-sm md:text-base text-[#4A4A42]">
                    {postedLabel(job.postedDaysAgo)}
                  </p>
                </div>

                <hr className="border border-[#E5DDD0] mt-6 mb-3" />

                <div className="mt-5 rounded border border-[#E5DDD0]  p-3">
                  <div className="flex items-start gap-2">
                    <RiErrorWarningLine className="mt-0.5 w-6 h-6 shrink-0 text-[#B07D2A]" />
                    <p className="text-xs font-inter text-[#7A7A72]">
                      {job.trustNote}
                    </p>
                  </div>
                </div>
                <button
                  onClick={() =>
                    document
                      .getElementById("application-form-anchor")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="mt-5 w-full font-inter rounded bg-[#1F4D3A] py-2  md:py-3 text-xs font-semibold uppercase tracking-widest text-white transition-colors hover:bg-[#174030]"
                >
                  Apply for This Job
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-8 mt-5 md:py-10 bg-[#FAF8F4] w-full">
        <div className="w-[92%] md:max-w-3xl lg:max-w-2xl mx-auto">
          <h3 className="mb-2 text-xs font-inter font-semibold  text-[#B07D2A]">
            JOB APPLICATION
          </h3>

          <h2 className="text-lg md:text-xl lg:text-2xl font-bold text-[#1A1A17] mb-2">
            Apply for {job.title}
          </h2>
          <p className="mb-6 text-xs md:text-[13px] font-inter text-[#7A7A72]">
            Submit your application below. Our verification team will review
            your details and contact you within 3–5 business days.
          </p>
          <div className="p-4 bg-white font-inter">
            {submitted ? (
              <div className="flex flex-col items-center gap-3 py-10 text-center ">
                <CheckCircle size={44} className="text-[#3D8B6A]" />
                <p className="font-playfair text-xl font-semibold text-[#1A1A17]">
                  Application Submitted!
                </p>
                <p className="text-sm text-[#7A7A72]">
                  We'll review your details and get back to you within 3–5
                  business days.
                </p>
              </div>
            ) : (
              <div className="flex flex-col gap-5">
                {/* Row 1 */}
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="mb-1.5 block text-xs font-medium text-[#4A4A42]">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      value={form.fullName}
                      onChange={handleChange}
                      className={inputClass("fullName")}
                    />
                    {errors.fullName && (
                      <p className="mt-1 text-xs text-red-500">
                        {errors.fullName}
                      </p>
                    )}
                  </div>
                  <div>
                    <label className="mb-1.5 block text-xs font-medium text-[#4A4A42]">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      name="phoneNumber"
                      value={form.phoneNumber}
                      onChange={handleChange}
                      className={inputClass("phoneNumber")}
                    />
                    {errors.phoneNumber && (
                      <p className="mt-1 text-xs text-red-500">
                        {errors.phoneNumber}
                      </p>
                    )}
                  </div>
                </div>

                {/* Row 2 */}
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="mb-1.5 block text-xs font-medium text-[#4A4A42]">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="emailAddress"
                      value={form.emailAddress}
                      onChange={handleChange}
                      className={inputClass("emailAddress")}
                    />
                    {errors.emailAddress && (
                      <p className="mt-1 text-xs text-red-500">
                        {errors.emailAddress}
                      </p>
                    )}
                  </div>
                  <div>
                    <label className="mb-1.5 block text-xs font-medium text-[#4A4A42]">
                      Current Location <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="currentLocation"
                      value={form.currentLocation}
                      onChange={handleChange}
                      className={inputClass("currentLocation")}
                    />
                    {errors.currentLocation && (
                      <p className="mt-1 text-xs text-red-500">
                        {errors.currentLocation}
                      </p>
                    )}
                  </div>
                </div>

                {/* Row 3 */}
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="mb-1.5 block text-xs font-medium text-[#4A4A42]">
                      Years of Experience{" "}
                      <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="number"
                      name="yearsExperience"
                      value={form.yearsExperience}
                      onChange={handleChange}
                      min="0"
                      placeholder="e.g. 3"
                      className={inputClass("yearsExperience")}
                    />
                    {errors.yearsExperience && (
                      <p className="mt-1 text-xs text-red-500">
                        {errors.yearsExperience}
                      </p>
                    )}
                  </div>
                  <div>
                    <label className="mb-1.5 block text-xs font-medium text-[#4A4A42]">
                      Availability <span className="text-red-500">*</span>
                    </label>
                    <select
                      name="availability"
                      value={form.availability}
                      onChange={handleChange}
                      className={inputClass("availability")}
                    >
                      <option value="">Select availability</option>
                      <option>Immediately</option>
                      <option>Within 2 weeks</option>
                      <option>Within 1 month</option>
                      <option>More than 1 month</option>
                    </select>
                    {errors.availability && (
                      <p className="mt-1 text-xs text-red-500">
                        {errors.availability}
                      </p>
                    )}
                  </div>
                </div>

                {/* Cover Letter */}
                <div>
                  <label className="mb-1.5 block text-xs font-medium text-[#4A4A42]">
                    Cover Letter / Additional Information{" "}
                    <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    name="coverLetter"
                    value={form.coverLetter}
                    onChange={handleChange}
                    rows={5}
                    placeholder="Tell us about your relevant experience and why you're interested in this position..."
                    className={`${inputClass("coverLetter")} resize-none placeholder:text-[#B0AEA8]`}
                  />
                  {errors.coverLetter && (
                    <p className="mt-1 text-xs text-red-500">
                      {errors.coverLetter}
                    </p>
                  )}
                </div>

                {/* Consent */}
                <div className="border border-[#E5DDD0] p-3 bg-[#F7F5F1]">
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      name="consent"
                      checked={form.consent}
                      onChange={handleChange}
                      className="mt-0.5 h-4 w-4 shrink-0 accent-[#1F4D3A]"
                    />
                    <span className="text-xs leading-relaxed text-[#7A7A72]">
                      By submitting this application, you consent to HAGROSPHERE
                      conducting background verification, reference checks, and
                      skills assessment as part of the Farm Job Agent placement
                      process. All information provided will be treated
                      confidentially.
                    </span>
                  </label>
                  {errors.consent && (
                    <p className="mt-1 text-xs text-red-500">
                      {errors.consent}
                    </p>
                  )}
                </div>

                <button
                  onClick={handleSubmit}
                  className="w-full rounded bg-[#1F4D3A] py-2 lg:py-3.5 text-xs md:text-sm  uppercase tracking-widest text-white transition-colors hover:bg-[#174030] active:scale-[0.99]"
                >
                  Submit Application
                </button>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default JobDetails;
