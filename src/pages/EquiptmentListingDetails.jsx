import { IoMdArrowBack } from "react-icons/io";
import { FiCheckCircle } from "react-icons/fi";
import { FaArrowRightLong } from "react-icons/fa6";
import { RiMapPinLine } from "react-icons/ri";
import { HeroSection } from "../components";
import { useNavigate, useParams } from "react-router";
import { equipmentData } from "../components/DummyData";
import { useState } from "react";
import { Diaspora } from "../assets";

const EquiptmentListingDetails = () => {
  const [activeImage, setActiveImage] = useState(0);
  const navigate = useNavigate();
  const { id } = useParams();
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    emailAddress: "",
    currentLocation: "",
    farmSize: "",
    usageDuration: "",
    additionalDetails: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const equipment = equipmentData.find((item) => item.id === id);
  if (!equipment) return <div>Not found</div>;

  const {
    category,
    status,
    name,
    fullDescription,
    state,
    price,
    lastServiced,
    specifications,
    trustBadges,
    usageCategory,
    images,
  } = equipment;

  const available = status === "Available";
  const FALLBACK_IMAGE =
    "https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=800&auto=format&fit=crop";

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const requiredFields = {
    fullName: "Full Name",
    phoneNumber: "Phone Number",
    emailAddress: "Email Address",
    currentLocation: "Current Location",
  };

  const handleSubmit = () => {
    const newErrors = {};
    Object.entries(requiredFields).forEach(([field, label]) => {
      if (!formData[field].trim()) {
        newErrors[field] = `${label} is required`;
      }
    });

    // Basic email format check
    if (
      formData.emailAddress &&
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.emailAddress)
    ) {
      newErrors.emailAddress = "Enter a valid email address";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    console.log("Form submitted:", formData);
    setSubmitted(true);
  };

  return (
    <div className="w-full">
      <HeroSection
        subtitle="EQUIPMENT ACCESS"
        title="Book Agricultural Equipment"
        description="Browse verified agricultural machinery available for coordinated access. All equipment undergoes inspection and verification before listing."
      />
      <section className="py-6 bg-white md:py-8">
        <div className="w-[96%] md:w-[94%] mx-auto">
          <button
            className="flex items-center gap-2 text-[#2E6B4F] cursor-pointer font-medium"
            onClick={() => navigate(-1)}
          >
            <IoMdArrowBack className="inline-block w-4.5 h-4.5  " />
            <span className="text-sm font-inter ">Back to all equipment</span>
          </button>

          <div className="grid gap-10 md:gap-16 lg:grid-cols-[1fr_520px] mt-10">
            <div className="flex flex-col gap-8">
              {/* Main image */}
              <div className="overflow-hidden rounded-lg">
                <img
                  src={images[activeImage]}
                  alt={name}
                  className="h-87.5 w-full object-cover transition-all duration-300"
                  onError={(e) => {
                    e.target.src =
                      "https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=800&auto=format&fit=crop";
                  }}
                />
              </div>

              {/* Thumbnails */}
              <div className="flex gap-3">
                {images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImage(idx)}
                    className={`overflow-hidden rounded transition-all cursor-pointer duration-200 ${
                      activeImage === idx
                        ? "ring-2 ring-[#1F4D3A] ring-offset-2"
                        : "opacity-70 hover:opacity-100"
                    }`}
                  >
                    <img
                      src={img}
                      alt={`View ${idx + 1}`}
                      className="object-cover h-20 w-28"
                      onError={(e) => {
                        e.target.src =
                          "https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=800&auto=format&fit=crop";
                      }}
                    />
                  </button>
                ))}
              </div>
              {/* Equipment Details */}
              <div>
                <h2 className="text-lg md:text-xl lg:text-2xl font-semibold text-[#1A1A17] mb-3">
                  Equipment Details
                </h2>
                <p className="text-sm font-inter leading-[1.75] text-[#4A4A42]">
                  {fullDescription}
                </p>
              </div>
              {/* Specifications */}
              <div>
                <h3 className="font-playfair text-xl font-semibold text-[#1A1A17] mb-4.5">
                  Specifications
                </h3>
                <div className="divide-y divide-[#E8E2D9] border-t font-inter border-[#E8E2D9]">
                  {specifications.map((spec) => (
                    <div
                      key={spec.label}
                      className="flex items-center justify-between py-3"
                    >
                      <span className="text-sm text-[#7A7A72]">
                        {spec.label}
                      </span>
                      <span className="text-sm font-semibold text-[#1A1A17]">
                        {spec.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              {/* Usage Category */}
              <div>
                <h3 className="font-playfair text-xl font-semibold text-[#1A1A17] mb-2">
                  Usage Category
                </h3>
                <p className="text-sm font-inter leading-[1.75] text-[#4A4A42]">
                  {usageCategory}
                </p>
              </div>
            </div>

            {/* ── RIGHT COLUMN ─────────────────────────────────────────────── */}
            <div className="flex flex-col gap-6">
              {/* Breadcrumb + title block */}
              <div>
                <div className="flex items-center gap-3 mb-3 font-inter">
                  <span className="text-xs font-medium tracking-[0.08em] text-[#B07D2A]">
                    {category}
                  </span>
                  <span
                    className={`rounded px-2.5 py-1 text-xs font-medium tracking-[0.024em] ${
                      available
                        ? "bg-[rgba(63,125,90,0.1)] text-[#3D8B6A]"
                        : "bg-[#E5DDD0] text-[#C6922A]"
                    }`}
                  >
                    {status}
                  </span>
                </div>

                <h1 className="font-playfair text-lg md:text-xl lg:text-2xl font-bold leading-tight text-[#1A1A17] mb-3">
                  {name}
                </h1>

                <div className="flex items-center gap-1.5 mb-1">
                  <RiMapPinLine size={14} className="text-[#7A7A72]" />
                  <span className="text-sm text-[#7A7A72]">{state}</span>
                </div>

                <p className="text-xs text-[#9A9A92] mt-2">
                  Last serviced: {lastServiced}
                </p>
              </div>
              {/* Trust badges */}
              <div className="flex flex-col gap-2 font-inter">
                {trustBadges.map((badge) => (
                  <div key={badge} className="flex items-center gap-2">
                    <FiCheckCircle
                      size={15}
                      className="text-[#3D8B6A] shrink-0"
                    />
                    <span className="text-sm text-[#4A4A42]">{badge}</span>
                  </div>
                ))}
              </div>
              {/* Price */}
              <div className="border-t border-[#E8E2D9] pt-4">
                <span className="font-playfair text-lg md:text-xl lg:text-2xl font-bold text-[#1A1A17]">
                  {price}
                </span>
              </div>
              {/* Request form */}
              <div className="bg-[#F7F5F1] p-6">
                <h3 className="font-playfair text-lg font-semibold text-[#1A1A17] mb-5">
                  Request Equipment Access
                </h3>

                {submitted ? (
                  <div className="flex flex-col items-center gap-3 py-8 text-center">
                    <FiCheckCircle size={40} className="text-[#3D8B6A]" />
                    <p className="font-medium text-[#1A1A17]">
                      Application Submitted!
                    </p>
                    <p className="text-sm text-[#7A7A72]">
                      We'll review your request and get back to you shortly.
                    </p>
                  </div>
                ) : (
                  <div className="flex flex-col gap-4">
                    {/* Full Name */}
                    <div>
                      <label className="mb-1.5 block text-xs font-medium text-[#4A4A42]">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        className={`w-full rounded border bg-[#FAFAF8] px-3 py-2.5 text-sm text-[#1A1A17] outline-none focus:ring-1 transition-colors ${
                          errors.fullName
                            ? "border-red-400 focus:border-red-400 focus:ring-red-400"
                            : "border-[#D4C9B8] focus:border-[#1F4D3A] focus:ring-[#1F4D3A]"
                        }`}
                      />
                      {errors.fullName && (
                        <p className="mt-1 text-xs text-red-500">
                          {errors.fullName}
                        </p>
                      )}
                    </div>

                    {/* Phone Number */}
                    <div>
                      <label className="mb-1.5 block text-xs font-medium text-[#4A4A42]">
                        Phone Number <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        name="phoneNumber"
                        value={formData.phoneNumber}
                        onChange={handleChange}
                        className={`w-full rounded border bg-[#FAFAF8] px-3 py-2.5 text-sm text-[#1A1A17] outline-none focus:ring-1 transition-colors ${
                          errors.phoneNumber
                            ? "border-red-400 focus:border-red-400 focus:ring-red-400"
                            : "border-[#D4C9B8] focus:border-[#1F4D3A] focus:ring-[#1F4D3A]"
                        }`}
                      />
                      {errors.phoneNumber && (
                        <p className="mt-1 text-xs text-red-500">
                          {errors.phoneNumber}
                        </p>
                      )}
                    </div>

                    {/* Email */}
                    <div>
                      <label className="mb-1.5 block text-xs font-medium text-[#4A4A42]">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        name="emailAddress"
                        value={formData.emailAddress}
                        onChange={handleChange}
                        className={`w-full rounded border bg-[#FAFAF8] px-3 py-2.5 text-sm text-[#1A1A17] outline-none focus:ring-1 transition-colors ${
                          errors.emailAddress
                            ? "border-red-400 focus:border-red-400 focus:ring-red-400"
                            : "border-[#D4C9B8] focus:border-[#1F4D3A] focus:ring-[#1F4D3A]"
                        }`}
                      />
                      {errors.emailAddress && (
                        <p className="mt-1 text-xs text-red-500">
                          {errors.emailAddress}
                        </p>
                      )}
                    </div>

                    {/* Current Location */}
                    <div>
                      <label className="mb-1.5 block text-xs font-medium text-[#4A4A42]">
                        Current Location <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="currentLocation"
                        value={formData.currentLocation}
                        onChange={handleChange}
                        className={`w-full rounded border bg-[#FAFAF8] px-3 py-2.5 text-sm text-[#1A1A17] outline-none focus:ring-1 transition-colors ${
                          errors.currentLocation
                            ? "border-red-400 focus:border-red-400 focus:ring-red-400"
                            : "border-[#D4C9B8] focus:border-[#1F4D3A] focus:ring-[#1F4D3A]"
                        }`}
                      />
                      {errors.currentLocation && (
                        <p className="mt-1 text-xs text-red-500">
                          {errors.currentLocation}
                        </p>
                      )}
                    </div>

                    {/* Farm Size */}
                    <div>
                      <label className="mb-1.5 block text-xs font-medium text-[#4A4A42]">
                        Farm Size (hectares)
                      </label>
                      <input
                        type="number"
                        name="farmSize"
                        value={formData.farmSize}
                        onChange={handleChange}
                        min="0"
                        className="w-full rounded border border-[#D4C9B8] bg-[#FAFAF8] px-3 py-2.5 text-sm text-[#1A1A17] outline-none focus:border-[#1F4D3A] focus:ring-1 focus:ring-[#1F4D3A] transition-colors"
                      />
                    </div>

                    {/* Intended Usage Duration */}
                    <div>
                      <label className="mb-1.5 block text-xs font-medium text-[#4A4A42]">
                        Intended Usage Duration
                      </label>
                      <input
                        type="text"
                        name="usageDuration"
                        value={formData.usageDuration}
                        onChange={handleChange}
                        placeholder="e.g. 3 days"
                        className="w-full rounded border border-[#D4C9B8] bg-[#FAFAF8] px-3 py-2.5 text-sm text-[#1A1A17] outline-none focus:border-[#1F4D3A] focus:ring-1 focus:ring-[#1F4D3A] transition-colors placeholder:text-[#B0AEA8]"
                      />
                    </div>

                    {/* Additional Details */}
                    <div>
                      <label className="mb-1.5 block text-xs font-medium text-[#4A4A42]">
                        Additional Details
                      </label>
                      <textarea
                        name="additionalDetails"
                        value={formData.additionalDetails}
                        onChange={handleChange}
                        rows={4}
                        placeholder="Describe your farming needs and timing requirements..."
                        className="w-full resize-none rounded border border-[#D4C9B8] bg-[#FAFAF8] px-3 py-2.5 text-sm text-[#1A1A17] outline-none focus:border-[#1F4D3A] focus:ring-1 focus:ring-[#1F4D3A] transition-colors placeholder:text-[#B0AEA8]"
                      />
                    </div>

                    {/* Submit */}
                    <button
                      onClick={handleSubmit}
                      disabled={!available}
                      className={`mt-1 w-full rounded px-6 py-1.5 md:py-2  lg:py-3 text-sm font-semibold uppercase tracking-widest text-white transition-all duration-200 ${
                        available
                          ? "bg-[#1F4D3A] hover:bg-[#174030] active:scale-[0.98]"
                          : "cursor-not-allowed bg-[#9A9A92]"
                      }`}
                    >
                      {available
                        ? "Submit Application"
                        : "Currently Unavailable"}
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-8 mt-5 md:py-10 bg-[#F7F5F1] w-full">
        <div className="w-[90%] md:w-[94%] mx-auto">
          <h4 className="text-[#B07D2A] text-xs font-medium font-inter">
            MORE EQUIPMENT
          </h4>
          <h2 className="mt-4 text-xl font-bold mb-7 md:text-2xl lg:text-3xl">
            Related Equipment
          </h2>

          <div className="mt-6 md:mt-8">
            <div className="grid grid-cols-1 gap-5 md:gap-8 lg:gap-16 md:grid-cols-3">
              {equipmentData.slice(0, 3).map((item) => {
                const thumbnail = item.images[0] || FALLBACK_IMAGE;
                return (
                  <div
                    className="w-[90%] mx-auto md:w-full bg-white"
                    key={item.id}
                  >
                    <img
                      src={thumbnail}
                      alt={item.name}
                      className="object-cover w-full h-40 md:h-48"
                      onError={(e) => {
                        e.target.src = FALLBACK_IMAGE;
                      }}
                    />
                    <div className="pt-5 pb-3 w-[90%] mx-auto">
                      <h2 className="text-base font-medium lg:text-lg">
                        {item.name}
                      </h2>
                      <div className="flex items-center gap-1.5 my-4">
                        <RiMapPinLine size={16} className="text-[#7A7A72]" />
                        <span className="text-sm text-[#7A7A72]">
                          {item.state}
                        </span>
                      </div>
                      <button
                        className="flex items-center gap-2 text-sm font-medium cursor-pointer font-inter text-accent"
                        onClick={() =>
                          navigate(`/equipment-listing-details/${item.id}`)
                        }
                      >
                        <span>View Detail</span>
                        <FaArrowRightLong className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EquiptmentListingDetails;
