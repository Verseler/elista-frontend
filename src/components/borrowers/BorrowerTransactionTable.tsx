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
import type { Transaction } from "@/types";

type BorrowerTransactionTableProps = {
  transactions: Transaction[];
  totalOutstanding?: number;
};

export default function BorrowerTransactionTable({
  transactions,
  totalOutstanding = 0,
}: BorrowerTransactionTableProps) {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Date</TableHead>
          <TableHead>Items</TableHead>
          <TableHead>Total Amount</TableHead>
          <TableHead>Due Date</TableHead>
          <TableHead className="text-right">Remaining Balance</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {transactions.map((transaction) => {
          const transactionItems = transaction?.items || [];
          const remainingBalance = transaction.outstanding_balance || 0;

          return (
            <TableRow className="h-14" key={transaction.id}>
              <TableCell className="font-medium">
                {formatDate(transaction.created_at)}
              </TableCell>
              <TableCell>
                {transactionItems
                  .map((item) => `${item.name} (x${item.quantity})`)
                  .join(", ")}
              </TableCell>
              <TableCell>{formatCurrency(transaction.total_price)}</TableCell>
              <TableCell>{formatDate(transaction.due_date)}</TableCell>
              <TableCell className="text-right">
                {formatCurrency(remainingBalance)}
              </TableCell>
            </TableRow>
          );
        })}
      </TableBody>
      <TableFooter>
        <TableRow className="h-10">
          <TableCell colSpan={4}>Total</TableCell>
          <TableCell className="text-right text-lg">
            {formatCurrency(totalOutstanding)}
          </TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  );
}
