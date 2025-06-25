import { Card, CardContent } from "@/components/ui/card";
import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

type StatsVariant = "default" | "destructive" | "success";

type StatsCardProps = {
  title: string;
  value: string | number | undefined;
  withPesoSign?: boolean;
  icon: LucideIcon;
  className?: string;
  variant?: StatsVariant;
};

export function StatsCard({
  title,
  value,
  withPesoSign = false,
  icon: Icon,
  className,
  variant = "default",
}: StatsCardProps) {
  const valueVariantStyle: Record<StatsVariant, string> = {
    default: "text-gray-900",
    destructive: "text-red-700",
    success: "text-green-700",
  };

  return (
    <Card
      className={cn(
        "relative overflow-hidden border-1 shadow-xs border-primary-100 bg-gradient-to-br from-white to-blue-50/30",
        className
      )}
    >
      <CardContent className="py-4 px-6">
        <div className="flex items-center justify-between">
          <div className="space-y-2">
            <p className="text-sm font-medium text-gray-600">{title}</p>
            <p className={cn("text-3xl font-bold", valueVariantStyle[variant])}>
              {withPesoSign && "₱"}
              {value ?? 0}
            </p>
          </div>
          <div className="flex-shrink-0">
            <div className="size-12 bg-primary-100 rounded-xl flex items-center justify-center">
              <Icon className="size-6 text-primary-600" />
            </div>
          </div>
        </div>
        <div className="absolute top-0 right-0 size-20 bg-primary-500/5 rounded-full -translate-y-10 translate-x-10" />
      </CardContent>
    </Card>
  );
}
