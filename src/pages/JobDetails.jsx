import { useState } from "react";
import { useNavigate, useParams } from "react-router";
import { RiMapPinLine, RiErrorWarningLine } from "react-icons/ri";
import { GiBanknote } from "react-icons/gi";
import { FiCheckCircle } from "react-icons/fi";
import { FaRegClock } from "react-icons/fa";
import { HeroSection } from "../components";
import { IoMdArrowBack } from "react-icons/io";
import { useJobDetail } from "../features/jobs/hooks/useJobs";
import { useSubmitJobApplicationMutation } from "../features/jobs/jobsApi";
import { toast } from "react-toastify";

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

  const { data: jobData, isLoading, isError } = useJobDetail(id);
  const job = jobData?.data ?? jobData;
  const [submitApplication, { isLoading: isSubmitting }] = useSubmitJobApplicationMutation();

  const typeBgMap = {
    SEASONAL: "bg-[#FFF7E6] text-[#B07D2A]",
    FULL_TIME: "bg-[rgba(63,125,90,0.1)] text-[#3D8B6A]",
    CONTRACT: "bg-[#EFF5FF] text-[#2A7AB0]",
    PART_TIME: "bg-[#F5F3FF] text-[#7C3AED]",
    INTERNSHIP: "bg-[#FFF7ED] text-[#D97706]",
  };

  const formatSalary = (min, max) => {
    if (!min) return "Salary negotiable";
    return `₦${Number(min).toLocaleString()} – ₦${Number(max ?? min).toLocaleString()}/month`;
  };

  const formatDate = (dateStr) => {
    if (!dateStr) return "Recently";
    const diff = Math.floor((Date.now() - new Date(dateStr).getTime()) / (1000 * 60 * 60 * 24));
    if (diff === 0) return "Today";
    if (diff === 1) return "1 day ago";
    if (diff < 7) return `${diff} days ago`;
    const w = Math.floor(diff / 7);
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

  const handleSubmit = async () => {
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
    
    try {
      await submitApplication({
        jobId: job.id,
        data: {
          fullName: form.fullName,
          phone: form.phoneNumber,
          email: form.emailAddress,
          currentLocation: form.currentLocation,
          yearsExperience: parseInt(form.yearsExperience),
          availability: form.availability,
          coverLetter: form.coverLetter,
        },
      }).unwrap();
      
      setErrors({});
      setSubmitted(true);
      toast.success("Application submitted successfully!");
    } catch (error) {
      console.error("Application submission error:", error);
      toast.error(error?.data?.message ?? "Failed to submit application");
    }
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="border-t-4 border-b-4 rounded-full animate-spin h-12 w-12 border-bg-btn-primary" />
      </div>
    );
  }

  if (isError || !job) {
    return (
      <div className="flex flex-col items-center justify-center h-64 gap-4">
        <h2 className="text-lg font-semibold">Job not found</h2>
        <button onClick={() => navigate("/job-listing")} className="text-[#2E6B4F] text-sm font-medium cursor-pointer">
          ← Back to jobs
        </button>
      </div>
    );
  }

  return (
    <div className="w-full">
      <HeroSection subtitle="Job Opportunity" title={job.title} />
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
                <span className="text-xs font-semibold text-[#3D8B6A]">
                  {job.category?.name?.toUpperCase()}
                </span>
                <span className={`rounded px-2.5 py-0.5 text-xs font-medium ${typeBgMap[job.type] ?? "bg-[#E8E2D9] text-[#4A4A42]"}`}>
                  {job.type?.replace("_", "-")}
                </span>
              </div>
              <h1 className="text-lg  md:text-xl lg:text-2xl font-bold text-[#1A1A17] my-4">
                {job.title}
              </h1>
              <div className="flex flex-wrap gap-2.5 md:gap-4 font-inter text-xs md:text-sm text-[#7A7A72]">
                <span className="flex items-center gap-1.5">
                  <RiMapPinLine className="w-4 h-4 md:w-5 md:h-5" /> {job.location}
                </span>
                <span className="flex items-center gap-1.5">
                  <GiBanknote className="w-4 h-4 md:w-5 md:h-5" />
                  {formatSalary(job.salaryMin, job.salaryMax)}
                </span>
                {job.experience && (
                  <span className="flex items-center gap-1.5">
                    <FaRegClock className="w-4 h-4 md:w-5 md:h-5" /> {job.experience}
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

                {job.responsibilities && (
                  <>
                    <h3 className="mt-6 mb-3 text-base md:text-lg lg:text-xl font-semibold text-[#1A1A17]">
                      Responsibilities
                    </h3>
                    <p className="text-sm font-inter text-[#4A4A42] whitespace-pre-line">{job.responsibilities}</p>
                  </>
                )}

                {job.requirements && (
                  <>
                    <h3 className="mt-6 mb-3 text-base md:text-lg lg:text-xl font-semibold text-[#1A1A17]">
                      Requirements
                    </h3>
                    <p className="text-sm font-inter text-[#4A4A42] whitespace-pre-line">{job.requirements}</p>
                  </>
                )}

                {job.benefits && job.benefits.length > 0 && (
                  <>
                    <h3 className="mt-6 mb-3 text-base md:text-lg lg:text-xl font-semibold text-[#1A1A17]">
                      What We Offer
                    </h3>
                    <ul className="flex flex-col gap-2 font-inter">
                      {job.benefits.map((item, i) => (
                        <li key={i} className="flex items-center gap-2.5 text-xs md:text-sm text-[#4A4A42]">
                          <FiCheckCircle size={15} className="text-[#3D8B6A]" /> {item}
                        </li>
                      ))}
                    </ul>
                  </>
                )}

                {job.skills && job.skills.length > 0 && (
                  <div className="mt-6 flex flex-wrap gap-2">
                    {job.skills.map((skill, i) => (
                      <span key={i} className="text-xs bg-[#F0F4F0] text-[#2E6B4F] px-3 py-1 rounded-full font-inter">
                        {skill}
                      </span>
                    ))}
                  </div>
                )}
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
                    COMPANY
                  </p>
                  <p className="text-sm md:text-base text-[#1A1A17]">
                    {job.company}
                  </p>
                </div>
                <div className="my-3.5 md:my-5 font-inter">
                  <p className="text-xs md:text-sm text-[#9A9A92] mb-0.5">
                    EMPLOYMENT TYPE
                  </p>
                  <p className="text-sm md:text-base text-[#4A4A42]">{job.type?.replace("_", " ")}</p>
                </div>
                {job.deadline && (
                  <div className="mb-3.5 md:mb-5 font-inter">
                    <p className="text-xs md:text-sm text-[#9A9A92] mb-0.5">
                      APPLICATION DEADLINE
                    </p>
                    <p className="text-sm md:text-base text-[#4A4A42]">
                      {new Date(job.deadline).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })}
                    </p>
                  </div>
                )}
                <div className="font-inter">
                  <p className="text-xs md:text-sm text-[#9A9A92] mb-0.5">
                    POSTED
                  </p>
                  <p className="text-sm md:text-base text-[#4A4A42]">{formatDate(job.publishedAt ?? job.createdAt)}</p>
                </div>

                <hr className="border border-[#E5DDD0] mt-6 mb-3" />

                <div className="mt-5 rounded border border-[#E5DDD0] p-3">
                  <div className="flex items-start gap-2">
                    <RiErrorWarningLine className="mt-0.5 w-6 h-6 shrink-0 text-[#B07D2A]" />
                    <p className="text-xs font-inter text-[#7A7A72]">
                      All job postings on Hagrosphere are verified. Never pay to apply for a job.
                    </p>
                  </div>
                </div>

                {job.applicationUrl ? (
                  <a
                    href={job.applicationUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-5 w-full block text-center font-inter rounded bg-[#1F4D3A] py-2 md:py-3 text-xs font-semibold uppercase tracking-widest text-white transition-colors hover:bg-[#174030]"
                  >
                    Apply Now
                  </a>
                ) : (
                  <button
                    onClick={() => document.getElementById("application-form-anchor")?.scrollIntoView({ behavior: "smooth" })}
                    className="mt-5 w-full font-inter rounded bg-[#1F4D3A] py-2 md:py-3 text-xs font-semibold uppercase tracking-widest text-white transition-colors hover:bg-[#174030]"
                  >
                    Apply for This Job
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {!job.applicationUrl && (
        <section id="application-form-anchor" className="py-8 mt-5 md:py-10 bg-[#FAF8F4] w-full">
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
              <div className="flex flex-col items-center gap-3 py-10 text-center">
                <FiCheckCircle size={44} className="text-[#3D8B6A]" />
                <p className="text-xl font-semibold text-[#1A1A17]">
                  Application Submitted!
                </p>
                <p className="text-sm text-[#7A7A72]">
                  We'll review your details and get back to you within 3–5 business days.
                </p>
              </div>
            ) : (
              <div className="flex flex-col gap-5">
                {/* Row 1 */}
                <div className="grid gap-4 sm:grid-cols-2">
                  {[
                    { name: "fullName", label: "Full Name", type: "text" },
                    { name: "phoneNumber", label: "Phone Number", type: "tel" },
                    { name: "emailAddress", label: "Email Address", type: "email" },
                    { name: "currentLocation", label: "Current Location", type: "text" },
                  ].map((f) => (
                    <div key={f.name}>
                      <label className="mb-1.5 block text-xs font-medium text-[#4A4A42]">
                        {f.label} <span className="text-red-500">*</span>
                      </label>
                      <input type={f.type} name={f.name} value={form[f.name]} onChange={handleChange} className={inputClass(f.name)} />
                      {errors[f.name] && <p className="mt-1 text-xs text-red-500">{errors[f.name]}</p>}
                    </div>
                  ))}
                </div>

                {/* Row 2 */}
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="mb-1.5 block text-xs font-medium text-[#4A4A42]">
                      Years of Experience <span className="text-red-500">*</span>
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
                    Cover Letter <span className="text-red-500">*</span>
                  </label>
                  <textarea name="coverLetter" value={form.coverLetter} onChange={handleChange} rows={5} placeholder="Tell us about your relevant experience..." className={`${inputClass("coverLetter")} resize-none`} />
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
                      By submitting, you consent to HAGROSPHERE conducting background verification and reference checks as part of the placement process. All information will be treated confidentially.
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
                  disabled={isSubmitting}
                  className="w-full rounded bg-[#1F4D3A] py-2 lg:py-3.5 text-xs md:text-sm uppercase tracking-widest text-white transition-colors hover:bg-[#174030] disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Submitting..." : "Submit Application"}
                </button>
              </div>
            )}
          </div>
        </div>
      </section>
      )}
    </div>
  );
};

export default JobDetails;
