import { PortfolioCard } from "@/components/ui/PortfolioCard";
import { PortfolioModal } from "@/components/ui/PortfolioModal";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { experiences } from "@/features/portfolio/constants";

export function ExperienceSection() {
  return (
    <PortfolioCard id="experience">
      <div className="heading">
        <SectionTitle>EXPERIENCE</SectionTitle>
        <PortfolioModal title="Work Experience" triggerLabel="View all experience">
          <div className="timeline modal-timeline">
            {experiences.map((experience) => (
              <article key={experience.role}>
                <i />
                <div>
                  <h4>
                    {experience.role}
                    <time>{experience.period}</time>
                  </h4>
                  <p>{experience.company}</p>
                  <ul>
                    {experience.highlights.map((highlight) => (
                      <li key={highlight}>{highlight}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </PortfolioModal>
      </div>
      <div className="timeline">
        {experiences.slice(0, 5).map((experience) => (
          <article key={experience.role}>
            <i />
            <div>
              <h4>
                {experience.role}
                <time>{experience.period}</time>
              </h4>
              <p>{experience.company}</p>
              <ul className="list-disc marker:text-green-600 pl-5">
                {experience.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </PortfolioCard>
  );
}
