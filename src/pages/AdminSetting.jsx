import { useState } from "react";
import { BsFillPersonFill } from "react-icons/bs";
import { LuSave } from "react-icons/lu";
import { FiLock } from "react-icons/fi";
import { IoGlobeOutline } from "react-icons/io5";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../features/auth/slice/authSlice";
import { toast } from "react-toastify";

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

const FormField = ({ label, value, onChange, placeholder, type = "text", readOnly = false }) => (
  <div className="flex flex-col gap-1.5">
    <label className="text-xs  md:text-sm text-[#6B7280] font-medium">
      {label}
    </label>
    <input
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      readOnly={readOnly}
      className="w-full px-3 py-2 border border-[#E5E7EB] rounded-lg text-[13px] text-[#374151] bg-[#FAFAFA] outline-none focus:border-[#1A6B3C] focus:ring-1 focus:ring-[#1A6B3C] transition-colors disabled:opacity-60"
    />
  </div>
);

const SectionHeader = ({ icon, title }) => (
  <div className="flex items-center gap-2 mb-5  ">
    <span className="text-xl md:text-2xl">{icon}</span>
    <span className="font-bold text-lg md:text-xl  text-[#111]">{title}</span>
  </div>
);

const SaveBtn = ({ label, onClick, disabled = false }) => (
  <button 
    onClick={onClick}
    disabled={disabled}
    className="w-full md:w-fit justify-center mt-5 inline-flex font-inter items-center gap-1.5 bg-[#1A6B3C] hover:bg-[#155C32] text-white text-sm font-medium px-5 py-1.5 md:py-2 rounded-lg border-0 cursor-pointer transition-colors disabled:opacity-60"
  >
    <span className="text-base">
      <LuSave />
    </span>
    {label}
  </button>
);

const AdminSetting = () => {
  const currentUser = useSelector(selectCurrentUser);
  
  const [profile, setProfile] = useState({
    firstName: currentUser?.firstName ?? "",
    lastName: currentUser?.lastName ?? "",
    email: currentUser?.email ?? "",
    phone: currentUser?.phone ?? "",
  });

  const [password, setPassword] = useState({
    current: "",
    new: "",
    confirm: "",
  });

  const [settings, setSettings] = useState({
    siteName: "HAGROSPHERE",
    tagline: "Agricultural Coordination Platform",
    contactEmail: "enquiry@hagrosphere.ng",
    supportEmail: "support@hagrosphere.ng",
    autoApproveEquipment: true,
    autoApproveJobs: true,
    requireEmailVerification: false,
    emailNotifications: false,
  });

  const handleProfileSave = () => {
    // TODO: Backend endpoint needed for profile update
    toast.info("Profile update endpoint not yet implemented in backend");
    console.log("Profile data:", profile);
  };

  const handlePasswordChange = () => {
    if (!password.current || !password.new || !password.confirm) {
      toast.error("Please fill in all password fields");
      return;
    }
    if (password.new !== password.confirm) {
      toast.error("New passwords do not match");
      return;
    }
    if (password.new.length < 8) {
      toast.error("Password must be at least 8 characters");
      return;
    }
    // TODO: Backend endpoint needed for password change
    toast.info("Password change endpoint not yet implemented in backend");
    console.log("Password change requested");
  };

  const handleSettingsSave = () => {
    // TODO: Backend endpoint needed for platform settings
    toast.info("Platform settings endpoint not yet implemented in backend");
    console.log("Settings data:", settings);
  };

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
            <FormField 
              label="First Name" 
              value={profile.firstName}
              onChange={(e) => setProfile({...profile, firstName: e.target.value})}
            />
            <FormField 
              label="Last Name" 
              value={profile.lastName}
              onChange={(e) => setProfile({...profile, lastName: e.target.value})}
            />
            <FormField 
              label="Email Address" 
              value={profile.email}
              readOnly
            />
            <FormField 
              label="Phone Number" 
              value={profile.phone}
              onChange={(e) => setProfile({...profile, phone: e.target.value})}
              placeholder="+234 807 234 5678"
            />
            <FormField 
              label="Role" 
              value={currentUser?.role ?? ""}
              readOnly
            />
          </div>
          <SaveBtn label="Save Profile" onClick={handleProfileSave} />
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
              value={password.current}
              onChange={(e) => setPassword({...password, current: e.target.value})}
            />
            <div></div>
            <FormField
              label="New Password"
              type="password"
              placeholder="••••••••"
              value={password.new}
              onChange={(e) => setPassword({...password, new: e.target.value})}
            />
            <FormField
              label="Confirm New Password"
              type="password"
              placeholder="••••••••"
              value={password.confirm}
              onChange={(e) => setPassword({...password, confirm: e.target.value})}
            />
          </div>
          <SaveBtn label="Update Password" onClick={handlePasswordChange} />
        </Card>
      </section>
      <section className="mb-6">
        <Card>
          <SectionHeader icon={<IoGlobeOutline />} title="Platform Settings" />
          <Divider />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 font-inter">
            <FormField 
              label="Site Name" 
              value={settings.siteName}
              onChange={(e) => setSettings({...settings, siteName: e.target.value})}
            />
            <FormField
              label="Tagline"
              value={settings.tagline}
              onChange={(e) => setSettings({...settings, tagline: e.target.value})}
            />
            <FormField 
              label="Contact Email" 
              value={settings.contactEmail}
              onChange={(e) => setSettings({...settings, contactEmail: e.target.value})}
            />
            <FormField 
              label="Support Email" 
              value={settings.supportEmail}
              onChange={(e) => setSettings({...settings, supportEmail: e.target.value})}
            />
          </div>

          <p className="mt-6 md:mt-8 font-semibold text-sm md:text-base text-[#111] mb-4 font-inter">
            Approval Settings
          </p>
          <div className="flex flex-col gap-2.5 font-inter ">
            <label className="flex items-center gap-[9px] cursor-pointer">
              <input
                type="checkbox"
                checked={settings.autoApproveEquipment}
                onChange={(e) => setSettings({...settings, autoApproveEquipment: e.target.checked})}
                className="w-[15px] h-[15px] accent-[#1A6B3C] cursor-pointer"
              />
              <span className="text-[13px] text-[#374151]">Auto-approve equipment listings</span>
            </label>
            <label className="flex items-center gap-[9px] cursor-pointer">
              <input
                type="checkbox"
                checked={settings.autoApproveJobs}
                onChange={(e) => setSettings({...settings, autoApproveJobs: e.target.checked})}
                className="w-[15px] h-[15px] accent-[#1A6B3C] cursor-pointer"
              />
              <span className="text-[13px] text-[#374151]">Auto-approve job postings</span>
            </label>
            <label className="flex items-center gap-[9px] cursor-pointer">
              <input
                type="checkbox"
                checked={settings.requireEmailVerification}
                onChange={(e) => setSettings({...settings, requireEmailVerification: e.target.checked})}
                className="w-[15px] h-[15px] accent-[#1A6B3C] cursor-pointer"
              />
              <span className="text-[13px] text-[#374151]">Require email verification for new users</span>
            </label>
            <label className="flex items-center gap-[9px] cursor-pointer">
              <input
                type="checkbox"
                checked={settings.emailNotifications}
                onChange={(e) => setSettings({...settings, emailNotifications: e.target.checked})}
                className="w-[15px] h-[15px] accent-[#1A6B3C] cursor-pointer"
              />
              <span className="text-[13px] text-[#374151]">Receive email notifications</span>
            </label>
          </div>

          <SaveBtn label="Save Settings" onClick={handleSettingsSave} />
        </Card>
      </section>
    </div>
  );
};

export default AdminSetting;
