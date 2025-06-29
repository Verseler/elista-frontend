import { PageHeader } from "@/components/headers/PageHeader";
import MainLayout from "@/components/layout/MainLayout";
import Container from "@/components/ui/container";
import MainHeader from "@/components/headers/MainHeader";
import { StoreOwnerStatsCards as StatsCards } from "@/components/statsCard/StoreOwnerStatsCards";
import Borrowers from "@/components/borrowers/Borrowers";
import { AddBorrowerForm } from "@/components/forms/AddBorrowerForm";
import { AddTransactionForm } from "@/components/forms/AddTransactionForm";
import { useAuth } from "@/hooks/useAuth";

export default function StoreOwnerDashboardPage() {
  const { user } = useAuth();

  return (
    <MainLayout>
      <MainHeader />
      <Container className="py-8">
        <PageHeader
          title={user?.store?.name || "Store Dashboard"}
          description={
            user?.store?.location ||
            "Manage your borrowers and track transactions"
          }
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
