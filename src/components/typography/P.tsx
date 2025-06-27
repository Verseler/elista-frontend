import { cn } from "@/lib/utils";
import type React from "react";

type PProps = {
  className?: string;
  children: React.ReactNode;
};

export default function P({ children, className }: PProps) {
  return (
    <p className={cn("text-xl text-gray-600 mb-8 leading-relaxed", className)}>
      {children}
    </p>
  );
}
