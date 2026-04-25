import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { IoIosArrowRoundBack } from "react-icons/io";
import { ContentBlock, HeroSection, LearnCard } from "../components";
import { articleData } from "../components/DummyData";

// ── Reading Progress Bar ──────────────────────────────────────
function ReadingProgressBar() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const el = document.documentElement;
      const scrolled = el.scrollTop || document.body.scrollTop;
      const total = el.scrollHeight - el.clientHeight;
      setProgress(total > 0 ? (scrolled / total) * 100 : 0);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 z-9999 w-full h-0.5 bg-transparent">
      <div
        className="h-full bg-bg-btn transition-[width] duration-100 ease-linear"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}

// ── LearnDetails ──────────────────────────────────────────────
const LearnDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const article = articleData.find((item) => item.id === Number(id));

  // Reset scroll to top on article change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [id]);

  if (!article) {
    return (
      <div className="w-full">
        <h2>Article not found</h2>
      </div>
    );
  }

  return (
    <div className="w-full">
      {/* Progress bar sits above everything including the navbar */}
      <ReadingProgressBar />

      <HeroSection
        subtitle="Knowledge Base"
        title={`${article?.title}`}
        date={`${article.date}`}
        time={`${article.readTime}`}
        author={`${article.author}`}
      />
      <div className="w-full h-[40vh] lg:h-[75vh]">
        <img src={article.image} alt="" className="w-full h-full cover-fill" />
      </div>
      <div className="w-[98%] md:w-[95%] mx-auto py-10">
        <div className="flex items-center border-b border-b-[#E5DDD0] gap-x-3">
          <div className="flex items-center justify-center w-8 h-8 text-base font-semibold text-white md:text-lg md:h-9 md:w-9 bg-bg-btn-primary">
            {article?.author?.slice(0, 1)}
          </div>
          <h3 className="text-base font-inter md:text-lg">{article?.author}</h3>
        </div>
        <div>
          <div className="w-full px-6 pt-8 mx-auto">
            {article.content.map((block, i) => (
              <ContentBlock key={i} block={block} />
            ))}
          </div>
        </div>
        <div className="w-[96%] mx-auto mt-6 py-4 bg-[#FAF8F4] border border-[#E5DDD0]">
          <div className="w-[95%] mx-auto">
            <p className="text-[#7A7A72] font-inter text-xs leading-5">
              <span className="text-[#1A1A17]">Disclaimer:</span> Agricultural
              outcomes vary by location, soil type, climate conditions, and
              management practices. This guide provides general recommendations
              for southern Nigeria. Always consult local agricultural extension
              officers for region-specific advice. HAGROSPHERE does not
              guarantee crop yields or market prices.
            </p>
          </div>
        </div>
      </div>
      <div className="w-full bg-[#FAF8F4] border-t border-t-[#E5DDD0] mt-5 py-14">
        <div className="w-[95%] md:w-[92%] mx-auto">
          <h2 className="text-lg font-semibold md:text-xl lg:text-2xl">
            Related Articles
          </h2>
          <div className="grid grid-cols-1 gap-8 mt-9 md:grid-cols-2 lg:grid-cols-3">
            {articleData.slice(0, 3).map((item) => (
              <LearnCard key={item.id} {...item} />
            ))}
          </div>
        </div>
        <div className="flex items-center justify-center w-full mt-8">
          <button
            className="capitalize text-[#2E6B4F] flex items-center gap-2 font-medium cursor-pointer"
            onClick={() => navigate(-1)}
          >
            <IoIosArrowRoundBack className="w-6 h-6 md:w-7 md:h-7" />
            <span className="text-sm md:text-base">View all articles</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default LearnDetails;
