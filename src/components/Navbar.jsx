import { HagroLogo } from "../assets";
import { Link, NavLink } from "react-router";
import { IoMdMenu } from "react-icons/io";
import { IoChevronDown, IoClose } from "react-icons/io5";
import { useState } from "react";

const Navbar = () => {
  const [isToggle, setIsToggle] = useState(false);
  return (
    <div className="w-full bg-bg-main py-2 fixed top-0 left-0 z-50">
      <div className="w-[96%] md:w-[94%] mx-auto flex items-center justify-between text-white">
        <Link to="/" className="">
          <img src={HagroLogo} alt="" className="w-16 md:w-24" />
        </Link>
        <div className="hidden md:flex items-center gap-x-6 font-inter">
          <NavLink className="md:text-sm lg:text-base">Home</NavLink>
          <div className="relative group">
            <span className="md:text-sm lg:text-base cursor-pointer flex items-center gap-1">
              <NavLink to="/services">Service</NavLink>
              <IoChevronDown
                size={16}
                className="transition-transform duration-200 group-hover:rotate-180"
              />
            </span>

            <div className="absolute left-0 top-full mt-4.5 w-54 bg-bg-main pb-1.5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 shadow-lg">
              <NavLink
                to="/equipment-access"
                className="block px-4 py-2 hover:bg-[#1F4D3A]"
              >
                Equipment Access
              </NavLink>

              <NavLink
                to="/market-access"
                className="block px-4 py-2 hover:bg-[#1F4D3A]"
              >
                Market Access
              </NavLink>

              <NavLink
                to="/farm-job-agent"
                className="block px-4 py-2 hover:bg-[#1F4D3A]"
              >
                Farm Job Agent
              </NavLink>
            </div>
          </div>

          <NavLink className="md:text-sm lg:text-base">How we work</NavLink>
          <NavLink className="md:text-sm lg:text-base">Learn</NavLink>
          <NavLink to="/about" className="md:text-sm lg:text-base">
            About
          </NavLink>
        </div>
        <div className="hidden md:block">
          <button className="bg-bg-btn hover:bg-[#AD7E1F]  text-white font-inter px-3 py-1.5 cursor-pointer  rounded-lg">
            Get started
          </button>
        </div>
        <div
          className="block md:hidden "
          onClick={() => setIsToggle(!isToggle)}
        >
          {isToggle ? (
            <IoClose className="w-6.5 h-6.5" />
          ) : (
            <IoMdMenu className="w-6.5 h-6.5" />
          )}
        </div>
      </div>
      {isToggle && (
        <div className="absolute top-12 w-full h-[60vh] bg-bg-main border-t text-white">
          <div className="flex items-center justify-center flex-col gap-y-4 pt-8 ">
            <Link
              className="text-base font-semibold"
              onClick={() => setIsToggle(!isToggle)}
            >
              Home
            </Link>
            <Link
              className="text-base font-semibold"
              onClick={() => setIsToggle(!isToggle)}
            >
              Service
            </Link>
            <Link
              className="text-base font-semibold"
              onClick={() => setIsToggle(!isToggle)}
            >
              How we work
            </Link>
            <Link
              className="text-base font-semibold"
              onClick={() => setIsToggle(!isToggle)}
            >
              Learn
            </Link>
            <Link
              className="text-base font-semibold"
              onClick={() => setIsToggle(!isToggle)}
            >
              About
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
