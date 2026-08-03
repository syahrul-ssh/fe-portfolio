import { BookOpen, Terminal } from "lucide-react";

import { PortfolioCard } from "@/components/ui/PortfolioCard";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { BlogPost } from "@/features/portfolio/components/BlogPost";

export function BottomSections() {
  return (
    <div className="bottom">
      <PortfolioCard id="highlights">
        <div className="heading">
          <SectionTitle>PROFESSIONAL HIGHLIGHTS</SectionTitle>
        </div>
        <BlogPost
          icon={Terminal}
          title="Backend Development & APIs"
          description="Builds APIs, authorization, and backend services for mobile and front-end applications."
          meta="Backend specialization"
        />
        <BlogPost
          icon={BookOpen}
          title="Data & Process Improvement"
          description="Uses data analysis, query optimization, and refactoring to improve system efficiency."
          meta="Fast learner · Problem solver"
        />
      </PortfolioCard>
      {/* <PortfolioCard className="journey" id="journey">
        <SectionTitle>MY JOURNEY</SectionTitle>
        {[
          "2025　 Delivered backend and fullstack systems for Eiger Adventure Land",
          "2024　 Maintained and extended the Erha Buddy application",
          "2023　 Built Morinaga web and parenting platform features",
          "2022　 Started as a backend developer at Rolling Glory",
        ].map((item) => (
          <p key={item}>{item}</p>
        ))}
      </PortfolioCard> */}
    </div>
  );
}
