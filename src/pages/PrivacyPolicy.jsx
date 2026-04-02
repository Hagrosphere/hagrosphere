const servicesList = [
  "An investment platform or financial services provider",
  "A produce trading or buying company",
  "A loan or financing provider",
  "A guarantor of agricultural outcomes, yields, or market prices",
];

const responsibilitiesList = [
  "Provide accurate and truthful information",
  "Submit valid documentation for verification processes",
  "Comply with all applicable Nigerian agricultural regulations",
  "Maintain professional conduct in all coordinated interactions",
  "Understand that agricultural activities carry inherent risks",
];

const infoList = [
  "Personal identification (name, phone, email, address)",
  "Farm location and land documentation",
  "Agricultural experience and skills information",
  "Business registration for commercial participants",
  "Communication records related to service coordination",
];

const limitationList = [
  "Crop failures, weather events, or pest/disease impacts",
  "Market price fluctuations or buyer decisions",
  "Equipment failures or mechanical issues",
  "Disputes between farmers, workers, or buyers in coordinated relationships",
  "Any financial losses resulting from agricultural activities",
];
const howWeUseList = [
  "Verification and eligibility assessment",
  "Service coordination and participant matching",
  "Communication about coordination activities",
  "Improving our coordination processes",
];

const shareInfoList = [
  "With explicit consent between coordinated participants (e.g., farmer and worker contact information)",
  "When required by Nigerian law or regulations",
  "With service partners directly involved in coordination (under confidentiality agreements)",
  "We NEVER sell participant data to third parties or use it for marketing purposes unrelated to agricultural coordination.",
];

const yourRightsList = [
  "Access your information",
  "Request corrections to inaccurate information",
  "Request deletion of your information (subject to legal retention requirements)",
  "Withdraw from coordination services at any time",
];

const List = ({ items }) => (
  <ul className="list-disc list-inside text-gray-500 text-xs md:text-sm my-2 font-inter">
    {items.map((item, index) => (
      <li key={index}>{item}</li>
    ))}
  </ul>
);

const Section = ({ title, children }) => (
  <section className="mt-4">
    <h2 className="font-semibold text-lg md:text-xl">{title}</h2>
    {children}
  </section>
);
const NewSection = ({ title, children }) => (
  <section className="mt-4">
    <h2 className="font-medium text-sm md:text-base lg:text-lg text-[#1C1C18]">
      {title}
    </h2>
    {children}
  </section>
);

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-8 md:py-12">
      <div className="max-w-80 md:max-w-4xl mx-auto">
        <h1 className="font-semibold text-2xl md:text-3xl">Terms of Service</h1>

        <p className="text-gray-500 text-xs md:text-sm font-inter my-3">
          By using HAGROSPHERE services, you agree to these terms. Please read
          them carefully before submitting any enquiries or participating in our
          coordination services.
        </p>

        <Section title="1. Nature of Services">
          <p className="text-gray-500 text-xs md:text-sm my-2 font-inter ">
            HAGROSPHERE provides agricultural coordination services. We are NOT:
          </p>
          <List items={servicesList} />
        </Section>

        <Section title="2. Participant Responsibilities">
          <p className="text-gray-500 text-xs md:text-sm my-2 font-inter">
            All participants must:
          </p>
          <List items={responsibilitiesList} />
        </Section>

        <Section title="3. Verification Process">
          <p className="text-gray-500 text-xs md:text-sm my-2 font-inter">
            All participants undergo verification before service coordination...
          </p>
        </Section>
        <Section title="4. Limitation of Liability">
          <p className="text-gray-500 text-xs md:text-sm my-2 font-inter">
            HAGROSPHERE coordinates agricultural services but cannot be held
            liable for:
          </p>
          <List items={limitationList} />
        </Section>
        <Section title="5. Dispute Resolution">
          <p className="text-gray-500 text-xs md:text-sm my-2 font-inter">
            While we provide coordination support, participants are responsible
            for resolving disputes in their own relationships. We facilitate
            communication but are not arbitrators or legal representatives.
          </p>
        </Section>

        <h1 className="font-semibold text-2xl md:text-3xl mt-8 md:mt-10 mb-6 md:mb-8">
          Privacy Policy
        </h1>

        <Section title="Information We Collect">
          <p className="text-gray-500 text-sm md:text-base my-2 font-inter">
            We collect information necessary for coordination:
          </p>
          <List items={infoList} />
        </Section>
        <Section title="How We Use Information">
          <p className="text-gray-500 text-sm md:text-base my-2 font-inter">
            Your information is used exclusively for:
          </p>
          <List items={howWeUseList} />
        </Section>
        <Section title="Information Sharing">
          <p className="text-gray-500 text-sm md:text-base my-2 font-inter">
            We share participant information only:
          </p>
          <List items={shareInfoList} />
        </Section>
        <Section title="Data Security">
          <p className="text-gray-500 text-sm md:text-base my-2 font-inter">
            Participant information is stored securely with access limited to
            verified personnel. We implement industry-standard security measures
            to protect your data.
          </p>
        </Section>
        <Section title="Your Rights">
          <p className="text-gray-500 text-sm md:text-base my-2 font-inter">
            You have the right to:
          </p>
          <List items={yourRightsList} />
        </Section>
        <div className="mt-10 bg-[#F7F5F1] py-4 rounded-2xl">
          <div className="md-[94%] md:w-[90%] mx-auto">
            <h1 className="font-semibold text-xl md:text-2xl lg:text-3xl mb-6 ">
              Critical Disclaimers
            </h1>
            <NewSection title="NOT AN INVESTMENT PLATFORM">
              <p className="text-[#6B7280] text-xs md:text-sm lg:text-base my-2 font-inter">
                HAGROSPHERE does not offer investment opportunities, guaranteed
                returns, or financial products. We coordinate agricultural
                services only.
              </p>
            </NewSection>
            <NewSection title="OUTCOMES MAY VARY">
              <p className="text-[#6B7280] text-xs md:text-sm lg:text-base my-2 font-inter">
                Agriculture carries inherent risks. We cannot guarantee crop
                yields, market prices, equipment availability, worker
                performance, or any business outcomes.
              </p>
            </NewSection>
            <NewSection title="AGRICULTURAL RISKS">
              <p className="text-[#6B7280] text-xs md:text-sm lg:text-base my-2 font-inter">
                Participants acknowledge that farming involves risks including
                weather, pests, disease, market fluctuations, operational
                challenges, and other factors beyond our control.
              </p>
            </NewSection>
            <NewSection title="COORDINATION ONLY">
              <p className="text-[#6B7280] text-xs md:text-sm lg:text-base my-2 font-inter">
                We coordinate connections and services. The actual relationships
                (employment, sales, equipment sharing) are between participants
                directly. We are facilitators, not principals in these
                transactions.
              </p>
            </NewSection>
          </div>
        </div>
        <div className="bg-[#F8F9FA] rounded-3xl py-4 mt-7">
          <div className="w-[94%] md:w-[90%] mx-auto">
            <h2 className="font-medium text-base md:text-lg lg:text-xl">
              Legal Queries
            </h2>
            <p className="my-3 text-[#6B7280] text-xs md:text-sm font-inter">
              For questions about these terms, privacy practices, or legal
              matters, contact us at:
            </p>
            <p className="text-[#1C1C18] text-xs md:text-sm font-inter">
              legal@hagrosphere.ng
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
