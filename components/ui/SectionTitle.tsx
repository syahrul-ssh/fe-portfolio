import type { ReactNode } from "react";

import { Terminal } from "lucide-react";

type SectionTitleProps = {
  children: ReactNode;
};

export function SectionTitle({ children }: SectionTitleProps) {
  return (
    <h2 className="title">
      <Terminal aria-hidden="true" />
      {children}
    </h2>
  );
}
