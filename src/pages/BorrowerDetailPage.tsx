import { Link, useParams } from "react-router";
import { PageHeader } from "@/components/headers/PageHeader";
import { Button } from "@/components/ui/button";
import { TransactionList } from "@/components/transactions/TransactionList";
import { ArrowLeft } from "lucide-react";
import type { Transaction } from "@/types";
import { useGetBorrower } from "@/api/borrower/useGetBorrower";
import MainLayout from "@/components/layout/MainLayout";
import MainHeader from "@/components/headers/MainHeader";
import Container from "@/components/ui/container";
import BorrowerDetailCard from "@/components/borrowers/BorrowerInfoCard";
import { PaymentForm } from "@/components/forms/PaymentForm";
import BorrowerDetailPageSkeleton from "@/components/skeletons/BorrowerDetailPageSkeleton";
import BorrowerPayments from "@/components/borrowers/BorrowerPayments";

export default function BorrowerDetailPage() {
  const { id } = useParams<{ id: string }>();

  const { data: borrower, isLoading } = useGetBorrower(id || "");
  const transactions: Transaction[] = borrower?.transactions || [];
  const borrowerBalance = borrower?.outstanding_balance ?? 0;

  if (isLoading) {
    return <BorrowerDetailPageSkeleton />;
  }

  return (
    <MainLayout>
      <MainHeader />

      <Container className="py-8">
        <PageHeader
          title={borrower?.name || ""}
          description="Borrower profile and transaction history"
        >
          <Button variant="outline" className="bg-white" asChild>
            <Link to="/store-owner">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Dashboard
            </Link>
          </Button>

          {borrower && (
            <PaymentForm
              totalOutstanding={borrowerBalance}
              hasBalance={borrowerBalance > 0}
              borrowerId={borrower.id}
            />
          )}
        </PageHeader>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1 space-y-6">
            <BorrowerDetailCard
              borrower={borrower}
              transactionsLength={transactions.length}
            />
          </div>

          <div className="lg:col-span-3 space-y-8">
            <TransactionList
              transactions={transactions}
              totalOutstanding={borrowerBalance}
            />
            {borrower?.payments && borrower?.payments.length > 0 && (
              <BorrowerPayments payments={borrower?.payments} />
            )}
          </div>
        </div>
      </Container>
    </MainLayout>
  );
}
