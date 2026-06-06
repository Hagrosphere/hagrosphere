import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { Loginlogo } from "../assets";
import { useAuth } from "../features/auth/hooks/useAuth";
import { toast } from "react-toastify";

const AdminLogin = () => {
  const navigate = useNavigate();
  const { adminLogin, isAdminLoggingIn, isAuthenticated, isAdmin } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Navigate when Redux state confirms user is authenticated and admin
  useEffect(() => {
    if (isAuthenticated && isAdmin) {
      navigate("/admin", { replace: true });
    }
  }, [isAuthenticated, isAdmin, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await adminLogin(email, password);
      
      if (result.error) {
        const message = result.error?.data?.message;
        if (result.error?.status === 401 || result.error?.status === 403) {
          toast.error("Invalid email or password. Please try again.");
        } else if (message) {
          toast.error(message);
        } else {
          toast.error("Login failed. Please try again.");
        }
        return;
      }
      // Success - navigation handled by useEffect
    } catch (err) {
      const message = err?.data?.message;
      toast.error(message ?? "Login failed. Please try again.");
    }
  };

  const inputCls =
    "w-full px-3 py-[10px] border border-[#E5E7EB] rounded-lg text-[13px] text-[#374151] bg-white outline-none focus:border-[#1A6B3C] focus:ring-1 focus:ring-[#1A6B3C] transition-colors placeholder:text-[#9CA3AF]";

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 bg-bg-deepmain font-inter">
      <div className="flex flex-col items-center mb-6">
        <img src={Loginlogo} alt="logo" />
      </div>

      <div className="w-full p-5 bg-white shadow-lg md:p-8 rounded-2xl max-w-100">
        <h1 className="font-bold text-[22px] text-[#111] mb-1">Admin Login</h1>
        <p className="text-[13px] text-[#6B7280] mb-6">
          Sign in to access the administrative dashboard
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div>
            <label className="block text-[13px] font-medium text-[#374151] mb-1.5">
              Email Address
            </label>
            <input
              type="email"
              className={inputCls}
              placeholder="admin@hagrosphere.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              autoComplete="email"
            />
          </div>

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

          <button
            type="submit"
            disabled={isAdminLoggingIn}
            className="w-full bg-bg-btn-primary hover:bg-[#155C32] disabled:opacity-60 text-white font-semibold text-[13px] tracking-widest uppercase py-3 rounded-lg border-0 cursor-pointer transition-colors mt-1"
          >
            {isAdminLoggingIn ? "Signing in…" : "Sign In"}
          </button>
        </form>

        <p className="text-[11px] text-[#9CA3AF] text-center mt-5 leading-relaxed">
          For security reasons, all login attempts are logged and monitored.
        </p>
      </div>
    </div>
  );
};

export default AdminLogin;
