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
        { id: 2, text: "Contact", link: "/contact-us" },
        { id: 3, text: "Terms & Privacy", link: "/privacy-policy" },
      ],
    },
    {
      id: 4,
      header: "Contact Us",
      other: [
        { id: 1, text: "+234 803 816 3298" },
        { id: 2, text: "hello@hagrosphere.nga" },
        { id: 3, text: "15 Admiralty Way, Lekki Phase 1 Lagos, Nigeria" },
      ],
    },
  ];

  return (
    <div className="w-full bg-bg-deepmain py-5 text-white">
      <div className="w-[91%] md:w-[94%] mx-auto ">
        <div className="flex items-start gap-7 md:items-center justify-between flex-col md:flex-row">
          <div className="">
            <img src={HagroLogo} alt="logo" className="w-20 md:w-24" />
            <p className="text-text-footer font-inter mt-5 text-xs md:text-sm">
              Empowering Nigeria's agricultural value chain <br /> through
              technology-driven solutions that connect <br /> farmers,
              agribusinesses, and buyers for sustainable growth.
            </p>
          </div>
          <div className="font-inter">
            <div className="flex items-start flex-col">
              <label className="text-sm md:text-base ">Enter your email</label>
              <input type="email" className="border-b outline-0 mt-1.5" />
            </div>
            <button className="bg-white px-4 text-sm md:text-base rounded-3xl text-black mt-6 py-1 md:py-1.5 flex items-center gap-x-1.5 md:gap-x-2 cursor-pointer">
              Subscribe to Newsletter
              <IoIosArrowRoundForward className="text-bg-main h-6 w-6" />
            </button>
          </div>
        </div>
        <div className="my-6 text-[#1C1C18]">
          <hr />
        </div>
        <div className="my-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 font-inter gap-y-7  ">
          {footerData.map((section) => (
            <div key={section.id}>
              <h2 className="text-white font-semibold text-sm md:text-base lg:text-lg">
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
        <div className="font-inter flex items-center justify-between text-text-footer flex-col md:flex-row gap-y-2 md:gap-y-0">
          <p className="text-xs md:text-sm ">
            &copy; {new Date().getFullYear()} Hagrosphere. All rights reserved.
          </p>
          <p className="flex items-center gap-x-2 text-xs md:text-sm ">
            <span className="text-xs md:text-sm">Privacy Policy</span>
            <span className="w-1 h-1 rounded-full bg-white"></span>
            <span className="text-xs md:text-sm">Terms of Service</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
