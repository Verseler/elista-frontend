import {
  AlertTriangleIcon,
  ClockIcon,
  DollarSignIcon,
  ReceiptIcon,
} from "lucide-react";
import { StatsCard } from "@/components/statsCard/StatsCard";
import StatsCardSkeleton from "@/components/skeletons/StatsCardSkeleton";
import StatsCardsContainer from "@/components/statsCard/StatsCardsContainer";
import { useGetBorrower } from "@/api/borrower/useGetBorrower";
import { useAuth } from "@/hooks/useAuth";

export function BorrowerStatsCards() {
  const { user } = useAuth();
  const { data, isLoading } = useGetBorrower(user?.id.toString() || "");

  if (isLoading) {
    return (
      <StatsCardsContainer>
        {Array.from({ length: 4 }).map((_, index) => (
          <StatsCardSkeleton key={index} />
        ))}
      </StatsCardsContainer>
    );
  }

  return (
    <StatsCardsContainer>
      <StatsCard
        title="Outstanding Balance"
        value={data?.outstanding_balance}
        isCurrency
        variant="destructive"
        icon={AlertTriangleIcon}
      />
      <StatsCard
        title="Total Paid"
        value={data?.total_paid}
        isCurrency
        variant="success"
        icon={DollarSignIcon}
      />
      <StatsCard
        title="Overdue"
        value={data?.overdue_transactions?.length}
        variant="destructive"
        icon={ClockIcon}
      />
      <StatsCard
        title="Total Transactions"
        value={data?.transactions?.length}
        icon={ReceiptIcon}
      />
    </StatsCardsContainer>
  );
}
