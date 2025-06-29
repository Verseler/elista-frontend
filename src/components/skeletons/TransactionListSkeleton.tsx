import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export default function TransactionListSkeleton() {
  return (
    <Card className="border-0 p-0">
      <CardHeader className="h-16 place-content-center text-2xl">
        <CardTitle className="flex items-center gap-2">
          <div className="size-4" />
          <Skeleton className="h-10 mt-6 w-96" />
        </CardTitle>
      </CardHeader>
      <CardContent className="p-6 pt-0">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">
                <Skeleton className="h-7 w-full" />
              </TableHead>
              <TableHead>
                <Skeleton className="h-7 w-full" />
              </TableHead>
              <TableHead>
                <Skeleton className="h-7 w-full" />
              </TableHead>
              <TableHead>
                <Skeleton className="h-7 w-full" />
              </TableHead>
              <TableHead className="text-right">
                <Skeleton className="h-7 w-full" />
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {Array.from({ length: 2 }).map((_, index) => {
              return (
                <TableRow className="h-14" key={index}>
                  <TableCell className="font-medium">
                    <Skeleton className="h-7 w-full" />
                  </TableCell>
                  <TableCell>
                    <Skeleton className="h-7 w-full" />
                  </TableCell>
                  <TableCell>
                    <Skeleton className="h-7 w-full" />
                  </TableCell>
                  <TableCell>
                    <Skeleton className="h-7 w-full" />
                  </TableCell>
                  <TableCell className="text-right">
                    <Skeleton className="h-7 w-full" />
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
          <TableFooter className="border-neutral-300">
            <TableRow className="h-10">
              <TableCell className="text-right text-lg bg-white"></TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </CardContent>
    </Card>
  );
}
