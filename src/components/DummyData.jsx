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
  {
    id: 4,
    image: LearnThree,
    tag: "FINANCING",
    title: "Accessing Agricultural Loans: A Complete Guide",
    description:
      "Navigate the process of securing financing for your agricultural business with our comprehensive guide to loan...",
  },
  {
    id: 5,
    image: LearnThree,
    tag: "Diaspora Guide",
    title: "Agricultural Participation for Nigerians Abroad",
    description:
      "Understanding realistic opportunities and considerations for diaspora agricultural engagement.",
  },
  {
    id: 6,
    image: LearnThree,
    tag: "FINANCING",
    title: "Accessing Agricultural Loans: A Complete Guide",
    description:
      "Navigate the process of securing financing for your agricultural business with our comprehensive guide to loan...",
  },
  {
    id: 7,
    image: LearnThree,
    tag: "FINANCING",
    title: "Accessing Agricultural Loans: A Complete Guide",
    description:
      "Navigate the process of securing financing for your agricultural business with our comprehensive guide to loan...",
  },
  {
    id: 8,
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

export const solutionsData = [
  {
    id: "01",
    slug: "farm-equipment",
    tag: "Equipment Coordination",
    icon: <LuTractor className="h-4 w-4" />,
    title: "Farm Equipment Access",
    subtitle:
      "Coordinate shared access to agricultural machinery across regions. Reduce operational costs through verified equipment sharing and professional coordination.",
    description:
      "Coordinate shared access to agricultural machinery across regions. We schedule, verify equipment condition, and align multiple farmers to reduce individual costs and improve operational efficiency.",
    points: [
      "Tractor and harvester scheduling",
      "Equipment condition verification",
      "Multi-farm coordination",
      "Regional operator networks",
    ],
    image: Equipment,

    details: {
      introTitle: "Shared Machinery, Structured Coordination",
      introText:
        "Our Equipment Access service coordinates shared use of tractors, harvesters, planters, and other agricultural machinery. We reduce costs by organising equipment sharing among verified farmers across regions.",

      introSubText:
        "This is not equipment rental or leasing. We coordinate access to existing equipment through structured scheduling and farmer cooperation.",

      whoFor: [
        {
          id: 1,
          title: "Small to Medium Farmers",
          detail:
            "Farmers who cannot justify purchasing equipment but need reliable access during planting and harvest seasons.",
        },
        {
          id: 2,
          title: "Cooperative Groups",
          detail:
            "Agricultural cooperatives seeking structured equipment sharing among verified members.",
        },
        {
          id: 3,
          title: "Equipment Owners",
          detail:
            "Farmers with underutilised equipment willing to coordinate shared use with verified participants.",
        },
      ],

      howItWorks: [
        {
          id: 1,
          title: "Submit Equipment Request",
          detail:
            "Specify equipment needed, farm location, acreage, and preferred timing through our enquiry form.",
        },
        {
          id: 2,
          title: "Farmer Verification",
          detail:
            "We verify your identity, land documentation, and farming operations before coordination begins.",
        },
        {
          id: 3,
          title: "Equipment Matching",
          detail:
            "We coordinate with verified equipment owners in your region to align schedules and capacity.",
        },
        {
          id: 4,
          title: "Schedule Coordination",
          detail:
            "Clear scheduling, cost sharing agreements, and usage terms established before equipment deployment.",
        },
        {
          id: 5,
          title: "Service Completion",
          detail:
            "Equipment use is documented and any issues are resolved through our coordination process.",
        },
      ],

      limitation: [
        {
          id: 1,
          title: "Service Availability",
          detail:
            "Equipment coordination depends on availability in your region. We cannot guarantee immediate access during peak planting or harvest seasons.",
        },
        {
          id: 2,
          title: "Weather Delays",
          detail:
            "Schedules may shift due to weather conditions affecting multiple farmers in the coordination network.",
        },
        {
          id: 3,
          title: "Equipment Condition",
          detail:
            "While we coordinate with reputable equipment owners, mechanical issues can occur. We do not guarantee equipment performance.",
        },
        {
          id: 4,
          title: "Geographic Limitations",
          detail:
            "Currently available in select regions. Coverage is expanding but not yet nationwide for all equipment types.",
        },
      ],
      processDetail: {
        requirement: [
          "Valid identification documents",
          "Proof of land ownership or documented lease agreement",
          "Farm location within a region where we have equipment coordination partnerships",
          "Willingness to share usage costs with other verified farmers",
          "Flexible scheduling within a 2–3 week window",
        ],
        timeline: [
          {
            id: 1,
            title: "Verification Phase: ",
            time: "5–7 business days",
            detail: "Document review and farmer verification process",
          },
          {
            id: 2,
            title: "Equipment Coordination: ",
            time: "7–14 days",
            detail: "Matching with available equipment and schedule alignment",
          },
          {
            id: 3,
            title: "Service Deployment:",
            time: " As scheduled ",
            detail: "Equipment use based on coordinated schedule",
          },
        ],
      },
    },
  },

  {
    id: "02",
    slug: "market-access",
    tag: "Market Coordination",
    icon: <LuShoppingBasket className="h-4 w-4" />,
    title: "Agricultural Market Access",
    subtitle:
      "Connect farmers to buyers through produce aggregation, quality grading, and transparent coordination. Bridge the gap between small farms and commercial markets.",
    description:
      "Connect farmers to buyers through produce aggregation, quality grading, and transparent coordination. We do not buy or sell  we facilitate verified relationships between producers and commercial buyers.",
    points: [
      "Produce aggregation across farms",
      "Quality grading and standards",
      "Direct buyer connections",
      "Logistics coordination support",
    ],
    image: Access,

    details: {
      introTitle: "Connecting Farmers to Commercial Markets",
      introText:
        "Our Market Access service coordinates produce aggregation, quality grading, and buyer connections for farmers who cannot access commercial markets independently.",

      introSubText:
        "This is not produce purchasing or trading. We coordinate market access between verified farmers and commercial buyers, acting strictly as a facilitation service.",

      whoFor: [
        {
          id: 1,
          title: "Small Scale Farmers",
          detail:
            "Farmers producing consistent quality but lacking direct buyer relationships or aggregation capacity.",
        },
        {
          id: 2,
          title: "Cooperative Groups",
          detail:
            "Agricultural cooperatives seeking structured market coordination and verified buyer connections.",
        },
        {
          id: 3,
          title: "Commercial Buyers",
          detail:
            "Produce buyers seeking reliable, graded supply from verified farming networks with traceable documentation.",
        },
      ],

      howItWorks: [
        {
          id: 1,
          title: "Farmer Registration",
          detail:
            "Submit details about your farm, produce types, expected volumes, and harvest schedules through our enquiry form.",
        },
        {
          id: 2,
          title: "Farm & Produce Verification",
          detail:
            "We verify your farming operations, land documentation, and conduct initial produce quality assessment.",
        },
        {
          id: 3,
          title: "Aggregation Coordination",
          detail:
            "We coordinate with other verified farmers in your region to aggregate sufficient volumes for commercial buyers.",
        },
        {
          id: 4,
          title: "Quality Grading",
          detail:
            "Clear sAll aggregated produce is graded using consistent standards before buyer coordination begins.cheduling, cost sharing agreements, and usage terms established before equipment deployment.",
        },
        {
          id: 5,
          title: "Buyer Coordination",
          detail:
            "We coordinate between aggregated supply and verified buyers, facilitating transparent transactions.",
        },
        {
          id: 6,
          title: "Transaction Support",
          detail:
            "Clear documentation, logistics coordination, and dispute resolution support throughout the process.",
        },
      ],

      limitation: [
        {
          id: 1,
          title: "No Guaranteed Buyers",
          detail:
            "We coordinate market access but cannot guarantee buyer commitments. Market conditions and buyer demand fluctuate.",
        },
        {
          id: 2,
          title: "Price Volatility",
          detail:
            "Agricultural markets are subject to price fluctuations. We coordinate transactions but do not set or guarantee prices.",
        },
        {
          id: 3,
          title: "Quality Requirements",
          detail:
            "Produce not meeting commercial standards may be excluded from aggregation. Quality grading is applied consistently and strictly.",
        },
        {
          id: 4,
          title: "Volume Dependencies",
          detail:
            "Market coordination requires minimum aggregated volumes. Individual farmers may need to wait for sufficient network participation.",
        },
      ],
      serviceScope: {
        requirement: [
          "Valid identification and farm registration documents",
          "Consistent produce quality meeting basic commercial standards",
          "Minimum volume thresholds (varies by produce type)",
          "Willingness to participate in coordinated aggregation",
          "Farm location within aggregation coordination zones",
          "Clear harvest schedules and reliable communication",
        ],
        supportedProduce: [
          {
            id: 1,
            title: "Staple Crops",
            produce: ["Cassava", "yam", "rice", "maize"],
            detail: "Active buyer networks in most regions",
          },
          {
            id: 2,
            title: "Vegetables",
            produce: ["Tomatos", "Peppers", "Onions", "leafy greens"],
            detail: "Quality grading critical for market access",
          },
          {
            id: 3,
            title: "Legumes",
            produce: ["Cowpeas", "soybeans", "groundnuts"],
            detail: "Growing buyer demand, expanding coordination",
          },
          {
            id: 4,
            title: "Cash Crops",
            produce: ["Limited coordination (pilot phase)"],
            detail: "Contact us for current availability",
          },
        ],
      },

      // UNIQUE SECTION
      connectionTypes: [
        "Bulk commercial buyers",
        "Export channels",
        "Retail distributors",
      ],
    },
  },

  {
    id: "03",
    slug: "farm-job",
    tag: "Labour Coordination",
    icon: <RiGroupLine className="w-4 h-4" />,
    title: "Farm Job Agent",
    subtitle:
      "Verified worker placement connecting qualified agricultural workers with farms. Structured coordination for reliable farm labour.",
    description:
      "Verified worker placement connecting qualified agricultural workers with farms that need them. Every placement is background-checked and experience-validated before coordination begins.",
    points: [
      "Worker background verification",
      "Skills and experience validation",
      "Farm-to-worker matching",
      "Placement documentation",
    ],
    image: Worker,

    details: {
      introTitle: "Verified Agricultural Labour Placement",
      introText:
        "Our Farm Job Agent service coordinates verified worker placement for agricultural operations. We screen workers, validate experience, and coordinate placements with farms needing reliable labour.",

      introSubText:
        "This is not a staffing agency or employment service. We coordinate connections between verified workers and verified farms, with transparent expectations on both sides.",

      // UNIQUE SECTION
      twoSided: [
        {
          id: 1,
          title: "For Farmers",
          subtitle: "Farms Needing Workers",
          options: [
            "Seasonal planting and harvest labour",
            "Ongoing farm maintenance",
            "Specialised agricultural tasks",
            "Cooperative or estate operations",
          ],
        },
        {
          id: 2,
          title: "For Workers",
          subtitle: "Workers Seeking Opportunities",
          options: [
            "Verified farm work opportunities",
            "Clear role expectations and terms",
            "Professional placement coordination",
            "Structured agricultural employment",
          ],
        },
      ],
      twoSidedHowItWorks: [
        {
          id: 1,
          topTag: "For Farmers",
          title: "How It Works: Requesting Workers",
          howItWorks: [
            {
              id: 1,
              title: "Submit Worker Request",
              detail:
                "Specify workers needed, required skills, duration, location, and compensation.",
            },
            {
              id: 2,
              title: "Farm Verification",
              detail:
                "We verify your farm operations, land documentation, and accommodation arrangements.",
            },
            {
              id: 3,
              title: "Worker Matching",
              detail:
                "We match requirements with verified workers in our network who meet your skill needs.",
            },
            {
              id: 4,
              title: "Placement Coordination",
              detail:
                "Clear terms, expectations, and working arrangements documented before placement begins.",
            },
            {
              id: 5,
              title: "Ongoing Support",
              detail:
                "Coordination support and issue resolution during the placement period.",
            },
          ],
        },
        {
          id: 2,
          topTag: "For Workers",
          title: "How It Works: Finding Opportunities",
          howItWorks: [
            {
              id: 1,
              title: "Worker Registration",
              detail:
                "Submit your experience, skills, location preferences, and availability.",
            },
            {
              id: 2,
              title: "Worker Screening",
              detail:
                "We verify identity, validate agricultural experience, and conduct reference checks.",
            },
            {
              id: 3,
              title: "Opportunity Matching",
              detail:
                "We coordinate with verified farms seeking workers matching your skills and preferences.",
            },
            {
              id: 4,
              title: "Terms Review",
              detail:
                "Review job details, compensation, duration, and working conditions before accepting.",
            },
            {
              id: 5,
              title: "Placement Support",
              detail:
                "Access coordination support and issue resolution throughout your placement.",
            },
          ],
        },
      ],
      requirements: [
        {
          id: 1,
          topTag: "Requirements: Farmers",
          title: "Eligibility for Farms",

          requirementList: [
            "Valid farm registration and land documentation",
            "Clear job descriptions and reasonable compensation plans",
            "Appropriate worker accommodations if required",
            "Commitment to documented working conditions and safety",
            "Willingness to engage with our coordination process",
          ],
        },
        {
          id: 2,
          topTag: "Requirements: Workers",
          title: "Eligibility for Workers",

          requirementList: [
            "Valid identification documents",
            "Verifiable agricultural work experience or relevant training",
            "Professional references from previous agricultural employers",
            "Clear availability and location flexibility",
            "Commitment to professional conduct and agreed working terms",
          ],
        },
      ],

      processingDetail: {
        limitation: [
          {
            id: 1,
            title: "No Guaranteed Placements",
            detail:
              "We coordinate connections but cannot guarantee immediate placements for workers or instant worker availability for farms.",
          },
          {
            id: 2,
            title: "Not Employment Services",
            detail:
              "We coordinate introductions. The employment relationship is between farmer and worker. We are not employers or staffing agents.",
          },
          {
            id: 3,
            title: "Performance Variability",
            detail:
              "While we verify experience and references, we cannot guarantee worker performance or farmer satisfaction.",
          },
        ],
        timeline: [
          {
            id: 1,
            title: "Verification Phase: ",
            time: "5–7 business days",
            detail: "Identity verification, document review, reference ",
          },
          {
            id: 2,
            title: "Matching Phase: 1–2 weeks",
            time: "1–2 weeks",
            detail:
              "Worker-farm matching based on skills, location, and availability",
          },
          {
            id: 3,
            title: "Placement Start: ",
            time: "After terms agreement",
            detail: "Placement begins once both parties confirm arrangements",
          },
        ],
      },
    },
  },
];

export const phases = [
  {
    id: 1,
    title: "Verification",
    icon: <LuShield className="h-5 w-5 md:h-6 md:w-6 text-[#2E6B4F]" />,
    detail:
      "Every participant undergoes identity verification, documentation review, and eligibility assessment before coordination begins. No exceptions.",
  },
  {
    id: 2,
    title: "Coordination",
    icon: <LuShield className="h-5 w-5 md:h-6 md:w-6 text-[#2E6B4F]" />,
    detail:
      "We coordinate services, schedules, and expectations between verified participants with clear, written documentation at every stage.",
  },
  {
    id: 3,
    title: "Ongoing Support",
    icon: <FiEye className="h-5 w-5 md:h-6 md:w-6 text-[#2E6B4F]" />,
    detail:
      "Transparent communication, issue resolution, and honest updates throughout the coordination period. No silence, no excuses.",
  },
];

export const verificationProcess = [
  {
    id: 1,
    icon: <LuShield className="h-5 w-5 md:h-6 md:w-6 text-[#2E6B4F]" />,
    title: "Farmer Verification Process",
    content: [
      {
        id: 1,
        title: "Identity Verification",
        detail:
          "Valid government-issued identification, phone number verification, and basic background checks.",
      },
      {
        id: 2,
        title: "Land Documentation",
        detail:
          "Proof of land ownership or documented lease agreements. Farm location verification and boundary confirmation.",
      },
      {
        id: 3,
        title: "Farm Operations Assessment",
        detail:
          "Crop types, farming practices, current operations, and production capacity evaluation.",
      },
      {
        id: 4,
        title: "Reference Checks",
        detail:
          "Where applicable, we verify farming history through local agricultural officers or cooperative memberships.",
      },
    ],
  },
  {
    id: 2,
    icon: <RiGroupLine className="h-5 w-5 md:h-6 md:w-6 text-[#2E6B4F]" />,
    title: "Worker Screening Process",
    content: [
      {
        id: 1,
        title: "Identity & Background",
        detail:
          "Government-issued identification verification, residential address confirmation, and contact validation.",
      },
      {
        id: 2,
        title: "Experience Validation",
        detail:
          "Review of agricultural work history, specific skills, and relevant training or certifications.",
      },
      {
        id: 3,
        title: "Reference Verification",
        detail:
          "Contact with previous employers or supervisors to verify work history and professional conduct.",
      },
      {
        id: 4,
        title: "Skills Assessment",
        detail:
          "Practical skills evaluation for specialised agricultural tasks where applicable.",
      },
    ],
  },
  {
    id: 3,
    icon: <LuShield className="h-5 w-5 md:h-6 md:w-6 text-[#2E6B4F]" />,
    title: "Partner Due Diligence",
    content: [
      {
        id: 1,
        title: "Business Registration",
        detail:
          "Equipment owners, produce buyers, and service providers undergo operational verification and registration checks.",
      },
      {
        id: 2,
        title: "Track Record Assessment",
        detail:
          "Review of history in agricultural services, previous coordination outcomes, and participant feedback.",
      },
      {
        id: 3,
        title: "Financial Review",
        detail:
          "Stability and operational capacity review before inclusion in coordination network.",
      },
      {
        id: 4,
        title: "Transparency Commitment",
        detail:
          "All partners must commit to transparent business practices as a condition of participation.",
      },
    ],
  },
  {
    id: 4,
    icon: <FiEye className="h-5 w-5 md:h-6 md:w-6 text-[#2E6B4F]" />,
    title: "Produce Quality Standards",
    content: [
      {
        id: 1,
        title: "Visual Inspection",
        detail:
          "Size, colour, blemishes, and physical condition assessed against established grading criteria.",
      },
      {
        id: 2,
        title: "Grading Classification",
        detail:
          "Produce classified by quality tier for accurate market coordination and buyer expectation alignment.",
      },
      {
        id: 3,
        title: "Contamination Checks",
        detail:
          "Foreign matter detection and cleanliness verification before aggregation.",
      },
      {
        id: 4,
        title: "Volume Verification",
        detail:
          "Accurate weight or quantity measurement documented before market coordination.",
      },
    ],
  },
];

export const states = [
  {
    id: 1,
    name: "Abia State",
    zone: "south east",
    primary: ["Oil Palm", "Cassava", "Yam"],
    secondary: ["Rice", "Maize", "Cocoyam"],
    emerging: ["Vegetables"],
    season: [
      {
        id: 1,
        name: "Climate",
        description: "Tropical rainforest with two rainy seasons",
      },
      {
        id: 2,
        name: "Planting",
        description: "March–April, September–October",
      },
      {
        id: 3,
        name: "Harvest",
        description: "August–September, January–February",
      },
    ],
  },
  {
    id: 2,
    name: "Adamawa State",
    zone: "north east",
    primary: ["Cotton", "Groundnut", "Maize"],
    secondary: ["Sorghum", "Rice", "Soybean"],
    emerging: ["Ginger"],
    season: [
      {
        id: 1,
        name: "Climate",
        description: "Guinea Savannah with single rainy season",
      },
      {
        id: 2,
        name: "Planting",
        description: "May–June",
      },
      {
        id: 3,
        name: "Harvest",
        description: "October–December",
      },
    ],
  },
  {
    id: 3,
    name: "Akwa Ibom State",
    zone: "south south",
    primary: ["Oil Palm", "Cassava", "Cocoyam"],
    secondary: ["Plantain", "Yam", "Vegetables"],
    emerging: ["Pineapple", "Watermelon"],
    season: [
      {
        id: 1,
        name: "Climate",
        description: "Tropical rainforest, high rainfall",
      },
      {
        id: 2,
        name: "Planting",
        description: "March–April, September–October",
      },
      {
        id: 3,
        name: "Harvest",
        description: "August–September, January–February",
      },
    ],
  },
  {
    id: 4,
    name: "Benue State",
    zone: "north central",
    primary: ["Yam", "Rice", "Cassava"],
    secondary: ["Soybean", "Sesame", "Groundnut"],
    emerging: ["Cashew"],
    season: [
      {
        id: 1,
        name: "Climate",
        description: "Guinea Savannah, moderate rainfall",
      },
      {
        id: 2,
        name: "Planting",
        description: "April–June",
      },
      {
        id: 3,
        name: "Harvest",
        description: "September–December",
      },
    ],
  },
  {
    id: 5,
    name: "Cross River State",
    zone: "south south",
    primary: ["Oil Palm", "Cocoa", "Cassava"],
    secondary: ["Plantain", "Banana", "Rice"],
    emerging: ["Rubber"],
    season: [
      {
        id: 1,
        name: "Climate",
        description: "Tropical rainforest, heavy rainfall",
      },
      {
        id: 2,
        name: "Planting",
        description: "March–May, September–October",
      },
      {
        id: 3,
        name: "Harvest",
        description: "August–October, January–March",
      },
    ],
  },
  {
    id: 6,
    name: "Delta State",
    zone: "south south",
    primary: ["Oil Palm", "Cassava", "Rubber"],
    secondary: ["Plantain", "Yam", "Maize"],
    emerging: ["Vegetables", "Aquaculture"],
    season: [
      {
        id: 1,
        name: "Climate",
        description: "Tropical rainforest with coastal influence",
      },
      {
        id: 2,
        name: "Planting",
        description: "March–April, September–October",
      },
      {
        id: 3,
        name: "Harvest",
        description: "August–September, January–February",
      },
    ],
  },
  {
    id: 7,
    name: "Ebonyi State",
    zone: "south east",
    primary: ["Rice", "Cassava", "Yam"],
    secondary: ["Maize", "Beans", "Palm  Oil"],
    emerging: ["Soybean"],
    season: [
      {
        id: 1,
        name: "Climate",
        description: "Derived savannah transitioning to rainforest",
      },
      {
        id: 2,
        name: "Planting",
        description: "March–May",
      },
      {
        id: 3,
        name: "Harvest",
        description: "August–November",
      },
    ],
  },
  {
    id: 8,
    name: "Kaduna State",
    zone: "north west",
    primary: ["Maize", "Sorghum", "Groundnut"],
    secondary: ["Cotton", "Ginger", "Soybean"],
    emerging: ["Tomatoes", "Onions"],
    season: [
      {
        id: 1,
        name: "Climate",
        description: "Northern Guinea Savannah",
      },
      {
        id: 2,
        name: "Planting",
        description: "May–June",
      },
      {
        id: 3,
        name: "Harvest",
        description: "September–November",
      },
    ],
  },
  {
    id: 9,
    name: "Kano State",
    zone: "north west",
    primary: ["Groundnut", "Millet", "Cotton"],
    secondary: ["Sorghum", "Wheat", "Tomatoes"],
    emerging: ["Onions", "Peppers"],
    season: [
      {
        id: 1,
        name: "Climate",
        description: "Sudan Savannah, dry season irrigation",
      },
      {
        id: 2,
        name: "Planting",
        description: "May–July",
      },
      {
        id: 3,
        name: "Harvest",
        description: "September–December",
      },
    ],
  },
  {
    id: 10,
    name: "Lagos State",
    zone: "south west",
    primary: ["Vegetables", "Cassava", "Maize"],
    secondary: ["Plantain", "Poultry"],
    emerging: ["Urban farming systems"],
    season: [
      {
        id: 1,
        name: "Climate",
        description: "Tropical with coastal influence",
      },
      {
        id: 2,
        name: "Planting",
        description: "March–April, September–October",
      },
      {
        id: 3,
        name: "Harvest",
        description: "Year-round for vegetables",
      },
    ],
  },
  {
    id: 11,
    name: "Ogun State",
    zone: "south west",
    primary: ["Cassava", "Maize", "Cocoa"],
    secondary: ["Oil Palm", "Kola Nut", "Rice"],
    emerging: ["Pineapple", "Citrus"],
    season: [
      {
        id: 1,
        name: "Climate",
        description: "Tropical with derived savannah",
      },
      {
        id: 2,
        name: "Planting",
        description: "March–May, September–October",
      },
      {
        id: 3,
        name: "Harvest",
        description: "August–October, January–February",
      },
    ],
  },
  {
    id: 12,
    name: "Oyo State",
    zone: "south west",
    primary: ["Cassava", "Yam", "Maize"],
    secondary: ["Cocoa", "Tobacco", "Cashew"],
    emerging: ["Vegetables"],
    season: [
      {
        id: 1,
        name: "Climate",
        description: "Derived savannah with moderate rainfall",
      },
      {
        id: 2,
        name: "Planting",
        description: "March–May",
      },
      {
        id: 3,
        name: "Harvest",
        description: "August–November",
      },
    ],
  },
];

export const ZONE_THEME = {
  "south east": {
    badgeBg: "bg-[#ECFDF5]",
    badgeBorder: "border-[#A4F4CF]",
    badgeText: "text-[#007A55]",
  },
  "north east": {
    badgeBg: "bg-[#FFFBEB]",
    badgeBorder: "border-[#FDE68A]",
    badgeText: "text-[#B45309]",
  },
  "north central": {
    badgeBg: "bg-[#FFF7ED]",
    badgeBorder: "border-[#FFD6A8]",
    badgeText: "text-[#CA3500]",
  },
  "north west": {
    badgeBg: "bg-[#FEFCE8]",
    badgeBorder: "border-[#FFF085]",
    badgeText: "text-[#A65F00]",
  },
  "south south": {
    badgeBg: "bg-[#F0FDFA]",
    badgeBorder: "border-[#96F7E4]",
    badgeText: "text-[#00786F]",
  },
  "south west": {
    badgeBg: "bg-[#F0FDF4]",
    badgeBorder: "border-[#B9F8CF]",
    badgeText: "text-[#008236]",
  },
};
