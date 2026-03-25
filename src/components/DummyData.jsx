import { FiCheckCircle } from "react-icons/fi";
import { LuShield } from "react-icons/lu";
import {
  Agribuss,
  Buyer,
  Direct,
  Farmer,
  Growth,
  LearnOne,
  LearnThree,
  LearnTwo,
  Seam,
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
