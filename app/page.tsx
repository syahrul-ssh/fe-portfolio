import { ArrowRight, Mail, Terminal } from "lucide-react";

import { Button } from "@/components/ui/button";
import { AboutAndStack } from "@/features/portfolio/components/AboutAndStack";
import { BottomSections } from "@/features/portfolio/components/BottomSections";
import { ExperienceSection } from "@/features/portfolio/components/ExperienceSection";
import { Hero } from "@/features/portfolio/components/Hero";
import { Metrics } from "@/features/portfolio/components/Metrics";
import { ProjectsSection } from "@/features/portfolio/components/ProjectsSection";
import { Sidebar } from "@/features/portfolio/components/Sidebar";

export default function HomePage() {
  return (
    <div className="app-shell">
      <Sidebar />
      <main>
        <Hero />
        <Metrics />
        <div className="two-column experience-layout">
          <AboutAndStack />
          <ExperienceSection />
        </div>
        <ProjectsSection />
        <BottomSections />
        <footer id="contact">
          <b>
            <Terminal aria-hidden="true" />
          </b>
          <div>
            <strong>Let&apos;s build something amazing together!</strong>
            <p>I&apos;m currently open to new opportunities and interesting projects.</p>
          </div>
          <Button className="contact-button" render={<a href="mailto:syahrul.safarudinh9@gmail.com" />} size="sm">
            <Mail aria-hidden="true" /> Get In Touch <ArrowRight aria-hidden="true" />
          </Button>
        </footer>
      </main>
      <div className="status">
        <span>
          <span className="ready-dot" /> Ready
        </span>
        <span>Ln 1, Col 1　 Spaces: 2　 UTF-8　 LF　 TypeScript</span>
      </div>
    </div>
  );
}
