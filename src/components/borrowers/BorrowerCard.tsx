import { Phone, Calendar } from "lucide-react";
import { formatCurrency, formatDate, getNameInitial } from "@/lib/utils";
import type { BorrowerWithStats } from "@/types/index";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import OverdueAlert from "@/components/ui/overdue-alert";
import {
  BorrowerCardDetail,
  BorrowerCardDetailLabel,
  BorrowerCardDetails,
  BorrowerCardDetailValue,
} from "@/components/borrowers/BorrowerCardDetail";

type BorrowerCardProps = {
  borrower: BorrowerWithStats;
};

export function BorrowerCard({ borrower }: BorrowerCardProps) {
  return (
    <Card className="group hover:shadow-lg py-2 bg-primary-600 cursor-pointer transition-shadow duration-200 border-0">
      <CardContent className="p-6">
        <div className="flex items-center space-x-4">
          <Avatar className="size-12 ring-2 ring-primary-100">
            <AvatarFallback className="bg-primary-100 text-primary-700 font-semibold">
              {getNameInitial(borrower.name)}
            </AvatarFallback>
          </Avatar>
          <div>
            <h3 className="font-semibold text-white">{borrower.name}</h3>

            <p className="text-sm text-primary-100 flex items-center gap-1 mt-1">
              <Phone className="h-3 w-3" />
              {borrower?.phone ?? "N/A"}
            </p>
          </div>
        </div>

        <BorrowerCardDetails>
          <BorrowerCardDetail>
            <BorrowerCardDetailLabel>
              Outstanding Balance
            </BorrowerCardDetailLabel>
            <BorrowerCardDetailValue>
              <Badge
                variant={
                  borrower.outstanding_balance > 0 ? "destructive" : "secondary"
                }
              >
                {formatCurrency(borrower.outstanding_balance)}
              </Badge>
            </BorrowerCardDetailValue>
          </BorrowerCardDetail>

          <BorrowerCardDetail>
            <BorrowerCardDetailLabel>Total Paid</BorrowerCardDetailLabel>
            <BorrowerCardDetailValue className="text-green-200">
              {formatCurrency(borrower.total_paid)}
            </BorrowerCardDetailValue>
          </BorrowerCardDetail>

          <BorrowerCardDetail>
            <BorrowerCardDetailLabel>Transactions</BorrowerCardDetailLabel>
            <BorrowerCardDetailValue>
              {borrower.transaction_count}
            </BorrowerCardDetailValue>
          </BorrowerCardDetail>

          {borrower.overdue_count > 0 && (
            <OverdueAlert count={borrower.overdue_count} />
          )}

          <Separator />

          {borrower.last_transaction_date && (
            <BorrowerCardDetail>
              <BorrowerCardDetailLabel className="text-xs">
                Last Transaction
              </BorrowerCardDetailLabel>
              <BorrowerCardDetailValue className="flex items-center gap-1 text-xs font-normal">
                <Calendar className="h-3 w-3" />
                {formatDate(borrower.last_transaction_date)}
              </BorrowerCardDetailValue>
            </BorrowerCardDetail>
          )}
        </BorrowerCardDetails>
      </CardContent>
    </Card>
  );
}
