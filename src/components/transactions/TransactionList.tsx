"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import BorrowerTransactionTable from "@/components/borrowers/BorrowerTransactionTable";
import { Receipt } from "lucide-react";
import type { Transaction } from "@/types";

interface TransactionListProps {
  transactions: Transaction[];
  totalOutstanding?: number;
}

export function TransactionList({
  transactions,
  totalOutstanding,
}: TransactionListProps) {
  return (
    <>
      <Card className="border-0 p-0">
        <CardHeader className="bg-gradient-to-r h-16 place-content-center text-2xl from-primary-500 to-primary-600 text-white rounded-t-lg">
          <CardTitle className="flex items-center gap-2">
            <Receipt className="size-6" />
            Transaction History
          </CardTitle>
        </CardHeader>
        <CardContent className="p-6 pt-0">
          <BorrowerTransactionTable
            transactions={transactions}
            totalOutstanding={totalOutstanding}
          />
        </CardContent>
      </Card>
    </>
  );
}
