const IntroBlock = ({ text }) => (
  <p className="text-sm md:text-base lg:text-lg leading-[1.7]  font-inter text-[#4A4A42] mb-4">
    {text}
  </p>
);

const HeadingBlock = ({ text }) => (
  <h2 className=" text-xl md:text-2xl lg:text-3xl font-bold  mt-8 mb-3 leading-[1.3]">
    {text}
  </h2>
);

const SubheadingBlock = ({ text }) => (
  <h3 className="text-sm md:text-base font-semibold uppercase tracking-[0.12em] text-[#1A1A17] mt-8 mb-2">
    {text}
  </h3>
);

const ParagraphBlock = ({ text }) => (
  <p className="text-sm md:text-base leading-[1.7] font-inter text-[#4A4A42] mb-5">
    {text}
  </p>
);

const QuoteBlock = ({ text, author }) => (
  <blockquote className="border-l-4 border-[#B07D2A] bg-[#FAF8F4]  px-7 py-6 my-10">
    <p className=" text-base md:text-lg lg:text-xl  leading-[1.7] text-[#1A1A17] mb-3">
      "{text}"
    </p>

    {author && <p className="text-sm font-medium text-[#4A4A42]">— {author}</p>}
  </blockquote>
);

const ListBlock = ({ items }) => (
  <ul className="mb-6 space-y-2 bg-[#E5DDD0] px-3  py-4">
    {items.map((item, i) => (
      <li
        key={i}
        className="relative font-inter pl-4 text-xs md:text-sm lg:text-base leading-[1.8] text-[#4A4A42]"
      >
        <span className="absolute left-0 top-[0.4em] text-[10px] text-[#B07D2A]">
          ●
        </span>

        {item}
      </li>
    ))}
  </ul>
);

const TipBlock = ({ title, text }) => (
  <div className="my-8 rounded-xl border border-[#E5DDD0] bg-[#E5DDD0]/10 px-4 md:px-6 py-4 md:py-5">
    <p className="text-xs md:text-sm font-semibold uppercase tracking-widest text-[color:var(--warning)] mb-2">
      ✦ {title}
    </p>

    <p className="text-sm md:text-base leading-[1.8] text-[#4A4A42] lg:text-lg">
      {text}
    </p>
  </div>
);

const ContentBlock = ({ block }) => {
  switch (block.type) {
    case "intro":
      return <IntroBlock text={block.text} />;

    case "heading":
      return <HeadingBlock text={block.text} />;

    case "subheading":
      return <SubheadingBlock text={block.text} />;

    case "paragraph":
      return <ParagraphBlock text={block.text} />;

    case "quote":
      return <QuoteBlock text={block.text} author={block.author} />;

    case "list":
      return <ListBlock items={block.items} />;

    case "tip":
      return <TipBlock title={block.title} text={block.text} />;

    default:
      return null;
  }
};

export default ContentBlock;
