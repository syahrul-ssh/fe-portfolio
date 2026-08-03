"use client";

import { useEffect, useState } from "react";

type UseActiveSectionOptions = {
  sectionIds: string[];
};

export function useActiveSection({ sectionIds }: UseActiveSectionOptions) {
  const [activeSectionId, setActiveSectionId] = useState(sectionIds[0]);

  useEffect(() => {
    const sections = sectionIds
      .map((sectionId) => document.getElementById(sectionId))
      .filter((section): section is HTMLElement => section !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries.find((entry) => entry.isIntersecting);

        if (visibleSection) {
          setActiveSectionId(visibleSection.target.id);
        }
      },
      { rootMargin: "-20% 0px -65% 0px" },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, [sectionIds]);

  return { activeSectionId, setActiveSectionId };
}
