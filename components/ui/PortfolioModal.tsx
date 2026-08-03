"use client";

import type { ReactNode } from "react";
import { useRef } from "react";

import { X } from "lucide-react";

import { Button } from "@/components/ui/button";

type PortfolioModalProps = {
  children: ReactNode;
  title: string;
  triggerLabel: string;
};

export function PortfolioModal({ children, title, triggerLabel }: PortfolioModalProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  return (
    <>
      <Button
        className="view-all-button"
        onClick={() => dialogRef.current?.showModal()}
        size="sm"
        variant="outline"
      >
        {triggerLabel}
      </Button>
      <dialog
        className="portfolio-modal"
        onClick={(event) => {
          if (event.target === event.currentTarget) dialogRef.current?.close();
        }}
        ref={dialogRef}
      >
        <div className="portfolio-modal-header">
          <h2>{title}</h2>
          <Button
            aria-label={`Close ${title}`}
            onClick={() => dialogRef.current?.close()}
            size="icon-sm"
            variant="ghost"
          >
            <X aria-hidden="true" />
          </Button>
        </div>
        <div className="portfolio-modal-content">{children}</div>
      </dialog>
    </>
  );
}
