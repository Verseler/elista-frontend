import { cn } from "@/lib/utils";
import type React from "react";

type H2Props = {
  className?: string;
  children: React.ReactNode;
};

export default function H2({ children, className }: H2Props) {
  return (
    <h1 className={cn("text-4xl font-bold text-gray-900 mb-4", className)}>
      {children}
    </h1>
  );
}
