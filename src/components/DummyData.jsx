import { FiCheckCircle, FiEye } from "react-icons/fi";
import { LuShield } from "react-icons/lu";
import { BsBullseye } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa";
import { FaArrowTrendUp } from "react-icons/fa6";
import { AiOutlineApartment } from "react-icons/ai";
import { LuShoppingBasket, LuTractor } from "react-icons/lu";
import { RiGroupLine } from "react-icons/ri";

import {
  Access,
  Agribuss,
  Buyer,
  Capital,
  Diaspora,
  Direct,
  Distribution,
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
    title: "Farmers seeking structure & support",
    description:
      " Access markets, financing, and resources to grow your agricultural business sustainably.",
    image: Farmer,
  },
  {
    id: 2,
    title: "Agribusiness operators",
    description:
      "Scale your operations with technology-driven logistics, financing, and market intelligence.",
    image: Agribuss,
  },
  {
    id: 3,
    title: "Buyers & off-takers",
    description:
      "Source quality produce directly from verified farmers and agribusinesses nationwide.",
    image: Buyer,
  },
  {
    id: 4,
    title: "Nigerians in the diaspora",
    description:
      "Access verified, structured pathways to participate in agriculture from anywhere.",
    image: Diaspora,
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
    link: "/services/market-access",
  },
  {
    id: 2,
    tag: "FINANCING",
    title: "Growth Capital Solutions",
    desc: "Access flexible financing options tailored to agricultural cycles. We partner with financial institutions to provide loans, insurance, and investment opportunities that support your business growth and sustainability.",
    image: Growth,
    reverse: true, // 👈 this controls layout
    link: "/services/growth-capital",
  },
  {
    id: 3,
    tag: "LOGISTICS",
    title: "Seamless Distribution",
    desc: "Efficient logistics network connecting farms to markets. Our technology-enabled distribution system ensures timely delivery, reduces post-harvest losses, and maintains product quality throughout the supply chain.",
    image: Seam,
    reverse: false,
    link: "/services/seamless-distribut",
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
    icon: <FiCheckCircle className="w-6 h-6" />,
    describe: "Land documentation and identity checks",
  },
  {
    id: 2,
    title: "Worker Screening",
    icon: <FiCheckCircle className="w-6 h-6" />,
    describe: "Experience validation and reference checks",
  },
  {
    id: 3,
    title: "Quality Standards",
    icon: <FiCheckCircle className="w-6 h-6" />,
    describe: "Produce grading and market coordination",
  },
  {
    id: 4,
    title: "Clear Disclaimers",
    icon: <LuShield className="w-6 h-6" />,
    describe: "Honest about risks and limitations",
  },
];

export const articleData = [
  {
    id: 1,
    tag: "FARMING TIPS",
    title: "Sustainable Farming Practices for Nigerian Climate",
    subtitle:
      "Learn how to implement eco-friendly farming techniques that increase yield while preserving soil health and long-term productivity.",
    author: "Dr. Chukwuemeka Okafor",
    date: "March 15, 2024",
    readTime: "8 min read",
    image:
      "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=1200&auto=format&fit=crop",
    content: [
      {
        type: "intro",
        text: "Nigeria's diverse climate zones present unique opportunities and challenges for farmers. From the humid south to the semi-arid north, sustainable farming practices can dramatically improve yields while protecting our environment for future generations.",
      },
      { type: "heading", text: "Understanding Your Climate Zone" },
      {
        type: "paragraph",
        text: "Nigeria spans six ecological zones — Sahel Savannah, Sudan Savannah, Guinea Savannah, Rainforest, Freshwater Swamp, and Mangrove Swamp. Each zone demands a tailored approach to farming. Southern farmers in rainforest zones enjoy year-round rainfall but must manage soil erosion, while northern farmers in the Sahel must optimise every drop of seasonal rainfall.",
      },
      {
        type: "paragraph",
        text: "Successful sustainable farming begins with knowing your zone's rainfall patterns, temperature ranges, and natural vegetation — then working with these forces rather than against them.",
      },
      { type: "subheading", text: "Recommended Crops by Zone" },
      {
        type: "list",
        items: [
          "Sahel & Sudan Savannah: millet, sorghum, groundnuts, cowpea",
          "Guinea Savannah: maize, yam, soybean, cassava",
          "Rainforest: cocoa, plantain, palm oil, rubber",
          "Freshwater & Mangrove: rice, vegetables, fish farming",
        ],
      },
      { type: "heading", text: "Soil Health and Conservation" },
      {
        type: "paragraph",
        text: "Healthy soil is the foundation of sustainable agriculture. Many Nigerian soils are under pressure from decades of intensive farming without adequate replenishment. Practices such as cover cropping, composting, and minimal tillage can dramatically reverse soil degradation within two to three growing seasons.",
      },
      {
        type: "quote",
        text: "A farmer who takes care of the soil is borrowing from the earth and paying back with interest — the next harvest will always reflect today's stewardship.",
        author: "Prof. Adaeze Nwosu, University of Agriculture Makurdi",
      },
      { type: "subheading", text: "Composting and Organic Matter" },
      {
        type: "paragraph",
        text: "Composting crop residues, animal manure, and kitchen waste is one of the most cost-effective ways to improve soil fertility. A well-maintained compost heap can generate mature compost in 6–8 weeks during the warm, humid rainy season. Apply 2–3 tonnes per hectare before planting to see measurable improvement in both yield and soil structure.",
      },
      { type: "heading", text: "Water Management Strategies" },
      {
        type: "paragraph",
        text: "Water is increasingly unpredictable across Nigeria due to changing rainfall patterns. Rainwater harvesting, drip irrigation, and mulching are three techniques every sustainable farmer should adopt.",
      },
      {
        type: "list",
        items: [
          "Rainwater harvesting: collect runoff from rooftops or build small earth dams",
          "Mulching: covering soil with straw or leaves reduces moisture loss by up to 60%",
          "Drip irrigation: cuts water usage by 40–50% compared to flood irrigation",
          "Contour farming: reduces runoff and keeps topsoil in place",
        ],
      },
      {
        type: "tip",
        title: "Cost-Saving Tip",
        text: "Local materials like guinea grass, rice straw, or dried banana leaves make excellent mulch at zero cost. A 5 cm layer of mulch can reduce weeding frequency by half and keep soil moist for an extra 3–5 days after rainfall.",
      },
      { type: "heading", text: "Integrated Pest Management" },
      {
        type: "paragraph",
        text: "Chemical pesticides are expensive and can damage soil ecosystems. Integrated Pest Management (IPM) combines biological, cultural, and minimal chemical controls to keep pests in check without destroying beneficial insects or soil organisms. Key strategies include crop rotation, intercropping with pest-repellent plants like basil, and using neem-based organic sprays only when necessary.",
      },
    ],
  },
  {
    id: 2,
    tag: "MARKET INSIGHTS",
    title: "Understanding Seasonal Price Trends in Agriculture",
    subtitle:
      "Discover how to leverage market data and seasonal patterns to maximise profits and make informed planting decisions.",
    author: "Fatima Al-Hassan",
    date: "February 28, 2024",
    readTime: "6 min read",
    image:
      "https://images.unsplash.com/photo-1488459716781-31db52582fe9?w=1200&auto=format&fit=crop",
    content: [
      {
        type: "intro",
        text: "Agricultural commodity prices in Nigeria follow predictable seasonal rhythms shaped by planting and harvest cycles, weather events, and supply chain dynamics. Farmers who understand these patterns can time their sales strategically and capture significantly higher margins.",
      },
      { type: "heading", text: "The Nigerian Agricultural Price Calendar" },
      {
        type: "paragraph",
        text: "Prices for most staple crops follow a broad pattern: they are lowest immediately after the main harvest season (October–December for most of the country) and highest during the lean season (May–July), when stored supplies run low and the next harvest is still months away. This price swing can be dramatic — tomatoes, for example, may cost 3–5 times more during the dry season than at peak harvest.",
      },
      { type: "subheading", text: "Key Price Periods to Know" },
      {
        type: "list",
        items: [
          "Harvest glut (Oct–Dec): Prices lowest — ideal time to purchase inputs and invest in storage",
          "Early dry season (Jan–Mar): Prices begin to rise — good time to sell stored produce",
          "Lean season peak (May–Jul): Highest prices for most crops — maximise sales of stored inventory",
          "New rains (Aug–Sep): Prices moderate as fresh produce enters market",
        ],
      },
      { type: "heading", text: "How to Use Price Data" },
      {
        type: "paragraph",
        text: "Tracking prices doesn't require expensive software. Simple tools like WhatsApp groups with fellow farmers, weekly market visits, and free apps like Farmcrowdy and Pricepally can give you reliable local price intelligence. The goal is to identify your personal price floor — the minimum at which selling is profitable — and never sell below it.",
      },
      {
        type: "quote",
        text: "The farmers who prosper are not always those with the biggest harvests — they are the ones who sell at the right time with the right information.",
        author: "Musa Danjuma, Commodity Market Analyst",
      },
      { type: "heading", text: "Storage as a Market Strategy" },
      {
        type: "paragraph",
        text: "On-farm storage is the simplest way to profit from seasonal price swings. Improved storage technologies — hermetic bags, metal silos, and community warehouses — can preserve grain quality for 6–12 months with minimal post-harvest losses.",
      },
      {
        type: "paragraph",
        text: "The Warehouse Receipt System (WRS), available through the Central Bank of Nigeria and state commodity boards, allows farmers to deposit stored grain as collateral for short-term loans, effectively letting you access cash without being forced to sell at low post-harvest prices.",
      },
      {
        type: "tip",
        title: "Market Insight",
        text: "Joining a cooperative or farmer group gives you access to collective bargaining power, bulk transport cost savings, and real-time market information networks that individual farmers cannot access alone.",
      },
    ],
  },
  {
    id: 3,
    tag: "FINANCING",
    title: "Accessing Agricultural Loans: A Complete Guide",
    subtitle:
      "Navigate the process of securing financing for your agricultural business with our comprehensive guide to loans, grants, and cooperatives.",
    author: "Nkechi Obi-Williams",
    date: "January 20, 2024",
    readTime: "10 min read",
    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200&auto=format&fit=crop",
    content: [
      {
        type: "intro",
        text: "Access to affordable financing is one of the most significant barriers facing Nigerian farmers today. Yet more options exist than most farmers realise — from government-backed schemes to cooperative savings, mobile lending platforms, and impact investors.",
      },
      { type: "heading", text: "Government Agricultural Lending Schemes" },
      {
        type: "paragraph",
        text: "The Central Bank of Nigeria (CBN) operates several dedicated agricultural finance programmes. The Anchor Borrowers Programme (ABP), launched in 2015, has disbursed loans to hundreds of thousands of smallholder farmers linked to large-scale processors as 'anchors'.",
      },
      { type: "subheading", text: "Key CBN Programmes" },
      {
        type: "list",
        items: [
          "Anchor Borrowers Programme (ABP): 9% loans for smallholders producing for anchored off-takers",
          "Agricultural Credit Guarantee Scheme Fund (ACGSF): Bank loan guarantees up to ₦20 million",
          "Commercial Agriculture Credit Scheme (CACS): 9% loans for commercial-scale farming",
          "NIRSAL: Technical assistance plus credit guarantees for agribusinesses",
        ],
      },
      { type: "heading", text: "Commercial Bank Agricultural Loans" },
      {
        type: "paragraph",
        text: "To qualify for a commercial agricultural loan, you will typically need: a valid Bank Verification Number (BVN), land title documentation or proof of leasehold, a farm business plan covering at least two seasons, and evidence of prior farm income.",
      },
      {
        type: "quote",
        text: "The best loan application tells a story — where you've been, where you are now, and exactly what the money will do to get you where you're going.",
        author: "Olumide Fashola, Agricultural Finance Specialist",
      },
      { type: "heading", text: "Cooperative and Group Lending" },
      {
        type: "paragraph",
        text: "Joining or forming a farmer cooperative remains one of the most practical financing strategies available to smallholders. Cooperatives pool savings to create a lending fund, negotiate lower input prices through bulk purchasing, and access larger loans that individual members could not qualify for alone.",
      },
      { type: "subheading", text: "Steps to Form a Productive Cooperative" },
      {
        type: "list",
        items: [
          "Identify 10–30 farmers with complementary interests and a history of reliability",
          "Register with the State Ministry of Agriculture (typically under ₦50,000)",
          "Establish a regular savings schedule — even ₦1,000 per week per member builds significant capital",
          "Draft clear bylaws covering loan terms, penalties for default, and profit-sharing rules",
        ],
      },
      {
        type: "tip",
        title: "Important Note",
        text: "Beware of informal lending groups that lack proper documentation. Always insist on written agreements, witnessed by a local government official, before joining any financial arrangement.",
      },
    ],
  },
  {
    id: 4,
    tag: "CROP GUIDE",
    title: "Cassava Cultivation in Southern Nigeria: Complete Guide",
    subtitle:
      "Comprehensive planting, maintenance, and harvest practices for cassava production in southern regions.",
    author: "Dr. Adeyemi Spokane",
    date: "March 5, 2024",
    readTime: "12 min read",
    image:
      "https://images.unsplash.com/photo-1563565375-f3fdfdbefa83?w=1200&auto=format&fit=crop",
    content: [
      {
        type: "intro",
        text: "Cassava is one of the most important food security crops in southern Nigeria, providing sustenance and income for millions of farming households. This comprehensive guide covers the complete cultivation cycle, with special attention to conditions in southern regions.",
      },
      { type: "heading", text: "Land Selection and Preparation" },
      {
        type: "paragraph",
        text: "Cassava is well-adapted to poor soils and can tolerate drought, but achieves its best yields in well-drained, sandy-loam soils with good organic matter content and a pH between 5.5 and 6.5. In southern Nigeria, the heavy clay soils of river valleys require ridge-and-furrow preparation to prevent waterlogging, which is the most common cause of root rot.",
      },
      { type: "heading", text: "Planting Materials and Timing" },
      {
        type: "paragraph",
        text: "Cassava is propagated through stem cuttings called 'stakes'. Healthy stakes should be 20–30 cm long with at least 5 nodes, cut from mature stems that are free of disease and pest damage.",
      },
      {
        type: "subheading",
        text: "Recommended Varieties for Southern Nigeria",
      },
      {
        type: "list",
        items: [
          "TMS 30572: High yield (30+ tonnes/ha), excellent for gari processing",
          "NR 8082: Disease-resistant, good for areas with cassava mosaic virus pressure",
          "TMS 98/0505: Dual-purpose food and industrial starch, excellent dry matter content",
          "IITA TME 419: Fast-maturing (9–10 months), ideal for short-term land leases",
        ],
      },
      {
        type: "quote",
        text: "Cassava's resilience makes it ideal for food security, but proper varieties with good practices can double your yield compared to traditional methods.",
        author: "Dr. Adeyemi Spokane",
      },
      { type: "heading", text: "Crop Management Practices" },
      { type: "subheading", text: "Weeding Schedule" },
      {
        type: "paragraph",
        text: "Cassava is most vulnerable to weed competition in the first three months after planting. Two to three weeding sessions are necessary: first at 4–6 weeks, second at 8–10 weeks, and a final light weeding at 3 months if needed. After canopy closure at around 3–4 months, the cassava plant naturally shades out most weeds.",
      },
      { type: "subheading", text: "Fertiliser Application" },
      {
        type: "paragraph",
        text: "The recommended rate is 400 kg/ha of NPK 12:12:17 applied in two splits — half at planting and half at 8–10 weeks. In southern Nigeria's acidic soils, liming before fertiliser application can improve nutrient uptake by 30–40%.",
      },
      { type: "heading", text: "Harvest and Post-Harvest Handling" },
      {
        type: "paragraph",
        text: "Most improved varieties mature at 9–12 months. Damaged tubers deteriorate within 24–48 hours, so have your processing plan in place before harvest begins.",
      },
      {
        type: "list",
        items: [
          "Process for gari within 24 hours of harvest for best quality",
          "Ferment peeled, grated cassava for 2–3 days at room temperature",
          "Dry gari to below 12% moisture content for safe storage up to 3 months",
          "Sort market-bound fresh cassava by size — uniform tubers command premium prices",
        ],
      },
    ],
  },
  {
    id: 5,
    tag: "DIASPORA GUIDE",
    title: "Agricultural Participation for Nigerians Abroad",
    subtitle:
      "Understanding realistic opportunities and considerations for diaspora agricultural engagement.",
    author: "Adaeze Ekezie",
    date: "February 10, 2024",
    readTime: "9 min read",
    image:
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1200&auto=format&fit=crop",
    content: [
      {
        type: "intro",
        text: "The Nigerian diaspora remits billions of dollars annually, yet relatively little of this capital finds its way into agriculture — the sector with the highest potential for both social impact and long-term returns. This guide explores practical, realistic ways Nigerians abroad can participate.",
      },
      {
        type: "heading",
        text: "Why Agriculture? The Case for Diaspora Investment",
      },
      {
        type: "paragraph",
        text: "Agriculture accounts for approximately 24% of Nigeria's GDP and employs over 70% of the rural population, yet remains chronically undercapitalised. The sector consistently offers returns of 15–40% per annum for well-managed ventures — significantly above global average equity market returns.",
      },
      {
        type: "heading",
        text: "Models of Diaspora Agricultural Participation",
      },
      {
        type: "subheading",
        text: "Model 1: Remote Ownership with Local Management",
      },
      {
        type: "paragraph",
        text: "The most common diaspora farming model involves purchasing or leasing farmland and engaging a local farm manager or agribusiness company to handle day-to-day operations. Platforms like Agropartnerships, Farmcrowdy, and Thrive Agric offer structured investment schemes where diaspora investors contribute capital and receive fixed or profit-share returns.",
      },
      {
        type: "subheading",
        text: "Model 2: Technology-Enabled Direct Involvement",
      },
      {
        type: "paragraph",
        text: "Advances in farm monitoring technology now allow diaspora farmers to stay closely involved in their farms from abroad. Solar-powered cameras, drone imagery, and IoT soil sensors can transmit real-time farm data, while mobile banking platforms facilitate seamless fund transfers for farm expenses.",
      },
      { type: "subheading", text: "Model 3: Processing and Value Addition" },
      {
        type: "paragraph",
        text: "Investing in agro-processing rather than primary farming removes many of the weather and yield risks associated with crop production. Processing facilities for cassava starch, tomato paste, palm oil refining, and cocoa grinding offer stable returns backed by consistent raw material supply from thousands of smallholder farmers.",
      },
      {
        type: "quote",
        text: "The most successful diaspora agricultural investments are built on trust networks — family, community, or verifiable professional relationships with local partners.",
        author: "Chidi Okonkwo, Diaspora Investment Advisor",
      },
      { type: "heading", text: "Risks and How to Mitigate Them" },
      {
        type: "list",
        items: [
          "Always visit the farm in person or send a trusted representative before investing significant capital",
          "Insist on legally registered business structures with clear shareholding documentation",
          "Start with a small pilot investment before committing your full intended capital",
          "Join the Nigerian Diaspora Agricultural Network (NIDAN) for peer resources and verified introductions",
          "Use regulated investment platforms that offer insurance, escrow, and exit options",
        ],
      },
      {
        type: "tip",
        title: "Diaspora Tip",
        text: "The Nigerian Investment Promotion Commission (NIPC) offers free investment facilitation services for diaspora investors, including introductions to verified local partners and regulatory guidance. Contact them before making any major investment decision.",
      },
    ],
  },
  {
    id: 6,
    tag: "BEST PRACTICES",
    title: "Soil Health Management for Nigerian Farms",
    subtitle:
      "Practical approaches to maintaining soil fertility and productivity across different farming regions.",
    author: "Prof. Emeka Nwosu",
    date: "January 8, 2024",
    readTime: "7 min read",
    image:
      "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=1200&auto=format&fit=crop",
    content: [
      {
        type: "intro",
        text: "Soil degradation is silently undermining agricultural productivity across Nigeria. Studies suggest that up to 60% of farmland in the sub-Saharan region has experienced significant soil fertility decline over the past three decades. Yet with the right practices, farmers can rebuild soil health within a few growing seasons.",
      },
      { type: "heading", text: "Understanding Soil Health Indicators" },
      {
        type: "paragraph",
        text: "Healthy soil is a living ecosystem. A single teaspoon of productive soil contains billions of microorganisms — bacteria, fungi, protozoa, and nematodes — that work together to break down organic matter, fix nitrogen, and make nutrients available to plant roots.",
      },
      {
        type: "list",
        items: [
          "Colour: Dark, rich brown soil indicates good organic matter — pale or reddish soil signals depletion",
          "Texture: Good soil crumbles easily and doesn't form hard crusts after rain",
          "Water retention: Healthy soil absorbs rainfall quickly without puddling or runoff",
          "Earthworm presence: More than 10 earthworms per square metre indicates strong biological activity",
        ],
      },
      { type: "heading", text: "Crop Rotation Strategies" },
      {
        type: "paragraph",
        text: "Rotating crops across seasons is one of the most powerful — and completely free — soil health interventions available to farmers. The key principle is alternating between nitrogen-depleting crops (maize, sorghum, cassava) and nitrogen-fixing legumes (cowpea, groundnut, soybean).",
      },
      { type: "subheading", text: "Recommended Rotation Sequences" },
      {
        type: "list",
        items: [
          "Season 1: Maize → Season 2: Cowpea → Season 3: Yam (classic southern Nigeria sequence)",
          "Season 1: Sorghum → Season 2: Groundnut → Season 3: Maize (northern Nigeria sequence)",
          "Year 1: Tomato/Pepper → Year 2: Maize → Year 3: Cowpea (market garden sequence)",
        ],
      },
      {
        type: "quote",
        text: "Farmers who rotate crops consistently for three years typically see a 20–35% yield increase without any additional fertiliser — the legumes do the work for free.",
        author: "Dr. Blessing Okoye, National Crops Research Institute",
      },
      { type: "heading", text: "Green Manure and Cover Crops" },
      {
        type: "paragraph",
        text: "Mucuna (velvet bean) is particularly effective in southern Nigeria — it suppresses weeds, fixes 100–150 kg of nitrogen per hectare, and can be grown in the off-season without requiring any additional inputs.",
      },
      {
        type: "tip",
        title: "Research Finding",
        text: "Farmers in Benue State who incorporated mucuna into their rotation for two consecutive years before planting yam reported average yam yields 45% higher than neighbours using conventional practices — with no additional fertiliser costs.",
      },
    ],
  },
  {
    id: 7,
    tag: "SUPPLY CHAIN",
    title: "Planting Calendar for North-Central Nigeria",
    subtitle:
      "Region-specific timing for major crops based on rainfall patterns and climate conditions.",
    author: "Halima Ibrahim",
    date: "December 5, 2023",
    readTime: "5 min read",
    image:
      "https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=1200&auto=format&fit=crop",
    content: [
      {
        type: "intro",
        text: "North-Central Nigeria — covering states like Benue, Kogi, Nasarawa, Niger, Plateau, and Kwara — sits at the crossroads of Guinea Savannah and Rainforest ecological zones, giving it some of the country's most versatile farming conditions.",
      },
      { type: "heading", text: "Understanding the North-Central Climate" },
      {
        type: "paragraph",
        text: "North-Central Nigeria typically receives 1,100–1,500 mm of rainfall annually, concentrated in a single rainy season from April to October. The dry season runs November to March, with harmattan winds peaking in December and January.",
      },
      { type: "heading", text: "Monthly Planting Calendar" },
      {
        type: "subheading",
        text: "January – February: Land Preparation Season",
      },
      {
        type: "paragraph",
        text: "Use the dry season to prepare land without the pressure of planting deadlines. This is the ideal time for deep ploughing, clearing residue from the previous season, applying lime if soil pH tests indicate acidity, and constructing or repairing irrigation infrastructure.",
      },
      { type: "subheading", text: "March – April: First Planting Window" },
      {
        type: "paragraph",
        text: "Early rains arrive in March–April. This is the primary planting window for maize (plant when rains are reliable, targeting 2–3 consecutive rain days), yam (plant yam setts in mounds as early as late March), and early-season vegetables like tomatoes, peppers, and onions.",
      },
      { type: "subheading", text: "May – June: Main Season Planting" },
      {
        type: "paragraph",
        text: "Full rainy season is established. Plant sorghum, millet, cowpeas, soybeans, and cassava stakes for December harvest. Also the optimal time for groundnuts in the drier northern parts of the zone.",
      },
      {
        type: "quote",
        text: "Timing your planting to the first reliable rain — not the first rain — saves more crops than any other single practice in North-Central Nigeria.",
        author: "Mallam Sani Abubakar, Extension Agent, Nasarawa State",
      },
      { type: "subheading", text: "October – December: Harvest and Storage" },
      {
        type: "paragraph",
        text: "Main harvest season. Prioritise early harvest of crops at risk from early dry-season winds. Commence drying and processing immediately, targeting less than 13% moisture content in stored grain.",
      },
      {
        type: "list",
        items: [
          "Maize: harvest at full maturity for grain (90–100 days)",
          "Sorghum: harvest when top grains begin to harden (90–120 days)",
          "Cowpea: harvest pods when 80% are fully dry but before shattering occurs",
          "Yam: harvest when leaves begin to yellow and die back naturally (7–9 months from planting)",
        ],
      },
    ],
  },
  {
    id: 8,
    tag: "TOMATO FARMING",
    title: "Tomato Production: From Planting to Market",
    subtitle:
      "Step-by-step guide for successful tomato farming including variety selection, pest management, and market linkage.",
    author: "Agric Business Team",
    date: "November 12, 2023",
    readTime: "11 min read",
    image:
      "https://images.unsplash.com/photo-1592921870789-04563d55041c?w=1200&auto=format&fit=crop",
    content: [
      {
        type: "intro",
        text: "Tomato is one of the most profitable and most challenging vegetable crops in Nigeria. The country is paradoxically one of Africa's largest tomato producers yet imports significant quantities of tomato paste annually — a gap that represents a massive opportunity for commercial tomato farmers with the right knowledge.",
      },
      { type: "heading", text: "Variety Selection" },
      {
        type: "paragraph",
        text: "Choosing the right variety is the single most important decision a tomato farmer makes. Open-pollinated varieties (OPVs) like Roma VF are cheap to seed-save but perform poorly under pest pressure. Hybrid varieties yield significantly more and resist common diseases, but seeds must be purchased fresh each season.",
      },
      {
        type: "list",
        items: [
          "UC82B: Excellent for paste processing, high solid content, good disease resistance",
          "Padma F1: Best fresh market variety, large fruits, 75-day maturity, handles transport well",
          "Cobra F1: Compact plant suited to small plots, high yield in rainy season",
          "Roma VF: Affordable OPV for farmers who want to save seed",
        ],
      },
      { type: "heading", text: "Nursery Management" },
      {
        type: "paragraph",
        text: "Tomato seedlings must be raised in a protected nursery for 3–4 weeks before transplanting. Use a raised bed nursery with a simple shade net or bamboo structure to protect seedlings from direct rain and intense sun. Fill nursery beds with a mixture of topsoil, river sand, and well-composted manure in equal parts.",
      },
      { type: "heading", text: "Irrigation Management" },
      {
        type: "paragraph",
        text: "Consistent soil moisture is critical for tomatoes — irregular watering is the leading cause of fruit cracking and blossom end rot. Drip irrigation is strongly recommended for commercial tomato production. It reduces water use by 50% and minimises foliar disease by keeping leaves dry.",
      },
      {
        type: "quote",
        text: "The tomato farmer who masters nursery management and transplanting shock reduction has solved 40% of their production problems before the main crop even begins.",
        author: "Sunday Ekwueme, Commercial Tomato Farmer, Jos Plateau",
      },
      { type: "heading", text: "Harvest and Market Linkage" },
      {
        type: "paragraph",
        text: "Harvest when fruits are at 'breaker stage' — just beginning to turn from green to orange — for long-distance transport, or fully red for local markets and processing. One hectare of well-managed tomatoes can produce 25–40 tonnes in the dry season under irrigation.",
      },
      {
        type: "tip",
        title: "Market Connection",
        text: "Link up with tomato paste processors before planting to secure an off-take agreement. Off-take contracts provide price certainty and often come with access to subsidised inputs and technical support.",
      },
    ],
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
      '"I found consistent farm work through HAGROSPHERE . The verification process made me feel secure about every placement."',
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
      '"HAGROSPHERE has simplified how I source fresh produce for my restaurant. Consistency is key for my business."',
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
    icon: <LuTractor className="w-4 h-4" />,
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
    icon: <LuShoppingBasket className="w-4 h-4" />,
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

  {
    id: "04",
    slug: "growth-capital",
    tag: "Capital Coordination",
    icon: <FaArrowTrendUp className="w-4 h-4" />,
    title: "Growth Capital Solutions",
    subtitle:
      "Facilitate access to agricultural financing and investment opportunities. We connect verified farmers to capital providers, financial institutions, and investment networks seeking agricultural opportunities.",
    description:
      "Connect farmers to buyers through produce aggregation, quality grading, and transparent coordination. We do not buy or sell  we facilitate verified relationships between producers and commercial buyers.",
    points: [
      "Financial institution partnerships",
      "Investment readiness assessment",
      "Capital provider matching",
      "Transparent terms coordination",
    ],
    image: Capital,

    details: {
      introTitle: "Agricultural Finance Coordination",
      introText:
        "Our Growth Capital Solutions service facilitates connections between verified farmers and capital providers, including banks, microfinance institutions, impact investors, and agricultural development funds.",

      introSubText:
        "We do not provide loans or investment capital ourselves. We coordinate the documentation, verification, and relationship-building process between farmers seeking capital and financial institutions offering agricultural financing.",

      whoFor: [
        {
          id: 1,
          title: "Expanding Farmers",
          detail:
            "Established farmers with documented operations seeking capital for expansion, equipment purchase, or increased production capacity.",
        },
        {
          id: 2,
          title: "Agricultural Cooperatives",
          detail:
            "Cooperative groups with verified membership seeking collective financing for shared infrastructure or bulk input purchases.",
        },
        {
          id: 3,
          title: "Diaspora Investors",
          detail:
            "Nigerian diaspora seeking structured agricultural investment opportunities in their home country with verified farming partners.",
        },
      ],

      howItWorks: [
        {
          id: 1,
          title: "Submit Capital Request",
          detail:
            "Specify capital needs, intended use, business plan, and current operational status through our enquiry form.",
        },
        {
          id: 2,
          title: "Financial Readiness Assessment",
          detail:
            "We verify documentation, farming operations, financial history, and assess readiness for capital provider engagement.",
        },
        {
          id: 3,
          title: "Capital Provider Matching",
          detail:
            "We coordinate with appropriate financial institutions, investors, or development funds based on your profile and needs.",
        },
        {
          id: 4,
          title: "Documentation Coordination",
          detail:
            "Facilitate preparation of required documents, business plans, and financial projections for capital provider review.",
        },
        {
          id: 5,
          title: "Relationship Facilitation",
          detail:
            "Coordinate introductions, terms discussions, and ongoing communication between farmers and capital providers.",
        },
      ],

      limitation: [
        {
          id: 1,
          title: "No Guarantee of Approval",
          detail:
            "We facilitate connections but cannot guarantee capital approval. Final decisions rest with financial institutions based on their criteria and risk assessment.",
        },
        {
          id: 2,
          title: "Interest Rates & Terms",
          detail:
            "We do not control financing terms, interest rates, or repayment conditions. These are set by capital providers based on market rates and risk profiles.",
        },
        {
          id: 3,
          title: "Repayment Obligations",
          detail:
            "Agricultural financing carries repayment obligations. Poor harvests, market conditions, or operational challenges do not eliminate debt responsibilities.",
        },
        {
          id: 4,
          title: "Limited Early-Stage Support",
          detail:
            "Most capital providers prefer established operations with track records. New or first-time farmers may face limited financing options.",
        },
      ],
      processDetail: {
        requirement: [
          "Valid identification and business registration documents",
          "Documented farming operations history (minimum 2 years preferred)",
          "Clear business plan outlining capital use and expected returns",
          "Land ownership documentation or long-term lease agreements",
          "Willingness to undergo financial assessment and due diligence",
        ],
        timeline: [
          {
            id: 1,
            title: "Initial Assessment: ",
            time: "7-10 business days ",
            detail: "Document review and financial readiness evaluation",
          },
          {
            id: 2,
            title: "Capital Provider Matching: ",
            time: "14–21 days ",
            detail: "Coordination with appropriate financial institutions",
          },
          {
            id: 3,
            title: "Due Diligence & Approval: ",
            time: "Varies widely",
            detail:
              "Depends on capital provider processes and amount requested",
          },
        ],
      },
    },
  },
  {
    id: "05",
    slug: "seamless-distribut",
    tag: "Distribution Coordination",
    icon: <AiOutlineApartment className="w-4 h-4" />,
    title: "Seamless Distribution",
    subtitle:
      "Coordinate efficient distribution channels from farm to market. We connect producers to retail networks, wholesalers, and distribution partners nationwide for streamlined market access.",
    description:
      "Verified worker placement connecting qualified agricultural workers with farms that need them. Every placement is background-checked and experience-validated before coordination begins.",
    points: [
      "Retail network partnerships",
      "Distribution channel matching",
      "Quality standards alignment",
      "Nationwide coverage coordination",
    ],
    image: Distribution,

    details: {
      introTitle: "Farm-to-Market Distribution Networks",
      introText:
        "Our Seamless Distribution service coordinates connections between farmers and established distribution networks, including retail chains, wholesalers, food processors, and export channels across Nigeria.",

      introSubText:
        "We do not operate distribution channels ourselves. We facilitate relationships between verified producers and distribution partners, coordinating quality standards, volume requirements, and delivery schedules.",

      whoFor: [
        {
          id: 1,
          title: "Commercial Farmers",
          detail:
            "Farmers producing consistent volumes of quality produce seeking reliable distribution channels beyond local markets.",
        },
        {
          id: 2,
          title: "Agricultural Cooperatives",
          detail:
            "Cooperative groups with aggregated produce volumes ready for structured distribution to retail and wholesale networks.",
        },
        {
          id: 3,
          title: "Specialty Producers",
          detail:
            "Farmers growing high-quality or specialty crops seeking premium distribution channels and export opportunities.",
        },
      ],

      howItWorks: [
        {
          id: 1,
          title: "Submit Distribution Request",
          detail:
            "Specify produce type, production volumes, quality standards, and distribution preferences through our enquiry form.",
        },
        {
          id: 2,
          title: "Producer Verification",
          detail:
            "We verify farming operations, production capacity, quality consistency, and ability to meet distribution requirements.",
        },
        {
          id: 3,
          title: "Distribution Partner Matching",
          detail:
            "We coordinate with retail networks, wholesalers, or export channels that match your produce specifications and volumes.",
        },
        {
          id: 4,
          title: "Standards Alignment",
          detail:
            "Coordinate quality requirements, packaging specifications, delivery schedules, and pricing structures with distribution partners.",
        },
        {
          id: 5,
          title: "Ongoing Coordination",
          detail:
            "Facilitate regular communication, volume planning, quality feedback, and issue resolution throughout the distribution relationship.",
        },
      ],

      limitation: [
        {
          id: 1,
          title: "Volume Requirements",
          detail:
            "Distribution partners often require minimum volumes and consistent supply. Small-scale or irregular production may not meet their requirements.",
        },
        {
          id: 2,
          title: "Quality Standard",
          detail:
            "Retail and export channels have strict quality standards. Produce that does not meet specifications will be rejected, creating potential losses.",
        },
        {
          id: 3,
          title: "Payment Terms",
          detail:
            "Distribution partners set their own payment schedules, which may involve 30–90 day terms. Cash flow planning is essential.",
        },
        {
          id: 4,
          title: "Competition & Displacement",
          detail:
            "Distribution relationships are not exclusive. Partners may source from multiple producers and reduce orders based on market conditions.",
        },
      ],
      processDetail: {
        requirement: [
          "Valid identification and business documentation",
          "Proven production capacity to meet consistent volume requirements",
          "Quality standards compliance and grading capabilities",
          "Ability to meet distribution partner delivery schedules",
          "Willingness to adhere to packaging and presentation specifications",
        ],
        timeline: [
          {
            id: 1,
            title: "Verification Phase:  ",
            time: "5–7 business days ",
            detail: "Producer assessment and capacity verification",
          },
          {
            id: 2,
            title: "Partner Coordination:",
            time: " 14–21 days ",
            detail:
              "Matching with distribution networks and standards alignment",
          },
          {
            id: 3,
            title: "Relationship Building:  ",
            time: "Ongoing",
            detail:
              "Trial deliveries, quality feedback, and volume scaling over time",
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

export const equipmentData = [
  {
    id: "massey-ferguson-375",
    category: "TRACTORS",
    status: "Available",
    name: "Massey Ferguson 375 Tractor",
    description:
      "75HP 4WD agricultural tractor suitable for plowing, harrowing, and general farm operations.",
    fullDescription:
      "High-performance 75HP 4WD agricultural tractor ideal for plowing, harrowing, planting, and general farm operations. Well-maintained and regularly serviced unit with low operating hours.",
    state: "Ebonyi State",
    price: "₦15,000/day",
    lastServiced: "January 2026",
    usageCategory:
      "Suitable for medium to large-scale farming operations including land preparation, planting, and haulage.",
    images: [
      "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1586771107445-d3ca888129ff?w=800&auto=format&fit=crop",
    ],
    specifications: [
      { label: "Engine Power", value: "75 HP" },
      { label: "Drive Type", value: "4-Wheel Drive (4WD)" },
      { label: "Transmission", value: "8 Forward, 2 Reverse" },
      { label: "Operating Weight", value: "2,850 kg" },
      { label: "Fuel Type", value: "Diesel" },
      { label: "PTO Power", value: "63 HP" },
    ],
    trustBadges: [
      "Verified equipment owner",
      "Condition inspected before listing",
      "Regular maintenance records",
    ],
  },
  {
    id: "new-holland-td90",
    category: "TRACTORS",
    status: "Available",
    name: "New Holland TD90 Tractor",
    description:
      "90HP tractor with front loader attachment, ideal for heavy-duty farm operations.",
    fullDescription:
      "The New Holland TD90 is a robust 90HP workhorse equipped with a front loader, making it ideal for heavy-duty farm tasks including loading, hauling, and land clearing.",
    state: "Benue State",
    price: "₦18,000/day",
    lastServiced: "February 2026",
    usageCategory:
      "Best suited for large-scale farms requiring heavy lifting, material handling, and intensive land preparation.",
    images: [
      "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&auto=format&fit=crop",
    ],
    specifications: [
      { label: "Engine Power", value: "90 HP" },
      { label: "Drive Type", value: "4-Wheel Drive (4WD)" },
      { label: "Transmission", value: "Power Shuttle 12F/12R" },
      { label: "Operating Weight", value: "3,400 kg" },
      { label: "Fuel Type", value: "Diesel" },
      { label: "Loader Capacity", value: "1,200 kg" },
    ],
    trustBadges: [
      "Verified equipment owner",
      "Condition inspected before listing",
      "Regular maintenance records",
    ],
  },
  {
    id: "john-deere-5075e",
    category: "TRACTORS",
    status: "In Use",
    name: "John Deere 5075E Tractor",
    description:
      "75HP utility tractor with PowerReverser transmission, suitable for diverse farm tasks.",
    fullDescription:
      "The John Deere 5075E delivers reliable 75HP performance with a PowerReverser transmission for smooth direction changes. A go-to tractor for diverse operations from tillage to hay baling.",
    state: "Niger State",
    price: "₦16,500/day",
    lastServiced: "March 2026",
    usageCategory:
      "Ideal for medium farms handling tillage, baling, loader work, and general cultivation activities.",
    images: [
      "https://images.unsplash.com/photo-1600857544200-b2f666a9a2ec?w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1586771107445-d3ca888129ff?w=800&auto=format&fit=crop",
    ],
    specifications: [
      { label: "Engine Power", value: "75 HP" },
      { label: "Drive Type", value: "2WD / 4WD Option" },
      { label: "Transmission", value: "PowerReverser 9F/3R" },
      { label: "Operating Weight", value: "3,020 kg" },
      { label: "Fuel Type", value: "Diesel" },
      { label: "PTO Power", value: "66 HP" },
    ],
    trustBadges: [
      "Verified equipment owner",
      "Condition inspected before listing",
      "Regular maintenance records",
    ],
  },
  {
    id: "kubota-l3301",
    category: "TRACTORS",
    status: "Available",
    name: "Kubota L3301 Compact Tractor",
    description:
      "33HP compact tractor perfect for small to medium farms, orchards, and garden operations.",
    fullDescription:
      "The Kubota L3301 is a versatile compact tractor offering 33HP in a small footprint. Perfect for orchards, vegetable farms, and tight spaces where larger tractors cannot manoeuvre.",
    state: "Ogun State",
    price: "₦9,000/day",
    lastServiced: "December 2025",
    usageCategory:
      "Designed for smallholder farmers, market gardeners, and orchard operations requiring precision and agility.",
    images: [
      "https://images.unsplash.com/photo-1586771107445-d3ca888129ff?w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=800&auto=format&fit=crop",
    ],
    specifications: [
      { label: "Engine Power", value: "33 HP" },
      { label: "Drive Type", value: "4-Wheel Drive (4WD)" },
      { label: "Transmission", value: "HST (Hydrostatic)" },
      { label: "Operating Weight", value: "1,215 kg" },
      { label: "Fuel Type", value: "Diesel" },
      { label: "PTO Power", value: "27 HP" },
    ],
    trustBadges: [
      "Verified equipment owner",
      "Condition inspected before listing",
    ],
  },

  // ── HARVESTERS ────────────────────────────────────────────────────────────
  {
    id: "john-deere-combine",
    category: "HARVESTERS",
    status: "Available",
    name: "John Deere Combine Harvester",
    description:
      "High-capacity combine harvester for rice and wheat harvesting operations.",
    fullDescription:
      "This John Deere combine harvester delivers exceptional throughput for rice and wheat harvesting. Equipped with an advanced grain cleaning system and high-capacity grain tank for uninterrupted operation.",
    state: "Kaduna State",
    price: "₦25,000/day",
    lastServiced: "January 2026",
    usageCategory:
      "Optimised for large-scale grain and rice farms requiring fast, efficient harvesting with minimal grain loss.",
    images: [
      "https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1536657464919-892534f60d6e?w=800&auto=format&fit=crop",
    ],
    specifications: [
      { label: "Engine Power", value: "250 HP" },
      { label: "Header Width", value: "6.1 m" },
      { label: "Grain Tank", value: "9,000 L" },
      { label: "Threshing System", value: "Axial-Flow" },
      { label: "Fuel Type", value: "Diesel" },
      { label: "Unload Rate", value: "113 L/s" },
    ],
    trustBadges: [
      "Verified equipment owner",
      "Condition inspected before listing",
      "Regular maintenance records",
    ],
  },
  {
    id: "claas-lexion-750",
    category: "HARVESTERS",
    status: "Available",
    name: "Claas Lexion 750 Harvester",
    description:
      "Premium combine harvester with CEMOS auto-optimization, ideal for large-scale grain farms.",
    fullDescription:
      "The Claas Lexion 750 is a top-tier combine with CEMOS automatic optimization that continuously adapts settings for maximum efficiency and grain quality even in difficult crop conditions.",
    state: "Katsina State",
    price: "₦30,000/day",
    lastServiced: "February 2026",
    usageCategory:
      "Suited for large commercial grain farms where high throughput, grain quality, and minimal downtime are critical.",
    images: [
      "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=800&auto=format&fit=crop",
    ],
    specifications: [
      { label: "Engine Power", value: "354 HP" },
      { label: "Header Width", value: "7.5 m" },
      { label: "Grain Tank", value: "12,000 L" },
      { label: "Threshing System", value: "APS Hybrid" },
      { label: "Fuel Type", value: "Diesel" },
      { label: "Optimization", value: "CEMOS Auto" },
    ],
    trustBadges: [
      "Verified equipment owner",
      "Condition inspected before listing",
      "Regular maintenance records",
    ],
  },
  {
    id: "rice-reaper-binder",
    category: "HARVESTERS",
    status: "In Use",
    name: "Rice Reaper Binder",
    description:
      "Self-propelled rice reaper with binding mechanism, handles up to 3 acres per day.",
    fullDescription:
      "A compact self-propelled rice reaper binder that cuts and binds paddy in one pass. Lightweight and manoeuvrable in paddy fields, covering 3 acres per day with minimal operator fatigue.",
    state: "Kebbi State",
    price: "₦12,000/day",
    lastServiced: "November 2025",
    usageCategory:
      "Ideal for smallholder and medium-scale rice farmers looking to mechanise harvesting affordably.",
    images: [
      "https://images.unsplash.com/photo-1536657464919-892534f60d6e?w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1471193945509-9ad0617afabf?w=800&auto=format&fit=crop",
    ],
    specifications: [
      { label: "Engine Power", value: "5 HP" },
      { label: "Cutting Width", value: "1.2 m" },
      { label: "Drive Type", value: "Self-Propelled" },
      { label: "Daily Capacity", value: "3 acres" },
      { label: "Fuel Type", value: "Petrol" },
      { label: "Weight", value: "280 kg" },
    ],
    trustBadges: [
      "Verified equipment owner",
      "Condition inspected before listing",
    ],
  },

  // ── PLANTERS ──────────────────────────────────────────────────────────────
  {
    id: "row-crop-planter",
    category: "PLANTERS",
    status: "In Use",
    name: "Row Crop Planter",
    description:
      "Precision planter for maize, soybean, and other row crops with adjustable spacing.",
    fullDescription:
      "A high-precision row crop planter engineered for accurate seed placement of maize, soybean, and legumes. Features adjustable row spacing and seed rate for flexible planting configurations.",
    state: "Kano State",
    price: "₦8,000/day",
    lastServiced: "October 2025",
    usageCategory:
      "Best for commercial farmers planting maize, soybean, and sunflower across large, flat fields.",
    images: [
      "https://images.unsplash.com/photo-1471193945509-9ad0617afabf?w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&auto=format&fit=crop",
    ],
    specifications: [
      { label: "No. of Rows", value: "6 Rows" },
      { label: "Row Spacing", value: "Adjustable 50–90 cm" },
      { label: "Seed Types", value: "Maize, Soybean, Sunflower" },
      { label: "Hopper Capacity", value: "25 kg per row" },
      { label: "Drive Type", value: "Tractor-Mounted" },
      { label: "Working Width", value: "4.5 m" },
    ],
    trustBadges: [
      "Verified equipment owner",
      "Condition inspected before listing",
      "Regular maintenance records",
    ],
  },
  {
    id: "pneumatic-seed-drill",
    category: "PLANTERS",
    status: "Available",
    name: "Pneumatic Seed Drill",
    description:
      "12-row pneumatic seed drill for uniform seeding of wheat, rice, and other small grains.",
    fullDescription:
      "This 12-row pneumatic seed drill ensures accurate, uniform seed placement for small-grain crops. The pneumatic metering system handles a wide range of seed sizes with minimal damage.",
    state: "Sokoto State",
    price: "₦7,000/day",
    lastServiced: "January 2026",
    usageCategory:
      "Ideal for wheat, rice, and sorghum farmers requiring uniform seeding depth and spacing.",
    images: [
      "https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1471193945509-9ad0617afabf?w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&auto=format&fit=crop",
    ],
    specifications: [
      { label: "No. of Rows", value: "12 Rows" },
      { label: "Row Spacing", value: "18 cm" },
      { label: "Seed Types", value: "Wheat, Rice, Sorghum" },
      { label: "Hopper Capacity", value: "350 kg" },
      { label: "Drive Type", value: "Tractor-Mounted" },
      { label: "Seeding Depth", value: "2–8 cm adjustable" },
    ],
    trustBadges: [
      "Verified equipment owner",
      "Condition inspected before listing",
      "Regular maintenance records",
    ],
  },

  // ── IRRIGATION ────────────────────────────────────────────────────────────
  {
    id: "drip-irrigation-kit",
    category: "IRRIGATION",
    status: "Available",
    name: "Drip Irrigation System Kit",
    description:
      "Complete drip irrigation system for up to 2 hectares, includes pumps and fittings.",
    fullDescription:
      "A complete drip irrigation solution covering up to 2 hectares. Includes main line, drip tapes, filtration unit, pressure regulators, and a 1.5HP pump. Reduces water usage by up to 60% compared to flood irrigation.",
    state: "Lagos State",
    price: "₦5,000/day",
    lastServiced: "March 2026",
    usageCategory:
      "Best for vegetable farms, greenhouses, and horticultural operations requiring precise water delivery.",
    images: [
      "https://images.unsplash.com/photo-1622383563227-04401ab4e5ea?w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1563514227147-6d2ff665a6a0?w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&auto=format&fit=crop",
    ],
    specifications: [
      { label: "Coverage Area", value: "Up to 2 hectares" },
      { label: "Pump Power", value: "1.5 HP" },
      { label: "Emitter Flow Rate", value: "2–4 L/hr" },
      { label: "Filtration", value: "Screen & Disc Filter" },
      { label: "Pipe Material", value: "HDPE" },
      { label: "Water Saving", value: "Up to 60%" },
    ],
    trustBadges: [
      "Verified equipment owner",
      "Condition inspected before listing",
    ],
  },
  {
    id: "centre-pivot-irrigation",
    category: "IRRIGATION",
    status: "Available",
    name: "Centre Pivot Irrigation System",
    description:
      "Motorised centre-pivot system covering up to 50 hectares with automated scheduling.",
    fullDescription:
      "A large-scale motorised centre-pivot irrigation system capable of uniformly irrigating up to 50 hectares per rotation. Features automated scheduling, variable rate irrigation, and remote monitoring.",
    state: "Adamawa State",
    price: "₦35,000/day",
    lastServiced: "February 2026",
    usageCategory:
      "Designed for large commercial farms growing maize, wheat, or vegetables that require consistent and uniform irrigation.",
    images: [
      "https://images.unsplash.com/photo-1622383563227-04401ab4e5ea?w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1563514227147-6d2ff665a6a0?w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&auto=format&fit=crop",
    ],
    specifications: [
      { label: "Coverage Area", value: "Up to 50 hectares" },
      { label: "Span Length", value: "400 m" },
      { label: "Application Rate", value: "Variable Rate" },
      { label: "Drive Type", value: "Electric Motorised Towers" },
      { label: "Monitoring", value: "Remote GPS Monitoring" },
      { label: "Water Source", value: "Borehole / Canal" },
    ],
    trustBadges: [
      "Verified equipment owner",
      "Condition inspected before listing",
      "Regular maintenance records",
    ],
  },

  // ── PROCESSING ────────────────────────────────────────────────────────────
  {
    id: "rice-milling-machine",
    category: "PROCESSING",
    status: "Available",
    name: "Rice Milling Machine",
    description:
      "Medium-scale rice milling equipment for paddy processing with destoner.",
    fullDescription:
      "A medium-capacity rice milling machine complete with a destoner, whitener, and polisher. Processes paddy from raw grain to market-ready white rice with high milling efficiency and low breakage.",
    state: "Ebonyi State",
    price: "₦12,000/day",
    lastServiced: "January 2026",
    usageCategory:
      "Suited for rice cooperatives, aggregators, and processors looking to add value to paddy at scale.",
    images: [
      "https://images.unsplash.com/photo-1536657464919-892534f60d6e?w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1560493676-04071c5f467b?w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=800&auto=format&fit=crop",
    ],
    specifications: [
      { label: "Capacity", value: "500 kg/hour" },
      { label: "Milling Recovery", value: "68–72%" },
      { label: "Power Source", value: "Electric / Diesel" },
      { label: "Motor Rating", value: "15 kW" },
      { label: "Includes", value: "Destoner, Whitener, Polisher" },
      { label: "Weight", value: "850 kg" },
    ],
    trustBadges: [
      "Verified equipment owner",
      "Condition inspected before listing",
      "Regular maintenance records",
    ],
  },
  {
    id: "cassava-processing-equipment",
    category: "PROCESSING",
    status: "Available",
    name: "Cassava Processing Equipment",
    description:
      "Complete cassava processing line from peeling to grating for garri production.",
    fullDescription:
      "A full cassava processing line integrating a peeler, grater, hydraulic press, and fryer. Designed for efficient garri production with consistent quality, processing up to 1 tonne of fresh cassava per hour.",
    state: "Imo State",
    price: "₦10,000/day",
    lastServiced: "December 2025",
    usageCategory:
      "Suitable for cassava farmer groups, garri producers, and agro-processing SMEs seeking to scale production.",
    images: [
      "https://images.unsplash.com/photo-1611735341450-74d61e660ad2?w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1560493676-04071c5f467b?w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1536657464919-892534f60d6e?w=800&auto=format&fit=crop",
    ],
    specifications: [
      { label: "Capacity", value: "1 tonne/hour" },
      { label: "Process Line", value: "Peeler → Grater → Press → Fryer" },
      { label: "Power Source", value: "Electric" },
      { label: "Motor Rating", value: "7.5 kW" },
      { label: "Output", value: "Garri / Starch" },
      { label: "Weight", value: "620 kg" },
    ],
    trustBadges: [
      "Verified equipment owner",
      "Condition inspected before listing",
    ],
  },
  {
    id: "maize-sheller-machine",
    category: "PROCESSING",
    status: "In Use",
    name: "Maize Sheller Machine",
    description: "Electric maize shelling machine with 500kg/hour capacity.",
    fullDescription:
      "A robust electric maize sheller delivering 500kg/hour throughput with minimal grain damage. Features a grain-cob separator and blower for clean output, suitable for cooperatives and aggregators.",
    state: "Plateau State",
    price: "₦6,000/day",
    lastServiced: "November 2025",
    usageCategory:
      "Ideal for maize aggregators, processors, and farmer cooperatives handling large post-harvest volumes.",
    images: [
      "https://images.unsplash.com/photo-1560493676-04071c5f467b?w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1611735341450-74d61e660ad2?w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1536657464919-892534f60d6e?w=800&auto=format&fit=crop",
    ],
    specifications: [
      { label: "Capacity", value: "500 kg/hour" },
      { label: "Shelling Efficiency", value: ">98%" },
      { label: "Power Source", value: "Electric" },
      { label: "Motor Rating", value: "3 kW" },
      { label: "Includes", value: "Grain-Cob Separator, Blower" },
      { label: "Weight", value: "185 kg" },
    ],
    trustBadges: [
      "Verified equipment owner",
      "Condition inspected before listing",
      "Regular maintenance records",
    ],
  },

  // ── SPRAYERS ──────────────────────────────────────────────────────────────
  {
    id: "boom-sprayer",
    category: "SPRAYERS",
    status: "Available",
    name: "Boom Sprayer (Tractor-Mounted)",
    description:
      "12-metre boom sprayer with 600L tank for herbicide and pesticide application.",
    fullDescription:
      "A tractor-mounted 12-metre boom sprayer with a 600L polyethylene tank and 24 nozzles. Delivers precise, uniform chemical application for herbicide, fungicide, and pesticide programmes.",
    state: "Imo State",
    price: "₦7,500/day",
    lastServiced: "February 2026",
    usageCategory:
      "Best for medium to large crop farms with flat terrain requiring efficient chemical application.",
    images: [
      "https://images.unsplash.com/photo-1625244724120-1fd1d34d00f6?w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1471193945509-9ad0617afabf?w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=800&auto=format&fit=crop",
    ],
    specifications: [
      { label: "Boom Width", value: "12 m" },
      { label: "Tank Capacity", value: "600 L" },
      { label: "No. of Nozzles", value: "24" },
      { label: "Operating Pressure", value: "1–5 bar" },
      { label: "Drive Type", value: "Tractor-Mounted (PTO)" },
      { label: "Application Rate", value: "60–300 L/ha" },
    ],
    trustBadges: [
      "Verified equipment owner",
      "Condition inspected before listing",
    ],
  },
  {
    id: "agricultural-drone-sprayer",
    category: "SPRAYERS",
    status: "In Use",
    name: "Agricultural Drone Sprayer",
    description:
      "10-litre payload agricultural drone for precision pesticide and fertiliser application.",
    fullDescription:
      "A cutting-edge agricultural drone with a 10-litre spray tank and intelligent flight planning. Covers 15 acres per hour with precision GPS-guided spraying, reducing chemical use by up to 40%.",
    state: "Abuja FCT",
    price: "₦20,000/day",
    lastServiced: "March 2026",
    usageCategory:
      "Suited for precision farmers, drone service providers, and farms with difficult terrain or dense canopy.",
    images: [
      "https://images.unsplash.com/photo-1508614589041-895b88991e3e?w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1625244724120-1fd1d34d00f6?w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1622383563227-04401ab4e5ea?w=800&auto=format&fit=crop",
    ],
    specifications: [
      { label: "Payload", value: "10 L" },
      { label: "Coverage", value: "15 acres/hour" },
      { label: "Flight Time", value: "~12 min per tank" },
      { label: "Navigation", value: "GPS Auto-Pilot" },
      { label: "Chemical Saving", value: "Up to 40%" },
      { label: "Remote Range", value: "1.5 km" },
    ],
    trustBadges: [
      "Verified equipment owner",
      "Condition inspected before listing",
      "Regular maintenance records",
    ],
  },
];

export const equipmentVerificationProcess = [
  {
    id: 1,
    title: "Equipment Inspection",
    description:
      "Every piece of equipment undergoes thorough inspection before listing to verify operational status.",
  },
  {
    id: 2,
    title: "Owner Verification",
    description:
      "Equipment owners are verified participants with documented ownership and maintenance records.",
  },
  {
    id: 3,
    title: "Coordination Support",
    description:
      "We facilitate scheduling, logistics coordination, and clear terms between farmers and equipment owners.",
  },
];

export const workPlacementProcess = [
  {
    id: 1,
    title: "Small to Medium FarmersBackground Verification",
    description:
      "All job applicants undergo identity verification, reference checks, and skills assessment before placement coordination.",
  },
  {
    id: 2,
    title: "Employer Verification",
    description:
      "Farm employers are verified participants with documented operations and clear work terms before job posting..",
  },
  {
    id: 3,
    title: "Placement Coordination",
    description:
      "We coordinate introductions, facilitate communication, and ensure clear terms between verified workers and employers..",
  },
];

export const jobsData = [
  {
    id: "rice-farm-worker-ebonyi",
    category: "CROP PRODUCTION",
    contractType: "Seasonal Contract",
    title: "Rice Farm Worker",
    description:
      "Seeking experienced farm workers for rice planting, weeding, and harvest operations during the 2026 season.",
    state: "Ebonyi State",
    salaryMin: 45000,
    salaryMax: 65000,
    duration: "4–6 months",
    positionType: null,
    postedDaysAgo: 3,
    // ── Detail fields ───────────────────────────────────────────────────
    employer: "Abakaliki Rice Cooperative",
    workSchedule: "Monday – Saturday, 7:00 AM – 4:00 PM",
    startDate: "June 2026",
    fullDescription:
      "We are seeking experienced farm workers for our rice farming operations during the 2026 planting and harvest season. This is a seasonal contract position covering planting, irrigation management, weeding, pest management, and harvest operations.",
    responsibilities: [
      "Plant rice seedlings according to spacing requirements",
      "Perform manual weeding and field maintenance",
      "Assist with irrigation system management",
      "Harvest rice at optimal maturity",
      "Support post-harvest, husk drying, and preparation",
    ],
    requirements: [
      "Previous experience in rice farming or general crop production",
      "Ability to work outdoors in various weather conditions",
      "Physical fitness for manual agricultural work",
      "Willingness to work in a team environment",
      "Basic understanding of rice farming cycles",
    ],
    whatWeOffer: [
      "On-site accommodation provided",
      "Daily meals during work periods",
      "Transportation from major towns",
      "Payment every two weeks",
      "Safety equipment provided",
    ],
    trustNote:
      "All applicants undergo background verification, reference checks, and skills assessment before placement coordination.",
  },
  {
    id: "tractor-operator-kano",
    category: "EQUIPMENT OPERATION",
    contractType: "Full-time",
    title: "Tractor Operator",
    description:
      "Experienced tractor operator needed for large-scale farming operations including plowing, harrowing, and planting.",
    state: "Kano State",
    salaryMin: 72000,
    salaryMax: 95000,
    duration: null,
    positionType: "Permanent Position",
    postedDaysAgo: 9,
    employer: "Kano Agrifields Ltd",
    workSchedule: "Monday – Friday, 7:00 AM – 5:00 PM",
    startDate: "Immediate",
    fullDescription:
      "We are looking for a skilled tractor operator to join our mechanised farming team. The successful candidate will be responsible for operating and maintaining tractors and farm implements across a 500-hectare commercial farm.",
    responsibilities: [
      "Operate tractors for plowing, harrowing, planting, and harvesting",
      "Perform routine maintenance checks and minor repairs",
      "Follow safety protocols during all field operations",
      "Keep accurate records of fuel usage and machine hours",
      "Coordinate with farm supervisors on daily task schedules",
    ],
    requirements: [
      "Minimum 3 years' experience operating tractors",
      "Valid driver's licence (Class C or above)",
      "Knowledge of farm implements and attachments",
      "Ability to troubleshoot basic mechanical issues",
      "Good communication and team-working skills",
    ],
    whatWeOffer: [
      "Competitive monthly salary",
      "Annual performance bonus",
      "Health insurance coverage",
      "13-month salary upon confirmation",
      "Regular training and professional development",
    ],
    trustNote:
      "All applicants undergo background verification, reference checks, and skills assessment before placement coordination.",
  },
  {
    id: "poultry-farm-assistant-ogun",
    category: "LIVESTOCK",
    contractType: "Full-time",
    title: "Poultry Farm Assistant",
    description:
      "Assist in daily poultry farm operations including feeding, cleaning, egg collection, and health monitoring.",
    state: "Ogun State",
    salaryMin: 40000,
    salaryMax: 55000,
    duration: null,
    positionType: "Permanent Position",
    postedDaysAgo: 14,
    employer: "Sunrise Poultry Farms",
    workSchedule: "Monday – Saturday, 6:00 AM – 3:00 PM",
    startDate: "July 2026",
    fullDescription:
      "Sunrise Poultry Farms is recruiting dedicated farm assistants to support daily operations in our 50,000-bird layer and broiler facility. You will work under the supervision of the farm manager to ensure the health, welfare, and productivity of our flock.",
    responsibilities: [
      "Feed and water birds according to daily schedules",
      "Collect, grade, and pack eggs for distribution",
      "Clean and disinfect poultry houses regularly",
      "Monitor bird health and report abnormalities",
      "Assist in vaccination and medication programmes",
    ],
    requirements: [
      "Experience in poultry or livestock farming preferred",
      "Willingness to work early mornings and weekends",
      "Good physical stamina for farm duties",
      "Basic literacy and ability to follow instructions",
      "Responsible and reliable work ethic",
    ],
    whatWeOffer: [
      "On-farm accommodation available",
      "Meals provided during shifts",
      "Monthly performance bonus",
      "Annual leave entitlement",
      "Career progression opportunities",
    ],
    trustNote:
      "All applicants undergo background verification, reference checks, and skills assessment before placement coordination.",
  },
  {
    id: "farm-supervisor-oyo",
    category: "FARM MANAGEMENT",
    contractType: "Full-time",
    title: "Farm Supervisor",
    description:
      "Supervise farm workers, coordinate daily operations, and ensure quality standards in cassava production.",
    state: "Oyo State",
    salaryMin: 90000,
    salaryMax: 120000,
    duration: null,
    positionType: "Permanent Position",
    postedDaysAgo: 14,
    employer: "Oyo Cassava Growers Association",
    workSchedule: "Monday – Saturday, 7:30 AM – 5:00 PM",
    startDate: "August 2026",
    fullDescription:
      "We are seeking an experienced Farm Supervisor to oversee our 200-hectare cassava farm operations. The successful candidate will manage a team of 30+ farm workers, coordinate planting and harvest schedules, and ensure quality and safety standards are met.",
    responsibilities: [
      "Supervise and coordinate daily activities of farm workers",
      "Plan and implement planting, maintenance, and harvest schedules",
      "Monitor crop health and recommend agronomic interventions",
      "Ensure compliance with farm safety regulations",
      "Report weekly to the farm manager on KPIs and challenges",
    ],
    requirements: [
      "Minimum 5 years' experience in farm supervision or management",
      "OND/HND/BSc in Agriculture or related field preferred",
      "Strong leadership and team management skills",
      "Knowledge of cassava agronomy and post-harvest handling",
      "Proficiency in basic record-keeping and reporting",
    ],
    whatWeOffer: [
      "Competitive salary with annual review",
      "Company vehicle for farm duties",
      "Health insurance for employee and one dependent",
      "Housing allowance",
      "Opportunity to grow into Farm Manager role",
    ],
    trustNote:
      "All applicants undergo background verification, reference checks, and skills assessment before placement coordination.",
  },
  {
    id: "cassava-processing-technician-imo",
    category: "PROCESSING",
    contractType: "Contract",
    title: "Cassava Processing Technician",
    description:
      "Operate and maintain cassava processing equipment for garri and flour production.",
    state: "Imo State",
    salaryMin: 55000,
    salaryMax: 80000,
    duration: "12 months",
    positionType: null,
    postedDaysAgo: 21,
    employer: "EasternAg Processing Ltd",
    workSchedule: "Monday – Friday, 8:00 AM – 5:00 PM",
    startDate: "July 2026",
    fullDescription:
      "EasternAg Processing Ltd is looking for a skilled technician to operate and maintain our cassava processing line. You will be responsible for the smooth running of the peeling, grating, pressing, and frying equipment in our garri and flour production facility.",
    responsibilities: [
      "Operate cassava peeling, grating, and pressing machines",
      "Monitor product quality at each processing stage",
      "Carry out preventive maintenance on processing equipment",
      "Ensure compliance with food safety and hygiene standards",
      "Train junior operators on correct machine usage",
    ],
    requirements: [
      "At least 2 years' experience in agro-processing or food manufacturing",
      "Technical knowledge of mechanical or electrical systems is an advantage",
      "Familiarity with garri or cassava starch production",
      "Ability to work in a production environment",
      "OND in Mechanical Engineering, Food Technology, or related field",
    ],
    whatWeOffer: [
      "Competitive contract salary",
      "Contract renewal based on performance",
      "Technical training and certification support",
      "Health and safety equipment provided",
      "Possibility of permanent placement",
    ],
    trustNote:
      "All applicants undergo background verification, reference checks, and skills assessment before placement coordination.",
  },
  {
    id: "irrigation-technician-benue",
    category: "CROP PRODUCTION",
    contractType: "Full-time",
    title: "Irrigation Technician",
    description:
      "Install, maintain, and repair drip and pivot irrigation systems across large commercial farmlands.",
    state: "Benue State",
    salaryMin: 60000,
    salaryMax: 85000,
    duration: null,
    positionType: "Permanent Position",
    postedDaysAgo: 5,
    employer: "Benue Valley Farms",
    workSchedule: "Monday – Saturday, 7:00 AM – 4:30 PM",
    startDate: "Immediate",
    fullDescription:
      "Benue Valley Farms is seeking a qualified Irrigation Technician to install, operate, and maintain drip and sprinkler irrigation systems across our commercial farmlands. You will play a key role in ensuring optimal water management for crop production.",
    responsibilities: [
      "Install and commission drip, sprinkler, and pivot irrigation systems",
      "Inspect systems regularly and carry out repairs as needed",
      "Manage water scheduling and pump operations",
      "Keep records of water usage and system performance",
      "Train farm workers on basic irrigation operation",
    ],
    requirements: [
      "Minimum 2 years' experience with irrigation systems",
      "Technical qualification in Agriculture, Civil, or Mechanical Engineering",
      "Knowledge of pumps, pipes, and water management systems",
      "Ability to work in outdoor field environments",
      "Valid driving licence is an advantage",
    ],
    whatWeOffer: [
      "Competitive permanent salary",
      "Field vehicle and equipment provided",
      "Health insurance",
      "Annual leave and public holidays",
      "Professional development sponsorship",
    ],
    trustNote:
      "All applicants undergo background verification, reference checks, and skills assessment before placement coordination.",
  },
  {
    id: "cattle-herder-kaduna",
    category: "LIVESTOCK",
    contractType: "Seasonal Contract",
    title: "Cattle Herder",
    description:
      "Manage and move cattle herds across grazing areas, monitor animal health and feed supply.",
    state: "Kaduna State",
    salaryMin: 35000,
    salaryMax: 50000,
    duration: "3–5 months",
    positionType: null,
    postedDaysAgo: 7,
    employer: "Northern Ranches Cooperative",
    workSchedule: "Daily, sunrise to sunset",
    startDate: "June 2026",
    fullDescription:
      "Northern Ranches Cooperative is recruiting experienced cattle herders for the 2026 grazing season. You will be responsible for managing herds across designated grazing routes, monitoring animal health, and reporting any concerns to the ranch manager.",
    responsibilities: [
      "Guide cattle herds safely across grazing routes",
      "Monitor animal health and identify sick or injured livestock",
      "Ensure cattle have access to adequate water sources",
      "Prevent cattle from straying into farmlands or roads",
      "Report daily herd status and any incidents to the ranch manager",
    ],
    requirements: [
      "Experience herding cattle or managing livestock",
      "Good knowledge of grazing land management",
      "Physical fitness and ability to walk long distances",
      "Ability to work outdoors in all weather conditions",
      "Responsible and trustworthy character",
    ],
    whatWeOffer: [
      "Weekly payment",
      "On-site accommodation during the season",
      "Meals and basic provisions",
      "Safety equipment and basic first-aid kit",
      "Bonus for completing the full season",
    ],
    trustNote:
      "All applicants undergo background verification, reference checks, and skills assessment before placement coordination.",
  },
  {
    id: "agro-processing-manager-delta",
    category: "FARM MANAGEMENT",
    contractType: "Full-time",
    title: "Agro-Processing Manager",
    description:
      "Oversee processing plant operations, manage staff, maintain quality control and equipment schedules.",
    state: "Delta State",
    salaryMin: 120000,
    salaryMax: 160000,
    duration: null,
    positionType: "Permanent Position",
    postedDaysAgo: 2,
    employer: "Delta Agrivalue Ltd",
    workSchedule: "Monday – Friday, 8:00 AM – 5:00 PM",
    startDate: "Immediate",
    fullDescription:
      "Delta Agrivalue Ltd is seeking an experienced Agro-Processing Manager to lead operations at our processing facility. You will manage a team of 50+ staff, oversee machinery maintenance, ensure quality control, and drive continuous improvement in our palm oil and cassava processing lines.",
    responsibilities: [
      "Manage daily operations of the processing plant",
      "Lead, motivate, and develop a team of 50+ processing staff",
      "Oversee equipment maintenance schedules and downtime management",
      "Implement quality control and food safety protocols",
      "Prepare and manage processing budgets and production reports",
    ],
    requirements: [
      "Minimum 7 years' experience in agro-processing or food manufacturing",
      "BSc/HND in Food Technology, Agricultural Engineering, or related field",
      "Proven team leadership and plant management experience",
      "Strong understanding of quality management systems",
      "Excellent reporting and communication skills",
    ],
    whatWeOffer: [
      "Highly competitive salary",
      "Executive health insurance package",
      "Company vehicle",
      "Annual performance bonus",
      "Stock option plan after 2 years",
    ],
    trustNote:
      "All applicants undergo background verification, reference checks, and skills assessment before placement coordination.",
  },
];
