import {
  DollarSignIcon,
  ShoppingCartIcon,
  TrendingUpIcon,
  UsersIcon,
} from "lucide-react";
import { StatsCard } from "@/components/statsCard/StatsCard";
import { useGetStoreStats } from "@/api/store/useGetStoreStats";
import StatsCardSkeleton from "@/components/skeletons/StatsCardSkeleton";
import StatsCardsContainer from "@/components/statsCard/StatsCardsContainer";

export function StatsCards() {
  const { data, isLoading } = useGetStoreStats();
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
        title="Total Borrowers"
        value={data?.totalBorrowers}
        icon={UsersIcon}
      />
      <StatsCard
        title="Outstanding Amount"
        value={data?.totalOutstanding}
        isCurrency
        icon={DollarSignIcon}
        variant="destructive"
      />
      <StatsCard
        title="Monthly Revenue"
        value={data?.monthlyRevenue}
        isCurrency
        icon={TrendingUpIcon}
        variant="success"
      />
      <StatsCard
        title="Items Lent"
        value={data?.totalItemsLent}
        icon={ShoppingCartIcon}
      />
    </StatsCardsContainer>
  );
}
