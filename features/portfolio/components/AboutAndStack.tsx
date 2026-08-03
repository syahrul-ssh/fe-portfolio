import { BookOpen, GraduationCap, MapPin } from "lucide-react";

import { PortfolioCard } from "@/components/ui/PortfolioCard";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { techStacks } from "@/features/portfolio/constants";

export function AboutAndStack() {
  return (
    <div className="right-column">
      <PortfolioCard id="about">
        <SectionTitle>ABOUT ME</SectionTitle>
        <p className="body-text">
          Experienced software engineer specializing in backend development. Over the past 3+ years,
          I've contributed to enterprise applications, ERP systems, CMS platforms, healthcare applications, and IoT solutions. 
          My experience includes designing REST APIs, implementing authentication and authorization systems (JWT, RBAC, CASL), 
          optimizing database performance, and integrating third-party services.
 
          Currently expanding my expertise in microservices, distributed systems, DevOps, Kubernetes, and cloud-native architectures.
        </p>
        <dl>
          <dt>
            <MapPin aria-hidden="true" />
            Location
          </dt>
          <dd>Bandung, Indonesia</dd>
          <dt>
            <GraduationCap aria-hidden="true" />
            Education
          </dt>
          <dd>
            Bachelor Degree in Informatic Engineering
            <br />
            Universitas Islam Negeri Sunan Gunung Djati
            <br />
            GPA 3.47 / 4.0 · Aug 2017 – Feb 2024
          </dd>
          <dt>
            <BookOpen aria-hidden="true" />
            Languages
          </dt>
          <dd>Indonesian (Native), English (Professional)</dd>
        </dl>
      </PortfolioCard>
      <PortfolioCard id="skills">
        <SectionTitle>TECH STACK</SectionTitle>
        {techStacks.map((stack) => (
          <div className="stack" key={stack.name}>
            <b>{stack.name}</b>
            <p>
              {stack.items.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </p>
          </div>
        ))}
      </PortfolioCard>
    </div>
  );
}
