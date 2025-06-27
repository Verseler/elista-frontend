import { cn } from "@/lib/utils";
import type React from "react";

type SectionProps = {
  className?: string;
  children: React.ReactNode;
};

export default function Section({ children, className }: SectionProps) {
  return (
    <section className={cn("py-20 px-4", className)}>
      {children}
    </section>
  );
}
