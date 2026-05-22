import { BsFillPersonFill } from "react-icons/bs";
import { LuSave } from "react-icons/lu";
import { FiLock } from "react-icons/fi";
import { IoGlobeOutline } from "react-icons/io5";

const Card = ({ children, className = "" }) => (
  <div
    className={`bg-white border border-[#ECECEC] rounded-2xl p-6 ${className}`}
  >
    {children}
  </div>
);

const Divider = () => (
  <div className="border-b border-[#F0F0F0] mt-3 mb-7 -mx-6" />
);

const FormField = ({ label, value, placeholder, type = "text" }) => (
  <div className="flex flex-col gap-1.5">
    <label className="text-xs  md:text-sm text-[#6B7280] font-medium">
      {label}
    </label>
    <input
      type={type}
      defaultValue={value}
      placeholder={placeholder}
      className="w-full px-3 py-2 border border-[#E5E7EB] rounded-lg text-[13px] text-[#374151] bg-[#FAFAFA] outline-none focus:border-[#1A6B3C] focus:ring-1 focus:ring-[#1A6B3C] transition-colors"
    />
  </div>
);

const SectionHeader = ({ icon, title }) => (
  <div className="flex items-center gap-2 mb-5  ">
    <span className="text-xl md:text-2xl">{icon}</span>
    <span className="font-bold text-lg md:text-xl  text-[#111]">{title}</span>
  </div>
);

const SaveBtn = ({ label }) => (
  <button className="w-full md:w-fit justify-center mt-5 inline-flex font-inter items-center gap-1.5 bg-[#1A6B3C] hover:bg-[#155C32] text-white text-sm font-medium px-5 py-1.5 md:py-2 rounded-lg border-0 cursor-pointer transition-colors">
    <span className="text-base">
      <LuSave />
    </span>
    {label}
  </button>
);

const AdminSetting = () => {
  const approvalOptions = [
    { label: "Auto-approve equipment listings", checked: true },
    { label: "Auto-approve job postings", checked: true },
    { label: "Require email verification for new users", checked: false },
    { label: "Receive email notifications", checked: false },
  ];

  return (
    <div>
      <section className=" pt-3.5 ">
        <Card>
          <SectionHeader
            icon={<BsFillPersonFill />}
            title="Profile Information"
          />
          <Divider />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 font-inter">
            <FormField label="Full Name" value="Admin Hagrosphere" />
            <FormField label="Email Address" value="admin@hagrosphere.ng" />
            <FormField label="Phone Number" value="+234 807 234 5678" />
            <FormField label="Role" value="Administrator" />
          </div>
          <SaveBtn label="Save Profile" />
        </Card>
      </section>
      <section className="my-8">
        <Card>
          <SectionHeader icon={<FiLock />} title="Change Password" />
          <Divider />
          <div className="grid  grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 font-inter">
            <FormField
              label="Current Password"
              type="password"
              placeholder="••••••••"
            />
            <FormField label="Email Address" value="admin@hagrosphere.ng" />
            <FormField
              label="New Password"
              type="password"
              placeholder="••••••••"
            />
            <FormField label="Role" value="Administrator" />
            <FormField
              label="Confirm New Password"
              type="password"
              placeholder="••••••••"
            />
            <FormField label="Role" value="Administrator" />
          </div>
          <SaveBtn label="Update Password" />
        </Card>
      </section>
      <section className="mb-6">
        <Card>
          <SectionHeader icon={<IoGlobeOutline />} title="Platform Settings" />
          <Divider />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 font-inter">
            <FormField label="Site Name" value="HAGROSPHERE" />
            <FormField
              label="Tagline"
              value="Agricultural Coordination Platform"
            />
            <FormField label="Contact Email" value="enquiry@hagrosphere.ng" />
            <FormField label="Support Email" value="support@hagrosphere.ng" />
            <FormField
              label="Confirm New Password"
              type="password"
              placeholder="••••••••"
            />
            <FormField label="Role" value="Administrator" />
          </div>

          <p className="mt-6 md:mt-8 font-semibold text-sm md:text-base text-[#111] mb-4 font-inter">
            Approval Settings
          </p>
          <div className="flex flex-col gap-2.5 font-inter ">
            {approvalOptions.map((opt, i) => (
              <label
                key={i}
                className="flex items-center gap-[9px] cursor-pointer"
              >
                <input
                  type="checkbox"
                  defaultChecked={opt.checked}
                  className="w-[15px] h-[15px] accent-[#1A6B3C] cursor-pointer"
                />
                <span className="text-[13px] text-[#374151]">{opt.label}</span>
              </label>
            ))}
          </div>

          <SaveBtn label="Save Settings" />
        </Card>
      </section>
    </div>
  );
};

export default AdminSetting;
