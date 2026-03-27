import { FiCheckCircle, FiEye } from "react-icons/fi";
import { LuShield } from "react-icons/lu";
import { BsBullseye } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa";
import { LuShoppingBasket, LuTractor } from "react-icons/lu";
import { RiGroupLine } from "react-icons/ri";

import {
  Access,
  Agribuss,
  Buyer,
  Direct,
  Equipment,
  Farmer,
  Growth,
  LearnOne,
  LearnThree,
  LearnTwo,
  Seam,
  Worker,
} from "../assets";

export const weServeData = [
  {
    id: 1,
    title: "Farmer",
    description:
      " Access markets, financing, and resources to grow your agricultural business sustainably.",
    image: Farmer,
  },
  {
    id: 2,
    title: "Agribusinesses",
    description:
      "Scale your operations with technology-driven logistics, financing, and market intelligence.",
    image: Agribuss,
  },
  {
    id: 3,
    title: "Buyers",
    description:
      "Source quality produce directly from verified farmers and agribusinesses nationwide.",
    image: Buyer,
  },
];

export const features = [
  {
    id: 1,
    tag: "MARKETPLACE",
    title: "Direct Market Access",
    desc: "Connect directly with buyers and sellers across Nigeria. Our digital marketplace eliminates intermediaries, ensuring fair prices and transparent transactions for all participants in the agricultural value chain.",
    image: Direct,
    reverse: false,
  },
  {
    id: 2,
    tag: "FINANCING",
    title: "Growth Capital Solutions",
    desc: "Access flexible financing options tailored to agricultural cycles. We partner with financial institutions to provide loans, insurance, and investment opportunities that support your business growth and sustainability.",
    image: Growth,
    reverse: true, // 👈 this controls layout
  },
  {
    id: 3,
    tag: "LOGISTICS",
    title: "Seamless Distribution",
    desc: "Efficient logistics network connecting farms to markets. Our technology-enabled distribution system ensures timely delivery, reduces post-harvest losses, and maintains product quality throughout the supply chain.",
    image: Seam,
    reverse: false,
  },
];

export const howWeWork = [
  {
    id: 1,
    title: "Submit Enquiry",
    detail: "Share your needs through our structured enquiry form",
  },
  {
    id: 2,
    title: "Verification",
    detail: "We verify participants, farms, and service requirements",
  },
  {
    id: 3,
    title: "Coordination",
    detail: "We coordinate services, schedules, and expectations",
  },
  {
    id: 4,
    title: "Transparency",
    detail: "Clear documentation and ongoing communication",
  },
];

export const verificationStep = [
  {
    id: 1,
    title: "Farmer Verification",
    icon: <FiCheckCircle className="h-6 w-6" />,
    describe: "Land documentation and identity checks",
  },
  {
    id: 2,
    title: "Worker Screening",
    icon: <FiCheckCircle className="h-6 w-6" />,
    describe: "Experience validation and reference checks",
  },
  {
    id: 3,
    title: "Quality Standards",
    icon: <FiCheckCircle className="h-6 w-6" />,
    describe: "Produce grading and market coordination",
  },
  {
    id: 4,
    title: "Clear Disclaimers",
    icon: <LuShield className="h-6 w-6" />,
    describe: "Honest about risks and limitations",
  },
];

export const articleData = [
  {
    id: 1,
    image: LearnOne,
    tag: "FARMING TIPS",
    title: "Sustainable Farming Practices for Nigerian Climate",
    description:
      "Learn how to implement eco-friendly farming techniques that increase yield while preserving soil health and long-term productivity.",
  },
  {
    id: 2,
    image: LearnTwo,
    tag: "MARKET INSIGHTS",
    title: "Understanding Seasonal Price Trends in Agriculture",
    description:
      "Discover how to leverage market data and seasonal patterns to maximize profits and make informed decisions...",
  },
  {
    id: 3,
    image: LearnThree,
    tag: "FINANCING",
    title: "Accessing Agricultural Loans: A Complete Guide",
    description:
      "Navigate the process of securing financing for your agricultural business with our comprehensive guide to loan...",
  },
];

export const testimonialData = [
  {
    id: 1,
    name: "Chidi Okonkwo",
    testimonial:
      '"The equipment sharing program reduced my operational costs by 40%. The coordination was professional and transparent."',
    location: "Cassava Farmer • Abia State",
  },
  {
    id: 2,
    name: "Fatima Ibrahim",
    testimonial:
      '"I found consistent farm work through AFRIKULTURE. The verification process made me feel secure about every placement."',
    location: "Agricultural Worker • Kaduna State",
  },
  {
    id: 3,
    name: "Tunde Adebayo",
    testimonial:
      '"Access to aggregated, graded produce has transformed our procurement process. Quality is consistent and reliable."',
    location: "Produce Buyer • Lagos",
  },
  {
    id: 4,
    name: "Amina Bello",
    testimonial:
      '"The platform helped me connect with verified buyers quickly. I no longer worry about post-harvest losses."',
    location: "Tomato Farmer • Kano State",
  },
  {
    id: 5,
    name: "Emeka Nwafor",
    testimonial:
      '"Leasing tractors through the system has improved my farm efficiency. What used to take days now takes hours."',
    location: "Maize Farmer • Enugu State",
  },
  {
    id: 6,
    name: "Grace Ekanem",
    testimonial:
      '"I appreciate the transparency in pricing and transactions. It has built trust between farmers and buyers."',
    location: "Palm Oil Producer • Akwa Ibom",
  },
  {
    id: 7,
    name: "Yusuf Abdullahi",
    testimonial:
      '"Getting access to seasonal farm jobs has never been easier. Payments are timely and well-documented."',
    location: "Farm Laborer • Sokoto State",
  },
  {
    id: 8,
    name: "Ngozi Eze",
    testimonial:
      '"The aggregation system ensures I get quality produce in bulk without dealing with multiple middlemen."',
    location: "Wholesale Buyer • Onitsha",
  },
  {
    id: 9,
    name: "Sadiq Mohammed",
    testimonial:
      '"The logistics coordination is excellent. My produce gets to buyers faster and in better condition."',
    location: "Rice Farmer • Kebbi State",
  },
  {
    id: 10,
    name: "Blessing Ojo",
    testimonial:
      '"AFRIKULTURE has simplified how I source fresh produce for my restaurant. Consistency is key for my business."',
    location: "Restaurant Owner • Ibadan",
  },
  {
    id: 11,
    name: "Ibrahim Lawal",
    testimonial:
      '"The platform’s verification process ensures I only deal with credible partners. That peace of mind is priceless."',
    location: "Grain Supplier • Ilorin",
  },
  {
    id: 12,
    name: "Halima Sani",
    testimonial:
      '"I’ve increased my income by connecting directly with buyers. No more unnecessary intermediaries."',
    location: "Vegetable Farmer • Jigawa State",
  },
];

export const ourValueData = [
  {
    id: 1,
    title: "Trust Through Verification",
    description:
      "Every participant, farm, and transaction goes through our structured verification process. Trust is earned, not assumed.",
    icon: <LuShield className="w-5.5 h-5.5 md:h-7 md:w-7 text-[#2E6B4F]" />,
  },
  {
    id: 2,
    title: "Radical Transparency",
    description:
      "Clear communication about processes, limitations, and risks. No hype, no guarantees, no misleading expectations.",
    icon: <FiEye className="w-5.5 h-5.5 md:h-7 md:w-7 text-[#2E6B4F]" />,
  },
  {
    id: 3,
    title: "Farmer-First Approach",
    description:
      "Agricultural producers are at the centre of everything we do. Our coordination services exist to support their success.",
    icon: <FaRegHeart className="w-5.5 h-5.5 md:h-7 md:w-7 text-[#2E6B4F]" />,
  },
  {
    id: 4,
    title: "Realistic Expectations",
    description:
      "Agriculture carries inherent risks. We coordinate services, not guaranteed outcomes. Honest expectations build lasting trust.",
    icon: <BsBullseye className="w-5.5 h-5.5 md:h-7 md:w-7 text-[#2E6B4F]" />,
  },
  {
    id: 5,
    title: "Data Protection",
    description:
      "Participant information is protected and used only for coordination purposes. Privacy and security are non-negotiable.",
    icon: <LuShield className="w-5.5 h-5.5 md:h-7 md:w-7 text-[#2E6B4F]" />,
  },
  {
    id: 6,
    title: "Long-Term Thinking",
    description:
      "We build for sustainable agricultural coordination, not short-term gains. Patience and consistency create lasting impact.",
    icon: <FaRegHeart className="w-5.5 h-5.5 md:h-7 md:w-7 text-[#2E6B4F]" />,
  },
];
export const isNotData = [
  {
    id: 1,
    title: "Not an Investment Platform",
    description:
      "We do not offer returns, guaranteed income, or investment opportunities. We coordinate agricultural services between verified participants.",
  },
  {
    id: 2,
    title: "Not a Trading Company",
    description:
      "We do not buy or sell produce. We coordinate market access between verified farmers and buyers, acting as a facilitator.",
  },
  {
    id: 3,
    title: "Not a Loan Provider",
    description:
      "We do not provide financing or credit. Future coordination with financing partners may be explored through separate disclosure.",
  },
  {
    id: 4,
    title: "Empowering Your Agricultural Decisions",
    description:
      "We help you make better farming decisions with data and insights, but outcomes like yields, weather, and market prices remain unpredictable.",
  },
];
export const whoWeServe = [
  {
    id: 1,
    title: "Farmers & Cooperatives",
    description:
      "Small to medium farmers and agricultural cooperatives seeking equipment access, market coordination, and verified worker placement.",
  },
  {
    id: 2,
    title: "Farm Workers",
    description:
      "Agricultural workers seeking verified farm work opportunities with clear terms, background checks, and professional coordination.",
  },
  {
    id: 3,
    title: "Produce Buyers",
    description:
      "Commercial buyers seeking reliable, graded agricultural produce from verified farming networks with traceable documentation.",
  },
  {
    id: 4,
    title: "Nigerian Diaspora",
    description:
      "Nigerians abroad seeking structured, transparent agricultural participation opportunities in their home country, with full clarity on risk.",
  },
];

export const solutionsData = [
  {
    id: "01",
    tag: "Equipment Coordination",
    icon: <LuTractor className="h-4 w-4" />,
    title: "Farm Equipment Access",
    description:
      "Coordinate shared access to agricultural machinery across regions. We schedule, verify equipment condition, and align multiple farmers to reduce individual costs and improve operational efficiency.",
    points: [
      "Tractor and harvester scheduling",
      "Equipment condition verification",
      "Multi-farm coordination",
      "Regional operator networks",
    ],
    image: Equipment,
  },
  {
    id: "02",
    tag: "Market Coordination",
    icon: <LuShoppingBasket className="h-4 w-4" />,
    title: "Agricultural Market Access",
    description:
      "Connect farmers to buyers through produce aggregation, quality grading, and transparent coordination. We do not buy or sell  we facilitate verified relationships between producers and commercial buyers.",
    points: [
      "Produce aggregation across farms",
      "Quality grading and standards",
      "Direct buyer connections",
      "Logistics coordination support",
    ],
    image: Access,
  },
  {
    id: "03",
    tag: "Labour Coordination",
    icon: <RiGroupLine className="w-4 h-4" />,
    title: "Farm Job Agent",
    description:
      "Verified worker placement connecting qualified agricultural workers with farms that need them. Every placement is background-checked and experience-validated before coordination begins.",
    points: [
      "Worker background verification",
      "Skills and experience validation",
      "Farm-to-worker matching",
      "Placement documentation",
    ],
    image: Worker,
  },
];

export const processData = [
  {
    id: 1,
    tag: "Phase 1",
    title: "Verification",
    description:
      "Identity checks, documentation review, and eligibility assessment before any service begins.",
  },
  {
    id: 2,
    tag: "Phase 2",
    title: "Coordination",
    description:
      "Schedule alignment, logistics planning, and expectation setting with all parties involved.",
  },
  {
    id: 3,
    tag: "Phase 3",
    title: "Ongoing Support",
    description:
      "Transparent communication, issue resolution, and clear documentation throughout.",
  },
];
