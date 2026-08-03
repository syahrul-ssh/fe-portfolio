"use client";

import { useState } from "react";

import { Menu, Terminal, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { navigationItems, navigationSectionIds } from "@/features/portfolio/constants";
import { useActiveSection } from "@/features/portfolio/hooks/useActiveSection";

export function Sidebar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { activeSectionId, setActiveSectionId } = useActiveSection({
    sectionIds: navigationSectionIds,
  });

  return (
    <aside className="sidebar">
      <div className="logo">
        <Terminal aria-hidden="true" />
        <span>syahrul.dev</span>
      </div>
      <Button
        aria-controls="portfolio-navigation"
        aria-expanded={isMenuOpen}
        aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
        className="sidebar-toggle"
        onClick={() => setIsMenuOpen((isOpen) => !isOpen)}
        size="icon"
        variant="ghost"
      >
        {isMenuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
      </Button>
      <nav className={isMenuOpen ? "open" : ""} id="portfolio-navigation">
        {navigationItems.map(({ href, icon: Icon, label }) => (
          <a
            aria-current={activeSectionId === href.slice(1) ? "page" : undefined}
            className={activeSectionId === href.slice(1) ? "selected" : ""}
            href={href}
            key={label}
            onClick={() => {
              setActiveSectionId(href.slice(1));
              setIsMenuOpen(false);
            }}
          >
            <Icon aria-hidden="true" />
            {label}
          </a>
        ))}
      </nav>
    </aside>
  );
}
