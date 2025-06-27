import { cn } from "@/lib/utils";
import type React from "react";

type FooterProps = {
  className?: string;
  children: React.ReactNode;
};

export default function Footer({ children, className }: FooterProps) {
  return (
    <footer className={cn("bg-gray-900 text-white py-12 px-4", className)}>
      {children}
    </footer>
  );
}
