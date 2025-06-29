import { Link } from "react-router";
import { PageHeader } from "@/components/headers/PageHeader";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import MainLayout from "@/components/layout/MainLayout";
import MainHeader from "@/components/headers/MainHeader";
import Container from "@/components/ui/container";
import TransactionListSkeleton from "@/components/skeletons/TransactionListSkeleton";
import BorrowerDetailCardSkeleton from '@/components/skeletons/BorrowerDetailCardSkeleton';

export default function BorrowerDetailPageSkeleton() {
  return (
    <MainLayout>
      <MainHeader />

      <Container className="py-8">
        <PageHeader
          title={""}
          description="Borrower profile and transaction history"
        >
          <Button variant="outline" className="bg-white" asChild>
            <Link to="/store-owner">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Dashboard
            </Link>
          </Button>
        </PageHeader>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1 space-y-6">
            <BorrowerDetailCardSkeleton />
          </div>

          <div className="lg:col-span-3">
            <TransactionListSkeleton />
          </div>
        </div>
      </Container>
    </MainLayout>
  );
}
