import type { Transaction } from "@/types";
import MainLayout from "@/components/layout/MainLayout";
import MainHeader from "@/components/headers/MainHeader";
import Container from "@/components/ui/container";
import { PageHeader } from "@/components/headers/PageHeader";
import { BorrowerStatsCards as StatsCards } from "@/components/statsCard/BorrowerStatsCards";
import { TransactionList } from "@/components/transactions/TransactionList";
import { useAuth } from "@/hooks/useAuth";
import { useGetBorrower } from "@/api/borrower/useGetBorrower";
import { formatCurrency } from "@/lib/utils";
import { AlertTriangleIcon } from "lucide-react";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import BorrowerPayments from "@/components/borrowers/BorrowerPayments";

export default function BorrowerDashboardPage() {
  const { user } = useAuth();

  const { data: borrower } = useGetBorrower(user?.id.toString() || "");
  const transactions: Transaction[] = borrower?.transactions || [];
  const totalOutstanding = borrower?.outstanding_balance ?? 0;
  const overdueTransactionsLength = borrower?.overdue_transactions?.length;

  return (
    <MainLayout>
      <MainHeader />
      <Container className="py-8">
        <PageHeader
          title="My Account"
          description="View your transactions and outstanding balance"
        />

        <StatsCards />

        {!!totalOutstanding && totalOutstanding > 0 && (
          <Alert variant="destructive" className="my-4">
            <AlertTriangleIcon />
            <AlertTitle>Outstanding Balance!</AlertTitle>
            <AlertDescription>
              You have {formatCurrency(totalOutstanding)} in outstanding
              balance.
              {!!overdueTransactionsLength &&
                overdueTransactionsLength > 0 &&
                ` ${overdueTransactionsLength} transaction(s) are overdue.`}
            </AlertDescription>
          </Alert>
        )}

        <div className="space-y-6 md:space-y-10">
          <TransactionList
            transactions={transactions}
            totalOutstanding={totalOutstanding}
          />

          {borrower?.payments && borrower?.payments.length > 0 && (
            <BorrowerPayments payments={borrower?.payments} />
          )}
        </div>
      </Container>
    </MainLayout>
  );
}
