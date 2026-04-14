import { HagroLogo } from "../assets";
import { Link, NavLink, useNavigate } from "react-router";
import { IoMdMenu, IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { IoChevronDown, IoClose } from "react-icons/io5";
import { useState } from "react";

const Navbar = () => {
  const [isToggle, setIsToggle] = useState(false);
  const [openService, setOpenService] = useState(false);
  const navigate = useNavigate();
  return (
    <div className="fixed top-0 left-0 z-50 w-full py-2 bg-bg-main">
      <div className="w-[92%] md:w-[94%] mx-auto flex items-center justify-between text-white">
        <Link to="/" className="">
          <img src={HagroLogo} alt="" className="w-16 md:w-24" />
        </Link>
        <div className="items-center hidden md:flex gap-x-6 font-inter">
          <NavLink className="md:text-sm lg:text-base" to="/">
            Home
          </NavLink>
          <div className="relative group">
            <span className="flex items-center gap-1 cursor-pointer md:text-sm lg:text-base">
              <NavLink to="/services">Service</NavLink>
              <IoChevronDown
                size={16}
                className="transition-transform duration-200 group-hover:rotate-180"
              />
            </span>

            <div className="absolute left-0 top-full mt-4.5 w-54 bg-bg-main pb-1.5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 shadow-lg">
              <NavLink
                to="/services/farm-equipment"
                className="block px-4 py-2 hover:bg-[#1F4D3A]"
              >
                Equipment Access
              </NavLink>

              <NavLink
                to="/services/market-access"
                className="block px-4 py-2 hover:bg-[#1F4D3A]"
              >
                Market Access
              </NavLink>

              <NavLink
                to="/services/farm-job"
                className="block px-4 py-2 hover:bg-[#1F4D3A]"
              >
                Farm Job Agent
              </NavLink>
            </div>
          </div>

          <NavLink className="md:text-sm lg:text-base" to="/how-we-work">
            How we work
          </NavLink>
          <NavLink to="/learn" className="md:text-sm lg:text-base">
            Editorial / updates
          </NavLink>
          <NavLink to="/about" className="md:text-sm lg:text-base">
            About
          </NavLink>
        </div>
        <div className="hidden md:block">
          <button
            className="bg-bg-btn hover:bg-[#AD7E1F]  text-white font-inter px-3 py-1.5 cursor-pointer  rounded-lg"
            onClick={() => navigate("/services")}
          >
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
        <div className="absolute top-12 w-full h-[65vh] bg-bg-main border-t text-white">
          <div className="flex flex-col gap-y-4 pt-5 w-[94%] mx-auto">
            {/* Home */}
            <Link
              to="/"
              className="text-base font-semibold border-b border-b-[#E5DDD0] pb-3"
              onClick={() => setIsToggle(false)}
            >
              Home
            </Link>

            {/* Service (Dropdown Trigger) */}
            <div>
              <div
                className="text-base font-semibold border-b border-b-[#E5DDD0] pb-3 flex justify-between items-center cursor-pointer"
                onClick={() => setOpenService(!openService)}
              >
                Service
                <span>
                  {openService ? <IoIosArrowDown /> : <IoIosArrowUp />}
                </span>
              </div>

              {/* Dropdown Items */}
              {openService && (
                <div className="flex flex-col mt-3 gap-y-4 ">
                  <Link
                    to="/services/farm-equipment"
                    className="text-base font-medium border-b border-b-[#E5DDD0] pb-3"
                    onClick={() => setIsToggle(false)}
                  >
                    Equipment Access
                  </Link>

                  <Link
                    to="/services/market-access"
                    className="text-base font-medium border-b border-b-[#E5DDD0] pb-3"
                    onClick={() => setIsToggle(false)}
                  >
                    Market Access
                  </Link>

                  <Link
                    to="/services/farm-job"
                    className="text-base font-medium border-b border-b-[#E5DDD0] pb-3"
                    onClick={() => setIsToggle(false)}
                  >
                    Farm Job Agent
                  </Link>
                </div>
              )}
            </div>

            {/* Other Links */}
            <Link
              to="/how-we-work"
              className="text-base font-semibold border-b border-b-[#E5DDD0] pb-3"
              onClick={() => setIsToggle(false)}
            >
              How we work
            </Link>

            <Link
              to="/learn"
              className="text-base font-semibold border-b border-b-[#E5DDD0] pb-3"
              onClick={() => setIsToggle(false)}
            >
              Editorial / updates
            </Link>

            <Link
              to="/about"
              className="text-base font-semibold"
              onClick={() => setIsToggle(false)}
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
