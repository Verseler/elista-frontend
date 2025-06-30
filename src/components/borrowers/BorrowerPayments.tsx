import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { formatCurrency, formatDate } from "@/lib/utils";
import type { Payment } from "@/types";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { CreditCardIcon } from "lucide-react";

type BorrowerPaymentsProps = {
  payments: Payment[];
};

export default function BorrowerPayments({ payments }: BorrowerPaymentsProps) {
  const totalPaid = payments.reduce(
    (total, currentValue) => total + currentValue.amount,
    0
  );

  return (
    <Card className="border-0 p-0">
      <CardHeader className="bg-gradient-to-r h-16 place-content-center text-2xl from-primary-500 to-primary-600 text-white rounded-t-lg">
        <CardTitle className="flex items-center gap-2">
          <CreditCardIcon className="size-6 mt-1" />
          Payment History
        </CardTitle>
      </CardHeader>
      <CardContent className="p-6 pt-0">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Date</TableHead>
              <TableHead>Amount</TableHead>
              <TableHead>Notes</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {payments.map((payment) => {
              return (
                <TableRow className="h-14" key={payment.id}>
                  <TableCell className="font-medium">
                    {formatDate(payment.created_at)}
                  </TableCell>
                  <TableCell>{payment.amount}</TableCell>
                  <TableCell>{payment.notes}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
          <TableFooter>
            <TableRow className="h-10">
              <TableCell colSpan={2}>Total Paid</TableCell>
              <TableCell className="text-right text-lg">
                {formatCurrency(totalPaid)}
              </TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </CardContent>
    </Card>
  );
}
