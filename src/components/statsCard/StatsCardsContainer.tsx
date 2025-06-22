import type { PropsWithChildren } from 'react';

export default function StatsCardsContainer({ children }: PropsWithChildren) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      {children}
    </div>
  );
}