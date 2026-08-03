import type { ReactNode } from "react";

import { CardContent } from "@/components/ui/CardContent";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

type PortfolioCardProps = {
  children: ReactNode;
  className?: string;
  id?: string;
};

export function PortfolioCard({ children, className = "", id }: PortfolioCardProps) {
  return (
    <Card className={cn("card gap-0 p-0", className)} id={id}>
      <CardContent className="portfolio-card-content p-0">{children}</CardContent>
    </Card>
  );
}
