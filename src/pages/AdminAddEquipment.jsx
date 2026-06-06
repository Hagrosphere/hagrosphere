import { useState } from "react";
import { LuChevronDown } from "react-icons/lu";
import { useNavigate } from "react-router";
import { useEquipment } from "../features/equipment/hooks/useEquipment";
import { toast } from "react-toastify";

const inputCls =
  "w-full px-3 py-2 border border-[#E5E7EB] rounded-lg text-[13px] text-[#374151] bg-white outline-none focus:border-[#1A6B3C] focus:ring-1 focus:ring-[#1A6B3C] transition-colors placeholder:text-[#9CA3AF]";

const Label = ({ children, required }) => (
  <label className="block text-[12px] font-medium text-[#374151] mb-1.5">
    {children}
    {required && <span className="text-[#EF4444] ml-0.5">*</span>}
  </label>
);

const Section = ({ title, children }) => (
  <div className="bg-white border border-[#ECECEC] rounded-2xl p-5">
    <p className="font-bold text-[15px] text-[#111] mb-4">{title}</p>
    {children}
  </div>
);

const SelectField = ({ value, onChange, options }) => (
  <div className="relative">
    <select
      value={value}
      onChange={onChange}
      className={`${inputCls} appearance-none cursor-pointer pr-8`}
    >
      <option value="">Select…</option>
      {options.map((o) => (
        <option key={typeof o === "string" ? o : o.id} value={typeof o === "string" ? o : o.id}>
          {typeof o === "string" ? o : o.name}
        </option>
      ))}
    </select>
    <LuChevronDown
      size={14}
      className="absolute right-3 top-1/2 -translate-y-1/2 text-[#9CA3AF] pointer-events-none"
    />
  </div>
);

const Divider = () => (
  <div className="border-b border-[#F0F0F0] mt-3 mb-7 -mx-5" />
);

const AdminAddEquipment = () => {
  const navigate = useNavigate();
  const { create, categories, isCreating } = useEquipment();

  const [form, setForm] = useState({
    name: "",
    categoryId: "",
    location: "",
    description: "",
    specifications: "",
    pricePerDay: "",
    pricePerWeek: "",
    pricePerMonth: "",
    status: "AVAILABLE",
    imageUrls: [""], // Array for multiple image URLs
    brand: "",
    model: "",
    condition: "GOOD",
    features: "",
  });

  const set = (field) => (e) => setForm((prev) => ({ ...prev, [field]: e.target.value }));

  const addImageUrl = () => {
    setForm(prev => ({ ...prev, imageUrls: [...prev.imageUrls, ""] }));
  };

  const removeImageUrl = (index) => {
    setForm(prev => ({
      ...prev,
      imageUrls: prev.imageUrls.filter((_, i) => i !== index)
    }));
  };

  const setImageUrl = (index, value) => {
    setForm(prev => ({
      ...prev,
      imageUrls: prev.imageUrls.map((url, i) => i === index ? value : url)
    }));
  };

  const handleSubmit = async () => {
    // Basic validation
    if (!form.name || !form.categoryId || !form.location || !form.description || !form.pricePerDay) {
      toast.error("Please fill in all required fields");
      return;
    }

    const pricePerDay = parseFloat(form.pricePerDay);
    if (isNaN(pricePerDay) || pricePerDay <= 0) {
      toast.error("Please enter a valid daily rate");
      return;
    }

    try {
      const images = form.imageUrls
        .filter(url => url.trim())
        .map((url, index) => ({
          url: url.trim(),
          isPrimary: index === 0,
          order: index,
        }));

      const features = form.features
        .split('\n')
        .map(f => f.trim())
        .filter(f => f);

      const payload = {
        name: form.name.trim(),
        categoryId: form.categoryId,
        location: form.location.trim(),
        description: form.description.trim(),
        pricePerDay,
        status: form.status,
        currency: "NGN",
      };

      // Add optional numeric fields only if valid
      if (form.pricePerWeek && !isNaN(parseFloat(form.pricePerWeek))) {
        payload.pricePerWeek = parseFloat(form.pricePerWeek);
      }
      if (form.pricePerMonth && !isNaN(parseFloat(form.pricePerMonth))) {
        payload.pricePerMonth = parseFloat(form.pricePerMonth);
      }

      // Add optional string fields only if not empty
      if (form.brand?.trim()) payload.brand = form.brand.trim();
      if (form.model?.trim()) payload.model = form.model.trim();
      if (form.condition) payload.condition = form.condition;
      if (features.length > 0) payload.features = features;
      if (images.length > 0) payload.images = images;
      if (form.specifications?.trim()) {
        payload.specifications = { details: form.specifications.trim() };
      }

      console.log('Sending payload:', JSON.stringify(payload, null, 2));
      await create(payload).unwrap();

      toast.success("Equipment added successfully!");
      navigate("/admin/manage-equipment");
    } catch (err) {
      console.error('Equipment creation error:', err);
      console.error('Validation errors:', err?.data?.errors);
      
      // Show specific validation errors
      if (err?.data?.errors && Array.isArray(err.data.errors)) {
        const errorMessages = err.data.errors.map(e => `${e.field}: ${e.message}`).join('\n');
        toast.error(`Validation failed:\n${errorMessages}`);
      } else {
        const message = err?.data?.message;
        toast.error(message ?? "Failed to add equipment. Check console for details.");
      }
    }
  };

  return (
    <div className="w-full pt-3 mb-8">
      <div className="grid grid-cols-1 md:grid-cols-[1fr_260px] gap-4 items-start">

        {/* ════════════════ LEFT COLUMN ════════════════ */}
        <div className="flex flex-col gap-4">

          {/* Basic Information */}
          <Section title="Basic Information">
            <Divider />

            {/* Equipment name */}
            <div className="mb-4 font-inter">
              <Label required>Equipment Name</Label>
              <input
                className={inputCls}
                placeholder="e.g., Massey Ferguson 375 Tractor"
                value={form.name}
                onChange={set("name")}
              />
            </div>

            {/* Category + Location */}
            <div className="grid grid-cols-2 gap-4 mb-4 font-inter">
              <div>
                <Label required>Category</Label>
                <SelectField
                  value={form.categoryId}
                  onChange={set("categoryId")}
                  options={categories}
                />
              </div>
              <div>
                <Label required>Location</Label>
                <input
                  className={inputCls}
                  placeholder="e.g., Ogun State"
                  value={form.location}
                  onChange={set("location")}
                />
              </div>
            </div>

            {/* Description */}
            <div className="mb-4 font-inter">
              <Label required>Description</Label>
              <textarea
                className={`${inputCls} resize-none h-[80px]`}
                placeholder="Describe the equipment, its use case, and condition..."
                value={form.description}
                onChange={set("description")}
              />
            </div>

            {/* Brand, Model, Condition */}
            <div className="grid grid-cols-3 gap-4 mb-4 font-inter">
              <div>
                <Label>Brand</Label>
                <input
                  className={inputCls}
                  placeholder="e.g., John Deere"
                  value={form.brand}
                  onChange={set("brand")}
                />
              </div>
              <div>
                <Label>Model</Label>
                <input
                  className={inputCls}
                  placeholder="e.g., 5075E"
                  value={form.model}
                  onChange={set("model")}
                />
              </div>
              <div>
                <Label>Condition</Label>
                <SelectField
                  value={form.condition}
                  onChange={set("condition")}
                  options={[
                    { id: "NEW", name: "New" },
                    { id: "EXCELLENT", name: "Excellent" },
                    { id: "GOOD", name: "Good" },
                    { id: "FAIR", name: "Fair" },
                  ]}
                />
              </div>
            </div>

            {/* Features */}
            <div className="mb-4 font-inter">
              <Label>Features (one per line)</Label>
              <textarea
                className={`${inputCls} resize-none h-[100px]`}
                placeholder={`75HP diesel engine\n4-wheel drive system\nPower steering\nAir-conditioned cabin`}
                value={form.features}
                onChange={set("features")}
              />
            </div>

            {/* Technical Specifications */}
            <div className="font-inter">
              <Label>Technical Specifications</Label>
              <div className="border font-inter border-[#E5E7EB] rounded-lg p-3 bg-white">
                <textarea
                  className="w-full text-[12px] text-[#374151] font-mono bg-transparent outline-none resize-none h-[88px] leading-relaxed placeholder:text-[#9CA3AF] placeholder:font-sans"
                  placeholder={`Engine: \nTransmission: \nFuel Capacity: \nWeight:`}
                  value={form.specifications}
                  onChange={set("specifications")}
                />
              </div>
            </div>
          </Section>

          {/* Pricing */}
          <Section title="Pricing">
            <Divider />
            <div className="grid grid-cols-3 gap-4 font-inter">
              {[
                { label: "Daily Rate (₦)", field: "pricePerDay", placeholder: "e.g., 15000", required: true },
                { label: "Weekly Rate (₦)", field: "pricePerWeek", placeholder: "e.g., 90000" },
                { label: "Monthly Rate (₦)", field: "pricePerMonth", placeholder: "e.g., 300000" },
              ].map((f) => (
                <div key={f.field}>
                  <Label required={f.required}>{f.label}</Label>
                  <input
                    className={inputCls}
                    placeholder={f.placeholder}
                    type="number"
                    min="0"
                    value={form[f.field]}
                    onChange={set(f.field)}
                  />
                </div>
              ))}
            </div>
          </Section>

          {/* Images */}
          <Section title="Equipment Images">
            <Divider />
            <div className="font-inter space-y-3">
              {form.imageUrls.map((url, index) => (
                <div key={index} className="flex gap-2">
                  <div className="flex-1">
                    <Label>{index === 0 ? "Primary Image URL" : `Image ${index + 1} URL`}</Label>
                    <input
                      className={inputCls}
                      placeholder="https://example.com/image.jpg"
                      value={url}
                      onChange={(e) => setImageUrl(index, e.target.value)}
                    />
                  </div>
                  {form.imageUrls.length > 1 && (
                    <button
                      type="button"
                      onClick={() => removeImageUrl(index)}
                      className="mt-6 px-3 py-2 text-sm text-red-600 hover:text-red-700 border-0 bg-transparent cursor-pointer"
                    >
                      Remove
                    </button>
                  )}
                </div>
              ))}
              <button
                type="button"
                onClick={addImageUrl}
                className="text-sm text-[#1A6B3C] hover:text-[#155C32] font-medium border-0 bg-transparent cursor-pointer"
              >
                + Add Another Image
              </button>
            </div>
          </Section>
        </div>

        {/* ════════════════ RIGHT COLUMN ════════════════ */}
        <div className="bg-white border border-[#ECECEC] rounded-2xl p-5">
          <p className="font-bold text-[15px] text-[#111] mb-4">Status & Actions</p>
          <Divider />

          {/* Availability Status */}
          <div className="mb-4 font-inter">
            <Label>Availability Status</Label>
            <SelectField
              value={form.status}
              onChange={set("status")}
              options={[
                { id: "AVAILABLE", name: "Available" },
                { id: "RENTED", name: "In Use" },
                { id: "MAINTENANCE", name: "Maintenance" },
              ]}
            />
          </div>

          {/* Add Button */}
          <button
            onClick={handleSubmit}
            disabled={isCreating}
            className="w-full font-inter bg-[#1A6B3C] hover:bg-[#155C32] disabled:opacity-60 text-white font-semibold text-[14px] py-2.5 rounded-xl border-0 cursor-pointer transition-colors mb-2"
          >
            {isCreating ? "Adding..." : "Add Equipment"}
          </button>

          {/* Cancel */}
          <button
            className="w-full font-inter bg-white hover:bg-[#F9FAFB] text-[#374151] font-medium text-[14px] py-2.5 rounded-xl border border-[#E5E7EB] cursor-pointer transition-colors"
            onClick={() => navigate(-1)}
          >
            Cancel
          </button>

          {/* Helper info */}
          <div className="mt-4 p-3 bg-[#F0FDF4] rounded-xl">
            <p className="text-[11px] text-[#15803D] font-medium mb-1">Required fields</p>
            <ul className="text-[11px] text-[#16A34A] space-y-0.5">
              <li>• Equipment name</li>
              <li>• Category</li>
              <li>• Location</li>
              <li>• Description</li>
              <li>• Daily rate</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminAddEquipment;
