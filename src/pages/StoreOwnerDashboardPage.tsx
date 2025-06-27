import { PageHeader } from "@/components/headers/PageHeader";
import MainLayout from "@/components/layout/MainLayout";
import Container from "@/components/ui/container";
import MainHeader from "@/components/headers/MainHeader";
import { StatsCards } from "@/components/statsCard/StatsCards";
import Borrowers from "@/components/borrowers/Borrowers";
import { AddBorrowerForm } from "@/components/forms/AddBorrowerForm";
import { AddTransactionForm } from "@/components/forms/AddTransactionForm";

export default function StoreOwnerDashboardPage() {
  return (
    <MainLayout>
      <MainHeader />
      <Container className="py-8">
        <PageHeader
          title="Store Dashboard"
          description="Manage your borrowers and track transactions"
        >
          <AddBorrowerForm />
          <AddTransactionForm />
        </PageHeader>

        <StatsCards />
        <Borrowers />
      </Container>
    </MainLayout>
  );
}
