import { useState } from "react";
import { useNavigate } from "react-router";
import { Loginlogo } from "../assets";

// Hardcoded admin credentials — swap with a real API call in production
const ADMIN_EMAIL = "admin@hagrosphere.ng";
const ADMIN_PASSWORD = "admin1234";

const AdminLogin = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    // Simulate a short async check (replace with real API call)
    await new Promise((r) => setTimeout(r, 600));

    if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
      localStorage.setItem("admin_auth", "true");
      navigate("/admin", { replace: true });
    } else {
      setError("Invalid email or password. Please try again.");
    }

    setLoading(false);
  };

  const inputCls =
    "w-full px-3 py-[10px] border border-[#E5E7EB] rounded-lg text-[13px] text-[#374151] bg-white outline-none focus:border-[#1A6B3C] focus:ring-1 focus:ring-[#1A6B3C] transition-colors placeholder:text-[#9CA3AF]";

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 bg-bg-deepmain font-inter">
      {/* Logo */}
      <div className="flex flex-col items-center mb-6">
        <img src={Loginlogo} alt="logo" />
      </div>

      {/* Card */}
      <div className="w-full p-5 bg-white shadow-lg md:p-8 rounded-2xl max-w-100">
        {/* Heading */}
        <h1 className="font-bold text-[22px] text-[#111] mb-1">Admin Login</h1>
        <p className="text-[13px] text-[#6B7280] mb-6">
          Sign in to access the administrative dashboard
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          {/* Email */}
          <div>
            <label className="block text-[13px] font-medium text-[#374151] mb-1.5">
              Email Address
            </label>
            <input
              type="email"
              className={inputCls}
              placeholder="admin@hagrosphere.ng"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              autoComplete="email"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-[13px] font-medium text-[#374151] mb-1.5">
              Password
            </label>
            <input
              type="password"
              className={inputCls}
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              autoComplete="current-password"
            />
          </div>

          {/* Error message */}
          {error && <p className="text-[12px] text-[#DC2626] -mt-1">{error}</p>}

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-bg-btn-primary hover:bg-[#155C32] disabled:opacity-60 text-white font-semibold text-[13px] tracking-widest uppercase py-[11px] rounded-lg border-0 cursor-pointer transition-colors mt-1"
          >
            {loading ? "Signing in…" : "Sign In"}
          </button>
        </form>

        {/* Security note */}
        <p className="text-[11px] text-[#9CA3AF] text-center mt-5 leading-relaxed">
          For security reasons, all login attempts are logged and monitored.
        </p>
      </div>
    </div>
  );
};

export default AdminLogin;
