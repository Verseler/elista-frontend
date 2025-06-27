import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { MailIcon, PhoneIcon, CalendarIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { formatCurrency, formatDate } from "@/lib/utils";
import type { BorrowerWithStats } from "@/types";

type BorrowerDetailCardProps = {
  borrower: BorrowerWithStats | undefined;
  transactionsLength: number;
};

export default function BorrowerInfoCard({
  borrower,
  transactionsLength,
}: BorrowerDetailCardProps) {
  if (!borrower) return null;

  return (
    <Card className="border-0 p-0">
      <CardHeader className="bg-gradient-to-r h-16 place-content-center text-2xl from-primary-500 to-primary-600 text-white rounded-t-lg">
        <CardTitle>Borrower Information</CardTitle>
      </CardHeader>
      <CardContent className="p-6 space-y-6">
        <div className="flex flex-col items-center text-center">
          <Avatar className="h-20 w-20 mb-4 ring-4 ring-primary-100">
            <AvatarFallback className="text-lg bg-primary-100 text-primary-700">
              {borrower?.name?.charAt(0)?.toUpperCase()}
            </AvatarFallback>
          </Avatar>
          <h2 className="text-xl font-semibold capitalize text-gray-900">
            {borrower?.name}
          </h2>
        </div>

        <div className="space-y-3">
          {borrower?.email && (
            <div className="flex items-center gap-3">
              <MailIcon className="h-4 w-4 text-gray-400" />
              <span className="text-sm text-gray-600">{borrower?.email}</span>
            </div>
          )}
          {borrower?.phone && (
            <div className="flex items-center gap-3">
              <PhoneIcon className="h-4 w-4 text-gray-400" />
              <span className="text-sm text-gray-600">{borrower?.phone}</span>
            </div>
          )}
          <div className="flex items-center gap-3">
            <CalendarIcon className="h-4 w-4 text-gray-400" />
            <span className="text-sm text-gray-600">
              Member since{" "}
              {borrower?.created_at ? formatDate(borrower.created_at) : "-"}
            </span>
          </div>
        </div>

        <div className="space-y-3 pt-4 border-t">
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-600">Outstanding Balance</span>
            <Badge
              variant={
                borrower.outstanding_balance > 0 ? "destructive" : "secondary"
              }
              className="font-semibold"
            >
              {formatCurrency(borrower.outstanding_balance)}
            </Badge>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-600">Total Paid</span>
            <span className="text-sm font-semibold text-green-600">
              {formatCurrency(borrower.total_paid)}
            </span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-600">Total Transactions</span>
            <span className="text-sm font-semibold">
              {transactionsLength || 0}
            </span>
          </div>
        </div>

        {/* <Button variant="outline" className="w-full">
          <LockIcon className="h-4 w-4 mr-2" />
          Change Password
        </Button> */}
      </CardContent>
    </Card>
  );
}
