import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { IoIosArrowRoundBack } from "react-icons/io";
import { ContentBlock, HeroSection, LearnCard } from "../components";
import { useArticleDetail } from "../features/articles/hooks/useArticles";
import { useArticles } from "../features/articles/hooks/useArticles";

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

const LearnDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // id could be a slug or id — try slug first
  const { data: articleData, isLoading, isError } = useArticleDetail(id);
  const article = articleData?.data ?? articleData;

  // Related articles
  const { articles: related } = useArticles();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [id]);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="border-t-4 border-b-4 rounded-full animate-spin h-12 w-12 border-bg-btn-primary" />
      </div>
    );
  }

  if (isError || !article) {
    return (
      <div className="w-full flex flex-col items-center justify-center h-64 gap-4">
        <h2 className="text-lg font-semibold text-[#1A1A17]">Article not found</h2>
        <button
          onClick={() => navigate("/learn")}
          className="text-[#2E6B4F] font-medium text-sm cursor-pointer"
        >
          ← Back to articles
        </button>
      </div>
    );
  }

  // Handle content — could be a string (HTML or plain text) or array of blocks
  const renderContent = () => {
    if (!article.content) return null;
    if (Array.isArray(article.content)) {
      return article.content.map((block, i) => <ContentBlock key={i} block={block} />);
    }
    
    // Check if content is HTML (from TipTap) or plain text
    const isHTML = article.content.trim().startsWith('<');
    
    if (isHTML) {
      // HTML from TipTap editor
      return (
        <div 
          className="article-content text-[#4A4A42] font-inter"
          dangerouslySetInnerHTML={{ __html: article.content }}
        />
      );
    } else {
      // Plain text - convert line breaks to paragraphs
      const paragraphs = article.content.split('\n').filter(p => p.trim());
      return (
        <div className="article-content text-[#4A4A42] font-inter">
          {paragraphs.map((para, i) => {
            // Check if it's a heading
            if (para.startsWith('# ')) {
              return <h1 key={i}>{para.substring(2)}</h1>;
            } else if (para.startsWith('## ')) {
              return <h2 key={i}>{para.substring(3)}</h2>;
            } else if (para.startsWith('### ')) {
              return <h3 key={i}>{para.substring(4)}</h3>;
            }
            return <p key={i}>{para}</p>;
          })}
        </div>
      );
    }
  };

  const relatedArticles = (article.related ?? related)
    .filter((r) => r.id !== article.id)
    .slice(0, 3);

  return (
    <div className="w-full">
      <ReadingProgressBar />

      <HeroSection
        subtitle="Knowledge Base"
        title={article.title}
        date={article.publishedAt ? new Date(article.publishedAt).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" }) : ""}
        time={article.readTime ? `${article.readTime} min read` : ""}
        author={article.author ?? "Hagrosphere Team"}
      />

      {article.coverImage && (
        <div className="w-full h-[40vh] lg:h-[75vh]">
          <img src={article.coverImage} alt={article.title} className="w-full h-full object-cover" />
        </div>
      )}

      <div className="w-[98%] md:w-[95%] mx-auto py-10">
        <div className="flex items-center border-b border-b-[#E5DDD0] gap-x-3">
          <div className="flex items-center justify-center w-8 h-8 text-base font-semibold text-white md:text-lg md:h-9 md:w-9 bg-bg-btn-primary">
            {(article.author ?? "H").slice(0, 1)}
          </div>
          <h3 className="text-base font-inter md:text-lg">
            {article.author ?? "Hagrosphere Team"}
          </h3>
        </div>

        <div>
          <div className="w-full px-6 pt-8 mx-auto">
            {renderContent()}
          </div>
        </div>

        {article.tags && article.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-8">
            {article.tags.map((tag) => (
              <span
                key={tag.id}
                className="text-xs bg-[#F0F4F0] text-[#2E6B4F] px-3 py-1 rounded-full font-inter"
              >
                #{tag.name}
              </span>
            ))}
          </div>
        )}

        <div className="w-[96%] mx-auto mt-6 py-4 bg-[#FAF8F4] border border-[#E5DDD0]">
          <div className="w-[95%] mx-auto">
            <p className="text-[#7A7A72] font-inter text-xs leading-5">
              <span className="text-[#1A1A17]">Disclaimer:</span> Agricultural
              outcomes vary by location, soil type, climate conditions, and
              management practices. Always consult local agricultural extension
              officers for region-specific advice. HAGROSPHERE does not
              guarantee crop yields or market prices.
            </p>
          </div>
        </div>
      </div>

      {relatedArticles.length > 0 && (
        <div className="w-full bg-[#FAF8F4] border-t border-t-[#E5DDD0] mt-5 py-14">
          <div className="w-[95%] md:w-[92%] mx-auto">
            <h2 className="text-lg font-semibold md:text-xl lg:text-2xl">Related Articles</h2>
            <div className="grid grid-cols-1 gap-8 mt-9 md:grid-cols-2 lg:grid-cols-3">
              {relatedArticles.map((item) => (
                <LearnCard key={item.id} {...item} />
              ))}
            </div>
          </div>
          <div className="flex items-center justify-center w-full mt-8">
            <button
              className="capitalize text-[#2E6B4F] flex items-center gap-2 font-medium cursor-pointer"
              onClick={() => navigate("/learn")}
            >
              <IoIosArrowRoundBack className="w-6 h-6 md:w-7 md:h-7" />
              <span className="text-sm md:text-base">View all articles</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default LearnDetails;
