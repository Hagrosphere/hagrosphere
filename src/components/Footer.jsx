import { Link } from "react-router";
import { HagroLogo } from "../assets";
import { IoIosArrowRoundForward } from "react-icons/io";

const Footer = () => {
  const footerData = [
    {
      id: 1,
      header: "Service",
      other: [
        { id: 1, text: "Equipment Access", link: "/services/farm-equipment" },
        { id: 2, text: "Market Access", link: "/services/market-access" },
        { id: 3, text: "Farm Agent Job", link: "/services/farm-job" },
      ],
    },
    {
      id: 2,
      header: "Learn",
      other: [
        { id: 1, text: "Content Hub", link: "/learn" },
        { id: 2, text: "Produce by State", link: "/produce" },
        { id: 3, text: "How we work", link: "/how-we-work" },
      ],
    },
    {
      id: 3,
      header: "Company",
      other: [
        { id: 1, text: "About us", link: "/about" },
        { id: 2, text: "Career", link: "/job-listing" },
        { id: 2, text: "Contact", link: "/contact-us" },
        { id: 3, text: "Terms & Privacy", link: "/privacy-policy" },
      ],
    },
    {
      id: 4,
      header: "Contact Us",
      other: [
        { id: 1, text: "+234 803 816 3298 / +447349185956" },
        { id: 2, text: "hello@hagrosphere.com" },
        {
          id: 3,
          text: "Room 7, Trinity Plaza,  By-Pass Junction. Oyemekun Road,  Akure Ondo State, Nigeria ",
        },
      ],
    },
  ];

  return (
    <div className="w-full py-5 text-white bg-bg-deepmain">
      <div className="w-[91%] md:w-[94%] mx-auto ">
        <div className="flex flex-col items-start justify-between gap-7 md:items-center md:flex-row">
          <div className="">
            <img src={HagroLogo} alt="logo" className="w-20 md:w-24" />
            <p className="mt-5 text-xs text-text-footer font-inter md:text-sm">
              Empowering Nigeria's agricultural value chain <br /> through
              technology-driven solutions that connect <br /> farmers,
              agribusinesses, and buyers for sustainable growth.
            </p>
          </div>
          <div className="font-inter">
            <div className="flex flex-col items-start">
              <label className="text-sm md:text-base ">Enter your email</label>
              <input type="email" className="border-b outline-0 mt-1.5" />
            </div>
            <button className="bg-white px-4 text-sm md:text-base rounded-3xl text-black mt-6 py-1 md:py-1.5 flex items-center gap-x-1.5 md:gap-x-2 cursor-pointer">
              Subscribe to Newsletter
              <IoIosArrowRoundForward className="w-6 h-6 text-bg-main" />
            </button>
          </div>
        </div>
        <div className="my-6 text-[#1C1C18]">
          <hr />
        </div>
        <div className="grid grid-cols-1 my-4 md:grid-cols-2 lg:grid-cols-4 font-inter gap-y-7 ">
          {footerData.map((section) => (
            <div key={section.id}>
              <h2 className="text-sm font-semibold text-white md:text-base lg:text-lg">
                {section.header}
              </h2>
              <div className="flex flex-col gap-y-3 mt-2.5">
                {section.other.map((item) =>
                  item.link ? (
                    <Link
                      to={item.link}
                      key={item.id}
                      className="text-xs md:text-sm text-text-footer"
                    >
                      {item.text}
                    </Link>
                  ) : (
                    <span
                      key={item.id}
                      className="text-xs md:text-sm text-text-footer"
                    >
                      {item.text}
                    </span>
                  ),
                )}
              </div>
            </div>
          ))}
        </div>
        <div className="my-6 text-[#1C1C18]">
          <hr />
        </div>
        <div className="flex flex-col items-center justify-between font-inter text-text-footer md:flex-row gap-y-2 md:gap-y-0">
          <p className="text-xs md:text-sm ">
            &copy; {new Date().getFullYear()} Hagrosphere. All rights reserved.
          </p>
          <p className="flex items-center text-xs gap-x-2 md:text-sm ">
            <span className="text-xs md:text-sm">Privacy Policy</span>
            <span className="w-1 h-1 bg-white rounded-full"></span>
            <span className="text-xs md:text-sm">Terms of Service</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
