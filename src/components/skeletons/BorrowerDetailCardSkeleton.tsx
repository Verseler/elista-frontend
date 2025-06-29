import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export default function BorrowerDetailCardSkeleton() {
  return (
    <Card className="border-0 p-0">
      <CardHeader className="h-16 place-content-center text-2xl  rounded-t-lg">
        <CardTitle>
          <Skeleton className="h-9 mt-4 w-52" />
        </CardTitle>
      </CardHeader>
      <CardContent className="p-6 space-y-6">
        <div className="flex flex-col items-center text-center">
          <Skeleton className="h-[5.5rem] mb-4 aspect-square rounded-full" />
          <Skeleton className="h-6 w-40" />
        </div>

        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <Skeleton className="h-5 w-full" />
          </div>

          <div className="flex items-center gap-3">
            <Skeleton className="h-5 w-full" />
          </div>

          <div className="flex items-center gap-3">
            <Skeleton className="h-5 w-full" />
          </div>
        </div>

        <div className="space-y-3 pt-4 border-t border-neutral-200">
          <div className="flex justify-between items-center gap-2">
            <Skeleton className="h-4 w-24" />
            <Skeleton className="h-4 w-full" />
          </div>
          <div className="flex justify-between items-center gap-2">
            <Skeleton className="h-4 w-24" />
            <Skeleton className="h-4 w-full" />
          </div>
          <div className="flex justify-between items-center gap-2">
            <Skeleton className="h-4 w-24" />
            <Skeleton className="h-4 w-full" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
