import { cn } from "@/lib/utils";
import type React from "react";

type H1Props = {
  className?: string;
  children: React.ReactNode;
};

export default function H1({ children, className }: H1Props) {
  return (
    <h1
      className={cn(
        "text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight",
        className
      )}
    >
      {children}
    </h1>
  );
}
