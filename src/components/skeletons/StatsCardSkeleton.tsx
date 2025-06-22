import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export default function StatsCardSkeleton() {
  return (
    <Card className="relative overflow-hidden border-1 shadow-xs border-primary-100 bg-gradient-to-br from-white to-blue-50/30">
      <CardContent className="py-4 px-6">
        <div className="flex items-center justify-between">
          <div className="space-y-2">
            <Skeleton className="h-6 w-60 rounded" />
            <Skeleton className="h-8 w-40 rounded" />
          </div>
          <Skeleton className="size-12 rounded-xl" />
        </div>
        <Skeleton className="absolute top-0 right-0 size-20 bg-primary-500/5 rounded-full -translate-y-10 translate-x-10" />
      </CardContent>
    </Card>
  );
}
