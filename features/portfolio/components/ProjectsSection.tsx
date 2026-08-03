import { Check, FileText, MoreHorizontal } from "lucide-react";

import { PortfolioCard } from "@/components/ui/PortfolioCard";
import { PortfolioModal } from "@/components/ui/PortfolioModal";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { projects } from "@/features/portfolio/constants";

export function ProjectsSection() {
  return (
    <PortfolioCard className="projects" id="projects">
      <div className="heading">
        <SectionTitle>FEATURED PROJECTS</SectionTitle>
        <PortfolioModal title="Project Portfolio" triggerLabel="View all projects">
          <div className="modal-project-grid">
            {projects.map((project) => (
              <article key={project.name}>
                <h3>{project.name}</h3>
                <p>{project.description}</p>
                <small>{project.technologies}</small>
                <time>
                  {project.year} · {project.category}
                </time>
              </article>
            ))}
          </div>
        </PortfolioModal>
      </div>
      <div className="project-grid">
        {projects.slice(0, 4).map((project) => (
          <article key={project.name}>
            <b>
              <project.icon aria-hidden="true" />
            </b>
            <h4>{project.name}</h4>
            <em>{project.category}</em>
            <p>{project.description}</p>
            <small>{project.technologies}</small>
            <time>
              <FileText aria-hidden="true" /> {project.year}
            </time>
          </article>
        ))}
        <article className="more">
          <h4>
            <MoreHorizontal aria-hidden="true" /> More Projects
          </h4>
          {projects.slice(4).map((project) => (
            <p key={project.name}>
              <Check aria-hidden="true" /> {project.name} ({project.year})
            </p>
          ))}
          <PortfolioModal title="Project Portfolio" triggerLabel="View all projects">
            <div className="modal-project-grid">
              {projects.map((project) => (
                <article key={project.name}>
                  <h3>{project.name}</h3>
                  <p>{project.description}</p>
                  <small>{project.technologies}</small>
                  <time>
                    {project.year} · {project.category}
                  </time>
                </article>
              ))}
            </div>
          </PortfolioModal>
        </article>
      </div>
    </PortfolioCard>
  );
}
