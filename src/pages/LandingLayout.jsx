import { Outlet } from "react-router";
import { Footer, Navbar } from "../components";

const LandingLayout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-1 w-full pt-11 md:pt-14">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default LandingLayout;
