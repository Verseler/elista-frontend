import { cn } from "@/lib/utils";
import type React from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
};

export function BorrowerCardDetails({ children, className }: Props) {
  return <div className={cn("space-y-3 mt-4", className)}>{children}</div>;
}

export function BorrowerCardDetail({ children, className }: Props) {
  return (
    <div className={cn("flex justify-between items-center", className)}>
      {children}
    </div>
  );
}

export function BorrowerCardDetailLabel({ children, className }: Props) {
  return (
    <span className={cn("text-sm text-primary-100", className)}>
      {children}
    </span>
  );
}

export function BorrowerCardDetailValue({ children, className }: Props) {
  return (
    <span className={cn("text-sm font-medium  text-white", className)}>
      {children}
    </span>
  );
}
